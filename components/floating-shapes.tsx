"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export function FloatingShapes() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-5">
      {/* Large gradient orb - top right */}
      <motion.div
        className="absolute -top-40 -right-40 w-96 h-96 rounded-full opacity-30"
        style={{
          background:
            "radial-gradient(circle, rgba(168, 85, 247, 0.4) 0%, rgba(168, 85, 247, 0.1) 50%, transparent 70%)",
        }}
        animate={
          isMobile
            ? {}
            : {
                x: [0, 30, 0],
                y: [0, -20, 0],
                scale: [1, 1.1, 1],
              }
        }
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Cyan orb - bottom left */}
      <motion.div
        className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full opacity-25"
        style={{
          background:
            "radial-gradient(circle, rgba(34, 211, 238, 0.4) 0%, rgba(34, 211, 238, 0.1) 50%, transparent 70%)",
        }}
        animate={
          isMobile
            ? {}
            : {
                x: [0, -20, 0],
                y: [0, 30, 0],
                scale: [1, 1.15, 1],
              }
        }
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Blue orb - center */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-10"
        style={{
          background:
            "radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, transparent 60%)",
        }}
        animate={
          isMobile
            ? {}
            : {
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360],
              }
        }
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Small floating shapes (disembunyikan di HP agar ringan) */}
      {!isMobile &&
        [...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-4 h-4 rounded-full"
            style={{
              background:
                i % 3 === 0
                  ? "rgba(34, 211, 238, 0.5)"
                  : i % 3 === 1
                  ? "rgba(168, 85, 247, 0.5)"
                  : "rgba(59, 130, 246, 0.5)",
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, i % 2 === 0 ? 15 : -15, 0],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 5 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          />
        ))}
    </div>
  )
}
