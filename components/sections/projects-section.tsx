"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { ExternalLink, ArrowRight } from "lucide-react"

const projects = [
  {
    title: "E-Commerce\nPlatform",
    description: "A modern e-commerce solution with real-time inventory, secure payments, and an intuitive admin dashboard.",
    image: "/projects/e-commerce.png",
    tags: ["Next.js", "Tailwind CSS", "Stripe"],
    link: "https://e-commerce-zeta-wine-86.vercel.app",
  },
  {
    title: "Company\nProfile",
    description: "Stunning company profile websites for creative professionals with smooth animations and modern design.",
    image: "/projects/company_profile.png",
    tags: ["React", "Tailwind CSS", "Framer Motion"],
    link: "https://companyprofile-tau.vercel.app",
  },
  {
    title: "Business\nDashboard",
    description: "Analytics dashboard for small businesses to track sales, inventory, and customer insights.",
    image: "/projects/business_dashboard.png",
    tags: ["Next.js", "Chart.js", "Supabase"],
    link: "https://business-dashboard-two-xi.vercel.app/",
  },
  {
    title: "Restaurant\nWebsite",
    description: "Beautiful restaurant website with online menu, reservation system, and delivery integration.",
    image: "/projects/restaurant.png",
    tags: ["React", "Node.js", "MongoDB"],
    link: "https://restaurant-eight-orpin.vercel.app/",
  },
]

export function ProjectsSection() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section id="works" className="fullpage-section relative flex items-center" ref={ref}>
      <div className="w-full h-full grid md:grid-cols-2 items-center px-8 md:px-16 lg:px-24 gap-8 md:gap-16">
        {/* Left Side - Title */}
        <div className="flex flex-col justify-center z-10">
          <motion.h2
            className="section-title text-[clamp(2.5rem,7vw,6rem)] leading-[0.95] mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            Featured
            <br />
            Works
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
            className="text-muted-foreground text-sm md:text-base max-w-sm leading-relaxed mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            Projects built through Flowdev Teams — digital solutions for businesses and individuals.
          </motion.p>

          {/* Project list */}
          <div className="space-y-4">
            {projects.map((project, index) => (
              <motion.a
                key={project.title}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 py-3 border-b border-border/30 hover:border-foreground/30 transition-all duration-300 cursor-pointer"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                onMouseEnter={() => setHoveredProject(index)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <span className="text-xs text-muted-foreground font-mono w-8">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-foreground font-medium text-sm md:text-base group-hover:text-primary transition-colors flex-1">
                  {project.title.replace("\n", " ")}
                </span>
                <ArrowRight
                  size={16}
                  className="text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 transition-all"
                />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Right Side - Preview Image */}
        <motion.div
          className="relative hidden md:flex items-center justify-center h-full"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="relative w-full max-w-lg aspect-[4/3] rounded-lg overflow-hidden">
            {/* Image reveal effect */}
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                className="absolute inset-0 rounded-lg overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: hoveredProject === index ? 1 : index === 0 && hoveredProject === null ? 0.7 : 0 }}
                transition={{ duration: 0.5 }}
              >
                <div
                  className="w-full h-full bg-cover bg-top"
                  style={{ backgroundImage: `url(${project.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                
                {/* Project info overlay */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-[10px] uppercase tracking-wider bg-background/40 backdrop-blur-sm border border-border/30 rounded text-foreground/80"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-foreground/80 hover:text-foreground transition-colors"
                  >
                    View Project <ExternalLink size={12} />
                  </a>
                </div>
              </motion.div>
            ))}

            {/* Default state - shows first project faded */}
            {hoveredProject === null && (
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-muted-foreground text-sm tracking-wider uppercase opacity-50">
                  Hover to preview
                </p>
              </div>
            )}
          </div>

          {/* Page number */}
          <div className="page-num" aria-hidden="true">
            01
          </div>
        </motion.div>
      </div>
    </section>
  )
}
