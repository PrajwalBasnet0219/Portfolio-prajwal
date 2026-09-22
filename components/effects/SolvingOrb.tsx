"use client";

/**
 * SolvingOrb — dotted "solving" thought-orb.
 *
 * Animation math adapted from `thinking-orbs` by Jakub Antalik / RareFormLabs
 * (MIT License): a lat/long dot sphere whose bands twist in eased quarter
 * turns — scramble, then replay in reverse so everything clicks back to
 * solved, rests, repeats. Rendered on a plain 2D canvas (no WebGL/filters).
 *
 * Self-contained port of the `rubik` mode at the shipped `solving@64`
 * tuning (speed 1.82, count ×0.35, size ×1.05). The loop pauses offscreen
 * and when the tab is hidden, resuming in phase; `prefers-reduced-motion`
 * renders a single static frame.
 */

import { useEffect, useRef } from "react";

interface SolvingOrbProps {
  size?: number;
  className?: string;
  label?: string;
}

// --- core primitives (thinking-orbs engine/core.ts) ------------------------

interface Dot {
  x: number;
  y: number;
  z: number;
  r: number;
  white: number;
  a?: number;
}

function hashD(a: number, b: number): number {
  const h = Math.sin(a * 12.9898 + b * 78.233) * 43758.5453;
  return h - Math.floor(h);
}

type Projector = (x: number, y: number, z: number) => [number, number, number];

function makeProj(yaw: number, tilt: number, cx: number, cy: number, scale: number): Projector {
  const st = Math.sin(tilt);
  const ct = Math.cos(tilt);
  const sy = Math.sin(yaw);
  const cyw = Math.cos(yaw);
  return (x, y, z) => {
    const x1 = x * cyw + z * sy;
    const z1 = -x * sy + z * cyw;
    const y1 = y * ct - z1 * st;
    const z2 = y * st + z1 * ct;
    return [cx + x1 * scale, cy - y1 * scale, z2];
  };
}

function radiusScale(size: number, pow: number): number {
  return (size / 300) ** pow;
}

function paint(ctx: CanvasRenderingContext2D, dots: Dot[], dark: boolean, rMin = 0.3): void {
  dots.sort((a, b) => a.z - b.z);
  for (const d of dots) {
    const alpha = d.a ?? 1;
    if (alpha < 0.02) continue;
    const w = Math.min(1, Math.max(0, d.white));
    const g = Math.round((dark ? 1 - w : w) * 255);
    ctx.fillStyle = `rgba(${g},${g},${g},${alpha})`;
    ctx.beginPath();
    ctx.arc(d.x, d.y, Math.max(rMin, d.r), 0, Math.PI * 2);
    ctx.fill();
  }
}

// --- rubik solver heartbeat (thinking-orbs engine/lattice.ts) --------------

interface Move {
  axis: 0 | 1 | 2;
  lo: number;
  hi: number;
  ang: number;
}

function solveCycle(time: number, count: number, slotDur: number, rest: number) {
  const cyc = 2 * count * slotDur + rest;
  const tc = time % cyc;
  const amount = new Array<number>(count).fill(0);
  let active = -1;
  if (tc < 2 * count * slotDur) {
    const slot = Math.floor(tc / slotDur);
    const p = (tc - slot * slotDur) / slotDur;
    const cl = Math.min(1, p / 0.7);
    const ep = 1 - (1 - cl) ** 3; // machine ease-out
    if (slot < count) {
      for (let i = 0; i < slot; i++) amount[i] = 1;
      amount[slot] = ep;
      active = slot;
    } else {
      const u = 2 * count - 1 - slot;
      for (let i = 0; i < u; i++) amount[i] = 1;
      amount[u] = 1 - ep;
      active = u;
    }
  }
  return { amount, active };
}

function applyMoves(
  pt3: [number, number, number],
  moves: Move[],
  sc: { amount: number[]; active: number }
): [number, number, number, boolean] {
  let [x, y, z] = pt3;
  let inActive = false;
  for (let i = 0; i < moves.length; i++) {
    if (sc.amount[i] <= 0) continue;
    const mv = moves[i];
    const coord = mv.axis === 0 ? x : mv.axis === 1 ? y : z;
    if (coord < mv.lo || coord >= mv.hi) continue;
    if (i === sc.active) inActive = true;
    const a = mv.ang * sc.amount[i];
    const ca = Math.cos(a);
    const sa = Math.sin(a);
    if (mv.axis === 0) {
      const y2 = y * ca - z * sa;
      z = y * sa + z * ca;
      y = y2;
    } else if (mv.axis === 1) {
      const x2 = x * ca + z * sa;
      z = -x * sa + z * ca;
      x = x2;
    } else {
      const x2 = x * ca - y * sa;
      y = x * sa + y * ca;
      x = x2;
    }
  }
  return [x, y, z, inActive];
}

function makeMoves(count: number): Move[] {
  const moves: Move[] = [];
  for (let i = 0; i < count; i++) {
    const axis = Math.min(2, Math.floor(hashD(i, 2.3) * 3)) as 0 | 1 | 2;
    const lo = -1.0 + 0.5 * Math.min(3, Math.floor(hashD(i, 5.9) * 4));
    const dir = hashD(i, 7.7) < 0.5 ? 1 : -1;
    moves.push({ axis, lo, hi: lo + 0.5, ang: (dir * Math.PI) / 2 });
  }
  return moves;
}

// Resolved `solving@64` tuning: base rubik profile × count 0.35 (√ per
// lattice side) × size 1.05, speed 1.82.
const SPEED = 1.82;
const LAT_RINGS = Math.max(2, Math.round(15 * Math.sqrt(0.35)));
const LON_DENSITY = Math.max(2, Math.round(40 * Math.sqrt(0.35)));
const R_BASE = 0.6 * 1.05;
const R_DEPTH = 1.7 * 1.05;
const R_ACTIVE = 0.3 * 1.05;
const INK_FAR = 0.62;
const INK_SPAN = 0.54;
const RS_POW = 0.6;
const R_MIN = 0.3;
const MOVE_COUNT = 14;

const MOVES = makeMoves(MOVE_COUNT);

function drawSolving(ctx: CanvasRenderingContext2D, size: number, t: number, glitch = 0): void {
  const cx = size / 2;
  const cy = size / 2;
  const R = (size / 2) * 0.82;
  const pt = makeProj(t * 0.55, 0.35 + 0.1 * Math.sin(t * 0.9), cx, cy, R);
  const rs = radiusScale(size, RS_POW);
  const sc = solveCycle(t, MOVE_COUNT, 0.42, 1.2);

  const dots: Dot[] = [];
  for (let li = 0; li <= LAT_RINGS; li++) {
    const lat = -Math.PI / 2 + (li / LAT_RINGS) * Math.PI;
    const cosLat = Math.cos(lat);
    const sinLat = Math.sin(lat);
    const lonCount = Math.max(1, Math.round(Math.abs(cosLat) * LON_DENSITY));
    for (let lj = 0; lj < lonCount; lj++) {
      const lon = (lj / lonCount) * 2 * Math.PI;
      const [x, y, z, inActive] = applyMoves(
        [cosLat * Math.cos(lon), sinLat, cosLat * Math.sin(lon)],
        MOVES,
        sc
      );
      let [px, py, zr] = pt(x, y, z);
      const depth = (zr + 1) / 2;
      // Data-corruption: a crawling subset of dots tears sideways mid-burst.
      let rr = (R_BASE + R_DEPTH * depth + (inActive ? R_ACTIVE : 0)) * rs;
      if (glitch > 0 && Math.random() < glitch * 0.4) {
        px += (Math.random() - 0.5) * 34 * glitch;
        rr *= 1 + Math.random() * 0.8 * glitch;
      }
      dots.push({
        x: px,
        y: py,
        z: zr,
        r: rr,
        white: INK_FAR - INK_SPAN * depth - (inActive ? 0.14 : 0),
      });
    }
  }
  paint(ctx, dots, true, R_MIN);
}

// --- component --------------------------------------------------------------

export default function SolvingOrb({ size = 132, className = "", label = "Solving" }: SolvingOrbProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    // DPR in a ref: re-resolved on resize so the orb never goes blurry
    // after zoom or a monitor switch.
    const dprRef = { current: Math.min(window.devicePixelRatio || 1, 2) };
    const paintStatic = () => {
      ctx.clearRect(0, 0, size, size);
      drawSolving(ctx, size, 1.0);
    };
    const applyBackingSize = () => {
      const d = Math.min(window.devicePixelRatio || 1, 2);
      dprRef.current = d;
      canvas.width = Math.round(size * d);
      canvas.height = Math.round(size * d);
      ctx.setTransform(d, 0, 0, d, 0, 0);
      // Resizing clears the canvas — repaint the frozen frame immediately.
      if (reduced) paintStatic();
    };
    applyBackingSize();
    window.addEventListener("resize", applyBackingSize);

    if (reduced) {
      paintStatic();
      return () => window.removeEventListener("resize", applyBackingSize);
    }

    let raf = 0;
    let inView = true;
    let sim = 0;
    let last = performance.now();
    // Glitch-burst scheduler: calm most of the time, brief tears every few seconds.
    let burstUntil = 0;
    let nextBurst = performance.now() + 1400 + Math.random() * 2200;

    const io = new IntersectionObserver(([entry]) => {
      inView = entry.isIntersecting;
      last = performance.now();
    });
    io.observe(canvas);

    const loop = (now: number) => {
      raf = requestAnimationFrame(loop);
      const dt = Math.min(0.1, (now - last) / 1000);
      last = now;
      if (!inView || document.hidden) return;

      if (now >= nextBurst) {
        burstUntil = now + 130 + Math.random() * 260;
        // Occasional stutter: a second burst right after the first.
        const gap = burstUntil - now + (Math.random() > 0.6 ? 90 + Math.random() * 140 : 1100 + Math.random() * 2600);
        nextBurst = now + gap;
      }
      const bursting = now < burstUntil;
      const g = bursting ? 1 : 0;

      sim += dt;
      ctx.clearRect(0, 0, size, size);

      // Whole-orb jitter + frame stutter mid-burst.
      ctx.save();
      if (bursting) ctx.translate((Math.random() - 0.5) * 6, (Math.random() - 0.5) * 6);
      if (!(bursting && Math.random() > 0.82)) {
        drawSolving(ctx, size, sim * SPEED, g);
      }
      ctx.restore();

      // Horizontal slice-tear pass (device pixels).
      if (bursting) {
        const d = dprRef.current;
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        const W = canvas.width;
        const H = canvas.height;
        const slices = 3 + Math.floor(Math.random() * 4);
        for (let i = 0; i < slices; i++) {
          const sy = Math.random() * H;
          const sh = (2 + Math.random() * 7) * d;
          const dx = (Math.random() - 0.5) * 26 * d;
          ctx.drawImage(canvas, 0, sy, W, sh, dx, sy, W, sh);
        }
        ctx.setTransform(d, 0, 0, d, 0, 0);
      }
    };
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      window.removeEventListener("resize", applyBackingSize);
    };
  }, [size]);

  return (
    <canvas
      ref={canvasRef}
      role="img"
      aria-label={label}
      className={className}
      style={{ width: size, height: size }}
    />
  );
}
