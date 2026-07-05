'use client'

import { useState } from 'react';
import { 
  Mail, Phone, MapPin, Clock, Send, Check, 
  MessageCircle, Leaf, ChevronRight, 
  Facebook, Twitter, Instagram, Linkedin
} from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1500);
  };

  const contactMethods = [
    {
      icon: <Mail className="text-green-600" size={24} />,
      title: 'Email Kami',
      details: 'support@ethyleneabsorber.com',
      action: 'Kirim email'
    },
    {
      icon: <Phone className="text-green-600" size={24} />,
      title: 'Telepon',
      details: '+62 812 3456 7890',
      action: 'Hubungi sekarang'
    },
    {
      icon: <MapPin className="text-green-600" size={24} />,
      title: 'Kunjungi Kami',
      details: 'Jl. Teknologi No. 123, Bandung',
      action: 'Lihat peta'
    }
  ];

  const faqs = [
    {
      question: "Berapa lama waktu respon untuk email?",
      answer: "Kami merespons semua email dalam 1-2 jam kerja pada hari kerja."
    },
    {
      question: "Apakah saya perlu membuat janji?",
      answer: "Kami menyarankan janji terlebih dahulu untuk memastikan staf tersedia."
    },
    {
      question: "Apakah ada dukungan 24/7?",
      answer: "Untuk dukungan teknis darurat: +62 812 3456 7891."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f8fbf8] to-[#eaf5ea] pt-10 relative">
      {/* Floating Leaves Decoration */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute top-20 left-10 w-24 h-24 bg-green-100 rounded-full opacity-30" />
        <div className="absolute top-1/3 right-20 w-32 h-32 bg-green-200 rounded-full opacity-20" />
        <div className="absolute bottom-40 left-1/4 w-20 h-20 bg-green-100 rounded-full opacity-30" />
        <div className="absolute top-10 right-1/3 w-16 h-16 bg-green-300 rounded-full opacity-15" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 py-12 md:py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6">
            <MessageCircle className="text-green-600" size={28} />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            <span className="block">Hubungi</span>
            <span className="text-green-600">Tim Kami</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Kami siap membantu Anda dengan produk ethylene absorber dan menjawab semua pertanyaan Anda.
          </p>
        </div>

        {/* Contact Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-green-50">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                <Send className="text-green-600" size={20} />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">Kirim Pesan</h2>
            </div>
            
            {submitSuccess ? (
              <div className="text-center py-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6">
                  <Check className="text-green-600" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Pesan Terkirim!</h3>
                <p className="text-gray-600 max-w-md mx-auto">
                  Terima kasih telah menghubungi kami. Tim kami akan segera merespons pesan Anda.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Nama Lengkap</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Masukkan nama Anda"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="email@contoh.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Pesan</label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Tulis pesan Anda..."
                  />
                </div>
                
                <button
                  type="submit"
                  className={`w-full flex items-center justify-center gap-2 py-3 px-6 rounded-xl font-medium text-white transition-all ${
                    isSubmitting 
                      ? 'bg-gray-400 cursor-not-allowed' 
                      : 'bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800'
                  }`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Mengirim...</span>
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      <span>Kirim Pesan</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
          
          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {contactMethods.map((method, index) => (
                <div key={index} className="bg-white rounded-xl p-6 border border-green-50 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center mb-4">
                    {method.icon}
                  </div>
                  <h3 className="font-bold text-lg text-gray-800 mb-2">{method.title}</h3>
                  <p className="text-gray-700 mb-4">{method.details}</p>
                  <button className="text-green-600 font-medium hover:text-green-700 transition-colors flex items-center">
                    {method.action}
                    <ChevronRight className="ml-1" size={16} />
                  </button>
                </div>
              ))}
              
              {/* Social Media Card */}
              <div className="bg-white rounded-xl p-6 border border-green-50 shadow-sm">
                <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center mb-4">
                  <MessageCircle className="text-green-600" size={24} />
                </div>
                <h3 className="font-bold text-lg text-gray-800 mb-4">Media Sosial</h3>
                <div className="flex gap-3">
                  <a href="/#features" className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center hover:bg-green-100 transition-colors">
                    <Facebook className="text-green-600" size={18} />
                  </a>
                  <a href="/#features" className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center hover:bg-green-100 transition-colors">
                    <Twitter className="text-green-600" size={18} />
                  </a>
                  <a href="/#features" className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center hover:bg-green-100 transition-colors">
                    <Instagram className="text-green-600" size={18} />
                  </a>
                  <a href="/#features" className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center hover:bg-green-100 transition-colors">
                    <Linkedin className="text-green-600" size={18} />
                  </a>
                </div>
              </div>
            </div>
            
            {/* Location Card */}
            <div className="bg-gradient-to-br from-green-700 to-green-800 rounded-xl p-6 text-white">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="mb-4 md:mb-0">
                  <div className="flex items-center gap-3 mb-4">
                    <MapPin className="text-green-300" size={24} />
                    <h3 className="text-xl font-bold">Kunjungi Kantor Kami</h3>
                  </div>
                  <p className="mb-2">Jl. Teknologi No. 123, Bandung, Indonesia 40234</p>
                  <p className="text-green-200">Senin - Jumat: 08.00 - 17.00 WIB</p>
                </div>
                <button className="px-5 py-2.5 bg-white text-green-700 rounded-lg font-medium hover:bg-gray-100 transition-colors whitespace-nowrap">
                  Petunjuk Arah
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* FAQ Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-20 border border-green-50">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
              <Leaf className="text-green-600" size={20} />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">Pertanyaan Umum</h2>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-green-100 rounded-xl p-5 hover:border-green-300 transition-colors">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-green-700 font-medium">{index + 1}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg text-gray-800 mb-2">
                      {faq.question}
                    </h3>
                    <p className="text-gray-600">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Map Section */}
        <div className="rounded-2xl overflow-hidden shadow-lg border border-green-50">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 bg-gradient-to-b from-green-700 to-green-800 text-white">
              <h3 className="text-2xl font-bold mb-6">Lokasi Kami</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="text-green-300 mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Alamat</h4>
                    <p>Jl. Teknologi No. 123, Gedung Inovasi Lt. 5, Bandung, Indonesia 40234</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Clock className="text-green-300 mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Jam Operasional</h4>
                    <p>Senin - Jumat: 08.00 - 17.00 WIB</p>
                    <p>Sabtu: 08.00 - 12.00 WIB</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Phone className="text-green-300 mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Telepon Darurat</h4>
                    <p>+62 812 3456 7891 (24/7)</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-green-100 to-green-200 h-64 md:h-auto flex items-center justify-center">
              <div className="text-center p-6">
                <div className="w-16 h-16 rounded-full border-4 border-green-600 flex items-center justify-center mx-auto mb-4">
                  <MapPin className="text-green-600" size={28} />
                </div>
                <h3 className="text-xl font-bold text-green-800 mb-2">Lokasi Kami</h3>
                <p className="text-green-700">Jl. Teknologi No. 123, Bandung</p>
                <p className="text-green-600 mt-4">Peta interaktif akan ditampilkan di sini</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Siap untuk meningkatkan kualitas produk Anda?</h3>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Hubungi tim ahli kami hari ini untuk konsultasi gratis tentang solusi ethylene absorber terbaik untuk bisnis Anda.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-8 py-3 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-lg font-medium hover:from-green-700 hover:to-green-800 transition-all">
              <span className="flex items-center justify-center gap-2">
                <Phone size={20} />
                Hubungi Sekarang
              </span>
            </button>
            <button className="px-8 py-3 bg-white text-green-700 border border-green-200 rounded-lg font-medium hover:bg-green-50 transition-colors">
              <span className="flex items-center justify-center gap-2">
                <Mail size={20} />
                Request Demo
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Floating Contact Button */}
      <div className="fixed bottom-6 right-6 z-20">
        <button className="w-14 h-14 rounded-full bg-gradient-to-br from-green-600 to-green-700 shadow-lg flex items-center justify-center hover:from-green-700 hover:to-green-800 transition-all">
          <MessageCircle className="text-white" size={24} />
        </button>
      </div>
    </div>
  );
}
