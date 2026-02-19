import type { Metadata } from "next";
import SolutionsClient from "./SolutionsClient";

export const metadata: Metadata = {
    title: "Mühendislik Çözümleri & BIM Hizmetleri | EosProje",
    description: "Point Cloud to BIM, As-built Modelleme, Scan-to-CAD ve Dijital İkiz çözümlerimiz. Endüstriyel tesisler ve mimari projeler için hassas rölöve ve modelleme hizmetleri.",
    alternates: {
        canonical: "https://www.eosproje.com/cozumler",
    },
    openGraph: {
        title: "Mühendislik Çözümleri & BIM Hizmetleri | EosProje",
        description: "Point Cloud to BIM, As-built Modelleme, Scan-to-CAD ve Dijital İkiz çözümlerimiz.",
        url: "https://www.eosproje.com/cozumler",
        images: [{ url: "/images/og/cozumler-og.webp", width: 1200, height: 630 }],
        locale: "tr_TR",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Mühendislik Çözümleri & BIM Hizmetleri | EosProje",
        description: "Point Cloud to BIM ve Dijital İkiz çözümleri.",
        images: ["/images/og/cozumler-og.webp"],
    },
};

export default function SolutionsPage() {
    return <SolutionsClient />;
}
