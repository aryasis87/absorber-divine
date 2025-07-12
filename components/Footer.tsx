'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  Phone, Mail, MapPin, 
  Facebook, Twitter, Instagram, Linkedin 
} from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-[#0a1a12] text-gray-300 relative overflow-hidden">
      {/* Divine glow effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-20 -top-20 w-80 h-80 bg-[#55A630] rounded-full filter blur-[100px] opacity-10"></div>
        <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-[#8CCF42] rounded-full filter blur-[100px] opacity-10"></div>
      </div>
      
      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20">
        {/* Logo and tagline */}
        <div className="flex flex-col items-center mb-16">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 100 }}
            viewport={{ once: true }}
            className="mb-6"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-[#55A630] to-[#8CCF42] rounded-2xl flex items-center justify-center shadow-lg shadow-[#55A630]/30">
              <LeafIcon className="text-white w-8 h-8" />
            </div>
          </motion.div>
          
          <motion.h2 
            className="text-3xl font-bold text-white text-center mb-3"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
          >
            Ethylene<span className="font-light">Absorber</span>
          </motion.h2>
          
          <motion.p 
            className="text-center text-gray-400 max-w-md"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            Solusi canggih untuk menjaga kesegaran buah dengan teknologi mutakhir
          </motion.p>
        </div>
        
        {/* Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-10 mb-16">
          {/* Quick links */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold text-white mb-6 pb-2 border-b border-[#55A630]/30">Navigasi</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="flex items-center gap-3 group">
                    <div className="w-2 h-2 bg-[#55A630] rounded-full transition-all group-hover:w-3"></div>
                    <span className="text-gray-400 group-hover:text-white group-hover:translate-x-1 transition-all">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
          
          {/* Products */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold text-white mb-6 pb-2 border-b border-[#55A630]/30">Produk</h3>
            <ul className="space-y-3">
              {products.map((product, index) => (
                <li key={index}>
                  <Link href={product.href} className="flex items-center gap-3 group">
                    <div className="w-2 h-2 bg-[#55A630] rounded-full transition-all group-hover:w-3"></div>
                    <span className="text-gray-400 group-hover:text-white group-hover:translate-x-1 transition-all">
                      {product.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
          
          {/* Resources */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold text-white mb-6 pb-2 border-b border-[#55A630]/30">Resources</h3>
            <ul className="space-y-3">
              {resources.map((item, index) => (
                <li key={index}>
                  <Link href={item.href} className="flex items-center gap-3 group">
                    <div className="w-2 h-2 bg-[#55A630] rounded-full transition-all group-hover:w-3"></div>
                    <span className="text-gray-400 group-hover:text-white group-hover:translate-x-1 transition-all">
                      {item.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
          
          {/* Contact */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="md:col-span-2"
          >
            <h3 className="text-lg font-semibold text-white mb-6 pb-2 border-b border-[#55A630]/30">Hubungi Kami</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                <div className="p-2 bg-[#55A630]/10 rounded-lg">
                  <Phone className="text-[#55A630] w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Telepon</p>
                  <a href="tel:+628123456789" className="text-white hover:text-[#8CCF42] transition-colors">
                    +62 812 3456 7890
                  </a>
                </div>
              </li>
              
              <li className="flex items-start gap-4">
                <div className="p-2 bg-[#55A630]/10 rounded-lg">
                  <Mail className="text-[#55A630] w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <a href="mailto:info@ethyleneabsorber.com" className="text-white hover:text-[#8CCF42] transition-colors">
                    info@ethyleneabsorber.com
                  </a>
                </div>
              </li>
              
              <li className="flex items-start gap-4">
                <div className="p-2 bg-[#55A630]/10 rounded-lg">
                  <MapPin className="text-[#55A630] w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Alamat</p>
                  <p className="text-white">Jl. Teknologi No. 123, Bandung</p>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>
        
        {/* Social and copyright */}
        <div className="pt-8 border-t border-[#1a4d32]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <motion.div 
              className="flex gap-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
            >
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-[#1e3d2c] flex items-center justify-center hover:bg-[#55A630] transition-colors hover:-translate-y-1"
                >
                  <social.icon className="text-gray-300 hover:text-white" size={16} />
                </a>
              ))}
            </motion.div>
            
            <motion.p
              className="text-gray-500 text-sm"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              viewport={{ once: true }}
            >
              © {currentYear} EthyleneAbsorber. All rights reserved.
            </motion.p>
          </div>
        </div>
      </div>
    </footer>
  )
}

const socialLinks = [
  { icon: Facebook, url: "https://facebook.com" },
  { icon: Twitter, url: "https://twitter.com" },
  { icon: Instagram, url: "https://instagram.com" },
  { icon: Linkedin, url: "https://linkedin.com" },
]

const quickLinks = [
  { label: "Beranda", href: "/" },
  { label: "Tentang Kami", href: "/about" },
  { label: "Fitur", href: "#features" },
  { label: "Testimoni", href: "#testimonials" },
  { label: "Kontak", href: "/contact" },
]

const products = [
  { label: "Ethylene Absorber", href: "/products/absorber" },
  { label: "Kemasan Premium", href: "/products/packaging" },
  { label: "Paket Ekspor", href: "/products/export" },
  { label: "Solusi Distribusi", href: "/products/distribution" },
]

const resources = [
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "/faq" },
  { label: "Dokumentasi", href: "/docs" },
  { label: "Panduan", href: "/guides" },
  { label: "Studi Kasus", href: "/case-studies" },
]

function LeafIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
    </svg>
  )
}