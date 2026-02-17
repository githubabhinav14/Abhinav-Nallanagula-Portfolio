"use client";

import { Code2, Brain, Zap, Globe } from "lucide-react";
import { SectionReveal } from "./section-reveal";
import Image from "next/image";

const highlights = [
  {
    icon: Code2,
    title: "Full-Stack Development",
    description: "Building modern web apps with MERN stack and scalable architectures.",
  },
  {
    icon: Brain,
    title: "Machine Learning",
    description: "Data analysis and AI-driven solutions using Python and ML frameworks.",
  },
  {
    icon: Zap,
    title: "Problem Solving",
    description: "Algorithm design, DSA, and competitive approach to engineering challenges.",
  },
  {
    icon: Globe,
    title: "Real-time Apps",
    description: "WebSockets and real-time communication for live, interactive experiences.",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionReveal>
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px flex-1 max-w-12 bg-primary" />
            <span className="text-sm font-mono text-primary tracking-wider uppercase">
              About Me
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-balance">
            Passionate about building
            <span className="gradient-text"> digital experiences</span>
          </h2>
        </SectionReveal>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Profile Photo + Text */}
          <div className="lg:col-span-3 flex flex-col gap-8">
            <SectionReveal delay={100}>
              <div className="flex flex-col sm:flex-row gap-8 items-start">
                {/* Animated photo */}
                <div className="relative shrink-0 group">
                  <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-primary via-primary/40 to-primary/10 opacity-60 blur-sm group-hover:opacity-100 transition-opacity duration-500 animate-pulse" />
                  <div className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-2xl overflow-hidden border-2 border-primary/20 group-hover:border-primary/40 transition-colors duration-500">
                    <Image
                      src="/images/profile.jpg"
                      alt="Abhinav - Full Stack Developer"
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      priority
                    />
                  </div>
                  {/* Decorative dot */}
                  <div className="absolute -bottom-2 -right-2 w-5 h-5 rounded-full bg-primary border-4 border-background" />
                </div>

                {/* Bio text */}
                <div className="space-y-4 flex-1">
                  <p className="text-muted-foreground leading-relaxed text-base">
                    {
                      "I'm a dedicated software developer with a passion for creating efficient, scalable, and user-friendly applications. With expertise in full-stack development, I specialize in building modern web applications using the MERN stack."
                    }
                  </p>
                  <p className="text-muted-foreground leading-relaxed text-base">
                    {
                      "Currently pursuing B.Tech in Computer Science at Malla Reddy College of Engineering and Technology, I love clean code, great UX, and solving real-world problems with technology."
                    }
                  </p>
                </div>
              </div>
            </SectionReveal>

            <SectionReveal delay={200}>
              <blockquote className="border-l-2 border-primary pl-4 italic text-muted-foreground/80 text-sm">
                {
                  '"Code is like humor. When you have to explain it, it\'s bad." - Cory House'
                }
              </blockquote>
            </SectionReveal>

            <SectionReveal delay={250}>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5 w-fit"
              >
                Download CV
              </a>
            </SectionReveal>
          </div>

          {/* Highlight cards */}
          <div className="lg:col-span-2 grid sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {highlights.map((item, i) => (
              <SectionReveal key={item.title} delay={150 + i * 100}>
                <div className="glass-card glass-card-hover rounded-xl p-5 transition-all duration-300 group h-full">
                  <div className="mb-3 inline-flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-semibold mb-1 text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
