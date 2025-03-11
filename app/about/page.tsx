"use client"

import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <Link href="/" className="flex items-center gap-2 text-white/70 hover:text-white transition-colors mb-8">
        <ArrowLeft className="h-4 w-4" />
        <span>Back to home</span>
      </Link>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-8">About Me</h1>

        <div className="prose prose-lg prose-invert">
          <p>
            Hi, I'm Leili. I'm a Creative Technologist and Data Enthusiast with a passion for combining art and
            technology.
          </p>

          <p>
            My background spans across design, development, and data analysis, allowing me to approach problems from
            multiple perspectives and create innovative solutions.
          </p>

          <p>
            When I'm not coding or analyzing data, you can find me sketching, exploring new design trends, or
            experimenting with new technologies.
          </p>

          <h2>Skills</h2>
          <ul>
            <li>UX/UI Design</li>
            <li>Front-end Development</li>
            <li>Data Visualization</li>
            <li>Creative Coding</li>
            <li>Digital Illustration</li>
          </ul>
        </div>
      </motion.div>
    </div>
  )
}

