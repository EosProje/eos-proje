import type { Metadata } from 'next';
import EnHomeClient from './EnHomeClient';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
    title: "Point Cloud to BIM & 3D Modeling Services | EOSPROJE",
    description: "Turkey's leading Point Cloud to BIM center. We transform laser scanning data into precise Revit (LOD 200-400), Archicad, and CAD models with millimeter accuracy. Get a quote today.",
    alternates: {
        canonical: 'https://eosproje.com/en',
        languages: {
            "tr": "https://eosproje.com",
            "en": "https://eosproje.com/en",
        },
    },
    openGraph: {
        title: "Point Cloud to BIM & 3D Modeling Services | EOSPROJE",
        description: "Turkey's leading Point Cloud to BIM center. We transform laser scanning data into precise Revit (LOD 200-400), Archicad, and CAD models.",
        url: "https://eosproje.com/en",
        siteName: "Eos Proje",
        images: [{ url: "/images/og/ana-sayfa-og.webp", width: 1200, height: 630 }],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Point Cloud to BIM & 3D Modeling Services | EOSPROJE",
        description: "Turkey's leading Point Cloud to BIM center. We transform laser scanning data into precise Revit models.",
        images: ["/images/og/ana-sayfa-og.webp"],
    },
};

export default function HomeEn() {
    const websiteSchema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "EOS Proje",
        "url": "https://eosproje.com/en",
        "potentialAction": {
            "@type": "SearchAction",
            "target": "https://eosproje.com/en/search?q={search_term_string}",
            "query-input": "required name=search_term_string"
        }
    };

    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "name": "EOS Proje",
        "image": "https://eosproje.com/logo.png",
        "@id": "https://eosproje.com/en/#organization",
        "url": "https://eosproje.com/en",
        "telephone": "+905306642263",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Uskudar",
            "addressLocality": "Istanbul",
            "postalCode": "34000",
            "addressCountry": "TR"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 41.0122,
            "longitude": 29.0312
        },
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday"
            ],
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
        <>
            <JsonLd data={websiteSchema} />
            <JsonLd data={organizationSchema} />
            <EnHomeClient />
        </>
    );
}
