"use client"

import { ArrowLeft, BarChart2, Network, Brain, Database } from 'lucide-react'
import Link from "next/link"
import { motion } from "framer-motion"
import { useState } from "react"

export default function DataProjectsPage() {
  const [activeProject, setActiveProject] = useState<number | null>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY })
  }

  const projects = [
    {
      title: "Data Visualization Dashboard",
      subtitle: "Interactive analytics platform",
      description: "Interactive analytics visualization platform that transforms complex datasets into intuitive, actionable insights.",
      icon: <BarChart2 className="w-8 h-8" />,
      color: "#E6E0EA", // Lavender
      image: "/placeholder.svg?height=600&width=800",
      href: "/projects/data/dashboard",
      year: "2023",
    },
    {
      title: "Network Analysis",
      subtitle: "Social network exploration",
      description: "Social network data exploration tool that visualizes complex relationships and interaction patterns within communities.",
      icon: <Network className="w-8 h-8" />,
      color: "#F2E2DD", // Peach
      image: "/placeholder.svg?height=600&width=800",
      href: "/projects/data/network",
      year: "2023",
    },
    {
      title: "Machine Learning Models",
      subtitle: "Predictive analytics",
      description: "A collection of predictive analytics experiments exploring various machine learning approaches to solve real-world problems.",
      icon: <Brain className="w-8 h-8" />,
      color: "#6B7280", // Slate
      image: "/placeholder.svg?height=600&width=800",
      href: "/projects/data/ml",
      year: "2023",
    },
    {
      title: "Database Architecture",
      subtitle: "Data structure optimization",
      description: "Optimized database structures and query patterns for high-performance data access and storage solutions.",
      icon: <Database className="w-8 h-8" />,
      color: "#D1D5DB", // Light gray
      image: "/placeholder.svg?height=600&width=800",
      href: "/projects/data/database",
      year: "2022",
    },
  ]

  return (
    <div className="min-h-screen bg-black font-[var(--font-ideo)] overflow-hidden" onMouseMove={handleMouseMove}>
      {/* Navigation */}
      <div className="fixed top-8 left-8 z-50">
        <Link
          href="/#projects"
          className="flex items-center gap-2 text-white/60 hover:text-white transition-colors group"
          scroll={true}
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          <span className="text-sm">Back</span>
        </Link>
      </div>

      {/* Floating cursor follower */}
      <motion.div
        className="fixed w-40 h-40 rounded-full pointer-events-none z-40 mix-blend-difference"
        animate={{
          x: mousePosition.x - 80,
          y: mousePosition.y - 80,
          backgroundColor: activeProject !== null ? projects[activeProject].color : "#ffffff",
          opacity: activeProject !== null ? 0.15 : 0.05,
          scale: activeProject !== null ? 1.5 : 1,
        }}
        transition={{ type: "spring", damping: 30, stiffness: 200 }}
      />

      {/* Header */}
      <div className="pt-32 px-8 md:px-16 max-w-7xl mx-auto">
        <motion.h1
          className="text-5xl md:text-8xl font-normal mb-4 text-white tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Data
          <span className="block">Projects</span>
        </motion.h1>
      </div>

      {/* Project Grid */}
      <div className="w-full px-8 md:px-24 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="relative mx-auto w-full max-w-[90%]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => setActiveProject(index)}
              onMouseLeave={() => setActiveProject(null)}
            >
              <Link href={project.href}>
                <div className="aspect-[4/3] overflow-hidden relative group rounded-lg">
                  {/* Background image with overlay */}
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110"
                    style={{ backgroundImage: `url(${project.image})` }}
                  />
                  <div className="absolute inset-0 bg-black/70 group-hover:bg-black/40 transition-colors duration-500" />

                  {/* Content overlay */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-between text-white">
                    <div className="flex justify-between items-start">
                      <div className="flex items-start gap-3">
                        <motion.div 
                          className={`p-2 rounded-full bg-opacity-20`} 
                          style={{ backgroundColor: project.color + '30' }}
                          whileHover={{ scale: 1.2, x: 5, y: -5 }}
                          transition={{ type: "spring", stiffness: 300, damping: 15 }}
                        >
                          {project.icon}
                        </motion.div>
                        <div>
                          <h2 className="text-2xl md:text-3xl font-normal">
                            {project.title}
                            <span className="text-white/40 text-lg md:text-xl ml-2">{project.subtitle}</span>
                          </h2>
                        </div>
                      </div>
                      <span className="text-white/60">{project.year}</span>
                    </div>

                    <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                      <p className="text-white/80 mb-4 text-sm md:text-base">{project.description}</p>
                      <div className="flex items-center">
                        <span className="mr-2 text-sm uppercase tracking-wider">View project</span>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M5 12H19M19 12L12 5M19 12L12 19"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Numbers */}
      <div className="fixed bottom-8 right-8 z-50">
        <div className="flex items-center gap-4">
          {projects.map((_, index) => (
            <motion.div
              key={index}
              className={`w-2 h-2 rounded-full ${activeProject === index ? "bg-white" : "bg-white/30"}`}
              animate={{
                scale: activeProject === index ? 1.5 : 1,
                backgroundColor: activeProject === index ? projects[index].color : "rgba(255, 255, 255, 0.3)",
              }}
              transition={{ duration: 0.3 }}
            />
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="py-16 px-8 md:px-16 border-t border-white/10 mt-16">
        <div className="max-w-7xl mx-auto">
          <p className="text-white/40 text-sm font-normal">
            © {new Date().getFullYear()} Leili Manafi. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  )
}

