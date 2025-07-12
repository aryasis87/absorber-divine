'use client'

import { motion } from 'framer-motion'
import { Leaf, Zap, Sparkles, Globe, Award, Gem } from 'lucide-react'
import Image from 'next/image'

export default function DivineHero() {
  return (
    <div className="relative h-screen min-h-[800px] overflow-hidden bg-[#fafafa] pt-24">
      {/* Divine Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Ethereal glow */}
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[#55A630]/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-[#8CCF42]/5 rounded-full blur-[150px]" />
        
        {/* Subtle grid texture */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.02]" />
        
        {/* Floating particles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-[#55A630]/10"
            style={{
              width: Math.random() * 40 + 20,
              height: Math.random() * 40 + 20,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, (Math.random() - 0.5) * 100],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="relative">
              {/* Divine Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center bg-gradient-to-r from-[#55A630] to-[#2E7D32] text-white px-4 py-2 rounded-full mb-8"
              >
                <Gem className="mr-2" size={16} />
                <span className="text-sm font-medium tracking-wider">DIVINE COLLECTION</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-5xl md:text-6xl lg:text-7xl font-light text-gray-900 leading-tight mb-6"
              >
                <span className="block font-serif italic text-[#55A630]">Divine</span>
                <span className="block font-normal">Freshness</span>
                <span className="block font-medium">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#55A630] via-[#8CCF42] to-[#2E7D32]">
                    Reimagined
                  </span>
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="text-lg text-gray-600 max-w-lg mb-8 font-light tracking-wide leading-relaxed"
              >
                Experience the divine technology that preserves nature&apos;s perfection. Our ethylene absorber is a masterpiece of minimalist design and unparalleled efficacy.
              </motion.p>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="flex flex-wrap gap-4"
              >
                <motion.a
                  href="#"
                  whileHover={{ y: -3, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 bg-gradient-to-r from-[#55A630] to-[#8CCF42] text-white rounded-full flex items-center gap-2 shadow-lg hover:shadow-xl transition-all"
                >
                  <Sparkles size={18} />
                  <span>Discover Divine</span>
                </motion.a>
                
                <motion.a
                  href="#"
                  whileHover={{ y: -3 }}
                  className="px-8 py-4 border border-gray-200 bg-white/50 backdrop-blur-sm text-gray-900 rounded-full hover:border-[#55A630]/30 transition-all"
                >
                  <span className="flex items-center gap-2">
                    <Zap size={18} className="text-[#55A630]" />
                    Learn More
                  </span>
                </motion.a>
              </motion.div>

              {/* Divine Attributes */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="mt-16 grid grid-cols-3 gap-4 max-w-md"
              >
                {[
                  { icon: Globe, text: "Global Standard" },
                  { icon: Award, text: "Award Winning" },
                  { icon: Leaf, text: "Nature's Touch" }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ y: -5 }}
                    className="flex flex-col items-center text-center p-4 bg-white/50 backdrop-blur-sm rounded-xl border border-gray-100 shadow-sm"
                  >
                    <div className="w-10 h-10 rounded-full bg-[#55A630]/10 flex items-center justify-center mb-2">
                      <item.icon className="text-[#55A630]" size={18} />
                    </div>
                    <span className="text-sm font-light">{item.text}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Divine Product Showcase */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="relative h-[600px] flex items-center justify-center"
            >
              {/* Product Container */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative w-full h-full max-w-md"
              >
                {/* Divine Glow */}
                <motion.div
                  animate={{
                    boxShadow: [
                      '0 45px 100px -20px rgba(85, 166, 48, 0.15)',
                      '0 45px 100px -20px rgba(85, 166, 48, 0.25)',
                      '0 45px 100px -20px rgba(85, 166, 48, 0.15)'
                    ]
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity
                  }}
                  className="absolute inset-0 rounded-3xl"
                />

                {/* Divine Product Card */}
                <div className="relative h-full w-full bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50" />
                  
                  {/* Product Image */}
                  <div className="relative h-full w-full flex items-center justify-center p-12">
                    <Image
                      src="/images/fruit-sachet.webp"
                      alt="Divine Product"
                      fill
                      className="object-contain z-10 scale-110"
                      style={{ filter: 'drop-shadow(0 20px 40px rgba(85, 166, 48, 0.2))' }}
                    />
                  </div>

                  {/* Divine Badges */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2 }}
                    className="absolute top-6 left-6 bg-white/80 backdrop-blur-sm px-3 py-2 rounded-full shadow-sm flex items-center gap-2"
                  >
                    <div className="w-6 h-6 rounded-full bg-[#55A630] flex items-center justify-center">
                      <Leaf className="text-white" size={12} />
                    </div>
                    <span className="text-xs font-medium">Divine Freshness</span>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.4 }}
                    className="absolute bottom-6 right-6 bg-gradient-to-r from-[#55A630] to-[#8CCF42] text-white px-4 py-2 rounded-full shadow-lg"
                  >
                    <span className="text-xs font-medium tracking-wider">LIMITED EDITION</span>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Divine Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="flex flex-col items-center">
          <div className="w-px h-16 bg-gradient-to-t from-[#55A630] to-transparent" />
          <span className="text-xs text-[#55A630] mt-2 tracking-widest">EXPLORE DIVINITY</span>
        </div>
      </motion.div>
    </div>
  )
}
