"use client"

import { motion } from "framer-motion"
import { Linkedin, Github } from "lucide-react"

export default function ContactSection() {
  return (
    <footer className="py-12 bg-[#0f172a] lg:ml-80">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex flex-col items-center gap-6">
          <div className="flex gap-6">
            <motion.a
              href="https://linkedin.com/in/devinmohr"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-[#1e293b] hover:bg-[#3b82f6] transition-all duration-200"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Linkedin className="w-6 h-6 text-[#f8fafc]" />
            </motion.a>

            <motion.a
              href="https://github.com/devxinvestor"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-[#1e293b] hover:bg-[#3b82f6] transition-all duration-200"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="w-6 h-6 text-[#f8fafc]" />
            </motion.a>
          </div>

          <p className="text-[#94a3b8] text-sm">© {new Date().getFullYear()} Devin Mohr</p>
        </div>
      </div>
    </footer>
  )
}
