import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Marcus Vance',
    role: 'Director of Tooling Operations',
    company: 'Aerospace Engineering Corp',
    initial: 'MV',
    location: 'Germany',
    text: 'WECT custom carbide end mills transformed our titanium slotting cycle times. We achieved a 35% increase in tool life and completely eliminated vibration harmonics.',
    stars: 5,
    metric: '35% longer tool life',
  },
  {
    name: 'Rajesh Mehta',
    role: 'Head of Manufacturing Operations',
    company: 'AutoDrive Systems',
    initial: 'RM',
    location: 'India',
    text: 'The precision reamers and cobalt drills supplied by WECT consistently hold tight tolerances. Their quality control process ensures zero batch-to-batch variations.',
    stars: 5,
    metric: 'Zero batch variation',
  },
  {
    name: 'Elena Rostova',
    role: 'Production Engineer',
    company: 'Precision MedTech Solutions',
    initial: 'ER',
    location: 'Czech Republic',
    text: 'For our micro-milling bone screw operations, WECT provided solutions that hold a sub-micron profile. Their engineers recommend parameters that maximized efficiency.',
    stars: 5,
    metric: '±0.001mm accuracy',
  },
]

export default function Testimonials() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  const prev = () => setIndex((p) => (p - 1 + testimonials.length) % testimonials.length)
  const next = () => setIndex((p) => (p + 1) % testimonials.length)

  return (
    <section id="testimonials" className="bg-transparent section-padding font-body relative overflow-hidden border-t border-white/5">

      <div 
        className="absolute inset-0 bg-blueprint-grid pointer-events-none z-0" 
        style={{ 
          maskImage: 'radial-gradient(circle at 50% 50%, black 20%, transparent 70%)', 
          WebkitMaskImage: 'radial-gradient(circle at 50% 50%, black 20%, transparent 70%)' 
        }} 
      />
      <div className="section-container relative z-10">

        {/* Header */}
        <div className="text-center mb-14 space-y-4">
          <span className="font-mono text-[10px] tracking-[0.2em] text-wect-red-light uppercase font-bold">07 // Client Testimonials</span>
          <h2 className="font-display font-black text-4xl sm:text-5xl tracking-tight text-white leading-[1.05] mt-2">
            Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-wect-red-light">Industry Leaders</span>
          </h2>
          <p className="text-white/60 text-base max-w-md mx-auto font-light">
            Global manufacturers rely on WECT for consistent precision and superior tool performance.
          </p>
        </div>

        {/* Testimonial Block */}
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white/5 border border-white/10 rounded-3xl shadow-glass overflow-hidden text-white">

            {/* Top color bar */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-wect-blue via-wect-red-light to-wect-blue" />

            <div className="p-8 sm:p-12">
              {/* Large quote mark */}
              <div className="absolute top-8 right-8 text-white/5 pointer-events-none select-none">
                <Quote size={72} className="fill-current" />
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                  className="space-y-6"
                >
                  {/* Stars + metric */}
                  <div className="flex items-center justify-between">
                    <div className="flex gap-1">
                      {[...Array(testimonials[index].stars)].map((_, i) => (
                        <Star key={i} size={15} className="fill-wect-red-light text-wect-red-light" />
                      ))}
                    </div>
                    <span className="font-mono text-[10px] tracking-widest text-wect-blue-light bg-white/5 border border-white/10 px-3 py-1 rounded-full">
                      {testimonials[index].metric}
                    </span>
                  </div>

                  {/* Quote text */}
                  <p className="text-white/80 text-base sm:text-lg font-body leading-relaxed italic font-light">
                    "{testimonials[index].text}"
                  </p>

                  {/* Author */}
                  <div className="border-t border-white/5 pt-5 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      {/* Avatar */}
                      <div className="w-11 h-11 rounded-full bg-wect-blue flex items-center justify-center text-white font-display font-black text-sm shrink-0">
                        {testimonials[index].initial}
                      </div>
                      <div>
                        <h4 className="font-display font-bold text-sm text-white">
                          {testimonials[index].name}
                        </h4>
                        <p className="text-white/40 text-[11px] font-mono tracking-wide mt-0.5">
                          {testimonials[index].role} · {testimonials[index].company}
                        </p>
                      </div>
                    </div>
                    <div className="hidden sm:flex items-center gap-1 font-mono text-[10px] text-white/30 tracking-widest">
                      <span className="w-1 h-1 bg-white/30 rounded-full" />
                      {testimonials[index].location}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Controls */}
              <div className="flex items-center justify-between mt-8">
                <div className="flex gap-2">
                  {testimonials.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setIndex(i)}
                      className={`rounded-full transition-all duration-300 cursor-pointer ${i === index ? 'w-6 h-1.5 bg-wect-red-light' : 'w-1.5 h-1.5 bg-white/20 hover:bg-white/40'}`}
                      aria-label={`Testimonial ${i + 1}`}
                    />
                  ))}
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={prev}
                    className="w-10 h-10 rounded-full border border-white/10 bg-white/5 hover:border-wect-blue text-white/60 hover:text-white flex items-center justify-center transition-all cursor-pointer shadow-sm"
                    aria-label="Previous"
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <button
                    onClick={next}
                    className="w-10 h-10 rounded-full border border-white/10 bg-white/5 hover:border-wect-blue text-white/60 hover:text-white flex items-center justify-center transition-all cursor-pointer shadow-sm"
                    aria-label="Next"
                  >
                    <ChevronRight size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
