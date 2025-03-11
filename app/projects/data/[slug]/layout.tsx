"use client"

import type React from "react"

import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { usePathname } from "next/navigation"
import { useState } from "react"

export default function DataProjectLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY })
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen bg-black text-white font-[var(--font-ideo)]"
        onMouseMove={handleMouseMove}
      >
        {/* Floating cursor follower */}
        <motion.div
          className="fixed w-40 h-40 rounded-full pointer-events-none z-40 mix-blend-difference"
          animate={{
            x: mousePosition.x - 80,
            y: mousePosition.y - 80,
            backgroundColor: "#ffffff",
            opacity: 0.05,
          }}
          transition={{ type: "spring", damping: 30, stiffness: 200 }}
        />

        <div className="fixed top-8 left-8 z-50">
          <Link
            href="/projects/data"
            className="flex items-center gap-2 text-white/60 hover:text-white transition-colors group"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            <span className="text-sm">Back to Data Projects</span>
          </Link>
        </div>
        {children}
      </motion.div>
    </AnimatePresence>
  )
}

