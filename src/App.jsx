import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import { Routes, Route, useNavigate } from 'react-router-dom'
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

import IndustriesPage from './pages/IndustriesPage'
import ContactPage from './pages/ContactPage'
import { productsData } from './components/sections/ToolingPortfolio'

export default function App() {
  const navigate = useNavigate()
  const [activeFilter, setActiveFilter] = useState('ALL PRODUCTS')
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [showLogoModal, setShowLogoModal] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [showCursorGlow, setShowCursorGlow] = useState(false)
  const [showBackToTop, setShowBackToTop] = useState(false)
  const [modalImgIndex, setModalImgIndex] = useState(0)

  // Reset modal image selector when product changes
  useEffect(() => {
    if (selectedProduct) {
      setModalImgIndex(0)
    }
  }, [selectedProduct])

  // Initialize Lenis smooth scroll & scroll listener
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
    })

    window.lenis = lenis

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
      window.lenis = null
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

  const handleSelectProduct = (product) => {
    setSelectedProduct(product)
    if (window.location.pathname !== '/products') {
      navigate('/products')
    }
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleSelectCategory = (category) => {
    setActiveFilter(category)

    if (category === 'ALL PRODUCTS') {
      setSelectedProduct(null)
    } else {
      // Match by exact title first (navbar shows product names), then fallback to category
      const prod = productsData.find(p => p.title === category) ||
                   productsData.find(p => p.category === category)
      if (prod) {
        setSelectedProduct(prod)
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
    }

    if (window.location.pathname !== '/products') {
      navigate('/products')
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
    <>
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
              element={<Home setSelectedProduct={handleSelectProduct} />} 
            />
            <Route path="/about" element={<AboutPage />} />
            <Route 
              path="/products" 
              element={
                <ProductsPage 
                  activeFilter={activeFilter} 
                  setActiveFilter={setActiveFilter} 
                  selectedProduct={selectedProduct}
                  setSelectedProduct={handleSelectProduct}
                />
              } 
            />

            <Route path="/industries" element={<IndustriesPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>

        <Footer onSelectCategory={handleSelectCategory} onLogoClick={() => setShowLogoModal(true)} />
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
                className="bg-wect-navy-light border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 max-w-lg w-full relative shadow-2xl cursor-default flex flex-col items-center"
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
      {/* Back to top */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            onClick={() => {
              if (window.lenis) {
                window.lenis.scrollTo(0)
              } else {
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="fixed bottom-[88px] right-[28px] z-40 w-11 h-11 rounded-full bg-wect-blue border border-white/10 text-white flex items-center justify-center shadow-lg hover:bg-wect-red hover:shadow-glow-red transition-all cursor-pointer animate-none"
            aria-label="Back to top"
          >
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M18 15l-6-6-6 6" />
            </svg>
          </motion.button>
        )}
      </AnimatePresence>

    </>
  )
}
