"use client"

import { motion } from "framer-motion"
import { Calendar, GraduationCap, Briefcase, Download, Rocket } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-24 sm:py-32 px-6 bg-secondary/20">
      <div className="container mx-auto max-w-5xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Bio Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-foreground">A blend of business and code</h3>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                I am a passionate web developer and multifaceted individual who thrives at the intersection of technology, business, and creativity.
              </p>
              <p>
                While pursuing my degree in Information Systems, I run <strong>Flowdev Teams</strong>—a digital service business focused on building impactful web solutions. Concurrently, I work in the maritime industry assisting seafarers.
              </p>
              <p>
                My goal is to craft digital experiences that not only look beautiful but also solve real-world business problems efficiently.
              </p>
            </div>
            
            <div className="mt-8 pt-8 border-t border-border">
              <a
                href="/CV_Zainul_Rahmat_Saputra.pdf"
                download
                className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
              >
                <Download size={18} />
                Download Full CV
              </a>
            </div>
          </motion.div>

          {/* Timeline Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Education */}
            <div className="relative pl-8 border-l border-border pb-8">
              <div className="absolute -left-[17px] top-0 w-8 h-8 rounded-full bg-secondary flex items-center justify-center border border-border">
                <GraduationCap size={16} className="text-primary" />
              </div>
              <h4 className="text-lg font-bold text-foreground">Sistem Informasi</h4>
              <p className="text-primary font-medium mt-1">STIE Bina Tunggal Bekasi</p>
              <div className="flex items-center gap-2 text-sm text-muted-foreground mt-2">
                <Calendar size={14} />
                <span>2022 - Present (Semester 6)</span>
              </div>
              <p className="mt-3 text-muted-foreground text-sm leading-relaxed">
                Focusing on software development methodologies, business systems integration, and database management.
              </p>
            </div>

            {/* Current Role 1 */}
            <div className="relative pl-8 border-l border-border pb-8">
              <div className="absolute -left-[17px] top-0 w-8 h-8 rounded-full bg-secondary flex items-center justify-center border border-border">
                <Rocket size={16} className="text-primary" />
              </div>
              <h4 className="text-lg font-bold text-foreground">Founder & Web Developer</h4>
              <p className="text-primary font-medium mt-1">Flowdev Teams</p>
              <div className="flex items-center gap-2 text-sm text-muted-foreground mt-2">
                <Calendar size={14} />
                <span>2023 - Present</span>
              </div>
              <p className="mt-3 text-muted-foreground text-sm leading-relaxed">
                Leading a digital services agency building modern websites and web applications for various business needs.
              </p>
            </div>

            {/* Current Role 2 */}
            <div className="relative pl-8 border-l border-border">
              <div className="absolute -left-[17px] top-0 w-8 h-8 rounded-full bg-secondary flex items-center justify-center border border-border">
                <Briefcase size={16} className="text-primary" />
              </div>
              <h4 className="text-lg font-bold text-foreground">Document Specialist</h4>
              <p className="text-primary font-medium mt-1">Masagena Jaya Maritim</p>
              <div className="flex items-center gap-2 text-sm text-muted-foreground mt-2">
                <Calendar size={14} />
                <span>Current</span>
              </div>
              <p className="mt-3 text-muted-foreground text-sm leading-relaxed">
                Assisting seafarers with document compliance, visa processing, and regulatory adherence.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

