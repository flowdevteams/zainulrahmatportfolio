"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import {
  Code2,
  Paintbrush,
  Globe,
  Smartphone,
  Bot,
  Briefcase,
} from "lucide-react"

const skillCategories = [
  {
    title: "Development",
    icon: Code2,
    items: ["TypeScript", "JavaScript", "React/Next.js", "Django", "Tailwind CSS", "Bootstrap"],
  },
  {
    title: "Design",
    icon: Paintbrush,
    items: ["UI/UX Design", "Figma", "Canva", "Prototyping", "Brand Design"],
  },
]

const services = [
  {
    icon: Globe,
    title: "Website Development",
    desc: "Custom websites built with modern tech stack",
  },
  {
    icon: Smartphone,
    title: "App Development",
    desc: "Full-stack web & mobile applications",
  },
  {
    icon: Bot,
    title: "AI Engineering",
    desc: "AI chatbots & process automation",
  },
  {
    icon: Briefcase,
    title: "Business Solutions",
    desc: "E-commerce, dashboards & analytics",
  },
]

export function SkillsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="skills" className="fullpage-section relative flex items-center" ref={ref}>
      <div className="w-full px-8 md:px-16 lg:px-24 py-16 overflow-y-auto max-h-[100dvh]">
        <div className="max-w-screen-xl mx-auto">
          {/* Title */}
          <motion.h2
            className="section-title text-[clamp(2.5rem,7vw,6rem)] leading-[0.95] mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            Skills &
            <br />
            Services
          </motion.h2>

          <motion.div
            className="deco-line mb-10"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <span></span>
            <span></span>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
            {/* Skills */}
            <div className="space-y-8">
              {skillCategories.map((category, catIndex) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + catIndex * 0.15 }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <category.icon size={18} className="text-muted-foreground" />
                    <h3 className="text-base font-semibold text-foreground tracking-wide uppercase text-sm">
                      {category.title}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.items.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 text-xs font-medium border border-border/40 rounded bg-card/30 backdrop-blur-sm text-foreground/80 hover:border-foreground/30 hover:text-foreground transition-colors cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}

              {/* Stats */}
              <motion.div
                className="flex gap-12 pt-6 border-t border-border/30"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                {[
                  { value: "3+", label: "Years" },
                  { value: "20+", label: "Projects" },
                  { value: "15+", label: "Clients" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <div className="text-2xl md:text-3xl font-display" style={{ fontFamily: "var(--font-display)" }}>
                      {stat.value}
                    </div>
                    <div className="text-xs text-muted-foreground mt-1 uppercase tracking-wider">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Services */}
            <div className="space-y-4">
              <motion.h3
                className="text-sm font-semibold text-muted-foreground tracking-widest uppercase mb-6"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                What I Offer
              </motion.h3>

              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  className="group flex items-start gap-4 p-5 rounded-lg border border-border/30 bg-card/20 backdrop-blur-sm hover:border-border/50 transition-all duration-300"
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                >
                  <div className="w-10 h-10 rounded-lg bg-secondary/40 flex items-center justify-center shrink-0 group-hover:bg-primary/10 transition-colors">
                    <service.icon size={18} className="text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-1">{service.title}</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">{service.desc}</p>
                  </div>
                </motion.div>
              ))}

              {/* Flowdev CTA */}
              <motion.a
                href="https://flowdevteams.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-6 p-5 rounded-lg border border-primary/20 bg-primary/5 hover:bg-primary/10 transition-colors group"
                initial={{ opacity: 0, y: 15 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.9 }}
              >
                <p className="text-xs uppercase tracking-widest text-primary/80 mb-1 font-medium">
                  Official Business
                </p>
                <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                  Visit Flowdev Teams →
                </p>
              </motion.a>
            </div>
          </div>
        </div>
      </div>

      {/* Page Number */}
      <div className="page-num" aria-hidden="true">
        03
      </div>
    </section>
  )
}
