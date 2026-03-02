import { Metadata } from "next";
import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "Digital Twin Solutions | Real-Time Monitoring | EOS Proje",
  description: "Create digital copies of your real-world assets. Digital twin technology with IoT integration and real-time monitoring capabilities.",
  cluster: "industrialAndEnergy",
  funnel: "decision",
  lang: "en",
  canonicalUrl: "https://eosproje.com/en/solutions/digital-twin"
});

export default function DigitalTwinLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
