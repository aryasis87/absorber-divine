'use client'

import { motion, useAnimation } from 'framer-motion'
import { Leaf, ShieldCheck, PackageCheck, BadgeCheck, Sparkles, Award, Globe2 } from 'lucide-react'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

// Palet warna hijau modern
const PRIMARY_COLOR = "#2E8B57"; // SeaGreen
const ACCENT_COLOR = "#3CB371"; // MediumSeaGreen
const BACKGROUND_GRADIENT = "from-[#F0FFF0] to-[#E0F2E9]";
const CARD_GRADIENT = "from-[#F8FFF8] to-[#F0FAF5]";

const features = [
  {
    icon: Sparkles,
    title: 'Nano Technology',
    desc: 'Advanced nano-coating with 12nm particle size that forms molecular-level protection without altering fruit appearance.',
    color: '#2E8B57', // SeaGreen
    delay: 0.1,
    stats: '12nm Particle',
    badge: 'Innovation'
  },
  {
    icon: ShieldCheck,
    title: 'Triple Certification',
    desc: 'Certified by FDA, EU No 10/2011, and JHOSPA with full compliance to international food safety standards.',
    color: '#3CB371', // MediumSeaGreen
    delay: 0.2,
    stats: '3 Certificates',
    badge: 'Premium'
  },
  {
    icon: Globe2,
    title: 'Global Network',
    desc: 'Used by 200+ premium exporters across 25 countries with 99.2% satisfaction rate.',
    color: '#32CD32', // LimeGreen
    delay: 0.3,
    stats: '25 Countries',
    badge: 'Elite'
  },
  {
    icon: Award,
    title: 'Award Winning',
    desc: 'Recipient of 2024 International Food Technology Innovation Award and 5 other prestigious honors.',
    color: '#228B22', // ForestGreen
    delay: 0.4,
    stats: '6 Awards',
    badge: 'Exclusive'
  },
  {
    icon: PackageCheck,
    title: 'Smart Packaging',
    desc: '9-layer intelligent packaging with NFC freshness tracking and blockchain authenticity verification.',
    color: '#20B2AA', // LightSeaGreen
    delay: 0.5,
    stats: '9 Layers',
    badge: 'Smart'
  },
  {
    icon: Leaf,
    title: 'Eco Premium',
    desc: 'Carbon-negative production process with 100% renewable energy and ocean plastic recycling.',
    color: '#008000', // Green
    delay: 0.6,
    stats: '100% Green',
    badge: 'Eco'
  }
]

const FeatureCard = ({ feature }: { feature: typeof features[0] }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
    rootMargin: '-50px 0px'
  })
  const controls = useAnimation()

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 }
      }}
      transition={{ duration: 0.8, delay: feature.delay, ease: [0.16, 1, 0.3, 1] }}
      className="relative group h-full"
      whileHover={{ y: -15 }}
    >
      {/* 3D Card Effect */}
      <motion.div 
        className={`absolute inset-0 rounded-[20px] bg-gradient-to-br ${CARD_GRADIENT} shadow-xl transform-gpu transition-all duration-700 group-hover:rotate-x-6 group-hover:rotate-y-2 rounded-2xl`}
        style={{
          transformStyle: 'preserve-3d',
          boxShadow: '0 20px 40px -12px rgba(46, 139, 87, 0.15)',
          border: '1px solid rgba(46, 139, 87, 0.1)'
        }}
      />
      
      {/* Holographic Border */}
      <motion.div 
        className="absolute inset-0 rounded-[20px] border-2 opacity-0 group-hover:opacity-100 pointer-events-none"
        style={{ 
          borderImage: `linear-gradient(45deg, ${feature.color}, rgba(255,255,255,0.7), ${feature.color}) 1`,
          filter: 'blur(1px)'
        }}
        animate={{
          opacity: [0, 0.7, 0],
          scale: [1, 1.02, 1]
        }}
        transition={{ duration: 3, repeat: Infinity }}
      />
      
      {/* Main Card Content */}
      <div className={`relative z-10 h-full bg-gradient-to-br ${CARD_GRADIENT} rounded-[20px] overflow-hidden border border-[${PRIMARY_COLOR}]/20 transition-all duration-500 transform-gpu`}>
        {/* Floating Particles Background */}
        <motion.div 
          className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none"
          animate={{
            backgroundImage: [
              `radial-gradient(circle at 20% 30%, ${feature.color}20 0%, transparent 20%)`,
              `radial-gradient(circle at 80% 70%, ${feature.color}20 0%, transparent 20%)`,
              `radial-gradient(circle at 50% 20%, ${feature.color}20 0%, transparent 20%)`
            ]
          }}
          transition={{ duration: 10, repeat: Infinity, repeatType: 'reverse' }}
        />
        
        <div className="p-8 pb-0 relative z-10">
          {/* Premium Badge */}
          <motion.div
            className="absolute top-6 right-6 bg-gradient-to-r from-[#2E8B57] to-[#3CB371] text-white text-xs font-bold px-3 py-1 rounded-full"
            initial={{ scale: 0 }}
            animate={inView ? { scale: 1 } : {}}
            transition={{ delay: feature.delay + 0.2, type: 'spring' }}
          >
            {feature.badge}
          </motion.div>
          
          {/* Animated Icon */}
          <motion.div 
            className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 relative"
            style={{ backgroundColor: `${feature.color}15` }}
            whileHover={{ scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 400 }}
          >
            <feature.icon 
              className="text-[--color] drop-shadow-md" 
              size={32} 
              style={{ '--color': feature.color } as React.CSSProperties}
            />
            <motion.div 
              className="absolute inset-0 rounded-2xl border-2 opacity-0 group-hover:opacity-100 pointer-events-none"
              style={{ borderColor: feature.color }}
              animate={{ 
                scale: [1, 1.3, 1],
                opacity: [0, 0.5, 0]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
          
          <h3 className="text-2xl font-bold mb-3 text-gray-900 line-clamp-1">
            {feature.title}
            <BadgeCheck 
              className="inline-block ml-2 text-[--color] drop-shadow-sm" 
              size={20} 
              style={{ '--color': feature.color } as React.CSSProperties}
            />
          </h3>
          
          <p className="text-gray-600 mb-6 line-clamp-3">
            {feature.desc}
          </p>
        </div>
        
        {/* Interactive Footer */}
        <div 
          className={`px-8 py-4 bg-gradient-to-r from-white/70 to-[#F0FAF5]/70 border-t border-[${PRIMARY_COLOR}]/10 relative overflow-hidden`}
        >
          {/* Animated Wave */}
          <motion.div 
            className="absolute bottom-0 left-0 right-0 h-1"
            style={{ backgroundColor: feature.color }}
            initial={{ scaleX: 0, originX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ delay: feature.delay + 0.3, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          />
          
          <motion.div
            className="text-sm font-semibold text-[--color] flex items-center"
            style={{ '--color': feature.color } as React.CSSProperties}
            initial={{ opacity: 0, x: -10 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: feature.delay + 0.5 }}
          >
            <motion.span
              className="inline-block w-3 h-3 rounded-full mr-2"
              style={{ backgroundColor: feature.color }}
              animate={{ 
                scale: [1, 1.4, 1],
                boxShadow: [`0 0 0 ${feature.color}`, `0 0 8px ${feature.color}`, `0 0 0 ${feature.color}`]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="text-sm tracking-wider">{feature.stats}</span>
          </motion.div>
        </div>
        
        {/* Holographic Reflection */}
        <motion.div 
          className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-white/50 to-transparent opacity-0 group-hover:opacity-30 pointer-events-none"
          animate={{ 
            backgroundPosition: ['0% 0%', '100% 100%']
          }}
          transition={{ duration: 3, repeat: Infinity, repeatType: 'reverse' }}
        />
      </div>
    </motion.div>
  )
}

export default function PremiumFeatures() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })
  const controls = useAnimation()

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  return (
    <div className={`max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-24 bg-gradient-to-b ${BACKGROUND_GRADIENT} relative overflow-hidden`}>
      {/* Decorative Elements */}
      <motion.div 
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 0.1 } : {}}
      >
        <div className="absolute top-20 left-10 w-40 h-40 rounded-full bg-[#2E8B57] filter blur-[80px] opacity-20" />
        <div className="absolute bottom-20 right-10 w-60 h-60 rounded-full bg-[#3CB371] filter blur-[100px] opacity-15" />
      </motion.div>
      
      <div className="relative z-10">
        <div className="max-w-5xl mx-auto text-center mb-20">
          <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-4"
          >
            <motion.div
              className="text-sm font-semibold text-[#2E8B57] bg-gradient-to-r from-[#2E8B57]/10 to-[#3CB371]/10 px-6 py-2 rounded-full mb-3 inline-flex items-center border border-[#2E8B57]/20"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <Sparkles className="mr-2 text-[#2E8B57]" size={18} />
              <span>PREMIUM TECHNOLOGY</span>
            </motion.div>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#2E8B57] via-[#3CB371] to-[#32CD32]">
              Elite Performance
            </span>
            <br />
            <motion.span 
              className="inline-block mt-2 text-gray-800"
              animate={{ 
                textShadow: ['0 0 10px rgba(46,139,87,0.3)', '0 0 20px rgba(60,179,113,0.4)', '0 0 10px rgba(50,205,50,0.3)']
              }}
              transition={{ duration: 4, repeat: Infinity, repeatType: 'reverse' }}
            >
              Beyond Standards
            </motion.span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6 }}
            className="text-xl text-gray-700 max-w-3xl mx-auto"
          >
            Cutting-edge nanotechnology combined with premium quality materials for unparalleled performance
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} />
          ))}
        </div>

        {/* Premium Award Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 1, type: 'spring', stiffness: 100 }}
          className="mt-24 text-center relative"
        >
          {/* Floating Particles */}
          <motion.div 
            className="absolute inset-0 pointer-events-none"
            animate={{
              backgroundImage: [
                `radial-gradient(circle at 20% 30%, ${PRIMARY_COLOR}20 0%, transparent 20%)`,
                `radial-gradient(circle at 80% 70%, ${ACCENT_COLOR}20 0%, transparent 20%)`,
                `radial-gradient(circle at 50% 20%, #32CD3220 0%, transparent 20%)`
              ]
            }}
            transition={{ duration: 12, repeat: Infinity, repeatType: 'reverse' }}
          />
          
          <motion.div
            className="inline-flex items-center bg-gradient-to-r from-[#2E8B57] via-[#3CB371] to-[#32CD32] text-white px-10 py-5 rounded-full shadow-2xl relative overflow-hidden"
            animate={{ 
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              boxShadow: ['0 10px 30px -5px rgba(46,139,87,0.5)', '0 10px 30px -5px rgba(60,179,113,0.5)', '0 10px 30px -5px rgba(50,205,50,0.5)']
            }}
            transition={{ duration: 5, repeat: Infinity, repeatType: 'reverse' }}
            whileHover={{ scale: 1.03 }}
          >
            {/* Shining Effect */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent opacity-0 group-hover:opacity-100 pointer-events-none"
              animate={{ 
                left: ['-100%', '150%'],
                opacity: [0, 0.5, 0]
              }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
            
            <Award className="mr-4 animate-pulse" size={28} />
            <span className="text-xl font-bold tracking-wider">
              GLOBAL INNOVATION AWARD 2024
            </span>
          </motion.div>
          
          <motion.p
            className="mt-6 text-gray-600 text-sm"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 1.5 }}
          >
            Recognized by International Food Technology Association as the most innovative solution
          </motion.p>
        </motion.div>
      </div>
    </div>
  )
}