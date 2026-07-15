import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link, useNavigate } from 'react-router-dom'
import { 
  ChevronRight, 
  ChevronLeft,
  Settings, 
  Layers, 
  Cpu, 
  Activity, 
  Wrench, 
  Search,
  Sliders,
  Filter,
  CheckCircle,
  FileText,
  Phone,
  ArrowRight,
  Maximize2
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
    <div className="relative group h-full">
      {/* 10-Lakh Rotated Premium Glow Shadow Aura */}
      <div className="absolute inset-0 bg-gradient-to-tr from-wect-blue/20 via-wect-red/10 to-wect-red-light/25 rounded-2xl transform rotate-1 scale-[1.01] blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      <motion.div
        onClick={() => onSelect && onSelect(product)}
        className="relative z-10 flex flex-col cursor-pointer overflow-hidden border border-white/5 bg-[#03060b]/40 backdrop-blur-sm shadow-glass hover:border-wect-red-light/50 transition-all duration-300 rounded-2xl text-white h-full"
      >
        {/* Interactive HUD Corner Brackets */}
        <div className="absolute top-0 left-0 w-2.5 h-2.5 border-t border-l border-white/20 group-hover:border-wect-red-light transition-colors duration-300 pointer-events-none z-30" />
        <div className="absolute top-0 right-0 w-2.5 h-2.5 border-t border-r border-white/20 group-hover:border-wect-red-light transition-colors duration-300 pointer-events-none z-30" />
        <div className="absolute bottom-0 left-0 w-2.5 h-2.5 border-b border-l border-white/20 group-hover:border-wect-red-light transition-colors duration-300 pointer-events-none z-30" />
        <div className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b border-r border-white/20 group-hover:border-wect-red-light transition-colors duration-300 pointer-events-none z-30" />

        {/* Image Section with auto-sliding images */}
        <div className="relative w-full h-52 overflow-hidden bg-[#070b13]/85 flex items-center justify-center p-6 flex-shrink-0 border-b border-white/5">
          {/* Subtle blueprint grid overlay inside image box */}
          <div className="absolute inset-0 bg-blueprint-grid opacity-[0.03] z-0" />

          <AnimatePresence mode="popLayout">
            <motion.img
              key={imgIndex}
              src={images[imgIndex]}
              alt={product.title}
              className="absolute inset-0 w-full h-full object-contain p-6 group-hover:scale-[1.08] transition-all duration-700 ease-out z-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
            />
          </AnimatePresence>

          {/* Laser scan line overlay - Sweeps on hover */}
          <div 
            className="absolute inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-wect-red-light/60 to-transparent pointer-events-none z-20 opacity-0 group-hover:opacity-100"
            style={{
              top: '0%',
              animation: 'scanLine 3s linear infinite'
            }}
          />

          {/* Center target alignment HUD */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center opacity-0 group-hover:opacity-20 transition-opacity duration-300 z-20">
            <div className="w-14 h-14 rounded-full border border-dashed border-white/40 flex items-center justify-center animate-spin" style={{ animationDuration: '25s' }}>
              <div className="w-8 h-8 rounded-full border border-dotted border-white/50" />
            </div>
            <div className="absolute w-5 h-[1px] bg-white/40" />
            <div className="absolute h-5 w-[1px] bg-white/40" />
          </div>

          {/* HUD ID Tag */}
          <div className="absolute top-4 left-4 font-mono text-[8px] tracking-widest text-slate-500 font-bold bg-white/[0.03] border border-white/5 px-2 py-0.5 rounded backdrop-blur-sm z-20">
            [ 0{product.id} ]
          </div>

          {/* Dot indicators */}
          {images.length > 1 && (
            <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5 z-20">
              {images.map((_, i) => (
                <span
                  key={i}
                  className={`block rounded-full transition-all duration-300 ${
                    i === imgIndex
                      ? 'w-4.5 h-1 bg-wect-red-light'
                      : 'w-1 h-1 bg-white/20'
                  }`}
                />
              ))}
            </div>
          )}

          {/* Laser scan line detail */}
          <div className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-wect-red-light scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left z-20" />
        </div>

        {/* Content Panel */}
        <div className="flex flex-col flex-grow p-5 space-y-3.5 relative z-10">
          <div className="flex items-center gap-2">
            <span className="font-mono text-[8px] font-black tracking-[0.2em] uppercase text-wect-red-light">
              // {product.category}
            </span>
          </div>

          <h3 className="font-display font-black text-sm uppercase tracking-wide text-white group-hover:text-wect-red-light transition-colors duration-300 leading-tight">
            {product.title}
          </h3>

          <p className="text-slate-400 text-[11px] leading-relaxed flex-grow font-light">
            {product.desc}
          </p>

          {/* Micro Specs Metrology Grid Readout */}
          {product.specs && product.specs.length > 0 && (
            <div className="grid grid-cols-2 gap-2 border-t border-white/5 pt-3.5 mt-2 z-10">
              {product.specs.slice(0, 2).map((s, idx) => (
                <div key={idx} className="bg-white/[0.01] border border-white/5 rounded-lg p-2.5 flex flex-col justify-center select-none hover:bg-white/[0.03] transition-colors duration-200">
                  <span className="font-mono text-[7px] text-slate-500 uppercase tracking-wider">{s.name}</span>
                  <span className="font-mono text-[9px] text-white/80 font-bold mt-0.5 truncate">{s.value}</span>
                </div>
              ))}
            </div>
          )}

          <div className="border-t border-white/5 pt-3.5 flex items-center justify-between mt-auto">
            <button
              className="inline-flex items-center gap-1.5 font-display font-bold text-[10px] tracking-wider text-wect-blue-light group-hover:text-wect-red-light transition-colors bg-transparent border-0 cursor-pointer p-0 uppercase"
              onClick={(e) => {
                e.stopPropagation()
                if (onSelect) onSelect(product)
              }}
            >
              <span>View Specifications</span>
              <ChevronRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default function ToolingPortfolio({ activeFilter = 'ALL PRODUCTS', setActiveFilter, selectedProduct, setSelectedProduct }) {
  const [modalImgIndex, setModalImgIndex] = useState(0)
  const navigate = useNavigate()

  useEffect(() => {
    setModalImgIndex(0)
  }, [selectedProduct])

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

  // ── DEDICATED PRODUCT DETAILS LAYOUT ─────────────────────────
  if (selectedProduct) {
    const isJpg = selectedProduct.images
      ? selectedProduct.images[modalImgIndex]?.toLowerCase().endsWith('.jpg') || selectedProduct.images[modalImgIndex]?.toLowerCase().endsWith('.jpeg')
      : selectedProduct.img?.toLowerCase().endsWith('.jpg') || selectedProduct.img?.toLowerCase().endsWith('.jpeg')

    const otherProducts = productsData
      .filter(p => p.id !== selectedProduct.id)
      .slice(0, 5)

    const prevOption = () => {
      if (selectedProduct.images) {
        setModalImgIndex(prev => (prev - 1 + selectedProduct.images.length) % selectedProduct.images.length)
      }
    }

    const nextOption = () => {
      if (selectedProduct.images) {
        setModalImgIndex(prev => (prev + 1) % selectedProduct.images.length)
      }
    }

    return (
      <section
        id="product-detail"
        className="bg-transparent text-white pt-24 pb-16 lg:pt-28 lg:pb-20 font-body relative overflow-hidden border-t border-white/5"
      >
        <div 
          className="absolute inset-0 bg-blueprint-grid pointer-events-none z-0" 
          style={{ 
            maskImage: 'radial-gradient(circle at 50% 50%, transparent 35%, black 85%)', 
            WebkitMaskImage: 'radial-gradient(circle at 50% 50%, transparent 35%, black 85%)' 
          }} 
        />
        {/* Ambient glow */}
        <div className="absolute bottom-[20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-wect-red/5 blur-[120px] pointer-events-none" />
        <div className="absolute top-[20%] left-[-10%] w-[450px] h-[450px] rounded-full bg-wect-blue/10 blur-[130px] pointer-events-none" />

        <div className="section-container relative z-10">
          
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-[10px] sm:text-xs font-mono text-white/50 mb-10 select-none border-b border-white/5 pb-4">
            <Link to="/" className="hover:text-wect-red-light transition-colors">Home</Link>
            <span>/</span>
            <button 
              onClick={() => setSelectedProduct(null)} 
              className="hover:text-wect-red-light transition-colors outline-none focus:outline-none bg-transparent border-none cursor-pointer p-0 font-mono text-[10px] sm:text-xs text-white/50"
            >
              Products
            </button>
            <span>/</span>
            <span className="text-wect-red-light font-medium">{selectedProduct.title}</span>
          </div>

          {/* Two-Column Workbench Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start mb-20">
            
            {/* Left Column: Image Sheet and Option Slider (col-span-7) */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Image Frame Container */}
              <div 
                className={`relative w-full h-[320px] sm:h-[420px] rounded-3xl overflow-hidden flex items-center justify-center border border-white/10 shadow-2xl group transition-all duration-300 ${
                  isJpg ? 'bg-white' : 'bg-[#060a12]/80 shadow-inner'
                }`}
              >
                {/* Grid line overlay */}
                {isJpg ? (
                  <div className="absolute inset-0 bg-grid-fine opacity-[0.35] pointer-events-none z-20" />
                ) : (
                  <div className="absolute inset-0 bg-blueprint-grid opacity-[0.05] pointer-events-none z-20" />
                )}

                {/* Crosshairs */}
                <div className="absolute top-0 left-6 bottom-0 w-px bg-wect-blue/5 border-l border-dashed border-wect-blue/15 pointer-events-none z-20" />
                <div className="absolute top-6 left-0 right-0 h-px bg-wect-blue/5 border-t border-dashed border-wect-blue/15 pointer-events-none z-20" />

                {/* Tech Stamps */}
                <div className="absolute top-4 left-5 font-mono text-[7px] text-slate-400 uppercase tracking-widest pointer-events-none z-20 select-none">
                  METROLOGY CONSOLE // PLOT A-1
                </div>
                <div className="absolute top-4 right-5 font-mono text-[7px] text-slate-400 uppercase tracking-widest pointer-events-none z-20 select-none">
                  SCALE 1:1 // ISO 9001
                </div>
                <div className="absolute bottom-4 left-5 font-mono text-[7px] text-slate-400 uppercase tracking-widest pointer-events-none z-20 select-none">
                  UNIT: METRIC (mm)
                </div>
                <div className="absolute bottom-4 right-5 font-mono text-[7px] text-slate-400 uppercase tracking-widest pointer-events-none z-20 select-none">
                  REF_ID: WECT_SH_{modalImgIndex + 1}
                </div>

                {/* Maximize Icon */}
                <div className="absolute top-4 right-4 bg-slate-900/60 border border-white/10 rounded-full w-8 h-8 flex items-center justify-center text-white/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-20">
                  <Maximize2 size={14} />
                </div>

                {/* Product Image */}
                <img
                  src={selectedProduct.images ? selectedProduct.images[modalImgIndex] : selectedProduct.img}
                  alt={selectedProduct.title}
                  className="max-h-[82%] max-w-[82%] object-contain relative z-10 transition-transform duration-500 group-hover:scale-102 select-none"
                />

                {/* Scanning Beam */}
                <div 
                  className="absolute inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-wect-red-light/40 to-transparent pointer-events-none z-20"
                  style={{
                    top: '0%',
                    animation: 'scanLine 3.5s linear infinite'
                  }}
                />
              </div>

              {/* Options Thumbnail Slider Deck */}
              {selectedProduct.images && selectedProduct.images.length > 0 && (
                <div className="flex items-center justify-between bg-white/[0.02] border border-white/5 rounded-2xl p-4 gap-4">
                  
                  <button 
                    onClick={prevOption}
                    className="w-9 h-9 rounded-xl border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-white/30 hover:bg-white/5 transition-all cursor-pointer shrink-0"
                    aria-label="Previous image"
                  >
                    <ChevronLeft size={16} />
                  </button>

                  <div className="flex items-center gap-2.5 overflow-x-auto no-scrollbar py-0.5">
                    {selectedProduct.images.map((imgUrl, i) => (
                      <div
                        key={i}
                        onClick={() => setModalImgIndex(i)}
                        className={`w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-white flex items-center justify-center p-2 cursor-pointer transition-all duration-300 border-2 relative overflow-hidden group shrink-0 ${
                          i === modalImgIndex
                            ? 'border-wect-red-light scale-105 shadow-[0_0_12px_rgba(229,33,61,0.25)]'
                            : 'border-white/5 opacity-60 hover:opacity-100 hover:scale-102 hover:border-wect-blue-light/50'
                        }`}
                      >
                        <img
                          src={imgUrl}
                          alt={`Tool option ${i + 1}`}
                          className="max-w-full max-h-full object-contain select-none transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                    ))}
                  </div>

                  <button 
                    onClick={nextOption}
                    className="w-9 h-9 rounded-xl border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-white/30 hover:bg-white/5 transition-all cursor-pointer shrink-0"
                    aria-label="Next image"
                  >
                    <ChevronRight size={16} />
                  </button>

                </div>
              )}
            </div>

            {/* Right Column: Specification Details & Cards (col-span-5) */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Product Info */}
              <div className="space-y-4">
                <span className="font-mono text-[10px] text-wect-red-light tracking-widest uppercase block font-bold">
                  CUSTOMIZED SOLUTION
                </span>
                <h2 className="text-3xl sm:text-4xl font-display font-black uppercase text-white tracking-wide leading-tight">
                  {selectedProduct.title}
                </h2>
                <p className="text-white/60 text-sm leading-relaxed font-light font-body border-t border-white/5 pt-4">
                  {selectedProduct.desc}
                </p>
              </div>

              {/* Specs parameters list */}
              {selectedProduct.specs && (
                <div className="space-y-2">
                  {selectedProduct.specs.map((spec, idx) => (
                    <div key={idx} className="bg-[#060a12]/40 border border-white/5 rounded-xl p-3 flex justify-between items-center text-xs hover:border-wect-red-light/35 hover:shadow-[0_0_10px_rgba(196,18,48,0.1)] transition-all duration-300 group">
                      <span className="text-slate-400 font-mono text-[8px] uppercase tracking-wider flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 bg-wect-red-light rounded-full opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300" />
                        {spec.name}
                      </span>
                      <span className="text-white font-bold text-[9px] text-right font-mono tracking-wide">{spec.value}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* CUSTOM MADE CARD */}
              <div className="flex items-start gap-4 p-5 bg-white/[0.02] border border-white/5 rounded-2xl relative overflow-hidden group hover:border-wect-red-light/35 transition-all duration-300">
                <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center bg-white/5 border border-white/10 rounded-xl text-wect-red-light group-hover:bg-wect-red-light group-hover:text-white transition-all duration-300">
                  <Wrench size={18} />
                </div>
                <div className="space-y-1">
                  <p className="font-mono text-[9px] font-bold uppercase tracking-widest text-wect-red-light">CUSTOM MADE</p>
                  <p className="text-white/80 text-xs leading-relaxed font-light font-body">
                    Engineered to match your drawing, application and performance requirements.
                  </p>
                </div>
              </div>

              {/* Need a Custom Tool? Quote Card */}
              <div className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl space-y-5 hover:border-wect-blue-light/35 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center bg-wect-red/10 border border-wect-red/20 rounded-full text-wect-red-light">
                    <FileText size={18} />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-white font-display font-bold text-sm">Need a Custom Tool?</h4>
                    <p className="text-white/50 text-[11px] leading-relaxed font-light font-body">
                      Send us your drawing or requirements. We will take care of the rest.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2 border-t border-white/5 justify-between">
                  <Link
                    to="/contact"
                    className="py-3 px-5 bg-wect-red hover:bg-wect-red-light text-white font-display font-bold text-[10px] uppercase tracking-wider rounded-xl transition-all shadow-md flex items-center justify-center gap-1.5 cursor-pointer shrink-0"
                  >
                    Request a Quote
                    <ArrowRight size={12} />
                  </Link>

                  <a 
                    href="tel:+919900858297"
                    className="flex items-center gap-2 text-white/70 hover:text-white transition-colors justify-center font-mono text-[11px] font-bold"
                  >
                    <Phone size={12} className="text-wect-red-light" />
                    +91 99008 58297
                  </a>
                </div>
              </div>

            </div>

          </div>

          {/* Bottom Section: More Products Showcase */}
          <div className="border-t border-white/5 pt-16 space-y-10">
            <div className="flex items-center justify-between">
              <h3 className="font-display font-black text-2xl uppercase tracking-wide text-white">
                More Products
              </h3>
              <button
                onClick={() => {
                  setSelectedProduct(null)
                  window.scrollTo({ top: 0, behavior: 'smooth' })
                }}
                className="text-wect-red-light font-display font-bold text-xs uppercase tracking-wider hover:text-white transition-colors flex items-center gap-1.5 bg-transparent border-none cursor-pointer"
              >
                View All Products
                <ArrowRight size={14} />
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {otherProducts.map((prod) => (
                <div 
                  key={prod.id}
                  onClick={() => {
                    setSelectedProduct(prod)
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                  }}
                  className="bg-white/[0.02] border border-white/5 rounded-2xl p-5 hover:border-wect-red-light/35 transition-all duration-300 group flex flex-col justify-between h-[250px] cursor-pointer"
                >
                  <div className="h-[120px] w-full flex items-center justify-center bg-white rounded-xl p-3 relative overflow-hidden">
                    <div className="absolute inset-0 bg-grid-fine opacity-[0.25] pointer-events-none" />
                    <img 
                      src={prod.img} 
                      alt={prod.title} 
                      className="max-h-[90%] max-w-[90%] object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="mt-4 space-y-2">
                    <h4 className="font-display font-black text-[10px] text-white tracking-wider uppercase line-clamp-1 group-hover:text-wect-red-light transition-colors leading-none">
                      {prod.title}
                    </h4>
                    <span className="text-wect-red-light font-mono text-[9px] uppercase tracking-wider flex items-center gap-1 mt-2 font-bold">
                      View Product
                      <ArrowRight size={10} className="group-hover:translate-x-0.5 transition-transform" />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    )
  }

  // ── STANDARD CATEGORIES PORTFOLIO GRID LAYOUT ──────────────
  return (
    <section
      id="products"
      className="bg-transparent text-white section-padding font-body relative overflow-hidden border-t border-white/5"
    >
      <div 
        className="absolute inset-0 bg-blueprint-grid pointer-events-none z-0" 
        style={{ 
          maskImage: 'radial-gradient(circle at 50% 50%, transparent 35%, black 85%)', 
          WebkitMaskImage: 'radial-gradient(circle at 50% 50%, transparent 35%, black 85%)' 
        }} 
      />
      {/* Soft glowing ambient spots */}
      <div className="absolute bottom-[20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-wect-red/5 blur-[120px] pointer-events-none" />
      <div className="absolute top-[20%] left-[-10%] w-[450px] h-[450px] rounded-full bg-wect-blue/10 blur-[130px] pointer-events-none" />

      <div className="section-container relative z-10">

        {/* Section Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-10 space-y-3"
          variants={headerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.h2
            variants={headerItemVariants}
            className="font-display font-black uppercase text-3xl sm:text-4xl lg:text-5xl tracking-tight text-white leading-none"
          >
            Cutting Tool{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-wect-red-light">
              Portfolio
            </span>
          </motion.h2>

          <motion.p
            variants={headerItemVariants}
            className="text-white/60 text-sm sm:text-base font-light max-w-2xl mx-auto leading-relaxed border-t border-white/5 pt-4"
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
              className={`px-4 py-2 text-[10px] font-display font-bold uppercase tracking-wider rounded-full transition-all duration-300 border cursor-pointer ${
                activeFilter === cat
                  ? 'bg-wect-blue border-wect-blue text-white shadow-md'
                  : 'bg-white/[0.02] border-white/5 text-white/70 hover:border-wect-red-light/30 hover:text-white hover:bg-white/[0.04]'
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
