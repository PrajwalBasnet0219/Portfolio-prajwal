"use client";

import { useEffect, useRef, useCallback } from "react";
import gsap from "gsap";
import GlitchText from "../effects/GlitchText";

const GLITCH_CHARS = "▓▒░█▄▀■□▪▫◊◦●○◐◑◒◓◔◕◖◗◘◙◚◛◜◝◞◟◠◡◢◣◤◥◦◧◨◩◪◫◬◭◮◯";

const NAMES = ["PRAJWAL BASNET", "प्रज्वल बस्नेत"];

function HighlightWord({ children }: { children: string }) {
  return (
    <span className="inline-block font-medium text-[#a78bfa]">{children}</span>
  );
}

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);
  const glitchLinesRef = useRef<HTMLDivElement>(null);

  const glitchTransition = useCallback((targetName: string) => {
    if (!nameRef.current) return;
    const el = nameRef.current;
    let iteration = 0;
    const totalIterations = 20;

    const interval = setInterval(() => {
      const progress = iteration / totalIterations;

      el.innerText = targetName
        .split("")
        .map((char, index) => {
          if (char === " ") return " ";
          if (index < progress * targetName.length) {
            return targetName[index];
          }
          return GLITCH_CHARS[Math.floor(Math.random() * GLITCH_CHARS.length)];
        })
        .join("");

      iteration++;

      if (iteration > totalIterations) {
        clearInterval(interval);
        el.innerText = targetName;
      }
    }, 50);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const current = nameRef.current?.innerText || NAMES[0];
      const nextName = current === NAMES[0] ? NAMES[1] : NAMES[0];
      glitchTransition(nextName);
    }, 10000);

    return () => clearInterval(interval);
  }, [glitchTransition]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        leftRef.current,
        { opacity: 0, x: -40 },
        { opacity: 1, x: 0, duration: 1.2, ease: "power3.out", delay: 0.3 }
      );

      gsap.fromTo(
        rightRef.current,
        { opacity: 0, x: 40 },
        { opacity: 1, x: 0, duration: 1.2, ease: "power3.out", delay: 0.6 }
      );

      const lines = glitchLinesRef.current?.querySelectorAll(".glitch-line");
      lines?.forEach((line, i) => {
        gsap.fromTo(
          line,
          { scaleX: 0, opacity: 0 },
          {
            scaleX: 1,
            opacity: 1,
            duration: 0.6,
            ease: "power3.out",
            delay: 0.8 + i * 0.12,
            transformOrigin: "left center",
          }
        );
      });

      gsap.fromTo(
        scrollIndicatorRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.8, delay: 2 }
      );

      gsap.to(scrollIndicatorRef.current, {
        y: 10,
        duration: 1.5,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        delay: 2,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative z-10 min-h-screen flex flex-col items-center justify-center overflow-hidden pt-16"
    >


      {/* Glitch lines */}
      <div ref={glitchLinesRef} className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="glitch-line absolute top-[20%] left-0 w-[40%] h-px bg-pure/10" />
        <div className="glitch-line absolute top-[35%] right-0 w-[30%] h-px bg-pure/15" />
        <div className="glitch-line absolute top-[55%] left-[10%] w-[25%] h-px" style={{ background: "rgba(255,255,255,0.08)" }} />
        <div className="glitch-line absolute top-[70%] right-[15%] w-[35%] h-px" style={{ background: "rgba(255,255,255,0.12)" }} />
        <div className="glitch-line absolute top-[85%] left-[5%] w-[20%] h-px bg-pure/10" />
        <div className="glitch-line absolute top-0 left-[20%] w-px h-[30%] bg-pure/5" />
        <div className="glitch-line absolute top-[40%] right-[25%] w-px h-[25%] bg-pure/8" />
        <div className="glitch-line absolute bottom-[10%] left-[60%] w-px h-[20%] bg-pure/5" />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${(i * 8.3) % 100}%`,
              animation: `float-up ${10 + (i % 5) * 3}s linear infinite`,
              animationDelay: `${(i % 4) * 2}s`,
              width: `${1 + (i % 2)}px`,
              height: `${1 + (i % 2)}px`,
              opacity: 0.05 + (i % 3) * 0.03,
            }}
          />
        ))}
      </div>

      {/* Main content - LEFT / RIGHT split */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center lg:items-center justify-center w-full max-w-7xl px-6 md:px-10 gap-10 lg:gap-16">
        {/* LEFT: Hi I'm + Prajwal Basnet */}
        <div
          ref={leftRef}
          className="flex flex-col items-center lg:items-start text-center lg:text-left opacity-0 flex-1 w-full lg:max-w-[60%]"
        >
          <p className="text-lg md:text-xl tracking-[0.4em] text-bone uppercase mb-3 font-light">
            Hi, I&apos;m
          </p>

          <h1
            ref={nameRef}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] xl:text-8xl font-light tracking-[0.14em] text-pure uppercase leading-none overflow-hidden"
            style={{ fontFamily: "'Courier New', monospace", minHeight: "1.15em" }}
          >
            {NAMES[0]}
          </h1>

          <div className="mt-6 flex items-center gap-3 lg:justify-start justify-center">
            <div className="w-12 h-px bg-pure/30" />
            <div className="w-6 h-px bg-pure/15" />
          </div>

          <p className="mt-5 text-xs md:text-sm tracking-[0.3em] text-bone uppercase">
            Based in Kathmandu, Nepal
          </p>
        </div>

        {/* RIGHT: Short bio - contained so glitch doesn't break layout */}
        <div
          ref={rightRef}
          className="opacity-0 w-full lg:max-w-[440px] flex-shrink-0"
        >
          <div className="relative overflow-hidden rounded-2xl bg-ghost/30 border border-pure/10 backdrop-blur-md p-6 md:p-8">
            {/* subtle top accent */}
            <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-pure/15 to-transparent" />
            <p className="text-[11px] tracking-[0.32em] text-bone/70 uppercase mb-3 font-mono">
              — ABOUT
            </p>
            <p className="text-base md:text-[17px] leading-relaxed text-pure font-light">
              <HighlightWord>Software Engineer</HighlightWord> crafting modern, responsive web experiences.
              Passionate about <HighlightWord>web development</HighlightWord>, design, and{" "}
              <HighlightWord>video editing</HighlightWord> — blending clean code with creative visuals.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-bone">
              Fast, functional, and refined — from concept to final cut.
            </p>
            <div className="mt-6 flex items-center gap-2 text-[10px] tracking-[0.2em] text-mist uppercase">
              <span className="w-1.5 h-1.5 bg-pure/60 rounded-full animate-pulse" />
              Available for new projects
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        ref={scrollIndicatorRef}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-0 z-10"
      >
        <span className="text-xs tracking-[0.3em] text-bone uppercase">
          Descend
        </span>
        <div className="w-px h-8 bg-gradient-to-b from-bone to-transparent" />
      </div>

      {/* Corner frames */}
      <div className="absolute top-20 left-8 w-16 h-16 border-l border-t border-pure/15" />
      <div className="absolute top-20 right-8 w-16 h-16 border-r border-t border-pure/15" />
      <div className="absolute bottom-8 left-8 w-16 h-16 border-l border-b border-pure/15" />
      <div className="absolute bottom-8 right-8 w-16 h-16 border-r border-b border-pure/15" />
    </section>
  );
}
