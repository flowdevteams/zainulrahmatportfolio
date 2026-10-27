"use client"

import { motion } from "framer-motion"
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
    items: [
      { name: "TypeScript", level: 90 },
      { name: "JavaScript (JS)", level: 90 },
      { name: "Django", level: 85 },
      { name: "Tailwind CSS", level: 95 },
      { name: "Bootstrap", level: 90 },
      { name: "React/Next.js", level: 85 },
    ],
  },
  {
    category: "Design",
    icon: Paintbrush,
    items: [
      { name: "UI/UX Design", level: 88 },
      { name: "Figma", level: 95 },
      { name: "Canva", level: 95 },
      { name: "Prototyping", level: 85 },
      { name: "Brand Design", level: 75 },
    ],
  },
]

const technologies = [
  { name: "TypeScript", icon: Code2 },
  { name: "JavaScript", icon: Code2 },
  { name: "Django", icon: Database },
  { name: "Tailwind CSS", icon: Layout },
  { name: "Bootstrap", icon: Layout },
  { name: "Figma", icon: Figma },
  { name: "Canva", icon: Paintbrush },
  { name: "Next.js", icon: Globe },
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 sm:py-32 px-6 bg-background">
      <div className="container mx-auto max-w-5xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">Skills & Technologies</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            A combination of development expertise and design skills to create
            complete digital solutions.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {skills.map((skillGroup, groupIndex) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
              className="border border-border rounded-xl p-8 bg-card"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center">
                  <skillGroup.icon size={24} className="text-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">{skillGroup.category}</h3>
              </div>

              <div className="space-y-6">
                {skillGroup.items.map((skill, index) => (
                  <div key={skill.name}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-foreground">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-secondary overflow-hidden">
                      <motion.div
                        className="h-full rounded-full bg-primary"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 + index * 0.1, ease: "easeOut" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Technologies Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="text-xl font-bold text-center mb-8 text-foreground">Technologies I Work With</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
            {technologies.map((tech) => (
              <div
                key={tech.name}
                className="border border-border bg-card rounded-xl p-4 flex flex-col items-center gap-3 hover:border-primary/50 transition-colors group cursor-default"
              >
                <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <tech.icon size={20} className="text-foreground group-hover:text-primary transition-colors" />
                </div>
                <span className="text-xs font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

