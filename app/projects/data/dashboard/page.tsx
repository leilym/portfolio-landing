"use client"

import { motion } from "framer-motion"
import { BarChart2, ExternalLink, Github, Network } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function DataVisualizationDashboardPage() {
  const [activeSection, setActiveSection] = useState<string | null>(null)
  const [isHeaderIconHovered, setIsHeaderIconHovered] = useState(false)
  const [isNextProjectIconHovered, setIsNextProjectIconHovered] = useState(false)
  
  const projectColor = "#E6E0EA" // Lavender
  
  return (
    <div className="pt-32 px-8 md:px-16 max-w-7xl mx-auto pb-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-4 mb-12">
          <motion.div 
            className="bg-[#E6E0EA]/10 p-3 rounded-full"
            whileHover={{ scale: 1.2, x: 5, y: -5 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
            onMouseEnter={() => setIsHeaderIconHovered(true)}
            onMouseLeave={() => setIsHeaderIconHovered(false)}
          >
            <BarChart2 
              className="w-6 h-6 text-[#E6E0EA]" 
              style={{ 
                transform: isHeaderIconHovered ? 'rotate(10deg)' : 'rotate(0deg)',
                transition: 'transform 0.3s ease-out'
              }}
            />
          </motion.div>
          <h1 className="text-4xl md:text-6xl font-normal text-white tracking-tight">
            Data Visualization
            <span className="block">Dashboard</span>
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
          <div className="col-span-2">
            <p className="text-lg text-white/70 mb-8 font-light leading-relaxed">
              An interactive analytics visualization platform that transforms complex datasets into intuitive, 
              actionable insights. This dashboard combines powerful data processing with elegant, user-friendly 
              visualizations to make data exploration accessible to both technical and non-technical users.
            </p>
            
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="px-3 py-1 bg-white/10 text-white/80 rounded-full text-sm">D3.js</span>
              <span className="px-3 py-1 bg-white/10 text-white/80 rounded-full text-sm">React</span>
              <span className="px-3 py-1 bg-white/10 text-white/80 rounded-full text-sm">TypeScript</span>
              <span className="px-3 py-1 bg-white/10 text-white/80 rounded-full text-sm">Python</span>
              <span className="px-3 py-1 bg-white/10 text-white/80 rounded-full text-sm">Pandas</span>
            </div>
            
            <div className="flex gap-6">
              <motion.a 
                href="https://github.com/yourusername/data-viz-dashboard" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/60 hover:text-white transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                <Github className="w-5 h-5" />
                <span>View Code</span>
              </motion.a>
              <motion.a 
                href="https://data-viz-dashboard-demo.vercel.app" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/60 hover:text-white transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                <ExternalLink className="w-5 h-5" />
                <span>Live Demo</span>
              </motion.a>
            </div>
          </div>
          
          <div className="col-span-1">
            <div className="bg-white/5 p-6 rounded-lg border border-white/10">
              <h3 className="text-lg font-normal mb-6 text-white/80">Project Details</h3>
              <div className="space-y-5">
                <div>
                  <p className="text-sm text-white/40 mb-1">Timeline</p>
                  <p className="text-white/80">Jan 2023 - Mar 2023</p>
                </div>
                <div>
                  <p className="text-sm text-white/40 mb-1">Role</p>
                  <p className="text-white/80">Data Scientist & Frontend Developer</p>
                </div>
                <div>
                  <p className="text-sm text-white/40 mb-1">Team Size</p>
                  <p className="text-white/80">Solo Project</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Project Showcase */}
        <div className="mb-24">
          <motion.div 
            className="aspect-video w-full bg-white/5 rounded-lg overflow-hidden mb-6 border border-white/10"
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.3 }}
          >
            <Image 
              src="/placeholder.svg?height=720&width=1280" 
              alt="Data Visualization Dashboard" 
              width={1280} 
              height={720}
              className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity"
            />
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <motion.div 
              className="aspect-video bg-white/5 rounded-lg overflow-hidden border border-white/10"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Image 
                src="/placeholder.svg?height=240&width=427" 
                alt="Dashboard Detail 1" 
                width={427} 
                height={240}
                className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity"
              />
            </motion.div>
            <motion.div 
              className="aspect-video bg-white/5 rounded-lg overflow-hidden border border-white/10"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Image 
                src="/placeholder.svg?height=240&width=427" 
                alt="Dashboard Detail 2" 
                width={427} 
                height={240}
                className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity"
              />
            </motion.div>
            <motion.div 
              className="aspect-video bg-white/5 rounded-lg overflow-hidden border border-white/10"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Image 
                src="/placeholder.svg?height=240&width=427" 
                alt="Dashboard Detail 3" 
                width={427} 
                height={240}
                className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity"
              />
            </motion.div>
          </div>
        </div>

        {/* Project Description */}
        <div className="mb-24">
          <h2 className="text-2xl font-normal mb-8 text-white">Project Overview</h2>
          <div className="text-white/70 space-y-8 font-light">
            <p className="leading-relaxed">
              The Data Visualization Dashboard was created to address the challenge of making complex datasets accessible 
              and actionable for business stakeholders. By combining powerful data processing capabilities with intuitive 
              visualizations, the dashboard enables users to explore data, identify trends, and make data-driven decisions 
              without requiring technical expertise.
            </p>
            
            <div 
              className="p-6 border border-white/10 rounded-lg bg-white/5 transition-colors duration-300"
              onMouseEnter={() => setActiveSection('features')}
              onMouseLeave={() => setActiveSection(null)}
              style={{ 
                borderColor: activeSection === 'features' ? projectColor + '40' : 'rgba(255, 255, 255, 0.1)',
                backgroundColor: activeSection === 'features' ? 'rgba(230, 224, 234, 0.05)' : 'rgba(255, 255, 255, 0.05)'
              }}
            >
              <h3 className="text-xl font-normal mb-4 text-white/90">Key Features</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Interactive charts and graphs that respond to user input</li>
                <li>Real-time data filtering and segmentation</li>
                <li>Customizable dashboard layouts for different user needs</li>
                <li>Automated data processing pipeline for continuous updates</li>
                <li>Export functionality for reports and presentations</li>
              </ul>
            </div>
            
            <div 
              className="p-6 border border-white/10 rounded-lg bg-white/5 transition-colors duration-300"
              onMouseEnter={() => setActiveSection('technical')}
              onMouseLeave={() => setActiveSection(null)}
              style={{ 
                borderColor: activeSection === 'technical' ? projectColor + '40' : 'rgba(255, 255, 255, 0.1)',
                backgroundColor: activeSection === 'technical' ? 'rgba(230, 224, 234, 0.05)' : 'rgba(255, 255, 255, 0.05)'
              }}
            >
              <h3 className="text-xl font-normal mb-4 text-white/90">Technical Implementation</h3>
              <p className="leading-relaxed">
                The frontend was built using React and TypeScript, with D3.js for data visualization components. 
                The backend data processing pipeline was implemented in Python using Pandas for data manipulation 
                and cleaning. The system was designed with a modular architecture to allow for easy extension and 
                customization.
              </p>
            </div>
            
            <div 
              className="p-6 border border-white/10 rounded-lg bg-white/5 transition-colors duration-300"
              onMouseEnter={() => setActiveSection('challenges')}
              onMouseLeave={() => setActiveSection(null)}
              style={{ 
                borderColor: activeSection === 'challenges' ? projectColor + '40' : 'rgba(255, 255, 255, 0.1)',
                backgroundColor: activeSection === 'challenges' ? 'rgba(230, 224, 234, 0.05)' : 'rgba(255, 255, 255, 0.05)'
              }}
            >
              <h3 className="text-xl font-normal mb-4 text-white/90">Challenges & Solutions</h3>
              <p className="leading-relaxed">
                One of the main challenges was optimizing performance for large datasets. This was addressed by 
                implementing data aggregation techniques and lazy loading of visualization components. Another 
                challenge was creating an intuitive user interface that would work for users with varying levels 
                of data literacy. This was solved through extensive user testing and iterative design improvements.
              </p>
            </div>
            
            <div 
              className="p-6 border border-white/10 rounded-lg bg-white/5 transition-colors duration-300"
              onMouseEnter={() => setActiveSection('outcomes')}
              onMouseLeave={() => setActiveSection(null)}
              style={{ 
                borderColor: activeSection === 'outcomes' ? projectColor + '40' : 'rgba(255, 255, 255, 0.1)',
                backgroundColor: activeSection === 'outcomes' ? 'rgba(230, 224, 234, 0.05)' : 'rgba(255, 255, 255, 0.05)'
              }}
            >
              <h3 className="text-xl font-normal mb-4 text-white/90">Outcomes</h3>
              <p className="leading-relaxed">
                The dashboard has been successfully used to analyze customer behavior patterns, leading to a 15% 
                increase in customer retention. It has also streamlined the reporting process, reducing the time 
                spent on creating reports by 40%.
              </p>
            </div>
          </div>
        </div>

        {/* Next Project */}
        <div className="border-t border-white/10 pt-12">
          <h2 className="text-xl font-normal mb-8 text-white/60">Next Project</h2>
          <Link href="/projects/data/network" className="block">
            <motion.div 
              className="bg-[#F2E2DD]/10 rounded-lg overflow-hidden relative group"
              whileHover={{ scale: 1.02 }}
            >
              <div className="aspect-[5/2] relative">
                <Image 
                  src="/placeholder.svg?height=400&width=1000" 
                  alt="Network Analysis" 
                  width={1000} 
                  height={400}
                  className="w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent" />
                
                <div className="absolute inset-0 p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-4">
                    <motion.div 
                      className="bg-[#F2E2DD]/20 p-3 rounded-full"
                      whileHover={{ scale: 1.2, x: 5, y: -5 }}
                      transition={{ type: "spring", stiffness: 300, damping: 15 }}
                      onMouseEnter={() => setIsNextProjectIconHovered(true)}
                      onMouseLeave={() => setIsNextProjectIconHovered(false)}
                    >
                      <Network 
                        className="w-6 h-6 text-[#F2E2DD]" 
                        style={{ 
                          transform: isNextProjectIconHovered ? 'rotate(10deg)' : 'rotate(0deg)',
                          transition: 'transform 0.3s ease-out'
                        }}
                      />
                    </motion.div>
                    <h3 className="text-2xl md:text-3xl font-normal text-white">Network Analysis</h3>
                  </div>
                  <p className="text-white/60 max-w-md mb-6">Social network data exploration tool that visualizes complex relationships and interaction patterns.</p>
                  <div className="flex items-center">
                    <span className="mr-2 text-sm uppercase tracking-wider text-white/80">View project</span>
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ 
                        repeat: Infinity, 
                        repeatType: "loop", 
                        duration: 1.5,
                        repeatDelay: 1
                      }}
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M5 12H19M19 12L12 5M19 12L12 19"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </Link>
        </div>
      </motion.div>
    </div>
  )
}

