import type { Metadata } from "next";
import ReferanslarClient from "./ReferanslarClient";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Referanslar & Vaka Analizleri | EosProje - Scan-to-BIM Projeleri",
  description:
    "Migros, Turkcell, Linde, Toyota, BMW, Thyssenkrupp ve daha fazlası. EosProje'nin Türkiye ve Avrupa'daki lazer tarama ve BIM modelleme referans projeleri.",
  alternates: {
    canonical: `${SITE_URL}/referanslar`,
  },
  openGraph: {
    title: "Referanslar & Vaka Analizleri | EosProje",
    description: "Migros, Turkcell, Linde, Toyota, BMW, Thyssenkrupp ve daha fazlası. EosProje'nin Türkiye ve Avrupa'daki lazer tarama ve BIM modelleme referans projeleri.",
    url: `${SITE_URL}/referanslar`,
    images: [{ url: "/images/og/referanslar-og.webp", width: 1200, height: 630 }],
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Referanslar & Vaka Analizleri | EosProje",
    description: "Lazer tarama ve BIM modelleme referans projelerimiz.",
    images: ["/images/og/referanslar-og.webp"],
  },
};

export default function ReferanslarPage() {
  return <ReferanslarClient />;
}
