"use client";

import { useEffect, useRef, useCallback } from "react";

interface GlitchTextProps {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p" | "span" | "div";
  intensity?: "low" | "medium" | "high";
  trigger?: "hover" | "always" | "scroll";
}

const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?/~`";
const glitchChars = "▓▒░█▄▀■□▪▫◊◦●○◐◑◒◓◔◕◖◗◘◙◚◛◜◝◞◟◠◡◢◣◤◥◦◧◨◩◪◫◬◭◮◯";

export default function GlitchText({
  text,
  className = "",
  as: Tag = "div",
  intensity = "medium",
  trigger = "hover",
}: GlitchTextProps) {
  const ref = useRef<HTMLElement>(null);
  const originalText = useRef(text);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const getGlitchCount = () => {
    switch (intensity) {
      case "low": return 1;
      case "high": return 4;
      default: return 2;
    }
  };

  const scramble = useCallback(() => {
    if (!ref.current) return;
    const el = ref.current;
    const str = originalText.current;
    const count = getGlitchCount();
    let iteration = 0;

    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      el.innerText = str
        .split("")
        .map((char, index) => {
          if (char === " ") return " ";
          if (index < iteration) return str[index];
          return glitchChars[Math.floor(Math.random() * glitchChars.length)];
        })
        .join("");

      iteration += count;
      if (iteration >= str.length) {
        if (intervalRef.current) clearInterval(intervalRef.current);
        el.innerText = str;
      }
    }, 30);
  }, [intensity]);

  const glitch = useCallback(() => {
    if (!ref.current) return;
    const el = ref.current;
    const str = originalText.current;

    // Random character replacement glitch
    const glitched = str.split("").map((char) => {
      if (char === " ") return " ";
      if (Math.random() > 0.7) {
        return chars[Math.floor(Math.random() * chars.length)];
      }
      return char;
    }).join("");

    el.innerText = glitched;

    setTimeout(() => {
      if (ref.current) ref.current.innerText = str;
    }, 100);
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (trigger === "always") {
      const interval = setInterval(() => {
        if (Math.random() > 0.7) glitch();
      }, 2000);
      return () => clearInterval(interval);
    }

    if (trigger === "scroll") {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              scramble();
            }
          });
        },
        { threshold: 0.5 }
      );
      observer.observe(el);
      return () => observer.disconnect();
    }

    // hover trigger
    const handleMouseEnter = () => scramble();
    el.addEventListener("mouseenter", handleMouseEnter);
    return () => el.removeEventListener("mouseenter", handleMouseEnter);
  }, [trigger, scramble, glitch]);

  return (
    <Tag
      ref={ref as any}
      className={`glitch-text-wrapper ${className}`}
      data-text={text}
    >
      {text}
    </Tag>
  );
}
