import { motion } from 'framer-motion'
import { MapPin, Phone, Clock, Navigation } from 'lucide-react'

const headerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 }
  }
}

const headerItemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  }
}

export default function FindUs() {
  return (
    <section
      id="find-us"
      className="bg-transparent text-white py-24 font-body relative overflow-hidden border-t border-white/5"
    >
      <div 
        className="absolute inset-0 bg-blueprint-grid pointer-events-none z-0" 
        style={{ 
          maskImage: 'radial-gradient(circle at 50% 50%, black 20%, transparent 70%)', 
          WebkitMaskImage: 'radial-gradient(circle at 50% 50%, black 20%, transparent 70%)' 
        }} 
      />
      <div className="max-w-[92rem] mx-auto px-6 relative z-10">

        {/* Section Header */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16 space-y-4"
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2
            variants={headerItemVariants}
            className="font-display font-black uppercase text-3xl sm:text-4xl tracking-tight text-white leading-none"
          >
            Find Us <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-wect-red-light">Here</span>
          </motion.h2>
          <motion.p
            variants={headerItemVariants}
            className="text-white/60 text-sm font-light leading-relaxed border-t border-white/5 pt-4"
          >
            Visit our state-of-the-art facility in Bangalore. We engineer, manufacture, and distribute tools from India's tech hub.
          </motion.p>
        </motion.div>

        {/* Map + Info Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch">

          {/* Map (col-span-8) */}
          <motion.div
            className="lg:col-span-8 relative w-full overflow-hidden border border-white/10 rounded-3xl shadow-glass group min-h-[460px] bg-white/5"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Google Maps iframe — dark theme via CSS filter */}
            <iframe
              title="WECT Factory Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.037130096238!2d77.52554761482274!3d12.971598790856018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3d84a7e937d1%3A0xea8fc7beee095a5f!2sPeenya%20Industrial%20Area%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1655000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              className="absolute inset-0 w-full h-full opacity-95 group-hover:opacity-100 transition-all duration-500"
              style={{
                border: 0,
                filter: 'invert(92%) hue-rotate(180deg) saturate(0.6) brightness(0.85)',
              }}
            />

            {/* Floating address badge */}
            <motion.div
              className="absolute bottom-4 left-4 bg-wect-navy/95 border border-white/10 px-4 py-3 rounded-2xl backdrop-blur-sm shadow-glass max-w-xs z-20 transition-colors duration-300 text-white"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-wect-red-light mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-display font-bold uppercase text-[10px] tracking-widest text-white mb-0.5">
                    WECT Tooling Plant
                  </p>
                  <p className="text-white/50 text-xs leading-relaxed font-light">
                    Peenya Industrial Area, Bangalore, Karnataka, India
                  </p>
                </div>
              </div>
            </motion.div>

            {/* "Open in Maps" button */}
            <motion.a
              href="https://maps.google.com/?q=Peenya+Industrial+Area+Bangalore"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute top-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5 bg-wect-blue text-white font-mono font-bold text-[10px] tracking-widest uppercase px-4 py-2.5 rounded-full shadow-lg hover:bg-wect-red transition-colors duration-200 cursor-pointer"
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Navigation size={11} />
              Open in Maps
            </motion.a>
          </motion.div>

          {/* Info Panel (col-span-4) */}
          <motion.div
            className="lg:col-span-4 flex flex-col gap-6"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          >
            {/* Address Card */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-6 shadow-glass hover:shadow-glass-hover transition-all duration-300 flex-1 flex flex-col justify-center text-white">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/10 text-white flex items-center justify-center flex-shrink-0 shadow-sm border border-white/15">
                  <MapPin size={18} />
                </div>
                <div className="space-y-1">
                  <p className="font-mono text-[9px] font-bold uppercase tracking-widest text-wect-red-light">Address</p>
                  <h3 className="font-display font-bold uppercase text-base text-white">
                    Registered Office
                  </h3>
                  <p className="text-white/50 text-xs leading-relaxed font-light">
                    WECT – Well Edge Cutting Tools<br />
                    Peenya Industrial Area, Bangalore<br />
                    Karnataka, India
                  </p>
                </div>
              </div>
            </div>

            {/* Working Hours Card */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-6 shadow-glass hover:shadow-glass-hover transition-all duration-300 flex-1 flex flex-col justify-center text-white">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/10 text-white flex items-center justify-center flex-shrink-0 shadow-sm border border-white/15">
                  <Clock size={18} />
                </div>
                <div className="space-y-1">
                  <p className="font-mono text-[9px] font-bold uppercase tracking-widest text-wect-red-light">Open Hours</p>
                  <h3 className="font-display font-bold uppercase text-base text-white">
                    Operation Shift
                  </h3>
                  <p className="text-white/50 text-xs leading-relaxed font-light">
                    Mon – Sat: 9:00 AM – 6:30 PM<br />
                    <span className="text-white/35 font-semibold">Sunday: Closed</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Phone Card */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-6 shadow-glass hover:shadow-glass-hover transition-all duration-300 flex-1 flex flex-col justify-center text-white">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/10 text-white flex items-center justify-center flex-shrink-0 shadow-sm border border-white/15">
                  <Phone size={18} />
                </div>
                <div className="space-y-1 flex-1">
                  <p className="font-mono text-[9px] font-bold uppercase tracking-widest text-wect-red-light">Phone</p>
                  <a
                    href="tel:+919900858297"
                    className="block font-display font-black text-lg text-wect-blue-light hover:text-wect-red-light transition-colors duration-300 tracking-tight"
                  >
                    +91 99008 58297
                  </a>
                </div>
              </div>
            </div>

          </motion.div>
        </div>

      </div>
    </section>
  )
}
