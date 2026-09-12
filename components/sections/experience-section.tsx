"use client"

import { motion } from "framer-motion"
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
  return (
    <section id="experience" className="py-24 sm:py-32 px-6 bg-secondary/30">
      <div className="container mx-auto max-w-4xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">Professional Work</h2>
          <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed">
            Supporting the maritime industry by helping seafarers manage their documentation
            and prepare for their journeys across the globe.
          </p>
        </motion.div>

        {/* Main Experience Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="border border-border rounded-xl p-8 bg-card mb-12"
        >
          <div className="flex flex-col md:flex-row md:items-start gap-6">
            {/* Icon */}
            <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center shrink-0 border border-border">
              <Ship size={28} className="text-foreground" />
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
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <ExternalLink size={18} />
                  </a>
                </div>
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-secondary text-foreground text-xs font-medium">
                  Current Position
                </span>
              </div>
              <p className="text-foreground font-medium mb-4">Document & Visa Processing Specialist</p>
              <p className="text-muted-foreground leading-relaxed">
                At my current position, I play a crucial role in the maritime industry by helping seafarers
                prepare for their voyages. My work ensures that sailors can navigate international waters
                and work on ships without documentation complications.
              </p>
            </div>
          </div>

          {/* Tech/Skills badges */}
          <div className="flex flex-wrap gap-2 mt-8">
            {["Document Management", "Visa Processing", "Maritime Regulations", "Client Relations", "Compliance"].map(
              (skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 rounded-sm bg-secondary text-xs text-foreground font-medium border border-border"
                >
                  {skill}
                </span>
              )
            )}
          </div>
        </motion.div>

        {/* Responsibilities Grid */}
        <div className="grid sm:grid-cols-2 gap-6">
          {responsibilities.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="border border-border rounded-xl p-6 bg-card"
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-foreground">
                  <item.icon size={20} />
                </div>
                <h4 className="text-lg font-semibold">{item.title}</h4>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Impact stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 flex flex-wrap justify-start gap-8 sm:gap-16 pt-8 border-t border-border"
        >
          {[
            { icon: Users, value: "100+", label: "Seafarers Helped" },
            { icon: FileCheck, value: "500+", label: "Documents Processed" },
            { icon: Globe, value: "15+", label: "Countries Covered" },
          ].map((stat) => (
            <div key={stat.label} className="text-left">
              <div className="flex items-center gap-2 mb-1">
                <stat.icon size={20} className="text-muted-foreground" />
                <span className="text-3xl font-bold">{stat.value}</span>
              </div>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
