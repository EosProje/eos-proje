import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.eosproje.com"),
  title: {
    default: "EOSPROJE | Lazer Tarama, BIM Modelleme & Dijital İkiz",
    template: "%s | EOSPROJE"
  },
  description: "Lazer tarama (Point Cloud) verilerini yüksek hassasiyetli BIM modellerine, 2D rölöve çizimlerine ve 3D dijital ikizlere dönüştüren mühendislik firması.",
  keywords: ["Point Cloud to BIM", "Lazer Tarama", "Scan to BIM", "3D Modelleme", "Rölöve", "Restorasyon", "Endüstriyel Tesis", "Dijital İkiz", "Revit Modelleme", "As-Built"],
  authors: [{ name: "EOS Proje", url: "https://www.eosproje.com" }],
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
  verification: {
    google: "google-site-verification=BURAYA_GSC_KODUNUZU_GIRIN", // Google Search Console'dan aldığınız kodu buraya yapıştırın.
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://www.eosproje.com",
    title: "EOSPROJE | Point Cloud to BIM & Dijital İkiz",
    description: "Nokta bulutu verilerinden milimetrik hassasiyette 3D BIM modelleri ve rölöve projeleri üretiyoruz.",
    siteName: "EOS Proje",
    images: [
      {
        url: "/images/EosProje-point-cloud-to-bim-modelleme.webp",
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
    images: ["/images/EosProje-point-cloud-to-bim-modelleme.webp"],
  },
  alternates: {
    canonical: "/",
    languages: {
      'en-US': '/en',
      'tr-TR': '/',
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
    "url": "https://www.eosproje.com",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.eosproje.com/images/EosProje-Lazer-Tarama-Sistemleri.webp",
      "width": 800,
      "height": 600
    },
    "image": "https://www.eosproje.com/images/EosProje-point-cloud-to-bim-modelleme.webp",
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
      <body
        className={`${outfit.variable} font-sans antialiased`}
      >
        <JsonLd data={organizationSchema} />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
