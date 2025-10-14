"use client"

import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion"
import { ArrowDown, Linkedin, Github } from "lucide-react"

export default function HeroSection() {
  const { scrollY } = useScroll()
  const shouldReduceMotion = useReducedMotion()

  const y = useTransform(scrollY, [0, 500], [0, 150])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-[#f8fafc] lg:ml-80 relative overflow-hidden">
      {/* Simplified background blobs - only animate on desktop */}
      {!shouldReduceMotion && (
        <>
          <motion.div
            className="absolute top-20 left-10 w-64 h-64 bg-[#3b82f6]/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-20 right-10 w-96 h-96 bg-[#2563eb]/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </>
      )}

      {/* Static blobs for reduced motion */}
      {shouldReduceMotion && (
        <>
          <div className="absolute top-20 left-10 w-64 h-64 bg-[#3b82f6]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#2563eb]/10 rounded-full blur-3xl" />
        </>
      )}

      <motion.div style={{ y, opacity }} className="max-w-4xl mx-auto px-6 py-20 lg:py-0 text-center relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          {/* Removed text shadow animation - very expensive */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-balance mb-8">
            Devin Mohr
          </h1>

          <div className="flex justify-center gap-4">
            <motion.a
              href="https://linkedin.com/in/devinmohr"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-[#1e293b] hover:bg-[#3b82f6] transition-all duration-200"
              whileHover={shouldReduceMotion ? {} : { scale: 1.1, y: -2, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Linkedin className="w-7 h-7" />
            </motion.a>
            <motion.a
              href="https://github.com/devxinvestor"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-[#1e293b] hover:bg-[#3b82f6] transition-all duration-200"
              whileHover={shouldReduceMotion ? {} : { scale: 1.1, y: -2, rotate: -5 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Github className="w-7 h-7" />
            </motion.a>
          </div>
        </motion.div>
        
        <motion.div
          className="mt-16 flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <motion.div 
            animate={shouldReduceMotion ? {} : { y: [0, 10, 0] }} 
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <ArrowDown className="w-6 h-6 text-[#64748b]" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}