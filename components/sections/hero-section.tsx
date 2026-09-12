"use client"

import { motion } from "framer-motion"
import { ArrowDown, Briefcase, Mail, ArrowRight, Download } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center px-6 pt-20 bg-background text-foreground overflow-hidden">
      {/* Premium glow effect for agency look */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[100px] opacity-50 pointer-events-none" />

      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          {/* Greeting badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-secondary/50 backdrop-blur-sm text-secondary-foreground mb-8 shadow-sm"
          >
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-sm font-medium">Available for new opportunities</span>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6"
          >
            Hi, I&apos;m Zainul. <br />
            <span className="gradient-text">Web Developer <br className="hidden md:block" />& Entrepreneur.</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground text-lg sm:text-xl max-w-2xl mb-10 leading-relaxed"
          >
            I build clean, accessible, and high-performance digital experiences for the web.
            Currently focused on creating innovative solutions at Flowdev Teams.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
          >
            <a
              href="#projects"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300"
            >
              View Portfolio
              <ArrowRight size={18} />
            </a>
            
            <a
              href="/CV_Zainul_Rahmat_Saputra.pdf"
              download
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg border border-border bg-secondary/50 backdrop-blur-sm text-foreground font-semibold hover:bg-secondary hover:border-border/80 transition-all duration-300"
            >
              <Download size={18} />
              Download CV
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap justify-center md:justify-start gap-8 sm:gap-16 mt-16 pt-8 border-t border-border/60 w-full"
          >
            {[
              { value: "3+", label: "Years Exp." },
              { value: "20+", label: "Projects" },
              { value: "15+", label: "Clients" },
            ].map((stat) => (
              <div key={stat.label} className="text-center md:text-left">
                <div className="text-3xl font-bold">{stat.value}</div>
                <div className="text-sm text-muted-foreground mt-1 font-medium">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 md:left-12 md:-translate-x-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <a
          href="#about"
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowDown size={16} className="animate-bounce" />
          <span className="text-xs uppercase tracking-widest font-semibold">Scroll down</span>
        </a>
      </motion.div>
    </section>
  )
}
