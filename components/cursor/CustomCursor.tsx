"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const posRef = useRef({ x: 0, y: 0 });
  const targetRef = useRef({ x: 0, y: 0 });
  const isGridHoverRef = useRef(false);
  const hoveredElRef = useRef<HTMLElement | null>(null);
  const gridHoverSizeRef = useRef<{ w: number; h: number; radius: string } | null>(null);

  useEffect(() => {
    // Disable custom cursor on touch/mobile — native cursor + save CPU/battery
    if (typeof window !== "undefined" && (window.matchMedia("(pointer: coarse)").matches || window.innerWidth < 768)) return;
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    const gridSelector = ".skill-card, .exp-item, .contact-info-card";
    const controlSelector = "button, a, input, textarea, [contenteditable]";

    const updateRingForHover = (el: HTMLElement | null, isGrid: boolean) => {
      if (!ring) return;
      if (el) {
        const rect = el.getBoundingClientRect();
        const pad = isGrid ? 14 : 8;
        const w = rect.width + pad * 2;
        const h = rect.height + pad * 2;
        const radius = isGrid ? "16px" : "10px";
        gridHoverSizeRef.current = { w, h, radius };
        isGridHoverRef.current = true;
        hoveredElRef.current = el;
        // transparent background for rectangle bracket [ (grid box) ] or [button/input] — really fast
        ring.style.background = "transparent";
        ring.style.boxShadow = "none";
        ring.style.borderWidth = "1px";
        ring.style.borderColor = isGrid ? "rgba(221,221,221,0.9)" : "rgba(221,221,221,0.85)";
        ring.style.width = `${w}px`;
        ring.style.height = `${h}px`;
        ring.style.borderRadius = radius;
        dot.style.opacity = "0.7";
      } else {
        isGridHoverRef.current = false;
        hoveredElRef.current = null;
        gridHoverSizeRef.current = null;
        ring.style.background = "transparent";
        ring.style.boxShadow = "none";
        ring.style.borderWidth = "1px";
        ring.style.borderColor = "rgba(221,221,221,0.35)";
        ring.style.width = "";
        ring.style.height = "";
        ring.style.borderRadius = "";
        dot.style.opacity = "";
      }
    };

    const onPointerOver = (e: PointerEvent) => {
      const target = e.target as HTMLElement;
      const gridEl = target.closest(gridSelector) as HTMLElement | null;
      if (gridEl) {
        if (gridEl !== hoveredElRef.current) updateRingForHover(gridEl, true);
        return;
      }
      const controlEl = target.closest(controlSelector) as HTMLElement | null;
      if (controlEl && controlEl !== hoveredElRef.current) {
        updateRingForHover(controlEl, false);
        return;
      }
      if (hoveredElRef.current) {
        const stillOver = target.closest(`${gridSelector}, ${controlSelector}`);
        if (!stillOver) updateRingForHover(null, false);
      }
    };

    const onMouseMove = (e: MouseEvent) => {
      targetRef.current = { x: e.clientX, y: e.clientY };
      // If hovering grid, keep ring centered on element, not cursor
      if (isGridHoverRef.current && hoveredElRef.current) {
        const rect = hoveredElRef.current.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        // Override target for ring to snap to box center
        // Keep dot at cursor, ring at box center — we handle in animate loop via direct set when isGridHover
      }
    };

    // Legacy hover handling for non-grid interactive (keeps original dot/ring behavior if needed)
    const onMouseEnterInteractive = () => {
      if (!isGridHoverRef.current) ring.classList.add("hovering");
    };
    const onMouseLeaveInteractive = () => {
      if (!isGridHoverRef.current) ring.classList.remove("hovering");
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("pointerover", onPointerOver);
    window.addEventListener("pointerout", onPointerOver);

    // Fallback for older [data-cursor-hover] handling (kept for compatibility)
    const interactiveElements = document.querySelectorAll("a, button, [data-cursor-hover]");
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", onMouseEnterInteractive);
      el.addEventListener("mouseleave", onMouseLeaveInteractive);
    });

    let rafId: number;
    const animate = () => {
      // dot always follows cursor (snappy)
      dot.style.transform = `translate(${targetRef.current.x - 3}px, ${targetRef.current.y - 3}px)`;

      let rx: number, ry: number;
      if (isGridHoverRef.current && hoveredElRef.current) {
        // Ring smoothly glides to hovered box center — very smooth bracket [ (grid box) ]
        const rect = hoveredElRef.current.getBoundingClientRect();
        rx = rect.left + rect.width / 2;
        ry = rect.top + rect.height / 2;
      } else {
        rx = targetRef.current.x;
        ry = targetRef.current.y;
      }
      // really fast — snaps to box without lag
      posRef.current.x += (rx - posRef.current.x) * 0.38;
      posRef.current.y += (ry - posRef.current.y) * 0.38;
      ring.style.transform = `translate3d(${posRef.current.x}px, ${posRef.current.y}px, 0) translate(-50%, -50%)`;

      rafId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("pointerover", onPointerOver);
      window.removeEventListener("pointerout", onPointerOver);
      cancelAnimationFrame(rafId);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", onMouseEnterInteractive);
        el.removeEventListener("mouseleave", onMouseLeaveInteractive);
      });
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot hidden md:block" />
      <div ref={ringRef} className="cursor-ring hidden md:block" />
    </>
  );
}
