"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { 
  Clapperboard, 
  Figma, 
  Palette, 
  Code2, 
  FileCode, 
  Server,
  Video,
  Layers,
  Wand2,
  Monitor
} from "lucide-react";
import GlitchText from "../effects/GlitchText";

gsap.registerPlugin(ScrollTrigger);

const skills = [
  { name: "React / Next.js", level: 60, icon: Code2 },
  { name: "Linux/Terminal", level: 80, icon: Code2 },
  { name: "TypeScript", level: 65, icon: FileCode },
  { name: "Video Editing", level: 95, icon: Video },
  { name: "Figma", level: 92, icon: Figma },
  { name: "Node.js", level: 40, icon: Server },
  { name: "UI/UX Design", level: 88, icon: Layers },
];

const experiences = [
  {
    year: "2025 — 2026",
    role: "Video Editor & Graphic Designer",
    company: "Network Education Academy",
  },
  {
    year: "2024 — 2024",
    role: "Web Designer Training",
    company: "Broadway Infosys",
  },
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const bioRef = useRef<HTMLDivElement>(null);
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
      

      gsap.fromTo(
        bioRef.current,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: bioRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      const skillBars = skillsRef.current?.querySelectorAll(".skill-bar");
      skillBars?.forEach((bar, i) => {
        const fill = bar.querySelector(".skill-fill");
        const level = parseInt(bar.getAttribute("data-level") || "0");

        gsap.fromTo(
          fill,
          { width: "0%" },
          {
            width: `${level}%`,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: bar,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
            delay: i * 0.1,
          }
        );
      });

      const expItems = expRef.current?.querySelectorAll(".exp-item");
      expItems?.forEach((item, i) => {
        gsap.fromTo(
          item,
          { opacity: 0, x: 50 },
          {
            opacity: 1,
            x: 0,
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
      className="relative z-10 min-h-screen py-32 px-6 md:px-16 lg:px-24 pl-20 md:pl-24 lg:pl-28 bg-void/40 backdrop-blur-lg"
    >
      <div className="section-divider mb-24" />

      <div className="max-w-7xl mx-auto">
        <div className="flex items-start justify-between mb-20">
          <div>
            <span className="text-xs tracking-[0.5em] text-mist uppercase mb-4 block">
              <GlitchText text="01 — About" as="span" intensity="low" trigger="scroll" />
            </span>
            <h2
              ref={headingRef}
              className="text-5xl md:text-7xl font-light tracking-wider text-pure"
            >
              <GlitchText text="Prajwal Basnet" as="span" intensity="medium" trigger="scroll" />
            </h2>
          </div>

          <div className="hidden lg:block text-right">
            <p className="text-[10px] tracking-[0.3em] text-fog/30 uppercase font-mono">
              <GlitchText text="SYS.ERR_0x4A" as="span" intensity="high" trigger="always" />
            </p>
            <p className="text-[10px] tracking-[0.3em] text-fog/20 uppercase font-mono mt-1">
              <GlitchText text="DATA_CORRUPT" as="span" intensity="medium" trigger="always" />
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div ref={bioRef}>
            <p className="text-lg md:text-xl leading-relaxed text-bone mb-8">
              I am a creative developer who exists in the space between design and code. 
              Like static on a dead channel, I corrupt the digital landscape 
              and craft experiences that glitch in the mind long after the screen fades to black.
            </p>
            <p className="text-base leading-relaxed text-ash mb-8">
              With experience in video editing (CapCut) and graphic design (Figma), I specialize 
              in creating dark, atmospheric visuals that blur the line between art and technology. 
              Every pixel is intentional. Every cut tells a story.
            </p>
            <p className="text-base leading-relaxed text-ash">
              When I am not editing, you will find me exploring generative art, experimenting 
              with motion graphics, or wandering through abandoned places with a camera in hand.
            </p>

            <div className="grid grid-cols-3 gap-8 mt-16">
              {[
                { number: "1+", label: "Years" },
                { number: "1", label: "Project" },
                { number: "∞", label: "Ideas" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-3xl md:text-4xl font-light text-pure mb-2">
                    {stat.number}
                  </div>
                  <div className="text-xs tracking-[0.3em] text-mist uppercase">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-16">
            <div ref={skillsRef}>
              <h3 className="text-sm tracking-[0.3em] text-mist uppercase mb-8">
                <GlitchText text="Capabilities" as="span" intensity="low" trigger="scroll" />
              </h3>
              <div className="space-y-6">
                {skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="skill-bar group"
                    data-level={skill.level}
                  >
                    <div className="flex justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <skill.icon size={14} className="text-mist group-hover:text-pure transition-colors duration-300" />
                        <span className="text-sm text-bone">{skill.name}</span>
                      </div>
                      <span className="text-xs text-mist">{skill.level}%</span>
                    </div>
                    <div className="h-px bg-fog/30 relative overflow-hidden">
                      <div
                        className="skill-fill absolute top-0 left-0 h-full bg-pure"
                        style={{ width: "0%" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div ref={expRef}>
              <h3 className="text-sm tracking-[0.3em] text-mist uppercase mb-8">
                <GlitchText text="Experience" as="span" intensity="low" trigger="scroll" />
              </h3>
              <div className="space-y-6">
                {experiences.map((exp) => (
                  <div
                    key={exp.company}
                    className="exp-item group flex items-start justify-between py-4 border-b border-fog/20 hover:border-fog/50 transition-colors duration-300"
                  >
                    <div>
                      <div className="text-pure text-base mb-1">{exp.role}</div>
                      <div className="text-mist text-sm">{exp.company}</div>
                    </div>
                    <div className="text-ash text-xs tracking-wider">
                      {exp.year}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
