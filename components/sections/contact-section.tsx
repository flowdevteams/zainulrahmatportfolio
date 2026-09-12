"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import {
  Mail,
  MapPin,
  Phone,
  Send,
  Github,
  Linkedin,
  Instagram,
  Twitter,
  ArrowRight,
  Loader2,
  CheckCircle2,
} from "lucide-react"

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "zainulrhmt368@gmail.com",
    href: "mailto:zainulrhmt368@gmail.com",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Bekasi, Indonesia",
    href: "#",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+62 xxx xxxx xxxx",
    href: "https://wa.me/6287709165697",
  },
]

const socialLinks = [
  { icon: Github, label: "GitHub", href: "https://github.com/ZainulRhmt24" },
  { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/z4yn.rs" },
]

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formElement = e.currentTarget
    const formData = new FormData(formElement)
    const formValues = {
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formValues),
      })

      if (response.ok) {
        setIsSubmitted(true)
        formElement.reset()
        setTimeout(() => setIsSubmitted(false), 3000)
      } else {
        alert("Failed to send message. Please ensure your email server is configured properly.")
      }
    } catch (error) {
      console.error(error)
      alert("Network error occurred.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-24 sm:py-32 px-6 bg-background">
      <div className="container mx-auto max-w-5xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">Let&apos;s Connect</h2>
          <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed">
            Have a project in mind or just want to chat? I&apos;d love to hear from you.
            Let&apos;s build something amazing together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-3 border border-border rounded-xl p-8 bg-card"
          >
            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2 text-foreground">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-md bg-secondary/50 border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors text-foreground placeholder:text-muted-foreground"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2 text-foreground">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-md bg-secondary/50 border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors text-foreground placeholder:text-muted-foreground"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2 text-foreground">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-3 rounded-md bg-secondary/50 border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors text-foreground placeholder:text-muted-foreground"
                  placeholder="Project inquiry"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-foreground">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full px-4 py-3 rounded-md bg-secondary/50 border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors resize-none text-foreground placeholder:text-muted-foreground"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-md bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    Sending...
                  </>
                ) : isSubmitted ? (
                  <>
                    <CheckCircle2 size={18} />
                    Message Sent!
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2 space-y-8"
          >
            {/* Info Cards */}
            <div className="space-y-4">
              {contactInfo.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-4 p-5 rounded-xl border border-border bg-card hover:border-primary/50 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                    <item.icon size={20} className="text-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">{item.label}</p>
                    <p className="font-medium text-foreground">
                      {item.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div className="border border-border rounded-xl p-6 bg-card">
              <h4 className="font-semibold mb-4 text-foreground">Follow Me</h4>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 rounded-md bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon size={18} />
                  </a>
                ))}
              </div>
            </div>

            {/* CTA Card */}
            <div className="border border-border rounded-xl p-6 bg-secondary/30">
              <h4 className="font-semibold mb-2 text-foreground">Need a Website?</h4>
              <p className="text-sm text-muted-foreground mb-4">
                Let Flowdev Teams help you build a stunning online presence for your business.
              </p>
              <a
                href="#services"
                className="inline-flex items-center gap-2 text-foreground text-sm font-medium hover:text-primary transition-colors"
              >
                View Services
                <ArrowRight size={16} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
