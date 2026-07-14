import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import logoImg from '../../assets/images/logo.png'

export default function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const duration = 1800 // 1.8 seconds loading simulation
    const intervalTime = 30
    const steps = duration / intervalTime
    const stepVal = 100 / steps
    
    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + stepVal
        if (next >= 100) {
          clearInterval(timer)
          setTimeout(() => {
            if (onComplete) onComplete()
          }, 200)
          return 100
        }
        return next
      })
    }, intervalTime)

    return () => clearInterval(timer)
  }, [onComplete])

  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-slate-950 text-white">
      {/* Background radial glow */}
      <div className="absolute w-[500px] h-[500px] bg-wect-blue/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center max-w-xs w-full text-center px-4">
        
        {/* WECT Logo Preloader Animation */}
        <div className="relative w-28 h-28 mb-8 flex items-center justify-center">
          {/* Outer Rotating Dotted Ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 rounded-full border border-dashed border-wect-red/35"
          />
          {/* Inner Counter-Rotating Ring */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
            className="absolute -inset-2 rounded-full border border-dotted border-wect-blue/30"
          />
          
          {/* Glowing pulse card containing the logo symbol */}
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-16 h-16 bg-white border border-steel-100 rounded-2xl flex items-center justify-center p-2.5 shadow-lg shadow-wect-blue/10"
          >
            <img
              src={logoImg}
              alt="WECT Logo"
              className="w-full h-full object-contain"
            />
          </motion.div>
        </div>

        {/* Brand Name */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col items-center text-center leading-none">
            <span className="font-display font-black text-3xl tracking-wider uppercase text-white">
              Well Edge
            </span>
            <span className="font-display font-black text-3xl tracking-wider uppercase text-wect-red-light mt-1.5">
              Cutting Tools
            </span>
          </div>
        </motion.div>

        {/* Loading Progress Meter */}
        <div className="w-full bg-slate-900 border border-slate-800 rounded-full h-1.5 overflow-hidden mb-3 mt-8 relative" role="progressbar" aria-valuenow={progress} aria-valuemin="0" aria-valuemax="100">
          <motion.div
            className="h-full bg-wect-blue"
            style={{ width: `${progress}%` }}
            transition={{ ease: "easeInOut" }}
          />
        </div>

        {/* Percentage Counter and Status text */}
        <div className="flex items-center justify-between w-full font-mono text-[9px] text-slate-500 uppercase tracking-widest">
          <span>Loading Components</span>
          <span>{Math.round(progress)}%</span>
        </div>
      </div>
    </div>
  )
}
