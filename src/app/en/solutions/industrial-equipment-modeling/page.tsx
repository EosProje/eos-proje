import type { Metadata } from 'next';
import IndustrialEquipClient from './IndustrialEquipClient';
import { SampleFilesDownload } from "@/components/SampleFilesDownload";

export const metadata: Metadata = {
    title: "Industrial Equipment & MEP Modeling | High-Detail Digital Assets",
    description: "Precise 3D modeling of complex machinery, pipelines, and MEP systems. We provide as-built documentation for industrial facilities, ensuring clash-free expansion and maintenance planning.",
    alternates: {
        canonical: 'https://eosproje.com/en/solutions/industrial-equipment-modeling',
        languages: {
            "tr": "https://eosproje.com/cozumler/endustriyel-ekipman-modelleme",
            "en": "https://eosproje.com/en/solutions/industrial-equipment-modeling",
        },
    },
};

export default function IndustrialEquipPageEn() {
    return <IndustrialEquipClient />;
}
