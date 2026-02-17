"use client";

import { ExternalLink, Github, CheckCircle } from "lucide-react";
import { SectionReveal } from "./section-reveal";
import { useRef, useState } from "react";
import { cn } from "@/lib/utils";

const clientProjects = [
  {
    client: "Soma Scents",
    title: "E-Commerce Website",
    description:
      "A complete e-commerce platform for a candle-selling business with product showcasing, cart functionality, and order handling.",
    highlights: [
      "Built product catalog with cart & checkout flow",
      "Integrated secure backend with MongoDB for product data, customers, and orders",
      "Helped the business establish a strong digital presence and streamline online sales",
    ],
    tech: ["Next.js", "MongoDB"],
    github:
      "https://github.com/githubabhinav14/Soma-Scents-Ecommerce-website-candles-business",
    live: "https://soma-scents-ecommerce-website-candl-three.vercel.app/",
  },
  {
    client: "Aani Creations",
    title: "Graphic Design & Printing Services Website",
    description:
      "A professional company website to promote Aani Creations' graphic design and printing services.",
    highlights: [
      "Focused on clean, modern design and branding consistency",
      "Optimized performance for fast loading with responsive layouts",
      "Built an intuitive admin panel for content updates, service listings, and portfolio management",
    ],
    tech: ["Next.js"],
    github: "https://github.com/githubabhinav14/Aani-Creations",
    live: "https://aani-creations.vercel.app/",
  },
];

function ClientCard({
  project,
  index,
}: {
  project: (typeof clientProjects)[0];
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState("");
  const [glowPos, setGlowPos] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -3;
    const rotateY = ((x - centerX) / centerX) * 3;
    setTransform(
      `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.01, 1.01, 1.01)`
    );
    setGlowPos({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
    });
  };

  const handleMouseLeave = () => {
    setTransform("");
  };

  return (
    <SectionReveal delay={index * 200} variant={index % 2 === 0 ? "fade-left" : "fade-right"}>
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative glass-card glass-card-hover rounded-2xl overflow-hidden transition-transform duration-300 ease-out group"
        style={{ transform }}
      >
        {/* Glow effect on hover */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background: `radial-gradient(400px circle at ${glowPos.x}% ${glowPos.y}%, hsl(var(--primary) / 0.08), transparent 60%)`,
          }}
        />

        <div className="relative p-6 sm:p-8">
          {/* Header */}
          <div className="flex items-start justify-between gap-4 mb-4">
            <div>
              <span className="inline-flex items-center gap-1.5 text-xs font-mono text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/20 mb-3">
                <CheckCircle className="w-3 h-3" />
                Client Project
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                {project.client}
              </h3>
              <p className="text-sm text-primary font-medium mt-0.5">
                {project.title}
              </p>
            </div>
            <span className="text-4xl font-bold text-foreground/5 font-mono select-none">
              {(index + 1).toString().padStart(2, "0")}
            </span>
          </div>

          <p className="text-sm text-muted-foreground leading-relaxed mb-5">
            {project.description}
          </p>

          {/* Highlights */}
          <ul className="space-y-2 mb-6">
            {project.highlights.map((h, i) => (
              <li
                key={i}
                className="flex items-start gap-2.5 text-sm text-muted-foreground"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                {h}
              </li>
            ))}
          </ul>

          {/* Tech + Links */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex flex-wrap gap-2">
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
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                aria-label={`View ${project.client} source code`}
              >
                <Github className="w-4 h-4" />
                Code
              </a>
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                aria-label={`View ${project.client} live site`}
              >
                <ExternalLink className="w-4 h-4" />
                Live Site
              </a>
            </div>
          </div>
        </div>
      </div>
    </SectionReveal>
  );
}

export function ClientsSection() {
  return (
    <section id="clients" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionReveal>
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px flex-1 max-w-12 bg-primary" />
            <span className="text-sm font-mono text-primary tracking-wider uppercase">
              Clients
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-balance">
            Freelance
            <span className="gradient-text"> client work</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mb-12 leading-relaxed">
            Real-world projects I{"'"}ve delivered for businesses, helping them
            build a strong digital presence and grow their online operations.
          </p>
        </SectionReveal>

        <div className="space-y-6">
          {clientProjects.map((project, index) => (
            <ClientCard key={project.client} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
