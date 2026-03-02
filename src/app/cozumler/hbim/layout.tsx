import { Metadata } from "next";
import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "HBIM - Tarihi Yapı Bilgi Modellemesi | EOS Proje",
  description: "Kültürel miras yapılarının korunması için Heritage BIM (HBIM) çözümleri. Tarihi eser rölövesi, restorasyon ve belgeleme projeleri.",
  cluster: "heritageAndArchitecture",
  funnel: "decision",
  lang: "tr",
  canonicalUrl: "https://eosproje.com/cozumler/hbim"
});

export default function HbimLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
