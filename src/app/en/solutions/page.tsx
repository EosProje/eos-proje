import type { Metadata } from 'next';
import EnSolutionsClient from './EnSolutionsClient';

export const metadata: Metadata = {
    title: "BIM & 3D Modeling Solutions | Point Cloud to BIM Services",
    description: "End-to-end BIM and reality capture solutions. We offer high-detail as-built modeling, scan-to-MEP, and 2D to 3D BIM conversion services with millimeter precision.",
    alternates: {
        canonical: 'https://www.eosproje.com/en/solutions',
        languages: {
            "tr": "https://www.eosproje.com/cozumler",
            "en": "https://www.eosproje.com/en/solutions",
        },
    },
};

export default function SolutionsPageEn() {
    return <EnSolutionsClient />;
}
