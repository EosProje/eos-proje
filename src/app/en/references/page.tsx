import ReferencesClient from "./ReferencesClient";
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "References & Case Studies | EosProje - Scan-to-BIM Projects",
    description: "Migros, Turkcell, Linde, Toyota, BMW, Thyssenkrupp and more. EosProje's laser scanning and BIM modeling reference projects in Turkey and Europe.",
    alternates: {
        canonical: 'https://eosproje.com/en/references',
        languages: {
            "tr": "https://eosproje.com/referanslar",
            "en": "https://eosproje.com/en/references",
        },
    },
    openGraph: {
        title: "References & Case Studies | EosProje",
        description: "Migros, Turkcell, Linde, Toyota, BMW, Thyssenkrupp and more. Our laser scanning and BIM modeling reference projects.",
        url: "https://eosproje.com/en/references",
        images: [{ url: "/images/og/referanslar-og.webp", width: 1200, height: 630 }],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "References & Case Studies | EosProje",
        description: "Our laser scanning and BIM modeling reference projects.",
        images: ["/images/og/referanslar-og.webp"],
    },
};

export default function ReferencesListingPageEN() {
    return (
        <ReferencesClient />
    );
}
