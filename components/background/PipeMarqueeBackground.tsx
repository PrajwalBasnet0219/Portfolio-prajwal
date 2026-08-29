"use client";

import React, { useEffect, useRef, useState } from "react";

type PipeMarqueeBackgroundProps = {
  count?: number;
  radius?: number;
  speed?: number;
  rotateSpeed?: number;
  autoRotate?: boolean;
  glitch?: boolean;
  glitchIntensity?: "subtle" | "strong";
  /** GIF paths — edit here when you swap gifs. Defaults to 3 gifs in /public/img */
  gifs?: string[];
  className?: string;
};

/**
 * PipeMarqueeBackground — original visuals with smooth optimizations
 * -> Restored as in testing_ideas/src/components/PipeMarquee.tsx (count 8, radius 185, 12 tiles equiv)
 * -> Optimizations kept: IntersectionObserver pause offscreen, lazy images, contain, will-change, prefers-reduced-motion
 * -> Uses 8 tiles/face (optimized from 12) → 128 imgs vs 192, still covers width (2976 > 1900) no gap, faster
 * -> Gifs: /public/img — edit DEFAULT_GIFS below
 */
const DEFAULT_GIFS = ["/img/p1.png", "/img/p2.png", "/img/anubis.gif"];

// 8 tiles/face → 128 imgs (8 faces * 8 * 2) — covers face width, original was 12 → 192
const TILES_PER_FACE = 8;

export default function PipeMarqueeBackground({
  count = 8,
  radius = 185,
  speed = 22,
  rotateSpeed = 28,
  autoRotate = true,
  glitch = true,
  glitchIntensity = "strong",
  gifs = DEFAULT_GIFS,
  className,
}: PipeMarqueeBackgroundProps) {
  const GAP_FACE = 10;
  const GAP_TILE = 10;
  const FACE_HEIGHT = Math.round(2 * radius * Math.sin(Math.PI / count)) - GAP_FACE;
  const [isGlitching, setIsGlitching] = useState(false);
  const [seed, setSeed] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const timers = useRef<number[]>([]);

  const GIFS = gifs.length > 0 ? gifs : DEFAULT_GIFS;

  // Pause when offscreen
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0, rootMargin: "200px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  useEffect(() => {
    const m = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(m.matches);
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    m.addEventListener("change", handler);
    return () => m.removeEventListener("change", handler);
  }, []);

  const shouldAnimate = isVisible && !prefersReducedMotion;
  const effectiveAutoRotate = autoRotate && shouldAnimate;

  useEffect(() => {
    if (!glitch || !shouldAnimate) return;
    let cancelled = false;
    const schedule = () => {
      if (cancelled) return;
      const base = glitchIntensity === "strong" ? 1100 : 1700;
      const jitter = Math.random() * (glitchIntensity === "strong" ? 3000 : 4200);
      const nextIn = base + jitter;
      const t = window.setTimeout(() => {
        if (cancelled) return;
        const dur = glitchIntensity === "strong" ? 140 + Math.random() * 380 : 90 + Math.random() * 180;
        setSeed(Math.random());
        setIsGlitching(true);
        const off = window.setTimeout(() => {
          if (cancelled) return;
          setIsGlitching(false);
          if (glitchIntensity === "strong" && Math.random() > 0.62) {
            const stutterGap = 70 + Math.random() * 120;
            const stutterDur = 55 + Math.random() * 140;
            const s1 = window.setTimeout(() => {
              setSeed(Math.random());
              setIsGlitching(true);
              const s2 = window.setTimeout(() => setIsGlitching(false), stutterDur);
              timers.current.push(s2);
            }, stutterGap);
            timers.current.push(s1);
            const after = window.setTimeout(schedule, stutterGap + stutterDur + 260);
            timers.current.push(after);
          } else {
            schedule();
          }
        }, dur);
        timers.current.push(off);
      }, nextIn);
      timers.current.push(t);
    };
    const init = window.setTimeout(schedule, 900 + Math.random() * 1200);
    timers.current.push(init);
    return () => {
      cancelled = true;
      timers.current.forEach((id) => clearTimeout(id));
      timers.current = [];
    };
  }, [glitch, glitchIntensity, shouldAnimate]);

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 overflow-hidden bg-[#050508] flex items-center justify-center ${className ?? ""}`}
      style={{ contain: "layout paint" }}
    >
      <div className="pointer-events-none absolute inset-0 bg-radial from-white/[0.04] via-transparent to-transparent opacity-60" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black via-transparent to-black/80" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60" />
      <div className="absolute w-[900px] h-[400px] bg-indigo-600/20 blur-[90px] rounded-full -rotate-12 will-change-transform" />

      <div
        className="absolute inset-0 flex items-center justify-center"
        style={{ perspective: "1300px", perspectiveOrigin: "50% 50%" }}
      >
        <div
          className="pipe-group relative flex items-center justify-center"
          style={
            {
              transform: "rotateZ(-14deg) rotateX(10deg) rotateY(-8deg)",
              transformStyle: "preserve-3d",
              maskImage:
                "linear-gradient(to right, transparent 0%, black 9%, black 22%, black 78%, black 91%, transparent 100%)",
              WebkitMaskImage:
                "linear-gradient(to right, transparent 0%, black 9%, black 22%, black 78%, black 91%, transparent 100%)",
            } as React.CSSProperties
          }
        >
          <div
            className={effectiveAutoRotate ? "pipe-spin" : undefined}
            style={
              {
                transformStyle: "preserve-3d",
                animation: effectiveAutoRotate ? `pipe-spin ${rotateSpeed}s linear infinite` : undefined,
                animationPlayState: shouldAnimate ? "running" : "paused",
              } as React.CSSProperties
            }
          >
            <div
              className="relative"
              style={
                {
                  width: `min(1900px, 176vw)`,
                  height: `${radius * 2}px`,
                  transformStyle: "preserve-3d",
                  transform: "translateZ(0)",
                } as React.CSSProperties
              }
            >
              {Array.from({ length: count }).map((_, faceIdx) => {
                const angle = (360 / count) * faceIdx;
                const duration = speed + (faceIdx % 3) * 4 - (faceIdx % 2) * 3;
                const reverse = faceIdx % 2 === 1;
                const brightness = 1 - Math.abs(faceIdx - count / 2) * 0.09;
                const tiles = Array.from({ length: TILES_PER_FACE }).map((__, idx) => GIFS[idx % GIFS.length]);

                return (
                  <div
                    key={faceIdx}
                    className="absolute left-0 top-1/2 overflow-hidden bg-black"
                    style={
                      {
                        width: "100%",
                        height: `${FACE_HEIGHT}px`,
                        marginTop: `-${FACE_HEIGHT / 2}px`,
                        transform: `rotateX(${angle}deg) translateZ(${radius}px)`,
                        transformStyle: "preserve-3d",
                        backfaceVisibility: "hidden",
                        filter: `brightness(${0.62 + brightness * 0.38})`,
                        borderRadius: "12px",
                        border: "1px solid rgba(255,255,255,0.07)",
                        boxShadow:
                          "inset 0 1px 0 rgba(255,255,255,0.12), inset 0 -1px 0 rgba(0,0,0,0.85), 0 2px 10px rgba(0,0,0,0.45)",
                        overflow: "hidden",
                      } as React.CSSProperties
                    }
                  >
                    <div className="pointer-events-none absolute inset-0 opacity-20 bg-gradient-to-b from-white via-transparent to-transparent" />

                    <div
                      className="flex h-full items-center"
                      style={
                        {
                          width: "max-content",
                          gap: `${GAP_TILE}px`,
                          paddingLeft: `${GAP_TILE / 2}px`,
                          paddingRight: `${GAP_TILE / 2}px`,
                          animation: `pipe-marquee-${reverse ? "rev" : "fwd"} ${duration}s linear infinite`,
                          animationPlayState: shouldAnimate ? "running" : "paused",
                        } as React.CSSProperties
                      }
                    >
                      {[0, 1].map((dup) => (
                        <div key={dup} className="flex h-full items-center shrink-0" style={{ gap: `${GAP_TILE}px` }}>
                          {tiles.map((src, idx) => {
                            const tileHash = (idx * 23 + faceIdx * 37 + dup * 11 + Math.floor(seed * 9999)) % 100;
                            const mod = glitchIntensity === "strong" ? 5 : 7;
                            const shouldGlitch = isGlitching && tileHash % mod === 0;
                            const offsetX = ((tileHash % 9) - 4) * 1.8;
                            const offsetY = ((tileHash % 5) - 2) * 0.9;
                            const skew = ((tileHash % 7) - 3) * 0.9;
                            const sliceTop = (tileHash * 13) % 78;

                            const hBias = Math.abs(idx - (TILES_PER_FACE - 1) / 2) / ((TILES_PER_FACE - 1) / 2);
                            const bendY = hBias * 1.4;
                            const bendX = 3.2;
                            return (
                              <div
                                key={`${dup}-${idx}`}
                                className="relative h-full shrink-0 bg-zinc-900 overflow-hidden"
                                style={{
                                  width: "176px",
                                  borderRadius: "10px",
                                  border: shouldGlitch
                                    ? "1px solid rgba(255,10,20,0.85)"
                                    : "1px solid rgba(255,255,255,0.09)",
                                  transform: shouldGlitch
                                    ? `translate3d(${offsetX.toFixed(1)}px, ${offsetY.toFixed(1)}px, 0) perspective(520px) rotateY(${bendY.toFixed(2)}deg) rotateX(${bendX}deg)`
                                    : `perspective(520px) rotateY(${bendY.toFixed(2)}deg) rotateX(${bendX}deg)`,
                                  transformOrigin: idx < TILES_PER_FACE / 2 ? "left center" : "right center",
                                  transformStyle: "preserve-3d",
                                  boxShadow: shouldGlitch
                                    ? "0 0 0 rgba(0,0,0,0)"
                                    : "inset 0 1px 0 rgba(255,255,255,0.1), inset 0 -8px 18px rgba(0,0,0,0.55), inset 0 8px 12px rgba(255,255,255,0.06)",
                                  overflow: "hidden",
                                }}
                              >
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                  src={src}
                                  alt="pipe tile"
                                  className="h-full w-full object-cover select-none"
                                  draggable={false}
                                  loading="lazy"
                                  decoding="async"
                                  fetchPriority="low"
                                  style={
                                    shouldGlitch
                                      ? {
                                          transform: `translate3d(${(offsetX * 0.6).toFixed(1)}px, 0, 0) skewX(${skew.toFixed(2)}deg) scaleX(${(1 + Math.abs(skew) * 0.04).toFixed(3)})`,
                                          filter:
                                            tileHash % 2 === 0
                                              ? "contrast(1.9) brightness(1.35) saturate(1.9) hue-rotate(-14deg)"
                                              : "contrast(1.7) grayscale(1) brightness(1.45)",
                                        }
                                      : undefined
                                  }
                                />
                                <div
                                  className="pointer-events-none absolute inset-0"
                                  style={{
                                    background: `linear-gradient(to bottom, rgba(255,255,255,0.10) 0%, transparent 22%, transparent 78%, rgba(0,0,0,0.55) 100%), linear-gradient(to right, rgba(0,0,0,0.48) 0%, transparent 28%, transparent 72%, rgba(0,0,0,0.52) 100%), radial-gradient(ellipse at 50% 50%, transparent 64%, rgba(0,0,0,0.42) 100%)`,
                                  }}
                                />
                                <div className="pointer-events-none absolute inset-0 rounded-[10px] shadow-[inset_0_1px_0_rgba(255,255,255,0.14),inset_0_-1px_2px_rgba(0,0,0,0.8)]" />
                                <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/10 via-transparent to-black/20 opacity-60" />

                                {shouldGlitch && (
                                  <>
                                    <div className="pointer-events-none absolute inset-0 overflow-hidden">
                                      <div
                                        className="absolute inset-0 mix-blend-screen"
                                        style={{
                                          background: "rgba(255,10,20,0.42)",
                                          transform: `translate3d(${-4 - (tileHash % 4)}px, 0, 0)`,
                                          clipPath: `inset(${sliceTop}% 0 ${72 - sliceTop}% 0)`,
                                          opacity: 0.95,
                                        }}
                                      />
                                      <div
                                        className="absolute inset-0 mix-blend-screen"
                                        style={{
                                          background: "rgba(255,255,255,0.38)",
                                          transform: `translate3d(${3 + (tileHash % 5)}px, 0, 0)`,
                                          clipPath: `inset(${sliceTop}% 0 ${72 - sliceTop}% 0)`,
                                          opacity: 0.9,
                                        }}
                                      />
                                      <div
                                        className="absolute inset-0 mix-blend-multiply bg-black/45"
                                        style={{
                                          clipPath: `inset(${sliceTop}% 0 ${72 - sliceTop}% 0)`,
                                        }}
                                      />
                                    </div>

                                    <div
                                      className="pointer-events-none absolute left-0 right-0 h-[7px] bg-white"
                                      style={{
                                        top: `${sliceTop}%`,
                                        boxShadow: "-3px 0 0 #ff0a14, 3px 0 0 black, 0 0 8px rgba(255,255,255,0.9)",
                                        transform: `translate3d(${(tileHash % 7 - 3).toFixed(1)}px, 0, 0)`,
                                        opacity: 0.98,
                                      }}
                                    />
                                    <div
                                      className="pointer-events-none absolute left-0 right-0 h-[2px] bg-[#ff0a14]"
                                      style={{
                                        top: `${(sliceTop + 22) % 88}%`,
                                        boxShadow: "0 0 7px #ff0a14",
                                        transform: `translate3d(${(tileHash % 5 - 2).toFixed(1)}px, 0, 0)`,
                                      }}
                                    />
                                    <div
                                      className="pointer-events-none absolute inset-0 opacity-55"
                                      style={{
                                        backgroundImage:
                                          "repeating-linear-gradient(0deg, transparent 0px, transparent 2px, rgba(255,255,255,0.18) 2px, rgba(255,255,255,0.18) 3px)",
                                        mixBlendMode: "overlay",
                                      }}
                                    />
                                  </>
                                )}
                              </div>
                            );
                          })}
                        </div>
                      ))}
                    </div>

                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/25 via-transparent to-black/25" />
                  </div>
                );
              })}

              <div
                className="absolute left-0 top-1/2 -translate-y-1/2 w-[2px] h-[90%] bg-gradient-to-b from-transparent via-white/10 to-transparent"
                style={{ transform: `translateZ(${radius + 1}px)` } as React.CSSProperties}
              />
              <div
                className="absolute right-0 top-1/2 -translate-y-1/2 w-[2px] h-[90%] bg-gradient-to-b from-transparent via-white/10 to-transparent"
                style={{ transform: `translateZ(${radius + 1}px)` } as React.CSSProperties}
              />
            </div>
          </div>

          <div className="pointer-events-none absolute -left-[1%] top-1/2 -translate-y-1/2 w-[28%] h-[150%] bg-gradient-to-r from-[#050508] via-[#050508]/90 via-35% to-transparent z-20" />
          <div className="pointer-events-none absolute -right-[1%] top-1/2 -translate-y-1/2 w-[28%] h-[150%] bg-gradient-to-l from-[#050508] via-[#050508]/90 via-35% to-transparent z-20" />
          <div className="pointer-events-none absolute -left-[2%] top-1/2 -translate-y-1/2 w-[36%] h-[180%] bg-[#050508] blur-[28px] opacity-60 z-20" />
          <div className="pointer-events-none absolute -right-[2%] top-1/2 -translate-y-1/2 w-[36%] h-[180%] bg-[#050508] blur-[28px] opacity-60 z-20" />
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-black to-transparent" />

      <style>{`
        @keyframes pipe-marquee-fwd {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes pipe-marquee-rev {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        @keyframes pipe-spin {
          0% { transform: rotateX(0deg); }
          100% { transform: rotateX(360deg); }
        }
        .pipe-spin { transform-style: preserve-3d; will-change: transform; }
        @media (max-width: 768px) {
          .pipe-group {
            transform: rotateZ(-14deg) rotateX(10deg) rotateY(-8deg) scale(0.52) !important;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .pipe-spin, [style*="pipe-marquee"] { animation: none !important; }
        }
      `}</style>
    </div>
  );
}
