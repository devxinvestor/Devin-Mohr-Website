"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import type { ReactNode } from "react"

export default function ScrollBackground({ children }: { children: ReactNode }) {
  const { scrollYProgress } = useScroll()

  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.2, 0.4, 0.6, 0.8, 1],
    [
      "#0f172a", // Hero - Deep navy
      "#1e293b", // About start - Lighter navy
      "#334155", // About/Experience - Slate
      "#64748b", // Experience - Medium gray
      "#e2e8f0", // Projects - Light gray
      "#ffffff", // Footer - White
    ],
  )

  return (
    <motion.div style={{ backgroundColor }} className="min-h-screen">
      {children}
    </motion.div>
  )
}
