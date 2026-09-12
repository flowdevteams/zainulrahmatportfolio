"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { ExternalLink, ArrowRight, Layers, Code, Palette } from "lucide-react"

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A modern e-commerce solution with real-time inventory, secure payments, and an intuitive admin dashboard.",
    image: "/projects/e-commerce.png",
    tags: ["Next.js", "Tailwind CSS", "Stripe", "PostgreSQL"],
    category: "Web App",
    link: "https://e-commerce-zeta-wine-86.vercel.app",
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
    featured: false,
  },
  {
    title: "Landing Page",
    description:
      "High-converting landing pages for startups and small businesses with optimized user experience.",
    image: "/projects/landing_page.png",
    tags: ["Next.js", "Tailwind CSS", "SEO"],
    category: "Website",
    link: "https://flowbuild-nu.vercel.app",
    featured: false,
  },
]

const categories = ["All", "Web App", "Website", "Design"]

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory)

  return (
    <section id="projects" className="py-24 sm:py-32 px-6 bg-background">
      <div className="container mx-auto max-w-5xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">Featured Projects</h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            A showcase of projects from Flowdev Teams, building digital solutions
            for businesses and individuals.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap gap-2 mb-10"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-muted-foreground hover:bg-secondary/80"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              className="group flex flex-col rounded-xl border border-border bg-card overflow-hidden hover:border-primary/50 transition-colors"
            >
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col h-full"
              >
                {/* Project Image */}
                <div
                  className="relative h-60 w-full bg-secondary overflow-hidden border-b border-border"
                  style={{
                    backgroundImage: `url(${project.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "top center",
                  }}
                >
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300" />
                  
                  {/* Category icon */}
                  <div className="absolute top-4 left-4 p-2 rounded-md bg-background/80 backdrop-blur-sm border border-border">
                    {project.category === "Web App" && <Layers size={16} className="text-foreground" />}
                    {project.category === "Website" && <Code size={16} className="text-foreground" />}
                    {project.category === "Design" && <Palette size={16} className="text-foreground" />}
                  </div>

                  <div className="absolute bottom-4 right-4 p-2 rounded-md bg-primary text-primary-foreground opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    <ExternalLink size={16} />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                      {project.category}
                    </span>
                    {project.featured && (
                      <span className="px-2 py-0.5 rounded-sm text-[10px] uppercase font-bold bg-secondary text-foreground">
                        Featured
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 rounded-sm bg-secondary text-xs font-medium text-secondary-foreground"
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
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-foreground font-medium hover:text-primary transition-colors"
          >
            Want something similar? Let&apos;s talk
            <ArrowRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
