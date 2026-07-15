import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import logoImg from '../../assets/images/logo.png'

export default function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const duration = 1000 // Faster load time (1 second total)
    const intervalTime = 16 // ~60fps updates
    const steps = duration / intervalTime
    const stepVal = 100 / steps

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + stepVal
        if (next >= 100) {
          clearInterval(timer)
          setTimeout(() => {
            if (onComplete) onComplete()
          }, 150)
          return 100
        }
        return next
      })
    }, intervalTime)

    return () => clearInterval(timer)
  }, [onComplete])

  const circumference = 2 * Math.PI * 54 // r=54 -> 339.29
  const strokeDashoffset = circumference - (progress / 100) * circumference

  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#03060b] text-white select-none overflow-hidden font-body">
      
      {/* Background CAD-style fine blueprint grid */}
      <div 
        className="absolute inset-0 bg-blueprint-grid opacity-[0.05] pointer-events-none"
        style={{ maskImage: 'radial-gradient(circle at 50% 50%, black 30%, transparent 80%)' }}
      />

      {/* Cybernetic ambient background glow */}
      <div className="absolute w-[450px] h-[450px] bg-wect-red/5 rounded-full blur-[120px] top-[10%] left-[-10%] pointer-events-none" />
      <div className="absolute w-[500px] h-[500px] bg-wect-blue/5 rounded-full blur-[130px] bottom-[10%] right-[-10%] pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center max-w-sm w-full text-center px-6">
        
        {/* WECT Circular Metrology Dial Loader */}
        <div className="relative w-40 h-40 mb-10 flex items-center justify-center">
          
          {/* External ticks dial image effect */}
          <svg className="absolute w-full h-full transform -rotate-90" viewBox="0 0 120 120">
            {/* Background static tracking track */}
            <circle
              cx="60"
              cy="60"
              r="54"
              className="stroke-white/[0.03] fill-none"
              strokeWidth="1.5"
            />
            {/* Dynamic laser tracking meter */}
            <circle
              cx="60"
              cy="60"
              r="54"
              className="stroke-wect-red-light fill-none transition-all duration-75 ease-out"
              strokeWidth="2"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              style={{
                filter: 'drop-shadow(0 0 4px rgba(168, 31, 61, 0.5))'
              }}
            />
          </svg>

          {/* Precision Tick Ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
            className="absolute w-[116px] h-[116px] rounded-full border border-dashed border-white/10"
          />

          {/* Logo center shield */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 w-28 h-14 bg-white rounded-[14px] flex items-center justify-center p-2 shadow-2xl shadow-wect-blue/20 border border-white/15"
          >
            <img
              src={logoImg}
              alt="WECT Logo"
              className="w-full h-full object-contain select-none logo-img"
            />
          </motion.div>
        </div>

        {/* Brand Reveal & Division Line */}
        <div className="space-y-4 w-full">
          <div>
            <span className="font-display font-black text-2xl tracking-[0.2em] uppercase text-white block">
              WELL EDGE
            </span>
            <span className="font-display font-black text-xs tracking-[0.25em] uppercase text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-wect-red-light block mt-1.5">
              CUTTING TOOLS
            </span>
          </div>

          {/* Industrial laser scan division line */}
          <div className="relative h-[1px] w-12 mx-auto bg-white/10 overflow-hidden">
            <motion.div
              animate={{ left: ['-100%', '100%'] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute top-0 bottom-0 w-1/2 bg-wect-red-light"
            />
          </div>
        </div>

      </div>
    </div>
  )
}
