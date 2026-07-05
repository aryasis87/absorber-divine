'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Search, ChevronDown, ChevronUp, ChevronRight, Leaf, Phone, Mail, Zap, Shield, Globe, Clock, Package, TestTube2 } from 'lucide-react'

const FAQ_DATA = [
  {
    id: 1,
    question: "Apa itu ethylene absorber?",
    answer: "Ethylene absorber adalah produk inovatif yang dirancang untuk menyerap gas etilen yang dihasilkan oleh buah dan sayuran selama proses pematangan. Gas etilen mempercepat proses pembusukan, sehingga dengan menyerapnya, kami dapat memperpanjang masa kesegaran produk segar Anda hingga 2-3 kali lipat.",
    category: 'product',
    icon: <Zap className="text-[#55A630]" size={20} />
  },
  {
    id: 2,
    question: "Bagaimana cara penggunaan ethylene absorber?",
    answer: "Cara penggunaan sangat sederhana: tempatkan sachet ethylene absorber di dalam kemasan buah/sayuran yang ingin Anda awetkan kesegarannya. Satu sachet efektif untuk ruang dengan volume 1-2 m³. Pastikan kemasan tertutup rapat untuk hasil optimal. Produk mulai bekerja segera setelah dibuka dari kemasan aslinya.",
    category: 'usage',
    icon: <Package className="text-[#55A630]" size={20} />
  },
  {
    id: 3,
    question: "Berapa lama masa efektif ethylene absorber?",
    answer: "Masa efektif standar produk kami adalah 30 hari setelah dibuka. Namun dalam kondisi penyimpanan ideal (suhu ruang, kelembaban normal), produk dapat bertahan hingga 45 hari. Kami menambahkan indikator warna pada sachet yang berubah ketika produk tidak lagi efektif.",
    category: 'usage',
    icon: <Clock className="text-[#55A630]" size={20} />
  },
  {
    id: 4,
    question: "Apakah ethylene absorber aman untuk makanan?",
    answer: "Sangat aman. Produk kami telah mendapatkan sertifikasi BPOM RI NA18191100273 dan memenuhi standar keamanan pangan internasional termasuk FDA (21 CFR 175.300), EU No 10/2011, dan JHOSPA Jepang. Bahan aktif kami tidak bersentuhan langsung dengan produk pangan karena dikemas dalam material food-grade khusus.",
    category: 'safety',
    icon: <Shield className="text-[#55A630]" size={20} />
  },
  {
    id: 5,
    question: "Bagaimana ethylene absorber mempengaruhi rasa buah?",
    answer: "Ethylene absorber tidak mempengaruhi rasa, aroma, atau tekstur buah dan sayuran sama sekali. Produk kami bekerja hanya dengan menyerap gas etilen tanpa mengubah komposisi kimia produk segar Anda. Uji organoleptik menunjukkan tidak ada perbedaan signifikan antara buah yang menggunakan dan tidak menggunakan produk kami.",
    category: 'safety',
    icon: <TestTube2 className="text-[#55A630]" size={20} />
  },
  {
    id: 6,
    question: "Dapatkah ethylene absorber digunakan untuk pengiriman ekspor?",
    answer: "Tentu. Produk kami secara khusus dirancang untuk kebutuhan ekspor buah dan sayuran. Dengan masa efektif hingga 45 hari, produk ideal untuk pengiriman laut yang memakan waktu 3-4 minggu. Kami juga menyediakan kemasan khusus dengan indikator suhu untuk memantau kondisi selama pengiriman.",
    category: 'shipping',
    icon: <Globe className="text-[#55A630]" size={20} />
  },
  {
    id: 7,
    question: "Berapa lama waktu yang dibutuhkan untuk melihat hasil?",
    answer: "Anda akan melihat perbedaan signifikan dalam 24-48 jam pertama penggunaan. Buah yang biasanya menunjukkan tanda pembusukan pada hari ke-3 akan tetap segar hingga hari ke-7 atau lebih, tergantung jenis buah dan kondisi penyimpanan.",
    category: 'product',
    icon: <Clock className="text-[#55A630]" size={20} />
  },
  {
    id: 8,
    question: "Bagaimana cara menyimpan ethylene absorber yang belum digunakan?",
    answer: "Simpan sachet dalam kemasan aslinya di tempat sejuk dan kering, jauh dari sinar matahari langsung. Produk yang belum dibuka memiliki masa simpan 2 tahun. Setelah dibuka, gunakan segera dan jangan simpan kembali produk yang sudah terpapar udara.",
    category: 'usage',
    icon: <Package className="text-[#55A630]" size={20} />
  }
];

const FAQ_CATEGORIES = [
  { id: 'all', name: 'Semua Kategori', icon: <Leaf size={18} /> },
  { id: 'product', name: 'Produk', icon: <Zap size={18} /> },
  { id: 'usage', name: 'Penggunaan', icon: <Package size={18} /> },
  { id: 'shipping', name: 'Pengiriman', icon: <Globe size={18} /> },
  { id: 'safety', name: 'Keamanan', icon: <Shield size={18} /> }
];

export default function FAQPage() {
  const [activeId, setActiveId] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [filteredFaqs, setFilteredFaqs] = useState(FAQ_DATA);
  
  useEffect(() => {
    const results = FAQ_DATA.filter(faq => {
      const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) || 
                           faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
    
    setFilteredFaqs(results);
  }, [searchTerm, selectedCategory]);

  const toggleAccordion = (id: number) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f8faf8] to-[#f0f7f0]">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#0a2e1e] to-[#1a4d32] text-white">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[url('/pattern-dark.svg')] bg-[length:120px_120px] opacity-10"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent to-black/20"></div>
          <div className="absolute top-20 -right-20 w-96 h-96 rounded-full bg-[#55A630]/20 blur-[100px]"></div>
          <div className="absolute bottom-10 -left-20 w-80 h-80 rounded-full bg-[#8CCF42]/20 blur-[80px]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 py-24 md:py-32 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <motion.div
              className="inline-flex items-center bg-[#55A630] px-4 py-1.5 rounded-full mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Leaf size={18} className="mr-2" />
              <span className="font-medium">Pertanyaan Umum</span>
            </motion.div>
            
            <motion.h1
              className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <span className="block">Solusi untuk Setiap</span>
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-[#8CCF42] to-[#C8EE9E]">
                Pertanyaan Anda
              </span>
            </motion.h1>
            
            <motion.p
              className="text-xl max-w-3xl mx-auto text-gray-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Temukan jawaban lengkap untuk pertanyaan seputar produk ethylene absorber kami. Tim ahli kami siap membantu jika Anda membutuhkan informasi lebih lanjut.
            </motion.p>
          </motion.div>
        </div>
      </div>
      
      {/* Floating Search */}
      <div className="max-w-5xl mx-auto px-4 -mt-12 relative z-20">
        <motion.div
          className="bg-white rounded-xl shadow-2xl p-6 border border-gray-100"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <input
                type="text"
                placeholder="Cari pertanyaan atau kata kunci..."
                className="w-full pl-12 pr-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#55A630] focus:border-transparent text-gray-700 placeholder-gray-400"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Search className="absolute left-4 top-3.5 text-gray-500" size={20} />
            </div>
            
            <div className="flex flex-wrap gap-2">
              {FAQ_CATEGORIES.map(category => (
                <motion.button
                  key={category.id}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-[#55A630] to-[#8CCF42] text-white shadow-md'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  onClick={() => setSelectedCategory(category.id)}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  {category.icon}
                  {category.name}
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* FAQ Content */}
      <div className="max-w-5xl mx-auto px-4 py-16 md:py-24">
        {filteredFaqs.length > 0 ? (
          <motion.div 
            className="grid gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            {filteredFaqs.map(faq => (
              <motion.div
                key={faq.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 transition-all hover:shadow-md"
                whileHover={{ y: -2 }}
                layout
              >
                <button
                  className="flex items-center justify-between w-full text-left p-6"
                  onClick={() => toggleAccordion(faq.id)}
                >
                  <div className="flex items-start gap-4">
                    <div className="mt-1 p-2 bg-green-50 rounded-lg">
                      {faq.icon}
                    </div>
                    <h3 className="text-lg md:text-xl font-semibold text-gray-800 pr-4">
                      {faq.question}
                    </h3>
                  </div>
                  <div className="flex-shrink-0 ml-4">
                    {activeId === faq.id ? (
                      <ChevronUp className="text-[#55A630]" size={24} />
                    ) : (
                      <ChevronDown className="text-gray-500" size={24} />
                    )}
                  </div>
                </button>
                
                <AnimatePresence>
                  {activeId === faq.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 ml-14 text-gray-600">
                        <div className="prose max-w-none">
                          <p>{faq.answer}</p>
                          
                          {/* Dynamic additional content based on FAQ */}
                          {faq.id === 1 && (
                            <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-100">
                              <h4 className="font-semibold text-green-800 mb-2 flex items-center gap-2">
                                <Zap size={18} className="text-green-600" />
                                Fakta Menarik:
                              </h4>
                              <p className="text-green-700">
                                Produk kami dapat mengurangi kerusakan buah hingga 72.3% berdasarkan uji laboratorium independen.
                              </p>
                            </div>
                          )}
                          
                          {faq.id === 4 && (
                            <div className="mt-6">
                              <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                                <Shield size={18} className="text-[#55A630]" />
                                Sertifikasi Produk:
                              </h4>
                              <div className="flex flex-wrap gap-3">
                                <span className="inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-medium bg-blue-100 text-blue-800 border border-blue-200">
                                  BPOM Certified
                                </span>
                                <span className="inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-medium bg-purple-100 text-purple-800 border border-purple-200">
                                  FDA Approved
                                </span>
                                <span className="inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-medium bg-yellow-100 text-yellow-800 border border-yellow-200">
                                  EU Standard
                                </span>
                                <span className="inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-medium bg-green-100 text-green-800 border border-green-200">
                                  JHOSPA Japan
                                </span>
                              </div>
                            </div>
                          )}
                          
                          {faq.id === 6 && (
                            <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-100">
                              <h4 className="font-semibold text-blue-800 mb-2 flex items-center gap-2">
                                <Globe size={18} className="text-blue-600" />
                                Tips Pengiriman Ekspor:
                              </h4>
                              <ul className="list-disc pl-5 text-blue-700 space-y-1">
                                <li>Gunakan kemasan khusus dengan indikator suhu</li>
                                <li>Pastikan suhu kontainer stabil antara 10-15°C</li>
                                <li>Tempatkan sachet di beberapa titik strategis</li>
                              </ul>
                            </div>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div 
            className="text-center py-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <div className="mx-auto w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center mb-6">
              <Search className="text-gray-400" size={40} />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">Tidak ada hasil ditemukan</h3>
            <p className="text-gray-600 max-w-md mx-auto mb-6">
              Maaf, kami tidak menemukan pertanyaan yang cocok dengan pencarian Anda.
            </p>
            <button 
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
              }}
              className="px-6 py-2.5 bg-[#55A630] text-white rounded-lg font-medium hover:bg-[#4a952b] transition-colors"
            >
              Reset Pencarian
            </button>
          </motion.div>
        )}
      </div>
      
      {/* Knowledge Base */}
      <div className="max-w-7xl mx-auto px-4 py-16 md:py-24 bg-white">
        <div className="text-center mb-16">
          <motion.div
            className="inline-flex items-center bg-green-100 text-[#55A630] px-4 py-1.5 rounded-full mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Leaf size={18} className="mr-2" />
            <span className="font-medium">Basis Pengetahuan</span>
          </motion.div>
          
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <span className="block">Pelajari Lebih Lanjut Tentang</span>
            <span className="text-[#55A630]">Teknologi Kami</span>
          </motion.h2>
          
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Temukan panduan lengkap, studi kasus, dan informasi teknis tentang solusi pengawetan buah dan sayuran.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:border-[#55A630] transition-all"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            whileHover={{ y: -5 }}
          >
            <div className="w-12 h-12 rounded-lg bg-[#55A630]/10 flex items-center justify-center mb-4">
              <TestTube2 className="text-[#55A630]" size={24} />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Studi Kasus & Data</h3>
            <p className="text-gray-600 mb-4">
              Lihat hasil uji laboratorium dan studi lapangan tentang efektivitas produk kami.
            </p>
            <a href="/#features" className="text-[#55A630] font-medium inline-flex items-center gap-1 hover:underline">
              Pelajari lebih lanjut
              <ChevronRight size={16} />
            </a>
          </motion.div>
          
          <motion.div
            className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:border-[#55A630] transition-all"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            whileHover={{ y: -5 }}
          >
            <div className="w-12 h-12 rounded-lg bg-[#55A630]/10 flex items-center justify-center mb-4">
              <Package className="text-[#55A630]" size={24} />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Panduan Penggunaan</h3>
            <p className="text-gray-600 mb-4">
              Panduan lengkap untuk memaksimalkan efektivitas produk dalam berbagai skenario.
            </p>
            <a href="/#features" className="text-[#55A630] font-medium inline-flex items-center gap-1 hover:underline">
              Pelajari lebih lanjut
              <ChevronRight size={16} />
            </a>
          </motion.div>
          
          <motion.div
            className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:border-[#55A630] transition-all"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            whileHover={{ y: -5 }}
          >
            <div className="w-12 h-12 rounded-lg bg-[#55A630]/10 flex items-center justify-center mb-4">
              <Globe className="text-[#55A630]" size={24} />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Solusi Ekspor</h3>
            <p className="text-gray-600 mb-4">
              Tips dan trik untuk pengiriman ekspor buah dan sayuran dengan hasil optimal.
            </p>
            <a href="/#features" className="text-[#55A630] font-medium inline-flex items-center gap-1 hover:underline">
              Pelajari lebih lanjut
              <ChevronRight size={16} />
            </a>
          </motion.div>
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 py-16 md:py-24">
        <motion.div
          className="bg-gradient-to-br from-[#0a2e1e] to-[#1a4d32] rounded-3xl overflow-hidden shadow-2xl relative"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-[url('/pattern-dark.svg')] bg-[length:120px_120px] opacity-10"></div>
            <div className="absolute top-10 -right-10 w-96 h-96 rounded-full bg-[#55A630]/20 blur-[100px]"></div>
            <div className="absolute bottom-10 -left-10 w-80 h-80 rounded-full bg-[#8CCF42]/20 blur-[80px]"></div>
          </div>
          
          <div className="max-w-4xl mx-auto py-16 px-6 text-center relative z-10">
            <motion.div
              className="inline-flex items-center bg-[#55A630] px-4 py-1.5 rounded-full mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Phone size={18} className="mr-2" />
              <span className="font-medium">Butuh Bantuan?</span>
            </motion.div>
            
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-white mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Masih ada pertanyaan?
            </motion.h2>
            
            <motion.p
              className="text-xl text-gray-300 max-w-2xl mx-auto mb-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Tim dukungan teknis kami terdiri dari ahli pascapanen yang siap membantu Anda menemukan solusi terbaik.
            </motion.p>
            
            <motion.div
              className="flex flex-col sm:flex-row justify-center gap-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <motion.a
                href="tel:+628123456789"
                className="flex items-center justify-center gap-3 bg-white text-gray-800 font-semibold px-6 py-3.5 rounded-lg hover:bg-gray-100 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone size={20} />
                <span>+62 812 3456 789</span>
              </motion.a>
              
              <motion.a
                href="mailto:info@ethyleneabsorber.com"
                className="flex items-center justify-center gap-3 bg-transparent border-2 border-white text-white font-semibold px-6 py-3.5 rounded-lg hover:bg-white/10 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail size={20} />
                <span>Kirim Email</span>
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </div>
      
      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            whileHover={{ y: -5 }}
          >
            <div className="text-5xl font-bold text-[#55A630] mb-4 flex items-end">
              98<span className="text-3xl">%</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center gap-2">
              <Zap size={20} className="text-[#55A630]" />
              Tingkat Kepuasan
            </h3>
            <p className="text-gray-600">Pengguna melaporkan peningkatan kualitas produk yang signifikan</p>
          </motion.div>
          
          <motion.div
            className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            whileHover={{ y: -5 }}
          >
            <div className="text-5xl font-bold text-[#55A630] mb-4">12+</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center gap-2">
              <Globe size={20} className="text-[#55A630]" />
              Negara Pengguna
            </h3>
            <p className="text-gray-600">Produk kami digunakan oleh eksportir di seluruh dunia</p>
          </motion.div>
          
          <motion.div
            className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            whileHover={{ y: -5 }}
          >
            <div className="text-5xl font-bold text-[#55A630] mb-4">24/7</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center gap-2">
              <Clock size={20} className="text-[#55A630]" />
              Dukungan Pelanggan
            </h3>
            <p className="text-gray-600">Tim kami siap membantu kapan saja melalui berbagai saluran</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}