"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { ArrowRight } from "lucide-react"

export function AboutSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section
      ref={ref}
      id="about"
      className="fullpage-section sky-bg"
    >
      <div className="relative z-10 flex flex-col lg:flex-row items-center w-full h-full px-6 sm:px-10 lg:px-20 max-w-[1400px] mx-auto gap-8 lg:gap-16">
        {/* Left: Title & Description */}
        <div className="flex-1 flex flex-col justify-center order-2 lg:order-1">
          <motion.h2
            className="font-display text-[clamp(2.5rem,6vw,5rem)] leading-[1] text-foreground"
            initial={{ opacity: 0, y: 60 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }}
          >
            About Me
          </motion.h2>

          {/* Divider */}
          <motion.div
            className="section-border"
            initial={{ opacity: 0, scaleX: 0 }}
            animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            style={{ transformOrigin: "left" }}
          >
            <span></span>
            <span></span>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            className="text-muted-foreground text-sm sm:text-base leading-relaxed max-w-md"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            I love Design, Technology,<br />
            and Business.
          </motion.p>

          {/* Additional Info */}
          <motion.div
            className="mt-8 space-y-4 text-muted-foreground text-sm leading-relaxed max-w-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <p>
              A passionate web developer and multifaceted individual who thrives at the intersection 
              of technology, business, and creativity.
            </p>
            <p>
              While pursuing my degree in Information Systems, I run <strong className="text-foreground">Flowdev Teams</strong> — a digital 
              service business focused on building impactful web solutions.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="mt-8 flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <a href="#contact" className="btn-show-more">
              Get In Touch
              <ArrowRight size={16} />
            </a>
            <a
              href="/CV_Zainul_Rahmat_Saputra.pdf"
              download
              className="btn-show-more"
              style={{ borderColor: 'rgba(196, 168, 130, 0.3)' }}
            >
              Download CV
            </a>
          </motion.div>
        </div>

        {/* Right: Photo with Cover Reveal */}
        <div className="flex-1 flex justify-center items-center order-1 lg:order-2 w-full max-w-md">
          <motion.div
            className="image-reveal relative w-full aspect-[3/4] rounded-sm overflow-hidden"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            {/* Photo */}
            <motion.div
              className="absolute inset-0"
              initial={{ scale: 1.2 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ delay: 0.5, duration: 1.2, ease: [0.215, 0.61, 0.355, 1] }}
            >
              <img
                src="/foto.jpeg"
                alt="Zainul Rahmat Saputra"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Cover reveal */}
            <div className="image-reveal__cover">
              <motion.div
                initial={{ scaleX: 1 }}
                animate={isInView ? { scaleX: 0 } : {}}
                transition={{ delay: 0.3, duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
                style={{ transformOrigin: "right" }}
              />
              <motion.div
                initial={{ scaleX: 1 }}
                animate={isInView ? { scaleX: 0 } : {}}
                transition={{ delay: 0.5, duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
                style={{ transformOrigin: "left" }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Page Number */}
      <div className="page-number" aria-hidden="true">
        07
      </div>
    </section>
  )
}
