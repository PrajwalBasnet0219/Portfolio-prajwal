"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import gsap from "gsap";
import GlitchText from "../effects/GlitchText";

const GLITCH_CHARS = "▓▒░█▄▀■□▪▫◊◦●○◐◑◒◓◔◕◖◗◘◙◚◛◜◝◞◟◠◡◢◣◤◥◦◧◨◩◪◫◬◭◮◯";

const NAMES = ["PRAJWAL BASNET", "प्रज्वल बस्नेत"];

// Next.js static export: image lives at /img/my_pic3.png in public.
// Kept as a CSS background-image (not an <img>) and shielded from
// right-click/drag/copy so it can't be saved directly from the page.
const IMG_SRC = "/img/my_pic3.png";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);
  const glitchLinesRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);
  const [displayName, setDisplayName] = useState(NAMES[0]);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);
  const [imgError, setImgError] = useState(false);

  const glitchTransition = useCallback((targetName: string) => {
    if (!nameRef.current) return;
    const el = nameRef.current;
    let iteration = 0;
    const totalIterations = 20;

    setIsTransitioning(true);

    const interval = setInterval(() => {
      const progress = iteration / totalIterations;

      el.innerText = targetName
        .split("")
        .map((char, index) => {
          if (char === " ") return " ";
          if (index < progress * targetName.length) {
            return targetName[index];
          }
          return GLITCH_CHARS[Math.floor(Math.random() * GLITCH_CHARS.length)];
        })
        .join("");

      iteration++;

      if (iteration > totalIterations) {
        clearInterval(interval);
        el.innerText = targetName;
        setDisplayName(targetName);
        setIsTransitioning(false);
      }
    }, 50);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setDisplayName((prev) => {
        const nextName = prev === NAMES[0] ? NAMES[1] : NAMES[0];
        glitchTransition(nextName);
        return prev;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [glitchTransition]);

  // Preload the profile picture (a CSS background-image has no load event).
  useEffect(() => {
    const img = new Image();
    img.src = IMG_SRC;
    img.onload = () => setImgLoaded(true);
    img.onerror = () => setImgError(true);
    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, []);

  useEffect(() => {
    const imgEl = imgRef.current;
    if (!imgEl || !imgLoaded) return;

    const glitchImage = () => {
      const intensity = Math.random();

      if (intensity > 0.5) {
        const offsetX = (Math.random() - 0.5) * 10;
        const offsetY = (Math.random() - 0.5) * 4;

        imgEl.style.transform = `translate(${offsetX}px, ${offsetY}px) scale(1.05)`;
        imgEl.style.filter = `grayscale(100%) contrast(1.2) brightness(0.9) hue-rotate(${Math.random() * 30}deg)`;

        const scanline = imgEl.parentElement?.querySelector(".image-scanline") as HTMLElement;
        if (scanline) {
          scanline.style.opacity = "0.5";
          scanline.style.transform = `translateY(${Math.random() * 100}%)`;
        }

        setTimeout(() => {
          imgEl.style.transform = "translate(0, 0) scale(1)";
          imgEl.style.filter = "grayscale(100%) contrast(1.1) brightness(0.9)";
          if (scanline) {
            scanline.style.opacity = "0";
          }
        }, 80 + Math.random() * 120);
      } else {
        imgEl.style.filter = `grayscale(100%) contrast(1.1) brightness(${0.7 + Math.random() * 0.4})`;
        setTimeout(() => {
          imgEl.style.filter = "grayscale(100%) contrast(1.1) brightness(0.9)";
        }, 50);
      }
    };

    const glitchInterval = setInterval(() => {
      glitchImage();
    }, 2000 + Math.random() * 1000);

    return () => clearInterval(glitchInterval);
  }, [imgLoaded]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1.2, ease: "power3.out", delay: 0.3 }
      );

      gsap.fromTo(
        imageRef.current,
        { opacity: 0, scale: 0.9, y: 30 },
        { opacity: 1, scale: 1, y: 0, duration: 1.4, ease: "power3.out", delay: 0.5 }
      );

      gsap.fromTo(
        subtitleRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 1.2 }
      );

      const lines = glitchLinesRef.current?.querySelectorAll(".glitch-line");
      lines?.forEach((line, i) => {
        gsap.fromTo(
          line,
          { scaleX: 0, opacity: 0 },
          {
            scaleX: 1,
            opacity: 1,
            duration: 0.6,
            ease: "power3.out",
            delay: 0.8 + i * 0.15,
            transformOrigin: "left center",
          }
        );
      });

      gsap.fromTo(
        scrollIndicatorRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.8, delay: 2 }
      );

      gsap.to(scrollIndicatorRef.current, {
        y: 10,
        duration: 1.5,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        delay: 2,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Determine image src — for Next.js static export, use root-relative path
  // next.config.js sets distDir: 'dist', images go to /img/my_pic3.png in public
  return (
    <section
      ref={sectionRef}
      className="relative z-10 min-h-screen flex flex-col items-center justify-center overflow-hidden pl-20"
    >
      {/* Glitch lines */}
      <div ref={glitchLinesRef} className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="glitch-line absolute top-[20%] left-0 w-[40%] h-px bg-pure/10" />
        <div className="glitch-line absolute top-[35%] right-0 w-[30%] h-px bg-pure/15" />
        <div className="glitch-line absolute top-[55%] left-[10%] w-[25%] h-px" style={{ background: "rgba(255,255,255,0.08)" }} />
        <div className="glitch-line absolute top-[70%] right-[15%] w-[35%] h-px" style={{ background: "rgba(255,255,255,0.12)" }} />
        <div className="glitch-line absolute top-[85%] left-[5%] w-[20%] h-px bg-pure/10" />
        <div className="glitch-line absolute top-0 left-[20%] w-px h-[30%] bg-pure/5" />
        <div className="glitch-line absolute top-[40%] right-[25%] w-px h-[25%] bg-pure/8" />
        <div className="glitch-line absolute bottom-[10%] left-[60%] w-px h-[20%] bg-pure/5" />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${(i * 8.3) % 100}%`,
              animation: `float-up ${10 + (i % 5) * 3}s linear infinite`,
              animationDelay: `${(i % 4) * 2}s`,
              width: `${1 + (i % 2)}px`,
              height: `${1 + (i % 2)}px`,
              opacity: 0.05 + (i % 3) * 0.03,
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center w-full max-w-7xl px-6 gap-12 lg:gap-20">

        {/* Left: Text */}
        <div ref={titleRef} className="flex flex-col items-center lg:items-start text-center lg:text-left opacity-0">
          <h1
            ref={nameRef}
            className="text-5xl md:text-7xl lg:text-8xl font-light tracking-[0.2em] text-pure uppercase"
            style={{ fontFamily: "'Courier New', monospace", minHeight: "1.2em" }}
          >
            {NAMES[0]}
          </h1>

          <p
            ref={subtitleRef}
            className="mt-6 text-sm md:text-base tracking-[0.5em] text-mist uppercase opacity-0"
          >
            <GlitchText
              text="Video Editor | Graphic Designer | UI/UX Enthusiast"
              as="span"
              intensity="low"
              trigger="hover"
            />
          </p>

          <div className="mt-8 w-px h-16 bg-gradient-to-b from-fog/50 via-fog/20 to-transparent lg:ml-0 mx-auto" />

          <p className="mt-4 text-[10px] tracking-[0.3em] text-fog/40 uppercase">
            <GlitchText
              text="Based in Kathmandu, Nepal"
              as="span"
              intensity="medium"
              trigger="always"
            />
          </p>
        </div>

        {/* Right: Profile picture */}
        <div ref={imageRef} className="relative opacity-0">
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
            {/* Outer glitch borders */}
            <div
              className="absolute -inset-3 border border-fog/20"
              style={{ clipPath: "polygon(0 0, 100% 0, 100% 85%, 85% 100%, 0 100%)" }}
            />
            <div
              className="absolute -inset-3 border border-fog/10 translate-x-1 translate-y-1"
              style={{ clipPath: "polygon(0 0, 100% 0, 100% 85%, 85% 100%, 0 100%)" }}
            />

            {/* Image container */}
            <div
              className="relative w-full h-full overflow-hidden bg-ghost"
              style={{ clipPath: "polygon(0 0, 100% 0, 100% 85%, 85% 100%, 0 100%)" }}
            >
              {!imgError ? (
                <div
                  ref={imgRef}
                  role="img"
                  aria-label="Prajwal Basnet"
                  className="absolute inset-0 w-full h-full transition-all duration-75"
                  style={{
                    backgroundImage: `url(${IMG_SRC})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    filter: "grayscale(100%) contrast(1.1) brightness(0.9)",
                    transform: "scale(1)",
                    userSelect: "none",
                    WebkitUserSelect: "none",
                    WebkitTouchCallout: "none",
                  }}
                  onContextMenu={(e) => e.preventDefault()}
                  onCopy={(e) => e.preventDefault()}
                  onCut={(e) => e.preventDefault()}
                  onDragStart={(e) => e.preventDefault()}
                />
              ) : (
                /* Fallback: stylised placeholder when image missing */
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-ghost/80 gap-4">
                  <div className="text-[10px] tracking-[0.4em] text-fog/40 uppercase font-mono">
                    IMG_NOT_FOUND
                  </div>
                  <div className="w-16 h-px bg-fog/20" />
                  <div className="text-[9px] tracking-[0.3em] text-fog/20 font-mono">
                    /public/img/my_pic3.png
                  </div>
                </div>
              )}

              {/* Interaction shield: blocks right-click save, drag and copy
                  even if the pointer lands slightly off the image. */}
              <div
                className="absolute inset-0"
                onContextMenu={(e) => e.preventDefault()}
                onCopy={(e) => e.preventDefault()}
                onCut={(e) => e.preventDefault()}
                onDragStart={(e) => e.preventDefault()}
              />

              {/* Moving scanline */}
              <div
                className="image-scanline absolute left-0 right-0 h-[20%] pointer-events-none opacity-0 transition-opacity duration-75"
                style={{
                  background: "linear-gradient(transparent 50%, rgba(0,0,0,0.4) 50%)",
                  backgroundSize: "100% 4px",
                  top: "0",
                }}
              />

              {/* Static scanline overlay */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.15) 2px, rgba(0,0,0,0.15) 4px)",
                }}
              />

              {/* Vignette */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{ boxShadow: "inset 0 0 60px rgba(0,0,0,0.8)" }}
              />
            </div>

            {/* Corner decorations */}
            <div className="absolute -top-2 -left-2 w-6 h-6 border-l-2 border-t-2 border-pure/30" />
            <div className="absolute -bottom-2 -right-2 w-6 h-6 border-r-2 border-b-2 border-pure/30" />

            {/* Data label */}
            <div className="absolute -bottom-8 right-0 text-[10px] tracking-[0.2em] text-fog/40 uppercase font-mono">
              IMG_0x01.DAT
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        ref={scrollIndicatorRef}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-0 z-10"
      >
        <span className="text-xs tracking-[0.3em] text-mist uppercase">
          <GlitchText text="Descend" as="span" intensity="low" trigger="hover" />
        </span>
        <div className="w-px h-8 bg-gradient-to-b from-mist to-transparent" />
      </div>

      {/* Corner frames */}
      <div className="absolute top-8 left-28 w-16 h-16 border-l border-t border-fog/20" />
      <div className="absolute top-8 right-8 w-16 h-16 border-r border-t border-fog/20" />
      <div className="absolute bottom-8 left-28 w-16 h-16 border-l border-b border-fog/20" />
      <div className="absolute bottom-8 right-8 w-16 h-16 border-r border-b border-fog/20" />
    </section>
  );
}