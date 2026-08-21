"use client";

import { useEffect, useRef, lazy, Suspense } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CustomCursor from "@/components/cursor/CustomCursor";
import NoiseOverlay from "@/components/background/NoiseOverlay";
import Navigation from "@/components/layout/Navigation";
import WavyRippleBackground from "@/components/lightswind/wavy-ripple-background";
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

    // Slide-up + blur-to-clear on scroll for main sections
    const reveals = gsap.utils.toArray<HTMLElement>(".reveal");
    reveals.forEach((el) => {
      gsap.fromTo(
        el,
        { y: 80, autoAlpha: 0, filter: "blur(10px)" },
        {
          y: 0,
          autoAlpha: 1,
          filter: "blur(0px)",
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

    return () => {
      lenis.destroy();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  const handleProjectClick = () => navigate("/project", "project");

  return (
    <>
      <main className="relative min-h-screen bg-void">
        <CustomCursor />
        <NoiseOverlay />
        <Navigation />
        <FisheyeCursor className="fixed inset-0 z-0 pointer-events-none" strength={180} radius={520} damping={0.14}>
          <WavyRippleBackground
            className="absolute inset-0"
            waveColor="#5b21b6"
            backgroundColor="#05010a"
            speed={0.9}
            frequency={3.2}
            ringSharpness={0.6}
            maxOpacity={0.55}
          />
          <div className="absolute inset-0 bg-void/25" />
        </FisheyeCursor>
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