import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, Box, Layers, FileCode, Building2, Ruler, Database, ChevronDown, Settings } from "lucide-react";
import SubPageHero from "@/components/SubPageHero";
import { ServiceSchema } from "@/components/schema/ServiceSchema";
import { FAQPageSchema } from "@/components/schema/FAQPageSchema";
import { SITE_URL } from "@/lib/constants";
import { SampleFilesDownload } from "@/components/SampleFilesDownload";

export const metadata: Metadata = {
  title: "BIM Modelleme Hizmeti | Revit, ArchiCAD | EOS Proje",
  description: "Profesyonel BIM modelleme hizmeti ile projelerinizi LOD 100-500 seviyelerinde Revit ve ArchiCAD ortamında modelliyoruz. Mimari, Statik ve MEP disiplinlerinde uzman ekip.",
  keywords: ["bim modelleme", "revit modelleme", "archicad", "lod 300", "lod 400", "mep modelleme", "yapı bilgi modelleme"],
  alternates: {
    canonical: `${SITE_URL}/cozumler/bim-modelleme`,
    languages: {
      "tr": `${SITE_URL}/cozumler/bim-modelleme`,
      "en": `${SITE_URL}/en/solutions/bim-modeling`,
    },
  },
  openGraph: {
    title: "BIM Modelleme Hizmeti | EOS Proje",
    description: "LOD 100-500 seviyelerinde profesyonel BIM modelleme.",
    url: `${SITE_URL}/cozumler/bim-modelleme`,
    type: "website",
    images: ["/images/EosProje-point-cloud-to-bim-modelleme.webp"],
  },
};

const faqs = [
  {
    question: "BIM modelleme nedir?",
    answer: "BIM (Building Information Modeling), yapıların 3D geometrisinin yanı sıra malzeme, maliyet, zaman gibi bilgileri de içeren akıllı dijital modellerinin oluşturulmasıdır."
  },
  {
    question: "LOD seviyeleri ne anlama geliyor?",
    answer: "LOD (Level of Development), modelin detay ve bilgi yoğunluğunu belirtir. LOD 100 konsept, LOD 200 şematik, LOD 300 detaylı tasarım, LOD 400 imalat, LOD 500 as-built seviyesini ifade eder."
  },
  {
    question: "Hangi yazılımları kullanıyorsunuz?",
    answer: "Ana yazılımımız Autodesk Revit'tir. Talebe göre ArchiCAD, Tekla ve Bentley platformlarında da çalışabiliyoruz. IFC formatında evrensel teslimat yapıyoruz."
  },
  {
    question: "BIM modelleme süresi ne kadar?",
    answer: "Projenin büyüklüğü ve LOD seviyesine göre değişir. 1000 m² bir bina için LOD 300 model yaklaşık 2-3 hafta sürer. Endüstriyel tesislerde bu süre uzayabilir."
  },
  {
    question: "Clash Detection yapıyor musunuz?",
    answer: "Evet. Navisworks ile disiplinler arası çakışma kontrolü yapıyor, detaylı raporlama sunuyoruz. Çakışma tespiti ayrı bir hizmet olarak da sunulabilir."
  },
  {
    question: "Hangi dosya formatlarında teslim alırım?",
    answer: "Standart teslimat: Native format (.RVT, .PLN), IFC, 2D CAD çıktıları (.DWG), PDF kesitler ve Navisworks (.NWD) dosyalarını içerir."
  }
];

const lodLevels = [
  {
    lod: "LOD 100",
    title: "Konsept",
    description: "Genel kütle ve alan hesapları",
    usage: "Fizibilite, ön etüt",
    color: "bg-blue-100 text-blue-700"
  },
  {
    lod: "LOD 200",
    title: "Şematik Tasarım",
    description: "Yaklaşık boyutlar, sistem şemaları",
    usage: "Ruhsat projeleri, maliyet tahmini",
    color: "bg-green-100 text-green-700"
  },
  {
    lod: "LOD 300",
    title: "Detaylı Tasarım",
    description: "Spesifik sistemler, doğru ölçüler",
    usage: "Uygulama projeleri, koordinasyon",
    color: "bg-yellow-100 text-yellow-700"
  },
  {
    lod: "LOD 350",
    title: "Koordinasyon",
    description: "Sistem etkileşimleri, bağlantı detayları",
    usage: "Clash Detection, 4D/5D BIM",
    color: "bg-orange-100 text-orange-700"
  },
  {
    lod: "LOD 400",
    title: "İmalat",
    description: "Üretim ve montaj detayları",
    usage: "Prefabrikasyon, saha montajı",
    color: "bg-red-100 text-red-700"
  },
  {
    lod: "LOD 500",
    title: "As-Built",
    description: "Sahadaki gerçek durumun modeli",
    usage: "Tesis yönetimi, FM",
    color: "bg-purple-100 text-purple-700"
  }
];

const disciplines = [
  {
    icon: <Building2 className="w-6 h-6" />,
    title: "Mimari (ARC)",
    items: ["Duvarlar, döşemeler, çatılar", "Kapı ve pencereler", "Merdivenler, korkuluklar", "Cephe sistemleri"]
  },
  {
    icon: <Ruler className="w-6 h-6" />,
    title: "Statik (STR)",
    items: ["Betonarme elemanlar", "Çelik konstrüksiyon", "Temel sistemleri", "Detay bağlantıları"]
  },
  {
    icon: <Settings className="w-6 h-6" />,
    title: "MEP",
    items: ["HVAC sistemleri", "Sıhhi tesisat", "Elektrik tesisatı", "Yangın sistemleri"]
  }
];

export default function BimModellemePage() {
  return (
    <>
      <ServiceSchema
        name="BIM Modelleme Hizmeti"
        description="LOD 100-500 seviyelerinde profesyonel BIM modelleme hizmeti. Mimari, Statik ve MEP disiplinlerinde uzman ekip."
        url="/cozumler/bim-modelleme"
        image="/images/EosProje-point-cloud-to-bim-modelleme.webp"
      />
      <FAQPageSchema faqs={faqs} />
      
      <div className="min-h-screen bg-white">
        <SubPageHero
          category="Mühendislik Çözümleri"
          title="BIM Modelleme"
          description="Projelerinizi LOD 100-500 seviyelerinde Revit ve ArchiCAD ortamında modelliyoruz. Mimari, Statik ve MEP disiplinlerinde uzman ekip."
          breadcrumb={[
            { label: "Çözümler", href: "/cozumler" },
            { label: "BIM Modelleme", href: "/cozumler/bim-modelleme" }
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
                <strong>BIM Modelleme</strong>, yapıların geometri ve bilgi içeren akıllı 3D modellerinin oluşturulmasıdır. 
                EOS Proje olarak Revit ortamında LOD 200-500 seviyelerinde Mimari, Statik ve MEP modelleri üretiyoruz. 
                Clash Detection, 4D/5D BIM ve tesis yönetimi entegrasyonu sağlıyoruz. IFC, DWG ve native formatlarda teslimat yapıyoruz.
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="text-red-600 font-bold text-sm uppercase tracking-wider">Yapı Bilgi Modellemesi</span>
                <h2 className="text-4xl font-bold text-slate-900 mt-4 mb-6">Akıllı ve Parametrik 3D Modeller</h2>
                <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                  BIM (Building Information Modeling), yapıların sadece 3D geometrisini değil, 
                  <strong> malzeme, maliyet, zaman, bakım bilgilerini</strong> de içeren dijital ikizleridir.
                </p>
                <ul className="space-y-4">
                  {[
                    "LOD 200-500 seviyelerinde modelleme",
                    "Mimari, Statik, MEP disiplinleri",
                    "Revit, ArchiCAD, IFC formatları",
                    "Clash Detection ve koordinasyon",
                    "4D (zaman) ve 5D (maliyet) entegrasyonu"
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
                  src="/images/infographics/eosproje-bim-lod-seviyeleri.png"
                  alt="BIM LOD Seviyeleri"
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* LOD Levels */}
        <section className="py-20 px-4 bg-slate-900">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">LOD Seviyeleri</h2>
              <p className="text-slate-400 max-w-2xl mx-auto">
                Projenizin ihtiyacına göre uygun detay seviyesini belirliyoruz.
              </p>
            </div>
            <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
              {lodLevels.map((level, idx) => (
                <div key={idx} className="bg-slate-800 rounded-2xl p-6 border border-slate-700">
                  <div className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-4 ${level.color}`}>
                    {level.lod}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{level.title}</h3>
                  <p className="text-slate-400 text-sm mb-3">{level.description}</p>
                  <div className="text-xs text-red-400 font-medium">{level.usage}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Disciplines */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Modelleme Disiplinleri</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Tüm yapı disiplinlerinde uzman ekibimizle hizmet veriyoruz.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {disciplines.map((disc, idx) => (
                <div key={idx} className="bg-slate-50 rounded-2xl p-8">
                  <div className="w-14 h-14 bg-red-100 rounded-xl flex items-center justify-center mb-6 text-red-600">
                    {disc.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">{disc.title}</h3>
                  <ul className="space-y-2">
                    {disc.items.map((item, i) => (
                      <li key={i} className="text-slate-600 flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-red-600 rounded-full"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Software & Formats */}
        <section className="py-20 px-4 bg-slate-50">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                  <Box className="w-6 h-6 text-red-600" />
                  Kullandığımız Yazılımlar
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { name: "Autodesk Revit", type: "Ana Platform" },
                    { name: "ArchiCAD", type: "Alternatif" },
                    { name: "Tekla Structures", type: "Çelik/Betonarme" },
                    { name: "Navisworks", type: "Koordinasyon" },
                    { name: "BIM Track", type: "İş Yönetimi" },
                    { name: "Solibri", type: "Model Kontrol" }
                  ].map((sw, idx) => (
                    <div key={idx} className="p-4 bg-slate-50 rounded-xl">
                      <div className="font-bold text-slate-900">{sw.name}</div>
                      <div className="text-sm text-slate-500">{sw.type}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                  <FileCode className="w-6 h-6 text-red-600" />
                  Teslimat Formatları
                </h3>
                <div className="space-y-4">
                  {[
                    { format: ".RVT / .PLN", desc: "Native Revit/ArchiCAD" },
                    { format: ".IFC", desc: "Evrensel BIM formatı" },
                    { format: ".DWG / .DXF", desc: "2D CAD çizimleri" },
                    { format: ".NWD / .NWC", desc: "Navisworks koordinasyon" },
                    { format: ".PDF", desc: "Kesit ve görünüşler" },
                    { format: "COBie", desc: "Tesis yönetimi verisi" }
                  ].map((f, idx) => (
                    <div key={idx} className="flex justify-between items-center p-3 bg-slate-50 rounded-lg">
                      <span className="font-bold text-red-600">{f.format}</span>
                      <span className="text-slate-600 text-sm">{f.desc}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Sıkça Sorulan Sorular</h2>
              <p className="text-slate-600">BIM modelleme hakkında merak edilenler</p>
            </div>
            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <details key={idx} className="group bg-slate-50 rounded-xl border border-slate-200 overflow-hidden">
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">BIM Projenizi Başlatın</h2>
            <p className="text-slate-400 mb-8 text-lg">
              Profesyonel BIM modelleme hizmeti için bizimle iletişime geçin.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/iletisim" className="px-8 py-4 bg-red-600 text-white font-bold rounded-xl hover:bg-red-700 transition-colors flex items-center justify-center gap-2">
                Teklif Alın <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/blog/lod-levels-differences" className="px-8 py-4 bg-white text-slate-900 font-bold rounded-xl hover:bg-slate-100 transition-colors">
                LOD Rehberini Okuyun
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
                { label: "Scan to BIM", href: "/cozumler/scan-to-bim" },
                { label: "Point Cloud to BIM", href: "/cozumler/nokta-bulutu-bim" },
                { label: "Çakışma Tespiti", href: "/cozumler/cakisma-tespiti" },
                { label: "2D'den 3D'ye Dönüşüm", href: "/cozumler/2d-3d-bim-donusum" },
                { label: "As-Built Modelleme", href: "/cozumler/mevcut-durum-modelleme" },
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
