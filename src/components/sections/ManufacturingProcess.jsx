import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const steps = [
  {
    phase: 'Design',
    title: 'Tool Design & Engineering',
    desc: 'Bespoke geometric designs modeled in advanced CAD/CAM software to optimize cutting angles, chip flow channels, and tooling stabilization structures.',
    number: '01',
  },
  {
    phase: 'Manufacturing',
    title: 'CNC Raw Machining',
    desc: 'Precision cutting and pre-shaping of cobalt or carbide substrate blanks — setting the primary profile for subsequent grinding phases.',
    number: '02',
  },
  {
    phase: 'Heat Treatment',
    title: 'Thermal Hardening',
    desc: 'Controlled thermal cycles to relieve internal stresses, refine grain structure, and achieve maximum metallurgical toughness.',
    number: '03',
  },
  {
    phase: 'Grinding',
    title: '5-Axis Precision Grinding',
    desc: 'Sub-micron multi-axis grinding to hone cutting edges, establish relief angles, and finalize target geometries with absolute accuracy.',
    number: '04',
  },
  {
    phase: 'Inspection',
    title: 'Metrology & Quality Check',
    desc: 'Rigorous inspection using non-contact optical comparators and digital metrology to verify helix parameters and surface finishes.',
    number: '05',
  },
  {
    phase: 'Dispatch',
    title: 'Secure Packing & Dispatch',
    desc: 'Protective polymer coatings and precision packaging with full batch traceability before global dispatch.',
    number: '06',
  },
]

function Step({ step, index, totalSteps }) {
  const isEven = index % 2 === 0

  return (
    <div className={`relative flex items-stretch gap-0 flex-row-reverse sm:${isEven ? 'flex-row' : 'flex-row-reverse'}`}>

      {/* Card */}
      <motion.div
        className={`flex-1 pb-8 relative group pl-6 pr-0 sm:pl-0 sm:pr-0 ${isEven ? 'sm:pr-10' : 'sm:pl-10'}`}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 shadow-glass hover:shadow-glass-hover hover:border-wect-red-light/35 transition-all duration-300 relative overflow-hidden text-white">
          {/* Top accent */}
          <div className={`absolute top-0 left-0 right-0 h-0.5 ${index % 2 === 0 ? 'bg-wect-blue' : 'bg-wect-red-light'}`} />

          <div className="space-y-2">
            <span className="font-mono text-[9px] font-bold tracking-widest text-white/40 block uppercase">
              Phase {step.number} // {step.phase}
            </span>
            <h3 className="font-display font-bold text-base text-white group-hover:text-wect-red-light transition-colors leading-tight">
              {step.title}
            </h3>
            <p className="text-white/50 text-xs leading-relaxed font-light">
              {step.desc}
            </p>
          </div>
        </div>
      </motion.div>

      {/* Center Spine */}
      <div className="flex flex-col items-center relative z-10 w-12 md:w-14">
        <motion.div
          className="w-9 h-9 bg-wect-blue border-4 border-wect-navy flex items-center justify-center flex-shrink-0 relative cursor-pointer shadow-lg rounded-full"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.5, type: 'spring', stiffness: 90 }}
          whileHover={{ scale: 1.1 }}
        >
          <span className="font-display font-black text-white text-[10px] block">
            {step.number}
          </span>
        </motion.div>

        {index < totalSteps - 1 && (
          <motion.div
            className="w-px flex-1 bg-gradient-to-b from-wect-blue/45 to-white/15 mt-3 mb-1"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            style={{ transformOrigin: 'top' }}
          />
        )}
      </div>

      {/* Spacer */}
      <div className="flex-1 hidden sm:block" />
    </div>
  )
}

export default function ManufacturingProcess() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 })

  return (
    <section id="manufacturing" ref={ref} className="bg-transparent text-white section-padding font-body relative overflow-hidden border-t border-white/5">

      <div 
        className="absolute inset-0 bg-blueprint-grid pointer-events-none z-0" 
        style={{ 
          maskImage: 'radial-gradient(circle at 50% 50%, black 20%, transparent 70%)', 
          WebkitMaskImage: 'radial-gradient(circle at 50% 50%, black 20%, transparent 70%)' 
        }} 
      />
      <div className="relative section-container z-10">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="font-mono text-[10px] tracking-[0.2em] text-wect-red-light uppercase font-bold">05 // Manufacturing Excellence</span>
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="font-display font-black text-4xl sm:text-5xl tracking-tight text-white leading-[1.05] mt-1"
          >
            Our Manufacturing <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-wect-red-light">Process</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-white/60 text-base leading-relaxed max-w-md mx-auto font-light"
          >
            Six stages of precision manufacturing — from engineering design to global dispatch.
            Every step optimized for accuracy, consistency, and durability.
          </motion.p>
        </div>

        {/* Timeline */}
        <div className="relative mt-8 max-w-3xl mx-auto">
          {/* Background spine line */}
          <div className="absolute top-4 bottom-4 left-1/2 -translate-x-1/2 w-px bg-white/10 z-0 pointer-events-none hidden sm:block" />

          <div className="relative z-10">
            {steps.map((step, i) => (
              <Step key={step.title} step={step} index={i} totalSteps={steps.length} />
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
