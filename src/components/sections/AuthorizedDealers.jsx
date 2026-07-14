import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Award, ShieldCheck, Users, Target, Globe, Factory } from 'lucide-react'

// Smooth requestAnimationFrame-based count animation
function AnimatedCount({ to, suffix, duration = 1500, inView }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) return
    let startTimestamp = null
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp
      const progress = Math.min((timestamp - startTimestamp) / duration, 1)
      setCount(Math.floor(progress * to))
      if (progress < 1) {
        requestAnimationFrame(step)
      } else {
        setCount(to)
      }
    }
    requestAnimationFrame(step)
  }, [inView, to, duration])

  // Custom formatting: 20K+ instead of 20000+
  if (to >= 1000 && to % 1000 === 0) {
    return <span>{count / 1000}K{suffix}</span>
  }

  return <span>{count}{suffix}</span>
}

export default function AuthorizedDealers() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
  }

  const stats = [
    { icon: Award, value: 25, suffix: '+', label: 'YEARS', sublabel: 'EXPERIENCE' },
    { icon: Factory, value: 20000, suffix: '+', label: 'TOOLS', sublabel: 'MANUFACTURED' },
    { icon: Users, value: 1000, suffix: '+', label: 'HAPPY', sublabel: 'CUSTOMERS' },
    { icon: Target, value: 98, suffix: '%', label: 'PRECISION', sublabel: 'INSPECTION' },
    { icon: Globe, value: 50, suffix: '+', label: 'COUNTRIES', sublabel: 'SERVED' },
    { icon: ShieldCheck, value: 3, suffix: '', label: 'AUTHORIZED', sublabel: 'BRANDS' }
  ]

  return (
    <section ref={ref} className="relative py-12 bg-transparent border-t border-white/5 overflow-hidden">
      {/* Blueprint grid background */}
      <div 
        className="absolute inset-0 bg-blueprint-grid pointer-events-none z-0" 
        style={{ 
          maskImage: 'radial-gradient(circle at 50% 50%, black 20%, transparent 80%)', 
          WebkitMaskImage: 'radial-gradient(circle at 50% 50%, black 20%, transparent 80%)' 
        }} 
      />

      <div className="relative z-10 section-container">
        
        {/* Stats Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
        >
          {stats.map((stat, i) => {
            const StatIcon = stat.icon
            return (
              <motion.div
                key={stat.label + stat.sublabel}
                variants={itemVariants}
                className="flex flex-col items-center text-center p-4 rounded-xl hover:bg-white/5 transition-all duration-300 group cursor-default text-white"
              >
                {/* Icon inside subtle red circle */}
                <div className="w-10 h-10 rounded-full bg-wect-red/10 border border-wect-red/20 flex items-center justify-center mb-3 group-hover:scale-110 group-hover:border-wect-red-light transition-all duration-300">
                  <StatIcon size={16} className="text-wect-red-light" strokeWidth={2} />
                </div>

                {/* Animated Count Number */}
                <span className="font-display font-black text-2xl sm:text-3xl text-white tracking-tight leading-none">
                  {inView ? (
                    <AnimatedCount to={stat.value} suffix={stat.suffix} inView={inView} />
                  ) : (
                    <span>0{stat.suffix}</span>
                  )}
                </span>

                {/* Subtitle Labels */}
                <span className="font-mono text-[9px] font-bold text-white/50 group-hover:text-wect-red-light tracking-wider uppercase mt-2 transition-colors">
                  {stat.label}
                </span>
                <span className="font-mono text-[8px] text-white/30 tracking-widest uppercase">
                  {stat.sublabel}
                </span>
              </motion.div>
            )
          })}
        </motion.div>

      </div>
    </section>
  )
}
