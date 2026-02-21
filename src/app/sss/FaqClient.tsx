"use client";

import { useState } from "react";
import Link from "next/link";
import SubPageHero from "@/components/SubPageHero";
import { ChevronDown } from "lucide-react";

export default function FaqClient() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
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
    },
    {
      q: "Fiyatlandırma nasıl yapılıyor?",
      a: "Proje bazlı teklif veriyoruz. Fiyatı etkileyen faktörler: Taranacak alan (m²), model LOD seviyesi, disiplin sayısı (sadece mimari veya MEP dahil mi), proje aciliyeti ve teslim formatları. Ücretsiz ön keşif görüşmesi yapıyor ve size özel detaylı teklif sunuyoruz. Sabit fiyat garantimiz var; proje kapsamı değişmediği sürece ek ücret talep etmiyoruz."
    },
    {
      q: "Teslimat sonrası destek sağlıyor musunuz?",
      a: "Evet, teslimat sonrası 30 gün içinde model kullanımı hakkında soru ve düzeltme taleplerini ücretsiz karşılıyoruz. Ayrıca isteğe bağlı eğitim paketlerimiz var: Revit model navigasyonu, Schedule kullanımı, view yönetimi ve basit düzenleme işlemleri. Uzun vadeli bakım sözleşmeleri de yapıyoruz."
    },
    {
      q: "NDA (Gizlilik Sözleşmesi) yapıyor musunuz?",
      a: "Elbette. Müşteri talep etmese bile standart olarak NDA imzalıyoruz. Tüm proje dosyaları şifreli serverlerde saklanıyor, proje bitiminden 6 ay sonra siliniyor (istek halinde arşivliyoruz). Ekip üyeleri gizlilik taahhütnamesi imzalıyor. ISO 27001 bilgi güvenliği standardına uyum sağlıyoruz."
    },
    {
      q: "Hangi sektörlerde deneyiminiz var?",
      a: "Petrokimya ve rafineri, otomotiv üretim tesisleri, gıda ve içecek fabrikaları, enerji santralleri, lojistik depoları, AVM ve otel kompleksleri, havalimanı terminalleri, tarihi yapı restorasyonları gibi birçok sektörde 50+ proje tamamladık. Referans listesini inceleyebilirsiniz."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SubPageHero
        title="Sıkça Sorulan Sorular"
        description="Point Cloud to BIM, as-built modelleme ve lazer tarama hizmetlerimiz hakkında en çok merak edilen soruların cevapları."
        category="Bilgi Merkezi"
        breadcrumb={[{ label: "SSS", href: "/sss" }]}
      />

      <div className="max-w-4xl mx-auto px-4 py-20">
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-white border-2 border-slate-100 rounded-2xl overflow-hidden hover:border-red-100 transition-all">
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full px-8 py-6 text-left flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors"
              >
                <span className="text-lg font-black text-slate-900">{faq.q}</span>
                <ChevronDown className={`w-6 h-6 text-[var(--color-primary-red)] flex-shrink-0 transition-transform ${openIndex === idx ? 'rotate-180' : ''}`} />
              </button>
              {openIndex === idx && (
                <div className="px-8 pb-6">
                  <p className="text-slate-600 leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>

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
