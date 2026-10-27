"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  })

  const moonY = useTransform(scrollYProgress, [0, 1], [0, -80])
  const cloudX1 = useTransform(scrollYProgress, [0, 1], [0, 60])
  const cloudX2 = useTransform(scrollYProgress, [0, 1], [0, -40])
  const starsOpacity = useTransform(scrollYProgress, [0, 0.5], [0.6, 0.2])

  const letterVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.5 + i * 0.05,
        duration: 0.8,
        ease: [0.215, 0.61, 0.355, 1],
      },
    }),
  }

  const nameLetters = "ZAINUL".split("")
  const lastNameLetters = "RAHMAT".split("")

  return (
    <section
      ref={sectionRef}
      id="top"
      className="fullpage-section sky-bg"
    >
      {/* Stars background */}
      <motion.div
        className="stars-layer"
        style={{ opacity: starsOpacity }}
      >
        <img
          src="/stars.png"
          alt=""
          className="w-full h-full object-cover"
          aria-hidden="true"
        />
      </motion.div>

      {/* Moon with parallax */}
      <motion.div
        className="moon-wrapper z-[1]"
        style={{ y: moonY }}
      >
        <div className="moon-glow" />
        <img
          src="/moon-hero.png"
          alt="Moon"
          className="moon-img"
        />
        {/* PORTFOLIO text overlaying moon */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.span
            className="font-display text-[clamp(1.5rem,4vw,3.5rem)] text-white/10 tracking-[0.3em] select-none"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
          >
            PORTFOLIO
          </motion.span>
        </div>
      </motion.div>

      {/* Clouds with parallax */}
      <motion.div className="cloud cloud--1 z-[2]" style={{ x: cloudX1 }}>
        <img src="/cloud.png" alt="" className="w-full opacity-40" aria-hidden="true" />
      </motion.div>
      <motion.div className="cloud cloud--2 z-[2]" style={{ x: cloudX2 }}>
        <img src="/cloud.png" alt="" className="w-full opacity-30 scale-x-[-1]" aria-hidden="true" />
      </motion.div>
      <motion.div className="cloud cloud--3 z-[2]" style={{ x: cloudX1 }}>
        <img src="/cloud.png" alt="" className="w-full opacity-20" aria-hidden="true" />
      </motion.div>

      {/* Title Content */}
      <div className="relative z-[10] px-6 sm:px-10 lg:px-20 max-w-[1400px] mx-auto w-full">
        <div className="max-w-2xl">
          {/* Name - Letter by Letter */}
          <div className="title-reveal mb-2">
            <h1 className="font-display text-[clamp(3.5rem,10vw,8rem)] leading-[0.95] text-foreground">
              <span className="block overflow-hidden">
                {nameLetters.map((letter, i) => (
                  <motion.span
                    key={`first-${i}`}
                    custom={i}
                    variants={letterVariants}
                    initial="hidden"
                    animate="visible"
                    className="inline-block"
                  >
                    {letter}
                  </motion.span>
                ))}
              </span>
              <span className="block overflow-hidden">
                {lastNameLetters.map((letter, i) => (
                  <motion.span
                    key={`last-${i}`}
                    custom={i + nameLetters.length}
                    variants={letterVariants}
                    initial="hidden"
                    animate="visible"
                    className="inline-block"
                  >
                    {letter}
                  </motion.span>
                ))}
              </span>
            </h1>
          </div>

          {/* Divider */}
          <motion.div
            className="section-border"
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" }}
            style={{ transformOrigin: "left" }}
          >
            <span></span>
            <span></span>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.6 }}
          >
            web developer /<br />
            entrepreneur.
          </motion.p>
        </div>
      </div>

      {/* Scroll down indicator */}
      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
      >
        SCROLL DOWN
      </motion.div>

      {/* Page Number */}
      <div className="page-number" aria-hidden="true">
        00
      </div>
    </section>
  )
}
