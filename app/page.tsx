"use client"

import { useEffect, useState, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { MousePointer2, ArrowDown } from "lucide-react"
import InteractiveText from "../interactive-text"
import BackgroundElements from "../background-elements"
import ProjectsSection from "../projects-section"

export default function PortfolioLanding() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const containerRef = useRef<HTMLDivElement>(null)

  // Scroll animation setup
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95])
  const y = useTransform(scrollYProgress, [0, 0.5], [0, -50])

  const projectsOpacity = useTransform(scrollYProgress, [0.3, 0.6], [0, 1])
  const projectsY = useTransform(scrollYProgress, [0.3, 0.6], [100, 0])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div ref={containerRef} className="relative w-full h-[200vh] overflow-x-hidden bg-white text-black">
      {/* First section - Landing */}
      <motion.div className="sticky top-0 min-h-screen w-full overflow-hidden" style={{ opacity, scale, y }}>
        <BackgroundElements mousePosition={mousePosition} />

        <div className="relative z-10 flex h-full w-full flex-col items-center justify-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-[1600px] px-4 md:px-8"
          ></motion.div>

          <InteractiveText />

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
            className="mt-12 flex items-center justify-start text-sm font-light text-gray-600"
          >
            <MousePointer2 className="mr-2 h-4 w-4" />
            <span>Move your cursor to reveal the hidden artwork</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5, duration: 1 }}
            className="absolute bottom-8 right-8 md:right-16 flex items-center justify-end text-sm font-light text-gray-600"
          >
            <span>Scroll to explore</span>
            <ArrowDown className="ml-2 h-4 w-4 animate-bounce" />
          </motion.div>
        </div>
      </motion.div>

      {/* Second section - Projects */}
      <motion.section id="explore" id="explore" className="min-h-screen">
        <ProjectsSection />
      </motion.section>
    </div>
  )
}

