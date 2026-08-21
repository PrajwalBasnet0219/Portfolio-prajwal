"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { useRouter, usePathname } from "next/navigation";
import gsap from "gsap";
import LoadingScreen from "../loading/LoadingScreen";

const PAGE_NAMES: Record<string, string> = {
  "/": "home",
  "/project": "project",
  "/contact": "contact",
};

interface NavContextValue {
  navigate: (href: string, pageName?: string) => void;
}

const NavContext = createContext<NavContextValue>({ navigate: () => {} });

export function useNav() {
  return useContext(NavContext);
}

/**
 * Global navigation gate: owns the loading screen (so it works from any
 * route, including browser back/forward via `popstate`) and animates the
 * outgoing page into a black hole before client-side navigation.
 */
export default function NavigationGate({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(false);
  const [loadingTarget, setLoadingTarget] = useState({
    target: "/",
    pageName: "home",
  });
  const [autoNavigate, setAutoNavigate] = useState(true);
  const holeRef = useRef<HTMLDivElement>(null);
  const transitioningRef = useRef(false);

  const showLoading = useCallback(
    (target: string, pageName: string, auto: boolean) => {
      setLoadingTarget({ target, pageName });
      setAutoNavigate(auto);
      setIsLoading(true);
    },
    []
  );

  const navigate = useCallback(
    (href: string, pageName?: string) => {
      if (transitioningRef.current) return;
      if (href === pathname) return;

      transitioningRef.current = true;
      const hole = holeRef.current;

      // Black-hole zoom-out: the page collapses into the center.
      gsap.set(hole, {
        scale: 0,
        opacity: 1,
        transformOrigin: "center center",
      });

      const tl = gsap.timeline();
      tl.to(
        hole,
        { scale: 1, rotate: 120, duration: 1.5, ease: "power4.in" },
        0
      );
      tl.to(
        "main",
        {
          scale: 0.05,
          rotate: 10,
          filter: "blur(14px) brightness(0.2)",
          transformOrigin: "center center",
          duration: 1.5,
          ease: "power4.in",
        },
        0
      );
      tl.set(hole, { opacity: 0, scale: 0, rotate: 0 });
      tl.call(() => {
        // The gate owns the navigation; the loading screen is a themed overlay
        // (autoNavigate=false) that fades once the new route has mounted. The
        // outgoing <main> unmounts on navigation, carrying its inline
        // transform with it, so there is no flash of the old page.
        showLoading(href, pageName ?? PAGE_NAMES[href] ?? "page", false);
        router.push(href);
        transitioningRef.current = false;
      });
    },
    [pathname, router, showLoading]
  );

  // Browser back/forward: the URL has already changed, so just show the
  // loading screen over the incoming page (autoNavigate=false).
  useEffect(() => {
    const handlePopState = () => {
      if (transitioningRef.current) return;
      const target = window.location.pathname;
      showLoading(target, PAGE_NAMES[target] ?? "page", false);
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, [showLoading]);

  return (
    <NavContext.Provider value={{ navigate }}>
      <div
        ref={holeRef}
        className="fixed inset-0 z-[99] pointer-events-none"
        style={{
          background:
            "conic-gradient(from 0deg, rgba(0,0,0,0.4) 0deg, transparent 45deg, rgba(0,0,0,0.4) 90deg, transparent 135deg, rgba(0,0,0,0.4) 180deg, transparent 225deg, rgba(0,0,0,0.4) 270deg, transparent 315deg, rgba(0,0,0,0.4) 360deg), radial-gradient(circle at center, #000 0%, rgba(0,0,0,0.85) 30%, rgba(0,0,0,0.5) 48%, rgba(0,0,0,0.25) 60%, transparent 72%)",
          opacity: 0,
          transform: "scale(0)",
        }}
      />
      {isLoading && (
        <LoadingScreen
          target={loadingTarget.target}
          pageName={loadingTarget.pageName}
          autoNavigate={autoNavigate}
          onComplete={() => setIsLoading(false)}
        />
      )}
      {children}
    </NavContext.Provider>
  );
}