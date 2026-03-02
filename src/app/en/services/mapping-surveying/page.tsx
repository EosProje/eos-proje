import type { Metadata } from "next";
import MappingSurveyingClient from "./MappingSurveyingClient";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Mapping & Surveying | Drone Mapping & Laser Scanning | EOS PROJE",
  description: "Professional mapping and surveying services with drone photogrammetry and laser scanning. Topographic maps, cadastral maps, and infrastructure mapping. ±2cm accuracy.",
  keywords: [
    "mapping services",
    "surveying",
    "drone mapping",
    "laser scanning survey",
    "topographic map",
    "cadastral map",
    "land surveying",
    "GIS data production",
    "infrastructure mapping",
    "digital mapping"
  ],
  alternates: {
    canonical: `${SITE_URL}/en/services/mapping-surveying`,
    languages: {
      "tr": `${SITE_URL}/hizmetler/harita-olcme`,
      "en": `${SITE_URL}/en/services/mapping-surveying`
    }
  },
  openGraph: {
    title: "Mapping & Surveying | Drone Mapping & Laser Scanning | EOS PROJE",
    description: "Drone photogrammetry and laser scanning for professional mapping. Topographic maps, cadastral maps, infrastructure mapping.",
    url: `${SITE_URL}/en/services/mapping-surveying`,
    siteName: "Eos Proje",
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Mapping & Surveying | Drone Mapping & Laser Scanning",
    description: "Drone photogrammetry and laser scanning mapping services. ±2cm accuracy."
  }
};

export default function MappingSurveyingPage() {
  return <MappingSurveyingClient />;
}
