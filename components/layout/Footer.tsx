"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { useNav } from "./NavigationGate";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Mail,
  Github,
  Facebook,
  Instagram,
  ArrowUpRight,
  Folder,
  Home,
  User,
  Send,
} from "lucide-react";
import GlitchText from "../effects/GlitchText";
import ShinyText from "../effects/ShinyText";
import Strands from "../background/Strands";
import FisheyeCursor from "../cursor/FisheyeCursor";

gsap.registerPlugin(ScrollTrigger);

const EMAIL = "prajwalbasnet0219@gmail.com";

const socials = [
  { name: "GitHub", icon: Github, href: "https://github.com/PrajwalBasnet0219" },
  { name: "Facebook", icon: Facebook, href: "#" },
  { name: "Instagram", icon: Instagram, href: "#" },
];

const navLinks = [
  { label: "Home", href: "/", icon: Home },
  { label: "About Me", href: "/#about", icon: User },
  { label: "Contact", href: "/contact", icon: Send },
];

interface FooterProps {
  onProjectClick?: () => void;
}

export default function Footer({ onProjectClick }: FooterProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const columnsRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
  const { navigate } = useNav();
  const pathname = usePathname();

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
    label: string
  ) => {
    // Hash links (e.g. /#about) should scroll, not trigger loading screen
    if (href.includes("#")) return;
    if (pathname === href) {
      e.preventDefault();
      return;
    }
    e.preventDefault();
    navigate(href, label.toLowerCase());
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        columnsRef.current,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: columnsRef.current,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        nameRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: nameRef.current,
            start: "top 95%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;
    setMousePos({
      x: (e.clientX - rect.left) / rect.width,
      y: (e.clientY - rect.top) / rect.height,
    });
  };

  return (
    <footer
      ref={sectionRef}
      id="contact"
      className="relative z-10 min-h-screen flex flex-col overflow-hidden bg-void"
      onMouseMove={handleMouseMove}
    >
      {/* Strands background — wrapped in FisheyeCursor so the lens warps it
          exactly like the other page backgrounds (ColorBends, FaultyTerminal).
          The footer base is opaque (bg-void) so the global ColorBends layer
          stays hidden here — only this single lens + strands shows. */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <FisheyeCursor className="absolute inset-0 pointer-events-none" ring={false}>
          <Strands
            className="absolute inset-0"
            colors={["#dddddd", "#888888", "#3a3a3a", "#7a0e18"]}
            count={6}
            speed={0.15}
            amplitude={0.8}
            waviness={1.1}
            thickness={0.9}
            glow={2.4}
            taper={3}
            spread={1.2}
            intensity={0.4}
            saturation={0.35}
            opacity={0.45}
            scale={1.6}
            hueShift={0}
          />
        </FisheyeCursor>
        <div className="absolute inset-0 bg-void/60" />
        {/* Vertical darkening so light text stays readable over the strands. */}
        <div className="absolute inset-0 bg-gradient-to-b from-void/80 via-transparent to-void/80" />
      </div>

      <div
        className="absolute inset-0 z-[1] pointer-events-none transition-opacity duration-1000"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x * 100}% ${mousePos.y * 100}%, rgba(255,255,255,0.04), transparent 60%)`,
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto w-full flex-1 flex flex-col justify-center px-6 md:px-16 py-32">
        <div className="section-divider mb-16" />

        {/* Columns */}
        <div ref={columnsRef}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Left — tagline / fun fact */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="relative flex w-2 h-2">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-pure opacity-60 animate-ping" />
                  <span className="relative inline-flex w-2 h-2 rounded-full bg-pure" />
                </span>
                <span className="text-xs tracking-[0.3em] text-mist uppercase">
                  Open to work
                </span>
              </div>
              <p className="text-base leading-relaxed text-ash">
                Every pixel placed with intent. Every frame cut to tell a story.
              </p>
              <a
                href={`mailto:${EMAIL}`}
                className="mt-6 inline-flex items-center gap-2 text-sm tracking-[0.2em] uppercase text-pure hover:text-glow transition-colors duration-300 group"
                data-cursor-hover
              >
                <Mail size={14} className="text-mist group-hover:text-pure transition-colors duration-300" />
                Say hello
                <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
              </a>
            </div>

            {/* Left middle — navigation */}
            <div>
              <h3 className="text-xs tracking-[0.3em] text-mist uppercase mb-6">
                <GlitchText text="Navigate" as="span" intensity="low" trigger="scroll" />
              </h3>
              <ul className="space-y-4">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href, link.label)}
                      className="group inline-flex items-center gap-3 text-pure text-base hover:text-glow transition-colors duration-300 cursor-pointer"
                      data-cursor-hover
                    >
                      <link.icon
                        size={14}
                        className="text-mist group-hover:text-pure group-hover:translate-x-0.5 transition-all duration-300"
                      />
                      <span>{link.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right middle — socials */}
            <div>
              <h3 className="text-xs tracking-[0.3em] text-mist uppercase mb-6">
                <GlitchText text="Socials" as="span" intensity="low" trigger="scroll" />
              </h3>
              <ul className="space-y-4">
                {socials.map((social) => (
                  <li key={social.name}>
                    <a
                      href={social.href}
                      target={social.href.startsWith("http") ? "_blank" : undefined}
                      rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="group inline-flex items-center gap-3 text-pure text-base hover:text-glow transition-colors duration-300"
                      data-cursor-hover
                    >
                      <social.icon
                        size={14}
                        className="text-mist group-hover:text-pure group-hover:translate-x-0.5 transition-all duration-300"
                      />
                      <span>{social.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right — contact & project */}
            <div>
              <h3 className="text-xs tracking-[0.3em] text-mist uppercase mb-6">
                <GlitchText text="Reach Out" as="span" intensity="low" trigger="scroll" />
              </h3>
              <ul className="space-y-4">
                <li>
                  <a
                    href={`mailto:${EMAIL}`}
                    className="group inline-flex items-center gap-3 text-pure text-base hover:text-glow transition-colors duration-300"
                    style={{ fontFamily: "'Courier New', monospace" }}
                    data-cursor-hover
                  >
                    <Mail size={14} className="text-mist group-hover:text-pure group-hover:translate-x-0.5 transition-all duration-300" />
                    <span>Contact</span>
                  </a>
                </li>
                <li>
                  <button
                    onClick={() => onProjectClick?.()}
                    className="group inline-flex items-center gap-3 text-pure text-base hover:text-glow transition-colors duration-300 cursor-pointer"
                    data-cursor-hover
                  >
                    <Folder size={14} className="text-mist group-hover:text-pure group-hover:translate-x-0.5 transition-all duration-300" />
                    <span>Project</span>
                    <ArrowUpRight
                      size={14}
                      className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
                    />
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-16 border-t border-fog/20 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-xs text-mist tracking-wider font-mono">
              © {new Date().getFullYear()}{" "}
              <GlitchText
                text="ERR_NULL"
                as="span"
                intensity="low"
                trigger="always"
              />
            </div>
            <p className="text-[10px] tracking-[0.3em] text-mist/40 uppercase font-mono text-right">
              <GlitchText
                text="SEG_FAULT_0x00"
                as="span"
                intensity="high"
                trigger="always"
              />
            </p>
          </div>
        </div>
      </div>

      {/* Giant name — ShinyText shine sweep, lifted from bottom */}
      <div
        ref={nameRef}
        className="relative z-10 w-full pointer-events-none overflow-visible flex items-center justify-center pt-10 pb-16 mt-6"
        style={{ minHeight: "clamp(100px, 14vh, 160px)" }}
      >
        <div className="w-full text-center leading-none px-4">
          <ShinyText
            text="Prajwal Basnet"
            speed={3}
            spread={150}
            color="#bbbbbb"
            shineColor="#ffffff"
            yoyo
            className="font-mono font-extrabold tracking-[-0.05em] leading-[0.85] whitespace-nowrap text-[clamp(2.4rem,8.5vw,8.5rem)]"
          />
        </div>
      </div>
    </footer>
  );
}