"use client"

import { motion } from "framer-motion"
import { ExternalLink, Award, Sparkles } from "lucide-react"

// We extract the Google Drive IDs and map them to their local downloaded image
const certificates = [
  { id: "1JuwlKqtzve8w461fQ_V489hJimsb3cXU", title: "Professional Certificate", image: "/certificates/cert-1.png" },
  { id: "1YLVFti3Hg37Ubk33KQj77wmEB8J5fYIN", title: "Achievement Award", image: "/certificates/cert-2.png" },
  { id: "1oNA-wzUaCWpdBLXk_LpN-WAS_ZeB_7HN", title: "Specialization Certificate", image: "/certificates/cert-3.png" },
  { id: "14mP0ZMtiNHgxawcjOd4156u8FVsth6bh", title: "Completion Certificate", image: "/certificates/cert-4.png" },
  { id: "1S6PUEV-zonkdQuDZU-x5VR8lw7q9-atF", title: "Excellence Certificate", image: "/certificates/cert-5.png" },
  { id: "1AAEmKsQvBD5drx8a7Hhc6ZSg6i-SLM8h", title: "Professional Training", image: "/certificates/cert-6.png" },
  { id: "1yoXPv4V3mjDqmNWHmjvfmJo9Xx4-YxYi", title: "Skill Certification", image: "/certificates/cert-7.png" },
  { id: "1t1xKqQ472D2ohnB4BoDZzWsjAEgvUQLZ", title: "Bootcamp Graduate", image: "/certificates/cert-8.png" },
  { id: "1V5VNKGXcSBfLvYWx2x3SeCFvLZJK6ch0", title: "Tech Mastery", image: "/certificates/cert-9.png" },
  { id: "18HTNIokHQVUdDSlBsjrW35ngd4p4ZtPh", title: "Advanced Certification", image: "/certificates/cert-10.png" },
  { id: "1HFBzk6sP2x3jcRKjgQUNt1tpi-mEbfKC", title: "Special Recognition", image: "/certificates/cert-11.png" },
]

// We use a predefined set of icons and gradients for variety
const gradientClasses = [
  "from-blue-500/20 to-purple-500/20",
  "from-emerald-500/20 to-teal-500/20",
  "from-orange-500/20 to-red-500/20",
  "from-pink-500/20 to-rose-500/20",
]

export function CertificationsSection() {
  return (
    <section id="certifications" className="py-24 sm:py-32 px-6 bg-background relative overflow-hidden">
      {/* Subtle Background Glow - Optimized */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <Sparkles size={16} /> Credentials
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4 text-foreground">
            Certifications Wall
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            A collection of professional milestones, continuous learning achievements, and verified expertise.
          </p>
        </motion.div>

        {/* Horizontal Native Scroll Layout (Zero Lag) */}
        <div className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-6 pb-8 pt-4 -mx-6 px-6 sm:mx-0 sm:px-0">
          {certificates.map((cert, index) => {
            const driveLink = `https://drive.google.com/file/d/${cert.id}/view?usp=share_link`
            const gradient = gradientClasses[index % gradientClasses.length]

            return (
              <a
                href={driveLink}
                target="_blank"
                rel="noopener noreferrer"
                key={cert.id}
                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-border bg-card hover:border-primary/50 transition-all duration-300 shrink-0 snap-center w-[80vw] sm:w-[50vw] md:w-[320px] h-[320px] p-8"
              >
                {/* CSS Abstract Background Instead of Image */}
                <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                {/* Top Icon Area */}
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-secondary border border-border flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:border-primary group-hover:shadow-[0_0_30px_rgba(var(--primary),0.3)] transition-all duration-500">
                    <Award size={32} className="text-muted-foreground group-hover:text-primary-foreground transition-colors duration-500" />
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-foreground font-bold text-xl mb-3 line-clamp-3 leading-snug">
                    {cert.title}
                  </h3>
                  
                  {/* Decorative Line */}
                  <div className="w-12 h-1 bg-border rounded-full group-hover:w-full group-hover:bg-primary/50 transition-all duration-500" />
                </div>

                {/* Bottom Link Area */}
                <div className="relative z-10 flex items-center gap-2 text-muted-foreground text-sm font-medium group-hover:text-primary transition-colors duration-300 mt-6">
                  Verify Credential <ExternalLink size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}

