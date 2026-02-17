"use client";

import { Award, Star, Sparkles, Trophy, Medal, Zap } from "lucide-react";

const certificates = [
  { name: "GenAI Solution Challenge - GDG", icon: Sparkles },
  { name: "AI & ML Workshop - IIT Hyderabad", icon: Star },
  { name: "Machine Learning - Intel Unnati Lab", icon: Zap },
  { name: "Cisco CCNA Certification", icon: Award },
  { name: "Best Designer Award - Tech Fest", icon: Trophy },
  { name: "C Programming - Infologic", icon: Medal },
];

function MarqueeItem({
  name,
  icon: Icon,
}: {
  name: string;
  icon: typeof Award;
}) {
  return (
    <div className="flex-shrink-0 flex items-center gap-3 glass-card rounded-full px-5 py-2.5 mx-2 group hover:border-primary/30 transition-colors">
      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
        <Icon className="w-4 h-4 text-primary" />
      </div>
      <span className="text-sm font-medium text-foreground whitespace-nowrap">
        {name}
      </span>
    </div>
  );
}

export function CertificateMarquee() {
  const items = [...certificates, ...certificates, ...certificates];

  return (
    <section className="relative py-16 overflow-hidden">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

      {/* Row 1 - scrolling left */}
      <div className="flex marquee-left mb-4">
        {items.map((cert, i) => (
          <MarqueeItem key={`row1-${i}`} name={cert.name} icon={cert.icon} />
        ))}
      </div>

      {/* Row 2 - scrolling right (reversed) */}
      <div className="flex marquee-right">
        {[...items].reverse().map((cert, i) => (
          <MarqueeItem key={`row2-${i}`} name={cert.name} icon={cert.icon} />
        ))}
      </div>
    </section>
  );
}
