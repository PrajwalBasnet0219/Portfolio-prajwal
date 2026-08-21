"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useNav } from "./NavigationGate";

gsap.registerPlugin(ScrollTrigger);

const GLITCH_CHARS = "▓▒░█▄▀■□▪▫◊◦●○◐◑◒◓◔◕◖◗◘◙◚◛◜◝◞◟◠◡◢◣◤◥◦◧◨◩◪◫◬◭◮◯";

const navItems = [
  { label: "Home", href: "/", nepali: "होम" },
  { label: "Project", href: "/project", nepali: "परियोजना" },
  { label: "Contact", href: "/contact", nepali: "काम" },
];

export default function Navigation() {
  const navRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const { navigate } = useNav();
  const pathname = usePathname();
  const [displayText, setDisplayText] = useState<Record<string, string>>(() =>
    Object.fromEntries(navItems.map((item) => [item.label, item.label]))
  );
  const intervalRefs = useRef<Record<string, NodeJS.Timeout>>({});

  const glitchTransition = useCallback((fromText: string, toText: string, label: string) => {
    let iteration = 0;
    const totalIterations = 12;
    const maxLen = Math.max(fromText.length, toText.length);

    if (intervalRefs.current[label]) {
      clearInterval(intervalRefs.current[label]);
    }

    const interval = setInterval(() => {
      const progress = iteration / totalIterations;

      const newText = Array.from({ length: maxLen }, (_, index) => {
        const fromChar = fromText[index] || "";
        const toChar = toText[index] || "";
        
        if (progress === 1) return toChar || "";
        if (index < progress * maxLen) {
          return toChar || fromChar || GLITCH_CHARS[Math.floor(Math.random() * GLITCH_CHARS.length)];
        }
        return GLITCH_CHARS[Math.floor(Math.random() * GLITCH_CHARS.length)];
      }).join("");

      setDisplayText((prev) => ({ ...prev, [label]: newText }));
      iteration++;

      if (iteration > totalIterations) {
        clearInterval(interval);
        setDisplayText((prev) => ({ ...prev, [label]: toText }));
      }
    }, 40);

    intervalRefs.current[label] = interval;
  }, []);

  const handleMouseEnter = (label: string, nepali: string) => {
    glitchTransition(label, nepali, label);
  };

  const handleMouseLeave = (label: string) => {
    glitchTransition(displayText[label], label, label);
  };

  const handleNavClick = (e: React.MouseEvent, href: string, label: string) => {
    if (pathname === href) return; // Don't reload same page

    e.preventDefault();
    navigate(href, label.toLowerCase());
  };

  useEffect(() => {
    if (pathname !== "/") {
      setIsVisible(true);
      return;
    }

    ScrollTrigger.create({
      trigger: "#about",
      start: "top 80%",
      onEnter: () => setIsVisible(true),
      onLeaveBack: () => setIsVisible(false),
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [pathname]);

  useEffect(() => {
    if (navRef.current) {
      gsap.to(navRef.current, {
        x: isVisible ? 0 : -100,
        opacity: isVisible ? 1 : 0,
        duration: 0.5,
        ease: "power3.out",
      });
    }
  }, [isVisible]);

  return (
    <>
      <nav
        ref={navRef}
        className="fixed left-0 top-0 h-screen w-20 flex flex-col items-center py-11 opacity-0 -translate-x-full"
        style={{
          background: "linear-gradient(to right, rgba(0,0,0,0.9), rgba(0,0,0,0.4))",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          zIndex: 50,
        }}
      >
        <Link
          href="/"
          onClick={(e) => handleNavClick(e, "/", "home")}
          className="mb-8 text-base text-pure hover:text-pure transition-colors duration-300"
          style={{ writingMode: "vertical-rl", textOrientation: "upright" }}
          data-cursor-hover
        >
          <span className="font-bold tracking-widest">{"</>"}</span>
        </Link>

        <div className="flex flex-col items-center gap-10 flex-1">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href, item.label)}
              onMouseEnter={() => handleMouseEnter(item.label, item.nepali)}
              onMouseLeave={() => handleMouseLeave(item.label)}
              className="group relative flex flex-col items-center gap-2 cursor-pointer"
              data-cursor-hover
            >
              <span
                className={`text-sm font-bold transition-all duration-300 ${
                  pathname === item.href
                    ? "text-pure"
                    : "text-mist/40 group-hover:text-pure/80"
                }`}
                style={{ writingMode: "vertical-rl", textOrientation: "upright" }}
              >
                {displayText[item.label]}
              </span>

              {pathname === item.href && (
                <span 
                  className="absolute -right-3 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-red-500/80"
                  style={{ boxShadow: "0 0 6px rgba(200,0,0,0.5)" }}
                />
              )}
            </a>
          ))}
        </div>

        <div className="mt-auto">
          <span 
            className="text-xs text-mist/40 font-mono"
            style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
          >
            {pathname === "/" ? "01" : pathname === "/project" ? "02" : "03"}
          </span>
        </div>
      </nav>
    </>
  );
}