"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

export default function InteractiveText() {
  const [hoveredLetter, setHoveredLetter] = useState<string | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  // Character mapping dictionary (English to Arabic)
  const characterMap: Record<string, string> = {
    a: "آ",
    b: "ب",
    c: "س",
    d: "د",
    e: "ي",
    f: "ف",
    g: "غ",
    h: "ه",
    i: "ای",
    j: "ج",
    k: "ك",
    l: "ل",
    m: "م",
    n: "ن",
    o: "و",
    p: "ب",
    q: "ق",
    r: "ر",
    s: "س",
    t: "ت",
    u: "و",
    v: "ف",
    w: "و",
    x: "x",
    y: "ي",
    z: "ز",
    A: "الف",
    B: "ب",
    C: "س",
    D: "د",
    E: "عه",
    F: "ف",
    G: "غ",
    H: "ه",
    I: "آی",
    J: "ج",
    K: "ك",
    L: "ل",
    M: "م",
    N: "ن",
    O: "و",
    P: "ب",
    Q: "ق",
    R: "ر",
    S: "س",
    T: "ت",
    U: "و",
    V: "و",
    W: "و",
    X: "X",
    Y: "ي",
    Z: "ز",
    "&": "&",
    ".": ".",
    " ": " ",
    "'": "'",
  }

  useEffect(() => {
    // Trigger the animation after component mounts
    setIsVisible(true)
  }, [])

  const textLines = [
    {
      text: "Hi. I'm Leili. A",
      className: "text-[4vw] md:text-[3vw] font-black tracking-tighter text-white leading-none -mt-2",
    },
    {
      text: "CREATIVE",
      className: "text-[15vw] md:text-[12vw] font-bold text-white w-full block text-left leading-none -mt-4",
    },
    {
      text: "TECHNOLOGIST",
      className: "text-[10vw] md:text-[8vw] font-bold text-white w-full block text-left leading-none -mt-4",
    },
    {
      text: "&",
      className: "text-[4vw] md:text-[3vw] font-black tracking-tighter text-center text-white leading-none -mt-2",
    },
    {
      text: "DATA ENTHUSIAST",
      className: "text-[8.5vw] md:text-[7vw] font-bold text-white w-full block text-left leading-none -mt-4",
    },
  ]

  // Animation variants for staggered text appearance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const lineVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        duration: 0.5,
      },
    },
  }

  const letterVariants = {
    hidden: { y: 10, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.3 },
    },
  }

  // Random colors for hover effect
  const accentColors = ["#FFFF00", "#FF00FF", "#00FFFF", "#FF8800", "#88FF00"]

  const getRandomColor = () => {
    return accentColors[Math.floor(Math.random() * accentColors.length)]
  }

  return (
    <div className="relative w-full min-h-screen text-white overflow-hidden">
      {/* Text Wrapper Positioned at the Bottom Left */}
      <motion.div
        className="absolute bottom-0 left-0 w-full pb-4 md:pb-8 flex flex-col items-start text-left"
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <div className="w-full max-w-[90vw] grid auto-rows-min gap-2 pl-0 md:pl-4">
          {textLines.map((line, lineIndex) => (
            <motion.div
              key={lineIndex}
              className={`${line.className} text-left`}
              variants={lineVariants}
              aria-label={line.text}
            >
              {line.text.split("").map((char, charIndex) => {
                const letterKey = `${lineIndex}-${charIndex}`
                const isHovered = hoveredLetter === letterKey
                const hoverColor = getRandomColor()

                return (
                  <span
                    key={letterKey}
                    className="inline-block origin-center"
                    style={{
                      display: "inline-block",
                      whiteSpace: "pre",
                      color: isHovered ? "#FFFF00" : "inherit",
                      transition: "color 0.15s ease-out",
                      position: "relative",
                      zIndex: isHovered ? 10 : 1,
                    }}
                    onMouseEnter={() => setHoveredLetter(letterKey)}
                    onMouseLeave={() => setHoveredLetter(null)}
                  >
                    {isHovered
                      ? characterMap[char] || char // Show mapped character if available, otherwise show original
                      : char === " "
                        ? "\u00A0"
                        : char}
                  </span>
                )
              })}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

