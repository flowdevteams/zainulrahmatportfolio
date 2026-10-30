"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { ArrowRight, Monitor } from "lucide-react"

interface Project {
  title: string
  subtitle: string
  image: string
  link: string
  num: string
  description?: string
  secondaryImage?: string
  secondaryLabel?: string
}

const projects: Project[] = [
  {
    title: "Denken\nShowroom",
    subtitle: "website",
    image: "/projects/denken.png",
    link: "https://showroom-os-wktd.vercel.app/jakarta",
    num: "01",
    description: "A modern vehicle showroom platform with interactive catalog, location-based filtering, and seamless user experience.",
    secondaryImage: "/projects/admin_denken.png",
    secondaryLabel: "Admin Dashboard",
  },
  {
    title: "Admin\nDenken",
    subtitle: "admin dashboard",
    image: "/projects/admin_denken.png",
    link: "https://showroom-os-wktd.vercel.app/admin",
    num: "02",
    description: "Full-featured admin panel for managing showroom inventory, orders, user data, and analytics. Login with email: admin@denkenmotors.id, password: AdminDenken2026!",
  },
  {
    title: "E-Commerce\nPlatform",
    subtitle: "website / web app",
    description: "An e-commerce platform featuring product listings, shopping cart, and checkout flow built with Next.js, Tailwind CSS, and Stripe integration.",
    image: "/projects/e-commerce.png",
    link: "https://e-commerce-zeta-wine-86.vercel.app",
    num: "03",
  },
  {
    title: "Company\nProfile",
    subtitle: "website",
    description: "A corporate company profile website showcasing services, portfolio, and contact information, developed with React and modern CSS animations.",
    image: "/projects/company_profile.png",
    link: "https://companyprofile-tau.vercel.app",
    num: "04",
  },
  {
    title: "Business\nDashboard",
    subtitle: "web application",
    description: "A business analytics dashboard displaying key metrics, charts, and real-time data visualizations using D3.js and Recharts.",
    image: "/projects/business_dashboard.png",
    link: "https://business-dashboard-two-xi.vercel.app/",
    num: "05",
  },
  {
    title: "Restaurant\nWebsite",
    subtitle: "website",
    description: "A restaurant website with menu showcase, reservation system, and responsive design, built with Next.js and Styled Components.",
    image: "/projects/restaurant.png",
    link: "https://restaurant-eight-orpin.vercel.app/",
    num: "06",
  },
]

function ProjectSlide({ project }: { project: Project; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section
      ref={ref}
      className="fullpage-section sky-bg"
    >
      {/* Left side: Title */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center w-full h-full px-6 sm:px-10 lg:px-20 max-w-[1400px] mx-auto gap-8 lg:gap-16">
        <div className="flex-1 flex flex-col justify-center order-2 lg:order-1">
          {/* Title */}
          <motion.h2
            className="font-display text-[clamp(2.5rem,6vw,5rem)] leading-[1] text-foreground whitespace-pre-line"
            initial={{ opacity: 0, y: 60 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }}
          >
            {project.title}
          </motion.h2>

          {/* Divider */}
          <motion.div
            className="section-border"
            initial={{ opacity: 0, scaleX: 0 }}
            animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            style={{ transformOrigin: "left" }}
          >
            <span></span>
            <span></span>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            className="text-muted-foreground text-sm sm:text-base tracking-wider"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            {project.subtitle}
          </motion.p>

          {/* Description (optional) */}
          {project.description && (
            <motion.p
              className="text-muted-foreground/80 text-sm leading-relaxed max-w-md mt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              {project.description}
            </motion.p>
          )}

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="mt-8"
          >
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-show-more"
            >
              Show me more
              <ArrowRight size={16} />
            </a>
          </motion.div>
        </div>

        {/* Right side: Project Image with Cover Reveal */}
        <div className="flex-1 flex justify-center items-center order-1 lg:order-2 w-full max-w-xl relative">
          <motion.a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="image-reveal relative w-full aspect-[4/3] rounded-sm overflow-hidden group cursor-pointer"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            {/* The image */}
            <motion.div
              className="absolute inset-0"
              initial={{ scale: 1.2 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ delay: 0.5, duration: 1.2, ease: [0.215, 0.61, 0.355, 1] }}
            >
              <img
                src={project.image}
                alt={project.title.replace("\n", " ")}
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
              />
            </motion.div>

            {/* Cover reveal animation */}
            <div className="image-reveal__cover">
              <motion.div
                initial={{ scaleX: 1 }}
                animate={isInView ? { scaleX: 0 } : {}}
                transition={{ delay: 0.3, duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
                style={{ transformOrigin: "right" }}
              />
              <motion.div
                initial={{ scaleX: 1 }}
                animate={isInView ? { scaleX: 0 } : {}}
                transition={{ delay: 0.5, duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
                style={{ transformOrigin: "left" }}
              />
            </div>

            {/* Page number overlay */}
            <div className="absolute bottom-4 right-4 font-display text-5xl text-white/10 select-none pointer-events-none">
              {project.num}
            </div>
          </motion.a>

          {/* Secondary Image - floating admin preview */}
          {project.secondaryImage && (
            <motion.div
              className="absolute -bottom-6 -left-6 lg:-bottom-8 lg:-left-8 z-10 w-[45%] max-w-[220px]"
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ delay: 1, duration: 0.6, ease: [0.215, 0.61, 0.355, 1] }}
            >
              <div className="relative rounded-sm overflow-hidden border border-[var(--gold)]/30 shadow-2xl shadow-black/40 group/admin">
                <img
                  src={project.secondaryImage}
                  alt={project.secondaryLabel || "Admin Dashboard"}
                  className="w-full h-auto object-cover group-hover/admin:scale-105 transition-transform duration-500"
                />
                {/* Label badge */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent px-3 py-2">
                  <div className="flex items-center gap-1.5">
                    <Monitor size={12} className="text-[var(--gold)]" />
                    <span className="text-[10px] sm:text-xs font-medium text-[var(--text-cream)] tracking-wider uppercase">
                      {project.secondaryLabel}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>

      {/* Page Number watermark */}
      <div className="page-number" aria-hidden="true">
        {project.num}
      </div>
    </section>
  )
}

export function ProjectsSection() {
  return (
    <>
      {projects.map((project, index) => (
        <ProjectSlide key={project.num} project={project} index={index} />
      ))}
    </>
  )
}
