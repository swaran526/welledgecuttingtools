import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  Car, Plane, Settings, Layers,
  Activity, Hammer, Target, Shield
} from 'lucide-react'

// Import industry images
import ind1 from '../../assets/images/industries_we_serve/ind1.jpg'
import ind2 from '../../assets/images/industries_we_serve/ind2.webp'
import ind3 from '../../assets/images/industries_we_serve/ind3.jpeg'
import ind4 from '../../assets/images/industries_we_serve/ind4.jpeg'
import ind5 from '../../assets/images/industries_we_serve/ind5.avif'
import ind6 from '../../assets/images/industries_we_serve/ind6.jpeg'
import ind7 from '../../assets/images/industries_we_serve/ind7.jpeg'
import ind8 from '../../assets/images/industries_we_serve/ind8.webp'

const industries = [
  {
    name: 'Automotive',
    desc: 'High-feed milling tools and drills optimized for engine block and powertrain component machining.',
    icon: Car,
    accent: '#2F3F91',
    image: ind1
  },
  {
    name: 'Aerospace',
    desc: 'Specialized carbide slotting and end milling tools designed for heat-resistant superalloys and titanium.',
    icon: Plane,
    accent: '#E5213D',
    image: ind2
  },
  {
    name: 'General Engineering',
    desc: 'Versatile and reliable standard cutting tools configured for diverse job-shop milling applications.',
    icon: Settings,
    accent: '#2F3F91',
    image: ind3
  },
  {
    name: 'Die & Mold',
    desc: 'Micro-grain ball nose and rib processing tools for high-precision contouring of hardened steel cavities.',
    icon: Layers,
    accent: '#E5213D',
    image: ind4
  },
  {
    name: 'Medical Industry',
    desc: 'Ultra-precise micro tooling solutions for medical implants, bone screws, and orthopedic instrument milling.',
    icon: Activity,
    accent: '#2F3F91',
    image: ind5
  },
  {
    name: 'Heavy Engineering',
    desc: 'Heavy-duty roughing cutters and indexable drills for robust structural components and large-scale machining.',
    icon: Hammer,
    accent: '#E5213D',
    image: ind6
  },
  {
    name: 'Precision Machining',
    desc: 'Sub-micron tolerance reamers and slot drills configured for close tolerance electronics and parts fabrication.',
    icon: Target,
    accent: '#2F3F91',
    image: ind7
  },
  {
    name: 'Defense & Space',
    desc: 'High-durability tooling engineered for military components, satellite frames, and advanced defense systems.',
    icon: Shield,
    accent: '#E5213D',
    image: ind8
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
          maskImage: 'radial-gradient(circle at 50% 50%, transparent 35%, black 85%)', 
          WebkitMaskImage: 'radial-gradient(circle at 50% 50%, transparent 35%, black 85%)' 
        }} 
      />
      
      {/* Glow spots */}
      <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] bg-wect-blue/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-10%] w-[400px] h-[400px] bg-wect-red/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="section-container relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto space-y-4 mb-14"
        >
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-white leading-none">
            Industries <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-wect-red-light">We Serve</span>
          </h2>
          <div className="relative h-[1.5px] w-12 mx-auto bg-white/10 overflow-hidden my-4">
            <div className="absolute top-0 bottom-0 left-0 w-1/2 bg-wect-red-light" />
          </div>
          <p className="text-white/60 text-sm sm:text-base leading-relaxed max-w-xl mx-auto font-light">
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
                {/* Background Image - brighter for better visibility */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 brightness-[0.45] group-hover:brightness-[0.6] z-0"
                  style={{ backgroundImage: `url(${ind.image})` }}
                />

                {/* Soft Gradient Overlay at the bottom area to keep text readable */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent opacity-95 pointer-events-none z-10" />

                {/* Content Panel */}
                <div className="relative z-10 space-y-2">
                  {/* Icon */}
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center bg-white/10 border border-white/15 transition-all duration-300 group-hover:bg-wect-blue group-hover:border-wect-blue mb-4 shadow-sm"
                  >
                    <Icon size={18} className="text-white" strokeWidth={1.5} />
                  </div>

                  <h3 className="font-display font-black uppercase text-sm tracking-wide text-white group-hover:text-wect-red-light transition-colors">
                    {ind.name}
                  </h3>

                  <p className="text-slate-100 text-[11px] leading-relaxed font-light">
                    {ind.desc}
                  </p>
                </div>

                {/* Hover accent bottom bar */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left z-20"
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
