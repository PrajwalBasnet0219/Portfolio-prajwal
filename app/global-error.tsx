"use client";

/**
 * Last-resort crash screen. Deliberately dependency-free (no WebGL, no
 * animation libs, no context) so it can render even when the thing that
 * broke was one of those.
 */
export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body
        style={{
          background: "#000",
          color: "#ddd",
          fontFamily: "'Courier New', monospace",
          margin: 0,
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "24px",
        }}
      >
        <div style={{ textAlign: "center", maxWidth: "480px" }}>
          <p style={{ fontSize: "12px", letterSpacing: "0.5em", color: "#666" }}>
            SYSTEM FAULT
          </p>
          <h1
            style={{
              fontSize: "clamp(2rem, 8vw, 3.5rem)",
              fontWeight: 300,
              letterSpacing: "0.1em",
              margin: "16px 0",
            }}
          >
            SEG_FAULT
          </h1>
          <p style={{ fontSize: "14px", color: "#888", lineHeight: 1.7 }}>
            The void rejected this render. Nothing was lost — retry the
            segment or return home.
          </p>
          <div
            style={{
              marginTop: "32px",
              display: "flex",
              gap: "12px",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <button
              onClick={() => reset()}
              style={{
                background: "#ddd",
                color: "#000",
                border: "none",
                padding: "12px 28px",
                fontFamily: "inherit",
                fontSize: "12px",
                letterSpacing: "0.2em",
                cursor: "pointer",
                borderRadius: "999px",
              }}
            >
              RETRY
            </button>
            <a
              href="/"
              style={{
                color: "#ddd",
                border: "1px solid rgba(221,221,221,0.3)",
                padding: "12px 28px",
                fontSize: "12px",
                letterSpacing: "0.2em",
                textDecoration: "none",
                borderRadius: "999px",
              }}
            >
              HOME
            </a>
          </div>
        </div>
      </body>
    </html>
  );
}
