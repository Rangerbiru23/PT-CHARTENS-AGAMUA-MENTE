'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Phone, Mail, MapPin, Trees, Leaf, Sprout } from 'lucide-react'

export default function Home() {
  const [activeSection, setActiveSection] = useState('home')

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-amber-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
                <Trees className="w-6 h-6 text-white" />
              </div>
              <span className="font-bold text-xl text-green-800">PT CHARTENS AGAMUA MENTE</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <button 
                onClick={() => setActiveSection('home')}
                className={`text-sm font-medium transition-colors ${activeSection === 'home' ? 'text-green-600' : 'text-gray-700 hover:text-green-600'}`}
              >
                Beranda
              </button>
              <button 
                onClick={() => setActiveSection('about')}
                className={`text-sm font-medium transition-colors ${activeSection === 'about' ? 'text-green-600' : 'text-gray-700 hover:text-green-600'}`}
              >
                Tentang Kami
              </button>
              <button 
                onClick={() => setActiveSection('services')}
                className={`text-sm font-medium transition-colors ${activeSection === 'services' ? 'text-green-600' : 'text-gray-700 hover:text-green-600'}`}
              >
                Layanan
              </button>
              <button 
                onClick={() => setActiveSection('contact')}
                className={`text-sm font-medium transition-colors ${activeSection === 'contact' ? 'text-green-600' : 'text-gray-700 hover:text-green-600'}`}
              >
                Kontak
              </button>
              <a 
                href="/privacy"
                className="text-sm font-medium text-gray-700 hover:text-green-600 transition-colors"
              >
                Privacy
              </a>
              <a 
                href="/terms"
                className="text-sm font-medium text-gray-700 hover:text-green-600 transition-colors"
              >
                Terms
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                <span className="text-green-600">PT CHARTENS</span>
                <br />
                <span className="text-green-700">AGAMUA MENTE</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Perusahaan terpercaya dalam bidang pertanian cemara dan tanaman tahunan lainnya. 
                Kami berkomitmen untuk memberikan produk pertanian berkualitas tinggi dengan 
                standar profesional terbaik.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white">
                  Hubungi Kami
                </Button>
                <Button variant="outline" size="lg" className="border-green-600 text-green-600 hover:bg-green-50">
                  Pelajari Lebih Lanjut
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/hero-farm.jpg" 
                alt="Pertanian Cemara PT CHARTENS AGAMUA MENTE"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-900/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Tentang Kami</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              PT CHARTENS AGAMUA MENTE adalah perusahaan yang berdedikasi dalam bidang pertanian 
              cemara dan tanaman tahunan lainnya dengan pengalaman dan keahlian terbaik.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <Card className="border-green-100 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Trees className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Pertanian Cemara</h3>
                <p className="text-gray-600">
                  Spesialis dalam budidaya pohon cemara berkualitas tinggi untuk berbagai keperluan industri.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-green-100 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Leaf className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Tanaman Tahunan</h3>
                <p className="text-gray-600">
                  Berbagai jenis tanaman tahunan dengan kualitas terbaik untuk kebutuhan pertanian Anda.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-green-100 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sprout className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Berkualitas Tinggi</h3>
                <p className="text-gray-600">
                  Produk pertanian dengan standar kualitas tertinggi dan proses yang profesional.
                </p>
              </CardContent>
            </Card>

            <Card className="border-green-100 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <img 
                  src="/logo.png" 
                  alt="PT CHARTENS AGAMUA MENTE Logo"
                  className="w-16 h-16 mx-auto mb-4 object-contain"
                />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Terpercaya</h3>
                <p className="text-gray-600">
                  Perusahaan pertanian terpercaya dengan reputasi terbaik di industri.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-green-50 to-emerald-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Layanan Kami</h2>
            <p className="text-xl text-gray-600">
              Solusi pertanian komprehensif untuk kebutuhan bisnis Anda
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg text-gray-900 mb-2">Budidaya Cemara</h3>
                <p className="text-gray-600 text-sm">
                  Jasa budidaya pohon cemara dengan metode modern dan hasil optimal.
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg text-gray-900 mb-2">Konsultasi Pertanian</h3>
                <p className="text-gray-600 text-sm">
                  Konsultasi profesional untuk pengembangan lahan pertanian Anda.
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg text-gray-900 mb-2">Supply Tanaman</h3>
                <p className="text-gray-600 text-sm">
                  Pasok tanaman tahunan berkualitas untuk proyek pertanian skala besar.
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg text-gray-900 mb-2">Perawatan Kebun</h3>
                <p className="text-gray-600 text-sm">
                  Layanan perawatan dan pemeliharaan kebun profesional.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Hubungi Kami</h2>
            <p className="text-xl text-gray-600">
              Siap membantu kebutuhan pertanian Anda
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Informasi Kontak</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Alamat</p>
                    <p className="text-gray-600">
                      Jalan Lewi Mandacan Amban Pantai, Desa/Kelurahan Amban, 
                      Kec. Manokwari Barat, Kab. Manokwari, Provinsi Papua Barat
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Telepon</p>
                    <p className="text-gray-600">085285703582</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Email</p>
                    <p className="text-gray-600">info@chartensagamuamente.co.id</p>
                  </div>
                </div>
              </div>
            </div>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Kirim Pesan</h3>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nama Lengkap
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="Masukkan nama Anda"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="email@example.com"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Pesan
                    </label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="Tuliskan pesan Anda..."
                    ></textarea>
                  </div>
                  
                  <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                    Kirim Pesan
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-800 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                  <Trees className="w-5 h-5 text-green-800" />
                </div>
                <span className="font-bold text-lg">PT CHARTENS AGAMUA MENTE</span>
              </div>
              <p className="text-green-100">
                Perusahaan profesional dalam bidang pertanian cemara dan tanaman tahunan lainnya.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-green-100">
                <li><a href="#" className="hover:text-white transition-colors">Tentang Kami</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Layanan</a></li>
                <li><a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="/terms" className="hover:text-white transition-colors">Terms & Conditions</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Kontak</h4>
              <ul className="space-y-2 text-green-100">
                <li>Manokwari, Papua Barat</li>
                <li>085285703582</li>
                <li>info@chartensagamuamente.co.id</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-green-700 mt-8 pt-8 text-center text-green-100">
            <p>&copy; 2024 PT CHARTENS AGAMUA MENTE. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}