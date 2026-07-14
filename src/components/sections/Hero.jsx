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

// Import 10 precision tooling images from the assets folder
import img1 from '../../assets/images/hero/hero_1.png';
import img2 from '../../assets/images/hero/hero_2.png';
import img3 from '../../assets/images/hero/hero_3.png';
import img4 from '../../assets/images/hero/hero_4.jpeg';
import img5 from '../../assets/images/hero/hero_5.png';
import img6 from '../../assets/images/hero/hero_6.png';
import img7 from '../../assets/images/hero/hero_7.png';
import img8 from '../../assets/images/hero/hero_8.png';
import img9 from '../../assets/images/hero/hero_9.png';
import img10 from '../../assets/images/hero/hero_10.png';

const slideshowImages = [
  img1, img2, img3, img4, img5, img6, img7, img8, img9, img10
];

export default function Hero() {
  const [slideshowIndex, setSlideshowIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideshowIndex((prev) => (prev + 1) % slideshowImages.length);
    }, 4500);
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
          style={{ maskImage: 'radial-gradient(circle at 50% 50%, black, transparent 80%)' }} 
        />
        
        {/* Soft glowing ambient spots */}
        <div className="absolute bottom-[20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-wect-red/5 blur-[120px]" />
        <div className="absolute top-[20%] left-[-10%] w-[450px] h-[450px] rounded-full bg-wect-blue/10 blur-[130px]" />
      </div>

      {/* Main Grid Content Row */}
      <div className="relative z-10 section-container w-full py-4 sm:py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center w-full">
          
          {/* Left Column: Copy & Indicators */}
          <motion.div 
            className="lg:col-span-6 space-y-5 text-left"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="space-y-4">
              <h1 className="font-display font-black leading-[1.08] tracking-tight text-white text-[28px] sm:text-4xl md:text-5xl lg:text-[46px] xl:text-[56px] uppercase">
                Precision Cutting Tools
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-wect-red-light">
                  for Modern Machining
                </span>
              </h1>
              
              <p className="text-white/60 text-xs sm:text-sm leading-relaxed max-w-xl font-light border-t border-white/5 pt-4">
                Premium solid carbide, PCD, and PCBN cutting tools engineered for exceptional precision, 
                longer tool life, and consistent performance in the most demanding applications worldwide.
              </p>
            </div>

            {/* Technical Specifications checklist row */}
            <div className="grid grid-cols-1 xs:grid-cols-2 gap-2 sm:gap-3 border-y border-white/5 py-3 sm:py-4 text-white/50 text-[9px] sm:text-[10px] font-mono tracking-wider uppercase select-none max-w-xl">
              <div className="flex items-center gap-2">
                <Activity size={10} className="text-wect-red-light shrink-0" />
                <span>SOLID CARBIDE & PCD MATRIX</span>
              </div>
              <div className="flex items-center gap-2">
                <Cpu size={10} className="text-wect-red-light shrink-0" />
                <span>COBALT & PVD COATING</span>
              </div>
              <div className="flex items-center gap-2">
                <Layers size={10} className="text-wect-red-light shrink-0" />
                <span>CUSTOM FORM GEOMETRIES</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck size={10} className="text-wect-red-light shrink-0" />
                <span>100% OPTICAL QUALITY METROLOGY</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3 pt-1 sm:pt-2">
              <Link
                to="/contact"
                className="btn-primary text-xs tracking-wider rounded-full py-3 sm:py-3.5 px-6 sm:px-8"
              >
                REQUEST A QUOTE
                <ArrowRight size={14} />
              </Link>
              <Link
                to="/products"
                className="btn-secondary text-xs tracking-wider rounded-full py-3 sm:py-3.5 px-6 sm:px-8"
              >
                EXPLORE PRODUCTS
                <ArrowRight size={14} />
              </Link>
            </div>

            {/* Authorized Partners Grid */}
            <div className="border-t border-white/5 pt-4 mt-3.5 space-y-4 max-w-xl">
              <div className="flex items-center justify-center gap-2 w-full">
                <span className="w-1.5 h-1.5 bg-wect-red-light rounded-full animate-pulse" />
                <span className="font-mono text-[9px] tracking-[0.2em] text-white/40 font-bold uppercase select-none text-center">
                  OFFICIAL AUTHORIZED DEALERS
                </span>
              </div>
              <div className="grid grid-cols-3 gap-2 sm:gap-3">
                {dealers.map((dealer) => (
                  <a
                    key={dealer.name}
                    href={dealer.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative bg-white/[0.02] border border-white/5 rounded-2xl py-3.5 px-4 flex flex-col items-center justify-center transition-all duration-300 hover:border-wect-red-light/35 hover:bg-white/[0.04] shadow-glass group"
                  >
                    {/* Top glowing line on card hover */}
                    <div className="absolute top-0 left-6 right-6 h-[2px] bg-gradient-to-r from-transparent via-wect-red-light/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    <span className="font-display font-black text-sm tracking-wider text-wect-red-light uppercase group-hover:scale-105 transition-transform duration-300 select-none">
                      {dealer.name}
                    </span>
                    <div className="flex items-center gap-1.5 mt-1 font-mono text-[6px] tracking-widest text-white/20 group-hover:text-white/45 transition-colors uppercase">
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
            <div className="absolute inset-0 bg-gradient-to-tr from-wect-blue/20 to-wect-red/20 rounded-[2.5rem] transform rotate-2 scale-[1.02] blur-sm pointer-events-none" />
            
            <div className="relative w-full aspect-[4/3] sm:aspect-[1.1] lg:aspect-[1.05] xl:aspect-[1.15] bg-white/5 border border-white/10 rounded-[2.5rem] overflow-hidden shadow-glass z-10 transition-all duration-300 hover:border-wect-red-light/30 group">
              <AnimatePresence mode="popLayout">
                <motion.img
                  key={slideshowIndex}
                  src={slideshowImages[slideshowIndex]}
                  alt="WECT precision machining"
                  className="absolute inset-0 w-full h-full object-cover brightness-[0.55] group-hover:brightness-[0.45] transition-all duration-500"
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                />
              </AnimatePresence>

              <div className="absolute inset-0 p-8 flex flex-col justify-end z-10 pointer-events-none">
                <div className="space-y-1">
                  <span className="font-mono text-[8px] tracking-widest text-wect-red-light uppercase">METALLURGY</span>
                  <p className="text-white font-display font-black uppercase text-base sm:text-lg tracking-wide leading-tight">
                    High-Performance CNC Tooling
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}