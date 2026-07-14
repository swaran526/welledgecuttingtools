import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Award, Globe, Factory, Users } from 'lucide-react'

const stats = [
  { icon: Factory, value: 25, suffix: '+', label: 'Years of Manufacturing', sublabel: 'Excellence since 1999' },
  { icon: Globe, value: 40, suffix: '+', label: 'Countries Served', sublabel: 'Global distribution' },
  { icon: Award, value: 500, suffix: '+', label: 'Products in Portfolio', sublabel: 'Cutting tool solutions' },
  { icon: Users, value: 200, suffix: '+', label: 'Global Clients', sublabel: 'Trusted worldwide' },
]

function AnimatedCount({ to, suffix, duration = 1800, inView }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) return
    let start = 0
    const step = duration / to
    const timer = setInterval(() => {
      start += 1
      setCount(start)
      if (start >= to) { clearInterval(timer); setCount(to) }
    }, step)
    return () => clearInterval(timer)
  }, [inView, to, duration])

  return <span>{count}{suffix}</span>
}

export default function StatsBar() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="relative bg-transparent border-y border-white/5 overflow-hidden">

      <div 
        className="absolute inset-0 bg-blueprint-grid pointer-events-none z-0" 
        style={{ 
          maskImage: 'radial-gradient(circle at 50% 50%, black 20%, transparent 70%)', 
          WebkitMaskImage: 'radial-gradient(circle at 50% 50%, black 20%, transparent 70%)' 
        }} 
      />

      {/* Red accent line at top */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-wect-blue via-wect-red-light to-wect-blue" />

      <div className="relative section-container py-14 lg:py-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative flex flex-col items-center text-center gap-4 p-6 rounded-2xl hover:bg-white/5 transition-colors duration-300 cursor-default text-white"
            >
              {/* Separator line (except last on mobile) */}
              {i < stats.length - 1 && (
                <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-16 bg-white/5" />
              )}

              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center border border-white/15 group-hover:border-wect-blue transition-all duration-300">
                <stat.icon size={20} className="text-white" strokeWidth={1.5} />
              </div>

              {/* Number */}
              <div className="font-display font-black text-4xl lg:text-5xl text-white leading-none tracking-tight">
                {inView ? (
                  <AnimatedCount to={stat.value} suffix={stat.suffix} inView={inView} />
                ) : (
                  <span>0{stat.suffix}</span>
                )}
              </div>

              {/* Labels */}
              <div>
                <div className="font-display font-bold text-white text-sm leading-tight group-hover:text-wect-red-light transition-colors">{stat.label}</div>
                <div className="font-body text-white/40 text-xs mt-1 tracking-wide">{stat.sublabel}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
