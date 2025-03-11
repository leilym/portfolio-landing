"use client"

import { useRef, useEffect, useState } from "react"
import { motion } from "framer-motion"

interface BackgroundElementsProps {
  mousePosition: { x: number; y: number }
}

export default function BackgroundElements({ mousePosition }: BackgroundElementsProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [imageLoaded, setImageLoaded] = useState(false)

  // Art reveal effect
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d", { willReadFrequently: true })
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    // Create an image element for the art piece
    const artImage = new Image()

    // Set up error handling for image loading
    artImage.onload = () => {
      console.log("Image loaded successfully")
      setImageLoaded(true)
    }

    artImage.onerror = (e) => {
      console.error("Error loading image:", e)
    }

    // Set the source after attaching event handlers
    artImage.crossOrigin = "anonymous"
    artImage.src =
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/original-abstract-escape-into-space-serg-wiaderny.jpg-frMt2o6wmAGql1Ie5MUmokweP3lab5.jpeg"

    // Variables for the reveal effect
    const revealRadius = 180

    // Animation frame ID for cleanup
    let animationFrameId: number

    // Draw function
    const draw = () => {
      if (!ctx) return

      // Clear the canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Only proceed with drawing if the image is loaded
      if (imageLoaded) {
        // Calculate image dimensions to cover the canvas
        const scale = Math.max(canvas.width / artImage.width, canvas.height / artImage.height)

        const scaledWidth = artImage.width * scale
        const scaledHeight = artImage.height * scale
        const x = (canvas.width - scaledWidth) / 2
        const y = (canvas.height - scaledHeight) / 2

        // First, draw the image
        ctx.drawImage(artImage, x, y, scaledWidth, scaledHeight)

        // Create a circular mask
        ctx.globalCompositeOperation = "destination-in"

        // Create a radial gradient for soft edges
        const gradient = ctx.createRadialGradient(
          mousePosition.x,
          mousePosition.y,
          0,
          mousePosition.x,
          mousePosition.y,
          revealRadius,
        )
        gradient.addColorStop(0, "rgba(0, 0, 0, 1)")
        gradient.addColorStop(0.7, "rgba(0, 0, 0, 0.8)")
        gradient.addColorStop(1, "rgba(0, 0, 0, 0)")

        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(mousePosition.x, mousePosition.y, revealRadius * 1.5, 0, Math.PI * 2)
        ctx.fill()

        // Reset composite operation
        ctx.globalCompositeOperation = "source-over"
      } else {
        // If image isn't loaded yet, draw a placeholder
        ctx.fillStyle = "rgba(0, 0, 0, 0.9)"
        ctx.fillRect(0, 0, canvas.width, canvas.height)

        ctx.fillStyle = "white"
        ctx.font = "16px Arial"
        ctx.textAlign = "center"
        ctx.fillText("Loading artwork...", canvas.width / 2, canvas.height / 2)
      }

      // Request the next frame
      animationFrameId = requestAnimationFrame(draw)
    }

    // Start the animation loop
    draw()

    // Handle window resize
    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [mousePosition, imageLoaded])

  return (
    <>
      {/* Background color */}
      <div className="absolute inset-0 bg-black z-0" />

      {/* Art reveal canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 z-1" />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 z-2 pointer-events-none opacity-10"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "100px 100px",
        }}
      />

      {/* Cursor spotlight effect */}
      <motion.div
        className="pointer-events-none absolute left-0 top-0 z-3 h-[300px] w-[300px] rounded-full bg-gradient-to-r from-fuchsia-500/10 via-cyan-500/10 to-yellow-500/10 blur-[80px]"
        animate={{
          x: mousePosition.x - 150,
          y: mousePosition.y - 150,
        }}
        transition={{
          type: "spring",
          damping: 30,
          stiffness: 200,
        }}
      />
    </>
  )
}

