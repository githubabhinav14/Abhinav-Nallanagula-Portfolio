"use client";
 
import { useState, useCallback, useEffect } from "react";
import { IntroOverlay } from "@/components/intro-overlay";
import { Navigation } from "@/components/navigation";
import { ScrollProgress } from "@/components/scroll-progress";
import { CursorGlow } from "@/components/cursor-glow";
import { FloatingSocials } from "@/components/floating-socials";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { SkillsSection } from "@/components/skills-section";
import { ProjectsSection } from "@/components/projects-section";
import { ClientsSection } from "@/components/clients-section";
import { ExperienceSection } from "@/components/experience-section";
import { EducationSection } from "@/components/education-section";
import { CertificationsSection } from "@/components/certifications-section";
import { CertificateMarquee } from "@/components/certificate-marquee";
import { ArtsSection } from "@/components/arts-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";

export default function Home() {
  const [introComplete, setIntroComplete] = useState(false);
  const [introEnabled, setIntroEnabled] = useState(true);

  const handleIntroComplete = useCallback(() => {
    setIntroComplete(true);
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined" && window.location.hash === "#projects") {
      setIntroEnabled(false);
      setIntroComplete(true);
    }
  }, []);

  return (
    <>
      {introEnabled && <IntroOverlay onComplete={handleIntroComplete} />}

      <div
        style={{
          opacity: introComplete ? 1 : 0,
          transition: "opacity 0.5s ease 0.2s",
        }}
      >
        <ScrollProgress />
        <CursorGlow />
        <Navigation />
        <FloatingSocials />

        <main>
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <ClientsSection />
          <ExperienceSection />
          <EducationSection />
          <CertificationsSection />
          <ArtsSection />
          <CertificateMarquee />
          <ContactSection />
        </main>

        <Footer />
      </div>
    </>
  );
}
