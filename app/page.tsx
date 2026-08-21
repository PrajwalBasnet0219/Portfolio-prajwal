"use client";

import { useEffect, useRef, lazy, Suspense } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CustomCursor from "@/components/cursor/CustomCursor";
import NoiseOverlay from "@/components/background/NoiseOverlay";
import Navigation from "@/components/layout/Navigation";
import ColorBends from "@/components/background/ColorBends";
import FisheyeCursor from "@/components/cursor/FisheyeCursor";
import Hero from "@/components/hero/Hero";
import { useNav } from "@/components/layout/NavigationGate";

const About = lazy(() => import("@/components/about/About"));
const Project = lazy(() => import("@/components/project/Project"));
const Footer = lazy(() => import("@/components/layout/Footer"));

gsap.registerPlugin(ScrollTrigger);

const SectionFallback = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="w-px h-16 bg-gradient-to-b from-fog/50 to-transparent animate-pulse" />
  </div>
);

export default function Home() {
  const lenisRef = useRef<Lenis | null>(null);
  const { navigate } = useNav();

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    lenisRef.current = lenis;
    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
    };
  }, []);

  const handleProjectClick = () => navigate("/project", "project");

  return (
    <>
      <main className="relative min-h-screen bg-void">
        <CustomCursor />
        <NoiseOverlay />
        <Navigation />
        <FisheyeCursor className="fixed inset-0 z-0 pointer-events-none">
          <ColorBends
            className="absolute inset-0"
            transparent
            speed={0.22}
            scale={1}
            frequency={1.15}
            warpStrength={1}
            mouseInfluence={0.6}
            parallax={0.3}
            noise={0.05}
            iterations={1}
            intensity={1.2}
            bandWidth={6}
            colors={["#dddddd", "#888888", "#3a3a3a", "#7a0e18"]}
          />
        </FisheyeCursor>
        <div className="scanline" />
        <Hero />
        <Suspense fallback={<SectionFallback />}>
          <About />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Project onProjectClick={handleProjectClick} />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Footer onProjectClick={handleProjectClick} />
        </Suspense>
      </main>
    </>
  );
}