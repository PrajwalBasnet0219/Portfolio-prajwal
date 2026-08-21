"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useNav } from "./NavigationGate";

gsap.registerPlugin(ScrollTrigger);

const navItems = [
  { label: "Home", href: "/" },
  { label: "Project", href: "/project" },
  { label: "Contact", href: "/contact" },
];

export default function Navigation() {
  const navRef = useRef<HTMLElement>(null);
  const { navigate } = useNav();
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(false);

  const handleNavClick = (e: React.MouseEvent, href: string, label: string) => {
    if (pathname === href) return;
    e.preventDefault();
    navigate(href, label.toLowerCase());
  };

  useEffect(() => {
    if (pathname !== "/") {
      setIsVisible(true);
      return;
    }
    // Show nav only after hero is scrolled (more reliable than #about ScrollTrigger with lazy)
    const onScroll = () => {
      const threshold = window.innerHeight * 0.75;
      if (window.scrollY > threshold) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  useEffect(() => {
    if (navRef.current) {
      gsap.to(navRef.current, {
        y: isVisible ? 0 : -80,
        opacity: isVisible ? 1 : 0,
        duration: 0.5,
        ease: "power3.out",
      });
    }
  }, [isVisible]);

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 right-0 h-16 flex items-center justify-between px-6 md:px-10 z-50 opacity-0 -translate-y-20"
      style={{
        background: "linear-gradient(to bottom, rgba(0,0,0,0.85), rgba(0,0,0,0.35))",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        borderBottom: "1px solid rgba(221,221,221,0.08)",
      }}
    >
      <Link
        href="/"
        onClick={(e) => handleNavClick(e, "/", "home")}
        className="text-sm font-bold tracking-[0.2em] text-pure hover:text-white transition-colors"
        data-cursor-hover
      >
        {"</>"}
      </Link>

      <div className="flex items-center gap-6 md:gap-10">
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            onClick={(e) => handleNavClick(e, item.href, item.label)}
            className={`text-xs md:text-sm tracking-[0.2em] uppercase transition-colors duration-300 ${
              pathname === item.href ? "text-pure" : "text-bone hover:text-pure"
            }`}
            data-cursor-hover
          >
            {item.label}
          </a>
        ))}
      </div>

      <div className="hidden md:block text-xs text-bone/60 font-mono tracking-widest">
        {pathname === "/" ? "01" : pathname === "/project" ? "02" : "03"}
      </div>
    </nav>
  );
}
