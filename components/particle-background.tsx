"use client"

import { useEffect, useMemo, useState } from "react"
import Particles, { initParticlesEngine } from "@tsparticles/react"
import { loadSlim } from "@tsparticles/slim"
import type { ISourceOptions } from "@tsparticles/engine"

export function ParticleBackground() {
  const [init, setInit] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile() // Check immediately on mount
    window.addEventListener("resize", checkMobile)
    
    initParticlesEngine(async (engine) => {
      await loadSlim(engine)
    }).then(() => {
      setInit(true)
    })

    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const options: ISourceOptions = useMemo(
    () => ({
      background: {
        color: {
          value: "transparent",
        },
      },
      fpsLimit: isMobile ? 24 : 60,
      interactivity: {
        events: {
          onHover: {
            enable: !isMobile,
            mode: "grab",
          },
          resize: {
            enable: true,
          },
        },
        modes: {
          grab: {
            distance: 140,
            links: {
              opacity: 0.5,
            },
          },
        },
      },
      particles: {
        color: {
          value: ["#22d3ee", "#a855f7", "#3b82f6"],
        },
        links: {
          color: "#22d3ee",
          distance: 150,
          enable: !isMobile, // Nonaktifkan garis penghubung di HP agar sangat ringan
          opacity: 0.15,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: true,
          speed: isMobile ? 0.4 : 0.8,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            width: 1920,
            height: 1080,
          },
          value: isMobile ? 12 : 30, // Kurangi jumlah partikel di HP
        },
        opacity: {
          value: { min: 0.3, max: 0.7 },
          animation: {
            enable: !isMobile, // Matikan animasi kedip di HP
            speed: 0.5,
            sync: false,
          },
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 3 },
        },
      },
      detectRetina: true,
    }),
    [isMobile]
  )

  if (!init) return null

  return (
    <Particles
      id="tsparticles"
      options={options}
      className="fixed inset-0 -z-10"
    />
  )
}
