import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

// POST /api/contact — sends the message (+ optional images) directly to
// prajwalbasnet0219@gmail.com without opening a mail client.
// Accepts either JSON {name,email,message} or multipart FormData
// with fields name,email,message(HTML),plainMessage and files under "images".
export async function POST(req: NextRequest) {
  try {
    const contentType = req.headers.get("content-type") || "";
    let name = "";
    let email = "";
    let messageHtml = "";
    let plainMessage = "";
    const attachments: { filename: string; content: Buffer; contentType: string }[] = [];

    if (contentType.includes("multipart/form-data")) {
      const fd = await req.formData();
      name = (fd.get("name") as string) || "";
      email = (fd.get("email") as string) || "";
      messageHtml = (fd.get("message") as string) || "";
      plainMessage = (fd.get("plainMessage") as string) || "";

      const files = fd.getAll("images");
      for (const entry of files) {
        if (entry instanceof File && entry.size > 0) {
          if (!entry.type.startsWith("image/")) continue;
          if (entry.size > 5 * 1024 * 1024) continue; // 5MB per image
          const buffer = Buffer.from(await entry.arrayBuffer());
          attachments.push({
            filename: entry.name || `image-${attachments.length + 1}.png`,
            content: buffer,
            contentType: entry.type,
          });
        }
      }
      // Limit to 3 images
      if (attachments.length > 3) attachments.length = 3;
    } else {
      const body = await req.json();
      name = body.name || "";
      email = body.email || "";
      messageHtml = body.message || "";
      plainMessage = body.plainMessage || stripHtml(messageHtml) || messageHtml || "";
    }

    // Fallback plain text from HTML if needed
    if (!plainMessage && messageHtml) plainMessage = stripHtml(messageHtml);
    const messageForText = plainMessage || messageHtml || "";

    if (!name?.trim() || !email?.trim() || !plainMessage?.trim()) {
      return NextResponse.json(
        { error: "ALL FIELDS REQUIRED" },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      return NextResponse.json(
        { error: "INVALID EMAIL ADDRESS" },
        { status: 400 }
      );
    }

    const toEmail = process.env.CONTACT_TO_EMAIL || "prajwalbasnet0219@gmail.com";
    const gmailUser = process.env.GMAIL_USER || process.env.EMAIL_USER || toEmail;
    const gmailPass = process.env.GMAIL_APP_PASSWORD || process.env.EMAIL_PASS || process.env.GMAIL_PASSWORD;

    if (!gmailPass) {
      console.error(
        "[contact] GMAIL_APP_PASSWORD not set. Create a Gmail App Password and add to .env.local:\nGMAIL_USER=prajwalbasnet0219@gmail.com\nGMAIL_APP_PASSWORD=your16charapppassword\nCONTACT_TO_EMAIL=prajwalbasnet0219@gmail.com"
      );
      return NextResponse.json(
        {
          error:
            "EMAIL_SERVICE_NOT_CONFIGURED — Add GMAIL_APP_PASSWORD to .env.local (see terminal)",
        },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: gmailUser,
        pass: gmailPass.replace(/\s/g, ""),
      },
    });

    await transporter.verify();

    // Build HTML — if the client sent rich HTML (from the formatting toolbar),
    // use it directly; otherwise escape plain text.
    const isRichHtml = /<(strong|em|u|span|b|i|font|div|br|p)[\s>]/i.test(messageHtml);
    const htmlBody = isRichHtml
      ? messageHtml
      : `<p style="white-space: pre-wrap;">${escapeHtml(plainMessage)}</p>`;

    const info = await transporter.sendMail({
      from: `"Portfolio Contact" <${gmailUser}>`,
      to: toEmail,
      replyTo: `${name} <${email}>`,
      subject: `Portfolio contact from ${name}`,
      text: `${plainMessage}\n\n— ${name} (${email})`,
      html: `
        <div style="font-family: monospace; line-height: 1.6; color: #222;">
          ${htmlBody}
          <hr style="border:none; border-top:1px solid #ddd; margin:16px 0;" />
          <p><strong>From:</strong> ${escapeHtml(name)} &lt;${escapeHtml(email)}&gt;</p>
        </div>
      `,
      attachments: attachments.length ? attachments : undefined,
    });

    console.log(
      "[contact] sent:",
      info.messageId,
      "to",
      toEmail,
      attachments.length ? `with ${attachments.length} image(s)` : ""
    );

    return NextResponse.json({ ok: true, id: info.messageId });
  } catch (err: unknown) {
    console.error("[contact] error", err);
    const message =
      err instanceof Error ? err.message : "TRANSMISSION_FAILED — TRY AGAIN";
    if (message.includes("Invalid login") || message.includes("Username and Password not accepted")) {
      return NextResponse.json(
        {
          error:
            "GMAIL_AUTH_FAILED — Check GMAIL_USER / GMAIL_APP_PASSWORD (use a 16-char App Password, not your normal Gmail password)",
        },
        { status: 500 }
      );
    }
    return NextResponse.json(
      { error: message || "TRANSMISSION_FAILED — TRY AGAIN" },
      { status: 500 }
    );
  }
}

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function stripHtml(html: string) {
  return html
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<\/p>/gi, "\n")
    .replace(/<[^>]*>/g, "")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .trim();
}
