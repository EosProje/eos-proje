import { Metadata } from "next";
import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "Nokta Bulutundan BIM Modele | Point Cloud to BIM | EOS Proje",
  description: "Lazer tarama verileri (nokta bulutu) üzerinden akıllı 3D BIM modelleri. Revit, AutoCAD ve diğer formatlarda çıktı.",
  cluster: "scanToBim",
  funnel: "decision",
  lang: "tr",
  canonicalUrl: "https://eosproje.com/cozumler/nokta-bulutu-bim"
});

export default function PointCloudBimLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
