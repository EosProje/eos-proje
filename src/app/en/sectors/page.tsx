import SectorListClient from "./SectorListClient";
import { getAllMDXMetadata } from "@/lib/mdx";
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Sectors We Serve | Industrial, Architecture & Construction",
    description: "Specialized Point Cloud to BIM solutions for industrial plants, historical restoration, architectural surveys, and complex construction projects.",
    alternates: {
        canonical: 'https://www.eosproje.com/en/sectors',
        languages: {
            "tr": "https://www.eosproje.com/sektorler",
            "en": "https://www.eosproje.com/en/sectors",
        },
    },
};

export default async function SectorPage() {
    // This runs ONLY on the server
    const metadata = getAllMDXMetadata("case-studies", "en");

    return (
        <SectorListClient relatedProjectsMetadata={metadata} />
    );
}
