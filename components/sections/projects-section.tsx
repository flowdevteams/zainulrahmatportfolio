"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { ExternalLink, Github, ArrowRight, Layers, Code, Palette } from "lucide-react"

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A modern e-commerce solution with real-time inventory, secure payments, and an intuitive admin dashboard.",
    image: "/projects/e-commerce.png",
    tags: ["Next.js", "Tailwind CSS", "Stripe", "PostgreSQL"],
    category: "Web App",
    link: "https://e-commerce-zeta-wine-86.vercel.app",
    github: "#",
    featured: true,
  },
  {
    title: "Company Profile",
    description:
      "Stunning company profile websites for creative professionals with smooth animations and modern design.",
    image: "/projects/company_profile.png",
    tags: ["React", "Tailwind CSS", "Framer Motion"],
    category: "Website",
    link: "https://companyprofile-tau.vercel.app",
    github: "#",
    featured: true,
  },
  {
    title: "Business Dashboard",
    description:
      "Analytics dashboard for small businesses to track sales, inventory, and customer insights.",
    image: "/projects/business_dashboard.png",
    tags: ["Next.js", "Chart.js", "Supabase"],
    category: "Web App",
    link: "https://business-dashboard-two-xi.vercel.app/",
    github: "#",
    featured: true,
  },
  {
    title: "Restaurant Website",
    description:
      "Beautiful restaurant website with online menu, reservation system, and delivery integration.",
    image: "/projects/restaurant.png",
    tags: ["React", "Node.js", "MongoDB"],
    category: "Website",
    link: "https://restaurant-eight-orpin.vercel.app/",
    github: "#",
    featured: true,
  },
  {
    title: "Mobile App UI",
    description:
      "Complete UI/UX design for an E-Commerce mobile application with modern aesthetics and seamless shopping experience.",
    image: "/projects/figma.png",
    tags: ["Figma", "UI/UX", "Prototyping"],
    category: "Design",
    link: "https://www.figma.com/make/QSBZOoTYEebd4HLzcDZRaj/E-Commerce-Mobile-App-UI?fullscreen=1&t=xlH9nMhsLVyCetVQ-1",
    featured: true,
  },
  {
    title: "Landing Page",
    description:
      "High-converting landing pages for startups and small businesses with optimized user experience.",
    image: "/projects/landing_page.png",
    tags: ["Next.js", "Tailwind CSS", "SEO"],
    category: "Website",
    link: "https://flowbuild-nu.vercel.app",
    featured: true,
  },
]

const categories = ["All", "Web App", "Website", "Design"]

export function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory)

  return (
    <section id="projects" className="py-24 sm:py-32 px-6 relative">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <span className="text-primary text-sm font-medium uppercase tracking-widest">
            Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A showcase of projects from Flowdev Teams, building digital solutions
            for businesses and individuals.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === category
                ? "bg-primary text-primary-foreground glow-cyan"
                : "bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80"
                }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className={`group relative glass rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-500 ${project.featured ? "md:col-span-2 lg:col-span-1" : ""
                }`}
            >
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block cursor-pointer"
              >
                {/* Project Image */}
                <div
                  className="relative h-52 overflow-hidden"
                  style={{
                    backgroundImage: `url(${project.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "top center",
                  }}
                >
                  {/* Gradient overlays for premium blending */}
                  <div className="absolute inset-0 bg-gradient-to-t from-card/90 via-card/20 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Category icon */}
                  <div className="absolute top-4 left-4 p-3 rounded-xl glass z-10">
                    {project.category === "Web App" && <Layers size={20} className="text-primary" />}
                    {project.category === "Website" && <Code size={20} className="text-primary" />}
                    {project.category === "Design" && <Palette size={20} className="text-primary" />}
                  </div>

                  {/* View indicator on hover */}
                  <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 z-10">
                    <span className="p-2.5 rounded-lg glass hover:bg-primary/20 transition-colors">
                      <ExternalLink size={18} />
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-medium text-primary uppercase tracking-wider">
                      {project.category}
                    </span>
                    {project.featured && (
                      <span className="px-2 py-1 rounded text-xs bg-accent/10 text-accent font-medium">
                        Featured
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-md bg-secondary text-xs text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>

        {/* View all projects CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all duration-300"
          >
            Want something similar? Let&apos;s talk
            <ArrowRight size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
