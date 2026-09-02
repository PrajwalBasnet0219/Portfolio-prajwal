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

import { useEffect, useId, useRef, useState } from "react";

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
  const isRectRef = useRef(false);
  const hoveredElRef = useRef<HTMLElement | null>(null);
  const hoveredRectRef = useRef<{ w: number; h: number } | null>(null);
  const [isEnabled, setIsEnabled] = useState(true);

  useEffect(() => {
    const check = () => window.matchMedia("(pointer: coarse)").matches || window.innerWidth < 768 || window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setIsEnabled(!check());
    const onResize = () => setIsEnabled(!check());
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    if (!isEnabled) return;
    const root = rootRef.current;
    if (!root) return;

    const target = { x: -9999, y: -9999 };
    const current = { x: -9999, y: -9999 };
    let moved = false;
    let lastEncoded = "";
    let raf = 0;

    // Only grid boxes become rectangle [ (grid box) ]; everything else stays circle
    const gridSelector = ".skill-card, .exp-item, .contact-info-card";
    const onPointerOver = (e: PointerEvent) => {
      const targetEl = e.target as HTMLElement;
      const gridEl = targetEl?.closest?.(gridSelector) as HTMLElement | null;
      const shouldRect = !!gridEl;
      const prevRect = isRectRef.current;
      isRectRef.current = shouldRect;
      hoveredElRef.current = gridEl;

      if (shouldRect && gridEl) {
        const rect = gridEl.getBoundingClientRect();
        const rootRect = root.getBoundingClientRect();
        const pad = 14;
        const w = rect.width + pad * 2;
        const h = rect.height + pad * 2;
        hoveredRectRef.current = { w, h };
        // Lock lens to grid center — background will bend only outside the rectangle
        target.x = rect.left + rect.width / 2 - rootRect.left;
        target.y = rect.top + rect.height / 2 - rootRect.top;
        if (ringRef.current) {
          ringRef.current.style.width = `${w}px`;
          ringRef.current.style.height = `${h}px`;
          ringRef.current.style.borderRadius = "16px";
          ringRef.current.style.opacity = "1";
        }
        if (!moved) {
          moved = true;
          current.x = target.x;
          current.y = target.y;
          rebuild();
          updateRing();
        }
      } else if (!shouldRect && prevRect) {
        hoveredRectRef.current = null;
        hoveredElRef.current = null;
        if (ringRef.current) {
          ringRef.current.style.width = `${radius * 2}px`;
          ringRef.current.style.height = `${radius * 2}px`;
          ringRef.current.style.borderRadius = "50%";
        }
      }
    };
    window.addEventListener("pointerover", onPointerOver);
    window.addEventListener("pointerout", onPointerOver);

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

      const isRect = isRectRef.current;
      const hovered = hoveredRectRef.current;
      const rectHalfW = hovered ? hovered.w / 2 / mapScale : 80 / mapScale;
      const rectHalfH = hovered ? hovered.h / 2 / mapScale : 22 / mapScale;
      for (let y = 0; y < h; y++) {
        for (let x = 0; x < w; x++) {
          const dx = x - cx;
          const dy = y - cy;
          const i = (y * w + x) * 4;
          let fall = 0;
          let nx = 0;
          let ny = 0;
          let inside = false;
          if (isRect) {
            const ax = Math.abs(dx) / (rectHalfW || 1);
            const ay = Math.abs(dy) / (rectHalfH || 1);
            const outerDist = Math.max(ax, ay);
            // Only outside the rectangle bends — inside is pure grid content, no background warp
            // Big radius edge: warp extends ~38% beyond border like air flowing around wall
            if (outerDist < 1) {
              inside = false;
            } else if (outerDist < 1.38) {
              fall = 1 - (outerDist - 1) / 0.38;
              fall = Math.pow(fall, 1.2);
              nx = dx / (rectHalfW || 1);
              ny = dy / (rectHalfH || 1);
              const nlen = Math.sqrt(nx * nx + ny * ny) || 1;
              nx /= nlen;
              ny /= nlen;
              inside = true;
            } else {
              inside = false;
            }
          } else {
            const len = Math.sqrt(dx * dx + dy * dy);
            if (len < r && len >= 0.0001) {
              fall = 1 - len / r;
              nx = dx / len;
              ny = dy / len;
              inside = true;
            }
          }
          if (!inside) {
            data[i] = 128;
            data[i + 1] = 128;
            data[i + 2] = 0;
            data[i + 3] = 255;
            continue;
          }
          const s = fall * fall * (isRect ? 145 : 128);
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
      // When hovering a grid box, lens is locked to the box center (big bracket), not cursor
      if (isRectRef.current && hoveredElRef.current) return;
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
      window.removeEventListener("pointerover", onPointerOver);
      window.removeEventListener("pointerout", onPointerOver);
    };
  }, [damping, mapScale, radius, isEnabled]);

  if (!isEnabled) {
    return (
      <div ref={rootRef} className={className} style={{ overflow: "hidden" }}>
        {children}
      </div>
    );
  }

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
              transition: "opacity 0.3s ease, width 0.14s cubic-bezier(0.2,0.9,0.2,1), height 0.14s cubic-bezier(0.2,0.9,0.2,1), border-radius 0.14s ease",
            }}
        />
      )}
      <canvas ref={mapRef} className="hidden" aria-hidden />
    </div>
  );
}