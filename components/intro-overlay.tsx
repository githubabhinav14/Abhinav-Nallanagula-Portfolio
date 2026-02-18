"use client";

import { useState, useEffect, useCallback } from "react";

export function IntroOverlay({ onComplete }: { onComplete: () => void }) {
  const [phase, setPhase] = useState(0);
  // phase 0: dark screen
  // phase 1: line draws across
  // phase 2: first name reveals
  // phase 3: last name reveals
  // phase 4: subtitle appears
  // phase 5: overlay slides up and exits

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 300),
      setTimeout(() => setPhase(2), 800),
      setTimeout(() => setPhase(3), 1400),
      setTimeout(() => setPhase(4), 2000),
      setTimeout(() => setPhase(5), 3200),
      setTimeout(() => onComplete(), 4200),
    ];
    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-background overflow-hidden"
      style={{
        transform: phase >= 5 ? "translateY(-100%)" : "translateY(0)",
        transition: "transform 1s cubic-bezier(0.76, 0, 0.24, 1)",
      }}
    >
      {/* Subtle grid bg */}
      <div className="absolute inset-0 grid-bg opacity-20" />

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-primary/30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${15 + Math.random() * 10}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 flex flex-col items-center gap-4">
        {/* Horizontal line */}
        <div className="relative h-px w-48 sm:w-64 mb-6 overflow-hidden">
          <div
            className="absolute inset-y-0 left-0 bg-primary"
            style={{
              width: phase >= 1 ? "100%" : "0%",
              transition: "width 0.6s cubic-bezier(0.76, 0, 0.24, 1)",
            }}
          />
        </div>

        {/* First name */}
        <div className="overflow-hidden">
          <h1
            className="text-5xl sm:text-7xl md:text-8xl font-bold tracking-tighter"
            style={{
              transform: phase >= 2 ? "translateY(0)" : "translateY(110%)",
              opacity: phase >= 2 ? 1 : 0,
              transition:
                "transform 0.7s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.7s ease",
            }}
          >
            <span className="gradient-text">ABHINAV</span>
          </h1>
        </div>

        {/* Last name */}
        <div className="overflow-hidden -mt-2">
          <h1
            className="text-5xl sm:text-7xl md:text-8xl font-bold tracking-tighter"
            style={{
              transform: phase >= 3 ? "translateY(0)" : "translateY(110%)",
              opacity: phase >= 3 ? 1 : 0,
              transition:
                "transform 0.7s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.7s ease",
            }}
          >
            <span className="text-foreground">NALLANAGULA</span>
          </h1>
        </div>

        {/* Subtitle */}
        <div className="overflow-hidden mt-4">
          <p
            className="text-sm sm:text-base font-mono text-muted-foreground tracking-[0.3em] uppercase"
            style={{
              transform: phase >= 4 ? "translateY(0)" : "translateY(110%)",
              opacity: phase >= 4 ? 1 : 0,
              transition:
                "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.6s ease",
            }}
          >
            Full Stack Developer & Freelancer
          </p>
        </div>

        {/* Bottom line */}
        <div className="relative h-px w-48 sm:w-64 mt-6 overflow-hidden">
          <div
            className="absolute inset-y-0 right-0 bg-primary"
            style={{
              width: phase >= 4 ? "100%" : "0%",
              transition: "width 0.6s cubic-bezier(0.76, 0, 0.24, 1) 0.2s",
            }}
          />
        </div>
      </div>
    </div>
  );
}
