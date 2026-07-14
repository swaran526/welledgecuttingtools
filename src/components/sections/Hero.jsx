import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Target, 
  Shield, 
  Zap, 
  Award, 
  Layers, 
  Settings, 
  Pencil
} from 'lucide-react';
import heroToolsImg from '../../assets/images/2.png';
import blueprintBg from '../../assets/images/why_us_blueprint_product.png';

export default function Hero() {
  const floatingCards = [
    {
      icon: Target,
      title: '±0.002mm',
      desc: 'ULTRA PRECISION'
    },
    {
      icon: Award,
      title: 'PREMIUM',
      desc: 'CARBIDE'
    },
    {
      icon: Layers,
      title: 'PVD COATING',
      desc: 'TECHNOLOGY'
    },
    {
      icon: Settings,
      title: 'OEM',
      desc: 'MANUFACTURING'
    },
    {
      icon: Pencil,
      title: 'CUSTOM TOOL',
      desc: 'DESIGN'
    }
  ];

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
      ),
      logo: (
        <svg viewBox="0 0 150 40" className="h-8 max-w-full">
          <text x="5" y="28" fill="#E5213D" className="font-display font-black italic select-none" fontSize="24" letterSpacing="-0.04em">Tungaloy</text>
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
      ),
      logo: (
        <div className="flex items-center gap-1 justify-center">
          <svg viewBox="0 0 130 40" className="h-8 max-w-full">
            <text x="5" y="28" fill="#3182CE" className="font-display font-black select-none" fontSize="24" letterSpacing="-0.02em">oemeta</text>
            <path d="M102 14 C102 14 96 23 96 26 C96 29 98.5 31 101.5 31 C104.5 31 107 29 107 26 C107 23 101.5 14 101.5 14 Z" fill="#D69E2E" />
            <path d="M114 18 C114 18 110 24 110 26 C110 28 111.5 29.5 113.5 29.5 C115.5 29.5 117 28 117 26 C117 24 113.5 18 113.5 18 Z" fill="#3182CE" opacity="0.8" />
          </svg>
        </div>
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
      ),
      logo: (
        <div className="flex items-center gap-2 justify-center">
          <svg viewBox="0 0 130 40" className="h-8 max-w-full">
            <text x="5" y="28" fill="#FFFFFF" className="font-display font-black select-none" fontSize="22" letterSpacing="0.05em">EMKAY</text>
            <rect x="90" y="12" width="34" height="16" fill="#C41230" rx="3" />
            <text x="94" y="24" fill="#FFFFFF" className="font-mono font-bold select-none" fontSize="10">TOOLS</text>
          </svg>
        </div>
      )
    }
  ];

  return (
    <section 
      className="relative min-h-screen xl:h-screen flex flex-col justify-between overflow-hidden bg-wect-navy pt-16 pb-2 lg:pt-20 lg:pb-4"
      style={{ background: 'linear-gradient(135deg, #080E1E 0%, #0D1628 50%, #111D3C 100%)' }}
    >
      {/* Animated Blueprint Background Image Layer 1 */}
      <motion.div 
        className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none mix-blend-screen bg-cover bg-center"
        style={{ 
          backgroundImage: `url(${blueprintBg})`,
          maskImage: 'radial-gradient(circle at 50% 50%, black 20%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(circle at 50% 50%, black 20%, transparent 80%)'
        }}
        animate={{
          scale: [1, 1.04, 1],
          rotate: [0, 0.4, 0, -0.4, 0]
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Blueprint Grid Overlay Layer 2 */}
      <motion.div 
        className="absolute inset-0 bg-blueprint-grid pointer-events-none z-0 opacity-25" 
        style={{ 
          maskImage: 'radial-gradient(circle at 50% 50%, black 20%, transparent 80%)', 
          WebkitMaskImage: 'radial-gradient(circle at 50% 50%, black 20%, transparent 80%)' 
        }} 
        animate={{
          x: [0, 5, 0],
          y: [0, -5, 0]
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Radial glows */}
      <div className="absolute top-[15%] right-[-10%] w-[500px] h-[500px] rounded-full bg-wect-blue/10 blur-[130px] pointer-events-none z-0" />
      <div className="absolute bottom-[15%] left-[-5%] w-[400px] h-[400px] rounded-full bg-wect-red/5 blur-[100px] pointer-events-none z-0" />

      {/* Main Content Grid (Vertically Centered) */}
      <div className="relative z-10 section-container w-full flex-grow flex items-center py-4 lg:py-2">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-4 items-center w-full">
          
          {/* LEFT COLUMN: Text Content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-3">
              <span className="font-display font-black text-xs sm:text-sm tracking-[0.2em] text-wect-red-light uppercase block">
                PRECISION ENGINEERING
              </span>
              
              <h1 className="font-display font-black leading-[1.05] tracking-tight text-white text-3xl sm:text-4xl lg:text-[40px] xl:text-[48px] uppercase">
                PRECISION CUTTING TOOLS
                <br />
                FOR <span className="text-wect-red-light">MODERN MANUFACTURING</span>
              </h1>
              
              <p className="text-white/70 text-xs sm:text-sm leading-relaxed max-w-xl font-light">
                Premium solid carbide, PCD, and PCBN cutting tools engineered for exceptional precision, 
                longer tool life, and consistent performance in the most demanding applications worldwide.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 pt-1">
              <Link
                to="/contact"
                className="bg-wect-red hover:bg-wect-red-dark text-white font-display font-bold text-[10px] tracking-wider uppercase py-3.5 px-6 rounded-sm transition-all shadow-md flex items-center gap-2 cursor-pointer border border-white/5 hover:shadow-glow-red hover:translate-y-[-2px] duration-300"
              >
                REQUEST A QUOTE
                <ArrowRight size={13} />
              </Link>
              <Link
                to="/products"
                className="border border-white/20 hover:border-white/40 text-white font-display font-bold text-[10px] tracking-wider uppercase py-3.5 px-6 rounded-sm transition-all flex items-center gap-2 cursor-pointer hover:bg-white/5 hover:translate-y-[-2px] duration-300"
              >
                EXPLORE PRODUCTS
                <ArrowRight size={13} />
              </Link>
            </div>
          </div>

          {/* RIGHT COLUMN: Interactive Image & Feature Indicators */}
          <div className="lg:col-span-5 relative flex items-center justify-center min-h-[260px] sm:min-h-[340px] w-full">
            
            {/* Engineering circles / blueprint spinner backdrop */}
            <div className="absolute top-1/2 left-[44%] -translate-x-1/2 -translate-y-1/2 w-[260px] h-[260px] sm:w-[360px] sm:h-[360px] pointer-events-none z-0">
              <div className="absolute inset-0 rounded-full border border-white/5 animate-spin-slow animate-[spin_40s_linear_infinite]" />
              <div className="absolute inset-[24px] rounded-full border border-wect-blue/10 animate-[spin_25s_linear_infinite_reverse]" />
              <div className="absolute inset-[48px] rounded-full border border-wect-red/5 animate-[spin_30s_linear_infinite]" />
              <div className="absolute inset-[64px] rounded-full bg-wect-blue/5 blur-[50px]" />
            </div>

            {/* Image Container with Rock Base */}
            <div className="relative z-10 w-[200px] sm:w-[260px] aspect-[1/1.2] flex items-center justify-center pointer-events-none select-none mr-20">
              <motion.img
                src={heroToolsImg}
                alt="WECT Precision Cutting Tools"
                animate={{ 
                  y: [0, -6, 0],
                  rotate: [0, 0.4, 0, -0.4, 0]
                }}
                transition={{ 
                  duration: 6, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                className="max-h-full max-w-full object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.6)]"
              />
            </div>

            {/* Vertical Floating Feature Cards Stacked on Right */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 flex flex-col gap-2.5 z-20 w-[140px] sm:w-[170px]">
              {floatingCards.map((card, idx) => {
                const CardIcon = card.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: 15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.08 }}
                    whileHover={{ x: -4, borderColor: 'rgba(229, 33, 61, 0.3)' }}
                    className="relative bg-wect-navy/85 backdrop-blur-md border border-white/10 rounded-lg p-2.5 sm:p-3 flex items-center gap-2.5 transition-all duration-300 group cursor-default shadow-md"
                  >
                    {/* Left Red Glow Marker */}
                    <div className="absolute left-0 top-2.5 bottom-2.5 w-[2px] bg-wect-red-light rounded-r opacity-60 group-hover:opacity-100 group-hover:bg-wect-red transition-all" />
                    
                    {/* Icon */}
                    <div className="w-7 h-7 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-white/70 group-hover:text-wect-red-light transition-colors">
                      <CardIcon size={12} />
                    </div>

                    {/* Text */}
                    <div className="flex flex-col leading-none">
                      <span className="font-display font-extrabold text-[9px] sm:text-[10px] text-white tracking-wide">
                        {card.title}
                      </span>
                      <span className="font-mono text-[7px] sm:text-[8px] text-white/50 group-hover:text-white/70 tracking-wider mt-1 transition-colors">
                        {card.desc}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </div>

          </div>

        </div>
      </div>

      {/* DEALERS CARD GRID (Aligned neatly at the bottom) */}
      <div className="relative z-10 section-container w-full mt-2 border-t border-white/5 pt-2 pb-1">
         {/* Row Header with Red Accent Lines */}
         <div className="flex items-center justify-center gap-6 mb-4">
           <div className="h-px bg-gradient-to-r from-transparent via-wect-red-light to-wect-red-light flex-grow max-w-[120px] relative hidden sm:block">
             <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-1 bg-wect-red-light rounded-full" />
           </div>
           <span className="font-mono text-[8px] tracking-[0.25em] text-white/55 font-bold uppercase text-center">
             OFFICIAL AUTHORIZED DEALER OF
           </span>
           <div className="h-px bg-gradient-to-l from-transparent via-wect-red-light to-wect-red-light flex-grow max-w-[120px] relative hidden sm:block">
             <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-1 bg-wect-red-light rounded-full" />
           </div>
         </div>

         {/* Dealers Cards Grid (3 Columns) */}
         <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 max-w-[64rem] mx-auto">
           {dealers.map((dealer, idx) => (
             <a
               key={dealer.name}
               href={dealer.url}
               target="_blank"
               rel="noopener noreferrer"
               className="relative bg-wect-navy-light/45 backdrop-blur-md border border-white/10 rounded-xl p-3 flex flex-col items-center justify-between min-h-[90px] transition-all duration-300 group cursor-pointer hover:border-wect-red-light/35 hover:bg-white/10"
             >
               {/* Top Accent Line */}
               <div className="absolute top-0 left-6 right-6 h-[1.5px] bg-gradient-to-r from-transparent via-wect-red-light/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

               {/* Logo Area */}
               <div className="flex-grow flex items-center justify-center py-2 w-full">
                 {dealer.logo}
               </div>

               {/* Separator */}
               <div className="w-full h-px bg-white/5 my-1.5" />

               {/* Dealer Metadata Footer */}
               <div className="w-full flex items-center justify-between text-[8px] tracking-wider font-mono">
                 <span className="text-white/40 group-hover:text-white/60 transition-colors">AUTHORIZED DEALER</span>
                 <div className="flex items-center gap-1">
                   <span className="text-white/60 font-bold">{dealer.country}</span>
                   {dealer.flag}
                 </div>
               </div>
             </a>
           ))}
         </div>
      </div>
    </section>
  );
}