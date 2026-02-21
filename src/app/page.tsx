import type { Metadata } from 'next';
import HomeClient from '@/components/HomeClient';
import JsonLd from '@/components/JsonLd';
import { SITE_URL, DEFAULT_OG_IMAGE } from '@/lib/constants';

export const metadata: Metadata = {
  title: "Lazer Tarama & BIM Modelleme Hizmetleri | EOSPROJE",
  description: "Türkiye'nin lider Point Cloud to BIM merkezi. Lazer tarama verilerini milimetrik hassasiyetle Revit (LOD 200-400), Archicad ve CAD modellerine dönüştürüyoruz. Hemen teklif alın.",
  alternates: {
    canonical: SITE_URL,
    languages: {
      "tr": SITE_URL,
      "en": `${SITE_URL}/en`,
    },
  },
  openGraph: {
    title: "Point Cloud to BIM & 3D Modelleme Hizmetleri | EOSPROJE",
    description: "Türkiye'nin lider Point Cloud to BIM merkezi. Lazer tarama verilerini milimetrik hassasiyetle Revit (LOD 200-400), Archicad ve CAD modellerine dönüştürüyoruz.",
    url: SITE_URL,
    siteName: "Eos Proje",
    images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630 }],
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Point Cloud to BIM & 3D Modelleme Hizmetleri | EOSPROJE",
    description: "Türkiye'nin lider Point Cloud to BIM merkezi. Lazer tarama verilerini milimetrik hassasiyetle Revit modellerine dönüştürüyoruz.",
    images: [DEFAULT_OG_IMAGE],
  },
};

export default function Home() {
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "EOS Proje",
    "url": SITE_URL
  };

  return (
    <>
      <JsonLd data={websiteSchema} />
      <HomeClient />
    </>
  );
}
