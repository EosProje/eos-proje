'use client';

import Link from 'next/link';
import { ServiceSchema } from '@/components/schema/ServiceSchema';
import LocalBusinessSchema from '@/components/schema/LocalBusinessSchema';
import BreadcrumbSchema from '@/components/schema/BreadcrumbSchema';
import { getWhatsAppByLocation, getLocationDataBySlug, LocationData } from '@/lib/keywords';
import { 
  MapPin, 
  Building2, 
  Cpu, 
  Camera, 
  FileText, 
  CheckCircle, 
  ArrowRight, 
  Phone, 
  Mail,
  Globe,
  Factory,
  Landmark,
  HardHat,
  Zap,
  Shield,
  Award,
  Clock,
  Target,
  Plane,
  MessageCircle,
  Briefcase,
  TrendingUp,
  Star
} from 'lucide-react';

interface LocationClientProps {
  location: string;
  slug: string;
}

const services = [
  {
    icon: Factory,
    title: 'Endüstriyel Tesis Tarama',
    description: 'Petrol rafinerileri, fabrikalar ve enerji santralleri için ±2mm hassasiyetinde 3D lazer tarama',
    link: '/cozumler/lazer-tarama',
    badge: 'En Popüler'
  },
  {
    icon: Landmark,
    title: 'Rölöve ve Restorasyon',
    description: 'Tarihi yapılar ve kültürel miras için detaylı HBIM modelleme ve koruma belgeleme',
    link: '/cozumler/heritage-bim',
    badge: null
  },
  {
    icon: Plane,
    title: 'İHA Haritalama',
    description: 'Havadan fotogrametri ve ortofoto üretimi ile geniş alan haritalama',
    link: '/cozumler/lazer-tarama',
    badge: null
  },
  {
    icon: Cpu,
    title: 'BIM Modelleme',
    description: 'Scan to BIM dönüşüm ve LOD 100-400 seviyelerinde profesyonel Revit modelleme',
    link: '/cozumler/scan-to-bim',
    badge: null
  }
];

const defaultSectors = [
  {
    icon: Factory,
    title: 'Endüstriyel Tesisler',
    description: 'Fabrikalar, enerji santralleri, petrokimya tesisleri',
    link: '/sektorler/endustriyel-tesis'
  },
  {
    icon: Landmark,
    title: 'Tarihi Yapılar',
    description: 'Restorasyon, koruma ve kültürel miras belgeleme',
    link: '/sektorler/restorasyon'
  },
  {
    icon: Building2,
    title: 'Mimari Projeler',
    description: 'Ticari binalar, konutlar ve karma kullanım projeleri',
    link: '/sektorler/mimarlik'
  },
  {
    icon: HardHat,
    title: 'İnşaat & Renovasyon',
    description: 'Yenileme, tadilat ve inşaat projeleri',
    link: '/sektorler/renovasyon'
  }
];

const reasons = [
  {
    icon: Globe,
    title: '15+ Ülkede Uluslararası Deneyim',
    description: 'Avrupa, Orta Doğu ve Körfez bölgesinde 500+ başarılı proje'
  },
  {
    icon: Shield,
    title: 'ISO 19650 BIM Standartları',
    description: 'Uluslararası BIM yönetim standartlarına tam uygunluk'
  },
  {
    icon: Target,
    title: '±2mm Milimetrik Hassasiyet',
    description: 'Faro, Leica, NavVis ile yüksek hassasiyetli ölçüm'
  },
  {
    icon: Zap,
    title: 'Son Teknoloji Ekipman',
    description: 'Piyasanın en gelişmiş lazer tarama sistemleri'
  },
  {
    icon: Award,
    title: 'Sertifikalı Uzman Kadro',
    description: 'Autodesk sertifikalı BIM uzmanları'
  },
  {
    icon: Clock,
    title: '7/24 Teknik Destek',
    description: 'Kesintisiz müşteri hizmetleri ve proje takibi'
  }
];

// Default stats - will be overridden by location-specific data
const defaultStats = [
  { value: '500+', label: 'Proje' },
  { value: '15+', label: 'Ülke' },
  { value: '10+', label: 'Yıl' },
  { value: '±2mm', label: 'Hassasiyet' }
];

export default function LocationClient({ location, slug }: LocationClientProps) {
  const breadcrumbs = [
    { name: 'Ana Sayfa', url: '/' },
    { name: 'Lokasyonlar', url: '/lokasyon' },
    { name: location, url: `/lokasyon/${slug}` }
  ];

  // Get location-specific data
  const locationData = getLocationDataBySlug(slug, 'tr');

  // Bölgeye göre WhatsApp numarası belirle
  const whatsappInfo = getWhatsAppByLocation(slug, 'tr');
  const whatsappMessage = encodeURIComponent(`Merhaba, ${location} bölgesindeki projemiz için teklif almak istiyorum.`);
  const whatsappUrl = `https://wa.me/${whatsappInfo.number}?text=${whatsappMessage}`;

  // Location-specific description
  const locationDescription = locationData?.description?.tr || 
    `${location} bölgesinde endüstriyel tesisler, mimari projeler ve tarihi yapılar için ISO 19650 standartlarında 3D lazer tarama, Scan to BIM ve dijital ikiz çözümleri sunuyoruz.`;

  // Location-specific stats
  const stats = locationData?.stats ? [
    { value: `${locationData.stats.projects}+`, label: 'Tamamlanan Proje' },
    { value: locationData.stats.experience, label: 'Deneyim' },
    { value: '15+', label: 'Ülke' },
    { value: '±2mm', label: 'Hassasiyet' }
  ] : defaultStats;

  return (
    <>
      {/* Schema Markup */}
      <ServiceSchema
        name={`${location} Lazer Tarama ve BIM Modelleme Çözümleri`}
        description={locationDescription}
        url={`/lokasyon/${slug}`}
        image="/images/EosProje-Lazer-Tarama-Sistemleri.webp"
      />
      <LocalBusinessSchema isEn={false} />
      <BreadcrumbSchema items={breadcrumbs} />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(220,38,38,0.1),transparent_50%)]"></div>
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='https://static.vecteezy.com/system/resources/previews/027/239/475/non_2x/plus-symbol-grid-repeat-pattern-white-background-illustration-free-vector.jpg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }} />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="max-w-4xl">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
              <Link href="/" className="hover:text-white transition-colors">Ana Sayfa</Link>
              <span>/</span>
              <span className="text-red-400">{location}</span>
            </nav>

            {/* Location Badge */}
            <div className="inline-flex items-center gap-2 bg-red-600/20 text-red-400 px-4 py-2 rounded-full mb-6 backdrop-blur-sm border border-red-600/20">
              <MapPin className="w-4 h-4" />
              <span className="text-sm font-medium">{location} Hizmet Bölgesi</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              {location}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-400 mt-2">
                Lazer Tarama ve BIM Modelleme Çözümleri
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-gray-300 mb-4 font-light">
              Profesyonel 3D Tarama, BIM Modelleme ve Dijital Dokümantasyon Hizmetleri
            </p>

            {/* ŞEHRE ÖZEL AÇIKLAMA - Benzersiz İçerik */}
            <p className="text-lg text-gray-400 mb-8 max-w-2xl">
              {locationDescription}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Link
                href="/iletisim"
                className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-xl font-semibold transition-all shadow-lg hover:shadow-red-600/30 hover:scale-105"
              >
                <Phone className="w-5 h-5" />
                Teklif Al
              </Link>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-semibold transition-all shadow-lg hover:shadow-green-600/30 hover:scale-105"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp ile İletişim
              </a>
              <Link
                href="/referanslar"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-semibold transition-all border border-white/20 hover:border-white/40"
              >
                Projelerimizi İnceleyin
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Decorative Element */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* ŞEHRE ÖZEL İSTATİSTİKLER */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-red-600 mb-1">{stat.value}</div>
                <div className="text-gray-500 text-sm font-medium uppercase tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ŞEHRE ÖZEL SEKTÖRLER - Benzersiz İçerik */}
      {locationData?.industries && locationData.industries.tr.length > 0 && (
        <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="inline-block text-red-600 font-semibold text-sm uppercase tracking-wider mb-4">Uzmanlık Alanlarımız</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {location}&apos;da Hizmet Verdiğimiz Sektörler
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                {location} bölgesinde öne çıkan sektörlere özel lazer tarama ve BIM çözümleri sunuyoruz.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {locationData.industries.tr.map((industry, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:border-red-200 hover:shadow-md transition-all text-center group"
                >
                  <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:bg-red-100 transition-colors">
                    <Briefcase className="w-6 h-6 text-red-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 text-sm">{industry}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ŞEHRE ÖZEL REFERANS PROJELERİ - Benzersiz İçerik */}
      {locationData?.highlights && locationData.highlights.tr.length > 0 && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="inline-block text-red-600 font-semibold text-sm uppercase tracking-wider mb-4">Referans Projeler</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {location}&apos;da Tamamladığımız Önemli Projeler
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {locationData.highlights.tr.map((highlight, index) => (
                <div 
                  key={index} 
                  className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-100 hover:border-red-200 transition-all"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Star className="w-4 h-4 text-red-600" />
                    </div>
                    <p className="text-gray-700 font-medium">{highlight}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <Link
                href="/referanslar"
                className="inline-flex items-center gap-2 text-red-600 font-semibold hover:text-red-700 transition-colors"
              >
                Tüm Referanslarımızı İnceleyin
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block text-red-600 font-semibold text-sm uppercase tracking-wider mb-4">Hizmetlerimiz</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {location} İçin Sunduğumuz Çözümler
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Kapsamlı mühendislik çözümlerimiz ile projelerinizi dijital dönüşüme hazırlıyoruz.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Link
                key={index}
                href={service.link}
                className="group relative bg-gray-50 hover:bg-gradient-to-br hover:from-red-50 hover:to-white rounded-2xl p-8 transition-all hover:shadow-xl border border-gray-100 hover:border-red-100"
              >
                {service.badge && (
                  <span className="absolute top-4 right-4 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                    {service.badge}
                  </span>
                )}
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-red-600 transition-colors">
                    <service.icon className="w-8 h-8 text-red-600 group-hover:text-white transition-colors" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <span className="inline-flex items-center gap-2 text-red-600 font-semibold group-hover:gap-3 transition-all">
                      Detaylı Bilgi
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block text-red-400 font-semibold text-sm uppercase tracking-wider mb-4">Neden Biz?</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {location} Projeleriniz İçin EOS Proje
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Türkiye ve dünyada edindiğimiz deneyimle {location} projelerinizde de yanınızdayız.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reasons.map((reason, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-red-500/30 transition-all hover:bg-white/10">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-red-600/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <reason.icon className="w-6 h-6 text-red-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">{reason.title}</h3>
                    <p className="text-gray-400 text-sm">{reason.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Trust Badges */}
          <div className="mt-16 flex flex-wrap justify-center gap-8 pt-16 border-t border-white/10">
            <div className="flex items-center gap-3 bg-white/5 px-6 py-3 rounded-full">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span className="text-sm font-medium">ISO 19650 Sertifikalı</span>
            </div>
            <div className="flex items-center gap-3 bg-white/5 px-6 py-3 rounded-full">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span className="text-sm font-medium">Autodesk Certified</span>
            </div>
            <div className="flex items-center gap-3 bg-white/5 px-6 py-3 rounded-full">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span className="text-sm font-medium">Leica Gold Partner</span>
            </div>
          </div>
        </div>
      </section>

      {/* Sectors Section - Genel Sektörler */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block text-red-600 font-semibold text-sm uppercase tracking-wider mb-4">Çözümlerimiz</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Tüm Sektörlere Özel Çözümler
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {location} bölgesinde farklı sektörlere özel lazer tarama ve BIM çözümleri sunuyoruz.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {defaultSectors.map((sector, index) => (
              <Link
                key={index}
                href={sector.link}
                className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all border border-gray-100 hover:border-red-100"
              >
                <div className="w-14 h-14 bg-gray-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-red-600 transition-colors">
                  <sector.icon className="w-7 h-7 text-gray-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{sector.title}</h3>
                <p className="text-sm text-gray-600">{sector.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-red-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {location} Bölgesindeki Projeleriniz İçin Bizimle İletişime Geçin
          </h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Uzman ekibimiz {location} bölgesindeki projeniz için size en uygun çözümü sunmak üzere hazır.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-green-500 text-white px-8 py-4 rounded-xl font-semibold hover:bg-green-600 transition-all shadow-lg hover:shadow-green-500/30 hover:scale-105"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp ile Mesaj Gönderin
            </a>
            <a
              href={`tel:+${whatsappInfo.number}`}
              className="inline-flex items-center gap-3 bg-white text-red-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all shadow-lg"
            >
              <Phone className="w-5 h-5" />
              {whatsappInfo.formatted}
            </a>
            <a
              href="mailto:info@eosproje.com"
              className="inline-flex items-center gap-3 bg-red-800 text-white px-8 py-4 rounded-xl font-semibold hover:bg-red-900 transition-all"
            >
              <Mail className="w-5 h-5" />
              info@eosproje.com
            </a>
          </div>

          <Link
            href="/iletisim"
            className="inline-flex items-center gap-2 text-white underline underline-offset-4 hover:no-underline transition-all"
          >
            İletişim Formu ile Ulaşın
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
