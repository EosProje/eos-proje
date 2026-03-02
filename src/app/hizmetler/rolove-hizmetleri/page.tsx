import type { Metadata } from "next";
import RoloveClient from "./RoloveClient";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Rölöve Hizmetleri | Lazer Tarama ile Mimari Rölöve | EOSPROJE",
  description: "Lazer tarama teknolojisi ile cephe rölöve, mimari rölöve, eski eser rölöve ve restorasyon rölövesi hizmetleri. ±2mm hassasiyet garantisi. Koruma kuruluna uygun çıktılar.",
  keywords: [
    "rölöve",
    "cephe rölöve",
    "mimari rölöve",
    "eski eser rölöve",
    "restorasyon rölövesi",
    "lazer tarama rölöve",
    "3D rölöve",
    "tarihi yapı belgeleme",
    "koruma kurulu rölöve",
    "rölöve çizimi"
  ],
  alternates: {
    canonical: `${SITE_URL}/hizmetler/rolove-hizmetleri`,
    languages: {
      "tr": `${SITE_URL}/hizmetler/rolove-hizmetleri`,
      "en": `${SITE_URL}/en/services/survey-services`
    }
  },
  openGraph: {
    title: "Rölöve Hizmetleri | Lazer Tarama ile Profesyonel Rölöve | EOSPROJE",
    description: "Lazer tarama teknolojisi ile cephe rölöve, mimari rölöve, eski eser rölöve ve restorasyon rölövesi. ±2mm hassasiyet, koruma kuruluna uygun çıktılar.",
    url: `${SITE_URL}/hizmetler/rolove-hizmetleri`,
    siteName: "Eos Proje",
    locale: "tr_TR",
    type: "website",
    images: [{
      url: `${SITE_URL}/images/infographics/lazer-tarama-rolove-sureci.webp`,
      width: 1200,
      height: 630,
      alt: "Lazer Tarama ile Rölöve Hizmetleri"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Rölöve Hizmetleri | Lazer Tarama ile Profesyonel Rölöve",
    description: "Cephe rölöve, mimari rölöve, eski eser rölöve ve restorasyon rölövesi. ±2mm hassasiyet garantisi."
  }
};

export default function RolovePage() {
  return <RoloveClient />;
}
