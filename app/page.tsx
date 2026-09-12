"use client"

import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/sections/hero-section"
import { AboutSection } from "@/components/sections/about-section"
import { ExperienceSection } from "@/components/sections/experience-section"
import { ProjectsSection } from "@/components/sections/projects-section"
import { SkillsSection } from "@/components/sections/skills-section"
import { ServicesSection } from "@/components/sections/services-section"
import { CertificationsSection } from "@/components/sections/certifications-section"
import { ContactSection } from "@/components/sections/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="relative min-h-[100dvh]">
      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <ServicesSection />
      <CertificationsSection />
      <ContactSection />

      {/* Footer */}
      <Footer />
    </main>
  )
}
