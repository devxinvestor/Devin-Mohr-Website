"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Music, Dribbble as Dribble, Box, BookOpen } from "lucide-react"

export default function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const { scrollY } = useScroll()

  const y = useTransform(scrollY, [0, 1000], [0, -50])

  return (
    <section id="about" className="py-24 lg:py-32 bg-[#f8fafc] lg:ml-80 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(circle at 2px 2px, #3b82f6 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <motion.div style={{ y }} className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-8 text-[#0f172a]"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            About
          </motion.h2>

          <div className="space-y-6 text-[#475569] text-lg leading-relaxed">
            <motion.p
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              I am a senior at the University of Florida pursuing a B.S. in Computer Science 
              and an M.S. in Finance. I have gained experience on both the sell-side and buy-side 
              through internships at a boutique advisory firm, an endowment investment office, and 
              an alternative asset management firm. Outside of school and work, I enjoy playing piano, 
              basketball, solving Rubik's cubes, and reading.
            </motion.p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            {[
              { icon: BookOpen, label: "Reading" },
              { icon: Dribble, label: "Basketball" },
              { icon: Music, label: "Classical Piano" },
              { icon: Box, label: "Speed Cubing" },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                className="relative group"
                initial={{ opacity: 0, scale: 0.8, rotateY: -90 }}
                animate={isInView ? { opacity: 1, scale: 1, rotateY: 0 } : {}}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#3b82f6] to-[#1e40af] rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300" />

                <div className="relative flex flex-col items-center gap-3 p-6 bg-[#1e293b] rounded-2xl shadow-lg hover:shadow-2xl transition-all border-2 border-[#334155] group-hover:border-[#3b82f6]">
                  <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#3b82f6] rounded-tl-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-[#3b82f6] rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-[#3b82f6] rounded-bl-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[#3b82f6] rounded-br-2xl opacity-0 group-hover:opacity-100 transition-opacity" />

                  <motion.div
                    className="relative"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className="absolute inset-0 bg-[#3b82f6] rounded-full blur-md opacity-50 group-hover:opacity-75 transition-opacity" />
                    <div className="relative bg-gradient-to-br from-[#3b82f6] to-[#2563eb] p-3 rounded-full">
                      <item.icon className="w-8 h-8 text-white" />
                    </div>
                  </motion.div>

                  <span className="text-sm font-semibold text-white text-center">{item.label}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
