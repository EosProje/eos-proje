import type { Metadata } from "next";
import SurveyServicesClient from "./SurveyServicesClient";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Survey Services | Laser Scanning Survey | EOS PROJE",
  description: "Professional survey services with laser scanning technology. Facade survey, architectural survey, heritage building documentation and restoration surveys. ±2mm accuracy guaranteed.",
  keywords: [
    "survey services",
    "facade survey",
    "architectural survey",
    "heritage building survey",
    "restoration survey",
    "laser scanning survey",
    "3D survey",
    "building documentation",
    "conservation survey",
    "as-built survey"
  ],
  alternates: {
    canonical: `${SITE_URL}/en/services/survey-services`,
    languages: {
      "tr": `${SITE_URL}/hizmetler/rolove-hizmetleri`,
      "en": `${SITE_URL}/en/services/survey-services`
    }
  },
  openGraph: {
    title: "Survey Services | Professional Laser Scanning Survey | EOS PROJE",
    description: "Facade survey, architectural survey, heritage building documentation with laser scanning. ±2mm accuracy, conservation-grade outputs.",
    url: `${SITE_URL}/en/services/survey-services`,
    siteName: "Eos Proje",
    locale: "en_US",
    type: "website",
    images: [{
      url: `${SITE_URL}/images/infographics/lazer-tarama-rolove-sureci.webp`,
      width: 1200,
      height: 630,
      alt: "Survey Services with Laser Scanning"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Survey Services | Professional Laser Scanning Survey",
    description: "Facade survey, architectural survey, heritage building documentation. ±2mm accuracy guaranteed."
  }
};

export default function SurveyServicesPage() {
  return <SurveyServicesClient />;
}
