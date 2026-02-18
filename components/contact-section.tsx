"use client";

import { useState } from "react";
import { Mail, Phone, Github, Linkedin, Send } from "lucide-react";
import { SectionReveal } from "./section-reveal";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "abhinavnallanagula14@gmail.com",
    href: "mailto:abhinavnallanagula14@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 8985665850",
    href: "tel:+918985665850",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "githubabhinav14",
    href: "https://github.com/githubabhinav14",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Abhinav Nallanagula",
    href: "https://linkedin.com/in/abhinav-nallanagula",
  },
];

export function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setFormState({ name: "", email: "", message: "" });
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionReveal>
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px flex-1 max-w-12 bg-primary" />
            <span className="text-sm font-mono text-primary tracking-wider uppercase">
              Contact
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-balance">
            {"Let's work"}
            <span className="gradient-text"> together</span>
          </h2>
          <p className="text-muted-foreground mb-12 max-w-2xl text-pretty">
            {
              "I'm always excited to work on new projects and collaborate with amazing people. Feel free to reach out if you'd like to discuss opportunities or just say hello."
            }
          </p>
        </SectionReveal>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact info */}
          <SectionReveal delay={100}>
            <div className="space-y-4">
              {contactInfo.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.label === "GitHub" || item.label === "LinkedIn" ? "_blank" : undefined}
                  rel={item.label === "GitHub" || item.label === "LinkedIn" ? "noopener noreferrer" : undefined}
                  className="glass-card glass-card-hover rounded-xl p-4 flex items-center gap-4 transition-all duration-300 group block"
                >
                  <div className="flex-shrink-0 w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">
                      {item.label}
                    </p>
                    <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                      {item.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </SectionReveal>

          {/* Contact form */}
          <SectionReveal delay={200}>
            <form
              onSubmit={handleSubmit}
              className="glass-card rounded-xl p-6 space-y-5"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={formState.name}
                  onChange={(e) =>
                    setFormState((s) => ({ ...s, name: e.target.value }))
                  }
                  className="w-full rounded-lg border border-border bg-secondary/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={formState.email}
                  onChange={(e) =>
                    setFormState((s) => ({ ...s, email: e.target.value }))
                  }
                  className="w-full rounded-lg border border-border bg-secondary/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={formState.message}
                  onChange={(e) =>
                    setFormState((s) => ({ ...s, message: e.target.value }))
                  }
                  className="w-full rounded-lg border border-border bg-secondary/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                suppressHydrationWarning
                type="submit"
                className="group w-full inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5 disabled:opacity-50"
              >
                {sent ? "Message Sent!" : "Send Message"}
                <Send className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </button>

              {sent && (
                <p className="text-sm text-primary text-center">
                  {"Thanks! I'll get back to you soon."}
                </p>
              )}
            </form>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
