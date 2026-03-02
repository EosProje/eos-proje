import { Metadata } from "next";
import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "BIM Modelleme Hizmeti | Revit & ArchiCAD | EOS Proje",
  description: "LOD 100'den LOD 500'e kadar profesyonel BIM modelleme. Mimari, yapısal ve MEP disiplinlerinde Revit modelleme hizmetleri.",
  cluster: "scanToBim",
  funnel: "decision",
  lang: "tr",
  canonicalUrl: "https://eosproje.com/cozumler/bim-modelleme"
});

export default function BimModelLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
