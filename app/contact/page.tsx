"use client"

import { ArrowLeft, Mail, Github, Linkedin } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export default function ContactPage() {
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
        <h1 className="text-4xl md:text-6xl font-bold mb-8">Contact Me</h1>

        <p className="text-xl text-white/70 mb-12">
          I'm always open to new opportunities and collaborations. Feel free to reach out!
        </p>

        <div className="space-y-8">
          <a
            href="mailto:your.email@example.com"
            className="flex items-center gap-4 text-xl hover:text-gray-300 transition-colors"
          >
            <Mail className="h-6 w-6" />
            <span>your.email@example.com</span>
          </a>

          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 text-xl hover:text-gray-300 transition-colors"
          >
            <Github className="h-6 w-6" />
            <span>github.com/yourusername</span>
          </a>

          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 text-xl hover:text-gray-300 transition-colors"
          >
            <Linkedin className="h-6 w-6" />
            <span>linkedin.com/in/yourusername</span>
          </a>
        </div>

        <div className="mt-16 p-8 border border-white/20 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Send Me a Message</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-white/70 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full p-2 bg-white/10 border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-white/50"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-white/70 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-2 bg-white/10 border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-white/50"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-white/70 mb-1">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                className="w-full p-2 bg-white/10 border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-white/50"
              ></textarea>
            </div>

            <button
              type="submit"
              className="px-4 py-2 bg-white text-black font-medium rounded-md hover:bg-gray-200 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </motion.div>
    </div>
  )
}

