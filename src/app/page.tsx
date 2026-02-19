import type { Metadata } from 'next';
import HomeClient from '@/components/HomeClient';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: "Lazer Tarama & BIM Modelleme Hizmetleri | EOSPROJE",
  description: "Türkiye'nin lider Point Cloud to BIM merkezi. Lazer tarama verilerini milimetrik hassasiyetle Revit (LOD 200-400), Archicad ve CAD modellerine dönüştürüyoruz. Hemen teklif alın.",
  alternates: {
    canonical: 'https://www.eosproje.com',
    languages: {
      "tr": "https://www.eosproje.com",
      "en": "https://www.eosproje.com/en",
    },
  },
  openGraph: {
    title: "Point Cloud to BIM & 3D Modelleme Hizmetleri | EOSPROJE",
    description: "Türkiye'nin lider Point Cloud to BIM merkezi. Lazer tarama verilerini milimetrik hassasiyetle Revit (LOD 200-400), Archicad ve CAD modellerine dönüştürüyoruz.",
    url: "https://www.eosproje.com",
    siteName: "Eos Proje",
    images: [{ url: "/images/EosProje-point-cloud-to-bim-modelleme.webp", width: 1200, height: 630 }],
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Point Cloud to BIM & 3D Modelleme Hizmetleri | EOSPROJE",
    description: "Türkiye'nin lider Point Cloud to BIM merkezi. Lazer tarama verilerini milimetrik hassasiyetle Revit modellerine dönüştürüyoruz.",
    images: ["/images/EosProje-point-cloud-to-bim-modelleme.webp"],
  },
};

export default function Home() {
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "EOS Proje",
    "url": "https://www.eosproje.com"
  };

  return (
    <>
      <JsonLd data={websiteSchema} />
      <HomeClient />
    </>
  );
}
