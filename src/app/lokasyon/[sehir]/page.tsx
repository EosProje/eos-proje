import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getAllGeoTargets, getLocalizedKeywords, normalizeSlug, getLocationDataBySlug } from '@/lib/keywords';
import { SITE_URL } from '@/lib/constants';
import LocationClient from './LocationClient';

interface PageProps {
  params: Promise<{ sehir: string }>;
}

// Static generation için tüm şehirleri döndür
export async function generateStaticParams() {
  const allLocations = getAllGeoTargets('tr');
  
  return allLocations.map((location) => ({
    sehir: normalizeSlug(location)
  }));
}

// Slug'dan lokasyon adını bul
function findLocationBySlug(slug: string): string | null {
  const allLocations = getAllGeoTargets('tr');
  
  return allLocations.find(
    loc => normalizeSlug(loc) === normalizeSlug(slug)
  ) || null;
}

// Dynamic metadata - ŞEHRE ÖZEL BENZERSİZ META
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { sehir } = await params;
  const locationName = findLocationBySlug(sehir);
  
  if (!locationName) {
    return {
      title: 'Lokasyon Bulunamadı | EOS Proje',
      description: 'Aradığınız lokasyon bulunamadı.'
    };
  }
  
  // Get location-specific data for unique content
  const locationData = getLocationDataBySlug(sehir, 'tr');
  
  // Lokalize keywords al
  const keywords = getLocalizedKeywords(locationName, 'tr');
  
  // Add location-specific industries to keywords
  if (locationData?.industries?.tr) {
    keywords.push(...locationData.industries.tr);
  }
  
  const title = `${locationName} Lazer Tarama, BIM Modelleme ve Harita Hizmetleri | EOS Proje`;
  
  // ŞEHRE ÖZEL BENZERSİZ DESCRIPTION
  const description = locationData?.description?.tr || 
    `${locationName} için profesyonel 3D lazer tarama, BIM modelleme, Scan to BIM ve dijital ikiz hizmetleri. Endüstriyel tesisler, tarihi yapılar ve altyapı projeleri için uzman çözümler.`;
  
  // İngilizce eşdeğeri için slug dönüşümü
  const enSlug = locationData?.slug?.en || sehir;
  
  return {
    title,
    description,
    keywords: [...new Set(keywords)].slice(0, 20).join(', '),
    openGraph: {
      title,
      description,
      type: 'website',
      locale: 'tr_TR',
      url: `${SITE_URL}/lokasyon/${sehir}`,
      siteName: 'EOS Proje',
      images: [
        {
          url: `${SITE_URL}/images/EosProje-Lazer-Tarama-Sistemleri.webp`,
          width: 1200,
          height: 630,
          alt: `${locationName} Lazer Tarama ve BIM Hizmetleri`
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
    alternates: {
      canonical: `${SITE_URL}/lokasyon/${sehir}`,
      languages: {
        'tr': `${SITE_URL}/lokasyon/${sehir}`,
        'en': `${SITE_URL}/en/location/${enSlug}`,
      }
    },
  };
}

export default async function LocationPage({ params }: PageProps) {
  const { sehir } = await params;
  const locationName = findLocationBySlug(sehir);
  
  if (!locationName) {
    notFound();
  }
  
  // JSON-LD Schema for ProfessionalService
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: `EOS Proje - ${locationName} Lazer Tarama ve BIM`,
    image: 'https://www.eosproje.com/images/EosProje-Lazer-Tarama-Sistemleri.webp',
    description: `${locationName} bölgesinde endüstriyel lazer tarama, 3D modelleme ve rölöve hizmetleri.`,
    url: `https://www.eosproje.com/lokasyon/${sehir}`,
    telephone: '+905306642263',
    email: 'info@eosproje.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Istanbul',
      addressCountry: 'TR'
    },
    areaServed: {
      '@type': 'Place',
      name: locationName
    },
    serviceType: [
      'Lazer Tarama',
      'BIM Modelleme',
      'Scan to BIM',
      'Dijital İkiz',
      'Rölöve Hizmetleri'
    ],
    offers: {
      '@type': 'Offer',
      serviceType: 'Lazer Tarama ve BIM Modelleme',
      availability: 'https://schema.org/InStock'
    },
    priceRange: '$$'
  };
  
  return (
    <>
      {/* Google JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <LocationClient location={locationName} slug={sehir} />
    </>
  );
}
