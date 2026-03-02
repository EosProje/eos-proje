import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, Scan, Target, Gauge, Shield, Zap, Clock, Building2, Factory, Landmark, ChevronDown, Radio } from "lucide-react";
import SubPageHero from "@/components/SubPageHero";
import { ServiceSchema } from "@/components/schema/ServiceSchema";
import { FAQPageSchema } from "@/components/schema/FAQPageSchema";
import { SITE_URL } from "@/lib/constants";
import { SampleFilesDownload } from "@/components/SampleFilesDownload";

export const metadata: Metadata = {
  title: "3D Lazer Tarama Hizmeti | LiDAR Teknolojisi | EOS Proje",
  description: "3D lazer tarama (LiDAR) hizmeti ile yapılarınızı milimetrik hassasiyetle dijitalleştiriyoruz. Terrestrial ve Mobile tarama çözümleri. ±2mm doğruluk.",
  keywords: ["lazer tarama", "3d tarama", "lidar", "nokta bulutu", "terrestrial laser scanning", "mobile mapping", "3d ölçüm"],
  alternates: {
    canonical: `${SITE_URL}/cozumler/lazer-tarama`,
    languages: {
      "tr": `${SITE_URL}/cozumler/lazer-tarama`,
      "en": `${SITE_URL}/en/solutions/laser-scanning`,
    },
  },
  openGraph: {
    title: "3D Lazer Tarama Hizmeti | EOS Proje",
    description: "LiDAR teknolojisi ile milimetrik hassasiyette 3D dijitalleştirme.",
    url: `${SITE_URL}/cozumler/lazer-tarama`,
    type: "website",
    images: ["/images/EosProje-Lazer-Tarama-Sistemleri.webp"],
  },
};

const faqs = [
  {
    question: "3D lazer tarama nedir ve nasıl çalışır?",
    answer: "Lazer tarama, yüzeylere lazer ışını göndererek geri dönüş süresini ölçen ve bu sayede milyonlarca 3D koordinat noktası toplayan temassız bir ölçüm teknolojisidir. Saniyede 2 milyon noktaya kadar veri toplanabilir."
  },
  {
    question: "Hangi tarama teknolojisini kullanıyorsunuz?",
    answer: "Projenin ihtiyacına göre Terrestrial (Statik) Lazer Tarama (Leica RTC360) ve Mobile SLAM tarama teknolojilerini kullanıyoruz. Hibrit yaklaşımla her iki teknolojinin avantajlarını birleştiriyoruz."
  },
  {
    question: "Lazer tarama ne kadar doğru?",
    answer: "Terrestrial tarama ile ±2mm, Mobile SLAM ile ±10-15mm hassasiyet elde ediyoruz. Proje gereksinimlerine göre en uygun teknolojiyi öneriyoruz."
  },
  {
    question: "Tarama süresi ne kadar?",
    answer: "Bir tarama noktası ortalama 2 dakika sürer. 1000 m² bir alan için genellikle 1-2 saatlik saha çalışması yeterlidir. Endüstriyel tesislerde bu süre artabilir."
  },
  {
    question: "Dış mekanlarda da tarama yapılabilir mi?",
    answer: "Evet. Lazer tarayıcılarımız -20°C ile +50°C arasında çalışabilir. Cephe taramaları, şehir modelleme ve arazi taramaları için uygun ekipmanlarımız mevcuttur."
  },
  {
    question: "Hangi çıktılar teslim ediliyor?",
    answer: "Standart teslimat: Birleştirilmiş ve temizlenmiş nokta bulutu (.E57, .RCP), renkli 360° panorama görüntüler ve talebe göre BIM modeli içerir."
  }
];

const technologies = [
  {
    title: "Terrestrial (TLS)",
    subtitle: "Statik Lazer Tarama",
    accuracy: "±2mm",
    speed: "2M nokta/sn",
    range: "130m",
    best: "Yüksek hassasiyet gereken projeler",
    equipment: "Leica RTC360"
  },
  {
    title: "Mobile SLAM",
    subtitle: "Mobil Haritalama",
    accuracy: "±10-15mm",
    speed: "300K nokta/sn",
    range: "100m",
    best: "Geniş alanlar, hızlı tarama",
    equipment: "NavVis VLX"
  }
];

export default function LazerTaramaPage() {
  return (
    <>
      <ServiceSchema
        name="3D Lazer Tarama Hizmeti"
        description="LiDAR teknolojisi ile yapıların milimetrik hassasiyetle 3D dijitalleştirilmesi hizmeti."
        url="/cozumler/lazer-tarama"
        image="/images/EosProje-Lazer-Tarama-Sistemleri.webp"
      />
      <FAQPageSchema faqs={faqs} />
      
      <div className="min-h-screen bg-white">
        <SubPageHero
          category="Mühendislik Çözümleri"
          title="3D Lazer Tarama"
          description="LiDAR teknolojisi ile yapılarınızı milimetrik hassasiyetle dijitalleştiriyoruz. Temassız, hızlı ve güvenli 3D ölçüm."
          breadcrumb={[
            { label: "Çözümler", href: "/cozumler" },
            { label: "Lazer Tarama", href: "/cozumler/lazer-tarama" }
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
                <strong>3D Lazer Tarama</strong>, yapıları saniyede milyonlarca nokta toplayarak dijitalleştiren temassız bir ölçüm teknolojisidir. 
                EOS Proje olarak Leica RTC360 (±2mm) ve Mobile SLAM teknolojilerini kullanıyoruz. Geleneksel rölöveye göre %80 daha hızlı, 
                çok daha doğru ve güvenli. Renovasyon, endüstriyel tesis ve tarihi eser projelerinde kritik altlık verisi sağlar.
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="text-red-600 font-bold text-sm uppercase tracking-wider">LiDAR Teknolojisi</span>
                <h2 className="text-4xl font-bold text-slate-900 mt-4 mb-6">Milimetrik Hassasiyetle 3D Dijitalleştirme</h2>
                <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                  Lazer tarama (LiDAR), yapılara lazer ışını göndererek geri dönüş süresini ölçen ve bu sayede 
                  <strong> saniyede milyonlarca 3D koordinat noktası</strong> toplayan temassız bir ölçüm teknolojisidir.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-slate-50 p-4 rounded-xl">
                    <div className="text-2xl font-bold text-red-600">±2mm</div>
                    <div className="text-sm text-slate-600">Hassasiyet</div>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-xl">
                    <div className="text-2xl font-bold text-red-600">2M</div>
                    <div className="text-sm text-slate-600">Nokta/saniye</div>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-xl">
                    <div className="text-2xl font-bold text-red-600">130m</div>
                    <div className="text-sm text-slate-600">Menzil</div>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-xl">
                    <div className="text-2xl font-bold text-red-600">360°</div>
                    <div className="text-sm text-slate-600">HDR Görüntü</div>
                  </div>
                </div>
                <ul className="space-y-3">
                  {[
                    "Temassız ve güvenli ölçüm",
                    "Geleneksel yöntemlere göre %80 daha hızlı",
                    "Tüm detayların yakalanması",
                    "HDR 360° panoramik görüntüler"
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
                  src="/images/infographics/eosproje-lazer-tarama-teknolojileri.png"
                  alt="Lazer Tarama Teknolojileri"
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Technology Comparison */}
        <section className="py-20 px-4 bg-slate-900">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Tarama Teknolojileri</h2>
              <p className="text-slate-400 max-w-2xl mx-auto">
                Projenize en uygun teknolojiyi seçiyor, gerektiğinde hibrit çözümler sunuyoruz.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {technologies.map((tech, idx) => (
                <div key={idx} className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center">
                      {idx === 0 ? <Target className="w-6 h-6 text-white" /> : <Radio className="w-6 h-6 text-white" />}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{tech.title}</h3>
                      <p className="text-slate-400 text-sm">{tech.subtitle}</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <div className="text-red-500 text-sm font-medium">Doğruluk</div>
                      <div className="text-white font-bold">{tech.accuracy}</div>
                    </div>
                    <div>
                      <div className="text-red-500 text-sm font-medium">Hız</div>
                      <div className="text-white font-bold">{tech.speed}</div>
                    </div>
                    <div>
                      <div className="text-red-500 text-sm font-medium">Menzil</div>
                      <div className="text-white font-bold">{tech.range}</div>
                    </div>
                    <div>
                      <div className="text-red-500 text-sm font-medium">Ekipman</div>
                      <div className="text-white font-bold">{tech.equipment}</div>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-slate-700">
                    <div className="text-slate-400 text-sm">En iyi kullanım:</div>
                    <div className="text-white">{tech.best}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Kullanım Alanları</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                3D lazer tarama farklı sektörlerde kritik avantajlar sağlar.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Building2 className="w-8 h-8" />,
                  title: "Mimari Rölöve",
                  description: "Mevcut binaların hassas ölçümü, cephe analizi ve renovasyon projelerinde altlık oluşturma.",
                  features: ["Duvar eğrilikleri", "Döşeme sarkmaları", "Cephe detayları"]
                },
                {
                  icon: <Factory className="w-8 h-8" />,
                  title: "Endüstriyel Tesisler",
                  description: "Fabrika, enerji santrali ve üretim hatlarının eksiksiz dijitalleştirilmesi.",
                  features: ["Boru hatları", "Makine yerleşimi", "MEP sistemleri"]
                },
                {
                  icon: <Landmark className="w-8 h-8" />,
                  title: "Kültürel Miras",
                  description: "Tarihi yapıların koruma, restorasyon ve arşivleme projeleri için dokümantasyon.",
                  features: ["Deformasyon analizi", "Taş-taş rölöve", "3D arşivleme"]
                }
              ].map((item, idx) => (
                <div key={idx} className="bg-slate-50 rounded-2xl p-8 h-full">
                  <div className="w-16 h-16 bg-red-100 rounded-xl flex items-center justify-center mb-6 text-red-600">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                  <p className="text-slate-600 mb-4">{item.description}</p>
                  <ul className="space-y-2">
                    {item.features.map((f, i) => (
                      <li key={i} className="text-sm text-slate-500 flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-red-600 rounded-full"></div>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-4 bg-slate-50">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Sıkça Sorulan Sorular</h2>
              <p className="text-slate-600">Lazer tarama hakkında merak edilenler</p>
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Projeniz İçin Ücretsiz Keşif Alın</h2>
            <p className="text-slate-400 mb-8 text-lg">
              Yapınızı milimetrik hassasiyetle dijitalleştirmek için bizimle iletişime geçin.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/iletisim" className="px-8 py-4 bg-red-600 text-white font-bold rounded-xl hover:bg-red-700 transition-colors flex items-center justify-center gap-2">
                Teklif Alın <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/referanslar" className="px-8 py-4 bg-white text-slate-900 font-bold rounded-xl hover:bg-slate-100 transition-colors">
                Projelerimizi İnceleyin
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
                { label: "Dijital İkiz", href: "/cozumler/dijital-ikiz" },
                { label: "HBIM", href: "/cozumler/hbim" },
                { label: "Scan to CAD", href: "/cozumler/scan-to-cad" },
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
