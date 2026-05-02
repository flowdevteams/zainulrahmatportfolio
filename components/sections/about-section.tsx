"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { GraduationCap, Briefcase, Rocket, MapPin, Calendar, Heart } from "lucide-react"

const timeline = [
  {
    icon: GraduationCap,
    title: "Information Systems Student",
    subtitle: "STIE Bina Tunggal Bekasi",
    description:
      "Currently in my 6th semester, studying Information Systems and diving deep into the world of technology and business systems.",
    color: "bg-primary",
    date: "2022 - Present",
  },
  {
    icon: Briefcase,
    title: "Maritime Agency Professional",
    subtitle: "Document & Visa Processing",
    description:
      "Working with seafarers to manage their important documents, verify validity, check expiration dates, and assist with visa processing for sailing.",
    color: "bg-accent",
    date: "Current",
  },
  {
    icon: Rocket,
    title: "Founder & Developer",
    subtitle: "Flowdev Teams",
    description:
      "Running my digital services business with my team, building websites and apps for businesses and individuals looking to build their online presence.",
    color: "bg-chart-3",
    date: "2023 - Present",
  },
]

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-24 sm:py-32 px-6 relative">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium uppercase tracking-widest">About Me</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-6">
            My <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A passionate developer from Padang, born on August 24, 2004. I combine my studies,
            professional work, and entrepreneurship to create meaningful digital solutions.
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left - Personal Info Card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="glass rounded-2xl p-8 relative overflow-hidden">
              {/* Decorative gradient */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/20 rounded-full blur-3xl" />

              <h3 className="text-2xl font-bold mb-6">Who I Am</h3>

              <p className="text-muted-foreground leading-relaxed mb-6">
                I&apos;m <span className="text-foreground font-medium">Zainul Rahmat Saputra</span>, a multifaceted
                individual who thrives at the intersection of technology, business, and creativity.
              </p>

              <p className="text-muted-foreground leading-relaxed mb-8">
                While pursuing my degree in Information Systems, I work at a maritime agency helping
                seafarers navigate their documentation needs. Simultaneously, I run Flowdev Teams,
                my digital service business focused on building impactful web solutions.
              </p>

              {/* Info badges */}
              <div className="flex flex-wrap gap-3">
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-sm">
                  <MapPin size={16} className="text-primary" />
                  <span>Padang, Indonesia</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-sm">
                  <Calendar size={16} className="text-accent" />
                  <span>Aug 24, 2004</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-sm">
                  <Heart size={16} className="text-destructive" />
                  <span>Loves Coding</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            {/* Timeline line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-chart-3 opacity-30" />

            <div className="space-y-8">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.15 }}
                  className="relative pl-16"
                >
                  {/* Icon */}
                  <div
                    className={`absolute left-0 w-12 h-12 rounded-xl ${item.color} flex items-center justify-center`}
                  >
                    <item.icon size={22} className="text-background" />
                  </div>

                  {/* Content */}
                  <div className="glass rounded-xl p-6 hover:border-primary/30 transition-colors duration-300">
                    <span className="text-xs text-muted-foreground uppercase tracking-wider">
                      {item.date}
                    </span>
                    <h4 className="text-lg font-semibold mt-1">{item.title}</h4>
                    <p className="text-primary text-sm font-medium mt-0.5">{item.subtitle}</p>
                    <p className="text-muted-foreground text-sm mt-3 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
