"use client";

import { useState, useRef, useEffect } from "react";
import FaultyTerminal from "@/components/background/FaultyTerminal";
import FisheyeCursor from "@/components/cursor/FisheyeCursor";
import CustomCursor from "@/components/cursor/CustomCursor";
import NoiseOverlay from "@/components/background/NoiseOverlay";
import GlitchText from "@/components/effects/GlitchText";
import { Github, Mail, ArrowUpRight } from "lucide-react";

const EMAIL = "prajwalbasnet0219@gmail.com";
const GITHUB = "https://github.com/PrajwalBasnet0219";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [shake, setShake] = useState(0);
  const [glitchTrigger, setGlitchTrigger] = useState(0);
  const [typeCount, setTypeCount] = useState(0);
  const [error, setError] = useState("");
  const typingTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (typingTimerRef.current) clearTimeout(typingTimerRef.current);
    };
  }, []);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const hasBlank =
      !form.name.trim() || !form.email.trim() || !form.message.trim();
    if (hasBlank) {
      setGlitchTrigger((g) => g + 1);
      setError("TRANSMISSION_FAILED — ALL FIELDS REQUIRED");
      return;
    }
    setError("");
    const subject = encodeURIComponent(`Portfolio contact from ${form.name}`);
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name} (${form.email})`
    );
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
    setSent(true);
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
      {/* Colored, blurred panel over the FaultyTerminal background — the
          terminal stays as the base layer, the section content sits sharp
          above this frosted glass layer. */}
      <div className="fixed inset-0 z-[1] pointer-events-none bg-void/60 backdrop-blur-md" />
      <div className="fixed inset-0 z-[1] pointer-events-none scanline" />

      <CustomCursor />
      <NoiseOverlay />

      <div className="relative z-10 pl-20 md:pl-24 lg:pl-28">
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
              <div className="border border-fog/30 p-6">
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

              <div className="border border-fog/30 p-6">
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

              <p className="text-sm text-fog/60 leading-relaxed tracking-wider font-mono">
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
                <label
                  htmlFor="message"
                  className="block text-xs tracking-[0.3em] text-mist uppercase mb-3"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  value={form.message}
                  onChange={(e) => {
                    setForm((f) => ({ ...f, message: e.target.value }));
                    handleTyping();
                  }}
                  className="w-full bg-transparent border border-fog/30 px-4 py-3 text-pure tracking-wider outline-none focus:border-pure/60 transition-colors duration-300 resize-none"
                  placeholder="Your transmission to the void..."
                  data-cursor-hover
                />
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

              <button
                type="submit"
                className="inline-flex items-center gap-3 px-8 py-4 border border-pure/30 text-pure tracking-[0.2em] text-sm uppercase hover:bg-pure hover:text-void transition-all duration-500"
                data-cursor-hover
              >
                <Mail size={16} />
                <span>{sent ? "Transmission Sent" : "Transmit"}</span>
                <ArrowUpRight size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}