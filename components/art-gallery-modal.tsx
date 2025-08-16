"use client"

import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import Image from "next/image"
import { useEffect } from "react"

interface ArtPiece {
  id: string
  title: string
  description: string
  image: string
  year: string
  medium: string
  dimensions?: string
}

interface ArtGalleryModalProps {
  artPieces: ArtPiece[]
  isOpen: boolean
  onClose: () => void
}

export default function ArtGalleryModal({ artPieces, isOpen, onClose }: ArtGalleryModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return

      if (e.key === "Escape") {
        onClose()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [isOpen, onClose])

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 overflow-y-auto font-[var(--font-ideo)]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="relative w-full max-w-7xl bg-black/50 backdrop-blur-sm rounded-lg overflow-hidden border border-white/10 my-8"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/10">
              <div>
                <h2 className="text-2xl md:text-3xl font-normal text-white tracking-tight">Personal Art</h2>
                <p className="text-white/60 text-sm mt-1">Illustrations & Digital Art Collection</p>
              </div>
              <button onClick={onClose} className="p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors">
                <X className="w-6 h-6 text-white" />
              </button>
            </div>

            {/* Art Grid */}
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {artPieces.map((art, index) => (
                  <motion.div
                    key={art.id}
                    className="group"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    {/* Image Container */}
                    <div className="relative aspect-square bg-white/5 rounded-lg overflow-hidden mb-4 border border-white/10">
                      <Image
                        src={art.image || "/placeholder.svg"}
                        alt={art.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>

                    {/* Art Details */}
                    <div className="text-white">
                      <h3 className="text-xl font-normal mb-2 tracking-tight">{art.title}</h3>
                      <p className="text-white/70 text-sm mb-4 leading-relaxed font-light">{art.description}</p>

                      {/* Metadata */}
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-white/40 uppercase tracking-wider">Year</span>
                          <span className="text-white/80">{art.year}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-white/40 uppercase tracking-wider">Medium</span>
                          <span className="text-white/80">{art.medium}</span>
                        </div>
                        {art.dimensions && (
                          <div className="flex justify-between text-sm">
                            <span className="text-white/40 uppercase tracking-wider">Format</span>
                            <span className="text-white/80">{art.dimensions}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="p-6 border-t border-white/10 bg-black/30">
              <div className="flex items-center justify-between">
                <p className="text-white/60 text-sm">{artPieces.length} pieces • Created with ProCreate & Figma</p>
                <p className="text-white/40 text-xs">Press ESC to close</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
