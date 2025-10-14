"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useEffect, useState } from "react"
import { Github, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react"

const projects = [
  {
    title: "ML Options Pricing Model",
    description: "Machine learning model using XGBoost and GARCH to predict options prices.",
    tags: ["Python", "XGBoost", "GARCH", "Quantitative Finance"],
    github: "https://github.com/devxinvestor/Options",
    image: "/images/financial-options-trading-charts.jpg",
  },
  {
    title: "Alzheimer's Disease Detection",
    description:
      "Deep learning Convolutional Neural Network model for early-stage Alzheimer's detection from MRI scans.",
    tags: ["Python", "CNN", "Deep Learning", "Healthcare AI"],
    github: "https://github.com/devxinvestor/Alzheimer-Detection",
    image: "/images/brain-mri-scan.png",
  },
  {
    title: "Algorithmic Trading Screener",
    description: "Quantitative stock screener using momentum and mean-reversion strategies.",
    tags: ["Python", "Algorithmic Trading", "Backtesting", "Quant"],
    github: "https://github.com/devxinvestor/Algorithmic-Trading",
    image: "/images/stock-market-trading-algorithm.jpg",
  },
  {
    title: "TradEx – Community Trading App",
    description:
      "Full-stack community trading platform built with Svelte, Go, and SQLite. Features real-time market data, social trading, and portfolio tracking.",
    tags: ["Svelte", "Go", "SQLite", "Full-Stack"],
    github: "https://github.com/goldenbergdaniel/SWE-Final-Project",
    image: "/images/trading-app-mobile-interface.jpg",
  },
  {
    title: "Math for Machine Learning",
    description:
      "Comprehensive mathematical foundations for ML implemented in Julia. Covers linear algebra, probability, and optimization algorithms.",
    tags: ["Julia", "Mathematics", "Machine Learning", "Algorithms"],
    github: "https://github.com/devxinvestor/Math-for-Machine-Learning",
    image: "/images/mathematical-equations-machine-learning.jpg",
  },
  {
    title: "AVL Tree",
    description:
      "Self-balancing binary search tree implementation in C++ with insertion, deletion, and rotation operations.",
    tags: ["C++", "Data Structures", "Algorithms"],
    github: "https://github.com/devxinvestor/AVL-Tree",
    image: "/images/bw_avltree.jpg",
  },
  {
    title: "Minesweeper",
    description:
      "Classic Minesweeper game implementation in C++ with recursive flood-fill algorithm and GUI interface.",
    tags: ["C++", "Game Development", "Algorithms"],
    github: "https://github.com/devxinvestor/Minesweeper",
    image: "/images/Minesweeper.jpg",
  },
]

export default function ProjectsSection() {
  const ref = useRef(null)
  const carouselRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const checkScroll = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
    }
  }

  useEffect(() => {
    checkScroll()
    const carousel = carouselRef.current
    if (carousel) {
      carousel.addEventListener("scroll", checkScroll)
      return () => carousel.removeEventListener("scroll", checkScroll)
    }
  }, [])

  const scroll = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const scrollAmount = 400
      const newScrollLeft = carouselRef.current.scrollLeft + (direction === "left" ? -scrollAmount : scrollAmount)
      carouselRef.current.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      })
    }
  }

  return (
    <>
      <section id="projects" className="py-24 lg:py-32 bg-white/90 backdrop-blur-sm lg:ml-80 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-end justify-between mb-12">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#0f172a]">Personal Projects </h2>
                <p className="text-lg text-[#64748b]">Machine Learning, Quantitative Finance, and Data Structures & Algorithms</p>
              </div>

              <div className="hidden md:flex gap-2">
                <button
                  onClick={() => scroll("left")}
                  disabled={!canScrollLeft}
                  className="p-3 rounded-full border border-[#e2e8f0] hover:border-[#3b82f6] hover:bg-[#eff6ff] disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                  aria-label="Scroll left"
                >
                  <ChevronLeft className="w-5 h-5 text-[#3b82f6]" />
                </button>
                <button
                  onClick={() => scroll("right")}
                  disabled={!canScrollRight}
                  className="p-3 rounded-full border border-[#e2e8f0] hover:border-[#3b82f6] hover:bg-[#eff6ff] disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                  aria-label="Scroll right"
                >
                  <ChevronRight className="w-5 h-5 text-[#3b82f6]" />
                </button>
              </div>
            </div>

            <div
              ref={carouselRef}
              className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide"
              style={{
                scrollbarWidth: "none",
                msOverflowStyle: "none",
              }}
            >
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  className="group flex-shrink-0 w-[85vw] sm:w-[350px] md:w-[400px] bg-white rounded-xl border border-[#e2e8f0] overflow-hidden hover:border-[#3b82f6] hover:shadow-2xl transition-all duration-300 snap-start cursor-pointer"
                  initial={{ opacity: 0, x: 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  onClick={() => window.open(project.github, "_blank", "noopener,noreferrer")}
                >
                  <>
                    <div className="aspect-video overflow-hidden bg-[#f1f5f9] relative">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-end p-4 gap-2">
                        <div className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors">
                          <Github className="w-5 h-5 text-[#0f172a]" />
                        </div>
                      </div>
                    </div>

                    <div className="p-6">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-block"
                      >
                        <h3 className="text-xl font-semibold text-[#0f172a] group-hover:text-[#3b82f6] transition-colors mb-2">
                          {project.title}
                        </h3>
                      </a>

                      <p className="text-[#475569] text-sm leading-relaxed mb-4">{project.description}</p>

                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs font-medium text-[#3b82f6] bg-[#eff6ff] px-2.5 py-1 rounded-full hover:bg-[#3b82f6] hover:text-white transition-colors cursor-default"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </>
                </motion.div>
              ))}
            </div>

            <p className="text-center text-sm text-[#64748b] mt-6 md:hidden">Swipe to see more projects →</p>
          </motion.div>
        </div>
      </section>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </>
  )
}