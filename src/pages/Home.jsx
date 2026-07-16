import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Target, ShieldCheck, Zap } from 'lucide-react'

import Hero from '../components/sections/Hero'

import ToolingPortfolio from '../components/sections/ToolingPortfolio'

import Industries from '../components/sections/Industries'
import BottomCTA from '../components/sections/BottomCTA'

import aboutImg from '../assets/images/our-story/discover_our_stroy/discover_our_story.jpg'

const features = [
  { icon: Target, title: 'Micron Precision', desc: 'CNC grinding to micron-level accuracy for aerospace, medical, and high-precision applications.' },
  { icon: ShieldCheck, title: 'Zero-Defect Quality', desc: '100% optical inspection and rigorous metrology verification before every shipment.' },
  { icon: Zap, title: 'Rapid Turnaround', desc: 'Optimized manufacturing workflows deliver standard and custom tools when you need them.' },
]

export default function Home({ setSelectedProduct }) {
  return (
    <>
      {/* ── 1. Premium Hero ─────────────────────────────────── */}
      <Hero setSelectedProduct={setSelectedProduct} />



      {/* ── 3. About Teaser ──────────────────────────────────── */}
      <section className="py-16 lg:py-20 bg-transparent relative overflow-hidden border-t border-white/5">
        <div className="section-container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

            {/* Left: Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-wect-blue/15 to-wect-red/15 rounded-3xl transform -rotate-2 scale-[1.03]" />
              <img
                src={aboutImg}
                alt="WECT Precision Manufacturing Facility"
                className="relative z-10 rounded-3xl shadow-glass w-full h-auto object-cover border border-white/10"
              />
            </motion.div>

            {/* Right: Copy */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="space-y-7"
            >
              <div>
                <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white leading-[1.05] tracking-tight">
                  Precision Engineering
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-wect-red-light">
                    for Modern Manufacturing
                  </span>
                </h2>
              </div>

              <p className="font-body text-white/60 text-base sm:text-lg leading-relaxed font-light">
                WECT brings decades of specialized experience in manufacturing ultra-high precision
                carbide and cobalt cutting tools. We empower aerospace, automotive, and medical
                industries with tooling that redefines durability and performance.
              </p>

              {/* Mini feature checklist */}
              <div className="grid grid-cols-1 gap-3">
                {features.map(({ icon: Icon, title, desc }) => (
                  <div key={title} className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-wect-blue/40 hover:bg-white/10 hover:shadow-[0_0_20px_rgba(47,63,145,0.35)] transition-all duration-300 group">
                    <div className="w-9 h-9 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center shrink-0 group-hover:bg-wect-blue group-hover:border-wect-blue transition-all duration-300">
                      <Icon size={16} className="text-white group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-white text-sm">{title}</h4>
                      <p className="font-body text-white/50 text-xs leading-relaxed mt-0.5">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Link
                to="/about"
                className="btn-primary inline-flex"
              >
                Discover Our Story
                <ArrowRight size={16} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 4. Product Portfolio ─────────────────────────────── */}
      <ToolingPortfolio setSelectedProduct={setSelectedProduct} />



      {/* ── 6. Industries ────────────────────────────────────── */}
      <Industries />



      {/* ── 9. Bottom CTA ────────────────────────────────────── */}
      <BottomCTA />
    </>
  )
}
