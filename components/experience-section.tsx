"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { Briefcase, GraduationCap, Code } from "lucide-react"

const experiences = [
  {
    year: "July 2026",
    title: "Incoming Investment Banking Analyst",
    organization: "Wells Fargo",
    location: "New York, NY",
  },
  {
    year: "January 2025 – Present",
    title: "Portfolio Manager",
    organization: "Gator Student Investment Fund",
    location: "Gainesville, FL",
  },
  {
    year: "June – August 2025",
    title: "Private Equity Summer Analyst",
    organization: "Blue Owl Capital",
    location: "New York, NY",
  },
  {
    year: "June – December 2024",
    title: "Investment Analyst Intern",
    organization: "University of Florida Investment Corporation",
    location: "Gainesville, FL",
  },
]

const technicalSkills = {
  "Programming Languages": ["Python", "C++", "SQL", "MATLAB", "Julia", "JavaScript"],
  Frameworks: ["React", "Node.js", "Svelte", "Next.js"],
  Software: ["Bloomberg", "Capital IQ", "Refinitiv", "Excel", "PowerPoint", "Git"],
  "Operating Systems": ["Windows", "macOS", "Linux"],
}

const generateStars = (count: number) => {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2 + 0.5,
    opacity: Math.random() * 0.5 + 0.3,
    duration: Math.random() * 3 + 2,
  }))
}

export default function ExperienceSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const { scrollY } = useScroll()
  
  // Generate stars on client side only to avoid hydration mismatch
  const [stars, setStars] = useState<Array<{
    id: number;
    x: number;
    y: number;
    size: number;
    opacity: number;
    duration: number;
  }>>([])

  useEffect(() => {
    setStars(generateStars(150))
  }, [])

  const y = useTransform(scrollY, [500, 1500], [0, -30])

  return (
    <section
      id="experience"
      className="py-24 lg:py-32 lg:ml-80 relative overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #0a1628 0%, #0f2847 30%, #1a3a52 60%, #0f2847 100%)",
      }}
    >
      <div className="absolute inset-0">
        {stars.map((star) => (
          <motion.div
            key={star.id}
            className="absolute rounded-full bg-white"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              opacity: star.opacity,
            }}
            animate={{
              opacity: [star.opacity, star.opacity * 0.3, star.opacity],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: star.duration,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <motion.div
        className="absolute top-0 left-0 w-full h-1/2 opacity-30"
        style={{
          background: "radial-gradient(ellipse at 20% 30%, rgba(59, 130, 246, 0.4) 0%, transparent 50%)",
          filter: "blur(60px)",
        }}
        animate={{
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-full h-1/2 opacity-30"
        style={{
          background: "radial-gradient(ellipse at 80% 70%, rgba(37, 99, 235, 0.4) 0%, transparent 50%)",
          filter: "blur(60px)",
        }}
        animate={{
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 opacity-20"
        style={{
          background: "radial-gradient(ellipse at 50% 50%, rgba(14, 165, 233, 0.3) 0%, transparent 60%)",
          filter: "blur(80px)",
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div style={{ y }} className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Experience</h2>
          <p className="text-lg text-[#94a3b8] mb-12">Education, professional experience, and technical skills</p>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left Column - Education & Skills */}
            <div className="space-y-8">
              {/* Education Card */}
              <motion.div
                className="relative"
                initial={{ opacity: 0, x: -100, rotateY: -20 }}
                animate={isInView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#3b82f6] to-[#2563eb] rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000" />
                <div className="relative bg-gradient-to-br from-[#1e293b] to-[#0f172a] rounded-2xl p-8 border border-[#334155] shadow-2xl">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-white rounded-xl">
                      <GraduationCap className="w-7 h-7 text-[#3b82f6]" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">Education</h3>
                  </div>

                  <div className="space-y-6">
                    <motion.div
                      className="relative pl-6 border-l-2 border-[#3b82f6]"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="absolute -left-[9px] top-2 w-4 h-4 bg-[#3b82f6] rounded-full" />
                      <p className="font-semibold text-white mb-1.5">University of Florida</p>
                      <p className="text-sm italic text-[#94a3b8] mb-1.5">Herbert Wertheim College of Engineering</p>
                      <p className="text-sm font-medium text-[#cbd5e1] mb-1.5">
                        Bachelor of Science in Computer Science
                      </p>
                      <p className="text-xs text-[#3b82f6] font-medium">2022 – 2025</p>
                    </motion.div>

                    <motion.div
                      className="relative pl-6 border-l-2 border-[#3b82f6]"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="absolute -left-[9px] top-2 w-4 h-4 bg-[#3b82f6] rounded-full" />
                      <p className="font-semibold text-white mb-1.5">University of Florida</p>
                      <p className="text-sm italic text-[#94a3b8] mb-1.5">
                        William R. Hough Graduate School of Business
                      </p>
                      <p className="text-sm font-medium text-[#cbd5e1] mb-1.5">Master of Science in Finance</p>
                      <p className="text-xs text-[#3b82f6] font-medium">2024 – 2026</p>
                    </motion.div>
                  </div>
                </div>
              </motion.div>

              {/* Technical Skills Card */}
              <motion.div
                className="relative"
                initial={{ opacity: 0, x: -100, rotateY: -20 }}
                animate={isInView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#2563eb] to-[#3b82f6] rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000" />
                <div className="relative bg-gradient-to-br from-[#1e293b] to-[#0f172a] rounded-2xl p-8 border border-[#334155] shadow-2xl">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-white rounded-xl">
                      <Code className="w-7 h-7 text-[#3b82f6]" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">Technical Skills</h3>
                  </div>

                  <div className="space-y-5">
                    {Object.entries(technicalSkills).map(([category, skills], index) => (
                      <motion.div
                        key={category}
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                      >
                        <h4 className="text-xs font-semibold text-[#94a3b8] uppercase tracking-wider mb-3">
                          {category}
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {skills.map((skill) => (
                            <motion.span
                              key={skill}
                              className="text-xs font-medium text-white bg-[#334155] px-3 py-1.5 rounded-lg hover:bg-[#3b82f6] transition-colors cursor-default border border-[#475569]"
                              whileHover={{ scale: 1.08, y: -3 }}
                            >
                              {skill}
                            </motion.span>
                          ))}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            <div>
              <motion.div
                className="relative"
                initial={{ opacity: 0, x: 100, rotateY: 20 }}
                animate={isInView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#3b82f6] to-[#2563eb] rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000" />
                <div className="relative bg-gradient-to-br from-[#1e293b] to-[#0f172a] rounded-2xl p-8 border border-[#334155] shadow-2xl">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-white rounded-xl">
                      <Briefcase className="w-7 h-7 text-[#3b82f6]" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">Professional Experience</h3>
                  </div>

                  <div className="space-y-6">
                    {experiences.map((exp, index) => (
                      <motion.div
                        key={index}
                        className="relative pl-6 border-l-2 border-[#3b82f6]"
                        whileHover={{ x: 5, transition: { duration: 0.3 } }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                      >
                        <div className="absolute -left-[9px] top-2 w-4 h-4 bg-[#3b82f6] rounded-full" />
                        <p className="font-semibold text-white mb-1">{exp.title}</p>
                        <p className="text-sm italic text-[#94a3b8] mb-1">{exp.organization}</p>
                        <p className="text-xs text-[#cbd5e1] mb-1">{exp.location}</p>
                        <p className="text-xs text-[#3b82f6] font-medium">{exp.year}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}