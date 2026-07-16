import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown, Mail, Phone, ArrowRight, MapPin, Award, Globe } from 'lucide-react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import logoImg from '../../assets/images/logo.png'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Products', href: '/products' },
  { label: 'Industries', href: '/industries' },
  { label: 'Contact Us', href: '/contact' },
]

const productCategories = [
  'Solid Carbide End Mills',
  'Solid Carbide Drills',
  'Tungaloy Indexable Tools',
  'Oemeta Coolants & Fluids',
  'Emkay Taps',
  'PCD Boring Tools',
  'Customized Cutters',
]

export default function Navbar({ onSelectCategory, onLogoClick }) {
  const [scrolled, setScrolled] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false)
  const { pathname } = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30)
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100)
      }
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const isSolid = scrolled || pathname !== '/'

  return (
    <>
      {/* Scroll Progress Indicator Bar */}
      <div 
        className="fixed top-0 left-0 h-[3px] bg-gradient-to-r from-wect-blue via-wect-red to-wect-red-light z-[100] transition-all duration-100 ease-out" 
        style={{ width: `${scrollProgress}%` }}
      />

      <motion.header
        className="fixed top-0 left-0 right-0 z-50 font-body"
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Top Info Bar — hidden on mobile, shown on sm+ */}
        <div className={`hidden sm:block w-full py-3 transition-all duration-500 border-b text-[10px] font-mono tracking-widest ${
          isSolid
            ? 'bg-wect-navy-light/80 backdrop-blur-md border-white/5 text-steel-400'
            : 'bg-wect-navy/30 backdrop-blur-sm border-white/5 text-steel-300'
        }`}>
          <div className="section-container w-full flex flex-wrap items-center justify-between gap-4">
            {/* Left side: Contact Info */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
              <a
                href="mailto:info@wecttools.com"
                className="hover:text-wect-red-light transition-colors flex items-center gap-1.5 text-steel-300 hover:text-white"
              >
                <Mail size={10} className="shrink-0 text-wect-red-light" />
                <span>info@wecttools.com</span>
              </a>
              <a
                href="tel:+919900858297"
                className="hover:text-wect-red-light transition-colors flex items-center gap-1.5 text-steel-300 hover:text-white"
              >
                <Phone size={10} className="shrink-0 text-wect-red-light" />
                <span>+91 99008 58297</span>
              </a>
              <div className="flex items-center gap-1.5 text-steel-300">
                <MapPin size={10} className="shrink-0 text-wect-red-light" />
                <span>Peenya Industrial Area, Bangalore, India</span>
              </div>
            </div>
            {/* Right side: Certifications & Socials */}
            <div className="flex items-center gap-6 flex-wrap">
              <div className="flex items-center gap-1.5 text-steel-300">
                <Award size={10} className="text-wect-red-light" />
                <span>ISO 9001:2015 CERTIFIED</span>
              </div>
              <div className="flex items-center gap-1.5 text-steel-300">
                <Globe size={10} className="text-wect-red-light" />
                <span>EXPORT WORLDWIDE</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Bar with Glassmorphism Backdrop Blur on Scroll */}
        <div className={`transition-all duration-500 ${
          isSolid
            ? 'bg-wect-navy/70 backdrop-blur-lg py-4 border-b border-white/10 shadow-glass'
            : 'bg-transparent py-6'
        }`}>
          <div className="section-container w-full flex items-center justify-between gap-4">

            {/* Logo */}
            <div className="flex items-center gap-3 group shrink-0">
              <Link
                to="/"
                onClick={(e) => {
                  if (window.lenis) {
                    window.lenis.scrollTo(0)
                  } else {
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                  }
                  if (onLogoClick) {
                    if (pathname === '/') {
                      e.preventDefault()
                    }
                    onLogoClick()
                  }
                }}
                className="bg-white rounded-xl p-2 flex items-center justify-center h-12 w-auto min-w-[48px] transition-all duration-300 shadow-sm border border-white/10 hover:border-wect-red-light/30 cursor-pointer"
              >
                <img
                  src={logoImg}
                  alt="WECT Logo"
                  className="h-8 w-auto object-contain select-none logo-img"
                />
              </Link>
              <div className="flex flex-col justify-center leading-none select-none">
                <span className="font-display font-black text-[15px] sm:text-[17px] tracking-tight uppercase text-white">
                  WELL EDGE
                </span>
                <span className="font-display font-black text-[9px] sm:text-[10px] tracking-[0.18em] uppercase text-transparent bg-clip-text bg-gradient-to-r from-white to-wect-red-light mt-1">
                  CUTTING TOOLS
                </span>
              </div>
            </div>

            {/* Desktop Nav */}
            <div className="hidden xl:flex items-center gap-10">
              <nav className="flex items-center gap-8">
                {navLinks.map((link) => {
                  if (link.label === 'Products') {
                    return (
                      <div
                        key={link.label}
                        className="relative group py-2"
                        onMouseEnter={() => setDropdownOpen(true)}
                        onMouseLeave={() => setDropdownOpen(false)}
                      >
                        <Link
                          to={link.href}
                          onClick={() => {
                            if (onSelectCategory) onSelectCategory('ALL PRODUCTS')
                            if (window.lenis) {
                              window.lenis.scrollTo(0)
                            } else {
                              window.scrollTo({ top: 0, behavior: 'smooth' })
                            }
                          }}
                          className={`font-display font-bold uppercase text-[11px] tracking-widest transition-colors duration-200 flex items-center gap-1 cursor-pointer outline-none focus-visible:outline-none ${
                            dropdownOpen || pathname === '/products' ? 'text-wect-red-light' : 'text-white/80 hover:text-white'
                          }`}
                        >
                          {link.label}
                          <ChevronDown size={12} className={`transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} />
                        </Link>
                        <span className={`absolute -bottom-1 left-0 h-[2px] bg-wect-red-light transition-all duration-200 rounded-full ${
                          pathname === '/products' ? 'w-full shadow-[0_0_8px_rgba(229,33,61,0.6)]' : 'w-0 group-hover:w-full'
                        }`} />

                        <AnimatePresence>
                          {dropdownOpen && (
                            <motion.div
                              initial={{ opacity: 0, y: 12, scale: 0.97 }}
                              animate={{ opacity: 1, y: 0, scale: 1 }}
                              exit={{ opacity: 0, y: 12, scale: 0.97 }}
                              transition={{ duration: 0.2, ease: 'easeOut' }}
                              className="absolute left-0 mt-4 w-80 bg-wect-navy-light border border-white/10 rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.5)] p-3 z-50 text-white"
                            >
                              <div className="flex flex-col gap-0.5">
                                {productCategories.map((cat) => (
                                  <button
                                    key={cat}
                                    onClick={() => {
                                      if (onSelectCategory) onSelectCategory(cat)
                                      setDropdownOpen(false)
                                    }}
                                    className="text-left font-body text-xs tracking-wide px-3 py-2.5 text-white/70 hover:text-white hover:bg-white/5 rounded-xl transition-all duration-150 border-l-2 border-transparent hover:border-wect-red-light cursor-pointer"
                                  >
                                    {cat}
                                  </button>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    )
                  }

                  return (
                    <div key={link.label} className="relative group py-2">
                      <Link
                        to={link.href}
                        onClick={() => {
                          if (window.lenis) {
                            window.lenis.scrollTo(0)
                          } else {
                            window.scrollTo({ top: 0, behavior: 'smooth' })
                          }
                        }}
                        className={`font-display font-bold uppercase text-[11px] tracking-widest transition-colors duration-200 outline-none focus-visible:outline-none ${
                          pathname === link.href ? 'text-wect-red-light' : 'text-white/80 hover:text-white'
                        }`}
                      >
                        {link.label}
                      </Link>
                      <span className={`absolute -bottom-1 left-0 h-[2px] bg-wect-red-light transition-all duration-200 rounded-full ${
                        pathname === link.href ? 'w-full shadow-[0_0_8px_rgba(229,33,61,0.6)]' : 'w-0 group-hover:w-full'
                      }`} />
                    </div>
                  )
                })}
              </nav>

              <Link
                to="/contact"
                onClick={() => {
                  if (window.lenis) {
                    window.lenis.scrollTo(0)
                  } else {
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                  }
                }}
                className="font-display font-bold uppercase text-[11px] tracking-widest px-7 py-4 rounded-xl transition-all duration-300 bg-wect-red hover:bg-wect-red-dark text-white shadow-md hover:scale-[1.02] hover:shadow-[0_0_25px_rgba(229,33,61,0.55)] flex items-center gap-2 group border border-white/5 outline-none focus-visible:outline-none"
              >
                REQUEST A QUOTE
                <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>

            {/* Mobile Toggle */}
            <button
              className="xl:hidden transition-colors p-2 rounded-lg text-white/90 hover:text-wect-red-light"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Drawer (Premium Dark theme) */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-wect-navy flex flex-col pt-28 px-8 pb-10 overflow-y-auto"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Background grid overlay */}
            <div className="absolute inset-0 bg-grid-white opacity-[0.03] pointer-events-none" />

            <nav className="relative z-10 flex flex-col gap-1 mt-2">
              {navLinks.map((link) => {
                if (link.label === 'Products') {
                  return (
                    <div key={link.label} className="border-b border-white/5">
                      <button
                        onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                        className="w-full flex items-center justify-between font-display font-extrabold uppercase text-lg text-white/90 hover:text-wect-red-light transition-colors py-4"
                      >
                        <span>{link.label}</span>
                        <ChevronDown size={20} className={`text-white/40 transition-transform duration-200 ${mobileDropdownOpen ? 'rotate-180 text-wect-red-light' : ''}`} />
                      </button>
                      <AnimatePresence>
                        {mobileDropdownOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            className="overflow-hidden bg-wect-navy-light rounded-xl px-2 py-2 flex flex-col gap-1 mb-3"
                          >
                            {productCategories.map((cat) => (
                              <button
                                key={cat}
                                onClick={() => {
                                  if (onSelectCategory) onSelectCategory(cat)
                                  setMobileOpen(false)
                                  if (pathname !== '/products') navigate('/products')
                                }}
                                className="text-left font-body text-xs tracking-wide py-2 px-3 text-white/70 hover:text-white border-l-2 border-transparent hover:border-wect-red-light cursor-pointer rounded-lg hover:bg-white/5"
                              >
                                  {cat}
                              </button>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )
                }
                return (
                  <Link
                    key={link.label}
                    to={link.href}
                    onClick={() => {
                      if (onSelectCategory && link.label === 'Products') {
                        onSelectCategory('ALL PRODUCTS')
                      }
                      setMobileOpen(false)
                      window.scrollTo({ top: 0, behavior: 'smooth' })
                    }}
                    className="font-display font-extrabold uppercase text-lg text-white/90 hover:text-wect-red-light transition-colors py-4 border-b border-white/5 block"
                  >
                    {link.label}
                  </Link>
                )
              })}
            </nav>
            <div className="relative z-10 mt-8 flex flex-col gap-3">
              <Link
                to="/contact"
                onClick={() => {
                  setMobileOpen(false)
                  window.scrollTo({ top: 0, behavior: 'smooth' })
                }}
                className="bg-wect-red hover:bg-wect-red-dark text-white font-display font-bold uppercase text-center py-4 rounded-[4px] tracking-widest text-xs shadow-md transition-all duration-300 block"
              >
                REQUEST A QUOTE
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
