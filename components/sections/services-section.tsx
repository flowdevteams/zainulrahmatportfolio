"use client"

import { motion } from "framer-motion"
import { Globe, Smartphone, Briefcase, ArrowRight, CheckCircle2, Bot, ExternalLink } from "lucide-react"

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
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-24 sm:py-32 px-6 bg-secondary/10">
      <div className="container mx-auto max-w-5xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4 text-foreground">
            Services & Offerings
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            Through Flowdev Teams, we provide comprehensive digital services including App Development, Web Development, and AI Engineering to help businesses grow.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group border border-border rounded-xl p-8 bg-card hover:border-primary/50 transition-colors"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
                <service.icon size={24} className="text-foreground group-hover:text-primary transition-colors" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold mb-3 text-foreground">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-3 mb-8">
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
                className="inline-flex items-center gap-2 text-foreground font-medium text-sm group-hover:text-primary transition-colors"
              >
                Get Started
                <ArrowRight size={16} />
              </a>
            </motion.div>
          ))}
        </div>

        {/* Flowdev Teams CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="border border-border rounded-xl p-8 md:p-12 bg-card relative overflow-hidden"
        >
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <span className="text-primary font-bold uppercase tracking-wider text-sm mb-2 block">
                Official Business
              </span>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
                Discover Flowdev Teams
              </h3>
              <p className="text-muted-foreground max-w-xl leading-relaxed">
                Need a professional team for your next big idea? Flowdev Teams is my dedicated digital agency specializing in creating top-tier Websites, Mobile Apps, and AI Solutions for your business.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 shrink-0">
              <a
                href="https://flowdevteams.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-md bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
              >
                Visit Flowdev Teams
                <ExternalLink size={18} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

