'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import Image from 'next/image'
import {
  Leaf,
  Droplets,
  ShieldCheck,
  TrendingUp,
  Sprout,
  Clock,
  ArrowRight,
  Quote,
} from 'lucide-react'

export default function HomePage() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [hasMounted, setHasMounted] = useState(false)

  useEffect(() => {
    setHasMounted(true)
  }, [])

  const { scrollYProgress } = useScroll({
    target: hasMounted ? containerRef : undefined,
    offset: ['start start', 'end end'],
  })

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.02])
  const y = useTransform(scrollYProgress, [0, 1], [0, -50])

  if (!hasMounted) return null

  const testimonials = [
    {
      quote:
        'Sejak menggunakan ethylene absorber, buah di toko saya bisa bertahan 5-7 hari lebih lama. Pelanggan sangat puas!',
      name: 'Relya Nesya',
      role: 'Pemilik FreshFruit Market',
      image: '/images/pp1.png',
      rating: 5,
    },
    {
      quote:
        'Pengiriman buah ke luar kota tidak lagi jadi masalah. Produk sampai dalam kondisi segar seperti baru dipetik.',
      name: 'Ani Wijaya',
      role: 'CEO BuahSegar Distribusi',
      image: '/images/pp2.png',
      rating: 5,
    },
    {
      quote:
        'Restoran kami sekarang bisa menyajikan buah premium dengan kualitas konsisten berkat teknologi ini.',
      name: 'Rina Permata',
      role: 'Pemilik The Green Cafe',
      image: '/images/pp3.png',
      rating: 4,
    },
  ]

  return (
    <motion.main
      ref={containerRef}
      className="bg-white text-gray-800 overflow-hidden"
      style={{ scale }}
    >
      <Hero />

      {/* SECTION: Features */}
      <motion.section
        id="features"
        className="py-32 relative overflow-hidden"
        style={{ y }}
      >
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#55A630]/5 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#8CCF42]/5 rounded-full blur-[100px]" />
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.02]" />
        </div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-20 text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#55A630] to-[#8CCF42]">
                Teknologi Mutakhir
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Solusi canggih untuk menjaga kesegaran buah dengan efisiensi tingkat dewa
            </p>
          </motion.div>
          <Features />
        </div>
      </motion.section>

      {/* SECTION: Modern Fruit Display */}
      <section className="relative py-16 md:py-24 bg-gradient-to-b from-white to-[#f7fdf3] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <motion.div
              className="relative w-full lg:w-1/2 aspect-[4/3]"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <div className="absolute -inset-8 bg-gradient-to-tr from-[#55A630]/10 to-[#8CCF42]/10 rounded-3xl -z-10" />
              <div className="relative h-full rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/buahsegar1.webp"
                  alt="Buah segar dengan teknologi kami"
                  fill
                  className="object-cover"
                  quality={90}
                  priority
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-full bg-[#8CCF42]/20 blur-xl z-0" />
              <div className="absolute -top-6 -right-6 w-40 h-40 rounded-full bg-[#55A630]/15 blur-xl z-0" />
            </motion.div>

            <motion.div
              className="w-full lg:w-1/2 space-y-6"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#55A630] to-[#8CCF42]">
                  Kesegaran yang Terjaga
                </span>
              </h3>
              <p className="text-lg text-gray-600">
                Teknologi canggih kami mempertahankan kualitas buah dengan sempurna:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { icon: <Leaf className="w-5 h-5" />, text: 'Kesegaran 2x lebih lama' },
                  { icon: <Droplets className="w-5 h-5" />, text: 'Kadar air optimal' },
                  { icon: <ShieldCheck className="w-5 h-5" />, text: 'Proteksi bakteri' },
                  { icon: <TrendingUp className="w-5 h-5" />, text: 'Nutrisi terjaga' },
                  { icon: <Sprout className="w-5 h-5" />, text: 'Alami & organik' },
                  { icon: <Clock className="w-5 h-5" />, text: 'Masa simpan panjang' },
                ].map((item, idx) => (
                  <motion.li
                    key={idx}
                    className="flex items-start gap-3 bg-white p-4 rounded-xl shadow-sm border border-gray-100"
                    whileHover={{ y: -3 }}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.1 * idx }}
                    viewport={{ once: true }}
                  >
                    <span className="text-[#55A630] bg-[#55A630]/10 p-1.5 rounded-lg">
                      {item.icon}
                    </span>
                    <span className="text-gray-700 font-medium">{item.text}</span>
                  </motion.li>
                ))}
              </ul>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="pt-4">
                <button className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#55A630] to-[#8CCF42] text-white rounded-lg font-semibold shadow-md hover:shadow-lg transition-all">
                  Pelajari Teknologi Kami
                  <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>
            </motion.div>
          </div>
        </div>
        <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
          <div className="absolute top-1/4 right-10 w-64 h-64 rounded-full bg-[#8CCF42]/5 blur-3xl" />
          <div className="absolute bottom-1/3 left-0 w-80 h-80 rounded-full bg-[#55A630]/5 blur-3xl" />
        </div>
      </section>

      {/* SECTION: Premium Testimonials */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: '0px 0px -100px 0px' }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center justify-center bg-emerald-100/50 px-4 py-2 rounded-full mb-4">
              <Quote className="w-5 h-5 text-emerald-600 mr-2" />
              <span className="text-sm font-medium text-emerald-700">Testimoni Pelanggan</span>
            </div>
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Mereka Yang Telah{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-emerald-400">
                Mempercayai
              </span>{' '}
              Kami
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Lihat bagaimana teknologi kami telah membantu bisnis mereka berkembang
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                viewport={{ once: true }}
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white to-emerald-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="p-8 relative z-10 flex flex-col space-y-6">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, idx) => (
                      <svg
                        key={idx}
                        className={`w-5 h-5 ${idx < t.rating ? 'text-amber-400' : 'text-gray-300'}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  <Quote className="absolute top-8 right-8 w-6 h-6 text-emerald-100 group-hover:text-emerald-200 transition-colors" />
                  {/* Perbaikan: escape tanda kutip dengan &ldquo; &rdquo; */}
                  <p className="text-lg text-gray-700 italic">
                    &ldquo;{t.quote}&rdquo;
                  </p>

                  <div className="flex items-center space-x-4">
                    <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-white shadow-md">
                      <Image src={t.image} alt={t.name} fill className="object-cover" sizes="56px" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{t.name}</h4>
                      <p className="text-sm text-emerald-600">{t.role}</p>
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-400 to-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <motion.a
              href="/testimonials"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center px-8 py-3.5 bg-white border border-gray-200 rounded-full shadow-sm hover:shadow-md transition-all text-emerald-600 font-medium group"
            >
              <span>Lihat Semua Testimoni</span>
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* SECTION: CTA */}
      <section className="relative py-32 bg-gradient-to-br from-[#0a2e1d] to-[#1a4d32] text-white overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-white/10"
              style={{
                width: Math.random() * 100 + 50,
                height: Math.random() * 100 + 50,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                x: [0, (Math.random() - 0.5) * 100],
                y: [0, (Math.random() - 0.5) * 100],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                repeatType: 'reverse',
              }}
            />
          ))}
        </div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-[#8CCF42]">Transformasi</span> Kesegaran Buah
            </h2>
            <p className="text-xl text-white/90 mb-10 leading-relaxed">
              Dengan teknologi ethylene absorber kami, buah Anda akan tetap segar seperti baru dipetik, bahkan setelah perjalanan panjang.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <a
                href="/kontak"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-[#55A630] to-[#8CCF42] rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden"
              >
                <span className="relative z-10">Mulai Sekarang</span>
                <ArrowRight className="w-5 h-5 relative z-10" />
                <span className="absolute inset-0 bg-gradient-to-r from-[#8CCF42] to-[#55A630] opacity-0 hover:opacity-100 transition duration-500" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </motion.main>
)
}