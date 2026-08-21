"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, Folder } from "lucide-react";
import GlitchText from "../effects/GlitchText";

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
      className="relative z-10 min-h-[70vh] py-32 px-6 md:px-16 lg:px-24 pl-20 md:pl-24 lg:pl-28 bg-void/40 backdrop-blur-lg flex items-center"
    >
      <div className="section-divider absolute top-0 left-20 right-0 md:left-24 lg:left-28" />

      <div className="max-w-7xl mx-auto w-full">
        <div ref={contentRef} className="text-center">
          <span className="text-xs tracking-[0.5em] text-mist uppercase mb-8 block">
            <GlitchText
              text="02 — Work"
              as="span"
              intensity="low"
              trigger="scroll"
            />
          </span>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-wider text-pure mb-8">
            <GlitchText
              text="View Project"
              as="span"
              intensity="medium"
              trigger="scroll"
            />
          </h2>
          <p className="text-lg text-ash max-w-xl mx-auto mb-12">
            The system holds one artifact. A single creation pulled from the
            void.
          </p>
          <button
            onClick={() => {
              onProjectClick?.();
            }}
            className="inline-flex items-center gap-3 px-10 py-5 border border-pure/30 text-pure tracking-[0.2em] text-sm uppercase hover:bg-pure hover:text-void transition-all duration-500 group"
            data-cursor-hover
          >
            <Folder size={18} />
            <GlitchText
              text="Enter Project"
              as="span"
              intensity="low"
              trigger="hover"
            />
            <ArrowUpRight
              size={18}
              className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
            />
          </button>
          <div className="mt-16">
            <p className="text-6xl md:text-8xl font-mono text-pure/40 tracking-wider">
              <GlitchText
                text="0x01"
                as="span"
                intensity="high"
                trigger="always"
              />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}