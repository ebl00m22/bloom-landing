"use client";

import { useEffect, useState } from "react";

const TRIGGER = "bloom";
const PETALS = ["🌸", "🌺", "🌷", "🌹", "🌼", "💐"];
const PETAL_COUNT = 50;

type Petal = {
  id: number;
  left: number;
  emoji: string;
  delay: number;
  duration: number;
  size: number;
  drift: number;
};

export default function BloomEasterEgg() {
  const [petals, setPetals] = useState<Petal[]>([]);

  useEffect(() => {
    let buffer = "";
    let resetTimer: number;

    function onKey(e: KeyboardEvent) {
      const t = e.target as HTMLElement | null;
      const tag = t?.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA" || t?.isContentEditable) return;
      if (e.key.length !== 1) return;

      buffer = (buffer + e.key.toLowerCase()).slice(-TRIGGER.length);
      if (buffer === TRIGGER) {
        trigger();
        buffer = "";
      }

      window.clearTimeout(resetTimer);
      resetTimer = window.setTimeout(() => {
        buffer = "";
      }, 2000);
    }

    function trigger() {
      const next: Petal[] = Array.from({ length: PETAL_COUNT }, (_, i) => ({
        id: Date.now() + i,
        left: Math.random() * 100,
        emoji: PETALS[Math.floor(Math.random() * PETALS.length)],
        delay: Math.random() * 2,
        duration: 5 + Math.random() * 4,
        size: 18 + Math.random() * 22,
        drift: (Math.random() - 0.5) * 30,
      }));
      setPetals(next);
      window.setTimeout(() => setPetals([]), 12000);
    }

    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      window.clearTimeout(resetTimer);
    };
  }, []);

  if (petals.length === 0) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      <style>{`
        @keyframes bloom-petal-fall {
          0%   { transform: translateY(-10vh) translateX(0) rotate(0deg);   opacity: 0; }
          10%  { opacity: 1; }
          100% { transform: translateY(110vh) translateX(var(--drift, 0vw)) rotate(720deg); opacity: 0.9; }
        }
      `}</style>
      {petals.map((p) => (
        <span
          key={p.id}
          className="absolute select-none"
          style={{
            left: `${p.left}vw`,
            top: 0,
            fontSize: `${p.size}px`,
            animation: `bloom-petal-fall ${p.duration}s ${p.delay}s linear forwards`,
            ["--drift" as string]: `${p.drift}vw`,
          }}
        >
          {p.emoji}
        </span>
      ))}
    </div>
  );
}
