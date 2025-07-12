'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { Menu, X, ShoppingBag, Phone, ChevronDown, Leaf } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const navbarRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    const handleClickOutside = (event: MouseEvent) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target as Node)) {
        setActiveDropdown(null)
      }
    }

    window.addEventListener('scroll', handleScroll)
    document.addEventListener('mousedown', handleClickOutside)
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const navItems = [
    { name: 'Beranda', href: '/' },
    { 
      name: 'Produk', 
      href: '#',
      dropdown: [
        { name: 'Ethylene Absorber', href: '/produk/ethylene-absorber', icon: <ShoppingBag size={18} /> },
        { name: 'Kemasan Buah', href: '/produk/kemasan-buah', icon: <Leaf size={18} /> }
      ]
    },
    { name: 'Teknologi', href: '/teknologi' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Kontak', href: '/kontak' }
  ]

  return (
    <motion.header
      ref={navbarRef}
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/95 shadow-sm backdrop-blur-lg' : 'bg-white/90 backdrop-blur-md'}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ 
        type: "spring",
        stiffness: 100,
        damping: 15
      }}
    >
      <div className="max-w-8xl mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Link href="/" className="flex items-center gap-3 group">
              <motion.div 
                className="w-10 h-10 bg-gradient-to-br from-emerald-600 to-emerald-400 rounded-xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-all"
                animate={{ 
                  rotate: [0, 5, -5, 0],
                  scale: [1, 1.05, 1]
                }}
                transition={{ 
                  duration: 8, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
              >
                <Leaf className="text-white w-5 h-5" />
              </motion.div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-gray-900 tracking-tight leading-none">
                  Ethylene<span className="font-extralight">Guard</span>
                </span>
                <span className="text-xs text-gray-500 font-medium tracking-wider">TECHNOLOGY</span>
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div 
                key={item.name}
                className="relative"
                onMouseEnter={() => item.dropdown && setActiveDropdown(item.name)}
                onMouseLeave={() => item.dropdown && setActiveDropdown(null)}
              >
                {item.dropdown ? (
                  <>
                    <button 
                      className={`flex items-center gap-1 px-5 py-2.5 transition-colors ${activeDropdown === item.name ? 'text-emerald-600' : 'text-gray-700 hover:text-gray-900'}`}
                      onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                    >
                      <span className="text-sm font-medium tracking-wide">
                        {item.name}
                      </span>
                      <motion.div
                        animate={{ rotate: activeDropdown === item.name ? 180 : 0 }}
                      >
                        <ChevronDown size={16} />
                      </motion.div>
                    </button>

                    <AnimatePresence>
                      {activeDropdown === item.name && (
                        <motion.div
                          className="absolute top-full left-1/2 mt-1 w-64 bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100 transform -translate-x-1/2 z-50"
                          initial={{ opacity: 0, y: -10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: -10, scale: 0.95 }}
                          transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        >
                          <div className="py-1">
                            {item.dropdown.map((subItem) => (
                              <Link 
                                key={subItem.name}
                                href={subItem.href} 
                                className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition group"
                              >
                                <div className="p-2 bg-emerald-50 rounded-lg group-hover:bg-emerald-100 transition">
                                  {subItem.icon}
                                </div>
                                <div>
                                  <div className="font-medium text-gray-800">{subItem.name}</div>
                                  <div className="text-xs text-gray-500 mt-0.5">
                                    {subItem.name.includes('Absorber') ? 'Penyerap etilen premium' : 'Kemasan khusus ekspor'}
                                  </div>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                ) : (
                  <Link 
                    href={item.href}
                    className={`relative group px-5 py-2.5 block ${activeDropdown === item.name ? 'text-emerald-600' : 'text-gray-700 hover:text-gray-900'}`}
                  >
                    <span className="text-sm font-medium tracking-wide">
                      {item.name}
                    </span>
                    <motion.div 
                      className="absolute bottom-1 left-1/2 h-0.5 bg-emerald-500"
                      initial={{ width: 0, x: "-50%" }}
                      animate={{ 
                        width: activeDropdown === item.name ? "80%" : "0%", 
                        x: "-50%" 
                      }}
                      transition={{ type: "spring", stiffness: 300 }}
                    />
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <motion.div
            className="hidden lg:block"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Link 
              href="/kontak" 
              className="relative overflow-hidden flex items-center gap-2 bg-gradient-to-br from-emerald-600 to-emerald-400 text-white px-5 py-2.5 rounded-lg shadow-md hover:shadow-lg transition-all group"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-shine"></span>
              <motion.div
                whileHover={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 0.5 }}
              >
                <Phone className="w-4 h-4 group-hover:scale-110 transition-transform z-10 relative" />
              </motion.div>
              <span className="text-sm font-medium tracking-wide z-10 relative">Hubungi Kami</span>
            </Link>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            className="lg:hidden p-2 z-50"
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.9 }}
            aria-label="Mobile menu"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-gray-800" />
            ) : (
              <Menu className="w-6 h-6 text-gray-800" />
            )}
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="lg:hidden fixed inset-0 bg-white z-40 pt-24 px-6"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <div className="space-y-1">
              {navItems.map((item) => (
                <div key={item.name} className="border-b border-gray-100">
                  {item.dropdown ? (
                    <>
                      <button 
                        className="flex items-center justify-between w-full text-base font-medium py-3"
                        onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                      >
                        <span>{item.name}</span>
                        <motion.div
                          animate={{ rotate: activeDropdown === item.name ? 180 : 0 }}
                        >
                          <ChevronDown className="w-5 h-5 text-gray-500" />
                        </motion.div>
                      </button>
                      
                      <AnimatePresence>
                        {activeDropdown === item.name && (
                          <motion.div
                            className="pl-4 space-y-1 mb-3"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            {item.dropdown.map((subItem) => (
                              <Link 
                                key={subItem.name}
                                href={subItem.href} 
                                className="flex items-center gap-3 px-4 py-2.5 text-gray-600 hover:text-emerald-600 rounded-lg hover:bg-gray-50 transition text-sm"
                                onClick={() => setIsOpen(false)}
                              >
                                <div className="p-1.5 bg-emerald-50 rounded-md">
                                  {subItem.icon}
                                </div>
                                <span>{subItem.name}</span>
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link 
                      href={item.href}
                      className="block w-full text-left py-3 text-gray-800 font-medium rounded-lg hover:bg-gray-50 transition"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}

              <motion.div
                className="pt-4"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <Link 
                  href="/kontak" 
                  className="flex items-center justify-center gap-2 bg-gradient-to-br from-emerald-600 to-emerald-400 text-white px-6 py-3.5 rounded-lg shadow-md hover:shadow-lg transition-all"
                  onClick={() => setIsOpen(false)}
                >
                  <Phone className="w-5 h-5" />
                  <span className="font-medium text-sm">Hubungi Kami</span>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}