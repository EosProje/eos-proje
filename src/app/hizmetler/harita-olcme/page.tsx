import type { Metadata } from "next";
import HaritaOlcmeClient from "./HaritaOlcmeClient";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Harita Ölçme & Halihazır Harita | Drone ve Lazer Tarama | EOSPROJE",
  description: "Drone ile halihazır harita ve lazer tarama ile harita ölçme hizmetleri. Arazi ölçümü, kadastral harita, topografik harita ve altyapı haritalama. ±2cm hassasiyet.",
  keywords: [
    "halihazır harita",
    "harita ölçme",
    "drone ile halihazır harita",
    "lazer tarama harita",
    "topografik harita",
    "kadastral harita",
    "arazi ölçümü",
    "CBS veri üretimi",
    "altyapı haritalama",
    "sayısal harita"
  ],
  alternates: {
    canonical: `${SITE_URL}/hizmetler/harita-olcme`,
    languages: {
      "tr": `${SITE_URL}/hizmetler/harita-olcme`,
      "en": `${SITE_URL}/en/services/mapping-surveying`
    }
  },
  openGraph: {
    title: "Harita Ölçme & Halihazır Harita | Drone ve Lazer Tarama | EOSPROJE",
    description: "Drone ile halihazır harita ve lazer tarama ile harita ölçme hizmetleri. Arazi ölçümü, kadastral harita, topografik harita.",
    url: `${SITE_URL}/hizmetler/harita-olcme`,
    siteName: "Eos Proje",
    locale: "tr_TR",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Harita Ölçme & Halihazır Harita | Drone ve Lazer Tarama",
    description: "Drone ile halihazır harita ve lazer tarama ile harita ölçme. ±2cm hassasiyet."
  }
};

export default function HaritaOlcmePage() {
  return <HaritaOlcmeClient />;
}
