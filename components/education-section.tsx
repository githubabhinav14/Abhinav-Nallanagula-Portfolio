"use client";

import { GraduationCap, Award } from "lucide-react";
import { SectionReveal } from "./section-reveal";

const certifications = [
  "GenAI Solution Challenge - Google Developer Groups (GDG)",
  "AI & ML Workshop - Skilligence EdTech & IIT Hyderabad",
  "Machine Learning Training - Intel Unnati Lab & MRCET",
  "Cisco CCNA Certification Workshop - Edgate & MRCET",
  "Best Designer Award - University Tech Fest",
  "C Programming - Infologic Software Training & Development",
];

const coursework = [
  "Cloud Computing",
  "Data Structures & Algorithms",
  "Database Management Systems",
  "Operating Systems",
  "Computer Networks",
  "Web Development",
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
          {/* Education card */}
          <SectionReveal delay={100}>
            <div className="glass-card rounded-xl p-6 h-full">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">
                    Malla Reddy College of Engineering and Technology
                  </h3>
                  <p className="text-sm text-primary font-medium">
                    B.Tech in Computer Science and Engineering
                  </p>
                  <p className="text-xs text-muted-foreground font-mono mt-1">
                    2022 - 2026
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 mb-6 p-3 rounded-lg bg-primary/5 border border-primary/10">
                <span className="text-sm text-muted-foreground">GPA:</span>
                <span className="text-lg font-bold text-primary">8.0</span>
                <span className="text-xs text-muted-foreground">
                  (as of 6th semester)
                </span>
              </div>

              <h4 className="text-sm font-semibold text-foreground mb-3">
                Relevant Coursework
              </h4>
              <div className="flex flex-wrap gap-2 mb-6">
                {coursework.map((course) => (
                  <span
                    key={course}
                    className="text-xs font-mono px-2.5 py-1 rounded-md bg-secondary/60 text-muted-foreground border border-border/60"
                  >
                    {course}
                  </span>
                ))}
              </div>

              <h4 className="text-sm font-semibold text-foreground mb-3">
                Activities
              </h4>
              <div className="flex flex-wrap gap-2">
                {["Technical Fests", "Design Team", "GDSC"].map((activity) => (
                  <span
                    key={activity}
                    className="text-xs font-mono px-2.5 py-1 rounded-md bg-primary/10 text-primary border border-primary/20"
                  >
                    {activity}
                  </span>
                ))}
              </div>
            </div>
          </SectionReveal>

          {/* Certifications card */}
          <SectionReveal delay={200}>
            <div className="glass-card rounded-xl p-6 h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">
                    Certifications & Achievements
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    Professional development and recognition
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                {certifications.map((cert, i) => (
                  <div
                    key={cert}
                    className="flex items-start gap-3 p-3 rounded-lg bg-secondary/30 border border-border/40 hover:border-primary/20 transition-colors"
                  >
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                      <span className="text-[10px] font-mono text-primary font-bold">
                        {(i + 1).toString().padStart(2, "0")}
                      </span>
                    </span>
                    <span className="text-sm text-muted-foreground leading-relaxed">
                      {cert}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
