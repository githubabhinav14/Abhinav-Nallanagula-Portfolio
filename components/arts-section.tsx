"use client";

import { SectionReveal } from "./section-reveal";
import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";
import { X, ZoomIn, Palette, Sparkles } from "lucide-react";
import Image from "next/image";

const artworks = [
  {
    title: "Abstract Geometry",
    category: "Photoshop",
    description: "Modern geometric composition with vibrant color palette",
    image: "/images/art-1.jpg",
    color: "from-primary/40 to-chart-2/40",
  },
  {
    title: "Neon Typography",
    category: "After Effects",
    description: "Kinetic typography with neon glow and motion trails",
    image: "/images/art-2.jpg",
    color: "from-chart-4/40 to-primary/40",
  },
  {
    title: "Surreal Portrait",
    category: "Photoshop",
    description: "Creative double-exposure photo manipulation art",
    image: "/images/art-3.jpg",
    color: "from-chart-5/40 to-chart-4/40",
  },
  {
    title: "Brand Identity",
    category: "CorelDraw",
    description: "Clean vector brand marks and logo concepts",
    image: "/images/art-4.jpg",
    color: "from-chart-2/40 to-primary/40",
  },
  {
    title: "Motion Design",
    category: "After Effects",
    description: "Dynamic particle systems and cinematic motion graphics",
    image: "/images/art-5.jpg",
    color: "from-primary/40 to-chart-3/40",
  },
  {
    title: "Promotional Design",
    category: "Photoshop",
    description: "Bold marketing graphics with gradient typography",
    image: "/images/art-6.jpg",
    color: "from-chart-3/40 to-chart-5/40",
  },
];

function ArtCard({
  art,
  index,
  onOpen,
}: {
  art: (typeof artworks)[0];
  index: number;
  onOpen: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), index * 120);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [index]);

  return (
    <div
      ref={ref}
      onClick={onOpen}
      className={cn(
        "group relative rounded-2xl overflow-hidden cursor-pointer",
        "transition-all duration-700 ease-out",
        isVisible
          ? "opacity-100 translate-y-0 scale-100"
          : "opacity-0 translate-y-12 scale-95",
        index === 0 || index === 3
          ? "md:col-span-2 aspect-[16/9]"
          : "aspect-square"
      )}
    >
      <Image
        src={art.image}
        alt={art.title}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-110"
      />

      {/* Gradient overlay on hover */}
      <div
        className={cn(
          "absolute inset-0 bg-gradient-to-t opacity-0 group-hover:opacity-100 transition-opacity duration-500",
          art.color
        )}
      />

      {/* Dark bottom gradient always visible */}
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-background/90 to-transparent" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-5">
        <div
          className="transform transition-all duration-500 
          translate-y-2 group-hover:translate-y-0"
        >
          <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/20 border border-primary/30 px-3 py-1 text-xs font-medium text-primary mb-2 backdrop-blur-sm">
            <Sparkles className="w-3 h-3" />
            {art.category}
          </span>
          <h3 className="text-lg font-bold text-foreground">{art.title}</h3>
          <p className="text-sm text-muted-foreground mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
            {art.description}
          </p>
        </div>
      </div>

      {/* Zoom icon */}
      <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-background/60 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100">
        <ZoomIn className="w-4 h-4 text-foreground" />
      </div>
    </div>
  );
}

export function ArtsSection() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <>
      <section id="arts" className="relative py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <SectionReveal>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px flex-1 max-w-12 bg-primary" />
              <span className="text-sm font-mono text-primary tracking-wider uppercase">
                Creative Side
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-balance">
              My <span className="gradient-text">Arts</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mb-12 text-pretty leading-relaxed">
              Beyond code, I express creativity through graphic design, motion
              graphics, and digital art. Here are some of my favorite pieces.
            </p>
          </SectionReveal>

          {/* Masonry-style grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {artworks.map((art, i) => (
              <ArtCard
                key={art.title}
                art={art}
                index={i}
                onOpen={() => setLightboxIndex(i)}
              />
            ))}
          </div>

          {/* Tools strip */}
          <SectionReveal delay={300}>
            <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
              {["Photoshop", "CorelDraw", "After Effects"].map((tool) => (
                <div
                  key={tool}
                  className="inline-flex items-center gap-2 rounded-xl glass-card px-5 py-3 text-sm font-medium text-muted-foreground hover:text-primary hover:border-primary/30 transition-all duration-300"
                >
                  <Palette className="w-4 h-4 text-primary" />
                  {tool}
                </div>
              ))}
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background/90 backdrop-blur-xl p-6 cursor-pointer"
          onClick={() => setLightboxIndex(null)}
        >
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute top-6 right-6 w-12 h-12 rounded-full glass-card flex items-center justify-center text-foreground hover:text-primary transition-colors z-10"
            aria-label="Close lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          <div
            className="relative w-full max-w-4xl aspect-video rounded-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={artworks[lightboxIndex].image}
              alt={artworks[lightboxIndex].title}
              fill
              className="object-contain"
            />
            <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-background/80 to-transparent">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/20 border border-primary/30 px-3 py-1 text-xs font-medium text-primary mb-2 backdrop-blur-sm">
                {artworks[lightboxIndex].category}
              </span>
              <h3 className="text-xl font-bold text-foreground">
                {artworks[lightboxIndex].title}
              </h3>
              <p className="text-sm text-muted-foreground mt-1">
                {artworks[lightboxIndex].description}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
