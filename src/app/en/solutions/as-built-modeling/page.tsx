import type { Metadata } from 'next';
import AsBuiltClient from './AsBuiltClient';
import { SampleFilesDownload } from "@/components/SampleFilesDownload";

export const metadata: Metadata = {
    title: "As-Built Modeling Services | Precision 3D Documentation",
    description: "Get accurate digital twins of your existing structures. We provide professional as-built modeling services for renovation, restoration, and industrial expansion projects using 3D laser scanning.",
    alternates: {
        canonical: 'https://eosproje.com/en/solutions/as-built-modeling',
        languages: {
            "tr": "https://eosproje.com/cozumler/mevcut-durum-modelleme",
            "en": "https://eosproje.com/en/solutions/as-built-modeling",
        },
    },
};

export default function AsBuiltPageEn() {
    return <AsBuiltClient />;
}
