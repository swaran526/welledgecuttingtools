import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ChevronRight, Layers, Cpu, Wrench, Cog, Zap, Target } from 'lucide-react'

const products = [
  {
    id: 1,
    name: 'Solid Carbide End Mills',
    category: 'MILLING',
    image: '/images/WOLF-Werkzeugtechnologie_VHM-Standardwerkzeuge_1.png',
    desc: 'Precision milling tools for high-performance machining across various materials.',
    icon: <Layers size={14} />
  },
  {
    id: 2,
    name: 'Carbide Drills',
    category: 'DRILLING',
    image: '/images/tool_in_action.jpg',
    desc: 'High-accuracy drilling solutions for consistent performance and long tool life.',
    icon: <Target size={14} />
  },
  {
    id: 3,
    name: 'PCD Reamers',
    category: 'REAMING',
    image: '/images/reamer_clean.jpg',
    desc: 'Engineered for superior surface finish and exceptional dimensional accuracy.',
    icon: <Cpu size={14} />
  },
  {
    id: 4,
    name: 'Gear Hob Cutters',
    category: 'GEAR CUTTING',
    image: '/images/innovation.jpg',
    desc: 'Precision tools designed for efficient gear manufacturing applications.',
    icon: <Cog size={14} />
  },
  {
    id: 5,
    name: 'Indexable Boring Tools',
    category: 'BORING',
    image: '/images/precision_engineering.jpg',
    desc: 'Reliable boring solutions for improved productivity and precision.',
    icon: <Wrench size={14} />
  },
  {
    id: 6,
    name: 'Special Form Tools',
    category: 'CUSTOM',
    image: '/images/slider7.jpg',
    desc: 'Custom-designed cutting tools developed for complex machining requirements.',
    icon: <Cog size={14} />
  },
  {
    id: 7,
    name: 'Cermet Inserts',
    category: 'TURNING',
    image: '/images/reamer_annotated.jpg',
    desc: 'High-speed finishing inserts providing superior wear resistance and finish.',
    icon: <Zap size={14} />
  },
  {
    id: 8,
    name: 'Custom Toolholders',
    category: 'TOOLHOLDERS',
    image: '/images/materials_comparison.jpg',
    desc: 'High-precision toolholding systems optimized for structural rigidity.',
    icon: <Wrench size={14} />
  }
]

const headerContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 }
  }
}

const headerItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
  }
}

const gridContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.09, delayChildren: 0.1 }
  }
}

const cardVariants = {
  hidden: { opacity: 0, y: 25, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
  }
}

export default function FeaturedProducts() {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.05 })

  return (
    <section ref={ref} id="featured-products" className="bg-navy-900 text-white py-12 font-body relative overflow-hidden border-t border-navy-800">

      {/* Background Subtle Tech Grid */}
      <motion.div
        animate={inView ? {
          opacity: [0.1, 0.2, 0.1]
        } : {}}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute inset-0 bg-grid-navy pointer-events-none"
      />

      {/* Ambient center glow */}
      <motion.div
        animate={inView ? {
          scale: [1, 1.08, 1],
          opacity: [0.3, 0.6, 0.3]
        } : {}}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-lime-brand/5 rounded-full blur-[100px] pointer-events-none"
      />

      <div className="max-w-[92rem] mx-auto px-6 relative z-10">

        {/* ==========================================
            HEADER — compact style
            ========================================== */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-8 space-y-2"
          variants={headerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          {/* Heading */}
          <motion.h2
            variants={headerItemVariants}
            className="font-display font-black uppercase text-xl sm:text-2xl lg:text-3xl tracking-tight text-white leading-none"
          >
            Featured <span className="text-lime-brand">Products</span>
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            variants={headerItemVariants}
            className="text-steel-300 text-xs font-medium leading-relaxed pt-1"
          >
            A quick glance at some of our signature performance tools.
          </motion.p>
        </motion.div>

        {/* ==========================================
            PRODUCT GRID LAYOUT — Compact 4-Column
            ========================================== */}
        <motion.div
          variants={gridContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.05 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          {products.map((product) => (
            <motion.div
              key={product.id}
              variants={cardVariants}
              onClick={() => {
                document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
                window.location.hash = 'products';
              }}
              className="group border border-navy-800 bg-navy-950/60 rounded-xl overflow-hidden shadow-lg hover:border-lime-brand/40 hover:shadow-[0_4px_20px_rgba(163,230,53,0.04)] transition-all duration-300 flex flex-col cursor-pointer"
            >
              {/* ── Image Section (top) ── */}
              <div className="relative w-full h-[120px] overflow-hidden flex-shrink-0">
                <div className="absolute top-2 left-2 w-3 h-3 border-t border-l border-white/20 group-hover:border-lime-brand/60 transition-colors duration-300 pointer-events-none z-10" />
                <div className="absolute top-2 right-2 w-3 h-3 border-t border-r border-white/20 group-hover:border-lime-brand/60 transition-colors duration-300 pointer-events-none z-10" />

                {/* Product image */}
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover brightness-90 group-hover:brightness-100 group-hover:scale-102 transition-all duration-500 ease-out"
                />

                <div className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-navy-950 to-transparent pointer-events-none" />
              </div>

              {/* ── Content Panel (below image) ─────────────── */}
              <div className="flex flex-col flex-grow p-4 space-y-2 border-t border-navy-800/40 bg-navy-950/30">

                {/* Category badge */}
                <div className="flex items-center gap-1.5">
                  <div
                    className="w-5 h-5 rounded flex items-center justify-center flex-shrink-0 bg-lime-brand/10 border border-lime-brand/20"
                  >
                    <span className="scale-75 flex items-center text-lime-brand">
                      {product.icon}
                    </span>
                  </div>
                  <span className="font-mono text-[8px] tracking-widest uppercase text-lime-brand">
                    {product.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xs font-display font-black uppercase tracking-wide text-white group-hover:text-lime-300 transition-colors duration-300 leading-tight line-clamp-1">
                  {product.name}
                </h3>

                {/* Description */}
                <p className="text-steel-400 text-[10px] font-medium leading-normal flex-grow line-clamp-2">
                  {product.desc}
                </p>

                {/* Divider */}
                <div className="border-t border-navy-800/40 pt-2">
                  {/* CTA link */}
                  <a
                    href="#products"
                    className="inline-flex items-center gap-1 font-mono text-[9px] text-steel-500 hover:text-lime-brand transition-colors duration-300 group/cta"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
                      window.location.hash = 'products';
                    }}
                  >
                    <span>VIEW DETAILS</span>
                    <ChevronRight size={8} className="transform group-hover/cta:translate-x-0.5 transition-transform duration-300" />
                  </a>
                </div>
              </div>

              {/* Bottom accent line on hover */}
              <div className="h-0.5 w-0 group-hover:w-full transition-all duration-300 ease-out flex-shrink-0 bg-lime-brand" />
            </motion.div>
          ))}
        </motion.div>

      </div>

      {/* Bottom green accent line */}
      <motion.div
        animate={{
          opacity: [0.3, 0.7, 0.3]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-lime-brand to-transparent"
      />
    </section>
  )
}
