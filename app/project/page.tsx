"use client";

import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ExternalLink, Github, ArrowLeft, Play, PawPrint, ShoppingCart, Sparkles, Globe, Plane, Building2, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import GlitchText from "@/components/effects/GlitchText";
import CustomCursor from "@/components/cursor/CustomCursor";
import NoiseOverlay from "@/components/background/NoiseOverlay";
import Lightfall from "@/components/background/Lightfall";
import Strands from "@/components/background/Strands";
import FisheyeCursor from "@/components/cursor/FisheyeCursor";
import WavyRippleBackground from "@/components/lightswind/wavy-ripple-background";
import { useNav } from "@/components/layout/NavigationGate";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: 1,
    title: "Anubis Paws",
    shortName: "Anubis Paws",
    category: "Pet Adoption & Marketplace",
    year: "2025",
    description:
      "A pet adoption and marketplace platform where pets thrive with love. Discover pets looking for a forever home and shop premium pet products — everything in one place.",
    longDescription:
      "At Anubis Paws, I'm building more than just a pet platform. From finding a new animal friend, to getting the right care, to shopping trusted products — everything you and your pets need, all in one place. Featuring an adoption system, a marketplace, and a modern landing experience.",
    tags: [
      { name: "Next.js", icon: Sparkles },
      { name: "Adoption", icon: PawPrint },
      { name: "Marketplace", icon: ShoppingCart },
      { name: "Web App", icon: Globe },
    ],
    video: "/img/anubis.mp4",
    image: "",
    liveUrl: "https://anubispaws.vercel.app/",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Voyage",
    shortName: "Voyage",
    category: "Travel Landing Page",
    year: "2024",
    description:
      "A clean travel tour landing page built with pure HTML and CSS. Showcases destinations, tour packages, and a responsive layout focused on exploration.",
    longDescription:
      "Voyage is a frontend travel site I built while learning HTML & CSS fundamentals. It features hero banners, destination cards, and tour sections — all responsive and built without JavaScript frameworks. A practice project that taught me layout and visual hierarchy.",
    tags: [
      { name: "HTML", icon: Globe },
      { name: "CSS", icon: Sparkles },
      { name: "Responsive", icon: Plane },
      { name: "Landing Page", icon: PawPrint },
    ],
    video: "",
    image: "",
    liveUrl: "https://traveltournojs.netlify.app/",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "NBS Studio",
    shortName: "NBS Studio",
    category: "Business Landing Page",
    year: "2024",
    description:
      "A modern business agency landing page crafted with HTML and CSS. Clean sections for services, about, and contact with a professional look.",
    longDescription:
      "NBS Studio is a frontend business site created during my early HTML/CSS learning phase. It focuses on clean typography, sectioned layout, and a minimal business aesthetic — built to practice structure and responsive design from scratch.",
    tags: [
      { name: "HTML", icon: Globe },
      { name: "CSS", icon: Sparkles },
      { name: "Agency", icon: Building2 },
      { name: "Frontend", icon: PawPrint },
    ],
    video: "",
    image: "",
    liveUrl: "https://nbswebpr.netlify.app/",
    githubUrl: "#",
  },
];

export default function ProjectPage() {
  const { navigate } = useNav();
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeId, setActiveId] = useState<number | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".page-header",
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 0.3 }
      );
      gsap.fromTo(
        ".project-grid-item",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.7, ease: "power3.out", stagger: 0.12, delay: 0.6 }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const handleBack = () => navigate("/", "home");

  const toggleProject = (id: number) => {
    setActiveId((prev) => (prev === id ? null : id));
  };

  const handleKeyToggle = (e: React.KeyboardEvent, id: number) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggleProject(id);
    }
  };

  return (
    <>
      <main className="relative min-h-screen bg-void overflow-hidden">
        <CustomCursor />
        <NoiseOverlay />
        <div className="scanline" />

        {/* Background with FisheyeCursor — wavy ripple dark purple + strands + lightfall */}
        <FisheyeCursor className="fixed inset-0 pointer-events-none z-0">
          <WavyRippleBackground
            className="absolute inset-0"
            waveColor="#5b21b6"
            backgroundColor="#05010a"
            speed={0.85}
            frequency={3.2}
            ringSharpness={0.62}
            maxOpacity={0.5}
          />
          <Strands
            className="absolute inset-0 opacity-[0.12]"
            colors={["#1a1a1a", "#3a3a3a", "#888888", "#dddddd"]}
            count={3}
            speed={0.25}
            amplitude={0.7}
            waviness={1}
            thickness={0.55}
            glow={1.2}
            taper={2.5}
            spread={1.1}
            intensity={0.45}
            opacity={0.85}
            scale={1.15}
            saturation={0.1}
          />
          <Lightfall
            className="absolute inset-0"
            colors={["#dddddd", "#666666", "#444444", "#ffffff"]}
            backgroundColor="#050505"
            speed={0.35}
            streakCount={5}
            streakWidth={1}
            streakLength={1}
            glow={1}
            density={0.6}
            twinkle={0.8}
            zoom={2.8}
            backgroundGlow={0.45}
            opacity={0.78}
            mouseInteraction={true}
            mouseStrength={0.5}
            mouseRadius={1}
          />
          <div className="absolute inset-0 bg-void/60" />
          <div className="absolute inset-0 bg-gradient-to-b from-void/20 via-transparent to-void/40" />
        </FisheyeCursor>

        <button
          onClick={handleBack}
          className="fixed top-20 left-6 md:left-10 z-50 flex items-center gap-2 text-sm text-bone hover:text-pure transition-colors duration-300 group"
          data-cursor-hover
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform duration-300" />
          <span className="tracking-wider uppercase">Back</span>
        </button>

        <div ref={containerRef} className="relative z-10 pt-16">
          <div className="max-w-6xl mx-auto px-6 md:px-10 lg:px-12 py-32">
            {/* Page header */}
            <div className="page-header mb-12 text-center">
              <span className="text-xs tracking-[0.5em] text-bone uppercase mb-4 block">
                <GlitchText text="02 — Work" as="span" intensity="low" trigger="scroll" />
              </span>
              <h1 className="text-5xl md:text-7xl font-light tracking-wider text-pure mb-6">
                <GlitchText text="Projects" as="span" intensity="medium" trigger="scroll" />
              </h1>
              <p className="text-base md:text-lg text-bone max-w-2xl mx-auto leading-relaxed">
                Click any project to expand and view details, preview, and links.
              </p>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {projects.map((project) => {
                const isActive = activeId === project.id;
                return (
                  <motion.div
                    layout
                    transition={{ type: "spring", stiffness: 420, damping: 34, mass: 0.9 }}
                    key={project.id}
                    role="button"
                    tabIndex={0}
                    onClick={() => toggleProject(project.id)}
                    onKeyDown={(e) => handleKeyToggle(e, project.id)}
                    className={`project-grid-item group relative text-left border backdrop-blur-sm p-5 md:p-6 rounded-2xl overflow-hidden cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-pure/30 ${
                      isActive
                        ? "bg-ghost/30 border-pure/30 shadow-[0_0_30px_rgba(221,221,221,0.08)] md:col-span-2"
                        : "bg-ghost/15 border-pure/10 hover:border-pure/25 hover:bg-ghost/25"
                    }`}
                    data-cursor-hover
                  >
                    {/* Header */}
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div className="min-w-0">
                        <span className="text-[11px] tracking-[0.32em] text-bone uppercase block mb-1">
                          Project_{String(project.id).padStart(2, "0")} — {project.year}
                        </span>
                        <h2 className="text-xl md:text-2xl font-light tracking-wider text-pure leading-none truncate">
                          {project.title}
                        </h2>
                        <p className="text-xs tracking-widest text-bone uppercase mt-1">{project.category}</p>
                      </div>
                      <div
                        className={`w-8 h-8 rounded-full border flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                          isActive ? "bg-pure text-void border-pure rotate-180" : "border-pure/20 text-bone group-hover:border-pure/40 group-hover:text-pure"
                        }`}
                      >
                        <ChevronDown size={16} />
                      </div>
                    </div>

                    {/* Small preview - always visible */}
                    <div className="relative aspect-video overflow-hidden bg-ghost rounded-xl border border-pure/10 mb-4">
                      {project.video ? (
                        <video
                          src={project.video}
                          className="absolute inset-0 w-full h-full object-cover"
                          autoPlay
                          muted
                          loop
                          playsInline
                          preload="auto"
                        />
                      ) : (
                        <div className="absolute inset-0 bg-gradient-to-br from-ghost via-fog to-ghost flex flex-col items-center justify-center p-6">
                          <div className="w-14 h-14 rounded-full border border-pure/20 flex items-center justify-center mb-4 bg-pure/[0.04]">
                            {project.id === 2 && <Plane size={22} className="text-pure/70" />}
                            {project.id === 3 && <Building2 size={22} className="text-pure/70" />}
                          </div>
                          <p className="text-xs tracking-[0.3em] text-pure uppercase">{project.title}</p>
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-void/30 to-transparent pointer-events-none" />
                    </div>

                    <p className="text-sm leading-relaxed text-bone line-clamp-2">{project.description}</p>

                    {/* Expanded detail - smooth bounce */}
                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          initial={{ height: 0, opacity: 0, y: -12, scale: 0.98 }}
                          animate={{ height: "auto", opacity: 1, y: 0, scale: 1 }}
                          exit={{ height: 0, opacity: 0, y: -8, scale: 0.99 }}
                          transition={{
                            height: { type: "spring", stiffness: 420, damping: 36, mass: 0.9 },
                            opacity: { duration: 0.28, ease: "easeOut" },
                            y: { type: "spring", stiffness: 480, damping: 30, mass: 0.8 },
                            scale: { type: "spring", stiffness: 420, damping: 28 }
                          }}
                          className="overflow-hidden"
                        >
                          <div className="pt-6 mt-6 border-t border-pure/10">
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                              <div className="lg:col-span-2">
                                <h3 className="text-sm tracking-[0.3em] text-bone uppercase mb-3">About</h3>
                                <p className="text-sm leading-relaxed text-bone">{project.longDescription}</p>
                              </div>
                              <div>
                                <h3 className="text-sm tracking-[0.3em] text-bone uppercase mb-3">Tools</h3>
                                <div className="flex flex-wrap gap-2 mb-6">
                                  {project.tags.map((tag) => (
                                    <span
                                      key={tag.name}
                                      className="flex items-center gap-1.5 text-xs px-3 py-1.5 border border-pure/15 text-bone tracking-wider rounded-full"
                                    >
                                      <tag.icon size={12} />
                                      {tag.name}
                                    </span>
                                  ))}
                                </div>
                                <div className="space-y-3 text-sm">
                                  <div className="flex justify-between">
                                    <span className="text-bone uppercase tracking-wider text-xs">Year</span>
                                    <span className="text-pure">{project.year}</span>
                                  </div>
                                  <div className="flex justify-between">
                                    <span className="text-bone uppercase tracking-wider text-xs">Role</span>
                                    <span className="text-pure text-xs text-right">Web Developer</span>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="flex flex-wrap gap-3 mt-8">
                              <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                className="inline-flex items-center gap-2 px-6 py-3 bg-pure text-void text-sm tracking-wider uppercase hover:bg-bone transition-colors duration-300 rounded-full font-medium"
                                data-cursor-hover
                              >
                                <ExternalLink size={16} />
                                Live Demo
                              </a>
                              <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                className="inline-flex items-center gap-2 px-6 py-3 border border-pure/20 text-pure text-sm tracking-wider uppercase hover:bg-pure hover:text-void transition-all duration-300 rounded-full"
                                data-cursor-hover
                              >
                                <Github size={16} />
                                Source Code
                              </a>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {!isActive && (
                      <p className="mt-4 text-xs tracking-[0.2em] text-mist uppercase group-hover:text-bone transition-colors">
                        Click to expand →
                      </p>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
