import { Metadata } from "next";
import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "As-Built Modeling Services | Existing Conditions | EOS Proje",
  description: "As-Built BIM models reflecting the actual state of existing structures. Accurate documentation for renovation and retrofit projects.",
  cluster: "scanToBim",
  funnel: "decision",
  lang: "en",
  canonicalUrl: "https://eosproje.com/en/solutions/as-built-modeling"
});

export default function AsBuiltLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
