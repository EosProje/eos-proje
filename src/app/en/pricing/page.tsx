import type { Metadata } from 'next';
import PricingClient from './PricingClient';

export const metadata: Metadata = {
    title: "BIM Modeling Pricing & Cost Calculator | EOS Proje",
    description: "Calculate your Point Cloud to BIM project costs. Transparent pricing for Revit modeling, laser scanning, and as-built documentation services.",
    alternates: {
        canonical: 'https://eosproje.com/en/pricing',
        languages: {
            "tr": "https://eosproje.com/ucretlendirme",
            "en": "https://eosproje.com/en/pricing",
        },
    },
};

export default function PricingPageEn() {
    return <PricingClient />;
}
