import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  Target, Cpu, Gauge, Workflow, Milestone, Activity, ShieldCheck, Orbit, 
  Factory, Eye, Award, Microscope, Zap, DollarSign, Truck, Headphones, 
  ClipboardCheck, Shield, Compass, Settings, Layers, Crosshair
} from 'lucide-react'

import blueprintProductImg from '../../assets/images/why_us_blueprint_product.jpg'
import toolImg1 from '../../assets/images/hero_11.png'
import toolImg2 from '../../assets/images/reamer_clean.jpg'

// Background story slideshow images
const storyImages = [
  '/images/hero/hero_2.png',
  '/images/hero/hero_5.png',
  '/images/hero/hero_7.png',
  '/images/hero/hero_9.png'
]

const reasons = [
  {
    icon: Microscope,
    title: 'High Precision',
    desc: 'Multi-axis CNC grinding achieves micron-level accuracy and strict dimensional consistency across every batch.',
    metric: '±0.001mm',
  },
  {
    icon: ShieldCheck,
    title: 'Long Tool Life',
    desc: 'Advanced PVD coatings and heat treatment maximize cutting edge durability in demanding applications.',
    metric: '3x Longer',
  },
  {
    icon: Cpu,
    title: 'Premium Carbide',
    desc: 'Ultra-fine grain tungsten carbide substrates deliver optimal hardness, toughness, and wear resistance.',
    metric: 'Ultra-Fine',
  },
  {
    icon: Zap,
    title: 'Advanced Manufacturing',
    desc: 'Robotic loading and modern automated grinding deliver consistent quality at scale.',
    metric: '100% CNC',
  },
  {
    icon: DollarSign,
    title: 'Competitive Pricing',
    desc: 'Efficient production planning enables premium tool performance at highly competitive B2B rates.',
    metric: 'Best Value',
  },
  {
    icon: Truck,
    title: 'Fast Delivery',
    desc: 'Optimized stock levels and streamlined logistics guarantee rapid dispatch and minimal downtime.',
    metric: '24–48 hrs',
  },
  {
    icon: Headphones,
    title: 'Technical Support',
    desc: 'Experienced application engineers assist with custom parameters and tooling adjustments for your machines.',
    metric: 'Expert Team',
  },
  {
    icon: ClipboardCheck,
    title: '100% Inspection',
    desc: 'Every tool undergoes optical inspection and geometric verification before packaging and dispatch.',
    metric: 'Zero Defects',
  },
]

const reasonsContainerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } }
}

const reasonsCardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } }
}

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
    <>
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

    {/* =========================================================
        SECTION 4: WHY CHOOSE US
        ========================================================= */}
    <section id="why-us" className="bg-transparent text-white section-padding font-body relative overflow-hidden border-t border-white/5">
      <div
        className="absolute inset-0 bg-blueprint-grid pointer-events-none z-0"
        style={{
          maskImage: 'radial-gradient(circle at 50% 50%, black 20%, transparent 70%)',
          WebkitMaskImage: 'radial-gradient(circle at 50% 50%, black 20%, transparent 70%)'
        }}
      />

      <div className="relative section-container z-10">
        <div className="text-center mb-16">
          <span className="font-mono text-[10px] tracking-[0.25em] text-wect-red-light uppercase font-bold">03 // THE WECT ADVANTAGE</span>
          <h3 className="text-2xl sm:text-3xl font-display font-black uppercase text-white mt-1">
            Why CNC Machinists Choose WECT Tools
          </h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
          {/* Left: Interactive blueprint showcase card */}
          <div className="lg:col-span-4 flex">
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative w-full bg-white/5 border border-white/10 rounded-3xl overflow-hidden shadow-glass group p-8 flex flex-col justify-between"
            >
              {/* Blueprint grid bg */}
              <div className="absolute inset-0 bg-blueprint opacity-50 pointer-events-none" />

              <div className="relative z-10 space-y-5">
                <h4 className="font-display font-black text-white text-sm uppercase tracking-wider">
                  Precision Tool Inspection
                </h4>

                {/* Three product images — equal thirds, fixed height */}
                <div className="relative w-full grid grid-cols-3 bg-white rounded-xl border border-white/10 overflow-hidden">
                  <div className="flex items-center justify-center p-3 border-r border-gray-100">
                    <img
                      src={blueprintProductImg}
                      alt="WECT Indexable Milling Cutters"
                      className="h-[70px] w-full object-contain group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="flex items-center justify-center p-3 border-r border-gray-100">
                    <img
                      src={toolImg1}
                      alt="WECT End Mill"
                      className="h-[70px] w-full object-contain group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="flex items-center justify-center p-3">
                    <img
                      src={toolImg2}
                      alt="WECT Reamer"
                      className="h-[70px] w-full object-contain group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>

                {/* Specs grid — 4 columns */}
                <div className="grid grid-cols-4 gap-2 border-t border-white/10 pt-4">
                  {[
                    {
                      label: 'Diameter', val: 'ø12 mm',
                      icon: (
                        <svg viewBox="0 0 24 24" width="11" height="11" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <circle cx="12" cy="12" r="9" /><line x1="5" y1="19" x2="19" y2="5" />
                        </svg>
                      ),
                    },
                    { label: 'Tolerance', val: '±0.002mm', icon: <Crosshair size={11} strokeWidth={2.5} /> },
                    { label: 'Hardness',  val: '65 HRC',   icon: <ShieldCheck size={11} strokeWidth={2.5} /> },
                    { label: 'Coating',   val: 'AlTiN PVD',icon: <Layers size={11} strokeWidth={2.5} /> },
                  ].map((s, idx) => (
                    <div key={idx} className="flex flex-col items-center text-center gap-1">
                      <div className="w-7 h-7 rounded-lg bg-white/10 border border-white/15 flex items-center justify-center text-wect-red-light">
                        {s.icon}
                      </div>
                      <span className="font-mono text-white/30 text-[7px] tracking-widest uppercase">{s.label}</span>
                      <div className="font-mono text-white text-[9px] font-bold">{s.val}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Features footer */}
              <div className="grid grid-cols-2 gap-2 border-t border-white/10 pt-4 mt-6 relative z-10">
                {[
                  { icon: <Crosshair size={9} />, label: 'High Precision' },
                  { icon: <Shield size={9} />,    label: 'Long Tool Life' },
                  { icon: <Compass size={9} />,   label: 'Custom Geometry' },
                  { icon: <Settings size={9} />,  label: 'CNC Optimized' },
                ].map((f, idx) => (
                  <div key={idx} className="flex items-center gap-1.5 text-[8px] font-mono tracking-wider text-white/60">
                    <span className="text-wect-red-light">{f.icon}</span>
                    <span>{f.label}</span>
                  </div>
                ))}
              </div>

              {/* Hover bottom accent bar */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-wect-red-light scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </motion.div>
          </div>

          {/* Right: Grid of reasons cards */}
          <div className="lg:col-span-8">
            <motion.div
              variants={reasonsContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {reasons.map((item) => {
                const Icon = item.icon
                return (
                  <motion.div
                    key={item.title}
                    variants={reasonsCardVariants}
                    className="group relative bg-white/5 border border-white/10 rounded-2xl p-5 shadow-glass hover:border-wect-red-light/35 hover:-translate-y-0.5 transition-all duration-300 cursor-pointer overflow-hidden text-white"
                  >
                    {/* Metric badge */}
                    <div className="absolute top-4 right-4">
                      <span className="font-mono text-[8px] text-white/40 bg-white/5 border border-white/10 px-2 py-0.5 rounded tracking-wider">
                        {item.metric}
                      </span>
                    </div>

                    {/* Icon */}
                    <div className="w-8 h-8 rounded-xl flex items-center justify-center mb-4 bg-white/5 border border-white/10 text-wect-red-light group-hover:bg-wect-red group-hover:text-white group-hover:border-wect-red-light transition-all duration-300 shadow-sm">
                      <Icon size={14} className="text-white" strokeWidth={1.5} />
                    </div>

                    <h3 className="font-display font-bold text-sm text-white group-hover:text-wect-red-light transition-colors mb-1 pr-16">
                      {item.title}
                    </h3>

                    <p className="text-white/45 text-xs leading-relaxed font-light">
                      {item.desc}
                    </p>

                    {/* Hover accent bottom bar */}
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-wect-red-light scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  </motion.div>
                )
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  </>
)
}
