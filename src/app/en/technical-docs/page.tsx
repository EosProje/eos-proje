import type { Metadata } from 'next';
import DocsClient from './DocsClient';

export const metadata: Metadata = {
    title: "BIM Project Sample Files & Technical Documents",
    description: "Download sample Point Cloud to BIM projects, Revit models, IFC files, and technical specifications for industrial and architectural modeling.",
    alternates: {
        canonical: 'https://eosproje.com/en/technical-docs',
        languages: {
            "tr": "https://eosproje.com/teknik-dokumanlar",
            "en": "https://eosproje.com/en/technical-docs",
        },
    },
};

export default function DocsPageEn() {
    return <DocsClient />;
}
