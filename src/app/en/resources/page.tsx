import { Metadata } from 'next'
import Link from 'next/link'
import { FileText, Download, FileSpreadsheet, Book } from 'lucide-react'
import { SITE_URL } from '@/lib/constants'
import SubPageHero from '@/components/SubPageHero'

export const metadata: Metadata = {
  title: 'Resources and Downloadable Documents | EOS Proje',
  description: 'EOS Proje operation playbooks, LOD standards, corporate identity and pricing templates. Free resources for BIM and laser scanning projects.',
  keywords: ['BIM resources', 'LOD standards', 'laser scanning guide', 'scan to bim documentation', 'operation playbook'],
  alternates: {
    canonical: `${SITE_URL}/en/resources`,
    languages: {
      'tr': `${SITE_URL}/kaynaklar`,
      'en': `${SITE_URL}/en/resources`,
    },
  },
  openGraph: {
    title: 'Resources and Downloadable Documents | EOS Proje',
    description: 'Free resources, LOD standards and operation guides for BIM and laser scanning projects.',
    url: `${SITE_URL}/en/resources`,
    siteName: 'EOS Proje',
    locale: 'en_US',
    type: 'website',
  },
}

const downloads = [
  {
    title: 'Operation Playbook - Industrial & Architectural',
    description: 'Comprehensive operation guide for industrial facilities and architectural projects. Best practices for process management, quality control and project delivery.',
    filename: 'EOSPROJE_Operasyon_Playbook_Endustriyel_Mimari.pdf',
    size: '305 KB',
    icon: Book,
    category: 'Guide',
  },
  {
    title: 'LOD Standards - Architectural Projects',
    description: 'LOD (Level of Development) standards for architectural BIM projects. Detailed specifications at LOD 100, 200, 300, 350 and 400 levels.',
    filename: 'EOSPROJE_LOD_Standartlari_Mimari_Projeler.pdf',
    size: '590 KB',
    icon: FileText,
    category: 'Standard',
  },
  {
    title: 'LOD Standards - Industrial Facility',
    description: 'LOD standards for industrial facility and MEP modeling. Detail levels for piping, HVAC, electrical and mechanical systems.',
    filename: 'EOSPROJE_LOD_Standartlari_Endustriyel_Tesis.pdf',
    size: '869 KB',
    icon: FileText,
    category: 'Standard',
  },
  {
    title: 'Corporate Identity Guide',
    description: 'EOS Proje corporate identity guide. Logo usage, color palette, typography and brand standards.',
    filename: 'eosproje-kurumsal-kimlik.pdf',
    size: '5 MB',
    icon: Book,
    category: 'Corporate',
  },
  {
    title: 'Pricing and Contract Template',
    description: 'Pricing guide and contract template for BIM modeling and laser scanning projects.',
    filename: 'EOSPROJE_Fiyatlandirma_Sozlesme_Sablonu.docx',
    size: '43 KB',
    icon: FileSpreadsheet,
    category: 'Template',
  },
]

export default function ResourcesPage() {
  return (
    <>
      <SubPageHero
        title="Resources and Documents"
        description="Free resources, guides and standards for BIM modeling and laser scanning projects."
        breadcrumb={[
          { label: 'Home', href: '/en' },
          { label: 'Resources', href: '/en/resources' },
        ]}
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Downloadable Documents
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Operation guides, LOD standards and templates you can use in your projects.
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
                          Download
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
                Need a Custom Project Quote?
              </h3>
              <p className="text-gray-600 mb-6 max-w-xl mx-auto">
                Contact us for a custom price quote and detailed information about your project.
              </p>
              <Link
                href="/en/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 text-white font-medium rounded-lg hover:bg-red-700 transition-colors"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
