"use client";

import { useEffect, useRef, useState, useCallback } from "react";

const GRID = 16;
const CELL = 18;
const SPEED = 180;

type Point = { x: number; y: number };

function randomFood(snake: Point[]): Point {
  let p: Point;
  do {
    p = { x: Math.floor(Math.random() * GRID), y: Math.floor(Math.random() * GRID) };
  } while (snake.some((s) => s.x === p.x && s.y === p.y));
  return p;
}

export default function SnakeGame() {
  const [snake, setSnake] = useState<Point[]>([{ x: 8, y: 8 }, { x: 7, y: 8 }]);
  const [food, setFood] = useState<Point>({ x: 12, y: 8 });
  const [dir, setDir] = useState<Point>({ x: 1, y: 0 });
  const [nextDir, setNextDir] = useState<Point>({ x: 1, y: 0 });
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [paused, setPaused] = useState(false);
  const loopRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const touchStartRef = useRef<Point | null>(null);

  const reset = useCallback(() => {
    const init = [{ x: 8, y: 8 }, { x: 7, y: 8 }];
    setSnake(init);
    setFood(randomFood(init));
    setDir({ x: 1, y: 0 });
    setNextDir({ x: 1, y: 0 });
    setScore(0);
    setGameOver(false);
    setPaused(false);
  }, []);

  useEffect(() => {
    if (gameOver || paused) return;
    loopRef.current = setInterval(() => {
      setDir((d) => nextDir);
      setSnake((prev) => {
        const head = { x: prev[0].x + nextDir.x, y: prev[0].y + nextDir.y };

        // wall collision
        if (head.x < 0 || head.x >= GRID || head.y < 0 || head.y >= GRID) {
          setGameOver(true);
          return prev;
        }
        // self collision
        if (prev.some((p) => p.x === head.x && p.y === head.y)) {
          setGameOver(true);
          return prev;
        }

        const newSnake = [head, ...prev];
        if (head.x === food.x && head.y === food.y) {
          setScore((s) => s + 1);
          setFood(randomFood(newSnake));
          return newSnake;
        }
        newSnake.pop();
        return newSnake;
      });
    }, SPEED);
    return () => {
      if (loopRef.current) clearInterval(loopRef.current);
    };
  }, [nextDir, food, gameOver, paused]);

  // Keyboard only — arrows control snake, not page scroll
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const k = e.key.toLowerCase();
      const isArrow = ["arrowup", "arrowdown", "arrowleft", "arrowright"].includes(k);
      if (isArrow) e.preventDefault();
      if (["arrowup", "w"].includes(k) && dir.y === 0) setNextDir({ x: 0, y: -1 });
      if (["arrowdown", "s"].includes(k) && dir.y === 0) setNextDir({ x: 0, y: 1 });
      if (["arrowleft", "a"].includes(k) && dir.x === 0) setNextDir({ x: -1, y: 0 });
      if (["arrowright", "d"].includes(k) && dir.x === 0) setNextDir({ x: 1, y: 0 });
      if (k === " ") {
        e.preventDefault();
        setPaused((p) => !p);
      }
      if (k === "r") reset();
    };
    window.addEventListener("keydown", onKey, { passive: false });
    return () => window.removeEventListener("keydown", onKey);
  }, [dir, reset]);



  return (
    <div className="flex flex-col items-center gap-3 w-full max-w-[320px] mx-auto">
      <div className="flex items-center justify-between w-full px-1">
        <span className="text-[10px] tracking-[0.3em] text-bone uppercase font-mono">SNAKE // {String(score).padStart(2, "0")}</span>
        <span className="text-[10px] tracking-widest text-mist font-mono">{gameOver ? "GAME OVER" : paused ? "PAUSED" : "ARROWS / WASD"}</span>
      </div>

      <div
        className="relative bg-ghost border border-pure/15 rounded-xl overflow-hidden touch-none"
        style={{ width: GRID * CELL, height: GRID * CELL }}
        onTouchStart={(e) => {
          const t = e.touches[0];
          touchStartRef.current = { x: t.clientX, y: t.clientY };
        }}
        onTouchEnd={(e) => {
          const start = touchStartRef.current;
          if (!start) return;
          const t = e.changedTouches[0];
          const dx = t.clientX - start.x;
          const dy = t.clientY - start.y;
          if (Math.abs(dx) < 18 && Math.abs(dy) < 18) return;
          if (Math.abs(dx) > Math.abs(dy)) {
            if (dx > 0 && dir.x === 0) setNextDir({ x: 1, y: 0 });
            if (dx < 0 && dir.x === 0) setNextDir({ x: -1, y: 0 });
          } else {
            if (dy > 0 && dir.y === 0) setNextDir({ x: 0, y: 1 });
            if (dy < 0 && dir.y === 0) setNextDir({ x: 0, y: -1 });
          }
          touchStartRef.current = null;
        }}
      >
        {/* grid dots */}
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle, #dddddd 1px, transparent 1px)", backgroundSize: `${CELL}px ${CELL}px` }} />

        {/* food */}
        <div
          className="absolute bg-[#a78bfa] rounded-sm"
          style={{
            left: food.x * CELL + 3,
            top: food.y * CELL + 3,
            width: CELL - 6,
            height: CELL - 6,
            boxShadow: "0 0 8px rgba(167,139,250,0.7)",
          }}
        />

        {/* snake */}
        {snake.map((p, i) => (
          <div
            key={`${p.x}-${p.y}-${i}`}
            className={i === 0 ? "absolute bg-pure rounded-sm" : "absolute bg-bone rounded-sm"}
            style={{
              left: p.x * CELL + 2,
              top: p.y * CELL + 2,
              width: CELL - 4,
              height: CELL - 4,
              opacity: i === 0 ? 1 : 0.92 - i * 0.02,
              boxShadow: i === 0 ? "0 0 6px rgba(221,221,221,0.6)" : "none",
            }}
          />
        ))}

        {gameOver && (
          <div className="absolute inset-0 bg-void/70 backdrop-blur-[1px] flex flex-col items-center justify-center gap-3">
            <p className="text-xs tracking-[0.3em] text-pure uppercase font-mono">Game Over</p>
            <button
              onClick={reset}
              className="px-4 py-1.5 bg-pure text-void text-xs tracking-widest uppercase rounded-full hover:bg-bone transition-colors"
            >
              Restart
            </button>
          </div>
        )}
        {paused && !gameOver && (
          <div className="absolute inset-0 bg-void/60 flex items-center justify-center">
            <p className="text-xs tracking-widest text-pure uppercase">Paused</p>
          </div>
        )}
      </div>

      <p className="text-xs tracking-[0.2em] text-bone font-mono text-center">ARROWS / WASD to move • SPACE pause • R restart</p>
      <p className="text-xs tracking-widest text-bone/70 font-mono text-center">Arrows won&apos;t scroll page while playing</p>
    </div>
  );
}
