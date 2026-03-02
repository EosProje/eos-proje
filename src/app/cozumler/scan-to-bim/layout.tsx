import { Metadata } from "next";
import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "Scan to BIM Hizmeti | Lazer Taramadan BIM Modele | EOS Proje",
  description: "Nokta bulutu verilerinden ISO 19650 standartlarında BIM modelleri. Mevcut yapıların dijitalleştirilmesi için profesyonel Scan to BIM çözümleri.",
  cluster: "scanToBim",
  funnel: "decision",
  lang: "tr",
  canonicalUrl: "https://eosproje.com/cozumler/scan-to-bim"
});

export default function ScanToBimLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
