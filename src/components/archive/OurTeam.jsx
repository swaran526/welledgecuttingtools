import { motion, useMotionValue, useTransform, useMotionTemplate } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const teamMembers = [
  {
    name: 'Pavithra',
    role: 'Proprietor',
    bio: 'Leading the organization with strong vision and commitment.',
    initials: 'P',
    gradient: 'from-blue-600 via-sky-500 to-cyan-400',
    bgClass: 'from-blue-500/10 via-sky-500/5 to-cyan-500/10',
    glowColor: 'shadow-blue-500/25 group-hover:shadow-blue-500/40',
  },
  {
    name: 'Kumar',
    role: 'Sales & Application',
    bio: 'Driving sales growth and delivering customer-focused solutions.',
    initials: 'K',
    gradient: 'from-rose-500 via-orange-500 to-yellow-400',
    bgClass: 'from-rose-500/10 via-orange-500/5 to-yellow-500/10',
    glowColor: 'shadow-orange-500/25 group-hover:shadow-orange-500/40',
  },
  {
    name: 'Arun Kumar',
    role: 'Production Head',
    bio: 'Overseeing production operations with precision and efficiency.',
    initials: 'AK',
    gradient: 'from-emerald-600 via-emerald-400 to-lime-400',
    bgClass: 'from-emerald-500/10 via-emerald-500/5 to-lime-500/10',
    glowColor: 'shadow-emerald-500/25 group-hover:shadow-emerald-500/40',
  },
  {
    name: 'Madhu',
    role: 'Quality Engineer',
    bio: 'Ensuring top-tier quality standards at every stage of production.',
    initials: 'M',
    gradient: 'from-purple-600 via-indigo-500 to-pink-500',
    bgClass: 'from-purple-500/10 via-indigo-500/5 to-pink-500/10',
    glowColor: 'shadow-purple-500/25 group-hover:shadow-purple-500/40',
  },
  {
    name: 'Dhanviksha',
    role: 'Accounts Head',
    bio: 'Managing financial operations with accuracy and responsibility.',
    initials: 'D',
    gradient: 'from-pink-600 via-rose-500 to-orange-400',
    bgClass: 'from-pink-500/10 via-rose-500/5 to-orange-500/10',
    glowColor: 'shadow-pink-500/25 group-hover:shadow-pink-500/40',
  },
]

function TeamMemberCard({ member, variants, index }) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  // Perspective Tilt Effect
  const rotateX = useTransform(y, [-100, 100], [10, -10])
  const rotateY = useTransform(x, [-100, 100], [-10, 10])

  // Glowing cursor spotlight
  const glowX = useMotionValue(0)
  const glowY = useMotionValue(0)
  const glowBg = useMotionTemplate`radial-gradient(250px circle at ${glowX}px ${glowY}px, rgba(163, 230, 53, 0.08), transparent 80%)`

  function handleMouseMove(event) {
    const rect = event.currentTarget.getBoundingClientRect()
    const width = rect.width
    const height = rect.height

    // Calculate cursor pos relative to card
    const cursorX = event.clientX - rect.left
    const cursorY = event.clientY - rect.top
    glowX.set(cursorX)
    glowY.set(cursorY)

    // Calculate rotation values
    const mouseX = cursorX - width / 2
    const mouseY = cursorY - height / 2
    x.set(mouseX)
    y.set(mouseY)
  }

  function handleMouseLeave() {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      variants={variants}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
        perspective: 1000
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group bg-navy-950/60 border border-navy-800 hover:border-navy-700 rounded-2xl relative overflow-hidden shadow-2xl transition-all duration-300 flex flex-col h-full cursor-pointer select-none"
    >
      {/* Spotlight Glow Background hover */}
      <motion.div
        className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
        style={{ background: glowBg }}
      />

      {/* Top Half - Avatar Area with lighter bg and pattern */}
      <div
        className="p-6 pb-2 relative flex items-center justify-center bg-navy-900/40 border-b border-navy-800/40"
        style={{ transform: 'translateZ(20px)' }}
      >
        {/* Micro tech grid overlay */}
        <div className="absolute inset-0 bg-grid-navy opacity-15 pointer-events-none" />
        {/* Radial gradient background behind the circle */}
        <div className={`absolute inset-0 bg-gradient-to-b ${member.bgClass} opacity-30 group-hover:opacity-50 transition-opacity duration-500`} />

        {/* Avatar sphere */}
        <div className="relative w-36 h-36 my-4 flex items-center justify-center">
          {/* Outer pulsating rings */}
          <div className="absolute inset-0 rounded-full border border-lime-brand/10 group-hover:border-lime-brand/30 scale-105 group-hover:scale-110 transition-all duration-500 pointer-events-none" />

          {/* Outer wrapper: Entry Animation */}
          <motion.div
            variants={{
              hidden: { scale: 0, rotate: -180, opacity: 0 },
              visible: {
                scale: 1,
                rotate: 0,
                opacity: 1,
                transition: {
                  type: 'spring',
                  stiffness: 90,
                  damping: 12,
                  delay: 0.15 + (index * 0.08)
                }
              }
            }}
            className="relative w-32 h-32 flex items-center justify-center"
          >
            {/* Inner wrapper: Infinite Float */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.5
              }}
              className={`w-32 h-32 rounded-full bg-gradient-to-br ${member.gradient} flex items-center justify-center relative shadow-lg ${member.glowColor} transition-all duration-500`}
              style={{ transform: 'translateZ(30px)' }}
            >
              {/* Glossy inner sphere effect */}
              <div className="absolute inset-1 rounded-full bg-black/10 border border-white/20 backdrop-blur-xs flex items-center justify-center">
                {/* Highlight */}
                <div className="absolute top-1 left-2 right-2 h-1/3 bg-gradient-to-b from-white/25 to-transparent rounded-t-full pointer-events-none" />

                {/* Initial letter */}
                <span className="font-display font-black text-5xl text-white tracking-wider drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)] group-hover:scale-110 transition-transform duration-300">
                  {member.initials}
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Half - Info Area */}
      <div
        className="p-6 bg-navy-950/80 relative flex-1"
        style={{ transform: 'translateZ(10px)' }}
      >
        {/* Tech corner decorators for details section */}
        <div className="absolute bottom-3 left-3 w-2 h-2 border-b border-l border-navy-800 group-hover:border-lime-brand/40 transition-colors" />
        <div className="absolute bottom-3 right-3 w-2 h-2 border-b border-r border-navy-800 group-hover:border-lime-brand/40 transition-colors" />

        <div className="space-y-3">
          <h3 className="font-display font-black uppercase text-lg tracking-wide text-white group-hover:text-lime-brand transition-colors duration-300 leading-tight">
            {member.name}
          </h3>
          <p className="font-display font-bold text-[10px] text-lime-brand uppercase tracking-wider">
            {member.role}
          </p>
          <p className="text-steel-300 text-xs font-medium leading-relaxed pt-1">
            {member.bio}
          </p>
        </div>
      </div>
    </motion.div>
  )
}

export default function OurTeam() {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.05 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9, rotateX: 12 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        type: 'spring',
        stiffness: 80,
        damping: 14,
        mass: 0.9
      }
    }
  }

  return (
    <section ref={ref} id="team" className="bg-navy-900 text-white py-24 font-body relative overflow-hidden border-t border-navy-800">
      {/* Background Subtle Tech Grid */}
      <div className="absolute inset-0 bg-grid-navy opacity-30 pointer-events-none" />

      {/* Ambient center glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-lime-brand/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[92rem] mx-auto px-6 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 25 }}
            transition={{ duration: 0.6 }}
            className="font-display font-black uppercase text-4xl sm:text-6xl tracking-tight text-white leading-none"
          >
            Our <span className="text-lime-brand">Team</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-steel-200 font-medium text-sm leading-relaxed max-w-md mx-auto pt-2"
          >
            The metallurgy and precision tooling experts engineering industrial performance.
          </motion.p>
        </div>

        {/* 5-Member Grid Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6"
        >
          {teamMembers.map((member, index) => (
            <TeamMemberCard
              key={member.name}
              member={member}
              variants={cardVariants}
              index={index}
            />
          ))}
        </motion.div>

      </div>

      {/* Bottom green accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-lime-brand to-transparent" />
    </section>
  )
}
