import type { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
    title: "Hakkımızda | EosProje - Mühendislik ve Teknoloji",
    description: "Endüstriyel tesisler ve yapı sektörü için yüksek hassasiyetli BIM modelleme, lazer tarama ve dijital ikiz çözümleri sunan mühendislik firması.",
    alternates: {
        canonical: "https://www.eosproje.com/hakkimizda",
    },
    openGraph: {
        title: "Hakkımızda | EosProje - Mühendislik ve Teknoloji",
        description: "Endüstriyel tesisler ve yapı sektörü için yüksek hassasiyetli BIM modelleme ve as-built çözümleri.",
        url: "https://www.eosproje.com/hakkimizda",
        images: [{ url: "/images/og/hakkimizda-og.webp", width: 1200, height: 630 }],
        locale: "tr_TR",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Hakkımızda | EosProje - Mühendislik ve Teknoloji",
        description: "Lazer tarama ve BIM modelleme uzmanlığı.",
        images: ["/images/og/hakkimizda-og.webp"],
    },
};

export default function AboutPage() {
    return <AboutClient />;
}
