import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import GoogleTagManager from "@/components/GoogleTagManager";
import GoogleTagManagerNoscript from "@/components/GoogleTagManagerNoscript";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/constants";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.eosproje.com'),
  title: {
    template: '%s | EOS Proje',
    default: 'EOS Proje | Lazer Tarama ve BIM Modelleme Çözümleri',
  },
  description: "Lazer tarama, Scan to BIM, nokta bulutu modelleme, rölöve ve dijital ikiz hizmetleri. Cephe rölöve, mimari rölöve, eski eser rölöve, drone ile halihazır harita. İstanbul ve Budapeşte.",
  keywords: [
    // Ana hizmetler
    "Point Cloud to BIM", "Scan to BIM", "Lazer Tarama", "3D Lazer Tarama", "LiDAR Tarama",
    // Rölöve hizmetleri
    "Rölöve", "Cephe Rölöve", "Mimari Rölöve", "Eski Eser Rölöve", "Restorasyon Rölövesi",
    // Harita hizmetleri
    "Halihazır Harita", "Drone ile Halihazır Harita", "Harita Ölçme",
    // BIM ve modelleme
    "BIM Modelleme", "Revit Modelleme", "As-Built Modelleme", "Nokta Bulutu BIM Modeli",
    // Dijital ikiz ve HBIM
    "Dijital İkiz", "Digital Twin", "HBIM", "Heritage BIM", "Tarihi Yapı Modelleme",
    // Endüstriyel
    "Endüstriyel Tesis Modelleme", "MEP Modelleme", "Çakışma Tespiti", "Clash Detection",
    // Firma aramaları
    "Lazer Tarama Firmaları", "BIM Danışmanlık", "3D Tarama Hizmeti"
  ],
  authors: [{ name: "EOS Proje", url: SITE_URL }],
  creator: "EOS Proje",
  publisher: "EOS Proje",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  // Google Search Console doğrulama DNS ile yapıldı - meta tag gerekli değil
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: SITE_URL,
    title: "EOSPROJE | Point Cloud to BIM & Dijital İkiz",
    description: "Nokta bulutu verilerinden milimetrik hassasiyette 3D BIM modelleri ve rölöve projeleri üretiyoruz.",
    siteName: "EOS Proje",
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "EOS Proje - Point Cloud to BIM Lazer Tarama ve BIM Modelleme",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EOSPROJE | Lazer Tarama & BIM Modelleme",
    description: "Lazer tarama ve BIM modelleme çözümleri. İstanbul & Budapeşte.",
    images: [DEFAULT_OG_IMAGE],
  },
  alternates: {
    canonical: "/",
    languages: {
      'en': '/en',
      'tr': '/',
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "EOS Proje",
    "url": SITE_URL,
    "logo": {
      "@type": "ImageObject",
      "url": `${SITE_URL}/images/EosProje-Lazer-Tarama-Sistemleri.webp`,
      "width": 800,
      "height": 600
    },
    "image": `${SITE_URL}${DEFAULT_OG_IMAGE}`,
    "priceRange": "$$",
    "description": "Lazer tarama (Point Cloud), Scan to BIM ve dijital ikiz çözümleri sunan mühendislik firması. İstanbul ve Budapeşte ofisleri.",
    "sameAs": [
      "https://www.linkedin.com/company/eos-proje",
      "https://www.instagram.com/datageomatic?igsh=NjAxM2pxcGR4MDE4&utm_source=qr",
      "https://www.youtube.com/@datageomatic1212"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+90-530-664-22-63",
      "contactType": "customer service",
      "areaServed": ["TR", "HU", "EU"],
      "availableLanguage": ["Turkish", "English"]
    },
    "address": [
      {
        "@type": "PostalAddress",
        "addressLocality": "Istanbul",
        "addressCountry": "TR"
      },
      {
        "@type": "PostalAddress",
        "addressLocality": "Budapest",
        "addressCountry": "HU"
      }
    ]
  };

  return (
    <html lang="tr">
      <head>
        <GoogleTagManager />
      </head>
      <body
        className={`${outfit.variable} font-sans antialiased`}
      >
        <GoogleTagManagerNoscript />
        <JsonLd data={organizationSchema} />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
