"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Github, Instagram, Send, Loader2, CheckCircle2 } from "lucide-react"

export function ContactSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
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
    <section
      ref={ref}
      id="contact"
      className="fullpage-section sky-bg"
    >
      <div className="relative z-10 flex flex-col lg:flex-row items-center w-full h-full px-6 sm:px-10 lg:px-20 max-w-[1400px] mx-auto gap-8 lg:gap-16">
        {/* Left: Title & Contact Info */}
        <div className="flex-1 flex flex-col justify-center order-2 lg:order-1">
          <motion.h2
            className="font-display text-[clamp(2.5rem,6vw,5rem)] leading-[1] text-foreground"
            initial={{ opacity: 0, y: 60 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }}
          >
            Get In Touch
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

          {/* Contact Links */}
          <motion.ul
            className="space-y-4 mt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <li>
              <a
                href="mailto:zainulrhmt368@gmail.com"
                className="link-underline text-foreground text-sm sm:text-base hover:text-primary transition-colors"
              >
                zainulrhmt368@gmail.com
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/6287709165697"
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline text-foreground text-sm sm:text-base hover:text-primary transition-colors"
              >
                WhatsApp
              </a>
            </li>
            <li className="flex items-center gap-4 pt-2">
              <a
                href="https://github.com/ZainulRhmt24"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.instagram.com/z4yn.rs"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </li>
          </motion.ul>
        </div>

        {/* Right: Contact Form */}
        <div className="flex-1 flex justify-center items-center order-1 lg:order-2 w-full max-w-lg">
          <motion.div
            className="w-full p-6 sm:p-8 rounded-sm border border-border/50 bg-card/40 backdrop-blur-sm"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <h3 className="font-display text-xl text-foreground mb-6">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  required
                  className="form-input rounded-sm"
                  placeholder="Your name"
                />
                <input
                  type="email"
                  name="email"
                  required
                  className="form-input rounded-sm"
                  placeholder="your@email.com"
                />
              </div>
              <input
                type="text"
                name="subject"
                required
                className="form-input rounded-sm"
                placeholder="Subject"
              />
              <textarea
                name="message"
                rows={4}
                required
                className="form-input rounded-sm resize-none"
                placeholder="Tell me about your project..."
              />
              <button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                className="w-full flex items-center justify-center gap-2 py-3 bg-primary text-primary-foreground font-medium text-sm tracking-wider uppercase transition-all hover:bg-primary/90 disabled:opacity-70 disabled:cursor-not-allowed rounded-sm"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    Sending...
                  </>
                ) : isSubmitted ? (
                  <>
                    <CheckCircle2 size={16} />
                    Message Sent!
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Page Number */}
      <div className="page-number" aria-hidden="true">
        08
      </div>
    </section>
  )
}
