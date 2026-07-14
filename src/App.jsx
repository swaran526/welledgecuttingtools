import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Lenis from 'lenis'

import Navbar from './components/layout/Navbar'
import logoImg from './assets/images/logo.png'
import Footer from './components/layout/Footer'
import Chatbot from './components/layout/Chatbot'
import Preloader from './components/layout/Preloader'
import ScrollHelper from './components/layout/ScrollHelper'

import Home from './pages/Home'
import AboutPage from './pages/AboutPage'
import ProductsPage from './pages/ProductsPage'
import WhyUsPage from './pages/WhyUsPage'
import IndustriesPage from './pages/IndustriesPage'
import ContactPage from './pages/ContactPage'
import ManufacturingPage from './pages/ManufacturingPage'
import GalleryPage from './pages/GalleryPage'
import { productsData } from './components/sections/ToolingPortfolio'

export default function App() {
  const [activeFilter, setActiveFilter] = useState('ALL PRODUCTS')
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [showLogoModal, setShowLogoModal] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [showCursorGlow, setShowCursorGlow] = useState(false)
  const [showBackToTop, setShowBackToTop] = useState(false)

  // Initialize Lenis smooth scroll & scroll listener
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300)
    }
    window.addEventListener('scroll', handleScroll)

    return () => {
      lenis.destroy()
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  // Cursor tracking effect
  useEffect(() => {
    const updateMouse = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    const handleMouseEnter = () => setShowCursorGlow(true)
    const handleMouseLeave = () => setShowCursorGlow(false)

    window.addEventListener('mousemove', updateMouse)
    document.addEventListener('mouseenter', handleMouseEnter)
    document.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      window.removeEventListener('mousemove', updateMouse)
      document.removeEventListener('mouseenter', handleMouseEnter)
      document.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  const handleCloseModal = () => {
    setSelectedProduct(null)
    setActiveFilter('ALL PRODUCTS')
  }

  const handleSelectCategory = (category) => {
    setActiveFilter(category)
    
    if (category === 'ALL PRODUCTS') {
      setSelectedProduct(null)
    } else {
      const prod = productsData.find(p => p.category === category)
      if (prod) {
        setSelectedProduct(prod)
      }
    }

    if (window.location.pathname !== '/products') {
      window.location.href = '/products';
    } else {
      const el = document.getElementById('products')
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  // Register global filter callback for Chatbot integration
  useEffect(() => {
    window.onSelectCategoryFilter = (category) => {
      handleSelectCategory(category)
    }
    return () => {
      window.onSelectCategoryFilter = null
    }
  }, [])

  return (
    <Router>
      <ScrollHelper />
      <AnimatePresence mode="wait">
        {loading && (
          <motion.div
            key="preloader"
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[9999]"
          >
            <Preloader onComplete={() => setLoading(false)} />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="min-h-screen bg-wect-navy text-white relative">
        <Navbar onSelectCategory={handleSelectCategory} onLogoClick={() => setShowLogoModal(true)} />
        
        <main>
          <Routes>
            <Route 
              path="/" 
              element={<Home setSelectedProduct={setSelectedProduct} />} 
            />
            <Route path="/about" element={<AboutPage />} />
            <Route 
              path="/products" 
              element={
                <ProductsPage 
                  activeFilter={activeFilter} 
                  setActiveFilter={setActiveFilter} 
                  selectedProduct={selectedProduct}
                  setSelectedProduct={setSelectedProduct}
                />
              } 
            />
            <Route path="/why-us" element={<WhyUsPage />} />
            <Route path="/industries" element={<IndustriesPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/manufacturing" element={<ManufacturingPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
          </Routes>
        </main>

        <Footer onSelectCategory={handleSelectCategory} onLogoClick={() => setShowLogoModal(true)} />
        
        {/* Product Details Modal */}
        <AnimatePresence>
          {selectedProduct && (
            <div 
              onClick={handleCloseModal}
              className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-md p-4 cursor-pointer"
            >
              <motion.div
                onClick={(e) => e.stopPropagation()}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="bg-white border border-slate-100 rounded-3xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto relative shadow-2xl cursor-default"
              >
                {/* Close Button */}
                <button
                  onClick={handleCloseModal}
                  className="absolute top-5 right-5 text-slate-400 hover:text-slate-600 transition-colors p-1 cursor-pointer"
                  aria-label="Close modal"
                >
                  <X size={24} />
                </button>

                {/* Modal Header */}
                <div className="mb-6 border-b border-slate-100 pb-4 pr-8">
                  <span className="font-mono text-xs text-wect-red tracking-widest uppercase block mb-1">
                    {selectedProduct.category}
                  </span>
                  <h3 className="text-2xl font-display font-black uppercase text-wect-blue tracking-wide">
                    {selectedProduct.title}
                  </h3>
                </div>

                {/* Single Product Image */}
                <div className="w-full h-[280px] sm:h-[360px] md:h-[420px] bg-slate-50 border border-slate-100 rounded-2xl overflow-hidden relative mb-6 flex items-center justify-center">
                  <img
                    src={selectedProduct.img}
                    alt={selectedProduct.title}
                    className="max-h-full max-w-full object-contain p-6"
                  />
                </div>

                {/* Main Product Description */}
                <div className="space-y-4">
                  <h4 className="font-mono text-xs text-wect-red tracking-wider uppercase">
                    // Tool Specifications
                  </h4>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-body">
                    {selectedProduct.desc}
                  </p>
                  <div className="pt-6 border-t border-slate-100 flex justify-end">
                    <button
                      className="btn-primary py-3 px-6 text-xs uppercase font-mono tracking-wider"
                      onClick={() => {
                        handleCloseModal();
                        window.location.href = '/contact';
                      }}
                    >
                      Request Technical Specifications
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
        
        {/* Logo Modal */}
        <AnimatePresence>
          {showLogoModal && (
            <div 
              onClick={() => setShowLogoModal(false)}
              className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-md p-4 cursor-pointer"
            >
              <motion.div
                onClick={(e) => e.stopPropagation()}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="bg-wect-navy-light border border-white/10 rounded-3xl p-8 max-w-lg w-full relative shadow-2xl cursor-default flex flex-col items-center"
              >
                {/* Close Button */}
                <button
                  onClick={() => setShowLogoModal(false)}
                  className="absolute top-5 right-5 text-white/40 hover:text-white transition-colors p-1 cursor-pointer"
                  aria-label="Close modal"
                >
                  <X size={24} />
                </button>

                {/* Modal Header */}
                <div className="mb-6 text-center border-b border-white/5 pb-4 w-full">
                  <h3 className="text-xl font-display font-black uppercase text-white tracking-wide">
                    Well Edge Cutting Tools
                  </h3>
                </div>

                {/* Logo Image */}
                <div className="w-full aspect-[4/3] bg-white border border-white/10 rounded-2xl overflow-hidden flex items-center justify-center p-6 mb-2 shadow-sm">
                  <img
                    src={logoImg}
                    alt="WECT Logo"
                    className="max-w-full max-h-full object-contain select-none logo-img"
                  />
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        <Chatbot />
      </div>

      {/* Premium Cursor Glow */}
      {showCursorGlow && (
        <div 
          className="pointer-events-none fixed top-0 left-0 w-96 h-96 bg-wect-blue/5 rounded-full blur-[100px] z-[99] -translate-x-1/2 -translate-y-1/2 transition-transform duration-75 ease-out"
          style={{
            transform: `translate3d(${mousePosition.x}px, ${mousePosition.y}px, 0)`
          }}
        />
      )}

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
        {/* Back to top */}
        <AnimatePresence>
          {showBackToTop && (
            <motion.button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-11 h-11 rounded-full bg-wect-blue border border-white/10 text-white flex items-center justify-center shadow-lg hover:bg-wect-red hover:shadow-glow-red transition-all cursor-pointer"
              aria-label="Back to top"
            >
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M18 15l-6-6-6 6" />
              </svg>
            </motion.button>
          )}
        </AnimatePresence>

        {/* WhatsApp Button */}
        <motion.a
          href="https://wa.me/919900858297"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="w-11 h-11 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:shadow-[0_0_20px_rgba(37,211,102,0.4)] transition-all cursor-pointer border border-white/10"
          aria-label="Contact on WhatsApp"
        >
          <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.963C16.588 2.02 14.12 1.001 12.01 1.001c-5.437 0-9.863 4.373-9.867 9.801-.001 1.73.473 3.41 1.37 4.9l-.995 3.635 3.74-.975c1.472.84 2.977 1.306 4.389 1.306v-.006z" />
          </svg>
        </motion.a>
      </div>
    </Router>
  )
}
