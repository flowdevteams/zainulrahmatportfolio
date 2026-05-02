"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Globe, Smartphone, Palette, Briefcase, ArrowRight, CheckCircle2, Bot, ExternalLink } from "lucide-react"

const services = [
  {
    icon: Globe,
    title: "Website Development",
    description:
      "Custom websites built with modern technologies for optimal performance, SEO, and user experience.",
    features: [
      "Responsive Design",
      "SEO Optimization",
      "Fast Loading",
      "CMS Integration",
    ],
    color: "from-primary to-chart-3",
  },
  {
    icon: Smartphone,
    title: "Application Development",
    description:
      "Full-stack web and mobile applications with powerful functionality and intuitive interfaces.",
    features: [
      "Custom Features",
      "Database Design",
      "API Development",
      "User Authentication",
    ],
    color: "from-accent to-chart-5",
  },
  {
    icon: Bot,
    title: "AI Engineering",
    description:
      "Integrating cutting-edge Artificial Intelligence solutions to automate and enhance your business.",
    features: [
      "AI Chatbots",
      "Machine Learning",
      "Process Automation",
      "OpenAI Integration",
    ],
    color: "from-chart-3 to-primary",
  },
  {
    icon: Briefcase,
    title: "Business Solutions",
    description:
      "Complete digital solutions for businesses including websites, dashboards, and e-commerce platforms.",
    features: [
      "E-Commerce Setup",
      "Business Dashboards",
      "Payment Integration",
      "Analytics Setup",
    ],
    color: "from-chart-5 to-accent",
  },
]

export function ServicesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="services" className="py-24 sm:py-32 px-6 relative">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium uppercase tracking-widest">
            Services
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-6">
            What We <span className="gradient-text">Offer</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Through Flowdev Teams, we provide comprehensive digital services including App Development, Web Development, and AI Engineering to help businesses grow.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="group glass rounded-2xl p-8 relative overflow-hidden hover:border-primary/30 transition-all duration-500"
            >
              {/* Decorative gradient */}
              <div
                className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 rounded-full blur-3xl transition-opacity duration-500`}
              />

              {/* Icon */}
              <div
                className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6`}
              >
                <service.icon size={28} className="text-background" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-3 mb-6">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm">
                    <CheckCircle2 size={16} className="text-primary shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-primary font-medium text-sm group-hover:gap-3 transition-all duration-300"
              >
                Get Started
                <ArrowRight size={16} />
              </a>
            </motion.div>
          ))}
        </div>

        {/* Flowdev Teams CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="glass rounded-2xl p-8 md:p-12 relative overflow-hidden border border-primary/20"
        >
          {/* Background decorations */}
          <div className="absolute -top-20 -left-20 w-60 h-60 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-accent/20 rounded-full blur-3xl" />

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <span className="text-primary font-bold uppercase tracking-wider text-sm mb-2 block">
                Official Business
              </span>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Discover <span className="gradient-text">Flowdev Teams</span>
              </h3>
              <p className="text-muted-foreground max-w-xl leading-relaxed">
                Need a professional team for your next big idea? Flowdev Teams is my dedicated digital agency specializing in creating top-tier Websites, Mobile Apps, and AI Solutions for your business.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 shrink-0">
              <motion.a
                href="https://flowdevteams.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-medium hover:shadow-lg hover:shadow-primary/25 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Kunjungi Web Flowdev
                <ExternalLink size={18} />
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
