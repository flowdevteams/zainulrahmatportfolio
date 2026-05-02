"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Award, Calendar, ExternalLink, BadgeCheck } from "lucide-react"

const certifications = [
  {
    title: "Canva School Certificate",
    issuer: "Canva",
    date: "2023",
    image: "/projects/sertifikat canva_page-0001.png",
    description:
      "Certified in using Canva for professional design work, including social media graphics, presentations, and marketing materials.",
    skills: ["Graphic Design", "Social Media", "Presentations", "Brand Design"],
    verified: true,
    link: "/projects/sertifikat canva_page-0001.png",
  },
]

export function CertificationsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-24 sm:py-32 px-6 relative bg-secondary/30">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/3 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto max-w-4xl relative z-10">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium uppercase tracking-widest">
            Credentials
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-6">
            <span className="gradient-text">Certifications</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Professional certifications that validate my skills and expertise.
          </p>
        </motion.div>

        {/* Certifications */}
        <div className="space-y-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="glass rounded-2xl p-8 relative overflow-hidden group hover:border-primary/30 transition-all duration-500"
            >
              {/* Decorative elements */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative z-10 flex flex-col md:flex-row gap-6">
                {/* Certificate Image */}
                <div className="shrink-0">
                  <div className="w-28 h-20 rounded-2xl overflow-hidden border border-white/10">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-bold flex items-center gap-2">
                        {cert.title}
                        {cert.verified && (
                          <BadgeCheck size={20} className="text-primary" />
                        )}
                      </h3>
                      <p className="text-primary font-medium mt-1">{cert.issuer}</p>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar size={16} />
                      {cert.date}
                    </div>
                  </div>

                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {cert.description}
                  </p>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 rounded-full bg-secondary text-xs font-medium text-muted-foreground"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* View Certificate Link */}
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary text-sm font-medium hover:gap-3 transition-all"
                  >
                    View Certificate
                    <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional achievements note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center text-muted-foreground text-sm mt-8"
        >
          More certifications coming soon as I continue learning and growing.
        </motion.p>
      </div>
    </section>
  )
}
