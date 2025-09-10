"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function ProjectsSection() {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null)

  const projects = [
    {
      id: "data",
      title: "Data Projects",
      description: "In Progress",
      href: "/projects/data",
    },
    {
      id: "design",
      title: "Design Projects",
      description: "Browse my creative work",
      href: "/projects/design",
    },
  ]

  return (
    <div
      className="min-h-screen w-full flex flex-col items-center justify-center relative"
      style={{
        backgroundImage: "url('/abstractArt.JPG')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed", // This helps with smooth scrolling
      }}
    >
      {/* Add a subtle gradient overlay to enhance the background without making it hazy */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/50 z-0" />

      <motion.div
        className="relative z-10 flex flex-col items-center justify-center w-full max-w-5xl p-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl md:text-6xl font-extrabold mb-16 text-white drop-shadow-lg">Explore My Work</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <Link href={project.href} className="block">
                <div
                  className={`
                  group
                  h-48 
                  border 
                  ${hoveredProject === project.id ? "border-white" : "border-white/50"}
                  bg-black/40
                  rounded-sm
                  p-8 
                  flex 
                  flex-col 
                  justify-between
                  transition-all 
                  duration-300 
                  ease-in-out
                  text-white
                  shadow-lg
                  cursor-pointer
                `}
                >
                  <div className="flex justify-between items-start">
                    <h3 className="text-2xl md:text-3xl font-medium">{project.title}</h3>
                    <motion.div
                      animate={{
                        x: hoveredProject === project.id ? 5 : 0,
                        opacity: hoveredProject === project.id ? 1 : 0,
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      <ArrowRight className="h-5 w-5" />
                    </motion.div>
                  </div>

                  <div>
                    <p className="text-sm opacity-90 font-light">{project.description}</p>
                    <div
                      className={`
                      h-[2px] 
                      bg-white/70 
                      mt-4 
                      transition-all 
                      duration-300 
                      ease-in-out
                      ${hoveredProject === project.id ? "w-full" : "w-0"}
                    `}
                    />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

