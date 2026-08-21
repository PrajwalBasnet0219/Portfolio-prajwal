"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, Folder } from "lucide-react";
import GlitchText from "../effects/GlitchText";
import SnakeGame from "./SnakeGame";
import SpaceWarGame from "./SpaceWarGame";

gsap.registerPlugin(ScrollTrigger);

interface ProjectProps {
  onProjectClick?: () => void;
}

export default function Project({ onProjectClick }: ProjectProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const gameRef = useRef<HTMLDivElement>(null);
  const [activeGame, setActiveGame] = useState<"snake" | "space">("snake");

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
      gsap.fromTo(
        gameRef.current,
        { opacity: 0, scale: 0.96, y: 20 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          delay: 0.3,
          scrollTrigger: {
            trigger: gameRef.current,
            start: "top 85%",
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
      className="relative z-10 min-h-[70vh] py-32 px-6 md:px-16 lg:px-24 bg-void/40 backdrop-blur-lg flex items-center"
    >
      <div className="section-divider absolute top-0 left-0 right-0" />

      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* LEFT - Enter Project */}
          <div ref={contentRef} className="text-center lg:text-left">
            <span className="text-xs tracking-[0.5em] text-bone uppercase mb-8 block">
              <GlitchText text="02 — Work" as="span" intensity="low" trigger="scroll" />
            </span>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-wider text-pure mb-6">
              <GlitchText text="View Project" as="span" intensity="medium" trigger="scroll" />
            </h2>
            <p className="text-base md:text-lg text-bone max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed">
              A selected project that shows my work in web development and design — built with clean code, creative thinking, and attention to detail.
            </p>
            <button
              onClick={() => onProjectClick?.()}
              className="inline-flex items-center gap-3 px-10 py-5 border border-pure/30 text-pure tracking-[0.2em] text-sm uppercase hover:bg-pure hover:text-void transition-all duration-500 group rounded-full"
              data-cursor-hover
            >
              <Folder size={18} />
              <GlitchText text="Enter Project" as="span" intensity="low" trigger="hover" />
              <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
            </button>
            <div className="mt-10 hidden lg:block">
              <p className="text-5xl font-mono text-pure/30 tracking-wider">
                <GlitchText text="0x01" as="span" intensity="high" trigger="always" />
              </p>
            </div>
          </div>

          {/* RIGHT - Arcade with Snake + Space War */}
          <div ref={gameRef} className="flex flex-col items-center">
            <div className="w-full max-w-[360px] p-5 rounded-2xl bg-ghost/20 border border-pure/10 backdrop-blur-sm">
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] tracking-[0.3em] text-bone uppercase font-mono">Mini Arcade</span>
                <div className="flex items-center gap-1.5 p-1 rounded-full bg-void/60 border border-pure/10">
                  <button
                    onClick={() => setActiveGame("snake")}
                    className={`px-3 py-1 text-[10px] tracking-widest uppercase rounded-full transition-colors ${activeGame === "snake" ? "bg-pure text-void" : "text-bone hover:text-pure"}`}
                  >
                    Snake
                  </button>
                  <button
                    onClick={() => setActiveGame("space")}
                    className={`px-3 py-1 text-[10px] tracking-widest uppercase rounded-full transition-colors ${activeGame === "space" ? "bg-pure text-void" : "text-bone hover:text-pure"}`}
                  >
                    Space War
                  </button>
                </div>
              </div>
              {activeGame === "snake" ? <SnakeGame /> : <SpaceWarGame />}
            </div>
            <p className="text-xs tracking-widest text-bone font-mono mt-3 text-center">Arrows move game — page won&apos;t scroll</p>
          </div>
        </div>
      </div>
    </section>
  );
}
