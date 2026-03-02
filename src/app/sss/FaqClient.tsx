"use client";

import { useState } from "react";
import Link from "next/link";
import SubPageHero from "@/components/SubPageHero";
import { ChevronDown, HelpCircle, Wrench, CreditCard, Settings, MessageCircle } from "lucide-react";

interface FaqItem {
  q: string;
  a: string;
}

interface FaqCategory {
  title: string;
  icon: React.ReactNode;
  items: FaqItem[];
}

export default function FaqClient() {
  const [openIndex, setOpenIndex] = useState<string | null>("general-0");

  const faqCategories: FaqCategory[] = [
    {
      title: "Genel Sorular",
      icon: <HelpCircle className="w-5 h-5" />,
      items: [
        {
          q: "Eos Proje hangi hizmetleri sunuyor?",
          a: "Eos Proje; 3D lazer tarama, Point Cloud to BIM modelleme, as-built dokümantasyon, MEP modelleme, dijital ikiz oluşturma, HBIM (tarihi yapı modelleme), rölöve hizmetleri ve harita ölçme hizmetleri sunmaktadır. Endüstriyel tesisler, ticari yapılar, tarihi eserler ve perakende zincirleri için kapsamlı çözümler sağlıyoruz."
        },
        {
          q: "Hangi sektörlerde deneyiminiz var?",
          a: "Petrokimya ve rafineri, otomotiv üretim tesisleri, gıda ve içecek fabrikaları, enerji santralleri, lojistik depoları, AVM ve otel kompleksleri, havalimanı terminalleri, tarihi yapı restorasyonları gibi birçok sektörde 50+ proje tamamladık. Türkiye ve Avrupa genelinde hizmet veriyoruz."
        },
        {
          q: "Türkiye dışında hizmet veriyor musunuz?",
          a: "Evet, Budapeşte'deki ofisimiz aracılığıyla Orta Avrupa'da (Macaristan, Avusturya, Almanya) saha çalışmaları yapıyoruz. Ayrıca uzaktan (offshore) modelleme hizmeti ile dünyanın her yerinden gelen nokta bulutu verilerini işleyebiliyoruz."
        },
        {
          q: "NDA (Gizlilik Sözleşmesi) yapıyor musunuz?",
          a: "Elbette. Müşteri talep etmese bile standart olarak NDA imzalıyoruz. Tüm proje dosyaları şifreli serverlerde saklanıyor, proje bitiminden 6 ay sonra siliniyor (istek halinde arşivliyoruz). Ekip üyeleri gizlilik taahhütnamesi imzalıyor. ISO 27001 bilgi güvenliği standardına uyum sağlıyoruz."
        },
        {
          q: "Ekibinizde kaç kişi var?",
          a: "Ekibimizde harita mühendisleri, mimarlar, makina mühendisleri ve BIM uzmanlarından oluşan 8+ kişilik çekirdek kadro bulunmaktadır. Büyük projelerde iş ortaklarımızla kapasitemizi genişletebiliyoruz."
        }
      ]
    },
    {
      title: "Hizmetler Hakkında",
      icon: <Wrench className="w-5 h-5" />,
      items: [
        {
          q: "Point cloud to BIM süreci ne kadar sürer?",
          a: "Proje büyüklüğüne bağlı olarak değişir. Ortalama 3.000-5.000 m² bir endüstriyel tesis için tarama 2-3 gün, modelleme ise 10-15 iş günü sürer. Kargo teslimat süresini de eklersek toplam 3-4 hafta içinde teslim ediyoruz. Acil projeler için express seçeneğimiz mevcuttur."
        },
        {
          q: "Hangi LOD (Level of Development) seviyelerinde çalışıyorsunuz?",
          a: "LOD 200'den LOD 400'e kadar tüm seviyelerde hizmet veriyoruz. LOD 200: Genel geometri ve yaklaşık ebatlar. LOD 300: Kesin boyutlar, malzeme tanımları ve bağlantı noktaları. LOD 350: Detaylı interface bilgileri. LOD 400: İmalat seviyesi detaylar (genellikle prefabrik elemanlar için). Proje ihtiyacınıza göre en uygun LOD'u birlikte belirleriz."
        },
        {
          q: "Hangi yazılım ve dosya formatlarında teslimat yapıyorsunuz?",
          a: "Revit native (.rvt) dosyası, IFC 2x3 veya IFC4 açık BIM formatı, AutoCAD DWG planları, Navisworks (.nwc) dosyası ve nokta bulutu ham verisi (E57, RCS, RCP) formatlarında teslimat yapıyoruz. İstek üzerine PDF A0 çizimler ve COBie tabloları da sunabiliyoruz."
        },
        {
          q: "Lazer tarama sırasında tesis operasyonları durur mu?",
          a: "Hayır, çoğu durumda tesis operasyonu devam ederken tarama yapıyoruz. Sadece kritik güvenlik alanlarında (yükseklik çalışması, tehlikeli kimyasal bölgeler) kısa süreli erişim izni gerekebilir. Tarama planını üretim programınıza uygun şekilde ayarlıyoruz; genellikle vardiya aralarında veya hafta sonlarında çalışıyoruz."
        },
        {
          q: "Modelleme doğruluğu nasıl garanti ediliyor?",
          a: "Üç aşamalı QA/QC sürecimiz var: 1) Modelleme ekibi tarafından iç kontrol. 2) Bağımsız kalite kontrol uzmanı tarafından geometrik doğrulama. 3) CloudCompare ile nokta bulutu-model overlay karşılaştırması (sapma analizi). Teslimat paketinde ±2mm hassasiyet raporu sunuyoruz. Ayrıca tüm Revit Warnings temizleniyor ve clash detection yapılıyor."
        },
        {
          q: "Uzaktan (offshore) modelleme yapıyor musunuz?",
          a: "Evet, saha taramasını bizim ekibimiz yerinde yapar veya siz tarama yaparak nokta bulutu verisini bize gönderirsiniz. Modelleme işlemi Türkiye ofisimizde gerçekleştirilir. Haftalık online toplantılarla ilerlemeyi takip ediyoruz. Bu sayede global müşterilere de hizmet verebiliyoruz."
        },
        {
          q: "Tarihi binalarda restorasyon projesi yapıyor musunuz?",
          a: "Evet, tarihi yapıların as-built dokümantasyonunda uzmanız. Kültür varlığı statüsündeki binalarda hassas lazer tarama yapıyor, orijinal yapı elemanlarını (taş işçiliği, ahşap detaylar, süslemeler) yüksek çözünürlükte modelleyip koruma kuruluna sunulmak üzere raporluyoruz."
        },
        {
          q: "2D CAD çizimlerimi BIM'e çevirmem neden gerekli?",
          a: "Eski 2D planlarla çalışmak birçok soruna yol açar: Plan, kesit ve görünüşler senkronize değil, değişiklikler manuel yapılıyor, miktar çıkarmak çok zaman alıyor ve clash detection yapılamıyor. BIM modeline geçtiğinizde tüm bu sorunlar çözülür, projeler %30-40 daha hızlı ilerler ve hata oranları düşer."
        }
      ]
    },
    {
      title: "Fiyatlandırma ve Süreç",
      icon: <CreditCard className="w-5 h-5" />,
      items: [
        {
          q: "Fiyatlandırma nasıl yapılıyor?",
          a: "Proje bazlı teklif veriyoruz. Fiyatı etkileyen faktörler: Taranacak alan (m²), model LOD seviyesi, disiplin sayısı (sadece mimari veya MEP dahil mi), proje aciliyeti ve teslim formatları. Ücretsiz ön keşif görüşmesi yapıyor ve size özel detaylı teklif sunuyoruz. Sabit fiyat garantimiz var; proje kapsamı değişmediği sürece ek ücret talep etmiyoruz."
        },
        {
          q: "Teslimat sonrası destek sağlıyor musunuz?",
          a: "Evet, teslimat sonrası 30 gün içinde model kullanımı hakkında soru ve düzeltme taleplerini ücretsiz karşılıyoruz. Ayrıca isteğe bağlı eğitim paketlerimiz var: Revit model navigasyonu, Schedule kullanımı, view yönetimi ve basit düzenleme işlemleri. Uzun vadeli bakım sözleşmeleri de yapıyoruz."
        },
        {
          q: "Ödeme koşulları nasıl?",
          a: "Standart projelerimizde %50 peşin, %50 teslimat sonrası ödeme alıyoruz. Büyük projelerde aşamalı ödeme planı uyguluyoruz. Kurumsal müşterilerimize 30-60 gün vade imkanı sunabiliyoruz. Fatura kesimi proje tesliminden sonra yapılır."
        },
        {
          q: "Projeye başlamadan önce keşif yapıyor musunuz?",
          a: "Evet, karmaşık veya büyük projelerde ücretsiz ön keşif ziyareti gerçekleştiriyoruz. Saha koşullarını, erişim kısıtlamalarını ve özel gereksinimleri yerinde değerlendiriyoruz. Basit projeler için video konferans üzerinden kapsam belirleme toplantısı yapıyoruz."
        }
      ]
    },
    {
      title: "Teknik Sorular",
      icon: <Settings className="w-5 h-5" />,
      items: [
        {
          q: "Lazer tarama hassasiyeti ne kadar?",
          a: "Kullandığımız Leica RTC360 ve Faro Focus cihazları ±2mm @ 10m mesafede hassasiyet sunar. Toplam proje hassasiyeti, tarama istasyonu sayısı ve registration kalitesine bağlı olarak ±3-8mm arasında değişir. Kritik ölçümler için kontrol noktası (check point) doğrulaması yapıyoruz."
        },
        {
          q: "Hangi lazer tarama cihazlarını kullanıyorsunuz?",
          a: "Sabit tarama için Leica RTC360 ve Faro Focus S350, mobil tarama için Leica BLK2GO ve GeoSLAM ZEB Horizon kullanıyoruz. Drone fotogrametrisi için DJI Mavic 3E tercih ediyoruz. Proje gereksinimlerine göre en uygun teknolojiyi seçiyoruz."
        },
        {
          q: "Nokta bulutu verisinin dosya boyutu ne kadar olur?",
          a: "Proje büyüklüğüne bağlı olarak değişir. Ortalama bir tesis için (5.000-10.000 m²) 10-50 GB arası raw veri oluşur. İşlenmiş ve optimize edilmiş RCS/RCP dosyaları daha küçüktür. Büyük dosyalar için güvenli FTP veya fiziksel teslimat (HDD) seçenekleri sunuyoruz."
        },
        {
          q: "Clash detection raporu nasıl hazırlanıyor?",
          a: "Autodesk Navisworks kullanarak tüm disiplinler (mimari, yapısal, MEP) arasında otomatik çakışma analizi yapıyoruz. Hard clash (fiziksel kesişim), soft clash (minimum mesafe ihlali) ve workflow clash (sıralama hataları) kategorilerinde raporlama yapıyoruz. Her clash için konum, öncelik ve çözüm önerisi içeren detaylı rapor sunuyoruz."
        },
        {
          q: "BIM modelinde hangi bilgiler yer alır?",
          a: "Geometrik verilerin yanı sıra (boyut, konum, eğim) malzeme bilgileri, ekipman etiketleri, boru çapları, yangın dayanımı sınıfları, üretici verileri ve bakım bilgileri gibi parametrik veriler eklenir. COBie standardına uygun veri çıktısı da sağlayabiliyoruz."
        }
      ]
    },
    {
      title: "Destek ve İletişim",
      icon: <MessageCircle className="w-5 h-5" />,
      items: [
        {
          q: "Teklif almak için ne yapmam gerekiyor?",
          a: "Web sitemizdeki iletişim formunu doldurabilir, info@eosproje.com adresine email gönderebilir veya +90 530 664 2263 numarasını arayabilirsiniz. Proje kapsamı, lokasyon ve zaman çizelgesi hakkında kısa bilgi vermeniz yeterli. 24 saat içinde size dönüş yapıyoruz."
        },
        {
          q: "Proje sürecinde kimle iletişime geçeceğim?",
          a: "Her projeye bir proje yöneticisi atanır. Proje yöneticiniz tüm süreç boyunca tek iletişim noktanız olur. Haftalık ilerleme raporları, milestone toplantıları ve anlık sorularınız için her zaman ulaşabilirsiniz."
        },
        {
          q: "Acil projeler için express hizmetiniz var mı?",
          a: "Evet, acil projeler için express hizmet sunuyoruz. Standart sürelerin %50'sine kadar hızlandırılmış teslimat mümkündür. Express projeler için ek ücretlendirme uygulanır. Mevcut kapasite durumumuza göre kabul ediyoruz."
        }
      ]
    }
  ];

  // Generate FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqCategories.flatMap(cat => 
      cat.items.map(item => ({
        "@type": "Question",
        "name": item.q,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": item.a
        }
      }))
    )
  };

  return (
    <div className="min-h-screen bg-white">
      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <SubPageHero
        title="Sıkça Sorulan Sorular"
        description="Point Cloud to BIM, as-built modelleme ve lazer tarama hizmetlerimiz hakkında en çok merak edilen soruların cevapları."
        category="Bilgi Merkezi"
        breadcrumb={[{ label: "SSS", href: "/sss" }]}
      />

      <div className="max-w-5xl mx-auto px-4 py-20">
        {/* Category Navigation */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {faqCategories.map((category, catIdx) => (
            <button
              key={catIdx}
              onClick={() => {
                document.getElementById(`category-${catIdx}`)?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="flex items-center gap-2 px-4 py-2 bg-slate-100 hover:bg-red-50 text-slate-700 hover:text-[var(--color-primary-red)] rounded-full text-sm font-bold transition-all"
            >
              {category.icon}
              {category.title}
            </button>
          ))}
        </div>

        {/* FAQ Categories */}
        <div className="space-y-12">
          {faqCategories.map((category, catIdx) => (
            <div key={catIdx} id={`category-${catIdx}`} className="scroll-mt-24">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-red-50 rounded-xl text-[var(--color-primary-red)]">
                  {category.icon}
                </div>
                <h2 className="text-2xl font-black text-slate-900">{category.title}</h2>
                <span className="px-3 py-1 bg-slate-100 rounded-full text-xs font-bold text-slate-500">
                  {category.items.length} Soru
                </span>
              </div>

              <div className="space-y-3">
                {category.items.map((faq, idx) => {
                  const itemKey = `${catIdx}-${idx}`;
                  return (
                    <div key={idx} className="bg-white border-2 border-slate-100 rounded-2xl overflow-hidden hover:border-red-100 transition-all">
                      <button
                        onClick={() => setOpenIndex(openIndex === itemKey ? null : itemKey)}
                        className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors"
                      >
                        <span className="text-base font-bold text-slate-900">{faq.q}</span>
                        <ChevronDown className={`w-5 h-5 text-[var(--color-primary-red)] flex-shrink-0 transition-transform ${openIndex === itemKey ? 'rotate-180' : ''}`} />
                      </button>
                      {openIndex === itemKey && (
                        <div className="px-6 pb-5">
                          <p className="text-slate-600 leading-relaxed">{faq.a}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 bg-gradient-to-r from-red-600 to-orange-600 rounded-3xl p-12 text-white text-center">
          <h2 className="text-2xl font-black mb-4">Sorunuza Cevap Bulamadınız mı?</h2>
          <p className="text-red-100 mb-8">Detaylı bilgi almak için bizimle iletişime geçebilirsiniz.</p>
          <Link href="/iletisim" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-red-700 font-black rounded-xl hover:bg-slate-100 transition-all">
            İletişim Formu
          </Link>
        </div>
      </div>
    </div>
  );
}
