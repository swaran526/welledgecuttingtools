import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Target, Cpu, Gauge, Workflow, Milestone, Activity, ShieldCheck, Orbit,
  Factory, Eye, Award, Microscope, Zap, DollarSign, Truck, Headphones,
  ClipboardCheck, Shield, Compass, Settings, Layers, Crosshair
} from 'lucide-react'

import blueprintProductImg from '../../assets/images/why_us_blueprint_product.jpg'
import toolImg1 from '../../assets/images/hero_11.png'
import toolImg2 from '../../assets/images/reamer_clean.jpg'

// About section slideshow — 7 images
import storyImg1 from '../../assets/images/our_story_1.jpeg'
import storyImg2 from '../../assets/images/our_story_2.png'
import storyImg3 from '../../assets/images/our_story_3.jpeg'
import storyImg4 from '../../assets/images/our_story_4.jpeg'
import storyImg5 from '../../assets/images/hero_2.png'
import storyImg6 from '../../assets/images/hero_8.png'
import storyImg7 from '../../assets/images/hero_9.png'

const storyImages = [
  storyImg1,
  storyImg2,
  storyImg3,
  storyImg4,
  storyImg5,
  storyImg6,
  storyImg7,
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
    metric: '3× Longer',
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

const timelineData = [
  {
    year: '2021',
    title: 'FOUNDING',
    desc: 'WECT was established with a focus on manufacturing high-precision industrial tooling solutions.',
    color: '#2E3F7A',
    textColor: 'text-white',
    x: 180,
    y: 260,
    align: 'top'
  },
  {
    year: '2022',
    title: 'FACILITY UPGRADE',
    desc: 'Commissioned a state-of-the-art CNC grinding plant with high-precision measuring and monitoring equipment.',
    color: '#E5213D',
    textColor: 'text-white',
    x: 410,
    y: 140,
    align: 'bottom'
  },
  {
    year: '2023',
    title: 'PORTFOLIO EXPANSION',
    desc: 'Introduced advanced carbide and cobalt end mills, reamers, and custom-designed form tooling.',
    color: '#2E3F7A',
    textColor: 'text-white',
    x: 640,
    y: 260,
    align: 'top'
  },
  {
    year: '2024',
    title: 'ROBOTIC AUTOMATION',
    desc: 'Integrated advanced robotic autoloaders to scale production efficiency and ensure absolute batch consistency.',
    color: '#E5213D',
    textColor: 'text-white',
    x: 870,
    y: 140,
    align: 'bottom'
  },
  {
    year: '2025',
    title: 'GLOBAL EXPORTS',
    desc: 'Achieved ISO 9001:2015 certification and expanded export networks to major precision machining hubs globally.',
    color: '#2E3F7A',
    textColor: 'text-white',
    x: 1100,
    y: 260,
    align: 'top'
  },
  {
    year: 'Present',
    title: 'FUTURE DIRECTIVES',
    desc: 'Deploying AI-driven custom geometry design systems to engineer the next generation of high-efficiency machining tools.',
    color: '#E5213D',
    textColor: 'text-white',
    x: 1330,
    y: 140,
    align: 'bottom'
  },
]

const valuesData = [
  {
    title: 'Quality Commitment',
    desc: 'Every cutting tool undergoes comprehensive dimensional and structural inspections with micron-level tolerance testing.',
    icon: <ShieldCheck size={20} />,
  },
  {
    title: 'Engineering Excellence',
    desc: 'Utilizing state-of-the-art multi-axis CNC grinding systems to deliver optimum edge hardness and chip evacuation geometries.',
    icon: <Workflow size={20} />,
  },
  {
    title: 'Precision Integrity',
    desc: 'Metallurgical consistency and advanced coating solutions configured to maximize tool life under high feed conditions.',
    icon: <Cpu size={20} />,
  },
  {
    title: 'Customer Support',
    desc: 'Providing dedicated application engineering support and quick-turn custom tooling configuration.',
    icon: <Gauge size={20} />,
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
}

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
}

const cardStagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.07 } },
}

const timelinePathVariants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: { duration: 1.8, ease: "easeInOut" }
  }
}

const timelineCalloutVariants = (idx, isTop) => ({
  hidden: { opacity: 0, y: isTop ? 20 : -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 15, delay: idx * 0.15 + 0.3 }
  }
})

const timelineCircleVariants = (idx) => ({
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { type: "spring", stiffness: 200, damping: 12, delay: idx * 0.15 }
  }
})

export default function About() {
  const [hoveredIndex, setHoveredIndex] = useState(null)
  const [storyIndex, setStoryIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setStoryIndex((prev) => (prev + 1) % storyImages.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <>
      {/* ── SECTION 1: COMPANY OVERVIEW ───────────────────────── */}
      <section
        id="about"
        className="relative w-full bg-wect-navy text-white pt-12 pb-10 lg:pt-14 lg:pb-12 overflow-hidden border-t border-white/5"
      >
        {/* Ambient glow — matches Hero */}
        <div className="absolute bottom-[20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-wect-red/5 blur-[120px] pointer-events-none" />
        <div className="absolute top-[20%] left-[-10%] w-[450px] h-[450px] rounded-full bg-wect-blue/10 blur-[130px] pointer-events-none" />

        {/* Blueprint grid — matches Hero opacity */}
        <div
          className="absolute inset-0 bg-blueprint-grid opacity-[0.06] pointer-events-none"
          style={{ maskImage: 'radial-gradient(circle at 50% 50%, transparent 35%, black 85%)' }}
        />

        <div className="relative z-10 section-container">

          {/* Section header */}
          <motion.div
            className="text-center max-w-3xl mx-auto mb-10 space-y-3"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.h2
              variants={fadeUp}
              className="font-display font-black uppercase text-3xl sm:text-4xl lg:text-5xl tracking-tight text-white leading-none"
            >
              About{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-wect-red-light">
                WECT
              </span>
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-white/60 text-sm sm:text-base font-light max-w-2xl mx-auto leading-relaxed border-t border-white/5 pt-4"
            >
              Engineering precision cutting solutions trusted by manufacturers where accuracy, performance, and reliability matter most.
            </motion.p>
          </motion.div>

          {/* Two-column layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">

            {/* Left — narrative + stats */}
            <motion.div
              className="lg:col-span-6 flex flex-col justify-between space-y-4"
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <motion.div variants={fadeUp} className="space-y-1">
                {/* Decorative left accent bar */}
                <div className="flex items-start gap-4">
                  <div className="w-[3px] h-full min-h-[60px] bg-gradient-to-b from-wect-red-light to-wect-blue rounded-full shrink-0 mt-1" />
                  <div>
                    <h3 className="font-display font-black uppercase leading-none tracking-tight text-white text-2xl sm:text-3xl">
                      Made for{' '}
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-wect-red-light to-rose-400">
                        the Micron.
                      </span>
                    </h3>
                    <p className="font-display font-black uppercase text-lg sm:text-xl tracking-wide text-white/40 mt-1">
                      Trusted on the Machine.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                variants={fadeUp}
                className="space-y-4 text-white/60 text-sm sm:text-base leading-relaxed font-light"
              >
                <p>
                  Well Edge Cutting Tools (WECT) is a Bangalore-based manufacturer of premium solid carbide, cobalt, PCD cutting tools, and PCBN inserts. Powered by advanced multi-axis CNC grinding centers and precision metrology systems, every product is manufactured to micron-level tolerances, ensuring exceptional accuracy, consistency, and dependable performance across every production batch.
                </p>
                <p>
                  We combine ultra-fine grain tungsten carbide substrates with advanced PVD and CVD coating technologies to engineer cutting solutions that deliver longer tool life, higher machining efficiency, superior surface finishes, and reliable performance in demanding industrial applications.
                </p>
              </motion.div>

              {/* Key stats — same style as Hero spec checklist */}
              <motion.div
                variants={fadeUp}
                className="grid grid-cols-2 sm:grid-cols-4 gap-2 border-y border-white/5 py-4"
              >
                {[
                  { value: '2021', label: 'Established' },
                  { value: '100+', label: 'Precision Tools' },
                  { value: '20+', label: 'Industries Served' },
                  { value: 'ISO', label: '9001:2015 Certified' },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="group bg-white/[0.03] border border-white/5 rounded-2xl px-4 py-3 text-center hover:border-wect-red-light/30 transition-colors duration-300"
                  >
                    <div className="font-display font-black text-xl text-white group-hover:text-wect-red-light transition-colors duration-300 leading-none">
                      {stat.value}
                    </div>
                    <div className="font-mono text-[9px] tracking-widest text-white/40 uppercase mt-1.5">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right — slideshow image card */}
            <motion.div
              className="lg:col-span-6 relative group"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            >
              {/* Rotated glow shadow — matches Hero image card */}
              <div className="absolute inset-0 bg-gradient-to-tr from-wect-blue/20 to-wect-red/20 rounded-2xl transform rotate-2 scale-[1.02] blur-sm pointer-events-none" />

              <div className="relative w-full h-full min-h-[300px] bg-white/5 border border-white/10 rounded-2xl overflow-hidden shadow-glass z-10 transition-all duration-300 hover:border-wect-red-light/30">
                <AnimatePresence mode="popLayout">
                  <motion.img
                    key={storyIndex}
                    src={storyImages[storyIndex]}
                    alt="WECT precision manufacturing"
                    className="absolute inset-0 w-full h-full object-cover brightness-[0.55] group-hover:brightness-[0.45] transition-all duration-500"
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.97 }}
                    transition={{ duration: 0.8, ease: 'easeInOut' }}
                  />
                </AnimatePresence>

                {/* Caption overlay */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end z-10 pointer-events-none">
                  <div className="space-y-1">
                    <span className="font-mono text-[8px] tracking-widest text-wect-red-light uppercase">
                      PRECISION ENGINEERING
                    </span>
                    <p className="text-white font-display font-black uppercase text-base sm:text-lg tracking-wide leading-tight">
                      Micron-Level Manufacturing Excellence
                    </p>
                    <p className="text-white/50 text-xs leading-relaxed max-w-sm">
                      Every cutting tool is precision-ground, coated, and quality-inspected to deliver exceptional accuracy, extended tool life, and consistent machining performance.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── SECTION 2: TIMELINE ───────────────────────────────── */}
      <section className="relative w-full bg-wect-navy text-white py-4 lg:py-6 overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 bg-blueprint-grid opacity-[0.04] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-wect-blue/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative z-10 section-container">

          {/* Header */}
          <motion.div
            className="text-center max-w-xl mx-auto mb-8 sm:mb-12"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div variants={fadeUp} className="flex items-center justify-center gap-3 mb-2">
              <span className="h-px w-8 bg-gradient-to-r from-transparent to-wect-red-light" />
              <span className="font-mono text-[9px] tracking-[0.3em] text-wect-red-light uppercase font-bold">TIMELINE</span>
              <span className="h-px w-8 bg-gradient-to-l from-transparent to-wect-red-light" />
            </motion.div>
            <motion.h3
              variants={fadeUp}
              className="text-2xl sm:text-3xl lg:text-4xl font-display font-black uppercase text-white tracking-tight"
            >
              WECT{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-wect-red-light">Evolution</span>
            </motion.h3>
          </motion.div>

          {/* Horizontal Drag/Scroll Canvas Layout */}
          <div className="overflow-x-auto pb-6 pt-6 scrollbar-thin scrollbar-thumb-wect-blue/20 scrollbar-track-transparent">
            <div className="relative min-w-[1200px] lg:min-w-0 lg:w-full h-[340px] px-12">

              {/* Dynamic SVG Wave Connector Line */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1500 400" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="track-grad" x1="0%" y1="50%" x2="100%" y2="50%">
                    <stop offset="0%" stopColor="#2E3F7A" />
                    <stop offset="50%" stopColor="#C41230" />
                    <stop offset="100%" stopColor="#E5213D" />
                  </linearGradient>

                  {/* Arrowhead marker for the track */}
                  <marker id="arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="8" markerHeight="8" orient="auto">
                    <path d="M 0 1 L 10 5 L 0 9 z" fill="#E5213D" />
                  </marker>
                </defs>

                {/* Thick background track trail */}
                <path
                  d="M 80 260 L 180 260 L 410 140 L 640 260 L 870 140 L 1100 260 L 1330 140 L 1430 140"
                  fill="none"
                  stroke="#1E293B"
                  strokeWidth="20"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  opacity="0.4"
                />

                {/* Animated colored core track trail */}
                <motion.path
                  d="M 80 260 L 180 260 L 410 140 L 640 260 L 870 140 L 1100 260 L 1330 140 L 1430 140"
                  fill="none"
                  stroke="url(#track-grad)"
                  strokeWidth="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  markerEnd="url(#arrow)"
                  variants={timelinePathVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                />
              </svg>

              {/* Timeline Nodes & Callouts */}
              <div className="absolute inset-0 w-full h-full pointer-events-none">
                {timelineData.map((node, idx) => {
                  const isTop = node.align === "top";

                  return (
                    <div
                      key={idx}
                      className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-20 group pointer-events-none"
                      style={{ left: `${(node.x / 1500) * 100}%`, top: `${(node.y / 400) * 100}%` }}
                    >

                      {/* Animated Floating Text Callout Panel (aligned above or below the node) */}
                      <motion.div
                        className={`absolute w-72 h-[110px] flex flex-col justify-start items-center text-center pointer-events-auto ${
                          isTop ? 'bottom-[86px]' : 'top-[86px]'
                        }`}
                        variants={timelineCalloutVariants(idx, isTop)}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                      >
                        <div className="space-y-1.5 w-full text-center">
                          <span className="font-display font-black text-2xl tracking-wider block transition-transform duration-300 group-hover:scale-105"
                            style={{ color: node.color }}
                          >
                            {node.year}
                          </span>
                          <h4 className="text-xs font-display font-black uppercase tracking-widest text-white block transition-colors duration-300 group-hover:text-wect-red-light">
                            {node.title}
                          </h4>
                          <p className="text-white/50 text-[11px] font-medium leading-relaxed max-w-[230px] mx-auto block transition-colors duration-300 group-hover:text-white/80">
                            {node.desc}
                          </p>
                        </div>
                      </motion.div>

                      {/* Circle Node */}
                      <motion.div
                        className="w-14 h-14 rounded-full border-[6px] border-white/5 flex items-center justify-center shadow-2xl relative cursor-pointer transition-all duration-300 group-hover:scale-110 group-hover:border-wect-red-light bg-wect-navy z-30 pointer-events-auto"
                        style={{ borderColor: `${node.color}50`, backgroundColor: '#080E1E' }}
                        variants={timelineCircleVariants(idx)}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                      >
                        <span className={`font-display font-black text-sm tracking-tight ${node.textColor}`}>
                          {String(idx + 1).padStart(2, '0')}
                        </span>
                      </motion.div>

                    </div>
                  );
                })}
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ── SECTION 3: MISSION, VISION & PILLARS ─────────────── */}
      <section className="relative w-full bg-wect-navy text-white pt-12 pb-10 lg:pt-14 lg:pb-12 overflow-hidden border-t border-white/5">
        {/* Ambient glows */}
        <div className="absolute top-[10%] right-[-8%] w-[400px] h-[400px] rounded-full bg-wect-red/6 blur-[110px] pointer-events-none" />
        <div className="absolute bottom-[10%] left-[-8%] w-[350px] h-[350px] rounded-full bg-wect-blue/8 blur-[100px] pointer-events-none" />
        <div
          className="absolute inset-0 bg-blueprint-grid opacity-[0.05] pointer-events-none"
          style={{ maskImage: 'radial-gradient(circle at 50% 50%, transparent 35%, black 85%)', WebkitMaskImage: 'radial-gradient(circle at 50% 50%, transparent 35%, black 85%)' }}
        />

        <div className="relative z-10 section-container">

          {/* Section Header */}
          <motion.div
            className="text-center mb-10 space-y-2"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div variants={fadeUp} className="flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-gradient-to-r from-transparent to-wect-red-light" />
              <span className="font-mono text-[9px] tracking-[0.3em] text-wect-red-light uppercase font-bold">OUR VALUES</span>
              <span className="h-px w-8 bg-gradient-to-l from-transparent to-wect-red-light" />
            </motion.div>
            <motion.h3
              variants={fadeUp}
              className="text-2xl sm:text-3xl lg:text-4xl font-display font-black uppercase text-white leading-tight"
            >
              Mission, Vision &{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-wect-red-light">Excellence</span>
            </motion.h3>
            <motion.p variants={fadeUp} className="text-white/50 text-sm font-light max-w-xl mx-auto leading-relaxed">
              The guiding principles that drive our engineering culture and define every tool we manufacture.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

            {/* Mission & Vision — Left Column */}
            <div className="lg:col-span-5 flex flex-col gap-5">

              {/* Mission Card */}
              <motion.div
                className="relative bg-white/[0.025] border border-white/[0.04] rounded-2xl p-6 flex flex-col flex-1 overflow-hidden group cursor-default"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -3, transition: { duration: 0.25 } }}
              >
                {/* Top border accent line */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-wect-blue via-wect-blue/60 to-transparent rounded-t-2xl" />
                {/* Corner glow */}
                <div className="absolute top-0 left-0 w-24 h-24 bg-wect-blue/8 blur-2xl rounded-full -translate-x-6 -translate-y-6 group-hover:bg-wect-blue/15 transition-all duration-500 pointer-events-none" />

                <div className="flex items-center gap-3 mb-4 relative z-10">
                  <motion.div
                    className="w-11 h-11 bg-gradient-to-br from-wect-blue to-wect-blue/60 text-white rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(47,63,145,0.35)] shrink-0"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: 'spring', stiffness: 400 }}
                  >
                    <Target size={18} />
                  </motion.div>
                  <div>
                    <p className="font-mono text-[8px] tracking-[0.2em] text-wect-blue uppercase font-bold mb-0.5">OBJECTIVE</p>
                    <h4 className="font-display font-black text-base uppercase text-white tracking-wide leading-none">Our Mission</h4>
                  </div>
                </div>

                <div className="h-px bg-gradient-to-r from-wect-blue/30 to-transparent mb-4 relative z-10" />

                <p className="text-sm text-white/65 leading-relaxed font-light relative z-10">
                  To engineer premium precision cutting tool solutions that empower industrial
                  manufacturing partners to achieve maximum efficiency, metallurgical reliability, and
                  manufacturing excellence.
                </p>
              </motion.div>

              {/* Vision Card */}
              <motion.div
                className="relative bg-white/[0.025] border border-white/[0.04] rounded-2xl p-6 flex flex-col flex-1 overflow-hidden group cursor-default"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -3, transition: { duration: 0.25 } }}
              >
                {/* Top border accent line */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-wect-red via-wect-red-light/70 to-transparent rounded-t-2xl" />
                {/* Corner glow */}
                <div className="absolute top-0 left-0 w-24 h-24 bg-wect-red/8 blur-2xl rounded-full -translate-x-6 -translate-y-6 group-hover:bg-wect-red/15 transition-all duration-500 pointer-events-none" />

                <div className="flex items-center gap-3 mb-4 relative z-10">
                  <motion.div
                    className="w-11 h-11 bg-gradient-to-br from-wect-red to-wect-red-light text-white rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(168,31,61,0.35)] shrink-0"
                    whileHover={{ scale: 1.1, rotate: -5 }}
                    transition={{ type: 'spring', stiffness: 400 }}
                  >
                    <Eye size={18} />
                  </motion.div>
                  <div>
                    <p className="font-mono text-[8px] tracking-[0.2em] text-wect-red-light uppercase font-bold mb-0.5">LONG-TERM GOAL</p>
                    <h4 className="font-display font-black text-base uppercase text-white tracking-wide leading-none">Our Vision</h4>
                  </div>
                </div>

                <div className="h-px bg-gradient-to-r from-wect-red/30 to-transparent mb-4 relative z-10" />

                <p className="text-sm text-white/65 leading-relaxed font-light relative z-10">
                  To be the global benchmark for high-performance CNC tooling, recognized for our
                  technological innovation, custom engineering capabilities, and commitment to
                  precision tooling design.
                </p>
              </motion.div>
            </div>

            {/* Excellence Pillars — Right Column */}
            <div className="lg:col-span-7">
              <motion.div
                className="grid grid-cols-1 gap-3.5"
                variants={cardStagger}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
              >
                {valuesData.map((val, index) => {
                  const accentColors = [
                    { border: 'hover:border-wect-blue/50', iconBg: 'bg-gradient-to-br from-wect-blue to-wect-blue/60', iconGlow: 'shadow-[0_0_16px_rgba(47,63,145,0.3)]', dot: 'bg-wect-blue', label: 'text-wect-blue' },
                    { border: 'hover:border-wect-red-light/50', iconBg: 'bg-gradient-to-br from-wect-red to-wect-red-light', iconGlow: 'shadow-[0_0_16px_rgba(229,33,61,0.3)]', dot: 'bg-wect-red-light', label: 'text-wect-red-light' },
                    { border: 'hover:border-wect-blue/50', iconBg: 'bg-gradient-to-br from-wect-blue to-wect-blue/60', iconGlow: 'shadow-[0_0_16px_rgba(47,63,145,0.3)]', dot: 'bg-wect-blue', label: 'text-wect-blue' },
                    { border: 'hover:border-wect-red-light/50', iconBg: 'bg-gradient-to-br from-wect-red to-wect-red-light', iconGlow: 'shadow-[0_0_16px_rgba(229,33,61,0.3)]', dot: 'bg-wect-red-light', label: 'text-wect-red-light' },
                  ]
                  const accent = accentColors[index % 4]

                  return (
                    <motion.div
                      key={index}
                      variants={fadeUp}
                      onMouseEnter={() => setHoveredIndex(index)}
                      onMouseLeave={() => setHoveredIndex(null)}
                      className={`relative bg-white/[0.025] border border-white/[0.04] p-5 rounded-2xl flex items-start gap-4 cursor-default overflow-hidden transition-all duration-300 ${accent.border} ${hoveredIndex === index ? 'shadow-[0_4px_24px_rgba(0,0,0,0.3)]' : ''}`}
                      whileHover={{ y: -2, transition: { duration: 0.2 } }}
                    >
                      {/* Subtle glow bg on hover */}
                      <div className={`absolute inset-0 opacity-0 transition-opacity duration-500 ${hoveredIndex === index ? 'opacity-100' : ''} bg-gradient-to-br from-white/[0.015] to-transparent pointer-events-none`} />

                      {/* Icon Box */}
                      <motion.div
                        className={`w-11 h-11 rounded-xl flex items-center justify-center text-white shrink-0 ${accent.iconBg} ${accent.iconGlow} transition-all duration-300`}
                        animate={hoveredIndex === index ? { scale: 1.1 } : { scale: 1 }}
                        transition={{ type: 'spring', stiffness: 400 }}
                      >
                        {val.icon}
                      </motion.div>

                      {/* Text */}
                      <div className="space-y-1 relative z-10">
                        <div className="flex items-center gap-2">
                          <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${accent.dot}`} />
                          <h5 className="font-display font-black text-sm uppercase tracking-wider text-white leading-none">
                            {val.title}
                          </h5>
                        </div>
                        <p className="text-[12px] text-white/55 leading-relaxed font-light pl-3.5">{val.desc}</p>
                      </div>

                      {/* Animated right chevron accent on hover */}
                      <div className={`ml-auto shrink-0 transition-all duration-300 ${hoveredIndex === index ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-1'}`}>
                        <div className={`w-5 h-5 rounded-full border ${accent.border} flex items-center justify-center`}>
                          <svg width="8" height="8" viewBox="0 0 8 8" fill="none"><path d="M3 1.5L5.5 4L3 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-white/60" /></svg>
                        </div>
                      </div>
                    </motion.div>
                  )
                })}
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* ── SECTION 4: WHY CHOOSE WECT ───────────────────────── */}
      <section
        id="why-us"
        className="relative w-full bg-wect-navy text-white pt-8 pb-8 lg:pt-10 lg:pb-10 overflow-hidden border-t border-white/5"
      >
        {/* Ambient glows */}
        <div className="absolute bottom-[10%] left-[-8%] w-[500px] h-[500px] rounded-full bg-wect-blue/8 blur-[130px] pointer-events-none" />
        <div className="absolute top-[20%] right-[-8%] w-[350px] h-[350px] rounded-full bg-wect-red/6 blur-[110px] pointer-events-none" />
        <div
          className="absolute inset-0 bg-blueprint-grid opacity-[0.05] pointer-events-none"
          style={{ maskImage: 'radial-gradient(circle at 50% 50%, transparent 35%, black 85%)', WebkitMaskImage: 'radial-gradient(circle at 50% 50%, transparent 35%, black 85%)' }}
        />

        <div className="relative z-10 section-container">

          {/* Section Header */}
          <motion.div
            className="text-center mb-10 space-y-2"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div variants={fadeUp} className="flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-gradient-to-r from-transparent to-wect-blue" />
              <span className="font-mono text-[9px] tracking-[0.3em] text-wect-blue uppercase font-bold">THE WECT ADVANTAGE</span>
              <span className="h-px w-8 bg-gradient-to-l from-transparent to-wect-blue" />
            </motion.div>
            <motion.h3
              variants={fadeUp}
              className="text-2xl sm:text-3xl lg:text-4xl font-display font-black uppercase text-white leading-tight"
            >
              Why CNC Machinists{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-wect-red-light to-white">Choose WECT</span>
            </motion.h3>
            <motion.p variants={fadeUp} className="text-white/50 text-sm font-light max-w-xl mx-auto leading-relaxed">
              Eight reasons why precision engineers across industries trust our tools for critical machining operations.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">

            {/* Left — Brand CTA card */}
            <div className="lg:col-span-4 flex">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="relative w-full bg-white/[0.025] border border-white/[0.04] rounded-3xl overflow-hidden group p-7 flex flex-col justify-between gap-8 hover:border-wect-red-light/20 transition-all duration-500 h-full"
                whileHover={{ y: -4, transition: { duration: 0.3 } }}
              >
                {/* Top gradient accent */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-wect-blue via-wect-red-light/60 to-transparent rounded-t-3xl" />
                {/* Corner glow */}
                <div className="absolute top-0 left-0 w-32 h-32 bg-wect-blue/6 blur-3xl rounded-full -translate-x-8 -translate-y-8 group-hover:bg-wect-blue/12 transition-all duration-700 pointer-events-none" />
                <div className="absolute bottom-0 right-0 w-28 h-28 bg-wect-red/5 blur-3xl rounded-full translate-x-6 translate-y-6 pointer-events-none" />

                {/* Top block — Brand Statement */}
                <div className="relative z-10 space-y-4 flex flex-col flex-1">
                  <div className="flex items-center gap-2">
                    <span className="h-px w-5 bg-wect-red-light/60" />
                    <span className="font-mono text-[10px] tracking-[0.2em] text-wect-red-light uppercase font-bold">WECT TOOLS</span>
                  </div>

                  <div className="space-y-3">
                    <h3 className="font-display font-black text-xl sm:text-2xl uppercase text-white leading-tight tracking-tight">
                      Built for{' '}
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-wect-blue to-wect-blue/70">Precision</span>
                      <br />
                      Trusted for{' '}
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-wect-red-light to-white">Performance</span>
                    </h3>
                    <p className="text-white/60 text-sm leading-relaxed font-light">
                      Every tool we manufacture is held to the highest dimensional tolerances — from substrate selection to final coating and inspection.
                    </p>
                  </div>

                  {/* Single Product Image — fills remaining space */}
                  <div className="group/img relative flex-1 min-h-[140px] rounded-xl overflow-hidden border border-white/[0.06] bg-white">
                    <img
                      src={blueprintProductImg}
                      alt="WECT Precision Tools"
                      className="absolute inset-0 w-full h-full object-contain p-4 group-hover/img:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-end px-3 pb-2">
                      <span className="font-mono text-[8px] text-white/90 uppercase tracking-wider">Precision Milling Cutters</span>
                    </div>
                  </div>
                </div>

                {/* Bottom block — Custom Tool CTA */}
                <div className="relative z-10 space-y-4 border-t border-white/[0.06] pt-6">
                  <div className="space-y-1">
                    <p className="font-mono text-[10px] tracking-[0.2em] text-wect-red-light uppercase font-bold">CUSTOM ENGINEERING</p>
                    <h4 className="font-display font-black text-base uppercase text-white tracking-wide leading-tight">
                      Need a Custom Tool?
                    </h4>
                    <p className="text-white/60 text-sm leading-relaxed font-light">
                      Request engineering consultation for bespoke geometries, custom coatings, and batch manufacturing.
                    </p>
                  </div>

                  <motion.a
                    href="/contact"
                    className="flex items-center justify-center gap-2 w-full py-3 px-5 bg-gradient-to-r from-wect-red to-wect-red-light text-white font-display font-bold text-xs uppercase tracking-widest rounded-xl shadow-[0_0_20px_rgba(168,31,61,0.25)] hover:shadow-[0_0_30px_rgba(229,33,61,0.4)] transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Request a Quote
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2.5 6h7M6.5 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </motion.a>
                </div>

                {/* Bottom scanning accent */}
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-wect-red-light via-wect-blue/60 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </motion.div>
            </div>


            {/* Right — reasons cards grid */}
            <div className="lg:col-span-8">
              <motion.div
                variants={cardStagger}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4"
              >
                {reasons.map((item, idx) => {
                  const Icon = item.icon
                  const isBlue = idx % 2 === 0
                  return (
                    <motion.div
                      key={item.title}
                      variants={fadeUp}
                      className="group relative bg-white/[0.025] border border-white/[0.04] rounded-2xl p-5 overflow-hidden text-white cursor-default"
                      whileHover={{ y: -3, transition: { duration: 0.25 } }}
                    >
                      {/* Hover background tint */}
                      <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none bg-gradient-to-br ${isBlue ? 'from-wect-blue/5' : 'from-wect-red/5'} to-transparent`} />

                      {/* Top left colored border on hover */}
                      <div className={`absolute top-0 left-0 right-0 h-[2px] rounded-t-2xl bg-gradient-to-r scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left ${isBlue ? 'from-wect-blue to-transparent' : 'from-wect-red-light to-transparent'}`} />

                      {/* Metric badge */}
                      <div className="absolute top-4 right-4">
                        <span className={`font-mono text-[8px] border px-2 py-0.5 rounded tracking-wider transition-all duration-300 ${isBlue
                          ? 'text-white/60 bg-white/[0.05] border-white/15 group-hover:border-white/30 group-hover:text-white'
                          : 'text-wect-red-light/80 bg-wect-red/5 border-wect-red/20 group-hover:border-wect-red-light/50 group-hover:text-wect-red-light'
                          }`}>
                          {item.metric}
                        </span>
                      </div>

                      {/* Icon */}
                      <motion.div
                        className={`w-9 h-9 rounded-xl flex items-center justify-center mb-4 text-white transition-all duration-300 shadow-sm ${isBlue
                          ? 'bg-gradient-to-br from-wect-blue to-wect-blue/60 shadow-[0_0_12px_rgba(47,63,145,0.25)] group-hover:shadow-[0_0_20px_rgba(47,63,145,0.45)]'
                          : 'bg-gradient-to-br from-wect-red to-wect-red-light shadow-[0_0_12px_rgba(168,31,61,0.25)] group-hover:shadow-[0_0_20px_rgba(229,33,61,0.45)]'
                          }`}
                        animate={{ scale: 1 }}
                        whileHover={{ scale: 1.12, rotate: isBlue ? 6 : -6 }}
                        transition={{ type: 'spring', stiffness: 400 }}
                      >
                        <Icon size={15} strokeWidth={2} />
                      </motion.div>

                      <h5 className={`font-display font-black text-sm text-white mb-1 uppercase tracking-wide pr-16 transition-colors duration-300 ${isBlue ? 'group-hover:text-wect-blue' : 'group-hover:text-wect-red-light'}`}>
                        {item.title}
                      </h5>
                      <p className="text-white/60 text-xs leading-relaxed font-light">{item.desc}</p>

                      {/* Bottom scan accent */}
                      <div className={`absolute bottom-0 left-0 right-0 h-[1.5px] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left ${isBlue ? 'bg-wect-blue' : 'bg-wect-red-light'}`} />
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