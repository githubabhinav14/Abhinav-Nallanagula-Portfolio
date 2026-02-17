"use client";

import { SectionReveal } from "./section-reveal";
import { cn } from "@/lib/utils";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React.js", level: 90 },
      { name: "HTML5", level: 95 },
      { name: "CSS3", level: 90 },
      { name: "JavaScript", level: 92 },
      { name: "Tailwind CSS", level: 88 },
      { name: "Next.js", level: 80 },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Express.js", level: 85 },
      { name: "Spring Boot", level: 70 },
      { name: "REST APIs", level: 88 },
      { name: "Socket.IO", level: 75 },
    ],
  },
  {
    title: "Database & Cloud",
    skills: [
      { name: "MongoDB", level: 85 },
      { name: "MySQL", level: 75 },
      { name: "AWS", level: 65 },
      { name: "Firebase", level: 70 },
    ],
  },
  {
    title: "Languages & Tools",
    skills: [
      { name: "JavaScript", level: 92 },
      { name: "Python", level: 80 },
      { name: "Java", level: 75 },
      { name: "C", level: 70 },
      { name: "Git & GitHub", level: 88 },
      { name: "VS Code", level: 90 },
    ],
  },
];

function SkillBar({ name, level, delay }: { name: string; level: number; delay: number }) {
  return (
    <SectionReveal delay={delay}>
      <div className="group">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-foreground">{name}</span>
          <span className="text-xs font-mono text-muted-foreground group-hover:text-primary transition-colors">
            {level}%
          </span>
        </div>
        <div className="h-1.5 rounded-full bg-secondary overflow-hidden">
          <div
            className="h-full rounded-full bg-gradient-to-r from-primary to-primary/60 transition-all duration-1000 ease-out"
            style={{ width: `${level}%` }}
          />
        </div>
      </div>
    </SectionReveal>
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

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <SectionReveal key={category.title} delay={categoryIndex * 100}>
              <div
                className={cn(
                  "glass-card rounded-xl p-6 transition-all duration-300",
                  "hover:border-primary/20"
                )}
              >
                <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  {category.title}
                </h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <SkillBar
                      key={skill.name + category.title}
                      name={skill.name}
                      level={skill.level}
                      delay={categoryIndex * 100 + skillIndex * 50}
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
