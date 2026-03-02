import { Metadata } from "next";
import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "Endüstriyel Ekipman Modelleme | Piping & MEP | EOS Proje",
  description: "Fabrikalar, rafineriler ve enerji tesisleri için endüstriyel ekipman modelleme. Boru hattı, tank ve mekanik sistem BIM modelleri.",
  cluster: "industrialAndEnergy",
  funnel: "decision",
  lang: "tr",
  canonicalUrl: "https://eosproje.com/cozumler/endustriyel-ekipman-modelleme"
});

export default function IndustrialModelingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
