import type { Metadata } from 'next';
import CADtoBIMClient from './CADtoBIMClient';
import { SampleFilesDownload } from "@/components/SampleFilesDownload";

export const metadata: Metadata = {
    title: "2D CAD to 3D BIM Conversion Services | Smart Parametric Modeling",
    description: "Transform your flat .DWG and PDF drawings into intelligent, information-rich BIM models. We provide professional CAD to Revit conversion services compliant with ISO 19650 standards.",
    alternates: {
        canonical: 'https://eosproje.com/en/solutions/2d-to-3d-bim-conversion',
        languages: {
            "tr": "https://eosproje.com/cozumler/2d-3d-bim-donusum",
            "en": "https://eosproje.com/en/solutions/2d-to-3d-bim-conversion",
        },
    },
};

export default function CADtoBimPageEn() {
    return <CADtoBIMClient />;
}
