"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Download, Briefcase, GraduationCap, Rocket, ExternalLink } from "lucide-react"

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section id="about" className="fullpage-section relative flex items-center" ref={ref}>
      <div className="w-full h-full grid md:grid-cols-2 items-center px-8 md:px-16 lg:px-24 gap-8 md:gap-16">
        {/* Left Side - Title & Description */}
        <div className="flex flex-col justify-center z-10">
          <motion.h2
            className="section-title text-[clamp(2.5rem,7vw,6rem)] leading-[0.95] mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            About
            <br />
            Me
          </motion.h2>

          <motion.div
            className="deco-line mb-6"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <span></span>
            <span></span>
          </motion.div>

          <motion.p
            className="text-muted-foreground text-sm md:text-base leading-relaxed max-w-lg mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            I love Design, Technology,
            <br />
            and Entrepreneurship.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <a href="/CV_Zainul_Rahmat_Saputra.pdf" download className="btn-kuon">
              <Download size={16} />
              Download CV
            </a>
          </motion.div>
        </div>

        {/* Right Side - Info Cards */}
        <motion.div
          className="flex flex-col gap-6 z-10"
          initial={{ opacity: 0, x: 30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {/* Bio text */}
          <div className="space-y-4 text-muted-foreground text-sm leading-relaxed border-l border-border/50 pl-6">
            <p>
              A passionate web developer and multifaceted individual who thrives at the intersection of technology, business, and creativity.
            </p>
            <p>
              While pursuing my degree in Information Systems, I run <strong className="text-foreground">Flowdev Teams</strong>—a digital service business focused on building impactful web solutions.
            </p>
          </div>

          {/* Experience Cards */}
          <div className="space-y-4 mt-4">
            {[
              {
                icon: GraduationCap,
                title: "Sistem Informasi",
                place: "STIE Bina Tunggal Bekasi",
                period: "2022 - Present",
              },
              {
                icon: Rocket,
                title: "Founder & Web Developer",
                place: "Flowdev Teams",
                period: "2023 - Present",
                link: "https://flowdevteams.com",
              },
              {
                icon: Briefcase,
                title: "Document Specialist",
                place: "Masagena Jaya Maritim",
                period: "Current",
                link: "https://masagenajayamaritim.com",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                className="flex items-start gap-4 p-4 rounded-lg border border-border/30 bg-card/30 backdrop-blur-sm hover:border-border/60 transition-colors group"
                initial={{ opacity: 0, y: 15 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
              >
                <div className="w-10 h-10 rounded-lg bg-secondary/50 flex items-center justify-center shrink-0 group-hover:bg-primary/10 transition-colors">
                  <item.icon size={18} className="text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <h4 className="text-sm font-semibold text-foreground">{item.title}</h4>
                    {item.link && (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <ExternalLink size={12} />
                      </a>
                    )}
                  </div>
                  <p className="text-xs text-primary/80 font-medium mt-0.5">{item.place}</p>
                  <p className="text-xs text-muted-foreground mt-1">{item.period}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Page Number */}
      <div className="page-num" aria-hidden="true">
        02
      </div>
    </section>
  )
}
