"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Locks body scrolling only during the home-page intro (shutter curtain),
 * matching the ShutterLoader CSS timing (4.6s delay + 0.6s fade).
 * Other routes load with scrolling enabled immediately.
 */
export default function IntroScrollLock() {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname !== "/") return;
    const body = document.body;
    const prev = body.style.overflow;
    body.style.overflow = "hidden";
    const t = setTimeout(() => {
      body.style.overflow = prev;
    }, 5300);
    return () => {
      clearTimeout(t);
      body.style.overflow = prev;
    };
  }, [pathname]);

  return null;
}
