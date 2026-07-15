import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ArrowRight, PhoneCall, Mail, MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function BottomCTA() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section
      ref={ref}
      className="relative overflow-hidden border-t border-white/5"
      style={{ background: 'linear-gradient(135deg, #080E1E 0%, #0D1628 50%, #111D3C 100%)' }}
    >
      <div 
        className="absolute inset-0 bg-blueprint-grid pointer-events-none z-0" 
        style={{ 
          maskImage: 'radial-gradient(circle at 50% 50%, transparent 35%, black 85%)', 
          WebkitMaskImage: 'radial-gradient(circle at 50% 50%, transparent 35%, black 85%)' 
        }} 
      />
      {/* Backgrounds */}
      <div className="absolute top-1/2 left-[15%] -translate-y-1/2 w-[600px] h-[600px] bg-wect-red/8 rounded-full blur-[140px] pointer-events-none z-0" />
      <div className="absolute top-1/2 right-[10%] -translate-y-1/2 w-[400px] h-[400px] bg-wect-blue/20 rounded-full blur-[120px] pointer-events-none z-0" />

      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-wect-red/60 to-transparent" />

      <div className="relative z-10 section-container py-10 lg:py-20">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* Left: Copy */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 space-y-6"
          >
            <h2 className="font-display font-black leading-[1.05] tracking-tight text-white"
              style={{ fontSize: 'clamp(2.2rem, 4vw, 3.8rem)' }}
            >
              Let's Build
              <br />
              Precision <span className="text-wect-red-light">Together.</span>
            </h2>

            <p className="text-white/50 text-sm leading-relaxed max-w-lg font-light">
              Share your machining requirements with our engineering team. We design and manufacture precision carbide, PCD, and special cutting tools tailored to your application, ensuring maximum productivity and longer tool life.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Link
                to="/contact"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="inline-flex items-center justify-center gap-2 bg-wect-red hover:bg-wect-red-dark text-white font-display font-bold tracking-wide text-xs uppercase tracking-widest px-6 py-3 sm:px-8 sm:py-4 rounded-full transition-all duration-300 shadow-md hover:shadow-glow-red transform hover:-translate-y-0.5 group cursor-pointer"
              >
                Request a Quote
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="tel:+919900858297"
                className="btn-outline-white inline-flex cursor-pointer"
              >
                <PhoneCall size={14} className="text-wect-red-light shrink-0" />
                <span>Call Our Office</span>
              </a>
            </div>
          </motion.div>

          {/* Right: Contact info cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-5 grid grid-cols-1 gap-4"
          >
            {[
              {
                icon: PhoneCall,
                label: 'Call Us',
                value: '+91 99008 58297',
                sub: 'Mon–Sat, 9am–6pm IST',
                href: 'tel:+919900858297',
              },
              {
                icon: Mail,
                label: 'Email Us',
                value: 'info@wecttools.com',
                sub: 'Reply within 24 hours',
                href: 'mailto:info@wecttools.com',
              },
              {
                icon: MapPin,
                label: 'Visit Us',
                value: 'WECT – Well Edge Cutting Tools',
                sub: 'Peenya Industrial Area, Bangalore, Karnataka, India',
                href: 'https://maps.google.com/?q=WECT+Well+Edge+Cutting+Tools+Peenya',
              }
            ].map(({ icon: Icon, label, value, sub, href }) => (
              <a
                key={label}
                href={href}
                className="flex items-center gap-3 sm:gap-5 bg-white/5 border border-white/10 rounded-2xl sm:rounded-3xl px-4 sm:px-6 py-4 sm:py-5 hover:bg-white/10 hover:border-wect-red-light/35 transition-all duration-300 group shadow-glass text-white"
              >
                <div className="w-11 h-11 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center shrink-0 group-hover:bg-wect-blue transition-colors">
                  <Icon size={18} className="text-white" />
                </div>
                <div>
                  <div className="font-mono text-[9px] font-bold text-wect-red-light tracking-widest uppercase">{label}</div>
                  <div className="font-display font-bold text-white group-hover:text-wect-red-light transition-colors mt-0.5">{value}</div>
                  <div className="font-body text-[11px] text-white/40 mt-0.5 font-light">{sub}</div>
                </div>
              </a>
            ))}
          </motion.div>

        </div>
      </div>

      {/* Bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-wect-red/40 to-transparent" />
    </section>
  )
}
