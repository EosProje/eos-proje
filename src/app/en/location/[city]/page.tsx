import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getAllGeoTargets, getLocalizedKeywords } from '@/lib/keywords';
import { SITE_URL } from '@/lib/constants';
import LocationClientEn from './LocationClient';

interface PageProps {
  params: Promise<{ city: string }>;
}

// Static generation for all cities
export async function generateStaticParams() {
  const allLocations = getAllGeoTargets('en');
  
  return allLocations.map((location) => ({
    city: location
      .toLowerCase()
      .replace(/\s+/g, '-')
  }));
}

// Find location name from slug
function findLocationBySlug(slug: string): string | null {
  const allLocations = getAllGeoTargets('en');
  
  const normalizeSlug = (str: string) => str
    .toLowerCase()
    .replace(/\s+/g, '-');
  
  return allLocations.find(
    loc => normalizeSlug(loc) === slug.toLowerCase()
  ) || null;
}

// Dynamic metadata
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { city } = await params;
  const locationName = findLocationBySlug(city);
  
  if (!locationName) {
    return {
      title: 'Location Not Found | EOS Proje',
      description: 'The location you are looking for could not be found.'
    };
  }
  
  // Get localized keywords
  const keywords = getLocalizedKeywords(locationName, 'en');
  
  const title = `${locationName} Laser Scanning, BIM Modeling & Surveying Services | EOS Proje`;
  const description = `Professional 3D laser scanning, BIM modeling, Scan to BIM and digital twin services in ${locationName}. Expert solutions for industrial facilities, heritage buildings and infrastructure projects.`;
  
  // Turkish equivalent slug
  const trSlug = city;
  
  return {
    title,
    description,
    keywords: keywords.slice(0, 15).join(', '),
    openGraph: {
      title,
      description,
      type: 'website',
      locale: 'en_US',
      url: `${SITE_URL}/en/location/${city}`,
      siteName: 'EOS Proje',
      images: [
        {
          url: `${SITE_URL}/images/EosProje-Lazer-Tarama-Sistemleri.webp`,
          width: 1200,
          height: 630,
          alt: `${locationName} Laser Scanning and BIM Services`
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
    alternates: {
      canonical: `${SITE_URL}/en/location/${city}`,
      languages: {
        'en': `${SITE_URL}/en/location/${city}`,
        'tr': `${SITE_URL}/lokasyon/${trSlug}`,
      }
    },
  };
}

export default async function LocationPage({ params }: PageProps) {
  const { city } = await params;
  const locationName = findLocationBySlug(city);
  
  if (!locationName) {
    notFound();
  }
  
  // JSON-LD Schema for ProfessionalService
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: `EOS Proje - ${locationName} Laser Scanning and BIM`,
    image: 'https://www.eosproje.com/images/EosProje-Lazer-Tarama-Sistemleri.webp',
    description: `Industrial laser scanning, 3D modeling and surveying services in ${locationName}.`,
    url: `https://www.eosproje.com/en/location/${city}`,
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
      'Laser Scanning',
      'BIM Modeling',
      'Scan to BIM',
      'Digital Twin',
      'Survey Services'
    ],
    offers: {
      '@type': 'Offer',
      serviceType: 'Laser Scanning and BIM Modeling',
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
      
      <LocationClientEn location={locationName} slug={city} />
    </>
  );
}
