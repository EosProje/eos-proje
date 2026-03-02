'use client'

import Link from 'next/link'
import { Home, ArrowLeft, Search } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-2xl mx-auto">
          {/* 404 Number */}
          <h1 className="text-8xl md:text-9xl font-bold text-red-600 mb-4">
            404
          </h1>
          
          {/* Title */}
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Sayfa Bulunamadı
          </h2>
          
          {/* Description */}
          <p className="text-gray-600 mb-8 text-lg">
            Aradığınız sayfa taşınmış, silinmiş veya hiç var olmamış olabilir.
            Lütfen URL&apos;yi kontrol edin veya aşağıdaki bağlantıları kullanın.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-red-600 text-white font-medium rounded-lg hover:bg-red-700 transition-colors"
            >
              <Home className="w-5 h-5" />
              Ana Sayfaya Dön
            </Link>
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              Geri Git
            </button>
          </div>

          {/* Helpful Links */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Yararlı Bağlantılar
            </h3>
            <div className="grid sm:grid-cols-2 gap-3 text-left">
              <Link
                href="/cozumler/scan-to-bim"
                className="flex items-center gap-2 p-3 bg-white rounded-lg hover:shadow-md transition-shadow text-gray-700 hover:text-red-600"
              >
                <Search className="w-4 h-4" />
                Scan to BIM Hizmetleri
              </Link>
              <Link
                href="/referanslar"
                className="flex items-center gap-2 p-3 bg-white rounded-lg hover:shadow-md transition-shadow text-gray-700 hover:text-red-600"
              >
                <Search className="w-4 h-4" />
                Referans Projeler
              </Link>
              <Link
                href="/blog"
                className="flex items-center gap-2 p-3 bg-white rounded-lg hover:shadow-md transition-shadow text-gray-700 hover:text-red-600"
              >
                <Search className="w-4 h-4" />
                Blog Yazıları
              </Link>
              <Link
                href="/iletisim"
                className="flex items-center gap-2 p-3 bg-white rounded-lg hover:shadow-md transition-shadow text-gray-700 hover:text-red-600"
              >
                <Search className="w-4 h-4" />
                İletişim
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
