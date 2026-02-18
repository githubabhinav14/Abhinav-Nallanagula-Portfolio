"use client";

import { useState, useEffect, useCallback } from "react";
import { ArrowDown, ExternalLink } from "lucide-react";

const roles = [
  "Full Stack Developer",
  "Freelancer",
  "MERN Stack Engineer",
  "React Developer",
  "Problem Solver",
  "Designer",
];

export function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [displayText, setDisplayText] = useState("");

  const type = useCallback(() => {
    const currentRole = roles[roleIndex] ?? "";
    if (!currentRole) {
      setRoleIndex((prev) => (prev + 1) % roles.length);
      return;
    }

    if (!isDeleting) {
      const nextIndex = Math.min(charIndex + 1, currentRole.length);
      setDisplayText(currentRole.slice(0, nextIndex));
      setCharIndex(nextIndex);

      if (nextIndex === currentRole.length) {
        setTimeout(() => setIsDeleting(true), 1000);
      }
    } else {
      const nextIndex = Math.max(charIndex - 1, 0);
      setDisplayText(currentRole.slice(0, nextIndex));
      setCharIndex(nextIndex);

      if (nextIndex === 0) {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }
  }, [charIndex, isDeleting, roleIndex]);

  useEffect(() => {
    const speed = isDeleting ? 25 : 50;
    const timer = setTimeout(type, speed);
    return () => clearTimeout(timer);
  }, [type, isDeleting]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="floating-orb absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-primary/8 blur-3xl" />
        <div className="floating-orb-delayed absolute bottom-1/4 -right-32 w-80 h-80 rounded-full bg-primary/6 blur-3xl" />
        <div className="floating-orb absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/4 blur-3xl" />
      </div>

      {/* Grid background */}
      <div className="absolute inset-0 grid-bg opacity-40" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border/60 bg-secondary/40 px-4 py-2 text-sm text-muted-foreground backdrop-blur-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
          </span>
          Available for freelance & opportunities
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-6 text-balance">
          {"Hi I'm "}
          <br />
          <span className="gradient-text">Abhinav Nallanagula</span>
          
        </h1>

        <div className="h-10 sm:h-12 flex items-center justify-center mb-8">
          <span className="text-lg sm:text-xl md:text-2xl font-mono text-muted-foreground">
            {"{ "}
            <span className="text-primary">{displayText}</span>
            <span className="typing-cursor text-primary">|</span>
            {" }"}
          </span>
        </div>

        <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed text-pretty">
          Crafting modern web apps with MERN, Python, and a passion for seamless
          user experiences. I love clean code, great UX, and solving real-world
          problems with technology.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5"
          >
            View Projects
            <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-xl border border-border bg-secondary/50 px-8 py-3.5 text-sm font-semibold text-secondary-foreground transition-all duration-300 hover:bg-secondary hover:border-primary/30 hover:-translate-y-0.5"
          >
            Get In Touch
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground animate-bounce">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <ArrowDown className="w-4 h-4" />
        </div>
      </div>
    </section>
  );
}
