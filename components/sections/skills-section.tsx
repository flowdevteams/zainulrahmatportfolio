"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import {
  Code2,
  Layout,
  Paintbrush,
  Smartphone,
  Database,
  Figma,
  Globe,
  Sparkles,
} from "lucide-react"

const skills = [
  {
    category: "Development",
    icon: Code2,
    color: "from-primary to-chart-3",
    items: [
      { name: "HTML/CSS", level: 95 },
      { name: "JavaScript", level: 90 },
      { name: "React/Next.js", level: 85 },
      { name: "TypeScript", level: 80 },
      { name: "Node.js", level: 75 },
    ],
  },
  {
    category: "Design",
    icon: Paintbrush,
    color: "from-accent to-chart-5",
    items: [
      { name: "UI/UX Design", level: 88 },
      { name: "Figma", level: 85 },
      { name: "Canva", level: 95 },
      { name: "Prototyping", level: 80 },
      { name: "Brand Design", level: 75 },
    ],
  },
]

const technologies = [
  { name: "React", icon: Code2 },
  { name: "Next.js", icon: Globe },
  { name: "TypeScript", icon: Code2 },
  { name: "Tailwind CSS", icon: Layout },
  { name: "Figma", icon: Figma },
  { name: "Node.js", icon: Database },
  { name: "Python", icon: Code2 },
  { name: "Canva", icon: Paintbrush },
]

export function SkillsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="skills" className="py-24 sm:py-32 px-6 relative bg-secondary/30">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
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
          <span className="text-primary text-sm font-medium uppercase tracking-widest">
            Expertise
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-6">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A combination of development expertise and design skills to create
            complete digital solutions.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {skills.map((skillGroup, groupIndex) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + groupIndex * 0.15 }}
              className="glass rounded-2xl p-8 relative overflow-hidden"
            >
              {/* Decorative gradient */}
              <div
                className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${skillGroup.color} opacity-10 rounded-full blur-3xl`}
              />

              <div className="flex items-center gap-4 mb-8">
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${skillGroup.color} flex items-center justify-center`}
                >
                  <skillGroup.icon size={28} className="text-background" />
                </div>
                <h3 className="text-2xl font-bold">{skillGroup.category}</h3>
              </div>

              <div className="space-y-6">
                {skillGroup.items.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-secondary overflow-hidden">
                      <motion.div
                        className={`h-full rounded-full bg-gradient-to-r ${skillGroup.color}`}
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, delay: 0.5 + index * 0.1, ease: "easeOut" }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Technologies Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="text-xl font-bold text-center mb-8">Technologies I Work With</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.7 + index * 0.05 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="glass rounded-xl p-4 flex flex-col items-center gap-3 hover:border-primary/30 transition-all duration-300 cursor-pointer group"
              >
                <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <tech.icon size={20} className="text-primary" />
                </div>
                <span className="text-xs font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
