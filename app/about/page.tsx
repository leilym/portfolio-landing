"use client"

import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <Link href="/#projects" className="flex items-center gap-2 text-white/70 hover:text-white transition-colors mb-8">
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
            Hi, I'm Leili. I'm a Creative Technologist with a passion for combining art, humanities, and
            technology.
          </p> 

          <p><br></br>
          My non-linear journey has taken me across countries, careers, and creative paths. <br></br>
          <br></br>I left my home country at 16 in hopes of exploring a world not confined by the geography of my birthplace, to attend United World College Dilijan in Armenia, 
          then moved to the U.S. to earn my B.A. at Middlebury College in Vermont, where I majored in Computer Science and minored in Religion.
          <br></br>
          <br></br>
          </p>
          <p>
          My career began at OneReach.ai as a Solutions Analyst, but after being laid off, I pivoted into teaching; spending a year guiding students through AP Computer Science Principles. 
          <br></br>
          Today, I am part of the Implementation team at <a href="https://www.intapp.com/dealcloud/">Intapp DealCloud</a>.
          <br></br>
          Alongside my professional work, I am passionate about art, community, and impact. 
          I have volunteered for several years as part of the <a href="https://uwc.org">UWC</a> Selection process, helping students embark on their own transformative journeys.
          <br></br>Right now, I am exploring my passion for art through digital illustration and writing, using creativity to spark connection and reflection. <br></br>
          <br></br>You can find my artwork at: <p style={{ color: '#DFC98A' }}><a href="https://www.instagram.com/art.from.themundane/">instagram.com/@art.from.themundane/</a></p>
          <br></br>My blogs at: <p style={{ color: '#DFC98A' }}> <a href="https://medium.com/@leyli-s-life-drafts"> medium.com/@leyli-s-life-drafts </a> </p>

          <br></br> Thanks for visiting!
          </p>
          
        </div>
      </motion.div>
    </div>
  )
}

