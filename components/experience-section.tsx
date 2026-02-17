"use client";

import { Briefcase } from "lucide-react";
import { SectionReveal } from "./section-reveal";

const experiences = [
  {
    company: "AppOrigo Technologies",
    role: "Backend Developer Intern",
    duration: "May - August 2025",
    responsibilities: [
      "Built and maintained backend systems for AdvocateUs, a real-time web platform supporting multiple user roles.",
      "Designed and optimized RESTful APIs for efficient data handling and communication between services.",
      "Added custom authentication and authorization, including Google and Facebook OAuth.",
      "Built automated web scraping utilities for data collection and content updates.",
      "Worked with frontend developers to design, integrate, and deploy new features.",
      "Conducted API testing using Postman and managed version control with Git/GitHub.",
    ],
    tech: ["Node.js", "React.js", "MongoDB", "Postman", "Git", "GitHub"],
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionReveal>
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px flex-1 max-w-12 bg-primary" />
            <span className="text-sm font-mono text-primary tracking-wider uppercase">
              Experience
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-balance">
            Where I{"'"}ve
            <span className="gradient-text"> worked</span>
          </h2>
        </SectionReveal>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-border hidden md:block" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <SectionReveal key={exp.company} delay={index * 150}>
                <div className="relative flex gap-6 md:gap-10">
                  {/* Timeline dot */}
                  <div className="hidden md:flex flex-shrink-0 w-12 items-start justify-center pt-1">
                    <div className="relative z-10 flex items-center justify-center w-12 h-12 rounded-full bg-secondary border border-border">
                      <Briefcase className="w-5 h-5 text-primary" />
                    </div>
                  </div>

                  {/* Content card */}
                  <div className="flex-1 glass-card glass-card-hover rounded-xl p-6 transition-all duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                      <div>
                        <h3 className="text-lg font-semibold text-foreground">
                          {exp.role}
                        </h3>
                        <p className="text-sm text-primary font-medium">
                          {exp.company}
                        </p>
                      </div>
                      <span className="text-xs font-mono text-muted-foreground bg-secondary/60 px-3 py-1 rounded-full whitespace-nowrap">
                        {exp.duration}
                      </span>
                    </div>

                    <ul className="space-y-2 mb-4">
                      {exp.responsibilities.map((resp, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <span className="w-1 h-1 rounded-full bg-primary mt-2 flex-shrink-0" />
                          {resp}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((t) => (
                        <span
                          key={t}
                          className="text-xs font-mono px-2.5 py-1 rounded-md bg-primary/10 text-primary border border-primary/20"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
