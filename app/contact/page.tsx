"use client";

import { useState, useRef, useEffect } from "react";
import FaultyTerminal from "@/components/background/FaultyTerminal";
import FisheyeCursor from "@/components/cursor/FisheyeCursor";
import CustomCursor from "@/components/cursor/CustomCursor";
import NoiseOverlay from "@/components/background/NoiseOverlay";
import GlitchText from "@/components/effects/GlitchText";
import {
  Github,
  Mail,
  ArrowUpRight,
  Bold,
  Italic,
  Underline,
  Palette,
  ImagePlus,
  X,
} from "lucide-react";

const EMAIL = "prajwalbasnet0219@gmail.com";
const GITHUB = "https://github.com/PrajwalBasnet0219";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "" });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [shake, setShake] = useState(0);
  const [glitchTrigger, setGlitchTrigger] = useState(0);
  const [typeCount, setTypeCount] = useState(0);
  const [error, setError] = useState("");
  const [images, setImages] = useState<File[]>([]);
  const [imagePreviews, setImagePreviews] = useState<string[]>([]);
  const typingTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const editorRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    return () => {
      if (typingTimerRef.current) clearTimeout(typingTimerRef.current);
      imagePreviews.forEach((url) => URL.revokeObjectURL(url));
    };
  }, [imagePreviews]);

  useEffect(() => {
    // Regenerate preview URLs when images change
    const urls = images.map((f) => URL.createObjectURL(f));
    setImagePreviews((prev) => {
      prev.forEach((u) => URL.revokeObjectURL(u));
      return urls;
    });
    return () => {
      // cleanup handled by next effect run / unmount
    };
  }, [images]);

  const handleTyping = () => {
    setIsTyping(true);
    setShake(0.7);
    setTypeCount((c) => c + 1);
    if (typingTimerRef.current) clearTimeout(typingTimerRef.current);
    typingTimerRef.current = setTimeout(() => {
      setIsTyping(false);
      setShake(0);
    }, 1400);
  };

  const execFormat = (command: string, value?: string) => {
    editorRef.current?.focus();
    const sel = window.getSelection();
    if (!sel || sel.isCollapsed) return;
    const anchorIn = editorRef.current?.contains(sel.anchorNode as Node);
    const focusIn = editorRef.current?.contains(sel.focusNode as Node);
    if (!anchorIn || !focusIn) return;
    // execCommand is deprecated but still the simplest for highlighted-only formatting
    document.execCommand(command, false, value);
    handleTyping();
  };

  const handleAddImagesClick = () => fileInputRef.current?.click();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const picked = Array.from(e.target.files || []).filter((f) =>
      f.type.startsWith("image/")
    );
    if (picked.length === 0) return;
    const remaining = 3 - images.length;
    const valid = picked
      .filter((f) => f.size <= 5 * 1024 * 1024)
      .slice(0, Math.max(0, remaining));
    if (valid.length === 0) {
      setError("IMAGE_TOO_LARGE — Max 5MB per image, up to 3 images");
      setGlitchTrigger((g) => g + 1);
      e.target.value = "";
      return;
    }
    setImages((prev) => [...prev, ...valid].slice(0, 3));
    e.target.value = "";
  };

  const removeImage = (idx: number) => {
    setImages((prev) => prev.filter((_, i) => i !== idx));
  };

  const getPlainMessage = () => editorRef.current?.innerText.trim() || "";
  const getHtmlMessage = () => editorRef.current?.innerHTML || "";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (sending) return;
    const plain = getPlainMessage();
    const hasBlank = !form.name.trim() || !form.email.trim() || !plain;
    if (hasBlank) {
      setGlitchTrigger((g) => g + 1);
      setError("TRANSMISSION_FAILED — ALL FIELDS REQUIRED");
      return;
    }
    setError("");
    setSending(true);
    try {
      const fd = new FormData();
      fd.append("name", form.name);
      fd.append("email", form.email);
      fd.append("message", getHtmlMessage());
      fd.append("plainMessage", plain);
      images.forEach((file) => fd.append("images", file));

      const res = await fetch("/api/contact", {
        method: "POST",
        body: fd,
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        throw new Error(data.error || "TRANSMISSION_FAILED — TRY AGAIN");
      }
      setSent(true);
      setForm({ name: "", email: "" });
      if (editorRef.current) editorRef.current.innerHTML = "";
      setImages([]);
      setTimeout(() => setSent(false), 4000);
    } catch (err) {
      const msg =
        err instanceof Error ? err.message : "TRANSMISSION_FAILED — TRY AGAIN";
      setError(msg);
      setGlitchTrigger((g) => g + 1);
    } finally {
      setSending(false);
    }
  };

  return (
    <main className="relative min-h-screen bg-void">
      <FisheyeCursor className="fixed inset-0 z-0 pointer-events-none">
        <FaultyTerminal
          className="absolute inset-0"
          tint="#b0b0b0"
          brightness={0.6}
          scanlineIntensity={0.15}
          glitchAmount={1.6}
          flickerAmount={0.9}
          noiseAmp={1}
          curvature={0.15}
          chromaticAberration={0.002}
          dither={1}
          mouseReact={true}
          typing={isTyping}
          shake={shake}
          glitchTrigger={glitchTrigger}
          typeCount={typeCount}
        />
      </FisheyeCursor>
      <div className="fixed inset-0 z-[1] pointer-events-none bg-void/60 backdrop-blur-md" />
      <div className="fixed inset-0 z-[1] pointer-events-none scanline" />

      <CustomCursor />
      <NoiseOverlay />

      <div className="relative z-10 pt-16">
        <div className="max-w-5xl mx-auto px-6 md:px-16 py-32 min-h-screen flex flex-col justify-center">
          <div className="mb-16">
            <span className="text-xs tracking-[0.5em] text-mist uppercase mb-4 block">
              <GlitchText
                text="03 — Contact"
                as="span"
                intensity="low"
                trigger="scroll"
              />
            </span>
            <h1 className="text-5xl md:text-7xl font-light tracking-wider text-pure mb-6">
              <GlitchText
                text="Contact"
                as="span"
                intensity="medium"
                trigger="scroll"
              />
            </h1>
            <p className="text-base text-ash tracking-[0.2em] uppercase">
              Get in Touch
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div className="contact-info-card border border-fog/30 p-6 rounded-xl">
                <div className="flex items-center gap-3 mb-3">
                  <Github size={18} className="text-pure" />
                  <span className="text-xs tracking-[0.3em] text-mist uppercase">
                    GitHub
                  </span>
                </div>
                <a
                  href={GITHUB}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-lg text-pure hover:text-glow transition-colors duration-300 group"
                  data-cursor-hover
                >
                  PrajwalBasnet0219
                  <ArrowUpRight
                    size={16}
                    className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
                  />
                </a>
              </div>

              <div className="contact-info-card border border-fog/30 p-6 rounded-xl">
                <div className="flex items-center gap-3 mb-3">
                  <Mail size={18} className="text-pure" />
                  <span className="text-xs tracking-[0.3em] text-mist uppercase">
                    Email
                  </span>
                </div>
                <a
                  href={`mailto:${EMAIL}`}
                  className="inline-flex items-center gap-2 text-lg text-pure hover:text-glow transition-colors duration-300 group"
                  data-cursor-hover
                >
                  {EMAIL}
                  <ArrowUpRight
                    size={16}
                    className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
                  />
                </a>
              </div>

              <p className="text-sm text-white leading-relaxed tracking-wider font-mono" style={{ textShadow: "0 0 8px rgba(255,255,255,0.15)" }}>
                {"> sys.init('message_channel')"}
                <br />
                {"$ open_transmission --port 0219"}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-xs tracking-[0.3em] text-mist uppercase mb-3"
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  value={form.name}
                  onChange={(e) => {
                    setForm((f) => ({ ...f, name: e.target.value }));
                    handleTyping();
                  }}
                  className="w-full bg-transparent border border-fog/30 px-4 py-3 text-pure tracking-wider outline-none focus:border-pure/60 transition-colors duration-300"
                  placeholder="Your Name"
                  data-cursor-hover
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-xs tracking-[0.3em] text-mist uppercase mb-3"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={(e) => {
                    setForm((f) => ({ ...f, email: e.target.value }));
                    handleTyping();
                  }}
                  className="w-full bg-transparent border border-fog/30 px-4 py-3 text-pure tracking-wider outline-none focus:border-pure/60 transition-colors duration-300"
                  placeholder="you@example.com"
                  data-cursor-hover
                />
              </div>

              <div>
                <label className="block text-xs tracking-[0.3em] text-mist uppercase mb-3">
                  Message
                </label>

                {/* Formatting toolbar — above the editor */}
                <div className="flex flex-wrap items-center gap-2 mb-3 p-2 border border-fog/20 bg-void/40 backdrop-blur-sm">
                  <button
                    type="button"
                    onClick={() => execFormat("bold")}
                    className="w-8 h-8 inline-flex items-center justify-center border border-fog/30 text-mist hover:text-pure hover:border-pure/40 hover:bg-pure/10 transition-colors duration-200"
                    title="Bold (select text first)"
                    data-cursor-hover
                  >
                    <Bold size={14} />
                  </button>
                  <button
                    type="button"
                    onClick={() => execFormat("italic")}
                    className="w-8 h-8 inline-flex items-center justify-center border border-fog/30 text-mist hover:text-pure hover:border-pure/40 hover:bg-pure/10 transition-colors duration-200"
                    title="Italic (select text first)"
                    data-cursor-hover
                  >
                    <Italic size={14} />
                  </button>
                  <button
                    type="button"
                    onClick={() => execFormat("underline")}
                    className="w-8 h-8 inline-flex items-center justify-center border border-fog/30 text-mist hover:text-pure hover:border-pure/40 hover:bg-pure/10 transition-colors duration-200"
                    title="Underline (select text first)"
                    data-cursor-hover
                  >
                    <Underline size={14} />
                  </button>

                  <label
                    className="w-8 h-8 inline-flex items-center justify-center border border-fog/30 text-mist hover:text-pure hover:border-pure/40 hover:bg-pure/10 transition-colors duration-200 cursor-pointer relative overflow-hidden"
                    title="Text color (select text first)"
                    data-cursor-hover
                  >
                    <Palette size={14} />
                    <input
                      type="color"
                      defaultValue="#dddddd"
                      onChange={(e) => execFormat("foreColor", e.target.value)}
                      className="absolute inset-0 opacity-0 cursor-pointer"
                    />
                  </label>

                  <span className="text-[10px] tracking-[0.2em] text-fog/40 uppercase font-mono ml-1 hidden sm:inline">
                    select text → apply
                  </span>

                  <button
                    type="button"
                    onClick={handleAddImagesClick}
                    className="ml-auto inline-flex items-center gap-2 px-3 py-1.5 border border-fog/30 text-xs tracking-[0.2em] uppercase text-mist hover:text-pure hover:border-pure/40 hover:bg-pure/10 transition-colors duration-200"
                    data-cursor-hover
                  >
                    <ImagePlus size={14} />
                    Add images
                    {images.length > 0 && (
                      <span className="text-pure">({images.length}/3)</span>
                    )}
                  </button>
                </div>

                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={handleFileChange}
                  className="hidden"
                />

                {/* Editor + fixed-size previews on the right */}
                <div className="flex gap-3">
                  <div
                    ref={editorRef}
                    contentEditable
                    suppressContentEditableWarning
                    data-placeholder="Your transmission to the void... (highlight text then use the toolbar above)"
                    onInput={handleTyping}
                    className="flex-1 min-h-[160px] bg-transparent border border-fog/30 px-4 py-3 text-pure tracking-wider outline-none focus:border-pure/60 transition-colors duration-300 overflow-auto empty:before:content-[attr(data-placeholder)] empty:before:text-fog/40 empty:before:pointer-events-none"
                    style={{ maxHeight: "260px" }}
                    data-cursor-hover
                  />

                  {/* Fixed-size preview column — right of textarea, doesn't break layout */}
                  {imagePreviews.length > 0 && (
                    <div className="w-[88px] shrink-0 flex flex-col gap-2">
                      {imagePreviews.map((src, idx) => (
                        <div
                          key={`${images[idx]?.name}-${idx}`}
                          className="relative w-[88px] h-[88px] border border-fog/30 bg-void/60 overflow-hidden shrink-0"
                        >
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={src}
                            alt={`attachment ${idx + 1}`}
                            className="w-full h-full object-cover"
                          />
                          <button
                            type="button"
                            onClick={() => removeImage(idx)}
                            className="absolute top-1 right-1 w-5 h-5 inline-flex items-center justify-center bg-void/80 border border-fog/30 text-pure hover:bg-red-500/80 hover:border-red-500 hover:text-white transition-colors duration-200"
                            title="Remove image"
                            data-cursor-hover
                          >
                            <X size={10} />
                          </button>
                        </div>
                      ))}
                      <p className="text-[10px] tracking-[0.15em] text-fog/40 uppercase font-mono text-center">
                        {images.length}/3
                      </p>
                    </div>
                  )}
                </div>

                <p className="mt-2 text-[10px] tracking-[0.15em] text-fog/30 font-mono">
                  Highlight text to apply formatting · Images are optional · Fixed 88×88 preview
                </p>
              </div>

              {error && (
                <p
                  className="text-xs tracking-[0.3em] uppercase font-mono"
                  style={{
                    color: "#ff4444",
                    textShadow: "0 0 10px rgba(255,40,40,0.6)",
                  }}
                >
                  {error}
                </p>
              )}

              {sent && (
                <p
                  className="text-xs tracking-[0.3em] uppercase font-mono"
                  style={{
                    color: "#4ade80",
                    textShadow: "0 0 10px rgba(74,222,128,0.5)",
                  }}
                >
                  TRANSMISSION_SENT — MESSAGE DELIVERED
                </p>
              )}

              <button
                type="submit"
                disabled={sending}
                className="inline-flex items-center gap-3 px-8 py-4 border border-pure/30 text-pure tracking-[0.2em] text-sm uppercase hover:bg-pure hover:text-void transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed"
                data-cursor-hover
              >
                <Mail size={16} />
                <span>
                  {sending
                    ? "Transmitting..."
                    : sent
                      ? "Transmission Sent"
                      : "Transmit"}
                </span>
                <ArrowUpRight size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
