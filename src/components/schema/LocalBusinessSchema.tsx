"use client";

import { SITE_URL, CONTACT_EMAIL, CONTACT_PHONE } from "@/lib/constants";

interface LocalBusinessSchemaProps {
  isEn?: boolean;
}

export default function LocalBusinessSchema({ isEn = false }: LocalBusinessSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "EOS Proje",
    "alternateName": "EOSPROJE",
    "url": SITE_URL,
    "logo": `${SITE_URL}/images/logo-eosproje.webp`,
    "image": `${SITE_URL}/images/EosProje-Lazer-Tarama-Sistemleri.webp`,
    "description": isEn 
      ? "Point Cloud to BIM modeling, Laser Scanning, and Digital Twin engineering services. Serving AEC industry with millimeter precision."
      : "Point Cloud to BIM modelleme, Lazer Tarama ve Dijital İkiz mühendislik hizmetleri. AEC sektörüne milimetrik hassasiyette hizmet.",
    "telephone": CONTACT_PHONE,
    "email": CONTACT_EMAIL,
    "address": [
      {
        "@type": "PostalAddress",
        "streetAddress": "Üsküdar",
        "addressLocality": "Istanbul",
        "addressRegion": "Istanbul",
        "postalCode": "34660",
        "addressCountry": "TR"
      },
      {
        "@type": "PostalAddress",
        "streetAddress": "District VI",
        "addressLocality": "Budapest",
        "postalCode": "1063",
        "addressCountry": "HU"
      }
    ],
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 41.0082,
      "longitude": 29.0177
    },
    "areaServed": [
      { "@type": "Country", "name": "Turkey" },
      { "@type": "Country", "name": "Hungary" },
      { "@type": "Country", "name": "Germany" },
      { "@type": "Country", "name": "United Kingdom" }
    ],
    "serviceType": [
      "Point Cloud to BIM",
      "Laser Scanning",
      "3D BIM Modeling",
      "As-Built Documentation",
      "Digital Twin Creation",
      "Scan to BIM",
      "Industrial As-Built"
    ],
    "priceRange": "$$",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "18:00"
    },
    "sameAs": [
      "https://www.linkedin.com/company/eos-proje",
      "https://www.instagram.com/datageomatic",
      "https://www.youtube.com/@datageomatic1212"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
