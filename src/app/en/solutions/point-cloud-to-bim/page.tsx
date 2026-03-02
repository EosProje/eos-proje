import type { Metadata } from 'next';
import PointToBimClient from './PointToBimClient';
import { SampleFilesDownload } from "@/components/SampleFilesDownload";

export const metadata: Metadata = {
    title: "Point Cloud to BIM Services | Millimetric Precision Digital Twins",
    description: "Transform your laser scan data into intelligent, parametric BIM models. We provide high-precision Revit, ArchiCAD, and IFC modeling services for industrial and architectural projects.",
    alternates: {
        canonical: 'https://eosproje.com/en/solutions/point-cloud-to-bim',
        languages: {
            "tr": "https://eosproje.com/cozumler/nokta-bulutu-bim",
            "en": "https://eosproje.com/en/solutions/point-cloud-to-bim",
        },
    },
};

export default function PointToBimPageEn() {
    return <PointToBimClient />;
}
