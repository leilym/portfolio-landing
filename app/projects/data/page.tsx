"use client"

import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export default function DataProjectsPage() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <Link href="/#projects" className="flex items-center gap-2 text-white/70 hover:text-white transition-colors mb-8">
        <ArrowLeft className="h-4 w-4" />
        <span>Back to all projects</span>
      </Link>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <h1 className="text-4xl md:text-6xl font-bold mb-8">Data Projects</h1>
        <p className="text-xl text-white/70 mb-12">Explore my analytical work and data-driven projects.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* You can add your actual data projects here */}
          <div className="border border-white/20 rounded-md p-6 hover:border-white/50 transition-colors">
            <h2 className="text-2xl font-medium mb-2">Data Visualization Dashboard</h2>
            <p className="text-white/70">
              Interactive dashboard showcasing data analysis and visualization techniques.
            </p>
          </div>

          <div className="border border-white/20 rounded-md p-6 hover:border-white/50 transition-colors">
            <h2 className="text-2xl font-medium mb-2">Machine Learning Model</h2>
            <p className="text-white/70">Predictive analytics model built with Python and TensorFlow.</p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

