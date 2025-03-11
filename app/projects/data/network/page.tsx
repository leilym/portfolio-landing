"use client"

import { motion } from "framer-motion"
import { Network, ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function NetworkAnalysisPage() {
  return (
    <div className="pt-24 px-4 md:px-8 max-w-6xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <div className="flex items-center gap-4 mb-12">
          <div className="bg-[#F2E2DD]/10 p-3 rounded-full">
            <Network className="w-6 h-6 text-[#F2E2DD]" />
          </div>
          <h1 className="text-3xl md:text-5xl font-normal text-white tracking-tight">
            Network
            <span className="block">Analysis</span>
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="col-span-2">
            <p className="text-lg text-white/70 mb-8 font-light">
              A social network data exploration tool that visualizes complex relationships and interaction patterns
              within communities. This project applies graph theory and network analysis techniques to uncover hidden
              structures and influential nodes in social networks.
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="px-3 py-1 bg-white/10 text-white/80 rounded-full text-sm">NetworkX</span>
              <span className="px-3 py-1 bg-white/10 text-white/80 rounded-full text-sm">Python</span>
              <span className="px-3 py-1 bg-white/10 text-white/80 rounded-full text-sm">Sigma.js</span>
              <span className="px-3 py-1 bg-white/10 text-white/80 rounded-full text-sm">React</span>
              <span className="px-3 py-1 bg-white/10 text-white/80 rounded-full text-sm">Graph Theory</span>
            </div>
            <div className="flex gap-6">
              <motion.a
                href="https://github.com/yourusername/network-analysis"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/60 hover:text-white transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                <Github className="w-5 h-5" />
                <span>View Code</span>
              </motion.a>
              <motion.a
                href="https://network-analysis-demo.vercel.app"
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
                  <p className="text-white/80">Apr 2023 - Jun 2023</p>
                </div>
                <div>
                  <p className="text-sm text-white/40 mb-1">Role</p>
                  <p className="text-white/80">Network Analyst & Developer</p>
                </div>
                <div>
                  <p className="text-sm text-white/40 mb-1">Team Size</p>
                  <p className="text-white/80">2 People</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Project Showcase */}
        <div className="mb-20">
          <motion.div
            className="aspect-video w-full bg-white/5 rounded-lg overflow-hidden mb-6"
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src="/placeholder.svg?height=720&width=1280"
              alt="Network Analysis Visualization"
              width={1280}
              height={720}
              className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity"
            />
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <motion.div
              className="aspect-video bg-white/5 rounded-lg overflow-hidden"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src="/placeholder.svg?height=240&width=427"
                alt="Network Detail 1"
                width={427}
                height={240}
                className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity"
              />
            </motion.div>
            <motion.div
              className="aspect-video bg-white/5 rounded-lg overflow-hidden"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src="/placeholder.svg?height=240&width=427"
                alt="Network Detail 2"
                width={427}
                height={240}
                className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity"
              />
            </motion.div>
            <motion.div
              className="aspect-video bg-white/5 rounded-lg overflow-hidden"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src="/placeholder.svg?height=240&width=427"
                alt="Network Detail 3"
                width={427}
                height={240}
                className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity"
              />
            </motion.div>
          </div>
        </div>

        {/* Project Description */}
        <div className="mb-20">
          <h2 className="text-2xl font-normal mb-8 text-white">Project Overview</h2>
          <div className="text-white/70 space-y-6 font-light">
            <p>
              The Network Analysis project was developed to explore and visualize social connections within online
              communities. By applying network analysis techniques, we were able to identify key influencers, community
              structures, and information flow patterns that weren't apparent through traditional analytics methods.
            </p>

            <div>
              <h3 className="text-xl font-normal mb-4 text-white/90">Key Features</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Interactive network visualization with zoom and pan capabilities</li>
                <li>Community detection algorithms to identify subgroups</li>
                <li>Centrality measures to identify influential nodes</li>
                <li>Temporal analysis to track network evolution over time</li>
                <li>Path finding to analyze connection routes between nodes</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-normal mb-4 text-white/90">Technical Implementation</h3>
              <p>
                The backend analysis was implemented in Python using NetworkX for graph algorithms and community
                detection. The frontend visualization was built with React and Sigma.js, a specialized library for graph
                visualization. Data was processed through a pipeline that cleaned, analyzed, and transformed the network
                data into an optimized format for visualization.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-normal mb-4 text-white/90">Challenges & Solutions</h3>
              <p>
                A significant challenge was visualizing large networks with thousands of nodes without performance
                issues. This was addressed by implementing level-of-detail rendering and node clustering techniques.
                Another challenge was making complex network metrics understandable to non-technical users, which was
                solved by creating intuitive visual representations and interactive tooltips.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-normal mb-4 text-white/90">Outcomes</h3>
              <p>
                The project successfully identified key influencers in online communities that weren't apparent through
                follower counts alone. It also revealed community structures that helped inform content strategy and
                engagement approaches, leading to a 25% increase in community engagement.
              </p>
            </div>
          </div>
        </div>

        {/* Next Project */}
        <div className="border-t border-white/10 pt-12 pb-20">
          <h2 className="text-xl font-normal mb-8 text-white/60">Next Project</h2>
          <Link href="/projects/data/ml" className="block">
            <motion.div
              className="bg-[#6B7280]/20 rounded-lg p-8 transition-all"
              whileHover={{
                scale: 1.02,
                backgroundColor: "rgba(107, 114, 128, 0.25)",
              }}
            >
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-2xl font-normal mb-2 text-white">Machine Learning Models</h3>
                  <p className="text-white/60">Predictive analytics experiments</p>
                </div>
                <motion.div
                  className="bg-white/10 p-3 rounded-full"
                  animate={{ x: [0, 5, 0] }}
                  transition={{
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "loop",
                    duration: 1.5,
                    repeatDelay: 1,
                  }}
                >
                  <ExternalLink className="w-5 h-5 text-white/80" />
                </motion.div>
              </div>
            </motion.div>
          </Link>
        </div>
      </motion.div>
    </div>
  )
}

