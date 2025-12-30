import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowLeft, FileText, AlertCircle, CheckCircle, Scale } from 'lucide-react'

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-amber-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <span className="font-bold text-xl text-green-800">Terms & Conditions</span>
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
            Syarat dan Ketentuan <span className="text-green-600">PT CHARTENS AGAMUA MENTE</span>
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
                <FileText className="w-8 h-8 text-green-600 mr-3" />
                <h2 className="text-2xl font-semibold text-gray-900">Pendahuluan</h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                Selamat datang di Syarat dan Ketentuan PT CHARTENS AGAMUA MENTE. Dokumen ini 
                mengatur penggunaan layanan kami, hak dan kewajiban Anda sebagai pengguna, 
                serta hubungan hukum antara Anda dan PT CHARTENS AGAMUA MENTE.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Dengan mengakses atau menggunakan layanan kami, Anda menyatakan telah membaca, 
                memahami, dan menyetujui syarat dan ketentuan ini.
              </p>
            </CardContent>
          </Card>

          {/* Definitions */}
          <Card className="border-green-100">
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Definisi</h2>
              <div className="space-y-3 text-gray-700">
                <div>
                  <span className="font-semibold">"Perusahaan"</span> - PT CHARTENS AGAMUA MENTE, 
                  perusahaan yang bergerak di bidang pertanian cemara dan tanaman tahunan lainnya.
                </div>
                <div>
                  <span className="font-semibold">"Pengguna"</span> - Individu atau entitas yang 
                  menggunakan layanan Perusahaan.
                </div>
                <div>
                  <span className="font-semibold">"Layanan"</span> - Semua produk dan jasa yang 
                  disediakan oleh Perusahaan, termasuk budidaya, konsultasi, dan supply pertanian.
                </div>
                <div>
                  <span className="font-semibold">"Website"</span> - Platform online Perusahaan 
                  di www.chartensagamuamente.co.id.
                </div>
                <div>
                  <span className="font-semibold">"Produk"</span> - Pohon cemara, tanaman tahunan, 
                  dan hasil pertanian lainnya yang disediakan Perusahaan.
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Service Terms */}
          <Card className="border-green-100">
            <CardContent className="p-8">
              <div className="flex items-center mb-4">
                <CheckCircle className="w-8 h-8 text-green-600 mr-3" />
                <h2 className="text-2xl font-semibold text-gray-900">Syarat Layanan</h2>
              </div>
              <div className="space-y-4 text-gray-700">
                <div>
                  <h3 className="font-semibold text-lg mb-2">Kelayakan Pengguna:</h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Minimal 18 tahun atau memiliki persetujuan orang tua</li>
                    <li>Memiliki kapasitas hukum untuk mengikat kontrak</li>
                    <li>Memberikan informasi yang akurat dan lengkap</li>
                    <li>Tidak pernah ditangguhkan atau dihapus dari layanan kami</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Pendaftaran Akun:</h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Membuat akun dengan informasi yang valid</li>
                    <li>Menjaga kerahasiaan kredensial akun</li>
                    <li> Bertanggung jawab atas semua aktivitas di akun Anda</li>
                    <li>Memberitahu kami segera jika ada penggunaan tidak sah</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Products and Services */}
          <Card className="border-green-100">
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Produk dan Layanan</h2>
              <div className="space-y-4 text-gray-700">
                <div>
                  <h3 className="font-semibold text-lg mb-2">Deskripsi Produk:</h3>
                  <p className="mb-2">
                    Kami menyediakan berbagai produk pertanian meliputi:
                  </p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Pohon cemara berbagai ukuran dan spesies</li>
                    <li>Tanaman tahunan berkualitas tinggi</li>
                    <li>Konsultasi pertanian profesional</li>
                    <li>Layanan budidaya dan perawatan kebun</li>
                    <li>Supply untuk proyek skala besar</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Kualitas Produk:</h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Semua produk melalui proses quality control ketat</li>
                    <li>Produk sehat dan bebas dari penyakit</li>
                    <li>Sesuai dengan spesifikasi yang dijanjikan</li>
                    <li>Bergaransi untuk kondisi tertentu</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Pricing and Payment */}
          <Card className="border-green-100">
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Harga dan Pembayaran</h2>
              <div className="space-y-4 text-gray-700">
                <div>
                  <h3 className="font-semibold text-lg mb-2">Struktur Harga:</h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Harga yang tercantum dapat berubah sewaktu-waktu</li>
                    <li>Harga belum termasuk biaya pengiriman dan instalasi</li>
                    <li>Diskon khusus untuk pembelian dalam jumlah besar</li>
                    <li>Harga khusus untuk kontrak jangka panjang</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Metode Pembayaran:</h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Transfer bank ke rekening resmi Perusahaan</li>
                    <li>Pembayaran tunai di kantor</li>
                    <li>Pembayaran cicilan untuk transaksi besar</li>
                    <li>Pembayaran dengan kartu kredit/debit</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Delivery and Shipping */}
          <Card className="border-green-100">
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Pengiriman dan Pengantaran</h2>
              <div className="space-y-4 text-gray-700">
                <div>
                  <h3 className="font-semibold text-lg mb-2">Kebijakan Pengiriman:</h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Pengiriman ke seluruh wilayah Indonesia</li>
                    <li>Estimasi waktu pengiriman 3-14 hari kerja</li>
                    <li>Biaya pengiriman disesuaikan dengan jarak dan volume</li>
                    <li>Pengiriman khusus untuk tanaman besar memerlukan perjanjian</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Resiko Pengiriman:</h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Perusahaan tidak bertanggung jawab atas keterlambatan pengiriman</li>
                    <li>Produk diasuransikan selama proses pengiriman</li>
                    <li>Klaim kerusakan harus diajukan maksimal 24 jam setelah penerimaan</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* User Responsibilities */}
          <Card className="border-green-100">
            <CardContent className="p-8">
              <div className="flex items-center mb-4">
                <AlertCircle className="w-8 h-8 text-green-600 mr-3" />
                <h2 className="text-2xl font-semibold text-gray-900">Kewajiban Pengguna</h2>
              </div>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Memberikan informasi yang akurat dan terkini</li>
                <li>Menggunakan layanan sesuai dengan peruntukan</li>
                <li>Tidak melakukan aktivitas ilegal atau merugikan</li>
                <li>Mematuhi semua peraturan dan hukum yang berlaku</li>
                <li>Tidak mencoba merusak atau mengganggu sistem kami</li>
                <li>Respect terhadap hak kekayaan intelektual Perusahaan</li>
                <li>Tidak menggunakan layanan untuk kompetisi tidak sehat</li>
              </ul>
            </CardContent>
          </Card>

          {/* Intellectual Property */}
          <Card className="border-green-100">
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Hak Kekayaan Intelektual</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Semua konten, merek, logo, desain, dan materi intelektual lainnya di website 
                dan layanan kami adalah milik PT CHARTENS AGAMUA MENTE atau dilisensikan kepada kami.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Anda dilarang:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Menggunakan merek atau logo kami tanpa izin tertulis</li>
                <li>Menyalin, mendistribusikan, atau memodifikasi konten kami</li>
                <li>Membuat produk turunan dari layanan kami</li>
                <li>Menggunakan teknologi kami untuk kompetisi</li>
              </ul>
            </CardContent>
          </Card>

          {/* Limitation of Liability */}
          <Card className="border-green-100">
            <CardContent className="p-8">
              <div className="flex items-center mb-4">
                <Scale className="w-8 h-8 text-green-600 mr-3" />
                <h2 className="text-2xl font-semibold text-gray-900">Batasan Tanggung Jawab</h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                Sejauh diizinkan oleh hukum, PT CHARTENS AGAMUA MENTE tidak bertanggung jawab atas:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Kerugian tidak langsung, insidental, atau konsekuensial</li>
                <li>Kehilangan keuntungan atau peluang bisnis</li>
                <li>Kerusakan pada properti pihak ketiga</li>
                <li>Gangguan atau ketidaktersediaan layanan</li>
                <li>Kesalahan atau kelalaian dari pihak ketiga</li>
                <li>Kondisi alam atau force majeure</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                Tanggung jawab maksimal kami terbatas pada nilai transaksi yang bersangkutan.
              </p>
            </CardContent>
          </Card>

          {/* Termination */}
          <Card className="border-green-100">
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Penghentian Layanan</h2>
              <div className="space-y-4 text-gray-700">
                <div>
                  <h3 className="font-semibold text-lg mb-2">Penghentian oleh Pengguna:</h3>
                  <p>Anda dapat menghentikan penggunaan layanan kapan saja dengan memberikan pemberitahuan 30 hari.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Penghentian oleh Perusahaan:</h3>
                  <p>Kami dapat menghentikan layanan jika:</p>
                  <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
                    <li>Anda melanggar syarat dan ketentuan</li>
                    <li>Ada aktivitas mencurigakan atau ilegal</li>
                    <li>Diperlukan oleh hukum atau peraturan</li>
                    <li>Layanan tidak lagi ekonomis untuk disediakan</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Dispute Resolution */}
          <Card className="border-green-100">
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Penyelesaian Sengketa</h2>
              <div className="space-y-4 text-gray-700">
                <div>
                  <h3 className="font-semibold text-lg mb-2">Negosiasi:</h3>
                  <p>Upaya penyelesaian sengketa akan dilakukan melalui negosiasi baik secara langsung maupun tidak langsung.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Mediasi:</h3>
                  <p>Jika negosiasi gagal, kedua belah pihak sepakat untuk menyelesaikan sengketa melalui mediasi.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Yurisdiksi:</h3>
                  <p>Syarat dan ketentuan ini diatur oleh hukum Republik Indonesia. Sengketa akan diselesaikan di pengadilan Manokwari.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* General Provisions */}
          <Card className="border-green-100">
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Ketentuan Umum</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li><strong>Perubahan Syarat:</strong> Kami dapat mengubah syarat dan ketentuan sewaktu-waktu dengan pemberitahuan 30 hari.</li>
                <li><strong>Pemisahan:</strong> Jika bagian dari syarat ini tidak sah, bagian lainnya tetap berlaku.</li>
                <li><strong>Pengabaian:</strong> Kegagalan menegakkan syarat tidak berarti pengabaian hak.</li>
                <li><strong>Keseluruhan Perjanjian:</strong> Dokumen ini merupakan keseluruhan perjanjian antara Anda dan Perusahaan.</li>
                <li><strong>Bahasa:</strong> Syarat dan ketentuan ini berlaku dalam Bahasa Indonesia.</li>
              </ul>
            </CardContent>
          </Card>

          {/* Contact */}
          <Card className="border-green-100">
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Hubungi Kami</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Jika Anda memiliki pertanyaan tentang syarat dan ketentuan ini, silakan hubungi:
              </p>
              <div className="bg-green-50 p-4 rounded-lg">
                <p className="font-semibold text-gray-900">PT CHARTENS AGAMUA MENTE</p>
                <p className="text-gray-700">Email: legal@chartensagamuamente.co.id</p>
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
            <Link href="/privacy" className="text-green-100 hover:text-white transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}