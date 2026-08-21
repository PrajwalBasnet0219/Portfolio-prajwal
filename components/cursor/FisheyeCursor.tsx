"use client";

/**
 * FisheyeCursor.tsx
 * ---------------------------------------------------------------------------
 * A cursor-following fisheye lens that ONLY warps whatever it wraps (the
 * background layer). Content rendered above it stays untouched.
 *
 * How it works: the wrapped background sits inside a div with an SVG
 * `feDisplacementMap` filter. The displacement map is a small offscreen canvas
 * redrawn each frame with a radial "sink" centered on the cursor — pixels near
 * the cursor are pulled toward the center (pushed outward) and blend smoothly to
 * nothing at the lens border, like content being pushed away from the cursor.
 *
 * A faint glowing ring marks the lens edge so the light-bending is visible.
 */

import { useEffect, useId, useRef } from "react";

export interface FisheyeCursorProps {
  className?: string;
  children?: React.ReactNode;
  /** Max outward displacement in px at the lens center. */
  strength?: number;
  /** Lens radius in px. */
  radius?: number;
  /** Displacement-map resolution divisor (higher = cheaper, chunkier). */
  mapScale?: number;
  /** Smoothing factor for cursor follow (0..1). */
  damping?: number;
  /** Show the glowing lens ring. */
  ring?: boolean;
  ringColor?: string;
}

export default function FisheyeCursor({
  className,
  children,
  strength = 110,
  radius = 380,
  mapScale = 5,
  damping = 0.16,
  ring = true,
  ringColor = "#ffffff",
}: FisheyeCursorProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<HTMLCanvasElement>(null);
  const imageRef = useRef<SVGFEImageElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const rawId = useId();
  const filterId = `fisheye-${rawId.replace(/[^a-zA-Z0-9_-]/g, "")}`;

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const target = { x: -9999, y: -9999 };
    const current = { x: -9999, y: -9999 };
    let moved = false;
    let lastEncoded = "";
    let raf = 0;

    const canvas = mapRef.current;

    const rebuild = () => {
      if (!canvas || !imageRef.current) return;
      const rect = root.getBoundingClientRect();
      const w = Math.max(1, Math.round(rect.width / mapScale));
      const h = Math.max(1, Math.round(rect.height / mapScale));
      if (canvas.width !== w) canvas.width = w;
      if (canvas.height !== h) canvas.height = h;

      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      const img = ctx.createImageData(w, h);
      const data = img.data;

      const cx = current.x / mapScale;
      const cy = current.y / mapScale;
      const r = radius / mapScale;

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

      ctx.putImageData(img, 0, 0);
      const url = canvas.toDataURL("image/png");
      if (url !== lastEncoded) {
        lastEncoded = url;
        imageRef.current.setAttribute("href", url);
      }
    };

    const updateRing = () => {
      if (!ringRef.current) return;
      ringRef.current.style.transform = `translate3d(${current.x}px, ${current.y}px, 0) translate(-50%, -50%)`;
    };

    const onMove = (e: PointerEvent) => {
      // Map the cursor to the lens root's local coordinates so the lens
      // follows the pointer correctly even when the root isn't the viewport
      // (e.g. a FisheyeCursor scoped to the footer).
      const rect = root.getBoundingClientRect();
      target.x = e.clientX - rect.left;
      target.y = e.clientY - rect.top;
      // Snap onto the cursor on the first move instead of easing in from
      // the top-left corner on page load.
      if (!moved) {
        moved = true;
        current.x = target.x;
        current.y = target.y;
        if (ringRef.current) ringRef.current.style.opacity = "1";
        rebuild();
        updateRing();
      }
    };

    const loop = () => {
      raf = requestAnimationFrame(loop);
      const dx = target.x - current.x;
      const dy = target.y - current.y;
      if (Math.abs(dx) > 0.02 || Math.abs(dy) > 0.02) {
        current.x += dx * damping;
        current.y += dy * damping;
        rebuild();
        updateRing();
      }
    };

    window.addEventListener("pointermove", onMove);
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
    };
  }, [damping, mapScale, radius]);

  return (
    <div
      ref={rootRef}
      className={className}
      style={{ overflow: "hidden", pointerEvents: "none" }}
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
            <feImage ref={imageRef} result="map" x="0" y="0" width="100%" height="100%" preserveAspectRatio="none" />
            <feDisplacementMap
              in="SourceGraphic"
              in2="map"
              scale={strength}
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </defs>
      </svg>

      <div className="absolute inset-0" style={{ filter: `url(#${filterId})` }}>
        {children}
      </div>

      {ring && (
        <div
          ref={ringRef}
          className="fisheye-ring"
style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: radius * 2,
              height: radius * 2,
              borderColor: ringColor,
              opacity: 0,
              transition: "opacity 0.4s ease",
            }}
        />
      )}
      <canvas ref={mapRef} className="hidden" aria-hidden />
    </div>
  );
}