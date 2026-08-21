"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Code2,
  Figma,
  Palette,
  FileCode,
  Video,
} from "lucide-react";
import GlitchText from "../effects/GlitchText";

gsap.registerPlugin(ScrollTrigger);

const skills = [
  {
    name: "React / Next.js",
    desc: "Building fast and modern websites.",
    icon: Code2,
  },
  {
    name: "TypeScript",
    desc: "Writing clean and reliable code.",
    icon: FileCode,
  },
  {
    name: "Tailwind CSS",
    desc: "Styling responsive sites quickly.",
    icon: Palette,
  },
  {
    name: "Figma",
    desc: "Designing clean UI layouts.",
    icon: Figma,
  },
  {
    name: "Video Editing",
    desc: "Editing engaging videos with CapCut.",
    icon: Video,
  },
];

const experiences = [
  {
    year: "2025 — 2026",
    role: "Video Editor & Graphic Designer",
    company: "Network Education Academy",
    desc: "Edited videos and designed graphics for educational content.",
  },
  {
    year: "2024 — 2024",
    role: "Web Designer Training",
    company: "Broadway Infosys",
    desc: "Completed hands-on training in modern web design and development.",
  },
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const expRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, x: -100 },
        {
          opacity: 1,
          x: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      const skillCards = skillsRef.current?.querySelectorAll(".skill-card");
      skillCards?.forEach((card, i) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 30, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 90%",
              toggleActions: "play none none reverse",
            },
            delay: (i % 3) * 0.1,
          }
        );
      });

      const expItems = expRef.current?.querySelectorAll(".exp-item");
      expItems?.forEach((item, i) => {
        gsap.fromTo(
          item,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
            delay: i * 0.15,
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative z-10 min-h-screen py-32 px-6 md:px-16 lg:px-24 bg-void/10 backdrop-blur-sm"
    >
      <div className="section-divider mb-24" />

      <div className="max-w-7xl mx-auto">
        <div className="flex items-start justify-between mb-16">
          <div>
            <span className="text-xs tracking-[0.5em] text-bone uppercase mb-4 block">
              <GlitchText text="01 — About" as="span" intensity="low" trigger="scroll" />
            </span>
            <h2
              ref={headingRef}
              className="text-5xl md:text-7xl font-light tracking-wider text-pure"
            >
              <GlitchText text="Skills & Expertise" as="span" intensity="medium" trigger="scroll" />
            </h2>
          </div>

          <div className="hidden lg:block text-right">
            <p className="text-[10px] tracking-[0.3em] text-bone/60 uppercase font-mono">
              SYS.READY
            </p>
            <p className="text-[10px] tracking-[0.3em] text-bone/40 uppercase font-mono mt-1">
              PROFILE_LOADED
            </p>
          </div>
        </div>

        {/* Skills - 3x3 Grid - FIRST */}
        <div ref={skillsRef} className="mb-20">
          <h3 className="text-sm tracking-[0.3em] text-bone uppercase mb-8">
            <GlitchText text="Skills" as="span" intensity="low" trigger="scroll" />
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="skill-card group relative p-6 bg-transparent border border-pure/15 hover:border-pure/30 transition-all duration-300 hover:bg-pure/[0.04] rounded-2xl overflow-hidden backdrop-blur-sm"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 flex items-center justify-center bg-pure/5 border border-pure/10 group-hover:bg-pure/10 group-hover:border-pure/20 transition-colors duration-300 rounded-xl">
                    <skill.icon size={18} className="text-pure" />
                  </div>
                  <h4 className="text-sm md:text-base font-medium text-pure tracking-wide">
                    {skill.name}
                  </h4>
                </div>
                <p className="text-sm leading-relaxed text-bone">
                  {skill.desc}
                </p>
                {/* subtle corner accent */}
                <div className="absolute top-0 right-0 w-3 h-3 border-r border-t border-pure/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>

        {/* Experience - good box design below */}
        <div ref={expRef}>
          <h3 className="text-sm tracking-[0.3em] text-bone uppercase mb-8">
            <GlitchText text="Experience" as="span" intensity="low" trigger="scroll" />
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {experiences.map((exp) => (
              <div
                key={exp.company}
                className="exp-item group relative p-8 bg-transparent border border-pure/15 hover:border-pure/30 transition-all duration-300 hover:bg-pure/[0.04] rounded-2xl overflow-hidden backdrop-blur-sm"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-2 h-2 bg-pure mt-2 flex-shrink-0" />
                  <span className="text-xs tracking-[0.2em] text-bone font-mono bg-pure/5 px-3 py-1.5 border border-pure/10">
                    {exp.year}
                  </span>
                </div>
                <h4 className="text-lg md:text-xl font-light text-pure mb-2 tracking-wide">
                  {exp.role}
                </h4>
                <p className="text-sm tracking-[0.15em] text-bone uppercase mb-3">
                  {exp.company}
                </p>
                <p className="text-sm leading-relaxed text-ash">
                  {exp.desc}
                </p>
                <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-pure/20 via-pure/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
