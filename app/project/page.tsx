"use client";

import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ExternalLink, Github, ArrowLeft, Play, PawPrint, ShoppingCart, Sparkles, Globe } from "lucide-react";
import GlitchText from "@/components/effects/GlitchText";
import CustomCursor from "@/components/cursor/CustomCursor";
import NoiseOverlay from "@/components/background/NoiseOverlay";
import Lightfall from "@/components/background/Lightfall";
import FisheyeCursor from "@/components/cursor/FisheyeCursor";
import { useNav } from "@/components/layout/NavigationGate";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: 1,
    title: "Anubis Paws",
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
];

export default function ProjectPage() {
  const [activeId, setActiveId] = useState(projects[0].id);
  const { navigate } = useNav();
  const contentRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const activeProject = projects.find((p) => p.id === activeId) ?? projects[0];

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.muted = true;
      video.defaultMuted = true;
      video.play().catch(() => {});
    }
  }, [activeId]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 0.3 }
      );
    });

    return () => ctx.revert();
  }, []);

  const handleBack = () => navigate("/", "home");

  return (
    <>
      <main className="relative min-h-screen bg-void overflow-hidden">
        <CustomCursor />
        <NoiseOverlay />
        <div className="scanline" />

        <FisheyeCursor className="fixed inset-0 pointer-events-none z-0">
          <Lightfall
            className="absolute inset-0"
            colors={["#dddddd", "#888888", "#444444", "#ffffff"]}
            backgroundColor="#050505"
            speed={0.4}
            streakCount={6}
            streakWidth={1}
            streakLength={1}
            glow={1.2}
            density={0.7}
            twinkle={1}
            zoom={3}
            backgroundGlow={0.5}
            opacity={0.9}
            mouseInteraction={true}
            mouseStrength={0.5}
            mouseRadius={1}
          />
          <div className="absolute inset-0 bg-void/70" />
        </FisheyeCursor>

        <div className="pl-20 md:pl-24 lg:pl-28 relative z-10">
          <button
            onClick={handleBack}
            className="fixed top-8 left-28 z-50 flex items-center gap-2 text-sm text-mist hover:text-pure transition-colors duration-300 group"
            data-cursor-hover
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform duration-300" />
            <span className="tracking-wider uppercase">Back</span>
          </button>

<div ref={contentRef} className="max-w-6xl mx-auto px-6 md:px-16 py-32">
              <div className="mb-16">
                <span className="text-xs tracking-[0.5em] text-mist uppercase mb-4 block">
                  <GlitchText text={`Project_${String(activeProject.id).padStart(2, "0")}`} as="span" intensity="low" trigger="scroll" />
                </span>
                <h1 className="text-5xl md:text-7xl font-light tracking-wider text-pure mb-6">
                  <GlitchText text={activeProject.title} as="span" intensity="medium" trigger="scroll" />
                </h1>
                <div className="flex items-center gap-4 text-sm text-mist">
                  <span>{activeProject.category}</span>
                  <span className="w-1 h-1 bg-mist rounded-full" />
                  <span>{activeProject.year}</span>
                </div>
              </div>

              <div className="mb-16 flex flex-wrap items-center gap-3">
                {projects.map((p) => (
                  <button
                    key={p.id}
                    onClick={() => setActiveId(p.id)}
                    className={`px-4 py-2 text-xs tracking-[0.2em] uppercase border transition-all duration-300 ${
                      p.id === activeId
                        ? "border-pure/70 text-pure bg-pure/5"
                        : "border-fog/30 text-mist hover:border-pure/50 hover:text-pure"
                    }`}
                    data-cursor-hover
                  >
                    {p.title}
                  </button>
                ))}
              </div>

            <div className="relative aspect-video overflow-hidden bg-ghost mb-16 group">
              {activeProject.video ? (
                <video
                  ref={videoRef}
                  src={activeProject.video}
                  className="absolute inset-0 w-full h-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                />
              ) : (
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
                  style={{ backgroundImage: `url(${activeProject.image})` }}
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-void/60 to-transparent" />

              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="w-20 h-20 rounded-full border-2 border-pure/50 flex items-center justify-center backdrop-blur-sm bg-void/30 hover:bg-pure/10 hover:border-pure transition-all duration-300">
                  <Play size={32} className="text-pure ml-1" />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
              <div className="lg:col-span-2">
                <h2 className="text-sm tracking-[0.3em] text-mist uppercase mb-6">
                  <GlitchText text="Overview" as="span" intensity="low" trigger="scroll" />
                </h2>
                <p className="text-lg leading-relaxed text-bone mb-8">
                  {activeProject.description}
                </p>
                <p className="text-base leading-relaxed text-ash">
                  {activeProject.longDescription}
                </p>
              </div>

              <div>
                <h2 className="text-sm tracking-[0.3em] text-mist uppercase mb-6">
                  <GlitchText text="Details" as="span" intensity="low" trigger="scroll" />
                </h2>

                <div className="space-y-6">
                  <div>
                    <span className="text-xs text-mist uppercase tracking-wider block mb-3">Tools</span>
                    <div className="flex flex-wrap gap-2">
                      {activeProject.tags.map((tag) => (
                        <span
                          key={tag.name}
                          className="flex items-center gap-2 text-xs px-3 py-2 border border-fog/30 text-bone tracking-wider hover:border-pure/50 hover:text-pure transition-all duration-300"
                        >
                          <tag.icon size={14} />
                          {tag.name}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <span className="text-xs text-mist uppercase tracking-wider block mb-2">Year</span>
                    <span className="text-pure">{activeProject.year}</span>
                  </div>

                  <div>
                    <span className="text-xs text-mist uppercase tracking-wider block mb-2">Role</span>
                    <span className="text-pure">Video Editor & Motion Designer</span>
                  </div>
                </div>

                <div className="flex gap-4 mt-8">
                  <a
                    href={activeProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 border border-pure/30 text-pure text-sm tracking-wider uppercase hover:bg-pure hover:text-void transition-all duration-300 group"
                    data-cursor-hover
                  >
                    <ExternalLink size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                    <span>View</span>
                  </a>
                  <a
                    href={activeProject.githubUrl}
                    className="flex items-center gap-2 px-6 py-3 border border-fog/30 text-mist text-sm tracking-wider uppercase hover:border-pure/50 hover:text-pure transition-all duration-300"
                    data-cursor-hover
                  >
                    <Github size={16} />
                    <span>Source</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
