import { Metadata } from "next";
import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "Industrial Equipment Modeling | Piping & MEP | EOS Proje",
  description: "Industrial equipment modeling for factories, refineries and power plants. Pipeline, tank and mechanical system BIM models.",
  cluster: "industrialAndEnergy",
  funnel: "decision",
  lang: "en",
  canonicalUrl: "https://eosproje.com/en/solutions/industrial-equipment-modeling"
});

export default function IndustrialModelingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
