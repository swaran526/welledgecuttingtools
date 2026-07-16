import { useState, useEffect } from 'react'
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Download,
  Linkedin, 
  Twitter, 
  Youtube, 
  Facebook, 
  ChevronRight, 
  ChevronUp,
  Globe,
  Award,
  ShieldCheck,
  Cpu,
  Wrench,
  Users,
  Target,
  Headphones
} from 'lucide-react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import logoImg from '../../assets/images/logo.png'

export default function Footer({ onSelectCategory, onLogoClick }) {
  const { pathname } = useLocation()
  const navigate = useNavigate()

  const getLinkHref = (link) => {
    switch (link) {
      case 'Home':
        return '/'
      case 'About Us':
        return '/about'
      case 'Why WECT':
        return '/about#why-us'
      case 'Products':
        return '/products'
      case 'Industries':
        return '/industries'
      case 'Contact Us':
        return '/contact'
      default:
        return '/'
    }
  }

  return (
    <footer className="font-body bg-transparent py-6 relative overflow-hidden">
      <div className="section-container relative z-10">
        
        {/* Main Footer Card Container */}
        <div className="border border-white/5 rounded-[2.5rem] bg-white/[0.015] backdrop-blur-xl py-6 px-8 lg:py-8 lg:px-12 shadow-glass relative overflow-hidden mb-8">
          
          {/* Engineering blueprint grid background - Keep it mostly visible only near the edges (inverted mask) */}
          <div 
            className="absolute inset-0 bg-blueprint-grid pointer-events-none z-0" 
            style={{ 
              maskImage: 'radial-gradient(circle at 50% 50%, transparent 35%, black 85%)', 
              WebkitMaskImage: 'radial-gradient(circle at 50% 50%, transparent 35%, black 85%)' 
            }} 
          />

          <div className="relative z-10 flex flex-col md:flex-row md:flex-wrap lg:flex-nowrap justify-between gap-8 lg:gap-10">
            
            {/* Column 1: Brand Profile */}
            <div className="w-full sm:w-[48%] lg:w-[30%] space-y-5">
              <div className="flex items-center gap-3 bg-transparent border-0 p-0 text-left group">
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
                  className="bg-white rounded-xl p-1.5 flex items-center justify-center h-12 w-auto shadow-sm border border-white/10 cursor-pointer"
                >
                  <img
                    src={logoImg}
                    alt="WECT Logo"
                    className="h-10 w-auto object-contain select-none logo-img"
                  />
                </Link>
                <div className="flex flex-col leading-none select-none">
                  <span className="font-display font-extrabold text-[15px] tracking-[0.16em] uppercase text-white">
                    Well Edge
                  </span>
                  <span className="font-display font-bold text-[10px] tracking-[0.16em] uppercase text-wect-red-light mt-0.5">
                    Cutting Tools
                  </span>
                </div>
              </div>

              <p className="text-white/50 text-xs leading-relaxed font-light">
                WECT (Well Edge Cutting Tools) designs, manufactures, and supplies premium-grade carbide and cobalt tools for high-efficiency CNC machining.
              </p>

              {/* Standard Badges Row */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-white/5">
                {[
                  { icon: Globe, label: 'Global', sub: 'Supplier' },
                  { icon: Award, label: '9001:2015', sub: 'Certified' },
                  { icon: ShieldCheck, label: 'Premium', sub: 'Quality' },
                  { icon: Cpu, label: 'Precision', sub: 'Engineering' }
                ].map((b, idx) => (
                  <div key={idx} className="flex flex-col items-center text-center space-y-1">
                    <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/50">
                      <b.icon size={13} />
                    </div>
                    <span className="font-mono text-[7px] tracking-wider text-white/40 uppercase font-bold leading-tight">
                      {b.label}<br />{b.sub}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div className="w-full sm:w-[48%] lg:w-[15%] space-y-5">
              <h4 className="font-display font-bold uppercase text-xs tracking-wider text-white relative pb-2 after:absolute after:bottom-0 after:left-0 after:w-8 after:h-[2px] after:bg-wect-red-light">
                Quick Links
              </h4>
              <ul className="flex flex-col gap-2.5">
                {[
                  { label: 'Home', href: '/' },
                  { label: 'About Us', href: '/about' },
                  { label: 'Why WECT', href: '/about#why-us' },
                  { label: 'Products', href: '/products' },
                  { label: 'Industries', href: '/industries' },
                  { label: 'Contact Us', href: '/contact' }
                ].map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className={`text-xs flex items-center gap-1.5 group transition-colors duration-200 ${
                        pathname === link.href 
                          ? 'text-wect-red-light font-bold' 
                          : 'text-white/50 hover:text-white'
                      }`}
                    >
                      <ChevronRight size={11} className="text-white/20 group-hover:translate-x-0.5 transition-transform" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Products */}
            <div className="w-full sm:w-[48%] lg:w-[28%] space-y-5">
              <h4 className="font-display font-bold uppercase text-xs tracking-wider text-white relative pb-2 after:absolute after:bottom-0 after:left-0 after:w-8 after:h-[2px] after:bg-wect-red-light">
                Our Products
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5">
                {[
                  'Solid Carbide End Mills',
                  'Solid Carbide Drills',
                  'Tungaloy Indexable Tools',
                  'Oemeta Coolants & Fluids',
                  'Emkay Taps',
                  'PCD Boring Tools',
                  'Customized Cutters',
                ].map((product) => (
                  <li key={product}>
                    <button
                      onClick={() => {
                        if (onSelectCategory) onSelectCategory(product)
                        if (pathname !== '/products') {
                          navigate('/products');
                        } else {
                          const el = document.getElementById('products')
                          if (el) el.scrollIntoView({ behavior: 'smooth' })
                        }
                      }}
                      className="text-white/50 hover:text-wect-blue-light transition-all text-xs font-body flex items-center gap-1.5 group bg-transparent border-0 cursor-pointer p-0 text-left"
                    >
                      <ChevronRight size={11} className="text-white/20 group-hover:translate-x-0.5 transition-transform" />
                      {product}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Contact Info */}
            <div className="w-full sm:w-[48%] lg:w-[22%] space-y-5">
              <h4 className="font-display font-bold uppercase text-xs tracking-wider text-white relative pb-2 after:absolute after:bottom-0 after:left-0 after:w-8 after:h-[2px] after:bg-wect-red-light">
                Contact Info
              </h4>
              <div className="flex flex-col gap-4">
                <a 
                  href="tel:+919900858297" 
                  className="flex items-center gap-3 text-white/50 hover:text-wect-red-light transition-colors text-xs group"
                >
                  <Phone size={14} className="text-wect-red-light shrink-0" />
                  <span>+91 99008 58297</span>
                </a>
                
                <a 
                  href="mailto:info@wecttools.com" 
                  className="flex items-center gap-3 text-white/50 hover:text-wect-blue-light transition-colors text-xs group"
                >
                  <Mail size={14} className="text-wect-blue-light shrink-0" />
                  <span>info@wecttools.com</span>
                </a>
                
                <div className="flex items-start gap-3 text-white/50 text-xs">
                  <MapPin size={14} className="text-wect-red-light shrink-0 mt-0.5" />
                  <span className="font-light">
                    WECT – Well Edge Cutting Tools<br />
                    Peenya Industrial Area,<br />
                    Bangalore, Karnataka,<br />
                    India – 560058
                  </span>
                </div>

                <div className="flex items-start gap-3 text-white/50 text-xs">
                  <Clock size={14} className="text-wect-blue-light shrink-0 mt-0.5" />
                  <span className="font-light">
                    Mon - Sat: 9:00 AM - 6:00 PM<br />
                    Sunday: Closed
                  </span>
                </div>
              </div>
            </div>

          </div>

          {/* Separator Divider Line */}
          <div className="h-px bg-white/5 my-8 relative z-10" />

          {/* Bottom Highlight Metrics Row */}
          <div className="relative z-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-4 gap-y-6 sm:gap-8 lg:gap-10 lg:divide-x divide-white/5">
            {[
              { icon: ShieldCheck, value: '7+', label: 'Years Experience' },
              { icon: Wrench, value: '50+', label: 'Products' },
              { icon: Users, value: '250+', label: 'Happy Customers' },
              { icon: Target, value: '98%', label: 'Precision Accuracy' },
              { icon: Globe, value: 'Global', label: 'Export Network' },
              { icon: Headphones, value: 'Expert', label: 'Technical Support' }
            ].map((m, idx) => (
              <div key={idx} className={`flex items-center gap-2.5 sm:gap-4 ${idx > 0 ? 'lg:pl-8' : ''}`}>
                <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/70 shrink-0">
                  <m.icon size={16} className="sm:hidden" />
                  <m.icon size={22} className="hidden sm:block" />
                </div>
                <div>
                  <div className="font-display font-black text-white text-sm sm:text-lg leading-none">{m.value}</div>
                  <div className="font-body text-[8px] sm:text-[9px] text-white/40 mt-1 sm:mt-2 font-light leading-none uppercase tracking-wider">{m.label}</div>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Outer Bottom sub-bar Copyright */}
        <div className="flex flex-col items-center justify-center gap-3 text-white/35 text-[11px] font-body text-center px-4 relative mt-8">
          <p>© {new Date().getFullYear()} WECT – Well Edge Cutting Tools. All Rights Reserved. Specifications are subject to technical modifications.</p>
          <div className="flex items-center gap-4 justify-center">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <span className="text-white/10">|</span>
            <a href="#" className="hover:text-white transition-colors">Terms & Conditions</a>
          </div>
          <button
            onClick={() => {
              if (window.lenis) {
                window.lenis.scrollTo(0)
              } else {
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }
            }}
            className="md:absolute md:right-4 md:top-1/2 md:-translate-y-1/2 mt-2 md:mt-0 w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-wect-red-light hover:border-wect-red-light hover:bg-white/10 transition-all duration-300 cursor-pointer animate-pulse"
            aria-label="Back to top"
          >
            <ChevronUp size={14} />
          </button>
        </div>

      </div>
    </footer>
  )
}
