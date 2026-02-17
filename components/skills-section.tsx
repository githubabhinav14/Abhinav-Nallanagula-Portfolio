"use client";

import { SectionReveal } from "./section-reveal";
import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";

const skillCategories = [
  {
    title: "Frontend",
    icon: "layout",
    skills: ["React.js", "Next.js", "HTML5", "CSS3", "JavaScript", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Backend",
    icon: "server",
    skills: ["Node.js", "Express.js", "Spring Boot", "REST APIs", "Socket.IO", "GraphQL"],
  },
  {
    title: "Database & Cloud",
    icon: "database",
    skills: ["MongoDB", "MySQL", "AWS", "Firebase", "Redis", "Docker"],
  },
  {
    title: "Languages & Tools",
    icon: "wrench",
    skills: ["JavaScript", "Python", "Java", "C", "Git & GitHub", "VS Code", "Postman", "Linux"],
  },
];

function SkillChip({ name, delay }: { name: string; delay: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <span
      ref={ref}
      className={cn(
        "inline-flex items-center rounded-lg px-3.5 py-2 text-sm font-medium",
        "bg-secondary/80 text-secondary-foreground border border-border/50",
        "hover:bg-primary/10 hover:text-primary hover:border-primary/30",
        "transition-all duration-500 ease-out cursor-default",
        isVisible
          ? "opacity-100 translate-y-0 scale-100"
          : "opacity-0 translate-y-4 scale-90"
      )}
    >
      {name}
    </span>
  );
}

function CategoryIcon({ type }: { type: string }) {
  if (type === "layout") {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2" /><line x1="3" x2="21" y1="9" y2="9" /><line x1="9" x2="9" y1="21" y2="9" /></svg>
    );
  }
  if (type === "server") {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="8" x="2" y="2" rx="2" ry="2" /><rect width="20" height="8" x="2" y="14" rx="2" ry="2" /><line x1="6" x2="6.01" y1="6" y2="6" /><line x1="6" x2="6.01" y1="18" y2="18" /></svg>
    );
  }
  if (type === "database") {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M3 5V19A9 3 0 0 0 21 19V5" /><path d="M3 12A9 3 0 0 0 21 12" /></svg>
    );
  }
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" /></svg>
  );
}

export function SkillsSection() {
  return (
    <section id="skills" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionReveal>
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px flex-1 max-w-12 bg-primary" />
            <span className="text-sm font-mono text-primary tracking-wider uppercase">
              Skills
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-balance">
            Technologies I
            <span className="gradient-text"> work with</span>
          </h2>
        </SectionReveal>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <SectionReveal key={category.title} delay={categoryIndex * 100}>
              <div
                className={cn(
                  "glass-card rounded-xl p-6 transition-all duration-300 h-full",
                  "hover:border-primary/20"
                )}
              >
                <h3 className="text-lg font-semibold mb-5 flex items-center gap-3">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 text-primary">
                    <CategoryIcon type={category.icon} />
                  </span>
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2.5">
                  {category.skills.map((skill, skillIndex) => (
                    <SkillChip
                      key={skill + category.title}
                      name={skill}
                      delay={categoryIndex * 80 + skillIndex * 60}
                    />
                  ))}
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
