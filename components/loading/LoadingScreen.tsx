"use client";

import { useEffect, useRef, useState, useCallback, useId } from "react";
import { useRouter, usePathname } from "next/navigation";
import gsap from "gsap";
import styles from "./LoadingScreen.module.css";
import SolvingOrb from "../effects/SolvingOrb";

const GLITCH_CHARS = "▓▒░█▄▀■□▪▫◊◦●○◐◑◒◓◔◕◖◗◘◙◚◛◜◝◞◟◠◡◢◣◤◥◦◧◨◩◪◫◬◭◮◯";
const FISHEYE_MAX = 110;
// Session memo: once a real probe has completed, repeat navigations skip
// re-downloading the probe asset and ramp from the known-good link instead.
let sessionProbeWarmed = false;

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
  const [visible, setVisible] = useState(true);
  // Real loading progress (0..1) driven by the network probe below.
  const [progress, setProgress] = useState(0);
  const progressRef = useRef(0);
  // Link info shown in the status line (from the Network Information API).
  const [linkLabel, setLinkLabel] = useState("UNKNOWN LINK");
  const [speedLabel, setSpeedLabel] = useState("--");
  const mountTimeRef = useRef(0);
  const scrambleTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const hasNavigated = useRef(false);
  const hasFadedOut = useRef(false);
  const [animDone, setAnimDone] = useState(false);

  const setProgressSafe = useCallback((v: number) => {
    const clamped = Math.max(progressRef.current, Math.min(1, v));
    progressRef.current = clamped;
    setProgress(clamped);
  }, []);
  // Shrink the orb on narrow screens so it never crowds the text.
  const [orbSize, setOrbSize] = useState(132);
  useEffect(() => {
    const fit = () => {
      const w = window.innerWidth;
      setOrbSize(w < 380 ? 100 : w < 640 ? 116 : 132);
    };
    fit();
    window.addEventListener("resize", fit);
    return () => window.removeEventListener("resize", fit);
  }, []);
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

  // Guards async stage-machine callbacks so unmounting mid-sequence
  // (navigation completing) never fires setState on an unmounted screen.
  // Reset on mount so StrictMode remounts (dev) can't leave it stuck false.
  const aliveRef = useRef(true);
  useEffect(() => {
    aliveRef.current = true;
    return () => {
      aliveRef.current = false;
      if (scrambleTimerRef.current) clearInterval(scrambleTimerRef.current);
    };
  }, []);

  const scrambleText = useCallback((targetStr: string, onComplete: () => void) => {
    let iteration = 0;
    const totalIterations = 25;

    const interval = setInterval(() => {
      if (!aliveRef.current) {
        clearInterval(interval);
        return;
      }
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
        scrambleTimerRef.current = null;
        if (!aliveRef.current) return;
        setSubText(targetStr);
        onComplete();
      }
    }, 40);
    scrambleTimerRef.current = interval;
  }, []);

  // Stage machine: NOTICE -> scramble "ATTEMPTING TO LOAD.." while the
  // network probe measures the real link. Completion (LOADED + fade) is
  // driven by measured progress, not timers — see the probe effect below.
  useEffect(() => {
    const noticeTimer = setTimeout(() => {
      if (!aliveRef.current) return;
      setStage("loading");
      const targetText = `ATTEMPTING TO LOAD ${pageLabel} PAGE...`;
      scrambleText(targetText, () => {
        // Text settles; the probe decides when we actually advance.
      });
    }, 700);

    return () => clearTimeout(noticeTimer);
  }, [pageLabel, scrambleText]);

  // Real loading probe: downloads a representative asset byte-by-byte so
  // the bar follows actual throughput (slow wifi = honest slow bar, cached
  // revisit = instant). Falls back to timed completion if the probe stalls.
  // Warmed once per session — repeat navigations reuse the known-good link
  // with a fast ramp instead of re-downloading the probe asset every time.
  useEffect(() => {
    mountTimeRef.current = performance.now();
    const conn = (navigator as unknown as {
      connection?: { effectiveType?: string; downlink?: number; saveData?: boolean };
    }).connection;
    if (conn?.effectiveType) {
      const type = conn.effectiveType.toUpperCase().replace("-", " ");
      setLinkLabel(conn.saveData ? `${type} · SAVE DATA` : `${type}`);
    } else {
      setLinkLabel("UNKNOWN LINK");
    }

    // Repeat visits: the link is already measured — ramp quickly instead of
    // fetching the probe asset on every single navigation.
    if (sessionProbeWarmed) {
      setSpeedLabel("CACHED");
      const ramp = setInterval(() => {
        if (!aliveRef.current) {
          clearInterval(ramp);
          return;
        }
        if (progressRef.current >= 1) {
          clearInterval(ramp);
          return;
        }
        setProgressSafe(progressRef.current + 0.07);
      }, 90);
      const failsafe = setTimeout(() => {
        clearInterval(ramp);
        if (aliveRef.current) setProgressSafe(1);
      }, 5000);
      return () => {
        clearInterval(ramp);
        clearTimeout(failsafe);
      };
    }

    const ctrl = new AbortController();
    const failsafe = setTimeout(() => {
      ctrl.abort();
      if (aliveRef.current) setProgressSafe(1);
    }, 8000);

    (async () => {
      try {
        const res = await fetch("/img/p1.png", { signal: ctrl.signal });
        const total = Number(res.headers.get("content-length")) || 0;
        const reader = res.body?.getReader();
        if (!reader) {
          if (aliveRef.current) setProgressSafe(1);
          return;
        }
        let loaded = 0;
        const t0 = performance.now();
        let lastSpeedAt = 0;
        for (;;) {
          const { done, value } = await reader.read();
          if (done) break;
          loaded += value.byteLength;
          const nowMs = performance.now();
          const dt = (nowMs - t0) / 1000;
          // Throttled readout (4×/s max) in megabytes/sec — no render storm.
          if (dt > 0.2 && nowMs - lastSpeedAt > 250 && aliveRef.current) {
            lastSpeedAt = nowMs;
            const mbs = (loaded / dt / 1e6).toFixed(1);
            setSpeedLabel(`${mbs} MB/S`);
          }
          if (!aliveRef.current) return;
          if (total > 0) setProgressSafe(0.05 + 0.8 * (loaded / total));
          else setProgressSafe(0.05 + Math.min(0.8, (loaded / 500000) * 0.8));
        }
        sessionProbeWarmed = true;
        if (!aliveRef.current) return;
        setProgressSafe(0.9);
        // Gate the last stretch on the document actually being ready
        // (initial loads), capped so a stalled parser can't hang us.
        if (document.readyState !== "complete") {
          await new Promise<void>((resolve) => {
            if (document.readyState === "complete") return resolve();
            window.addEventListener("load", () => resolve(), { once: true });
            setTimeout(() => resolve(), 4000);
          });
        }
        try {
          await document.fonts.ready;
        } catch {
          /* fonts are decorative — never block on them */
        }
        if (aliveRef.current) setProgressSafe(1);
      } catch {
        // Aborted, offline, or probe failed — fall back to timed completion.
        if (aliveRef.current) setProgressSafe(1);
      } finally {
        clearTimeout(failsafe);
      }
    })();

    return () => {
      ctrl.abort();
      clearTimeout(failsafe);
    };
  }, [setProgressSafe]);

  // Completion: once measured progress hits 100% (and the screen has been
  // up long enough to read), stop any running scramble and run the LOADED
  // sequence. The existing fade still waits for the route to mount.
  useEffect(() => {
    if (progress < 1) return;
    const timers: ReturnType<typeof setTimeout>[] = [];
    const elapsed = performance.now() - (mountTimeRef.current || performance.now());
    const wait = 350 + Math.max(0, 2200 - elapsed);
    timers.push(
      setTimeout(() => {
        if (!aliveRef.current) return;
        if (scrambleTimerRef.current) {
          clearInterval(scrambleTimerRef.current);
          scrambleTimerRef.current = null;
        }
        setSubText(`${pageLabel} PAGE LOADED`);
        setStage("complete");
        timers.push(
          setTimeout(() => {
            if (!aliveRef.current) return;
            if (!hasNavigated.current) {
              hasNavigated.current = true;
              setAnimDone(true);
              if (autoNavigate) {
                router.push(target);
              }
            }
          }, 700)
        );
      }, wait)
    );
    return () => timers.forEach(clearTimeout);
  }, [progress, pageLabel, target, router, autoNavigate]);

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

  // Canvas background — monochrome "window glitch" theme: faint static most
  // of the time, interrupted by brief bursts of slice tearing, block
  // artifacts, vertical roll and invert flashes, like a corrupted feed.
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Cap backing store DPR: identical look, far cheaper on 3x phones.
    // CSS (w-full h-full) stretches it to the viewport.
    const bdpr = Math.min(window.devicePixelRatio || 1, 1.5);
    let width = Math.max(1, Math.round(window.innerWidth * bdpr));
    let height = Math.max(1, Math.round(window.innerHeight * bdpr));
    canvas.width = width;
    canvas.height = height;

    let frameId: number;
    let burstUntil = 0;
    let nextBurst = performance.now() + 1000 + Math.random() * 1800;

    const draw = () => {
      const now = performance.now();
      if (now >= nextBurst) {
        burstUntil = now + 150 + Math.random() * 280;
        const gap = burstUntil - now + (Math.random() > 0.62 ? 80 + Math.random() * 130 : 1200 + Math.random() * 2800);
        nextBurst = now + gap;
      }
      const bursting = now < burstUntil;

      ctx.fillStyle = "rgba(0, 0, 0, 0.22)";
      ctx.fillRect(0, 0, width, height);

      for (let i = 0; i < 18; i++) {
        const x = Math.random() * width;
        const y = Math.random() * height;
        const w = Math.random() * 100 + 20;
        const h = Math.random() * 2 + 0.5;

        ctx.fillStyle = `rgba(40, 40, 40, ${Math.random() * 0.15})`;
        ctx.fillRect(x, y, w, h);
      }

      if (bursting) {
        // Horizontal slice tearing — shifted strips of the frame itself.
        const slices = 6 + Math.floor(Math.random() * 9);
        for (let i = 0; i < slices; i++) {
          const sy = Math.random() * height;
          const sh = 2 + Math.random() * 16;
          const dx = (Math.random() - 0.5) * (30 + Math.random() * 90);
          ctx.drawImage(canvas, 0, sy, width, sh, dx, sy, width, sh);
        }

        // Block artifacts.
        for (let i = 0; i < 3; i++) {
          const bw = 20 + Math.random() * 90;
          const bh = 4 + Math.random() * 18;
          const bx = Math.random() * width;
          const by = Math.random() * height;
          ctx.fillStyle = Math.random() > 0.5
            ? `rgba(0, 0, 0, ${0.5 + Math.random() * 0.5})`
            : `rgba(200, 200, 200, ${0.08 + Math.random() * 0.15})`;
          ctx.fillRect(bx, by, bw, bh);
        }

        // Vertical roll.
        if (Math.random() > 0.72) {
          const dy = (Math.random() - 0.5) * 36;
          ctx.drawImage(canvas, 0, 0, width, height, 0, dy, width, height);
        }
      } else if (Math.random() > 0.96) {
        // Rare faint tear line between bursts.
        const sy = Math.random() * height;
        ctx.fillStyle = `rgba(255, 255, 255, ${Math.random() * 0.05})`;
        ctx.fillRect(0, sy, width, 1);
      }

      frameId = requestAnimationFrame(draw);
    };

    draw();

    const handleResize = () => {
      const d = Math.min(window.devicePixelRatio || 1, 1.5);
      width = Math.max(1, Math.round(window.innerWidth * d));
      height = Math.max(1, Math.round(window.innerHeight * d));
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
    if (!(animDone && pathname === target && !hasFadedOut.current)) return;
    hasFadedOut.current = true;
    setVisible(false);
    const id = setTimeout(() => onComplete?.(), 600);
    return () => clearTimeout(id);
  }, [animDone, pathname, target, onComplete]);

  const statusLabel =
    stage === "notice"
      ? "SYSTEM NOTICE"
      : stage === "loading"
        ? `${linkLabel} · ${speedLabel} · ${Math.round(progress * 100)}%`
        : stage === "progress"
          ? "LOADING"
          : "COMPLETE";

  return (
    <div
      role="progressbar"
      aria-label={`Loading ${pageLabel} page`}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(progress * 100)}
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

      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      {/* Dense scanlines — the analog-static theme */}
      <div className={styles.staticLines} aria-hidden />

      {/* Everything inside this wrapper gets the fisheye lens applied. */}
      <div
        className="absolute inset-0 flex flex-col items-center justify-center"
        style={{ filter: `url(#${filterId})` }}
      >
        <div className="relative mb-6 md:mb-8" style={{ filter: "drop-shadow(0 0 24px rgba(255,255,255,0.12))" }}>
          <SolvingOrb size={orbSize} />
        </div>

          <div className="text-center px-4">
            {stage === "notice" ? (
              <h1
                className={`${styles.notice} ${styles.rgbSplit}`}
                data-text="NOTICE"
                style={{
                  fontSize: "clamp(2rem, 11vw, 4rem)",
                  fontFamily: "'Courier New', monospace",
                }}
              >
                NOTICE
              </h1>
            ) : (
              <p
                className={`text-sm md:text-lg tracking-[0.12em] md:tracking-[0.25em] text-white uppercase max-w-[94vw] break-words ${styles.termText} ${styles.rgbSplitSoft}`}
                style={{ minHeight: "1.5em" }}
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
          <span className={`text-[10px] md:text-xs tracking-[0.18em] md:tracking-[0.3em] text-white uppercase text-center max-w-[92vw] ${styles.termText}`}>
            {statusLabel}
          </span>
        </div>

        {stage !== "notice" && (
          <div className="mt-8 w-48 md:w-64 h-px bg-fog/20 relative overflow-hidden">
            <div
              className="absolute top-0 left-0 h-full bg-red-500/60"
              style={{
                width: `${Math.round(progress * 100)}%`,
                transition: "width 0.2s linear",
              }}
            />
          </div>
        )}
      </div>

      <div className="absolute top-8 left-8 w-12 h-12 border-l border-t border-fog/10" />
      <div className="absolute top-8 right-8 w-12 h-12 border-r border-t border-fog/10" />
      <div className="absolute bottom-8 left-8 w-12 h-12 border-l border-b border-fog/10" />
      <div className="absolute bottom-8 right-8 w-12 h-12 border-r border-b border-fog/10" />

      <div className={`absolute bottom-8 left-1/2 -translate-x-1/2 px-4 text-center whitespace-nowrap text-xs tracking-[0.2em] text-white/80 uppercase ${styles.termText}`}>
        {stage !== "notice" ? "DO NOT INTERRUPT" : ""}
      </div>
    </div>
  );
}