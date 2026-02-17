"use client";

import { GraduationCap, School } from "lucide-react";
import { SectionReveal } from "./section-reveal";

const coursework = [
  "Cloud Computing",
  "Data Structures & Algorithms",
  "Database Management Systems",
  "Operating Systems",
  "Computer Networks",
  "Web Development",
];

const educationTimeline = [
  {
    institution: "Malla Reddy College of Engineering & Technology",
    degree: "B.Tech in Computer Science Engineering",
    period: "2022 - Present",
    icon: GraduationCap,
  },
  {
    institution: "Sri Gayatri Junior College",
    degree: "MPC (Intermediate)",
    period: "March 2022",
    icon: School,
  },
  {
    institution: "Ravindra Bharathi School",
    degree: "SSC (10th Standard)",
    period: "March 2020",
    icon: School,
  },
];

export function EducationSection() {
  return (
    <section id="education" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionReveal>
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px flex-1 max-w-12 bg-primary" />
            <span className="text-sm font-mono text-primary tracking-wider uppercase">
              Education
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-balance">
            Academic
            <span className="gradient-text"> journey</span>
          </h2>
        </SectionReveal>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Education timeline */}
          <div className="space-y-5">
            {educationTimeline.map((edu, index) => {
              const Icon = edu.icon;
              return (
                <SectionReveal key={edu.institution} delay={index * 120} variant="fade-left">
                  <div className="glass-card rounded-xl p-5 transition-all duration-300 hover:border-primary/20">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-base font-semibold text-foreground leading-snug">
                          {edu.institution}
                        </h3>
                        <p className="text-sm text-primary font-medium mt-0.5">
                          {edu.degree}
                        </p>
                        <div className="flex items-center gap-3 mt-2">
                          <span className="text-xs font-mono text-muted-foreground bg-secondary/60 px-2.5 py-0.5 rounded-full">
                            {edu.period}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </SectionReveal>
              );
            })}
          </div>

          {/* Relevant Coursework */}
          <SectionReveal delay={300} variant="fade-right">
            <div className="glass-card rounded-xl p-6 h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">
                    Relevant Coursework
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    Key subjects and areas of study
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {coursework.map((course, i) => (
                  <span
                    key={course}
                    className="text-sm font-mono px-3 py-1.5 rounded-lg bg-secondary/60 text-muted-foreground border border-border/60 hover:border-primary/30 hover:text-primary transition-colors"
                    style={{ animationDelay: `${i * 80}ms` }}
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
