"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Github, ExternalLink } from "lucide-react";
import { SectionReveal } from "./section-reveal";
import { cn } from "@/lib/utils";
import { projects } from "@/lib/projects";

function TiltCard({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState("");

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -4;
    const rotateY = ((x - centerX) / centerX) * 4;
    setTransform(
      `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.01, 1.01, 1.01)`
    );
  };

  const handleMouseLeave = () => {
    setTransform("");
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn("transition-transform duration-300 ease-out", className)}
      style={{ transform }}
    >
      {children}
    </div>
  );
}

export function ProjectsSection() {
  const router = useRouter();
  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionReveal>
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px flex-1 max-w-12 bg-primary" />
            <span className="text-sm font-mono text-primary tracking-wider uppercase">
              Projects
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-balance">
            Featured
            <span className="gradient-text"> work</span>
          </h2>
        </SectionReveal>

        {/* Bento grid */}
        <div className="grid md:grid-cols-2 gap-5">
          {projects.map((project, index) => (
            <SectionReveal
              key={project.title}
              delay={index * 100}
              className={cn(
                project.featured && index === 0 && "md:col-span-2"
              )}
            >
              <TiltCard>
                <div
                  onClick={() => router.push(`/projects/${project.slug}`)}
                  className={cn(
                    "glass-card glass-card-hover rounded-2xl overflow-hidden transition-all duration-500 group h-full cursor-pointer",
                    project.featured && index === 0 && "md:flex"
                  )}
                >
                  {/* Gradient preview area */}
                  <div
                    className={cn(
                      "relative h-48 bg-gradient-to-br overflow-hidden",
                      project.gradient,
                      project.featured && index === 0 && "md:w-2/5 md:h-auto"
                    )}
                  >
                    <div className="absolute inset-0 grid-bg opacity-30" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="font-mono text-2xl font-bold text-foreground/20 select-none">
                        {"{ " + (index + 1).toString().padStart(2, "0") + " }"}
                      </span>
                    </div>
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-500" />
                  </div>

                  {/* Content */}
                  <div
                    className={cn(
                      "p-6",
                      project.featured && index === 0 && "md:flex-1 md:p-8"
                    )}
                  >
                    <div className="flex items-start justify-between gap-4">
                    <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>
                    <Link
                      href={`/projects/${project.slug}`}
                      className="text-xs px-3 py-1.5 rounded-md border border-border hover:border-primary/40 text-muted-foreground hover:text-primary transition-colors"
                      aria-label={`Open ${project.title} details`}
                    >
                      View details
                    </Link>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-5">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="text-xs font-mono px-2.5 py-1 rounded-md bg-primary/10 text-primary border border-primary/20"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-4">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                        aria-label={`View ${project.title} source code on GitHub`}
                      >
                        <Github className="w-4 h-4" />
                        Code
                      </a>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                        aria-label={`View ${project.title} live demo`}
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </a>
                      <Link
                        href={`/projects/${project.slug}`}
                        onClick={(e) => e.stopPropagation()}
                        className="ml-auto inline-flex items-center gap-2 text-sm text-primary hover:underline"
                        aria-label={`Open ${project.title} details`}
                      >
                        Explore
                      </Link>
                    </div>
                  </div>
                </div>
              </TiltCard>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
