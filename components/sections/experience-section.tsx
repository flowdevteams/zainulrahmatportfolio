"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Ship, FileCheck, Clock, Globe, Shield, Users, ExternalLink } from "lucide-react"

const responsibilities = [
  {
    icon: FileCheck,
    title: "Document Verification",
    description: "Verify the authenticity and validity of seafarer documents to ensure compliance with international maritime regulations.",
  },
  {
    icon: Clock,
    title: "Expiration Management",
    description: "Track and monitor document expiration dates, alerting seafarers before deadlines to prevent sailing complications.",
  },
  {
    icon: Globe,
    title: "Visa Processing",
    description: "Assist with visa applications and processing for various countries, enabling seafarers to work on ships internationally.",
  },
  {
    icon: Shield,
    title: "Compliance Assurance",
    description: "Ensure all documentation meets industry standards and international maritime law requirements.",
  },
]

export function ExperienceSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="experience" className="py-24 sm:py-32 px-6 relative bg-secondary/30">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -left-40 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium uppercase tracking-widest">Experience</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-6">
            Professional <span className="gradient-text">Work</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Supporting the maritime industry by helping seafarers manage their documentation
            and prepare for their journeys across the globe.
          </p>
        </motion.div>

        {/* Main Experience Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass rounded-2xl p-8 md:p-10 mb-12 relative overflow-hidden"
        >
          {/* Decorative elements */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-2xl" />
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-accent/10 rounded-full blur-2xl" />

          <div className="relative z-10">
            <div className="flex flex-col md:flex-row md:items-start gap-6 mb-8">
              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shrink-0">
                <Ship size={32} className="text-background" />
              </div>

              {/* Header content */}
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <h3 className="text-2xl font-bold">Masagena Jaya Maritim</h3>
                    <a 
                      href="https://masagenajayamaritim.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-lg bg-secondary hover:bg-primary/20 text-muted-foreground hover:text-primary transition-all duration-300"
                      title="Visit Website"
                    >
                      <ExternalLink size={18} />
                    </a>
                  </div>
                  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 text-green-400 text-sm font-medium">
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    Current Position
                  </span>
                </div>
                <p className="text-primary font-medium mb-4">Document & Visa Processing Specialist</p>
                <p className="text-muted-foreground leading-relaxed">
                  At my current position, I play a crucial role in the maritime industry by helping seafarers
                  prepare for their voyages. My work ensures that sailors can navigate international waters
                  and work on ships without documentation complications.
                </p>
              </div>
            </div>

            {/* Tech/Skills badges */}
            <div className="flex flex-wrap gap-2 mt-6 pt-6 border-t border-border/50">
              {["Document Management", "Visa Processing", "Maritime Regulations", "Client Relations", "Compliance"].map(
                (skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-full bg-secondary text-sm text-muted-foreground hover:text-foreground hover:bg-secondary/80 transition-colors"
                  >
                    {skill}
                  </span>
                )
              )}
            </div>
          </div>
        </motion.div>

        {/* Responsibilities Grid */}
        <div className="grid sm:grid-cols-2 gap-6">
          {responsibilities.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              className="glass rounded-xl p-6 hover:border-primary/30 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                <item.icon size={24} className="text-primary" />
              </div>
              <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Impact stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 flex flex-wrap justify-center gap-8 md:gap-16"
        >
          {[
            { icon: Users, value: "100+", label: "Seafarers Helped" },
            { icon: FileCheck, value: "500+", label: "Documents Processed" },
            { icon: Globe, value: "15+", label: "Countries Covered" },
          ].map((stat, index) => (
            <div key={stat.label} className="text-center">
              <div className="flex items-center justify-center gap-3">
                <stat.icon size={24} className="text-primary" />
                <span className="text-3xl sm:text-4xl font-bold gradient-text">{stat.value}</span>
              </div>
              <p className="text-muted-foreground text-sm mt-2">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
