import { Metadata } from "next";
import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "2D CAD'den 3D BIM'e Dönüşüm Hizmeti | EOS Proje",
  description: "Düz DWG dosyalarınızı ISO 19650 standartlarında, çakışma analizi yapılabilen akıllı 3D BIM modellerine dönüştürüyoruz.",
  cluster: "scanToBim",
  funnel: "decision",
  lang: "tr",
  canonicalUrl: "https://eosproje.com/cozumler/2d-3d-bim-donusum"
});

export default function TwoDToThreeDBimLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
