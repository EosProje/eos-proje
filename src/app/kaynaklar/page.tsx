import { Metadata } from 'next'
import Link from 'next/link'
import { FileText, Download, FileSpreadsheet, Book } from 'lucide-react'
import { SITE_URL } from '@/lib/constants'
import SubPageHero from '@/components/SubPageHero'

export const metadata: Metadata = {
  title: 'Kaynaklar ve İndirilebilir Dökümanlar | EOS Proje',
  description: 'EOS Proje operasyon kılavuzları, LOD standartları, kurumsal kimlik ve fiyatlandırma şablonları. BIM ve lazer tarama projeleri için ücretsiz kaynaklar.',
  keywords: ['BIM kaynaklar', 'LOD standartları', 'lazer tarama kılavuz', 'scan to bim döküman', 'operasyon playbook'],
  alternates: {
    canonical: `${SITE_URL}/kaynaklar`,
    languages: {
      'tr': `${SITE_URL}/kaynaklar`,
      'en': `${SITE_URL}/en/resources`,
    },
  },
  openGraph: {
    title: 'Kaynaklar ve İndirilebilir Dökümanlar | EOS Proje',
    description: 'BIM ve lazer tarama projeleri için ücretsiz kaynaklar, LOD standartları ve operasyon kılavuzları.',
    url: `${SITE_URL}/kaynaklar`,
    siteName: 'EOS Proje',
    locale: 'tr_TR',
    type: 'website',
  },
}

const downloads = [
  {
    title: 'Operasyon Playbook - Endüstriyel & Mimari',
    description: 'Endüstriyel tesisler ve mimari projeler için kapsamlı operasyon kılavuzu. Süreç yönetimi, kalite kontrol ve proje teslimatı için en iyi uygulamalar.',
    filename: 'EOSPROJE_Operasyon_Playbook_Endustriyel_Mimari.pdf',
    size: '305 KB',
    icon: Book,
    category: 'Kılavuz',
  },
  {
    title: 'LOD Standartları - Mimari Projeler',
    description: 'Mimari BIM projeleri için LOD (Level of Development) standartları. LOD 100, 200, 300, 350 ve 400 seviyelerinde detaylı spesifikasyonlar.',
    filename: 'EOSPROJE_LOD_Standartlari_Mimari_Projeler.pdf',
    size: '590 KB',
    icon: FileText,
    category: 'Standart',
  },
  {
    title: 'LOD Standartları - Endüstriyel Tesis',
    description: 'Endüstriyel tesis ve MEP modelleme için LOD standartları. Borulama, HVAC, elektrik ve mekanik sistemler için detay seviyeleri.',
    filename: 'EOSPROJE_LOD_Standartlari_Endustriyel_Tesis.pdf',
    size: '869 KB',
    icon: FileText,
    category: 'Standart',
  },
  {
    title: 'Kurumsal Kimlik Kılavuzu',
    description: 'EOS Proje kurumsal kimlik kılavuzu. Logo kullanımı, renk paleti, tipografi ve marka standartları.',
    filename: 'eosproje-kurumsal-kimlik.pdf',
    size: '5 MB',
    icon: Book,
    category: 'Kurumsal',
  },
  {
    title: 'Fiyatlandırma ve Sözleşme Şablonu',
    description: 'BIM modelleme ve lazer tarama projeleri için fiyatlandırma rehberi ve sözleşme şablonu.',
    filename: 'EOSPROJE_Fiyatlandirma_Sozlesme_Sablonu.docx',
    size: '43 KB',
    icon: FileSpreadsheet,
    category: 'Şablon',
  },
]

export default function KaynaklarPage() {
  return (
    <>
      <SubPageHero
        title="Kaynaklar ve Dökümanlar"
        description="BIM modelleme ve lazer tarama projeleri için ücretsiz kaynaklar, kılavuzlar ve standartlar."
        breadcrumb={[
          { label: 'Ana Sayfa', href: '/' },
          { label: 'Kaynaklar', href: '/kaynaklar' },
        ]}
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              İndirilebilir Dökümanlar
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Projelerinizde kullanabileceğiniz operasyon kılavuzları, LOD standartları ve şablonlar.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {downloads.map((item, index) => {
              const IconComponent = item.icon
              return (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-red-50 rounded-lg">
                      <IconComponent className="w-6 h-6 text-red-600" />
                    </div>
                    <div className="flex-1">
                      <span className="inline-block px-2 py-1 text-xs font-medium text-red-600 bg-red-50 rounded mb-2">
                        {item.category}
                      </span>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-600 mb-4">
                        {item.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-400">{item.size}</span>
                        <a
                          href={`/downloads/${item.filename}`}
                          download
                          className="inline-flex items-center gap-2 px-4 py-2 bg-red-600 text-white text-sm font-medium rounded-lg hover:bg-red-700 transition-colors"
                        >
                          <Download className="w-4 h-4" />
                          İndir
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="mt-16 text-center">
            <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Özel Proje Teklifi İster misiniz?
              </h3>
              <p className="text-gray-600 mb-6 max-w-xl mx-auto">
                Projenize özel fiyat teklifi ve detaylı bilgi için bizimle iletişime geçin.
              </p>
              <Link
                href="/iletisim"
                className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 text-white font-medium rounded-lg hover:bg-red-700 transition-colors"
              >
                İletişime Geç
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
