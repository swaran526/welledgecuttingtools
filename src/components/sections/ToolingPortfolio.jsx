import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  ChevronRight, 
  Settings, 
  Layers, 
  Cpu, 
  Activity, 
  Wrench, 
  Search,
  Sliders,
  Filter,
  CheckCircle,
  FileText
} from 'lucide-react'

// ── Product Images from assets folder ──────────────────────────────────────────
// Solid Carbide Tools
import solidImg1 from '../../assets/images/our_products/solid_carbide_tools/1.png'
import solidImg2 from '../../assets/images/our_products/solid_carbide_tools/2.png'
import solidImg3 from '../../assets/images/our_products/solid_carbide_tools/3.jpg'
import solidImg4 from '../../assets/images/our_products/solid_carbide_tools/4.webp'
import solidImg5 from '../../assets/images/our_products/solid_carbide_tools/5.webp'

// Customized Form Tools
import formImg1 from '../../assets/images/our_products/CUSTOMIZED FORM TOOLS/2.1.jpg'
import formImg2 from '../../assets/images/our_products/CUSTOMIZED FORM TOOLS/2.2.jpg'
import formImg3 from '../../assets/images/our_products/CUSTOMIZED FORM TOOLS/2.3.jpg'
import formImg4 from '../../assets/images/our_products/CUSTOMIZED FORM TOOLS/2.4.jpg'
import formImg5 from '../../assets/images/our_products/CUSTOMIZED FORM TOOLS/2.5.jpg'

// Cermet, PCD & Carbide Reamers
import reamerImg1 from '../../assets/images/our_products/CERMET,PCD AND CARBIDE EXPENDABLE REAMER/3.1.jpg'
import reamerImg2 from '../../assets/images/our_products/CERMET,PCD AND CARBIDE EXPENDABLE REAMER/3.2.jpg'
import reamerImg3 from '../../assets/images/our_products/CERMET,PCD AND CARBIDE EXPENDABLE REAMER/3.3.jpg'
import reamerImg4 from '../../assets/images/our_products/CERMET,PCD AND CARBIDE EXPENDABLE REAMER/3.4.jpg'
import reamerImg5 from '../../assets/images/our_products/CERMET,PCD AND CARBIDE EXPENDABLE REAMER/3.5.png'

// PCD Boring Tools
import boringImg1 from '../../assets/images/our_products/PCD BORING TOOLS/4.1.jpg'
import boringImg2 from '../../assets/images/our_products/PCD BORING TOOLS/4.2.png'
import boringImg3 from '../../assets/images/our_products/PCD BORING TOOLS/4.3.jpg'
import boringImg4 from '../../assets/images/our_products/PCD BORING TOOLS/4.4.webp'
import boringImg5 from '../../assets/images/our_products/PCD BORING TOOLS/4.5.png'

// Hob & Firtree
import hobImg1 from '../../assets/images/our_products/HOB AND FIRTREE/5.1.jpg'
import hobImg2 from '../../assets/images/our_products/HOB AND FIRTREE/5.2.webp'
import hobImg3 from '../../assets/images/our_products/HOB AND FIRTREE/5.3.png'
import hobImg4 from '../../assets/images/our_products/HOB AND FIRTREE/5.5.jpg'

// PCD & PCBN SPL Inserts
import insertImg1 from '../../assets/images/our_products/PCD AND PCBN SPL INSERTS/6.1.png'
import insertImg2 from '../../assets/images/our_products/PCD AND PCBN SPL INSERTS/6.2.jpg'
import insertImg3 from '../../assets/images/our_products/PCD AND PCBN SPL INSERTS/6.3.jpg'
import insertImg4 from '../../assets/images/our_products/PCD AND PCBN SPL INSERTS/6.4.jpg'
import insertImg5 from '../../assets/images/our_products/PCD AND PCBN SPL INSERTS/6.5.jpeg'

// ── Main static catalog database of WECT products ─────────────────────────────
export const productsData = [
  {
    id: 1,
    title: 'Solid Carbide End Mills',
    category: 'Solid Carbide Tools',
    desc: 'High-performance end mills with variable pitch and helix geometries designed for chatter-free milling in steel, stainless, and superalloys.',
    img: solidImg1,
    images: [solidImg1, solidImg2, solidImg3, solidImg4, solidImg5],
    accent: '#2F3F91',
    icon: <Settings size={14} />,
    specs: [
      { name: 'Diameter Range', value: '3.0mm - 25.0mm' },
      { name: 'Helix Angle', value: '38° / 41° Variable' },
      { name: 'Coating', value: 'AlTiN / nACo Blue Nano' },
      { name: 'Flutes Count', value: '3, 4, 5, 6 Flutes' }
    ]
  },
  {
    id: 2,
    title: 'Customized Form Tools',
    category: 'Customized Form Tools',
    desc: 'Bespoke profile cutters and custom-ground geometry step drills designed to merge multiple machining operations into a single cycle.',
    img: formImg1,
    images: [formImg1, formImg2, formImg3, formImg4, formImg5],
    accent: '#A81F3D',
    icon: <Layers size={14} />,
    specs: [
      { name: 'Profile Accuracy', value: 'Within ±0.005mm' },
      { name: 'Substrate', value: 'Ultra-micrograin Carbide' },
      { name: 'Operations', value: 'Combined drill-chamfer-step' },
      { name: 'Lead Time', value: '10-14 Working Days' }
    ]
  },
  {
    id: 3,
    title: 'Sub-Micron Reamers',
    category: 'Cermet, PCD & Carbide Reamers',
    desc: 'High-accuracy carbide and cermet tipped reamers designed for bore sizing down to IT7 tolerance limits with superior surface finishes.',
    img: reamerImg1,
    images: [reamerImg1, reamerImg2, reamerImg3, reamerImg4, reamerImg5],
    accent: '#2F3F91',
    icon: <Cpu size={14} />,
    specs: [
      { name: 'Tolerance Class', value: 'IT7 / H7 specification' },
      { name: 'Materials', value: 'Carbide / Cermet tipped' },
      { name: 'Coolant Feed', value: 'Through-coolant axial/radial' },
      { name: 'Shank Type', value: 'h6 cylindrical ground shank' }
    ]
  },
  {
    id: 4,
    title: 'PCD Boring Tools',
    category: 'PCD Boring Tools',
    desc: 'Polycrystalline Diamond tipped boring cartridges and custom bars for high-speed finishing operations in non-ferrous and aluminum.',
    img: boringImg1,
    images: [boringImg1, boringImg2, boringImg3, boringImg4, boringImg5],
    accent: '#A81F3D',
    icon: <Activity size={14} />,
    specs: [
      { name: 'Cutting Speed', value: 'Up to 3000 m/min' },
      { name: 'Edge Life', value: '50x over solid carbide' },
      { name: 'Workpiece', value: 'Aluminum, copper, composites' },
      { name: 'Surface Finish', value: 'Ra < 0.2 microns' }
    ]
  },
  {
    id: 5,
    title: 'Firtree Cutter Sets',
    category: 'Hob & Firtree',
    desc: 'High-complexity firtree profile milling cutters configured for turbine blade root machining in power generation and aerospace applications.',
    img: hobImg1,
    images: [hobImg1, hobImg2, hobImg3, hobImg4],
    accent: '#2F3F91',
    icon: <Sliders size={14} />,
    specs: [
      { name: 'Symmetry deviation', value: 'Within 0.003mm max' },
      { name: 'Application', value: 'Turbine disc slots' },
      { name: 'Coating', value: 'Advanced multilayer TiAlSiN' },
      { name: 'Quality Standard', value: 'Aerospace audit verified' }
    ]
  },
  {
    id: 6,
    title: 'PCD & PCBN Inserts',
    category: 'PCD & PCBN Inserts',
    desc: 'Polycrystalline Diamond and Cubic Boron Nitride indexable insert tips for hard turning and high speed abrasive non-ferrous finishing.',
    img: insertImg1,
    images: [insertImg1, insertImg2, insertImg3, insertImg4, insertImg5],
    accent: '#A81F3D',
    icon: <Filter size={14} />,
    specs: [
      { name: 'Hardness range', value: 'HRC 55 to HRC 68' },
      { name: 'Tip styles', value: 'ISO standard inserts (CNMG, etc)' },
      { name: 'Wear resistance', value: 'Ultimate chemical stability' },
      { name: 'Rake face', value: 'Chip breaker patterned geometries' }
    ]
  }
]

const categories = [
  'ALL PRODUCTS',
  'Solid Carbide Tools',
  'Customized Form Tools',
  'Cermet, PCD & Carbide Reamers',
  'PCD Boring Tools',
  'Hob & Firtree',
  'PCD & PCBN Inserts'
]

// ── Product Card with Internal Image Slideshow ─────────────────────────────────
function ProductCard({ product, onSelect }) {
  const [imgIndex, setImgIndex] = useState(0)
  const images = product.images || [product.img]

  useEffect(() => {
    if (images.length <= 1) return
    const timer = setInterval(() => {
      setImgIndex((prev) => (prev + 1) % images.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [images.length])

  return (
    <motion.div
      onClick={() => onSelect && onSelect(product)}
      className="flex flex-col cursor-pointer overflow-hidden border border-white/10 bg-white/5 shadow-glass hover:shadow-glass-hover hover:-translate-y-1.5 hover:border-wect-red-light/35 transition-all duration-350 group rounded-3xl text-white"
    >
      {/* Image Section with auto-sliding images */}
      <div className="relative w-full h-56 overflow-hidden bg-gradient-to-br from-wect-navy/40 to-steel-900/30 flex items-center justify-center p-6 flex-shrink-0 border-b border-white/10">
        <AnimatePresence mode="popLayout">
          <motion.img
            key={imgIndex}
            src={images[imgIndex]}
            alt={product.title}
            className="absolute inset-0 w-full h-full object-contain p-6 group-hover:scale-110 transition-all duration-500 ease-out"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
          />
        </AnimatePresence>

        {/* ID Tag */}
        <div className="absolute top-4 left-4 font-mono text-[9px] font-bold bg-white/5 border border-white/10 text-white/50 px-2 py-0.5 rounded-md shadow-sm z-10">
          #{String(product.id).padStart(2, '0')}
        </div>

        {/* Dot indicators */}
        {images.length > 1 && (
          <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1 z-10">
            {images.map((_, i) => (
              <span
                key={i}
                className={`block rounded-full transition-all duration-300 ${
                  i === imgIndex
                    ? 'w-3 h-1.5 bg-wect-red-light'
                    : 'w-1.5 h-1.5 bg-white/25'
                }`}
              />
            ))}
          </div>
        )}

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-wect-blue/0 group-hover:bg-wect-blue/5 transition-colors duration-300" />
      </div>

      {/* Content Panel */}
      <div className="flex flex-col flex-grow p-6 space-y-3">
        <div className="flex items-center gap-2">
          <div
            className="w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0 text-white text-[12px]"
            style={{ backgroundColor: product.accent }}
          >
            {product.icon}
          </div>
          <span className="font-mono text-[9px] font-bold tracking-widest uppercase text-white/40">
            {product.category}
          </span>
        </div>

        <h3 className="font-display font-bold text-base text-white group-hover:text-wect-red-light transition-colors duration-300 leading-tight">
          {product.title}
        </h3>

        <p className="text-white/50 text-xs leading-relaxed flex-grow font-light">
          {product.desc}
        </p>

        <div className="border-t border-white/5 pt-4 flex items-center justify-between mt-auto">
          <button
            className="inline-flex items-center gap-1.5 font-display font-bold text-[11px] text-wect-blue-light group-hover:text-wect-red-light transition-colors bg-transparent border-0 cursor-pointer p-0 tracking-wide"
            onClick={(e) => {
              e.stopPropagation()
              if (onSelect) onSelect(product)
            }}
          >
            <span>View Details</span>
            <ChevronRight size={12} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </motion.div>
  )
}

export default function ToolingPortfolio({ activeFilter = 'ALL PRODUCTS', setActiveFilter, setSelectedProduct }) {
  const headerContainerVariants = {
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

  const gridContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.1 }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }

  const filteredProducts = activeFilter === 'ALL PRODUCTS'
    ? productsData
    : productsData.filter(p => p.category === activeFilter)

  return (
    <section
      id="products"
      className="bg-transparent text-white section-padding font-body relative overflow-hidden border-t border-white/5"
    >
      <div 
        className="absolute inset-0 bg-blueprint-grid pointer-events-none z-0" 
        style={{ 
          maskImage: 'radial-gradient(circle at 50% 50%, black 20%, transparent 70%)', 
          WebkitMaskImage: 'radial-gradient(circle at 50% 50%, black 20%, transparent 70%)' 
        }} 
      />
      <div className="section-container relative z-10">

        {/* Section Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-14 space-y-4"
          variants={headerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <span className="font-mono text-[10px] tracking-[0.25em] text-wect-red-light uppercase font-bold">02 // Industrial Catalog</span>
          <motion.h2
            variants={headerItemVariants}
            className="font-display font-black text-4xl sm:text-5xl tracking-tight text-white leading-[1.05] mt-2"
          >
            Cutting Tool <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-wect-red-light">Portfolio</span>
          </motion.h2>

          <motion.p
            variants={headerItemVariants}
            className="text-white/60 text-base leading-relaxed max-w-xl mx-auto pt-4 font-light"
          >
            Explore our complete line of premium-engineered rotary and specialty tooling solutions
            designed to maximize efficiency, quality, and tool life.
          </motion.p>
        </motion.div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter && setActiveFilter(cat)}
              className={`px-4 py-2 text-[11px] font-display font-bold uppercase tracking-wider rounded-full transition-all duration-300 border cursor-pointer ${
                activeFilter === cat
                  ? 'bg-wect-blue border-wect-blue text-white shadow-md'
                  : 'bg-white/5 border-white/10 text-white/70 hover:border-wect-red-light hover:text-white hover:bg-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <motion.div
          key={activeFilter}
          variants={gridContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProducts.map((product) => (
            <motion.div key={product.id} variants={cardVariants}>
              <ProductCard product={product} onSelect={setSelectedProduct} />
            </motion.div>
          ))}
        </motion.div>

        {/* Empty state */}
        {filteredProducts.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-24 text-white/40 font-mono text-sm"
          >
            // NO PRODUCTS AVAILABLE
          </motion.div>
        )}

      </div>
    </section>
  )
}
