import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, AlertTriangle, Search, FileWarning, Shield, TrendingDown, Clock, ChevronDown, Target, Layers } from "lucide-react";
import SubPageHero from "@/components/SubPageHero";
import { ServiceSchema } from "@/components/schema/ServiceSchema";
import { FAQPageSchema } from "@/components/schema/FAQPageSchema";
import { SITE_URL } from "@/lib/constants";
import { SampleFilesDownload } from "@/components/SampleFilesDownload";

export const metadata: Metadata = {
  title: "Çakışma Tespiti (Clash Detection) | BIM Koordinasyon | EOS Proje",
  description: "BIM Clash Detection hizmeti ile disiplinler arası çakışmaları tasarım aşamasında tespit edin. Navisworks ile %30'a varan maliyet tasarrufu. Hard, Soft ve Workflow clash analizi.",
  keywords: ["clash detection", "çakışma tespiti", "bim koordinasyon", "navisworks", "mep çakışma", "bim clash analiz"],
  alternates: {
    canonical: `${SITE_URL}/cozumler/cakisma-tespiti`,
    languages: {
      "tr": `${SITE_URL}/cozumler/cakisma-tespiti`,
      "en": `${SITE_URL}/en/solutions/clash-detection`,
    },
  },
  openGraph: {
    title: "Çakışma Tespiti (Clash Detection) | EOS Proje",
    description: "BIM ile tasarım aşamasında çakışma tespiti ve maliyet tasarrufu.",
    url: `${SITE_URL}/cozumler/cakisma-tespiti`,
    type: "website",
    images: ["/images/EosProje-point-cloud-to-bim-modelleme.webp"],
  },
};

const faqs = [
  {
    question: "Clash Detection (Çakışma Tespiti) nedir?",
    answer: "Clash Detection, BIM modellerinde farklı disiplinlerin (mimari, statik, MEP) elemanları arasındaki fiziksel ve mantıksal çakışmaların tespit edilmesidir. Bu süreç, şantiyede ortaya çıkacak problemlerin tasarım aşamasında çözülmesini sağlar."
  },
  {
    question: "Hangi tür çakışmalar tespit edilir?",
    answer: "Hard Clash (fiziksel kesişim), Soft Clash (mesafe/boşluk ihlali) ve Workflow Clash (mantıksal sıralama hatası) olmak üzere üç tür çakışma tespit edilir."
  },
  {
    question: "Clash Detection ile ne kadar tasarruf sağlanır?",
    answer: "Araştırmalara göre, Clash Detection ile şantiye revizyonlarında %30-50 azalma, proje süresinde %10-15 kısalma ve genel maliyette %5-10 tasarruf sağlanabilir."
  },
  {
    question: "Hangi yazılımları kullanıyorsunuz?",
    answer: "Ana yazılımımız Autodesk Navisworks'tür. Bunun yanı sıra BIM Track, Solibri ve BIMcollab gibi issue tracking platformları da kullanıyoruz."
  },
  {
    question: "Clash raporu nasıl teslim ediliyor?",
    answer: "Detaylı HTML/PDF raporları, BCF formatında issue dosyaları ve BIM Track gibi platformlarda canlı koordinasyon imkanı sunuyoruz. Raporlar öncelik sıralaması ve çözüm önerileri içerir."
  },
  {
    question: "Sadece Revit modelleri için mi hizmet veriyorsunuz?",
    answer: "Hayır. IFC formatı sayesinde ArchiCAD, Tekla, Allplan gibi farklı yazılımlardan gelen modelleri de koordine edebiliyoruz."
  }
];

const clashTypes = [
  {
    type: "Hard Clash",
    title: "Fiziksel Çakışma",
    description: "İki elemanın fiziksel olarak aynı alanı işgal etmesi",
    example: "Boru hattının kiriş içinden geçmesi",
    color: "bg-red-100 text-red-700 border-red-200"
  },
  {
    type: "Soft Clash",
    title: "Mesafe/Boşluk İhlali",
    description: "Gerekli servis mesafelerinin sağlanamaması",
    example: "Bakım için yeterli boşluk olmaması",
    color: "bg-yellow-100 text-yellow-700 border-yellow-200"
  },
  {
    type: "Workflow Clash",
    title: "Mantıksal Çakışma",
    description: "İş sıralama ve koordinasyon hataları",
    example: "Alçıpan öncesi tesisat kontrolü yapılmaması",
    color: "bg-blue-100 text-blue-700 border-blue-200"
  }
];

const benefits = [
  {
    icon: <TrendingDown className="w-6 h-6" />,
    title: "%30-50 Revizyon Azalması",
    description: "Şantiyede yapılan değişikliklerde dramatik düşüş"
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "%10-15 Süre Tasarrufu",
    description: "Proje teslim süresinde önemli kısalma"
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "%5-10 Maliyet Tasarrufu",
    description: "Toplam proje maliyetinde azalma"
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: "Sıfır Sürpriz",
    description: "Şantiyede beklenmedik problemlerin önlenmesi"
  }
];

export default function CakismaTespitiPage() {
  return (
    <>
      <ServiceSchema
        name="Çakışma Tespiti (Clash Detection)"
        description="BIM modellerinde disiplinler arası çakışmaların Navisworks ile tespit edilmesi ve koordinasyon hizmeti."
        url="/cozumler/cakisma-tespiti"
        image="/images/EosProje-point-cloud-to-bim-modelleme.webp"
      />
      <FAQPageSchema faqs={faqs} />
      
      <div className="min-h-screen bg-white">
        <SubPageHero
          category="Mühendislik Çözümleri"
          title="Çakışma Tespiti"
          description="BIM Clash Detection ile disiplinler arası çakışmaları tasarım aşamasında tespit edin. Şantiye revizyonlarını önleyin, maliyetleri düşürün."
          breadcrumb={[
            { label: "Çözümler", href: "/cozumler" },
            { label: "Çakışma Tespiti", href: "/cozumler/cakisma-tespiti" }
          ]}
        />

        {/* TL;DR Section */}
        <section className="py-12 px-4 bg-slate-50 border-b border-slate-200">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
              <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                <span className="text-red-600">TL;DR</span> — Özet
              </h2>
              <p className="text-slate-600 leading-relaxed">
                <strong>Clash Detection</strong>, BIM modellerinde farklı disiplinlerin çakışmalarını tasarım aşamasında tespit eder. 
                EOS Proje olarak Navisworks ile Hard, Soft ve Workflow çakışmaları analiz ediyoruz. 
                Şantiye revizyonlarında %30-50 azalma, proje süresinde %10-15 kısalma sağlıyoruz. 
                BCF formatında raporlar ve canlı koordinasyon platformları sunuyoruz.
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="text-red-600 font-bold text-sm uppercase tracking-wider">BIM Koordinasyon</span>
                <h2 className="text-4xl font-bold text-slate-900 mt-4 mb-6">Şantiye Sürprizlerini Ofiste Çözün</h2>
                <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                  Geleneksel 2D koordinasyonda tespit edilemeyen çakışmalar, şantiyede maliyetli revizyonlara neden olur. 
                  <strong> BIM Clash Detection</strong> ile bu problemleri tasarım aşamasında çözerek zaman ve bütçe tasarrufu sağlayın.
                </p>
                <div className="bg-slate-50 p-6 rounded-xl mb-6">
                  <div className="text-sm text-slate-500 mb-2">Araştırma Verisi</div>
                  <div className="text-2xl font-bold text-slate-900">"Şantiyede çözülen bir problem, tasarımda çözülene göre <span className="text-red-600">10 kat</span> daha maliyetlidir."</div>
                  <div className="text-sm text-slate-500 mt-2">— McGraw Hill Construction</div>
                </div>
                <ul className="space-y-3">
                  {[
                    "Hard, Soft ve Workflow clash analizi",
                    "Öncelik sıralamalı raporlama",
                    "BCF formatında issue takibi",
                    "Canlı koordinasyon platformları"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative">
                <Image
                  src="/images/infographics/eosproje-clash-detection-analizi.png"
                  alt="Clash Detection Analizi"
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Clash Types */}
        <section className="py-20 px-4 bg-slate-900">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Çakışma Türleri</h2>
              <p className="text-slate-400 max-w-2xl mx-auto">
                Üç farklı çakışma türünü tespit edip raporluyoruz.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {clashTypes.map((clash, idx) => (
                <div key={idx} className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
                  <div className={`inline-block px-4 py-2 rounded-lg text-sm font-bold mb-4 ${clash.color}`}>
                    {clash.type}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{clash.title}</h3>
                  <p className="text-slate-400 mb-4">{clash.description}</p>
                  <div className="pt-4 border-t border-slate-700">
                    <div className="text-xs text-slate-500 mb-1">Örnek:</div>
                    <div className="text-sm text-slate-300">{clash.example}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Tasarruf ve Faydalar</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Clash Detection ile elde edilen somut kazanımlar
              </p>
            </div>
            <div className="grid md:grid-cols-4 gap-6">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="bg-slate-50 rounded-2xl p-6 text-center">
                  <div className="w-14 h-14 bg-red-100 rounded-xl flex items-center justify-center mx-auto mb-4 text-red-600">
                    {benefit.icon}
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">{benefit.title}</h3>
                  <p className="text-slate-600 text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-20 px-4 bg-slate-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Clash Detection Süreci</h2>
            </div>
            <div className="grid md:grid-cols-5 gap-4">
              {[
                { step: 1, title: "Model Toplama", desc: "Tüm disiplin modellerinin birleştirilmesi" },
                { step: 2, title: "Kural Tanımlama", desc: "Clash testleri ve toleransların belirlenmesi" },
                { step: 3, title: "Otomatik Analiz", desc: "Navisworks ile çakışma tespiti" },
                { step: 4, title: "Filtreleme", desc: "Kritik çakışmaların önceliklendirilmesi" },
                { step: 5, title: "Raporlama", desc: "BCF ve PDF formatında teslimat" }
              ].map((item) => (
                <div key={item.step} className="bg-white rounded-2xl p-6 text-center shadow-sm">
                  <div className="w-10 h-10 bg-red-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                    {item.step}
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-slate-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tools */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Kullandığımız Araçlar</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-slate-50 rounded-xl p-6">
                <h3 className="font-bold text-slate-900 mb-4">Clash Detection</h3>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-center gap-2"><Search className="w-4 h-4 text-red-600" /> Autodesk Navisworks</li>
                  <li className="flex items-center gap-2"><Search className="w-4 h-4 text-red-600" /> Solibri Model Checker</li>
                </ul>
              </div>
              <div className="bg-slate-50 rounded-xl p-6">
                <h3 className="font-bold text-slate-900 mb-4">Issue Tracking</h3>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-center gap-2"><FileWarning className="w-4 h-4 text-red-600" /> BIM Track</li>
                  <li className="flex items-center gap-2"><FileWarning className="w-4 h-4 text-red-600" /> BIMcollab</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-4 bg-slate-50">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Sıkça Sorulan Sorular</h2>
              <p className="text-slate-600">Çakışma Tespiti hakkında merak edilenler</p>
            </div>
            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <details key={idx} className="group bg-white rounded-xl border border-slate-200 overflow-hidden">
                  <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                    <span className="font-semibold text-slate-900 pr-4">{faq.question}</span>
                    <ChevronDown className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" />
                  </summary>
                  <div className="px-6 pb-6 text-slate-600">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Sample Files Download */}
        <SampleFilesDownload />

        {/* CTA Section */}
        <section className="py-20 px-4 bg-slate-900">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Projenizi Koordine Edelim</h2>
            <p className="text-slate-400 mb-8 text-lg">
              BIM modellerinizin clash analizini yapalım, şantiye sürprizlerini önleyelim.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/iletisim" className="px-8 py-4 bg-red-600 text-white font-bold rounded-xl hover:bg-red-700 transition-colors flex items-center justify-center gap-2">
                Analiz Talebi <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/blog/cakisma-analizi-maliyet" className="px-8 py-4 bg-white text-slate-900 font-bold rounded-xl hover:bg-slate-100 transition-colors">
                Blog Yazısını Okuyun
              </Link>
            </div>
          </div>
        </section>

        {/* Related Solutions */}
        <section className="py-16 px-4 bg-white border-t border-slate-100">
          <div className="max-w-7xl mx-auto">
            <h3 className="text-xl font-bold text-slate-900 mb-6">İlgili Çözümler</h3>
            <div className="flex flex-wrap gap-3">
              {[
                { label: "BIM Modelleme", href: "/cozumler/bim-modelleme" },
                { label: "Scan to BIM", href: "/cozumler/scan-to-bim" },
                { label: "Point Cloud to BIM", href: "/cozumler/nokta-bulutu-bim" },
                { label: "2D'den 3D'ye Dönüşüm", href: "/cozumler/2d-3d-bim-donusum" },
              ].map((item, idx) => (
                <Link key={idx} href={item.href} className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg hover:bg-red-50 hover:text-red-600 transition-colors text-sm font-medium">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
