import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Target, Cpu, Gauge,
  Workflow,
  Milestone, Activity, ShieldCheck, Orbit, Factory, Eye, Award
} from 'lucide-react'

// Background story slideshow images
const storyImages = [
  '/images/hero/hero_2.png',
  '/images/hero/hero_5.png',
  '/images/hero/hero_7.png',
  '/images/hero/hero_9.png'
]

export default function About() {
  const [hoveredIndex, setHoveredIndex] = useState(null)
  const [storyIndex, setStoryIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setStoryIndex((prev) => (prev + 1) % storyImages.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  const timelineData = [
    {
      year: "2014",
      title: "FOUNDING",
      desc: "WECT was established with a focus on manufacturing high-precision industrial tooling solutions.",
      icon: <Milestone size={16} className="text-white" />,
      align: "bottom",
      color: "#2F3F91",
      textColor: "text-white"
    },
    {
      year: "2017",
      title: "FACILITY UPGRADE",
      desc: "Commissioned a state-of-the-art CNC grinding plant with high-precision measuring and monitoring equipment.",
      icon: <Activity size={16} className="text-white" />,
      align: "top",
      color: "#A81F3D",
      textColor: "text-white"
    },
    {
      year: "2020",
      title: "PORTFOLIO EXPANSION",
      desc: "Introduced advanced carbide and cobalt end mills, reamers, and custom-designed form tooling.",
      icon: <Factory size={16} className="text-white" />,
      align: "bottom",
      color: "#2F3F91",
      textColor: "text-white"
    },
    {
      year: "2023",
      title: "GLOBAL STANDARDS",
      desc: "Achieved international quality system certifications, boosting exports to global CNC milling partners.",
      icon: <Award size={16} className="text-white" />,
      align: "top",
      color: "#A81F3D",
      textColor: "text-white"
    },
    {
      year: "2026",
      title: "FUTURE DIRECTIVES",
      desc: "Deploying intelligent automated design systems to engineer the next generation of high-efficiency machining tools.",
      icon: <Orbit size={16} className="text-white" />,
      align: "bottom",
      color: "#2F3F91",
      textColor: "text-white"
    }
  ]

  const valuesData = [
    {
      title: "Quality Commitment",
      desc: "Every cutting tool undergoes comprehensive dimensional and structural inspections with micron-level tolerance testing.",
      icon: <ShieldCheck size={20} />
    },
    {
      title: "Engineering Excellence",
      desc: "Utilizing state-of-the-art multi-axis CNC grinding systems to deliver optimum edge hardness and chip evacuation geometries.",
      icon: <Workflow size={20} />
    },
    {
      title: "Precision Integrity",
      desc: "Metallurgical consistency and advanced coating solutions configured to maximize tool life under high feed conditions.",
      icon: <Cpu size={20} />
    },
    {
      title: "Customer Support",
      desc: "Providing dedicated application engineering support and quick-turn custom tooling configuration.",
      icon: <Gauge size={20} />
    }
  ]

  const headerContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 }
    }
  }

  const headerItemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  }

  const gridContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.1 }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }

  return (
    <section id="about" className="bg-transparent text-white section-padding font-body relative overflow-hidden border-t border-white/5">

      <div 
        className="absolute inset-0 bg-blueprint-grid pointer-events-none z-0" 
        style={{ 
          maskImage: 'radial-gradient(circle at 50% 50%, black 20%, transparent 70%)', 
          WebkitMaskImage: 'radial-gradient(circle at 50% 50%, black 20%, transparent 70%)' 
        }} 
      />

      {/* =========================================================
          SECTION 1: COMPANY OVERVIEW
          ========================================================= */}
      <div className="max-w-[92rem] mx-auto px-6 mb-24 relative z-10">

        {/* Section Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
          variants={headerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <span className="font-mono text-[10px] tracking-[0.25em] text-wect-red-light uppercase font-bold">01 // CORPORATE PROFILE</span>
          <motion.h2
            variants={headerItemVariants}
            className="font-display font-black uppercase text-3xl sm:text-4xl lg:text-5xl tracking-tight text-white leading-none mb-4"
          >
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-wect-red-light">WECT</span>
          </motion.h2>

          <motion.p
            variants={headerItemVariants}
            className="text-white/60 text-sm sm:text-base font-light max-w-2xl mx-auto leading-relaxed border-t border-white/5 pt-4"
          >
            Empowering modern CNC machining and industrial manufacturing through metallurgical expertise, precise edge engineering, and custom rotary tool design.
          </motion.p>
        </motion.div>

        {/* Content Layout Grid */}
        <div className="grid lg:grid-cols-12 gap-12 items-center">

          {/* Left Block - Narrative */}
          <motion.div
            className="lg:col-span-6 space-y-6 text-center lg:text-left"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={headerContainerVariants}
          >
            <motion.h3
              variants={headerItemVariants}
              className="font-display font-black uppercase text-2xl sm:text-3xl tracking-wide text-white"
            >
              Engineering <span className="text-wect-red-light">The Edge.</span>
            </motion.h3>

            <motion.div
              variants={headerItemVariants}
              className="space-y-4 text-white/60 text-sm sm:text-base leading-relaxed text-left font-light"
            >
              <p>
                WECT (Well Edge Cutting Tools) has established a reputation for manufacturing premium, high-performance cutting tools. Equipped with advanced multi-axis CNC grinding facilities, we engineering cobalt and carbide tool matrices engineered to meet the highest precision machining requirements.
              </p>
              <p>
                Our dedication to metallurgical excellence, advanced physical coatings, and strict dimensional tolerances translates to longer tool life, reduced cycle times, and exceptional surface finish quality for our B2B customers.
              </p>
              <p>
                From standard carbide end mills and custom slot drills to high-speed reamers and custom milling cutters, WECT tools power key industrial sectors including aerospace, automotive, die and mold, medical engineering, and precision tooling.
              </p>
            </motion.div>
          </motion.div>

          {/* Right Block - Slideshow Card */}
          <motion.div
            className="lg:col-span-6 relative group"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          >
            <div className="relative w-full aspect-[4/3] bg-white/5 border border-white/10 rounded-3xl overflow-hidden shadow-glass z-10 transition-all duration-300 group-hover:border-wect-red-light/30">
              <AnimatePresence mode="popLayout">
                <motion.img
                  key={storyIndex}
                  src={storyImages[storyIndex]}
                  alt="WECT high-tech manufacturing plant"
                  className="absolute inset-0 w-full h-full object-cover brightness-[0.55] group-hover:brightness-[0.45] transition-all duration-500"
                  initial={{ opacity: 0, scale: 1.03 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                />
              </AnimatePresence>

              <div className="absolute inset-0 p-8 flex flex-col justify-end z-10 pointer-events-none">
                <div className="space-y-2 max-w-md">
                  <p className="text-white font-display font-black uppercase text-lg sm:text-xl tracking-wide leading-tight">
                    Premium Carbide Metallurgy
                  </p>
                  <p className="text-white/50 text-xs leading-relaxed">
                    Designed, ground, and inspected to deliver superior surface finishes and stable cutting action at extreme feed velocities.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* =========================================================
          SECTION 2: TIMELINE (Horizontal Scroll)
          ========================================================= */}
      <div className="bg-white/5 border-y border-white/5 py-16 mb-24 relative overflow-hidden z-10">
        <div className="max-w-[92rem] mx-auto px-6 relative z-10">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="font-mono text-[10px] tracking-[0.2em] text-wect-red-light uppercase font-bold">TIMELINE</span>
            <h3 className="text-2xl sm:text-3xl font-display font-black uppercase text-white tracking-tight mt-1">
              WECT <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-wect-red-light">Evolution</span>
            </h3>
          </div>

          {/* Timeline scroll container */}
          <div className="overflow-x-auto pb-6 pt-4 scrollbar-thin">
            <div className="flex gap-8 min-w-[1000px] justify-between px-4">
              {timelineData.map((node, idx) => (
                <motion.div
                  key={idx}
                  className="flex-1 bg-white/5 border border-white/10 p-6 rounded-2xl shadow-glass relative group hover:border-wect-red-light transition-all duration-300 flex flex-col text-white"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center text-white shadow-sm"
                      style={{ backgroundColor: node.color }}
                    >
                      {node.icon}
                    </div>
                    <span className="font-display font-black text-2xl text-white">
                      {node.year}
                    </span>
                  </div>
                  <h4 className="text-sm font-display font-bold uppercase text-white mb-2 group-hover:text-wect-red-light transition-colors">
                    {node.title}
                  </h4>
                  <p className="text-xs text-white/50 leading-relaxed font-light">
                    {node.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================
          SECTION 3: MISSION, VISION & PILLARS
          ========================================================= */}
      <div className="max-w-[92rem] mx-auto px-6 relative z-10">

        {/* Section divider label */}
        <div className="text-center mb-16">
          <span className="font-mono text-[10px] tracking-[0.25em] text-wect-red-light uppercase font-bold">02 // STRATEGIC FRAMEWORK</span>
          <h3 className="text-2xl sm:text-3xl font-display font-black uppercase text-white mt-1">
            Our Mission, Vision & Excellence Pillars
          </h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch mb-12">

          {/* Mission & Vision Columns */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Mission Card */}
            <motion.div
              className="bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col justify-center flex-1 shadow-glass hover:border-wect-blue transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-wect-blue text-white rounded-xl flex items-center justify-center shadow-md">
                  <Target size={20} />
                </div>
                <h4 className="font-display font-black text-lg uppercase text-white">Our Mission</h4>
              </div>
              <p className="text-sm text-white/60 leading-relaxed font-light">
                To engineer premium precision cutting tool solutions that empower industrial manufacturing partners to achieve maximum efficiency, metallurgical reliability, and manufacturing excellence.
              </p>
            </motion.div>

            {/* Vision Card */}
            <motion.div
              className="bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col justify-center flex-1 shadow-glass hover:border-wect-red-light transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-wect-red-light text-white rounded-xl flex items-center justify-center shadow-md">
                  <Eye size={20} />
                </div>
                <h4 className="font-display font-black text-lg uppercase text-white">Our Vision</h4>
              </div>
              <p className="text-sm text-white/60 leading-relaxed font-light">
                To be the global benchmark for high-performance CNC tooling, recognized for our technological innovation, custom engineering capabilities, and commitment to precision tooling design.
              </p>
            </motion.div>
          </div>

          {/* Pillars Columns (Values, Commitments) */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
              variants={gridContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
            >
              {valuesData.map((val, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className={`bg-white/5 border p-6 rounded-2xl min-h-[180px] flex flex-col justify-between shadow-glass cursor-pointer transition-all duration-300 ${hoveredIndex === index ? 'border-wect-blue shadow-md transform -translate-y-1' : 'border-white/10'
                    }`}
                >
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${hoveredIndex === index ? 'bg-wect-blue text-white shadow-md' : 'bg-white/5 text-wect-blue-light'
                    }`}>
                    {val.icon}
                  </div>
                  <div className="mt-4 space-y-2 text-white">
                    <h5 className="font-display font-bold text-sm uppercase tracking-wide">
                      {val.title}
                    </h5>
                    <p className="text-xs text-white/50 leading-relaxed font-light">
                      {val.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}
