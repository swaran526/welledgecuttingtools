import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  Car, Plane, Settings, Layers,
  Activity, Hammer, Target, Shield
} from 'lucide-react'

const industries = [
  {
    name: 'Automotive',
    desc: 'High-feed milling tools and drills optimized for engine block and powertrain component machining.',
    icon: Car,
    accent: '#2F3F91',
  },
  {
    name: 'Aerospace',
    desc: 'Specialized carbide slotting and end milling tools designed for heat-resistant superalloys and titanium.',
    icon: Plane,
    accent: '#E5213D',
  },
  {
    name: 'General Engineering',
    desc: 'Versatile and reliable standard cutting tools configured for diverse job-shop milling applications.',
    icon: Settings,
    accent: '#2F3F91',
  },
  {
    name: 'Die & Mold',
    desc: 'Micro-grain ball nose and rib processing tools for high-precision contouring of hardened steel cavities.',
    icon: Layers,
    accent: '#E5213D',
  },
  {
    name: 'Medical Devices',
    desc: 'Ultra-precise micro tooling solutions for medical implants, bone screws, and orthopedic instrument milling.',
    icon: Activity,
    accent: '#2F3F91',
  },
  {
    name: 'Heavy Engineering',
    desc: 'Heavy-duty roughing cutters and indexable drills for robust structural components and large-scale machining.',
    icon: Hammer,
    accent: '#E5213D',
  },
  {
    name: 'Precision Machining',
    desc: 'Sub-micron tolerance reamers and slot drills configured for close tolerance electronics and parts fabrication.',
    icon: Target,
    accent: '#2F3F91',
  },
  {
    name: 'Defense & Space',
    desc: 'High-durability tooling engineered for military components, satellite frames, and advanced defense systems.',
    icon: Shield,
    accent: '#E5213D',
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } }
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } }
}

export default function Industries() {
  const { ref } = useInView({ triggerOnce: true, threshold: 0.05 })

  return (
    <section ref={ref} id="industries" className="bg-transparent text-white section-padding font-body relative overflow-hidden border-t border-white/5">

      <div 
        className="absolute inset-0 bg-blueprint-grid pointer-events-none z-0" 
        style={{ 
          maskImage: 'radial-gradient(circle at 50% 50%, black 20%, transparent 70%)', 
          WebkitMaskImage: 'radial-gradient(circle at 50% 50%, black 20%, transparent 70%)' 
        }} 
      />
      <div className="section-container relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto space-y-4 mb-14"
        >
          <h2 className="font-display font-black text-4xl sm:text-5xl tracking-tight text-white leading-[1.05] mt-2">
            Industries <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-wect-red-light">We Serve</span>
          </h2>
          <p className="text-white/60 text-base leading-relaxed max-w-xl mx-auto font-light">
            Custom cutting parameters and edge geometries engineered for
            the demanding requirements of global manufacturing sectors.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5"
        >
          {industries.map((ind) => {
            const Icon = ind.icon
            return (
              <motion.div
                key={ind.name}
                variants={cardVariants}
                className="group relative bg-white/5 border border-white/10 rounded-2xl p-7 shadow-glass hover:shadow-glass-hover hover:-translate-y-1.5 hover:border-wect-red-light/35 transition-all duration-300 cursor-pointer overflow-hidden text-white"
              >
                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 bg-white/10 border border-white/15 transition-all duration-300 group-hover:bg-wect-blue group-hover:border-wect-blue"
                >
                  <Icon size={22} className="text-white" strokeWidth={1.5} />
                </div>

                <h3 className="font-display font-bold text-base text-white group-hover:text-wect-red-light transition-colors mb-2">
                  {ind.name}
                </h3>

                <p className="text-white/50 text-xs leading-relaxed font-light">
                  {ind.desc}
                </p>

                {/* Hover accent bottom bar */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                  style={{ backgroundColor: ind.accent }}
                />
              </motion.div>
            )
          })}
        </motion.div>

      </div>
    </section>
  )
}
