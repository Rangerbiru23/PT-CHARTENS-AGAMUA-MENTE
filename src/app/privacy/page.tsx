import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowLeft, Shield, Eye, Lock, Database } from 'lucide-react'

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-amber-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <span className="font-bold text-xl text-green-800">Privacy Policy</span>
            </div>
            <Link href="/">
              <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Kembali ke Beranda
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Kebijakan Privasi <span className="text-green-600">PT CHARTENS AGAMUA MENTE</span>
          </h1>
          <p className="text-xl text-gray-600">
            Terakhir diperbarui: {new Date().toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>

        <div className="space-y-8">
          {/* Introduction */}
          <Card className="border-green-100">
            <CardContent className="p-8">
              <div className="flex items-center mb-4">
                <Eye className="w-8 h-8 text-green-600 mr-3" />
                <h2 className="text-2xl font-semibold text-gray-900">Pendahuluan</h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                Selamat datang di Kebijakan Privasi PT CHARTENS AGAMUA MENTE. Dokumen ini menjelaskan 
                bagaimana kami mengumpulkan, menggunakan, melindungi, dan membagikan informasi pribadi 
                Anda ketika menggunakan layanan kami.
              </p>
              <p className="text-gray-700 leading-relaxed">
                PT CHARTENS AGAMUA MENTE berkomitmen untuk melindungi privasi dan keamanan data pribadi 
                Anda sesuai dengan peraturan perundang-undangan yang berlaku di Indonesia.
              </p>
            </CardContent>
          </Card>

          {/* Information Collection */}
          <Card className="border-green-100">
            <CardContent className="p-8">
              <div className="flex items-center mb-4">
                <Database className="w-8 h-8 text-green-600 mr-3" />
                <h2 className="text-2xl font-semibold text-gray-900">Pengumpulan Informasi</h2>
              </div>
              <div className="space-y-4 text-gray-700">
                <div>
                  <h3 className="font-semibold text-lg mb-2">Informasi yang Kami Kumpulkan:</h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Nama lengkap dan informasi identitas</li>
                    <li>Alamat email dan nomor telepon</li>
                    <li>Alamat lengkap untuk pengiriman</li>
                    <li>Informasi pembayaran dan transaksi</li>
                    <li>Data penggunaan website dan layanan</li>
                    <li>Informasi teknis (IP address, browser, device)</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Cara Pengumpulan:</h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Formulir pendaftaran dan kontak</li>
                    <li>Komunikasi langsung dengan tim kami</li>
                    <li>Penggunaan website dan aplikasi</li>
                    <li>Cookies dan teknologi tracking</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Information Usage */}
          <Card className="border-green-100">
            <CardContent className="p-8">
              <div className="flex items-center mb-4">
                <Lock className="w-8 h-8 text-green-600 mr-3" />
                <h2 className="text-2xl font-semibold text-gray-900">Penggunaan Informasi</h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                Kami menggunakan informasi pribadi Anda untuk:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Menyediakan layanan pertanian dan produk yang Anda minta</li>
                <li>Memproses transaksi dan pembayaran</li>
                <li>Mengkomunikasikan informasi produk dan layanan</li>
                <li>Memberikan dukungan pelanggan</li>
                <li>Meningkatkan kualitas layanan kami</li>
                <li>Memenuhi kewajiban hukum dan peraturan</li>
                <li>Mencegah aktivitas ilegal dan penipuan</li>
              </ul>
            </CardContent>
          </Card>

          {/* Data Protection */}
          <Card className="border-green-100">
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Perlindungan Data</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                PT CHARTENS AGAMUA MENTE mengimplementasikan langkah-langkah keamanan yang komprehensif:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Enkripsi data selama transmisi dan penyimpanan</li>
                <li>Akses terbatas ke informasi pribadi</li>
                <li>Firewall dan sistem keamanan berlapis</li>
                <li>Backup data teratur dan aman</li>
                <li>Monitoring keamanan 24/7</li>
                <li>Pelatihan rutin tim keamanan</li>
              </ul>
            </CardContent>
          </Card>

          {/* Data Sharing */}
          <Card className="border-green-100">
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Pembagian Informasi</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Kami tidak menjual, menyewakan, atau membagikan informasi pribadi Anda kepada pihak ketiga, 
                kecuali dalam kondisi berikut:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Dengan persetujuan eksplisit dari Anda</li>
                <li>Untuk memenuhi layanan yang Anda minta</li>
                <li>Kepada mitra bisnis tepercaya dengan perjanjian kerahasiaan</li>
                <li>Untuk kepatuhan hukum atau perintah pengadilan</li>
                <li>Untuk melindungi hak, properti, atau keselamatan kami atau orang lain</li>
              </ul>
            </CardContent>
          </Card>

          {/* User Rights */}
          <Card className="border-green-100">
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Hak Anda</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Sebagai pengguna, Anda memiliki hak untuk:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Mengakses dan melihat informasi pribadi Anda</li>
                <li>Memperbaiki informasi yang tidak akurat</li>
                <li>Menghapus informasi pribadi Anda</li>
                <li>Menolak penggunaan informasi untuk tujuan pemasaran</li>
                <li>Meminta salinan data pribadi Anda</li>
                <li>Menarik persetujuan yang telah diberikan</li>
              </ul>
            </CardContent>
          </Card>

          {/* Cookies */}
          <Card className="border-green-100">
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Kebijakan Cookies</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Website kami menggunakan cookies untuk meningkatkan pengalaman pengguna:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li><strong>Cookies Esensial:</strong> Diperlukan untuk fungsi dasar website</li>
                <li><strong>Cookies Performa:</strong> Membantu kami memahami penggunaan website</li>
                <li><strong>Cookies Fungsional:</strong> Mengingat preferensi Anda</li>
                <li><strong>Cookies Pemasaran:</strong> Menampilkan konten yang relevan</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                Anda dapat mengatur preferensi cookies melalui pengaturan browser Anda.
              </p>
            </CardContent>
          </Card>

          {/* Policy Changes */}
          <Card className="border-green-100">
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Perubahan Kebijakan</h2>
              <p className="text-gray-700 leading-relaxed">
                Kami dapat memperbarui kebijakan privasi ini dari waktu ke waktu. Perubahan akan 
                diberitahukan melalui website atau email Anda. Penggunaan layanan kami setelah 
                perubahan berarti Anda menyetujui kebijakan yang diperbarui.
              </p>
            </CardContent>
          </Card>

          {/* Contact */}
          <Card className="border-green-100">
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Hubungi Kami</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Jika Anda memiliki pertanyaan tentang kebijakan privasi kami atau ingin 
                melaksanakan hak Anda, silakan hubungi:
              </p>
              <div className="bg-green-50 p-4 rounded-lg">
                <p className="font-semibold text-gray-900">PT CHARTENS AGAMUA MENTE</p>
                <p className="text-gray-700">Email: privacy@chartensagamuamente.co.id</p>
                <p className="text-gray-700">Telepon: 085285703582</p>
                <p className="text-gray-700">
                  Alamat: Jalan Lewi Mandacan Amban Pantai, Desa/Kelurahan Amban, 
                  Kec. Manokwari Barat, Kab. Manokwari, Provinsi Papua Barat
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-green-800 text-white py-8 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p>&copy; 2024 PT CHARTENS AGAMUA MENTE. All rights reserved.</p>
          <div className="mt-4 space-x-4">
            <Link href="/" className="text-green-100 hover:text-white transition-colors">
              Beranda
            </Link>
            <Link href="/terms" className="text-green-100 hover:text-white transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}