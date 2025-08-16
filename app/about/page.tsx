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
            Hi, I'm Leili. I'm a Creative Technologist and Data Enthusiast with a passion for combining art, humanity, and
            technology.
          </p>

          <p>
          My non-linear journey has taken me across countries, careers, and creative paths. 
          I left my home country at 16 to attend United World College Dilijan in Armenia, 
          then moved to the U.S. to earn my B.A. at Middlebury College in Vermont, where I majored in Computer Science and minored in Religion.
          
          </p>
          <p>
          My career began at OneReach.ai as a Solutions Analyst, but after being laid off, I pivoted into teaching; spending a year guiding students through AP Computer Science Principles. 
          
          Today, I am part of the Implementation team at Intapp DealCloud.
          
          Alongside my professional work, I am passionate about art, community, and impact. 
          I have volunteered for several years as part of the UWC Selection process, helping students embark on their own transformative journeys.
          Right now, I am exploring my passion for art through digital illustration and writing, using creativity to spark connection and reflection. 
          You can find my artwork at: https://www.instagram.com/art.from.themundane/
          My blogs at: https://medium.com/@leyli-s-life-drafts

          
          </p>
          
        </div>
      </motion.div>
    </div>
  )
}

