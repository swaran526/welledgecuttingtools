import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Eye } from 'lucide-react'

// Image mappings using existing files in public/assets to prevent build errors
const galleryItems = [
  {
    id: 1,
    category: 'Factory',
    title: 'Manufacturing Floor',
    img: '/images/hero/hero_12.webp'
  },
  {
    id: 2,
    category: 'Machines',
    title: '5-Axis CNC Grinder',
    img: '/images/hero/hero_4.jpeg'
  },
  {
    id: 3,
    category: 'Products',
    title: 'Solid Carbide End Mills',
    img: '/images/hero/hero_11.png'
  },
  {
    id: 4,
    category: 'Inspection',
    title: 'Precision Metrology',
    img: '/images/hero/hero_5.png'
  },
  {
    id: 5,
    category: 'Packaging',
    title: 'Automated Protective Packing',
    img: '/images/hero/hero_8.png'
  },
  {
    id: 6,
    category: 'Factory',
    title: 'WECT Production Line',
    img: '/images/hero/hero_2.png'
  },
  {
    id: 7,
    category: 'Machines',
    title: 'Robotic Loading Setup',
    img: '/images/hero/hero_6.png'
  },
  {
    id: 8,
    category: 'Products',
    title: 'Custom Profile Cutters',
    img: '/images/hero/hero_1.png'
  },
  {
    id: 9,
    category: 'Inspection',
    title: 'Concentricity Alignment Check',
    img: '/images/hero/hero_7.png'
  }
]

const categories = ['All', 'Factory', 'Machines', 'Products', 'Inspection', 'Packaging']

export default function Gallery() {
  const [filter, setFilter] = useState('All')
  const { ref } = useInView({ triggerOnce: true, threshold: 0.05 })

  const filteredItems = filter === 'All'
    ? galleryItems
    : galleryItems.filter(item => item.category === filter)

  return (
    <section ref={ref} id="gallery" className="bg-transparent text-white section-padding font-body relative overflow-hidden border-t border-white/5">

      <div 
        className="absolute inset-0 bg-blueprint-grid pointer-events-none z-0" 
        style={{ 
          maskImage: 'radial-gradient(circle at 50% 50%, black 20%, transparent 70%)', 
          WebkitMaskImage: 'radial-gradient(circle at 50% 50%, black 20%, transparent 70%)' 
        }} 
      />

      <div className="section-container relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <span className="font-mono text-[10px] tracking-[0.2em] text-wect-red-light uppercase font-bold">06 // VISUAL PORTFOLIO</span>
          <h2 className="font-display font-black uppercase text-3xl sm:text-4xl lg:text-5xl tracking-tight text-white leading-none">
            Facility <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-wect-red-light">Gallery</span>
          </h2>
          <p className="text-white/60 text-sm font-light leading-relaxed border-t border-white/5 pt-4 max-w-2xl mx-auto">
            A visual overview of our advanced CNC machinery, testing labs, clean factory floors, and premium finished cutting tools.
          </p>
        </div>

        {/* Categories Tab Row */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 text-xs font-mono uppercase tracking-wider rounded-full border cursor-pointer transition-all duration-300 ${
                filter === cat
                  ? 'bg-wect-blue border-wect-blue text-white shadow-md'
                  : 'bg-white/5 border-white/10 text-white/70 hover:bg-white/10 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid Layout */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="relative overflow-hidden rounded-3xl group border border-white/10 bg-white/5 shadow-glass aspect-[4/3] cursor-pointer text-white"
              >
                {/* Image */}
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                />

                {/* Cover Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#080E1E] via-wect-navy/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <div className="space-y-1 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="font-mono text-[9px] font-bold text-wect-red-light uppercase tracking-widest">
                      {item.category}
                    </span>
                    <h4 className="text-white font-display font-bold uppercase text-sm tracking-wide">
                      {item.title}
                    </h4>
                  </div>
                  
                  {/* View Icon */}
                  <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md rounded-full p-2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Eye size={16} />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  )
}
