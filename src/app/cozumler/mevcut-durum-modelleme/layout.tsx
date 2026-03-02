import { Metadata } from "next";
import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "Mevcut Durum (As-Built) Modelleme | EOS Proje",
  description: "Mevcut yapıların gerçek durumunu yansıtan As-Built BIM modelleri. Renovasyon ve tadilat projeleri için hassas belgeleme.",
  cluster: "scanToBim",
  funnel: "decision",
  lang: "tr",
  canonicalUrl: "https://eosproje.com/cozumler/mevcut-durum-modelleme"
});

export default function AsBuiltLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
