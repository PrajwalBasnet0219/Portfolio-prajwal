"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, Folder } from "lucide-react";
import GlitchText from "../effects/GlitchText";
import PipeMarqueeBackground from "../background/PipeMarqueeBackground";

gsap.registerPlugin(ScrollTrigger);

interface ProjectProps {
  onProjectClick?: () => void;
}

export default function Project({ onProjectClick }: ProjectProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 80 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="project"
      className="relative z-10 min-h-[70vh] py-32 px-6 md:px-16 lg:px-24 overflow-hidden flex items-center"
    >
      {/* Pipe 3D marquee background — no fisheye */}
      <PipeMarqueeBackground count={8} radius={185} rotateSpeed={32} glitchIntensity="strong" className="absolute inset-0 z-0" />

      {/* Subtle dim — no background blur, reduced for perf */}
      <div className="absolute inset-0 z-[1] bg-void/22 pointer-events-none" />
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-void/12 via-transparent to-void/18 pointer-events-none" />
      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-void/8 via-transparent to-void/8 pointer-events-none" />

      <div className="section-divider absolute top-0 left-0 right-0 z-10" />

      <div ref={contentRef} className="relative z-10 max-w-3xl mx-auto w-full text-center">
        <span
          className="text-xs tracking-[0.5em] text-white uppercase mb-8 block"
          style={{ textShadow: "0 2px 18px rgba(0,0,0,0.95), 0 0 30px rgba(0,0,0,0.7)" }}
        >
          <GlitchText text="02 — Work" as="span" intensity="low" trigger="scroll" />
        </span>
        <h2
          className="text-5xl md:text-6xl lg:text-7xl font-light tracking-wider text-white mb-6 mix-blend-difference"
          style={{ textShadow: "0 4px 32px rgba(0,0,0,0.95), 0 2px 12px rgba(0,0,0,0.9), 0 0 48px rgba(0,0,0,0.6)" }}
        >
          <GlitchText text="View Project" as="span" intensity="medium" trigger="scroll" />
        </h2>
        <p
          className="text-base md:text-lg text-white max-w-xl mx-auto mb-10 leading-relaxed"
          style={{ textShadow: "0 2px 20px rgba(0,0,0,0.9), 0 1px 8px rgba(0,0,0,0.85)" }}
        >
          A selected project that shows my work in web development and design — built with clean code, creative thinking, and attention to detail.
        </p>
        <button
          onClick={() => onProjectClick?.()}
          className="inline-flex items-center gap-3 px-10 py-5 border border-white/40 text-white tracking-[0.2em] text-sm uppercase hover:bg-white hover:text-black transition-all duration-500 group rounded-full shadow-[0_4px_24px_rgba(0,0,0,0.6),0_2px_8px_rgba(0,0,0,0.8)]"
          style={{ textShadow: "0 1px 12px rgba(0,0,0,0.9)" }}
          data-cursor-hover
        >
          <Folder size={18} />
          <GlitchText text="Enter Project" as="span" intensity="low" trigger="hover" />
          <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
        </button>
        <div className="mt-10">
          <p className="text-5xl font-mono text-white/60 tracking-wider mix-blend-difference" style={{ textShadow: "0 2px 18px rgba(0,0,0,0.9)" }}>
            <GlitchText text="0x01" as="span" intensity="high" trigger="always" />
          </p>
        </div>
      </div>
    </section>
  );
}
