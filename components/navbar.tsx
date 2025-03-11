"use client"

import { AnimatePresence, motion } from "framer-motion"
import Link from "next/link"
import { useState } from "react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  // Prevent scrolling when menu is open
  if (typeof window !== "undefined") {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
  }

  const menuVariants = {
    closed: {
      opacity: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
        staggerDirection: -1,
      },
    },
    open: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const linkVariants = {
    closed: {
      opacity: 0,
      y: 20,
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  const navLinks = [
    { title: "About Me", href: "/about" },
    { title: "Projects", href: "/#projects" },
    { title: "Contact Me", href: "/contact" },
  ]

  return (
    <>
      {/* Hamburger Button */}
      <div className="fixed top-8 right-8 z-50">
        <button
          onClick={toggleMenu}
          className="flex flex-col justify-center items-center w-12 h-12 bg-black/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-300 hover:scale-110 hover:shadow-[0_0_15px_rgba(255,255,255,0.5)]"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          <div className="relative w-6 h-6">
            <motion.span
              className="absolute top-2 left-0 w-6 h-0.5 bg-white"
              animate={isOpen ? { rotate: 45, y: 4 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="absolute top-4 left-0 w-6 h-0.5 bg-white"
              animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="absolute top-6 left-0 w-6 h-0.5 bg-white"
              animate={isOpen ? { rotate: -45, y: -4 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </button>
      </div>

      {/* Full Screen Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black z-40 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.nav
              className="flex flex-col items-center justify-center"
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              {navLinks.map((link, index) => (
                <motion.div key={index} variants={linkVariants} className="relative">
                  <Link
                    href={link.href}
                    className="text-4xl md:text-6xl font-bold text-white my-4 transition-all duration-300 hover:text-yellow-300 hover:scale-105"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.title}
                  </Link>
                  <motion.div
                    className="h-[2px] bg-yellow-300 w-0 absolute bottom-0 left-0"
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              ))}
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

