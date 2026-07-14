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
import { Link, useLocation } from 'react-router-dom'
import logoImg from '../../assets/images/logo.png'

export default function Footer({ onSelectCategory, onLogoClick }) {
  const { pathname } = useLocation()

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
    <footer className="font-body bg-transparent py-12 relative overflow-hidden">
      <div className="section-container relative z-10">
        
        {/* Main Footer Card Container */}
        <div className="border border-white/10 rounded-[2.5rem] bg-white/[0.02] backdrop-blur-md p-8 lg:p-12 shadow-glass relative overflow-hidden mb-8">
          
          {/* Engineering blueprint grid background */}
          <div 
            className="absolute inset-0 bg-blueprint-grid pointer-events-none z-0" 
            style={{ 
              maskImage: 'radial-gradient(circle at 50% 50%, black 20%, transparent 80%)', 
              WebkitMaskImage: 'radial-gradient(circle at 50% 50%, black 20%, transparent 80%)' 
            }} 
          />

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
            
            {/* Column 1: Brand Profile (col-span-4) */}
            <div className="lg:col-span-4 space-y-6">
              <Link
                to="/"
                onClick={(e) => {
                  window.scrollTo({ top: 0, behavior: 'smooth' })
                  if (onLogoClick) {
                    if (pathname === '/') {
                      e.preventDefault()
                    }
                    onLogoClick()
                  }
                }}
                className="flex items-center gap-3 bg-transparent border-0 cursor-pointer p-0 text-left group"
              >
                <div className="bg-white rounded-xl p-1.5 flex items-center justify-center h-12 w-auto shadow-sm border border-white/10">
                  <img
                    src={logoImg}
                    alt="WECT Logo"
                    className="h-10 w-auto object-contain select-none logo-img"
                  />
                </div>
                <div className="flex flex-col leading-none">
                  <span className="font-display font-extrabold text-[15px] tracking-[0.16em] uppercase text-white">
                    Well Edge
                  </span>
                  <span className="font-display font-bold text-[10px] tracking-[0.16em] uppercase text-wect-red-light mt-0.5">
                    Cutting Tools
                  </span>
                </div>
              </Link>

              <p className="text-white/50 text-xs leading-relaxed font-light">
                WECT (Well Edge Cutting Tools) designs, manufactures, and supplies premium-grade carbide and cobalt tools for high-efficiency CNC machining.
              </p>

              {/* Standard Badges Row */}
              <div className="grid grid-cols-4 gap-2 pt-2 border-t border-white/5">
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

            {/* Column 2: Quick Links (col-span-2) */}
            <div className="lg:col-span-2 space-y-5">
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

            {/* Column 3: Products (col-span-2) */}
            <div className="lg:col-span-2 space-y-5">
              <h4 className="font-display font-bold uppercase text-xs tracking-wider text-white relative pb-2 after:absolute after:bottom-0 after:left-0 after:w-8 after:h-[2px] after:bg-wect-red-light">
                Our Products
              </h4>
              <ul className="flex flex-col gap-2.5">
                {[
                  'Solid Carbide Tools',
                  'Customized Form Tools',
                  'Cermet & PCD Reamers',
                  'PCD Boring Tools',
                  'Hobs & Firtree Cutters',
                  'PCD & PCBN Special Inserts',
                  'Fine Boring Guide Pad Tools',
                  'Special PCD Wiper Cartridges',
                  'Micro Tools & Blank Prep',
                  'Customized Form Cutters'
                ].map((product) => (
                  <li key={product}>
                    <button
                      onClick={() => {
                        if (onSelectCategory) onSelectCategory(product)
                        if (pathname !== '/products') {
                          window.location.href = '/products';
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

            {/* Column 4: Contact Info (col-span-2) */}
            <div className="lg:col-span-2 space-y-5">
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

            {/* Column 5: Find Us Map & Download (col-span-2) */}
            <div className="lg:col-span-2 space-y-5">
              <h4 className="font-display font-bold uppercase text-xs tracking-wider text-white relative pb-2 after:absolute after:bottom-0 after:left-0 after:w-8 after:h-[2px] after:bg-wect-red-light">
                Find Us
              </h4>
              <div className="relative w-full h-28 rounded-2xl overflow-hidden border border-white/10 group shadow-sm bg-white/5">
                <iframe
                  title="WECT Plant Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.037130096238!2d77.52554761482274!3d12.971598790856018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3d84a7e937d1%3A0xea8fc7beee095a5f!2sPeenya%20Industrial%20Area%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1655000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(85%) contrast(110%) opacity(80%)' }}
                  allowFullScreen=""
                  loading="lazy"
                />
              </div>
            </div>

          </div>

          {/* Separator Divider Line */}
          <div className="h-px bg-white/5 my-8 relative z-10" />

          {/* Bottom Highlight Metrics Row */}
          <div className="relative z-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 divide-y md:divide-y-0 lg:divide-x divide-white/5">
            {[
              { icon: ShieldCheck, value: '25+', label: 'Years Experience' },
              { icon: Wrench, value: '500+', label: 'Products' },
              { icon: Users, value: '1000+', label: 'Happy Customers' },
              { icon: Target, value: '98%', label: 'Precision Accuracy' },
              { icon: Globe, value: 'Global', label: 'Export Network' },
              { icon: Headphones, value: 'Expert', label: 'Technical Support' }
            ].map((m, idx) => (
              <div key={idx} className={`flex items-center gap-3 ${idx > 0 ? 'pt-4 md:pt-0 lg:pl-6' : ''}`}>
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/60 shrink-0">
                  <m.icon size={18} />
                </div>
                <div>
                  <div className="font-display font-black text-white text-base leading-none">{m.value}</div>
                  <div className="font-body text-[10px] text-white/40 mt-1.5 font-light leading-none">{m.label}</div>
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
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
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
