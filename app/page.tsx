"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/sections/hero-section"
import { AboutSection } from "@/components/sections/about-section"
import { ProjectsSection } from "@/components/sections/projects-section"
import { SkillsSection } from "@/components/sections/skills-section"
import { ContactSection } from "@/components/sections/contact-section"

const sections = [
  { id: "top", label: "Home" },
  { id: "works", label: "Works" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
]

export default function Home() {
  const [activeSection, setActiveSection] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  const handleScroll = useCallback(() => {
    if (!containerRef.current) return
    const container = containerRef.current
    const scrollTop = container.scrollTop
    const sectionHeight = container.clientHeight
    const currentSection = Math.round(scrollTop / sectionHeight)
    setActiveSection(currentSection)
  }, [])

  useEffect(() => {
    const container = containerRef.current
    if (!container) return
    container.addEventListener("scroll", handleScroll, { passive: true })
    return () => container.removeEventListener("scroll", handleScroll)
  }, [handleScroll])

  const scrollToSection = (index: number) => {
    if (!containerRef.current) return
    const sectionHeight = containerRef.current.clientHeight
    containerRef.current.scrollTo({
      top: sectionHeight * index,
      behavior: "smooth",
    })
  }

  return (
    <>
      {/* Stars Background */}
      <div className="stars">
        <div className="star-layer" />
        <div className="star-layer-2" />
        <div className="star-layer-3" />
      </div>

      {/* Moonlight gradient */}
      <div className="moonlight-gradient" />

      {/* Navigation */}
      <Navigation
        activeSection={activeSection}
        onNavigate={scrollToSection}
        sections={sections}
      />

      {/* Navigation Dots */}
      <div className="nav-dots">
        {sections.map((section, index) => (
          <button
            key={section.id}
            className={`nav-dot ${activeSection === index ? "active" : ""}`}
            data-label={section.label}
            onClick={() => scrollToSection(index)}
            aria-label={`Go to ${section.label}`}
          />
        ))}
      </div>

      {/* Full Page Scroll Container */}
      <div ref={containerRef} className="fullpage-container night-sky">
        <HeroSection />
        <ProjectsSection />
        <AboutSection />
        <SkillsSection />
        <ContactSection />
      </div>
    </>
  )
}
