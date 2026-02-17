"use client";

import { Github, Linkedin, Mail } from "lucide-react";

const socials = [
  {
    href: "https://github.com/githubabhinav14",
    icon: Github,
    label: "GitHub",
  },
  {
    href: "https://linkedin.com/in/abhinav-nallanagula",
    icon: Linkedin,
    label: "LinkedIn",
  },
  {
    href: "mailto:abhinavnallanagula14@gmail.com",
    icon: Mail,
    label: "Email",
  },
];

export function FloatingSocials() {
  return (
    <div className="fixed left-6 bottom-0 z-40 hidden lg:flex flex-col items-center gap-4">
      {socials.map((social) => (
        <a
          key={social.label}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.label}
          className="text-muted-foreground hover:text-primary hover:-translate-y-1 transition-all duration-300"
        >
          <social.icon className="w-5 h-5" />
        </a>
      ))}
      <div className="w-px h-24 bg-border" />
    </div>
  );
}
