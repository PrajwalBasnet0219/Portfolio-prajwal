"use client";

import { useEffect, useRef, useState, useCallback, useId } from "react";
import { useRouter, usePathname } from "next/navigation";
import gsap from "gsap";
import styles from "./LoadingScreen.module.css";

const GLITCH_CHARS = "▓▒░█▄▀■□▪▫◊◦●○◐◑◒◓◔◕◖◗◘◙◚◛◜◝◞◟◠◡◢◣◤◥◦◧◨◩◪◫◬◭◮◯";
const MAX_PERCENT = 100;
const FISHEYE_MAX = 110;

type Stage = "notice" | "loading" | "progress" | "complete";

interface LoadingScreenProps {
  target: string;
  pageName?: string;
  onComplete?: () => void;
  autoNavigate?: boolean;
}

export default function LoadingScreen({
  target,
  pageName = "page",
  onComplete,
  autoNavigate = true,
}: LoadingScreenProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mapCanvasRef = useRef<HTMLCanvasElement>(null);
  const mapRef = useRef<SVGFEImageElement>(null);
  const filterRef = useRef<SVGFEDisplacementMapElement>(null);
  const [stage, setStage] = useState<Stage>("notice");
  const [subText, setSubText] = useState("");
  const [percent, setPercent] = useState(0);
  const [visible, setVisible] = useState(true);
  const [glitchOffset, setGlitchOffset] = useState({ x: 0, y: 0 });
  const hasNavigated = useRef(false);
  const hasFadedOut = useRef(false);
  const [animDone, setAnimDone] = useState(false);
  const iconRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const pathname = usePathname();
  const rawId = useId();
  const filterId = `ls-fisheye-${rawId.replace(/[^a-zA-Z0-9_-]/g, "")}`;
  const pageLabel = pageName.toUpperCase();

  // Build a center-anchored radial displacement map (same technique as the
  // FisheyeCursor lens) once, sized to the viewport.
  useEffect(() => {
    const canvas = mapCanvasRef.current;
    const img = mapRef.current;
    if (!canvas || !img) return;

    const mapScale = 5;
    const w = Math.max(1, Math.round(window.innerWidth / mapScale));
    const h = Math.max(1, Math.round(window.innerHeight / mapScale));
    canvas.width = w;
    canvas.height = h;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const idata = ctx.createImageData(w, h);
    const data = idata.data;
    const cx = w / 2;
    const cy = h / 2;
    const r = Math.sqrt(cx * cx + cy * cy);

    for (let y = 0; y < h; y++) {
      for (let x = 0; x < w; x++) {
        const dx = x - cx;
        const dy = y - cy;
        const len = Math.sqrt(dx * dx + dy * dy);
        const i = (y * w + x) * 4;
        if (len >= r || len < 0.0001) {
          data[i] = 128;
          data[i + 1] = 128;
          data[i + 2] = 0;
          data[i + 3] = 255;
          continue;
        }
        const fall = 1 - len / r;
        const s = fall * fall * 128;
        const nx = dx / len;
        const ny = dy / len;
        data[i] = 128 - Math.round(nx * s);
        data[i + 1] = 128 - Math.round(ny * s);
        data[i + 2] = 0;
        data[i + 3] = 255;
      }
    }

    ctx.putImageData(idata, 0, 0);
    img.setAttribute("href", canvas.toDataURL("image/png"));
  }, []);

  const scrambleText = useCallback((targetStr: string, onComplete: () => void) => {
    let iteration = 0;
    const totalIterations = 25;

    const interval = setInterval(() => {
      const progress = iteration / totalIterations;

      const scrambled = targetStr
        .split("")
        .map((char, index) => {
          if (char === " ") return " ";
          if (index < progress * targetStr.length) {
            return targetStr[index];
          }
          return GLITCH_CHARS[Math.floor(Math.random() * GLITCH_CHARS.length)];
        })
        .join("");

      setSubText(scrambled);
      iteration++;

      if (iteration > totalIterations) {
        clearInterval(interval);
        setSubText(targetStr);
        onComplete();
      }
    }, 40);
  }, []);

  // Stage machine: NOTICE -> scramble "ATTEMPTING TO LOAD.." -> COMPLETE (fast, no 0-100%)
  useEffect(() => {
    const noticeTimer = setTimeout(() => {
      setStage("loading");
      const targetText = `ATTEMPTING TO LOAD ${pageLabel} PAGE...`;
      scrambleText(targetText, () => {
        setTimeout(() => {
          setSubText(`${pageLabel} PAGE LOADED`);
          setStage("complete");
          setTimeout(() => {
            if (!hasNavigated.current) {
              hasNavigated.current = true;
              setAnimDone(true);
              if (autoNavigate) {
                router.push(target);
              }
            }
          }, 700);
        }, 350);
      });
    }, 700);

    return () => clearTimeout(noticeTimer);
  }, [pageLabel, target, router, autoNavigate, scrambleText]);

  // Fisheye intro only: on entry the lens is big and settles to neutral.
  // No outro — the screen just fades out with a blur before the reveal.
  useEffect(() => {
    const fe = filterRef.current;
    if (!fe) return;

    if (stage !== "notice") return;

    const obj = { v: FISHEYE_MAX };
    const tl = gsap.timeline();
    tl.to(obj, {
      v: 0,
      duration: 1.5,
      ease: "power3.out",
      onUpdate: () => fe.setAttribute("scale", String(Math.round(obj.v))),
    });

    return () => {
      tl.kill();
    };
  }, [stage]);

  // Icon glitch effect
  useEffect(() => {
    const glitchIcon = () => {
      const offsetX = (Math.random() - 0.5) * 6;
      const offsetY = (Math.random() - 0.5) * 3;
      setGlitchOffset({ x: offsetX, y: offsetY });

      setTimeout(() => {
        setGlitchOffset({ x: 0, y: 0 });
      }, 60 + Math.random() * 100);
    };

    const interval = setInterval(() => {
      glitchIcon();
    }, 2000 + Math.random() * 2000);

    return () => clearInterval(interval);
  }, []);

  // Canvas background
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    let frameId: number;

    const draw = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.15)";
      ctx.fillRect(0, 0, width, height);

      for (let i = 0; i < 30; i++) {
        const x = Math.random() * width;
        const y = Math.random() * height;
        const w = Math.random() * 100 + 20;
        const h = Math.random() * 2 + 0.5;

        ctx.fillStyle = `rgba(40, 40, 40, ${Math.random() * 0.15})`;
        ctx.fillRect(x, y, w, h);
      }

      if (Math.random() > 0.95) {
        const sy = Math.random() * height;
        ctx.fillStyle = `rgba(255, 255, 255, ${Math.random() * 0.03})`;
        ctx.fillRect(0, sy, width, 1);
      }

      frameId = requestAnimationFrame(draw);
    };

    draw();

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener("resize", handleResize);
    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Only fade the screen out once the animation finished AND the destination
  // page has actually mounted (pathname changed), then unmount.
  useEffect(() => {
    if (animDone && pathname === target && !hasFadedOut.current) {
      hasFadedOut.current = true;
      setVisible(false);
      setTimeout(() => onComplete?.(), 600);
    }
  }, [animDone, pathname, target, onComplete]);

  const statusLabel =
    stage === "notice"
      ? "SYSTEM NOTICE"
      : stage === "loading"
        ? "PROCESSING"
        : stage === "progress"
          ? "LOADING"
          : "COMPLETE";

  return (
    <div
      className="fixed inset-0 bg-void z-[100] flex flex-col items-center justify-center"
      style={{
        opacity: visible ? 1 : 0,
        filter: visible ? "none" : "blur(14px)",
        transition: "opacity 0.5s ease-out, filter 0.5s ease-out",
        pointerEvents: visible ? "auto" : "none",
      }}
    >
      <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden>
        <defs>
          <filter
            id={filterId}
            x="0"
            y="0"
            width="100%"
            height="100%"
            colorInterpolationFilters="sRGB"
          >
            <feImage
              ref={mapRef}
              result="map"
              x="0"
              y="0"
              width="100%"
              height="100%"
              preserveAspectRatio="none"
            />
            <feDisplacementMap
              ref={filterRef}
              in="SourceGraphic"
              in2="map"
              scale={FISHEYE_MAX}
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </defs>
      </svg>
      <canvas ref={mapCanvasRef} className="hidden" aria-hidden />

      <canvas ref={canvasRef} className="absolute inset-0" />

      {/* Everything inside this wrapper gets the fisheye lens applied. */}
      <div
        className="absolute inset-0 flex flex-col items-center justify-center"
        style={{ filter: `url(#${filterId})` }}
      >
        <div
          ref={iconRef}
          className="relative mb-8"
          style={{
            transform: `translate(${glitchOffset.x}px, ${glitchOffset.y}px)`,
            transition: "transform 0.05s ease-out",
          }}
        >
          <svg
            width="120"
            height="104"
            viewBox="0 0 120 104"
            fill="none"
            className="drop-shadow-[0_0_30px_rgba(200,50,50,0.3)]"
          >
            <path
              d="M60 8L112 96H8L60 8Z"
              stroke="#c43030"
              strokeWidth="3"
              fill="rgba(196,48,48,0.08)"
            />
            <path
              d="M60 16L104 92H16L60 16Z"
              stroke="rgba(196,48,48,0.3)"
              strokeWidth="1"
              fill="none"
            />
            <rect x="56" y="36" width="8" height="32" fill="#c43030" rx="1" />
            <circle cx="60" cy="82" r="4" fill="#c43030" />
          </svg>

          <svg
            width="120"
            height="104"
            viewBox="0 0 120 104"
            fill="none"
            className="absolute inset-0 opacity-30"
            style={{
              transform: `translate(${glitchOffset.x * 2}px, ${glitchOffset.y * 2}px)`,
            }}
          >
            <path
              d="M60 8L112 96H8L60 8Z"
              stroke="#ff4444"
              strokeWidth="2"
              fill="none"
            />
            <rect x="56" y="36" width="8" height="32" fill="#ff4444" rx="1" />
            <circle cx="60" cy="82" r="4" fill="#ff4444" />
          </svg>
        </div>

          <div className="text-center">
            {stage === "notice" ? (
              <h1
                className={styles.notice}
                data-text="NOTICE"
                style={{
                  fontSize: "clamp(2.5rem, 6vw, 4rem)",
                  fontFamily: "'Courier New', monospace",
                }}
              >
                NOTICE
              </h1>
            ) : (
              <p
                className="text-base md:text-lg tracking-[0.25em] text-white uppercase font-mono"
                style={{ minHeight: "1.5em", textShadow: "0 0 12px rgba(255,255,255,0.25)" }}
              >
                {subText}
              </p>
            )}
        </div>

        <div className="mt-6 flex items-center gap-2">
          <span
            className="w-2 h-2 bg-red-500/60 rounded-full"
            style={{
              animation:
                stage === "notice" ? "none" : "blink 0.8s step-end infinite",
              opacity: stage === "notice" ? 0.3 : 1,
            }}
          />
          <span className="text-xs tracking-[0.3em] text-white uppercase font-mono">
            {statusLabel}
          </span>
        </div>

        {stage !== "notice" && (
          <div className="mt-8 w-48 h-px bg-fog/20 relative overflow-hidden">
            <div
              className="absolute top-0 left-0 h-full bg-red-500/60"
              style={{
                width: stage === "complete" ? "100%" : "60%",
                transition: "width 0.3s ease",
              }}
            />
          </div>
        )}
      </div>

      <div className="absolute top-8 left-8 w-12 h-12 border-l border-t border-fog/10" />
      <div className="absolute top-8 right-8 w-12 h-12 border-r border-t border-fog/10" />
      <div className="absolute bottom-8 left-8 w-12 h-12 border-l border-b border-fog/10" />
      <div className="absolute bottom-8 right-8 w-12 h-12 border-r border-b border-fog/10" />

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-xs tracking-[0.2em] text-white/80 uppercase font-mono">
        {stage !== "notice" ? "DO NOT INTERRUPT" : ""}
      </div>
    </div>
  );
}