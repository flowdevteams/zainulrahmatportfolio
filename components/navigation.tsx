"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Github, Instagram } from "lucide-react"

interface NavigationProps {
  activeSection: number
  onNavigate: (index: number) => void
  sections: { id: string; label: string }[]
}

export function Navigation({ activeSection, onNavigate, sections }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 py-6 px-6 md:px-10"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <nav className="flex items-center justify-between">
          {/* Logo / Name */}
          <motion.a
            href="#"
            onClick={(e) => {
              e.preventDefault()
              onNavigate(0)
            }}
            className="text-base font-medium tracking-widest uppercase text-foreground hover:opacity-70 transition-opacity"
            style={{ fontFamily: "var(--font-display)" }}
            whileHover={{ scale: 1.02 }}
          >
            Zainul Rahmat
          </motion.a>

          {/* Right side — social icons + menu button */}
          <div className="flex items-center gap-6">
            {/* Social Icons - Desktop */}
            <div className="hidden md:flex items-center gap-4">
              <a
                href="https://github.com/ZainulRhmt24"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href="https://www.instagram.com/z4yn.rs"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
            </div>

            {/* Hamburger Menu Button */}
            <button
              className="relative w-8 h-6 flex flex-col justify-between items-end group"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <motion.span
                className="h-[1px] bg-foreground block origin-right"
                animate={{
                  width: isMobileMenuOpen ? 28 : 32,
                  rotate: isMobileMenuOpen ? -45 : 0,
                  y: isMobileMenuOpen ? -1 : 0,
                }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="h-[1px] bg-foreground block"
                animate={{
                  width: isMobileMenuOpen ? 0 : 20,
                  opacity: isMobileMenuOpen ? 0 : 1,
                }}
                transition={{ duration: 0.2 }}
              />
              <motion.span
                className="h-[1px] bg-foreground block origin-right"
                animate={{
                  width: isMobileMenuOpen ? 28 : 24,
                  rotate: isMobileMenuOpen ? 45 : 0,
                  y: isMobileMenuOpen ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
              />
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Full Screen Navigation Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            {/* Background */}
            <motion.div
              className="absolute inset-0 bg-background/95 backdrop-blur-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Menu Links */}
            <nav className="relative z-10">
              <ul className="flex flex-col items-center gap-4">
                {sections.map((section, index) => (
                  <motion.li
                    key={section.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ delay: index * 0.08, duration: 0.4 }}
                  >
                    <button
                      onClick={() => {
                        onNavigate(index)
                        setIsMobileMenuOpen(false)
                      }}
                      className={`text-4xl md:text-6xl font-display tracking-wide transition-all duration-300 ${
                        activeSection === index
                          ? "text-foreground"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {section.label.toUpperCase()}
                    </button>
                  </motion.li>
                ))}
              </ul>

              {/* Social links in menu */}
              <motion.div
                className="flex items-center justify-center gap-6 mt-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.4 }}
              >
                <a
                  href="https://github.com/ZainulRhmt24"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Github size={22} />
                </a>
                <a
                  href="https://www.instagram.com/z4yn.rs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Instagram size={22} />
                </a>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
