import type { Metadata } from 'next';
import FaqClient from './FaqClient';

export const metadata: Metadata = {
    title: "Frequently Asked Questions (FAQ) | Point Cloud & BIM Support",
    description: "Find answers to your questions about Point Cloud to BIM timeline, LOD levels, accuracy guarantees, and delivery formats.",
    alternates: {
        canonical: 'https://eosproje.com/en/faq',
        languages: {
            "tr": "https://eosproje.com/sss",
            "en": "https://eosproje.com/en/faq",
        },
    },
    openGraph: {
        title: "Frequently Asked Questions (FAQ) | Point Cloud & BIM Support",
        description: "Answers to your questions about Point Cloud to BIM, laser scanning, and as-built modeling processes.",
        url: "https://eosproje.com/en/faq",
        images: [{ url: "/images/og/faq-og.webp", width: 1200, height: 630 }],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Frequently Asked Questions (FAQ) | Eos Proje",
        description: "Answers to your questions about professional laser scanning and BIM solutions.",
    },
};

export default function SSSPageEn() {
    return <FaqClient />;
}
