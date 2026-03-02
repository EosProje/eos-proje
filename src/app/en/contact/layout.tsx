import { Metadata } from "next";
import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "Contact Us & Get Quote | EOS Proje",
  description: "Contact EOS Proje for your laser scanning and 3D modeling projects. Get a quote today. Istanbul and Budapest.",
  cluster: "scanToBim",
  funnel: "action",
  lang: "en",
  canonicalUrl: "https://eosproje.com/en/contact"
});

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
