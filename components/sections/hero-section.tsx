"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function HeroSection() {
  return (
    <section id="top" className="fullpage-section relative flex items-center justify-center">
      {/* Moon */}
      <motion.div
        className="absolute right-[-5%] md:right-[5%] top-[10%] md:top-[5%] w-[50vw] md:w-[35vw] max-w-[500px] aspect-square z-[2]"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <div className="moon-glow w-full h-full relative">
          <Image
            src="/moon.png"
            alt="Moon"
            fill
            className="object-contain"
            priority
          />
          {/* PORTFOLIO text orbiting the moon */}
          <motion.p
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[clamp(1rem,3vw,2.5rem)] font-display tracking-[0.3em] text-white/20 pointer-events-none select-none whitespace-nowrap"
            style={{ fontFamily: "var(--font-display)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            PORTFOLIO
          </motion.p>
        </div>
      </motion.div>

      {/* Clouds */}
      <div className="absolute inset-0 pointer-events-none z-[3]">
        {/* Cloud 1 */}
        <div className="cloud-1 absolute bottom-[15%] left-[-5%] w-[40vw] max-w-[400px] opacity-20">
          <svg viewBox="0 0 800 300" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="400" cy="200" rx="380" ry="80" fill="url(#cloud1)" />
            <ellipse cx="300" cy="160" rx="200" ry="100" fill="url(#cloud1)" />
            <ellipse cx="500" cy="170" rx="180" ry="90" fill="url(#cloud1)" />
            <defs>
              <linearGradient id="cloud1" x1="0" y1="0" x2="800" y2="300">
                <stop stopColor="rgba(200,210,230,0.4)" />
                <stop offset="1" stopColor="rgba(200,210,230,0.1)" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Cloud 2 */}
        <div className="cloud-2 absolute top-[20%] right-[-10%] w-[35vw] max-w-[350px] opacity-15">
          <svg viewBox="0 0 600 250" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="300" cy="150" rx="280" ry="70" fill="rgba(200,210,230,0.3)" />
            <ellipse cx="220" cy="120" rx="150" ry="80" fill="rgba(200,210,230,0.2)" />
            <ellipse cx="400" cy="130" rx="140" ry="70" fill="rgba(200,210,230,0.2)" />
          </svg>
        </div>

        {/* Cloud 3 */}
        <div className="cloud-3 absolute bottom-[5%] right-[10%] w-[30vw] max-w-[300px] opacity-10">
          <svg viewBox="0 0 500 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="250" cy="120" rx="230" ry="60" fill="rgba(200,210,230,0.3)" />
            <ellipse cx="180" cy="90" rx="120" ry="70" fill="rgba(200,210,230,0.2)" />
          </svg>
        </div>
      </div>

      {/* Main Title */}
      <div className="relative z-[5] flex flex-col items-start px-8 md:px-16 lg:px-24 w-full max-w-screen-xl">
        <motion.h1
          className="section-title text-[clamp(3rem,10vw,9rem)] leading-[0.95] mb-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          ZAINUL
          <br />
          RAHMAT
        </motion.h1>

        {/* Decorative line */}
        <motion.div
          className="deco-line mb-6"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <span></span>
          <span></span>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-sm tracking-wide"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          web developer /
          <br />
          entrepreneur.
        </motion.p>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <span>SCROLLDOWN</span>
      </motion.div>

      {/* Page Number */}
      <div className="page-num" aria-hidden="true">
        00
      </div>
    </section>
  )
}
