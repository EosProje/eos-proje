import FaqClient from "./FaqClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Sıkça Sorulan Sorular (SSS) - Lazer Tarama ve BIM | Eos Proje",
    description: "Point Cloud to BIM, lazer tarama, as-built modelleme ve dijital ikiz süreçleri hakkında sıkça sorulan soruların cevapları.",
    openGraph: {
        title: "Sıkça Sorulan Sorular (SSS) - Lazer Tarama ve BIM | Eos Proje",
        description: "Point Cloud to BIM, lazer tarama, as-built modelleme ve dijital ikiz süreçleri hakkında sıkça sorulan soruların cevapları.",
        url: "https://www.eosproje.com/sss",
        siteName: "Eos Proje",
        locale: "tr_TR",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Sıkça Sorulan Sorular (SSS) - Lazer Tarama ve BIM | Eos Proje",
        description: "Profesyonel lazer tarama ve BIM çözümleri hakkında merak edilenler.",
    },
    alternates: {
        canonical: "https://www.eosproje.com/sss",
    },
};

export default function SssPage() {
    return <FaqClient />;
}
