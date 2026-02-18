"use client";

import { useRef, useState } from "react";
import { Award, ExternalLink } from "lucide-react";
import { SectionReveal } from "./section-reveal";
import { cn } from "@/lib/utils";
import Image from "next/image";

const certifications = [
  {
    title: "GenAI Solution Challenge",
    issuer: "Google Developer Groups (GDG)",
    description:
      "Earned a Certificate of Appreciation and financial items for completing the challenge using cutting-edge technology.",
    image: "/images/cert-genai.jpg",
    isNew: true,
  },
  {
    title: "AI & ML Workshop",
    issuer: "Skilligence EdTech & IIT Hyderabad",
    description:
      "Completed a hands-on workshop on Artificial Intelligence with Machine Learning, covering key AI concepts and techniques.",
    image: "/images/cert-aiml.jpg",
    isNew: false,
  },
  {
    title: "Machine Learning Training",
    issuer: "Intel Unnati Lab & MRCET",
    description:
      "Completed a 3-day training program on Machine Learning organized by Edgate Technologies in collaboration with Malla Reddy College.",
    image: "/images/cert-ml-intel.jpg",
    isNew: false,
  },
  {
    title: "Cisco CCNA Certification Workshop",
    issuer: "Edgate & MRCET",
    description:
      "3-day workshop on Cisco CCNA Certification Training covering networking fundamentals and protocols.",
    image: "/images/cert-cisco.jpg",
    isNew: false,
  },
  {
    title: "Best Designer Award",
    issuer: "University Tech Fest",
    description:
      "Awarded for outstanding design work during my degree program at the university tech fest.",
    image: "/images/cert-designer.jpg",
    isNew: false,
  },
  {
    title: "C Programming",
    issuer: "Infologic Software Training & Development",
    description:
      "Certificate of Professional Achievement in C Programming covering core programming concepts.",
    image: "/images/cert-cprog.jpg",
    isNew: false,
  },
];

function CertCard({
  cert,
  index,
}: {
  cert: (typeof certifications)[0];
  index: number;
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
    const rotateX = ((y - centerY) / centerY) * -5;
    const rotateY = ((x - centerX) / centerX) * 5;
    setTransform(
      `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`
    );
  };

  const handleMouseLeave = () => {
    setTransform("");
  };

  return (
    <SectionReveal delay={index * 100} variant="fade-scale">
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative group glass-card rounded-2xl overflow-hidden transition-all duration-300 ease-out hover:border-primary/30 h-full flex flex-col"
        style={{ transform }}
      >
        {/* New badge */}
        {cert.isNew && (
          <div className="absolute top-3 left-3 z-10">
            <span className="text-[10px] font-bold uppercase tracking-wider bg-primary text-primary-foreground px-2.5 py-1 rounded-full">
              New
            </span>
          </div>
        )}

        {/* Certificate image */}
        <div className="relative h-44 overflow-hidden bg-secondary/40">
          <Image
            src={cert.image}
            alt={`${cert.title} certificate`}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Left accent border */}
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary/0 group-hover:bg-primary transition-all duration-300 rounded-l-2xl" />

        {/* Content */}
        <div className="p-5 flex flex-col flex-1">
          <h3 className="text-sm font-bold text-foreground leading-snug mb-0.5 group-hover:text-primary transition-colors">
            {cert.title}
          </h3>
          <p className="text-xs font-medium text-primary/80 mb-2">
            {cert.issuer}
          </p>
          <p className="text-xs text-muted-foreground leading-relaxed flex-1">
            {cert.description}
          </p>

          <div className="mt-4">
            <button
              suppressHydrationWarning
              type="button"
              className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-primary/10 border border-primary/20 px-4 py-2 text-xs font-semibold text-primary transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              View Certificate
            </button>
          </div>
        </div>
      </div>
    </SectionReveal>
  );
}

export function CertificationsSection() {
  return (
    <section id="certifications" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionReveal>
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px flex-1 max-w-12 bg-primary" />
            <span className="text-sm font-mono text-primary tracking-wider uppercase">
              Achievements
            </span>
            <div className="h-px flex-1 max-w-12 bg-primary" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center text-balance">
            Achievements &
            <span className="gradient-text"> Certifications</span>
          </h2>
          <p className="text-muted-foreground text-center max-w-xl mx-auto mb-14 text-pretty">
            A showcase of my accomplishments and professional certifications
            earned through dedication and skill-building.
          </p>
        </SectionReveal>

        {/* Certificate grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certifications.map((cert, index) => (
            <CertCard key={cert.title} cert={cert} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
