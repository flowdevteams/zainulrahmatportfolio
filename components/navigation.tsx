"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Github, Instagram } from "lucide-react"

const navItems = [
  { label: "HOME", href: "#top" },
  { label: "WORKS", href: "#projects" },
  { label: "ABOUT ME", href: "#about" },
  { label: "CONTACT", href: "#contact" },
]

const socialLinks = [
  { icon: Github, label: "GitHub", href: "https://github.com/ZainulRhmt24" },
  { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/z4yn.rs" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    // Listen on both window scroll AND the fullpage-container scroll
    const container = document.querySelector(".fullpage-container")
    
    const handleScroll = () => {
      const scrolled = window.scrollY > 50 || (container ? container.scrollTop > 50 : false)
      setIsScrolled(scrolled)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    if (container) {
      container.addEventListener("scroll", handleScroll, { passive: true })
    }

    return () => {
      window.removeEventListener("scroll", handleScroll)
      if (container) {
        container.removeEventListener("scroll", handleScroll)
      }
    }
  }, [])

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => { document.body.style.overflow = "" }
  }, [isOpen])

  const handleNavClick = useCallback((href: string) => {
    setIsOpen(false)
    // Scroll the fullpage container to the target section
    setTimeout(() => {
      const target = document.querySelector(href)
      if (target) {
        target.scrollIntoView({ behavior: "smooth" })
      }
    }, 100)
  }, [])

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 px-6 sm:px-10 transition-all duration-500 ${
          isScrolled
            ? "glass-darker py-3"
            : "py-5 bg-gradient-to-b from-[var(--sky-gradient-top)]/90 to-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <nav className="flex items-center justify-between max-w-[1400px] mx-auto">
          {/* Logo / Name */}
          <motion.a
            href="#top"
            onClick={(e) => {
              e.preventDefault()
              handleNavClick("#top")
            }}
            className="font-display text-base sm:text-lg text-foreground tracking-wider z-[110]"
            whileHover={{ scale: 1.02 }}
          >
            Zainul Rahmat
          </motion.a>

          {/* Right side: Social Icons + Hamburger */}
          <div className="flex items-center gap-5 z-[110]">
            {/* Social Icons (desktop only) */}
            <div className="hidden sm:flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/60 hover:text-foreground transition-colors duration-300"
                  aria-label={social.label}
                >
                  <social.icon size={17} strokeWidth={1.5} />
                </a>
              ))}
            </div>

            {/* Separator */}
            <div className="hidden sm:block w-[1px] h-4 bg-foreground/20" />

            {/* Hamburger Menu Button */}
            <button
              className="relative w-8 h-6 flex flex-col items-end justify-center gap-[5px] group cursor-pointer"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              <motion.span
                className="block h-[1.5px] bg-foreground origin-center"
                animate={isOpen 
                  ? { rotate: 45, y: 6.5, width: "24px" } 
                  : { rotate: 0, y: 0, width: "24px" }
                }
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="block w-4 h-[1.5px] bg-foreground"
                animate={isOpen ? { opacity: 0, x: 10 } : { opacity: 1, x: 0 }}
                transition={{ duration: 0.2 }}
              />
              <motion.span
                className="block h-[1.5px] bg-foreground origin-center"
                animate={isOpen 
                  ? { rotate: -45, y: -6.5, width: "24px" } 
                  : { rotate: 0, y: 0, width: "18px" }
                }
                transition={{ duration: 0.3 }}
              />
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Fullscreen Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="nav-curtain"
            initial={{ clipPath: "circle(0% at calc(100% - 3rem) 2rem)" }}
            animate={{ clipPath: "circle(150% at calc(100% - 3rem) 2rem)" }}
            exit={{ clipPath: "circle(0% at calc(100% - 3rem) 2rem)" }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          >
            <div className="flex flex-col items-center gap-12">
              <ul className="flex flex-col items-center gap-8">
                {navItems.map((item, index) => (
                  <motion.li
                    key={item.label}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ delay: 0.1 + index * 0.08, duration: 0.5 }}
                  >
                    <a
                      href={item.href}
                      className="font-display text-3xl sm:text-5xl text-foreground hover:text-primary transition-colors duration-300 tracking-wider"
                      onClick={(e) => {
                        e.preventDefault()
                        handleNavClick(item.href)
                      }}
                    >
                      {item.label}
                    </a>
                  </motion.li>
                ))}
              </ul>

              {/* Social links in mobile menu */}
              <motion.div
                className="flex items-center gap-6 sm:hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon size={22} />
                  </a>
                ))}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
