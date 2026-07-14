import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  ShieldCheck, Microscope, Zap, Cpu,
  DollarSign, Truck, Headphones, ClipboardCheck,
  Shield, Compass, Settings, Layers, Crosshair
} from 'lucide-react'
import blueprintProductImg from '../../assets/images/why_us_blueprint_product.jpg'
import toolImg1 from '../../assets/images/hero_11.png'
import toolImg2 from '../../assets/images/reamer_clean.jpg'

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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } }
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } }
}

export default function WhyChooseUs() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 })

  return (
    <section ref={ref} id="why-us" className="bg-transparent text-white py-12 lg:py-16 font-body relative overflow-hidden border-t border-white/5">

      <div
        className="absolute inset-0 bg-blueprint-grid pointer-events-none z-0"
        style={{
          maskImage: 'radial-gradient(circle at 50% 50%, black 20%, transparent 70%)',
          WebkitMaskImage: 'radial-gradient(circle at 50% 50%, black 20%, transparent 70%)'
        }}
      />

      <div className="relative section-container z-10">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-end">

          {/* ── Left column ─────────────────────── */}
          <div className="lg:col-span-4 space-y-5">

            {/* Section heading — matches site theme */}
            <div className="space-y-4">
              <motion.h2
                className="font-display font-black text-3xl sm:text-4xl tracking-tight text-white leading-[1.05]"
                initial={{ opacity: 0, y: 25 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
              >
                The WECT{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-wect-red-light">
                  Difference
                </span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="text-white/60 text-base leading-relaxed max-w-md font-light"
              >
                At Well Edge Cutting Tools (WECT), we design and manufacture high-performance carbide, PCD, and customized cutting tools engineered for exceptional precision, longer tool life, and consistent CNC machining performance.
              </motion.p>
            </div>

            {/* Blueprint showcase card — matches site card theme */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative w-full bg-white/5 border border-white/10 rounded-2xl overflow-hidden shadow-glass group p-6 flex flex-col gap-5"
            >
              {/* Blueprint grid bg */}
              <div className="absolute inset-0 bg-blueprint opacity-50 pointer-events-none" />

              {/* Card heading */}
              <h4 className="font-display font-black text-white text-sm uppercase tracking-wider relative z-10">
                Precision Carbide End Mill
              </h4>

              {/* Three product images — equal thirds, fixed height */}
              <div className="relative w-full grid grid-cols-3 bg-white rounded-xl border border-white/10 overflow-hidden z-10">
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
              <div className="grid grid-cols-4 gap-2 border-t border-white/10 pt-4 relative z-10">
                {[
                  {
                    label: 'Diameter', val: 'ø12 mm',
                    icon: (
                      <svg viewBox="0 0 24 24" width="11" height="11" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <circle cx="12" cy="12" r="9" /><line x1="5" y1="19" x2="19" y2="5" />
                      </svg>
                    ),
                  },
                  { label: 'Tolerance', val: '±0.005mm', icon: <Crosshair size={11} strokeWidth={2.5} /> },
                  { label: 'Hardness',  val: '65 HRC',   icon: <ShieldCheck size={11} strokeWidth={2.5} /> },
                  { label: 'Coating',   val: 'AlTiN PVD',icon: <Layers size={11} strokeWidth={2.5} /> },
                ].map((s) => (
                  <div key={s.label} className="flex flex-col items-center text-center gap-1">
                    <div className="w-7 h-7 rounded-lg bg-white/10 border border-white/15 flex items-center justify-center text-wect-red-light">
                      {s.icon}
                    </div>
                    <span className="font-mono text-white/30 text-[7px] tracking-widest uppercase">{s.label}</span>
                    <div className="font-mono text-white text-[9px] font-bold">{s.val}</div>
                  </div>
                ))}
              </div>

              {/* Features footer */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 border-t border-white/10 pt-3 relative z-10">
                {[
                  { icon: <Crosshair size={9} />, label: 'High Precision' },
                  { icon: <Shield size={9} />,    label: 'Long Tool Life' },
                  { icon: <Compass size={9} />,   label: 'Custom Geometry' },
                  { icon: <Settings size={9} />,  label: 'CNC Optimized' },
                ].map((f) => (
                  <div key={f.label} className="flex items-center gap-1 text-[8px] font-mono tracking-wider text-white/60">
                    <span className="text-wect-red-light">{f.icon}</span>
                    <span>{f.label}</span>
                  </div>
                ))}
              </div>

              {/* Hover bottom accent bar */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-wect-red-light scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </motion.div>
          </div>

          {/* ── Right cards grid — matches Industries card theme ── */}
          <div className="lg:col-span-8">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              className="grid grid-cols-1 sm:grid-cols-2 gap-2"
            >
              {reasons.map((item) => {
                const Icon = item.icon
                return (
                  <motion.div
                    key={item.title}
                    variants={cardVariants}
                    className="group relative bg-white/5 border border-white/10 rounded-lg p-3 shadow-glass hover:shadow-glass-hover hover:-translate-y-0.5 hover:border-wect-red-light/35 transition-all duration-300 cursor-pointer overflow-hidden text-white"
                  >
                    {/* Metric badge */}
                    <div className="absolute top-2 right-2">
                      <span className="font-mono text-[7px] text-white/40 bg-white/5 border border-white/10 px-1 py-0.5 rounded tracking-wider">
                        {item.metric}
                      </span>
                    </div>

                    {/* Icon */}
                    <div className="w-7 h-7 rounded-md flex items-center justify-center mb-2 bg-white/10 border border-white/15 transition-all duration-300 group-hover:bg-wect-blue group-hover:border-wect-blue">
                      <Icon size={14} className="text-white" strokeWidth={1.5} />
                    </div>

                    <h3 className="font-display font-bold text-[12px] text-white group-hover:text-wect-red-light transition-colors mb-1 pr-10">
                      {item.title}
                    </h3>

                    <p className="text-white/45 text-[10px] leading-relaxed font-light">
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
  )
}
