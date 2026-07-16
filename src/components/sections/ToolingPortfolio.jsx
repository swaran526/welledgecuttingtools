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
  Maximize2,
  Plus,
  X
} from 'lucide-react'

// ── Product Images from assets folder ──────────────────────────────────────────
// Solid Carbide End Mills
import endmill1 from '../../assets/images/our_products/solid carbide end mill/hero2.png'

// Solid Carbide Drills
import drill1 from '../../assets/images/our_products/solid carbide drill/1.png'
import drill2 from '../../assets/images/our_products/solid carbide drill/2.avif'

// Tungaloy Products
import tungaloy1 from '../../assets/images/our_products/tungaloy products/1.png'
import tungaloy2 from '../../assets/images/our_products/tungaloy products/2.jpeg'
import tungaloy3 from '../../assets/images/our_products/tungaloy products/3.jpeg'
import tungaloy4 from '../../assets/images/our_products/tungaloy products/4.jpeg'
import tungaloy5 from '../../assets/images/our_products/tungaloy products/5.jpeg'

// Oemeta Products
import oemeta1 from '../../assets/images/our_products/oemeta/1.jpeg'

// Emkay Taps
import emkay1 from '../../assets/images/our_products/emkay taps/2.jpeg'
import emkay2 from '../../assets/images/our_products/emkay taps/3.jpg'

// PCD Boring Tools
import boring1 from '../../assets/images/our_products/PCD BORING TOOLS/1.jpeg'
import boring2 from '../../assets/images/our_products/PCD BORING TOOLS/2.jpg'

// Customized Profile Cutters
import cutter1 from '../../assets/images/our_products/CUSTOMIZED FORM CUTTER/10.4.jpg'
import cutter2 from '../../assets/images/our_products/CUSTOMIZED FORM CUTTER/10.5.jpg'
import cutter3 from '../../assets/images/our_products/CUSTOMIZED FORM CUTTER/blickpixel-drill-444510_1920.jpg'
import cutter4 from '../../assets/images/our_products/CUSTOMIZED FORM CUTTER/hero8.png'

// ── Main static catalog database of WECT products ─────────────────────────────
export const productsData = [
  {
    id: 1,
    title: 'Solid Carbide End Mills',
    category: 'Solid Carbide Tools',
    desc: 'High-performance solid carbide end mills featuring variable pitch flutes, micro-shield coatings, and chatter-resistant geometries engineered for max metal removal rates in hard materials.',
    img: endmill1,
    images: [endmill1],
    accent: '#2F3F91',
    icon: <Settings size={14} />,
    stats: { precision: 95, durability: 92, speed: 85 },
    specs: [
      { name: 'Diameter Range', value: '3.0mm - 25.0mm' },
      { name: 'Helix Angle', value: '38° / 41° Variable' },
      { name: 'Coating', value: 'AlTiN / nACo Blue Nano' },
      { name: 'Flutes Count', value: '3, 4, 5, 6 Flutes' }
    ]
  },
  {
    id: 2,
    title: 'Solid Carbide Drills',
    category: 'Solid Carbide Tools',
    desc: 'High-precision micrograin carbide drills with advanced self-centering point geometries and internal coolant ducts designed for rapid and straight deep-hole chip evacuation.',
    img: drill1,
    images: [drill1, drill2],
    accent: '#A81F3D',
    icon: <Cpu size={14} />,
    stats: { precision: 97, durability: 94, speed: 90 },
    specs: [
      { name: 'Diameter Range', value: '1.0mm - 20.0mm' },
      { name: 'Point Angle', value: '140° Self-Centering' },
      { name: 'Coolant Feed', value: 'Internal Through-Coolant' },
      { name: 'Drilling Depth', value: '3xD, 5xD, 8xD, 12xD' }
    ]
  },
  {
    id: 3,
    title: 'Tungaloy Indexable Tools',
    category: 'Partner Brands',
    desc: 'Official authorized Tungaloy indexable turning holders, milling cutters, and high-productivity carbide inserts featuring advanced grade technologies for optimal metal cutting.',
    img: tungaloy1,
    images: [tungaloy1, tungaloy2, tungaloy3, tungaloy4, tungaloy5],
    accent: '#2F3F91',
    icon: <Wrench size={14} />,
    stats: { precision: 94, durability: 98, speed: 95 },
    specs: [
      { name: 'Partner Brand', value: 'Tungaloy (Japan)' },
      { name: 'Product Class', value: 'Indexable Inserts & Holders' },
      { name: 'Clamping Systems', value: 'Tung-Turn / Tung-Alu' },
      { name: 'Insert Grades', value: 'Premium CVD & PVD Coated' }
    ]
  },
  {
    id: 4,
    title: 'Oemeta Coolants & Fluids',
    category: 'Partner Brands',
    desc: 'Authorized distribution of Oemeta water-soluble metalworking fluids, neat cutting oils, and synthetic grinding liquids engineered for optimal cooling and extended tooling life.',
    img: oemeta1,
    images: [oemeta1],
    accent: '#A81F3D',
    icon: <Activity size={14} />,
    stats: { precision: 96, durability: 97, speed: 92 },
    specs: [
      { name: 'Partner Brand', value: 'Oemeta (Germany)' },
      { name: 'Fluid Class', value: 'Water-soluble / Neat Oils' },
      { name: 'Key Features', value: 'Bio-stability & high lubrication' },
      { name: 'Applications', value: 'Milling, drilling, tapping' }
    ]
  },
  {
    id: 5,
    title: 'Emkay Taps',
    category: 'Partner Brands',
    desc: 'Authorized distribution of Emkay high-performance HSS and Cobalt thread taps, including spiral point, spiral flute, and hand taps for precise threading operations.',
    img: emkay1,
    images: [emkay1, emkay2],
    accent: '#2F3F91',
    icon: <Layers size={14} />,
    stats: { precision: 98, durability: 91, speed: 85 },
    specs: [
      { name: 'Partner Brand', value: 'Emkay Tools (India)' },
      { name: 'Thread Types', value: 'Metric, UNC, UNF, BSP, NPT' },
      { name: 'Material Class', value: 'HSS-Co (Cobalt) / Carbide' },
      { name: 'Tolerance', value: '6H / ISO 2 threads' }
    ]
  },
  {
    id: 6,
    title: 'PCD Boring Tools',
    category: 'PCD Boring Tools',
    desc: 'WECT Polycrystalline Diamond tipped boring cartridges, fine boring bars, and guide pad tools engineered for ultra-high-speed finishing of aluminum and non-ferrous workpieces.',
    img: boring1,
    images: [boring1, boring2],
    accent: '#A81F3D',
    icon: <Wrench size={14} />,
    stats: { precision: 99, durability: 98, speed: 96 },
    specs: [
      { name: 'Cutting Speed', value: 'Up to 3000 m/min' },
      { name: 'Edge Life', value: '50x over solid carbide' },
      { name: 'Workpiece', value: 'Aluminum, copper, composites' },
      { name: 'Surface Finish', value: 'Ra < 0.2 microns' }
    ]
  },
  {
    id: 7,
    title: 'Customized Profile Cutters',
    category: 'Customized Cutters',
    desc: 'Tailor-made solid carbide profile cutters, form tools, and step cutters ground to proprietary blueprints for combined machining cycle operations.',
    img: cutter1,
    images: [cutter1, cutter2, cutter3, cutter4],
    accent: '#2F3F91',
    icon: <Cpu size={14} />,
    stats: { precision: 99, durability: 90, speed: 80 },
    specs: [
      { name: 'Profile Accuracy', value: 'Within ±0.005mm' },
      { name: 'Substrate', value: 'Ultra-micrograin Carbide' },
      { name: 'Operations', value: 'Combined drill-chamfer-step' },
      { name: 'Lead Time', value: '10-14 Working Days' }
    ]
  }
]

const categories = [
  'ALL PRODUCTS',
  'Solid Carbide Tools',
  'Customized Cutters',
  'PCD Boring Tools',
  'Partner Brands'
]

// ── Circular Gauge for Product Metrics ───────────────────────────────────────
function CircularGauge({ value, label, color = '#C41230', isHovered }) {
  const radius = 16
  const strokeWidth = 3
  const circumference = 2 * Math.PI * radius
  const strokeDashoffset = circumference - (value / 100) * circumference

  return (
    <div className="flex flex-col items-center gap-1.5 select-none shrink-0">
      <div className="relative w-11 h-11 flex items-center justify-center">
        {/* Background circle */}
        <svg className="w-full h-full transform -rotate-90">
          <circle
            cx="22"
            cy="22"
            r={radius}
            fill="transparent"
            stroke="rgba(255, 255, 255, 0.05)"
            strokeWidth={strokeWidth}
          />
          {/* Animated foreground circle */}
          <motion.circle
            cx="22"
            cy="22"
            r={radius}
            fill="transparent"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={isHovered ? { strokeDashoffset } : { strokeDashoffset: circumference }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            strokeLinecap="round"
          />
        </svg>
        {/* Centered value */}
        <span className="absolute font-mono text-[8px] font-bold text-white/90">
          {value}%
        </span>
      </div>
      <span className="font-mono text-[7px] text-slate-500 uppercase tracking-widest leading-none font-bold">
        {label}
      </span>
    </div>
  )
}

// ── Product Card — Image-first with title overlay ──────────────────────────
function ProductCard({ product, onSelect }) {
  const [imgIndex, setImgIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const images = product.images || [product.img]

  useEffect(() => {
    if (images.length <= 1) return
    const timer = setInterval(() => {
      setImgIndex((prev) => (prev + 1) % images.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [images.length])

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => { if (onSelect) { onSelect(product); window.scrollTo({ top: 0, behavior: 'smooth' }); } }}
      className="group relative rounded-2xl overflow-hidden cursor-pointer border border-white/8 hover:border-wect-red-light/50 transition-all duration-300 hover:scale-[1.025] hover:shadow-[0_8px_30px_rgba(196,18,48,0.2)] bg-[#060b13]"
    >
      {/* HUD corner brackets */}
      <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-white/20 group-hover:border-wect-red-light transition-colors duration-300 pointer-events-none z-30" />
      <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-white/20 group-hover:border-wect-red-light transition-colors duration-300 pointer-events-none z-30" />
      <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-white/20 group-hover:border-wect-red-light transition-colors duration-300 pointer-events-none z-30" />
      <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-white/20 group-hover:border-wect-red-light transition-colors duration-300 pointer-events-none z-30" />

      {/* Image area */}
      <div className="relative w-full h-44 bg-[#070b13] flex items-center justify-center p-2.5 overflow-hidden">
        <div className="absolute inset-0 bg-blueprint-grid opacity-[0.04] z-0" />
        <AnimatePresence mode="popLayout">
          <motion.img
            key={imgIndex}
            src={images[imgIndex]}
            alt={product.title}
            className="relative z-10 max-w-[92%] max-h-[92%] object-contain select-none filter drop-shadow-[0_4px_16px_rgba(0,0,0,0.5)] group-hover:scale-105 transition-transform duration-500"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4 }}
          />
        </AnimatePresence>
        {/* Bottom scan line on hover */}
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-wect-red-light to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-center z-20" />
      </div>

      {/* Title bar at bottom */}
      <div className="px-4 py-3 border-t border-white/5 bg-[#060b13] relative">
        <h3 className="font-display font-black text-xs uppercase tracking-wider text-white group-hover:text-wect-red-light transition-colors duration-300 leading-tight truncate">
          {product.title}
        </h3>
        <span className="text-white/30 text-[10px] font-body flex items-center gap-1 mt-0.5 group-hover:text-wect-red-light/70 transition-colors duration-300">
          View Details <ArrowRight size={9} className="group-hover:translate-x-0.5 transition-transform" />
        </span>
      </div>
    </div>
  )
}

export default function ToolingPortfolio({ activeFilter = 'ALL PRODUCTS', setActiveFilter, selectedProduct, setSelectedProduct }) {
  const [modalImgIndex, setModalImgIndex] = useState(0)
  const navigate = useNavigate()
  const [comparedProducts, setComparedProducts] = useState([])
  const [showCompareModal, setShowCompareModal] = useState(false)

  const handleCompareToggle = (prod) => {
    setComparedProducts(prev => {
      if (prev.find(p => p.id === prod.id)) {
        return prev.filter(p => p.id !== prod.id)
      }
      if (prev.length >= 3) {
        alert('You can compare a maximum of 3 products at a time.')
        return prev
      }
      return [...prev, prod]
    })
  }

  const handleRemoveCompare = (prod) => {
    setComparedProducts(prev => prev.filter(p => p.id !== prod.id))
  }

  const handleClearCompare = () => {
    setComparedProducts([])
  }

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
        className="bg-transparent text-white pt-12 pb-6 lg:pt-16 lg:pb-8 font-body relative overflow-hidden border-t border-white/5"
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



          {/* Two-Column Workbench Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center mb-8">

            {/* Left Column: Image with overlay arrows (col-span-6) */}
            <div className="lg:col-span-6">

              {/* Image Frame Container with overlaid arrows */}
              <div
                className={`relative w-full h-[320px] sm:h-[420px] lg:h-[440px] rounded-3xl overflow-hidden flex items-center justify-center border border-white/10 shadow-2xl group transition-all duration-300 ${isJpg ? 'bg-white' : 'bg-[#060a12]/80 shadow-inner'}`}
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

                {/* Prev Arrow — only when multiple images */}
                {selectedProduct.images && selectedProduct.images.length > 1 && (
                  <button
                    onClick={prevOption}
                    className="absolute left-3 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-black/40 border border-white/20 flex items-center justify-center text-white hover:bg-wect-red hover:border-wect-red transition-all duration-200 cursor-pointer opacity-0 group-hover:opacity-100"
                    aria-label="Previous image"
                  >
                    <ChevronLeft size={18} />
                  </button>
                )}

                {/* Next Arrow — only when multiple images */}
                {selectedProduct.images && selectedProduct.images.length > 1 && (
                  <button
                    onClick={nextOption}
                    className="absolute right-3 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-black/40 border border-white/20 flex items-center justify-center text-white hover:bg-wect-red hover:border-wect-red transition-all duration-200 cursor-pointer opacity-0 group-hover:opacity-100"
                    aria-label="Next image"
                  >
                    <ChevronRight size={18} />
                  </button>
                )}

                {/* Dot indicator — only when multiple images */}
                {selectedProduct.images && selectedProduct.images.length > 1 && (
                  <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-1.5 z-30">
                    {selectedProduct.images.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setModalImgIndex(i)}
                        className={`rounded-full transition-all duration-300 cursor-pointer border-0 p-0 ${i === modalImgIndex ? 'w-5 h-1.5 bg-wect-red-light' : 'w-1.5 h-1.5 bg-white/30 hover:bg-white/60'}`}
                      />
                    ))}
                  </div>
                )}

                {/* Product Image */}
                <img
                  src={selectedProduct.images ? selectedProduct.images[modalImgIndex] : selectedProduct.img}
                  alt={selectedProduct.title}
                  className="max-h-[90%] max-w-[90%] object-contain relative z-10 transition-transform duration-500 group-hover:scale-102 select-none"
                />

                {/* Scanning Beam */}
                <div
                  className="absolute inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-wect-red-light/40 to-transparent pointer-events-none z-20"
                  style={{ top: '0%', animation: 'scanLine 3.5s linear infinite' }}
                />
              </div>
            </div>

            {/* Right Column: Specification Details & Cards (col-span-6) */}
            <div className="lg:col-span-6 space-y-5">

              {/* Product Info */}
              <div className="space-y-4">

                <h2 className="text-3xl sm:text-4xl font-display font-black uppercase text-white tracking-wide leading-tight">
                  {selectedProduct.title}
                </h2>
                <p className="text-white/60 text-sm leading-relaxed font-light font-body border-t border-white/5 pt-4">
                  {selectedProduct.desc}
                </p>
              </div>



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

        {/* Product Grid */}
        <motion.div
          key={activeFilter}
          variants={gridContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5"
        >
          {filteredProducts.map((product) => (
            <motion.div key={product.id} variants={cardVariants}>
              <ProductCard
                product={product}
                onSelect={setSelectedProduct}
                isCompared={comparedProducts.some(p => p.id === product.id)}
                onCompareToggle={handleCompareToggle}
              />
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
