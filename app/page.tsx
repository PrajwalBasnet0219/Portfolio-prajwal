"use client";

import { useEffect, useRef, Suspense } from "react";
import dynamic from "next/dynamic";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CustomCursor from "@/components/cursor/CustomCursor";
import NoiseOverlay from "@/components/background/NoiseOverlay";
import Hero from "@/components/hero/Hero";
import { useNav } from "@/components/layout/NavigationGate";

const About = dynamic(() => import("@/components/about/About"), { ssr: false, loading: () => <SectionFallback /> });
const Project = dynamic(() => import("@/components/project/Project"), { ssr: false, loading: () => <SectionFallback /> });
const Footer = dynamic(() => import("@/components/layout/Footer"), { ssr: false, loading: () => <SectionFallback /> });

gsap.registerPlugin(ScrollTrigger);

const SectionFallback = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="w-px h-16 bg-gradient-to-b from-fog/50 to-transparent animate-pulse" />
  </div>
);

export default function Home() {
  const lenisRef = useRef<Lenis | null>(null);
  const mainRef = useRef<HTMLElement>(null);
  const { navigate } = useNav();

  useEffect(() => {
    const isMobile = typeof window !== "undefined" && (window.innerWidth < 768 || window.matchMedia("(pointer: coarse)").matches || window.matchMedia("(prefers-reduced-motion: reduce)").matches);
    let lenis: Lenis | null = null;
    const ticker = (time: number) => {
      if (lenis) lenis.raf(time * 1000);
    };
    if (!isMobile) {
      lenis = new Lenis({
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
      });

      lenisRef.current = lenis;
      lenis.on("scroll", ScrollTrigger.update);

      gsap.ticker.add(ticker);
      gsap.ticker.lagSmoothing(0);
    }

    // Slide-up on scroll for main sections.
    // Transform + opacity only (compositor-friendly) — no per-frame blur()
    // filter over 100vh+ sections containing WebGL canvases.
    const reveals = gsap.utils.toArray<HTMLElement>(".reveal");
    reveals.forEach((el) => {
      gsap.fromTo(
        el,
        { y: 80, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 1.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    // The About/Project/Footer sections are lazily imported inside .reveal
    // wrappers. When their chunks mount the wrapper height changes (the
    // 100vh fallback → real content), which moves every trigger position.
    // Refresh once the content settles so sections reveal at the right spot.
    let refreshTimer: ReturnType<typeof setTimeout> | undefined;
    const refreshTriggers = () => {
      clearTimeout(refreshTimer);
      refreshTimer = setTimeout(() => ScrollTrigger.refresh(), 200);
    };
    const main = mainRef.current;
    const ro = main ? new ResizeObserver(refreshTriggers) : undefined;
    if (main && ro) ro.observe(main);
    // Initial refresh for when the first chunk has already resolved.
    refreshTriggers();

    return () => {
      clearTimeout(refreshTimer);
      ro?.disconnect();
      if (lenis) {
        gsap.ticker.remove(ticker);
        lenis.destroy();
      }
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  const handleProjectClick = () => navigate("/project", "project");

  return (
    <>
      <main ref={mainRef} className="relative min-h-screen bg-void">
        <CustomCursor />
        <NoiseOverlay />
        <div className="scanline" />
        <Hero />
        <div className="reveal">
          <Suspense fallback={<SectionFallback />}>
            <About />
          </Suspense>
        </div>
        <div className="reveal">
          <Suspense fallback={<SectionFallback />}>
            <Project onProjectClick={handleProjectClick} />
          </Suspense>
        </div>
        <div className="reveal">
          <Suspense fallback={<SectionFallback />}>
            <Footer onProjectClick={handleProjectClick} />
          </Suspense>
        </div>
      </main>
    </>
  );
}