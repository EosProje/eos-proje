import { Metadata } from "next";
import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "Dijital İkiz (Digital Twin) Çözümleri | EOS Proje",
  description: "Gerçek dünya varlıklarınızın dijital kopyalarını oluşturun. IoT entegrasyonu ve gerçek zamanlı izleme ile dijital ikiz teknolojisi.",
  cluster: "industrialAndEnergy",
  funnel: "decision",
  lang: "tr",
  canonicalUrl: "https://eosproje.com/cozumler/dijital-ikiz"
});

export default function DijitalIkizLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
