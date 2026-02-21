import type { Metadata } from 'next';
import AsBuiltClient from './AsBuiltClient';

export const metadata: Metadata = {
    title: "As-Built Modeling Services | Precision 3D Documentation",
    description: "Get accurate digital twins of your existing structures. We provide professional as-built modeling services for renovation, restoration, and industrial expansion projects using 3D laser scanning.",
    alternates: {
        canonical: 'https://www.eosproje.com/en/solutions/as-built-modeling',
        languages: {
            "tr": "https://www.eosproje.com/cozumler/as-built-modeling",
            "en": "https://www.eosproje.com/en/solutions/as-built-modeling",
        },
    },
};

export default function AsBuiltPageEn() {
    return <AsBuiltClient />;
}
