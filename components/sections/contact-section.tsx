"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import {
  Mail,
  Github,
  Instagram,
  Send,
  Loader2,
  CheckCircle2,
  Heart,
  ArrowUp,
} from "lucide-react"

export function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
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
        alert("Failed to send message. Please try again.")
      }
    } catch (error) {
      console.error(error)
      alert("Network error occurred.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const scrollToTop = () => {
    const container = document.querySelector(".fullpage-container")
    if (container) {
      container.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  return (
    <section id="contact" className="fullpage-section relative flex items-center" ref={ref}>
      <div className="w-full px-8 md:px-16 lg:px-24 py-16 overflow-y-auto max-h-[100dvh]">
        <div className="max-w-screen-xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Left - Title & Contact Info */}
            <div className="flex flex-col justify-center">
              <motion.h2
                className="section-title text-[clamp(2.5rem,7vw,6rem)] leading-[0.95] mb-6"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7 }}
              >
                Get In
                <br />
                Touch
              </motion.h2>

              <motion.div
                className="deco-line mb-8"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <span></span>
                <span></span>
              </motion.div>

              {/* Contact Links */}
              <div className="space-y-4">
                <motion.a
                  href="mailto:zainulrhmt368@gmail.com"
                  className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group"
                  initial={{ opacity: 0, y: 15 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 }}
                >
                  <Mail size={16} className="group-hover:text-primary transition-colors" />
                  <span className="text-sm">zainulrhmt368@gmail.com</span>
                </motion.a>

                <motion.a
                  href="https://wa.me/6287709165697"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group"
                  initial={{ opacity: 0, y: 15 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.6 }}
                >
                  <Send size={16} className="group-hover:text-primary transition-colors" />
                  <span className="text-sm">WhatsApp</span>
                </motion.a>
              </div>

              {/* Social */}
              <motion.div
                className="flex items-center gap-4 mt-8"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.7 }}
              >
                <a
                  href="https://github.com/ZainulRhmt24"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-border/40 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-all"
                  aria-label="GitHub"
                >
                  <Github size={16} />
                </a>
                <a
                  href="https://www.instagram.com/z4yn.rs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-border/40 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-all"
                  aria-label="Instagram"
                >
                  <Instagram size={16} />
                </a>
              </motion.div>

              {/* Footer info */}
              <motion.div
                className="mt-12 pt-8 border-t border-border/20"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <p className="text-xs text-muted-foreground flex items-center gap-1">
                  Made with <Heart size={12} className="text-red-400/80" /> by Zainul Rahmat Saputra
                </p>
                <p className="text-xs text-muted-foreground/60 mt-1">
                  &copy; {new Date().getFullYear()} All rights reserved.
                </p>

                <button
                  onClick={scrollToTop}
                  className="mt-4 flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground transition-colors uppercase tracking-widest"
                >
                  <ArrowUp size={12} />
                  Back to top
                </button>
              </motion.div>
            </div>

            {/* Right - Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-medium mb-2 text-muted-foreground uppercase tracking-wider">
                      Name
                    </label>
                    <input
                      type="text"
                      id="contact-name"
                      name="name"
                      required
                      className="w-full px-0 py-3 bg-transparent border-0 border-b border-border/40 focus:border-foreground focus:outline-none transition-colors text-foreground text-sm placeholder:text-muted-foreground/50"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-medium mb-2 text-muted-foreground uppercase tracking-wider">
                      Email
                    </label>
                    <input
                      type="email"
                      id="contact-email"
                      name="email"
                      required
                      className="w-full px-0 py-3 bg-transparent border-0 border-b border-border/40 focus:border-foreground focus:outline-none transition-colors text-foreground text-sm placeholder:text-muted-foreground/50"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-subject" className="block text-xs font-medium mb-2 text-muted-foreground uppercase tracking-wider">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="contact-subject"
                    name="subject"
                    required
                    className="w-full px-0 py-3 bg-transparent border-0 border-b border-border/40 focus:border-foreground focus:outline-none transition-colors text-foreground text-sm placeholder:text-muted-foreground/50"
                    placeholder="Project inquiry"
                  />
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-xs font-medium mb-2 text-muted-foreground uppercase tracking-wider">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    required
                    className="w-full px-0 py-3 bg-transparent border-0 border-b border-border/40 focus:border-foreground focus:outline-none transition-colors resize-none text-foreground text-sm placeholder:text-muted-foreground/50"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting || isSubmitted}
                  className="btn-kuon mt-4 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      Sending...
                    </>
                  ) : isSubmitted ? (
                    <>
                      <CheckCircle2 size={16} />
                      Sent!
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
      </div>

      {/* Page Number */}
      <div className="page-num" aria-hidden="true">
        04
      </div>
    </section>
  )
}
