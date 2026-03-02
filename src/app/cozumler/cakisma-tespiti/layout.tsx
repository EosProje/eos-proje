import { Metadata } from "next";
import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "Çakışma Tespiti (Clash Detection) | BIM Koordinasyonu | EOS Proje",
  description: "Navisworks ve BIM 360 ile profesyonel çakışma analizi. MEP, mimari ve yapısal disiplinler arası koordinasyon ve çözüm raporları.",
  cluster: "scanToBim",
  funnel: "consideration",
  lang: "tr",
  canonicalUrl: "https://eosproje.com/cozumler/cakisma-tespiti"
});

export default function ClashDetectionLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
