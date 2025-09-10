"use client"

import type React from "react"

import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { useState } from "react"

export default function DesignProjectsPage() {
  const [activeProject, setActiveProject] = useState<number | null>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isModalOpen, setIsModalOpen] = useState(false) // State for modal

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY })
  }

  const handleOpenModal = () => {
    setIsModalOpen(true) // Open the modal
  }

  const handleCloseModal = () => {
    setIsModalOpen(false) // Close the modal
  }

  const projects = [
    {
      title: "DelNevis",
      subtitle: "Website Prototype",
      description: "a website designed for Iranian teenagers to share their creative writing, creating a safe space for healing through art/writing.",
      color: "#FF9EB5",
      image: "/delnevis.png?height=400&width=400",
      year: "2023",
    },
    {
        title: "Pegasus Mobile App",
        subtitle: "Mobile App Prototype",
        description: "Mobile app designed from scratch for a startup (pegasusprep.education)",
        color: "#FFDFBA",
        image: "/pegasus.png?height=600&width=600",
        year: "2025",
      },
      {
        title: "HuCapital",
        subtitle: "Instagram posts",
        description: "Designed 20+ posts aligned with the brand identity to drive user engagement and awareness for HuCapital's upcoming event",
        color: "#FFDFBA",
        image: "/HuCapital.png?height=600&width=600",
        year: "2025",
      },
    {
        title: "Tell Me",
        subtitle: "audio journaling ai bot",
        description: "an audio journaling ai bot that uses NLP, reinforced learning & Brene Brown's research to become your favorite voice journal ",
        color: "#FFDFBA",
        image: "/tellme.png?height=600&width=600",
        year: "2022",
      },
    {
      title: "Personal Portfolio",
      subtitle: "portfolio website",
      description: "evolution of my personal portfolio design and my reflections from it",
      color: "#87CEEB",
      image: "/portfolio.png?height=600&width=600",
      year: "2023-present",
    },
    {
      title: "Personal Art",
      subtitle: "illustrations & digital art",
      description: "art pieces I have created using ProCreate and Figma",
      color: "#87CEEB",
      image: "/artpiece1.JPG?height=600&width=600",
      year: "2024-present",
    }
  ]
  
  return (
    <div className="min-h-screen bg-black font-[var(--font-ideo)] overflow-hidden" onMouseMove={handleMouseMove}>
      {/* Navigation */}
      <div className="fixed top-8 left-8 z-50">
        <Link
          href="/#explore"
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
          Design
          <span className="block">Projects</span>
        </motion.h1>
      </div>

      {/* Project Grid */}
      <div className="w-full px-8 md:px-24 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="relative mx-auto w-full max-w-[85%]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => setActiveProject(index)} // Set activeProject on hover
              onMouseLeave={() => {
                if (!isModalOpen) {
                  setActiveProject(null); // Reset activeProject only if modal is not open
                }
              }}
            >
              <div className="group relative bg-gray-800/50 p-4 rounded-lg">
                {/* Project Image */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-auto rounded-lg transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="relative p-4">
                  <h2 className="text-2xl font-bold text-white">
                    {project.title}
                    <span className="text-white/40 text-lg md:text-xl ml-2">
                      {project.subtitle}
                    </span>
                  </h2>
                  <span className="text-white/60">{project.year}</span>
                </div>

                <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-white/80 mb-4 text-sm md:text-base">
                    {project.description}
                  </p>
                  <div className="flex items-center">
                    <button
                      className="flex items-center gap-2 text-sm uppercase tracking-wider text-white hover:text-white/80 transition-colors"
                      onClick={() => {
                        setActiveProject(index); // Ensure activeProject is set
                        setIsModalOpen(true); // Open modal
                      }}
                    >
                      View project
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5 12H19M19 12L12 5M19 12L12 19"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
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

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white w-[90%] md:w-[60%] lg:w-[50%] h-[80vh] p-6 rounded-lg relative overflow-y-auto">
            <button
              className="absolute top-4 right-4 text-black text-xl"
              onClick={handleCloseModal} // Close modal on click
            >
              &times;
            </button>

            {/* Modal Content */}
            {activeProject !== null && (
              <>
                {/* Content for DelNevis */}
                {projects[activeProject].title === "DelNevis" && (
                  <div className="w-full">
                    {/* Project Title */}
                    <h3 className="text-xl font-semibold mb-2">Project Title: Del-nevis</h3>

                    {/* Description */}
                    <p className="text-gray-700 mb-4">
                      Prototype of a website designed for Iranian teenagers to share their creative writing to create a safe space for healing through art/writing.
                    </p>

                    {/* Tools */}
                    <p className="text-gray-700 font-medium mb-6">
                      <strong>Tools:</strong> Figma
                    </p>

                    {/* Video */}
                    <video
                      className="w-full rounded-lg mb-6"
                      controls
                      src="/videos/DelNevisScreenRecord.mp4" // Path to your video file
                    >
                      Your browser does not support the video tag.
                    </video>

                    {/* Design Process */}
                    <h3 className="text-xl font-semibold mb-4">Design Process:</h3>
                    <div className="grid grid-cols-2 gap-4">
                      {/* Image 1 */}
                      <div className="w-full h-40">
                        <img
                          src="/delnevisprocess1.png" // Replace with the actual path to your image
                          alt="Design Process Step 1"
                          className="w-full h-full object-cover rounded-lg"
                        />
                      </div>

                      {/* Image 2 */}
                      <div className="w-full h-40">
                        <img
                          src="/ddelnevisprocess2.png" // Replace with the actual path to your image
                          alt="Design Process Step 2"
                          className="w-full h-full object-cover rounded-lg"
                        />
                      </div>

                      {/* Image 3 */}
                      <div className="w-full h-40">
                        <img
                          src="/delnevisprocess3.png" // Replace with the actual path to your image
                          alt="Design Process Step 3"
                          className="w-full h-full object-cover rounded-lg"
                        />
                      </div>

                
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      )}

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