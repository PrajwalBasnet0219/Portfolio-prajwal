"use client";

import { useEffect, useRef, useState, useCallback } from "react";

const W = 16;
const H = 16;
const CELL = 18;

type Point = { x: number; y: number };

export default function SpaceWarGame() {
  const [playerX, setPlayerX] = useState(8);
  const [bullets, setBullets] = useState<Point[]>([]);
  const [enemies, setEnemies] = useState<Point[]>(() =>
    Array.from({ length: 12 }, (_, i) => ({ x: (i % 6) * 2 + 2, y: Math.floor(i / 6) * 2 + 1 }))
  );
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [won, setWon] = useState(false);
  const keysRef = useRef<Set<string>>(new Set());
  const rafRef = useRef<number | null>(null);
  const lastShotRef = useRef(0);

  const reset = useCallback(() => {
    setPlayerX(8);
    setBullets([]);
    setEnemies(Array.from({ length: 12 }, (_, i) => ({ x: (i % 6) * 2 + 2, y: Math.floor(i / 6) * 2 + 1 })));
    setScore(0);
    setGameOver(false);
    setWon(false);
  }, []);

  // Controls - arrows only, prevent page scroll
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      const k = e.key.toLowerCase();
      const isArrow = ["arrowleft", "arrowright", "arrowup", "arrowdown", " "].includes(k) || k === " ";
      if (isArrow) e.preventDefault();
      keysRef.current.add(k);
      if (k === " ") {
        const now = Date.now();
        if (now - lastShotRef.current < 220) return;
        lastShotRef.current = now;
        if (!gameOver && !won) {
          setBullets((b) => [...b, { x: playerX, y: H - 2 }]);
        }
      }
      if (k === "r") reset();
    };
    const onKeyUp = (e: KeyboardEvent) => {
      keysRef.current.delete(e.key.toLowerCase());
    };
    window.addEventListener("keydown", onKeyDown, { passive: false });
    window.addEventListener("keyup", onKeyUp);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("keyup", onKeyUp);
    };
  }, [playerX, gameOver, won, reset]);

  // Game loop
  useEffect(() => {
    if (gameOver || won) return;
    const tick = () => {
      // player movement
      if (keysRef.current.has("arrowleft") || keysRef.current.has("a")) {
        setPlayerX((x) => Math.max(0, x - 1));
      }
      if (keysRef.current.has("arrowright") || keysRef.current.has("d")) {
        setPlayerX((x) => Math.min(W - 1, x + 1));
      }

      // bullets move
      setBullets((prev) => {
        const next = prev.map((b) => ({ x: b.x, y: b.y - 1 })).filter((b) => b.y >= 0);
        // collision with enemies
        if (next.length && enemies.length) {
          const remainingEnemies = [...enemies];
          const remainingBullets: Point[] = [];
          let hitScore = 0;
          for (const b of next) {
            const idx = remainingEnemies.findIndex((en) => en.x === b.x && en.y === b.y);
            if (idx !== -1) {
              remainingEnemies.splice(idx, 1);
              hitScore += 1;
            } else {
              remainingBullets.push(b);
            }
          }
          if (hitScore > 0) {
            setEnemies(remainingEnemies);
            setScore((s) => s + hitScore * 10);
            if (remainingEnemies.length === 0) {
              setWon(true);
            }
            return remainingBullets;
          }
        }
        return next;
      });

      rafRef.current = window.setTimeout(tick, 55) as unknown as number;
    };
    rafRef.current = window.setTimeout(tick, 55) as unknown as number;
    return () => {
      if (rafRef.current) clearTimeout(rafRef.current);
    };
  }, [enemies, gameOver, won]);

  // Touch controls for mobile - swipe left/right and tap to shoot
  const touchStartRef = useRef<Point | null>(null);
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    const start = touchStartRef.current;
    if (!start) return;
    const end = e.changedTouches[0];
    const dx = end.clientX - start.x;
    const dy = end.clientY - start.y;
    if (Math.abs(dx) < 10 && Math.abs(dy) < 10) {
      // tap -> shoot
      if (!gameOver && !won) setBullets((b) => [...b, { x: playerX, y: H - 2 }]);
    } else if (Math.abs(dx) > Math.abs(dy)) {
      if (dx > 20) setPlayerX((x) => Math.min(W - 1, x + 1));
      if (dx < -20) setPlayerX((x) => Math.max(0, x - 1));
    }
    touchStartRef.current = null;
  };

  return (
    <div className="flex flex-col items-center gap-3 w-full max-w-[320px] mx-auto">
      <div className="flex items-center justify-between w-full px-1">
        <span className="text-[10px] tracking-[0.3em] text-bone uppercase font-mono">SPACE WAR // {String(score).padStart(2, "0")}</span>
        <span className="text-[10px] tracking-widest text-mist font-mono">{won ? "CLEARED!" : gameOver ? "OVER" : "ARROWS + SPACE"}</span>
      </div>

      <div
        className="relative bg-ghost border border-pure/15 rounded-xl overflow-hidden touch-none select-none"
        style={{ width: W * CELL, height: H * CELL }}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle, #dddddd 1px, transparent 1px)", backgroundSize: `${CELL}px ${CELL}px` }} />

        {/* enemies */}
        {enemies.map((en, i) => (
          <div
            key={`en-${en.x}-${en.y}-${i}`}
            className="absolute flex items-center justify-center text-[10px]"
            style={{ left: en.x * CELL + 2, top: en.y * CELL + 2, width: CELL - 4, height: CELL - 4 }}
          >
            <span className="w-full h-full bg-[#ff4d6d]/80 border border-[#ff4d6d] rounded-sm flex items-center justify-center text-[8px]">◆</span>
          </div>
        ))}

        {/* bullets */}
        {bullets.map((b, i) => (
          <div
            key={`b-${b.x}-${b.y}-${i}`}
            className="absolute bg-[#a78bfa] rounded-full"
            style={{ left: b.x * CELL + CELL / 2 - 2, top: b.y * CELL + 4, width: 4, height: 8, boxShadow: "0 0 6px rgba(167,139,250,0.8)" }}
          />
        ))}

        {/* player */}
        <div
          className="absolute flex items-center justify-center"
          style={{ left: playerX * CELL + 1, top: (H - 1) * CELL + 1, width: CELL - 2, height: CELL - 2 }}
        >
          <span className="text-pure text-[14px] leading-none" style={{ filter: "drop-shadow(0 0 4px rgba(221,221,221,0.6))" }}>▲</span>
        </div>

        {(gameOver || won) && (
          <div className="absolute inset-0 bg-void/70 backdrop-blur-[1px] flex flex-col items-center justify-center gap-3">
            <p className="text-xs tracking-[0.3em] text-pure uppercase font-mono">{won ? "Sector Cleared!" : "Game Over"}</p>
            <button
              onClick={reset}
              className="px-4 py-1.5 bg-pure text-void text-xs tracking-widest uppercase rounded-full hover:bg-bone transition-colors"
            >
              Restart
            </button>
          </div>
        )}
      </div>

      <p className="text-xs tracking-[0.2em] text-bone font-mono text-center">◀ ▶ / A D move • SPACE shoot • R restart</p>
      <p className="text-xs tracking-widest text-bone/70 font-mono text-center">Arrows won&apos;t scroll page</p>
    </div>
  );
}
