import { Metadata } from "next";
import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "Hakkımızda | EOS Proje - Uzman Harita ve BIM Mühendisliği",
  description: "Uluslararası standartlarda lazer tarama ve BIM hizmetleri sunan uzman mühendislik kadromuzla tanışın. İstanbul ve Budapeşte ofisleri.",
  cluster: "scanToBim",
  funnel: "decision",
  lang: "tr",
  canonicalUrl: "https://eosproje.com/hakkimizda"
});

export default function HakkimizdaLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
