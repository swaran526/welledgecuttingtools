import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ShieldCheck,
  Layers,
  Activity,
  Cpu
} from 'lucide-react';

// Import 9 precision tooling images from the assets folder
import img1 from '../../assets/images/hero/hero1.png';
import img2 from '../../assets/images/hero/hero2.png';
import img3 from '../../assets/images/hero/hero3.png';
import img4 from '../../assets/images/hero/hero4.jpeg';
import img5 from '../../assets/images/hero/hero5.jpg';
import img6 from '../../assets/images/hero/hero6.jpeg';
import img7 from '../../assets/images/hero/hero7.jpeg';
import img8 from '../../assets/images/hero/hero8.png';
import img9 from '../../assets/images/hero/hero9.jpg';

const slideshowImages = [
  { src: img1, name: 'Solid Carbide End Mills', category: 'SOLID CARBIDE' },
  { src: img2, name: 'PCD Special Boring Bars', category: 'PCD TOOLING' },
  { src: img3, name: 'Customized Profile Cutters', category: 'CUSTOM GEOMETRY' },
  { src: img4, name: 'Fine Boring Guide Pad Tools', category: 'FINE BORING' },
  { src: img5, name: 'Cermet & Carbide Reamers', category: 'ROTARY TOOLS' },
  { src: img6, name: 'Hobs & Firtree Cutters', category: 'GEAR HOBBING' },
  { src: img7, name: 'PCD & PCBN Special Inserts', category: 'SPECIAL INSERTS' },
  { src: img8, name: 'Micro End Mills & Drills', category: 'MICRO TOOLING' },
  { src: img9, name: 'Customized Form Tools', category: 'CUSTOM GEOMETRY' }
];

export default function Hero() {
  const [slideshowIndex, setSlideshowIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideshowIndex((prev) => (prev + 1) % slideshowImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const dealers = [
    {
      name: 'Tungaloy',
      country: 'JAPAN',
      url: 'https://tungaloy.com/in/',
      flag: (
        <svg className="w-4 h-3 rounded-[1px] shadow-sm border border-white/5" viewBox="0 0 3 2">
          <rect width="3" height="2" fill="#ffffff" />
          <circle cx="1.5" cy="1" r="0.6" fill="#BC002D" />
        </svg>
      )
    },
    {
      name: 'Oemeta',
      country: 'GERMANY',
      url: 'https://www.oemeta.com/',
      flag: (
        <svg className="w-4 h-3 rounded-[1px] shadow-sm border border-white/5" viewBox="0 0 5 3">
          <rect y="0" width="5" height="1" fill="#000000" />
          <rect y="1" width="5" height="1" fill="#DD0000" />
          <rect y="2" width="5" height="1" fill="#FFCC00" />
        </svg>
      )
    },
    {
      name: 'Emkay Tools',
      country: 'INDIA',
      url: 'https://emkaytools.com/',
      flag: (
        <svg className="w-4 h-3 rounded-[1px] shadow-sm border border-white/5" viewBox="0 0 3 2">
          <rect width="3" height="2" fill="#138808" />
          <rect width="3" height="1.33" fill="#ffffff" />
          <rect width="3" height="0.67" fill="#FF9933" />
          <circle cx="1.5" cy="1" r="0.2" fill="none" stroke="#000080" strokeWidth="0.04" />
          <circle cx="1.5" cy="1" r="0.04" fill="#000080" />
        </svg>
      )
    }
  ];

  return (
    <section
      className="relative w-full min-h-screen flex flex-col justify-center overflow-hidden bg-wect-navy pt-16 sm:pt-24 lg:pt-28 pb-10 sm:pb-12"
    >
      {/* Background Overlays */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Navy-matched vignetted overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-wect-navy/25 via-transparent to-wect-navy/40" />

        {/* Blueprint fine grid helper */}
        <div
          className="absolute inset-0 bg-blueprint-grid opacity-[0.06]"
          style={{ maskImage: 'radial-gradient(circle at 50% 50%, transparent 35%, black 85%)' }}
        />

        {/* Soft glowing ambient spots */}
        <div className="absolute bottom-[20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-wect-red/5 blur-[120px]" />
        <div className="absolute top-[20%] left-[-10%] w-[450px] h-[450px] rounded-full bg-wect-blue/10 blur-[130px]" />
      </div>

      {/* Main Grid Content Row */}
      <div className="relative z-10 section-container w-full py-2 sm:py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-16 items-center w-full">

          {/* Left Column: Copy & Indicators */}
          <motion.div
            className="lg:col-span-6 space-y-3 sm:space-y-5 text-left"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="space-y-2">
              <h1 className="font-display font-black leading-[1.08] tracking-tight text-white text-[24px] sm:text-4xl md:text-5xl lg:text-[46px] xl:text-[56px] uppercase">
                Precision Cutting Tools
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-wect-red-light">
                  for Modern Machining
                </span>
              </h1>

              <p className="text-white/60 text-xs sm:text-sm leading-relaxed max-w-xl font-light border-t border-white/5 pt-2">
                Premium solid carbide, cobalt, PCD cutting tools and PCBN inserts engineered for exceptional precision, extended tool life, and consistent performance across the most demanding machining applications.
              </p>
            </div>

            {/* Technical Specifications checklist row */}
            <div className="grid grid-cols-2 gap-1.5 sm:gap-3 border-y border-white/5 py-2 text-white/50 text-[8px] sm:text-[10px] font-mono tracking-wider uppercase select-none max-w-xl">
              <div className="flex items-center gap-1.5">
                <Activity size={9} className="text-wect-red-light shrink-0" />
                <span>SOLID CARBIDE & PCD MATRIX</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Cpu size={9} className="text-wect-red-light shrink-0" />
                <span>COBALT & PVD COATING</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Layers size={9} className="text-wect-red-light shrink-0" />
                <span>CUSTOM FORM GEOMETRIES</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck size={9} className="text-wect-red-light shrink-0" />
                <span>100% OPTICAL QUALITY METROLOGY</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <Link
                to="/contact"
                className="btn-primary text-[10px] sm:text-xs tracking-wider rounded-full py-2.5 sm:py-3.5 px-5 sm:px-8 w-full sm:w-auto justify-center"
              >
                REQUEST A QUOTE
                <ArrowRight size={13} />
              </Link>
              <Link
                to="/products"
                className="btn-secondary text-[10px] sm:text-xs tracking-wider rounded-full py-2.5 sm:py-3.5 px-5 sm:px-8 w-full sm:w-auto justify-center"
              >
                EXPLORE PRODUCTS
                <ArrowRight size={13} />
              </Link>
            </div>

            {/* Authorized Partners Grid */}
            <div className="border-t border-white/5 pt-3 space-y-2.5 max-w-xl">
              <div className="flex items-center justify-center gap-2 w-full">
                <span className="w-1.5 h-1.5 bg-wect-red-light rounded-full animate-pulse" />
                <span className="font-mono text-[8px] sm:text-[9px] tracking-[0.2em] text-white/40 font-bold uppercase select-none text-center">
                  OFFICIAL AUTHORIZED DEALERS
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-1.5 sm:gap-3">
                {dealers.map((dealer) => (
                  <a
                    key={dealer.name}
                    href={dealer.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative bg-white/[0.02] border border-white/5 rounded-xl sm:rounded-2xl py-2 px-1.5 sm:px-4 flex flex-col items-center justify-center transition-all duration-300 hover:border-wect-red-light/35 hover:bg-white/[0.04] shadow-glass group"
                  >
                    {/* Top glowing line on card hover */}
                    <div className="absolute top-0 left-4 right-4 h-[2px] bg-gradient-to-r from-transparent via-wect-red-light/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <span className="font-display font-black text-[11px] sm:text-sm tracking-wider text-wect-red-light uppercase group-hover:scale-105 transition-transform duration-300 select-none">
                      {dealer.name}
                    </span>
                    <div className="flex items-center gap-1 mt-0.5 font-mono text-[6px] tracking-widest text-white/20 group-hover:text-white/45 transition-colors uppercase">
                      <span>{dealer.country}</span>
                      {dealer.flag}
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            className="lg:col-span-6 relative"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          >
            {/* Rotated background gradient shadow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-wect-blue/20 to-wect-red/20 rounded-[2rem] sm:rounded-[2.5rem] transform rotate-2 scale-[1.02] blur-sm pointer-events-none" />

            <div className="relative w-full aspect-[4/3] sm:aspect-[1.1] lg:aspect-[1.05] xl:aspect-[1.15] bg-white/5 border border-white/10 rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden shadow-glass z-10 transition-all duration-300 hover:border-wect-red-light/30 group">
              <AnimatePresence mode="popLayout">
                <motion.img
                  key={slideshowIndex}
                  src={slideshowImages[slideshowIndex].src}
                  alt={slideshowImages[slideshowIndex].name}
                  className="absolute inset-0 w-full h-full object-cover transition-all duration-500"
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                />
              </AnimatePresence>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}