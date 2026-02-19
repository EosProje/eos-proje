"use client";

import SubPageHero from "@/components/SubPageHero";
import { Target, Users, Award, TrendingUp, CheckCircle2, Globe } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function AboutClient() {
  return (
    <div className="min-h-screen bg-white">
      <SubPageHero
        title="Hakkımızda"
        description="Nokta bulutundan akıllı modellere. EosProje, endüstriyel tesisler ve yapı sektörü için yüksek hassasiyetli BIM modelleme ve as-built dokümantasyon hizmetleri sunuyor."
        category="Kurumsal"
        breadcrumb={[{ label: "Hakkımızda", href: "/hakkimizda" }]}
      />

      <div className="max-w-7xl mx-auto px-4 py-20">

        {/* Hakkımızda Görsel & Intro */}
        <div className="flex flex-col lg:flex-row items-center gap-16 mb-24">
          <div className="lg:w-1/2 relative">
            <div className="relative aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-100">
              <Image
                src="/images/case-studies/eosproje-lazer-tarama-sistemleri-bim-modelleme-hizmetleri.webp"
                alt="EosProje Ekibi Sahada Lazer Tarama Yaparken"
                fill
                className="object-cover"
              />
              {/* Overlay Badge */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-white/50">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center text-[var(--color-primary-red)] font-black text-lg">
                    10+
                  </div>
                  <div>
                    <h4 className="font-black text-slate-900 text-sm">Yıllık Tecrübe</h4>
                    <p className="text-xs text-slate-500 font-medium">Uluslararası Projelerde</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Decorative Pattern */}
            <div className="absolute -top-10 -left-10 w-full h-full bg-slate-900/5 -z-10 rounded-[2.5rem]"></div>
          </div>

          <div className="lg:w-1/2">
            <span className="text-[var(--color-primary-red)] font-black uppercase tracking-widest text-[10px] bg-red-50 px-4 py-2 rounded-full mb-6 inline-block border border-red-100">
              Biz Kimiz?
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
              Teknoloji ve Mühendisliğin <span className="text-gradient-red">Kesişim Noktası</span>
            </h2>
            <div className="space-y-6 text-lg text-slate-600 font-medium leading-relaxed">
              <p>
                EosProje, inşaat ve endüstri sektörlerindeki dijital dönüşüm ihtiyacına yanıt vermek amacıyla kurulmuş, teknoloji odaklı bir mühendislik firmasıdır.
              </p>
              <p>
                Geleneksel rölöve ve belgeleme yöntemlerinin yetersiz kaldığı karmaşık projelerde; lazer tarama (LiDAR), fotogrametri ve BIM teknolojilerini kullanarak <strong>&quot;gerçeği dijitalleştiriyoruz&quot;</strong>.
              </p>
              <p className="border-l-4 border-[var(--color-primary-red)] pl-6 italic text-slate-800">
                Amacımız sadece bir 3D model teslim etmek değil; yatırımcıların ve mühendislerin, mevcut yapıları hakkında en doğru veriye sahip olmalarını sağlamaktır.
              </p>
            </div>
          </div>
        </div>

        {/* Misyon & Vizyon */}
        <div className="grid md:grid-cols-2 gap-12 mb-24">
          <div className="bg-gradient-to-br from-red-50 to-orange-50 p-10 rounded-3xl border border-red-100">
            <div className="w-14 h-14 bg-[var(--color-primary-red)] rounded-xl flex items-center justify-center text-white mb-6">
              <Target className="w-7 h-7" />
            </div>
            <h2 className="text-2xl font-black text-slate-900 mb-4">Misyonumuz</h2>
            <p className="text-slate-700 leading-relaxed">
              Türkiye ve global pazarda, lazer tarama teknolojisi ile BIM metodolojilerini birleştirerek endüstriyel ve mimari
              projelere milimetrik hassasiyette dijital dokümantasyon çözümleri sunmak. Müşterilerimizin renovasyon, genişletme
              ve tesis yönetimi süreçlerinde doğru veriye dayanarak karar almalarını sağlamak.
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-10 rounded-3xl border border-blue-100">
            <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center text-white mb-6">
              <TrendingUp className="w-7 h-7" />
            </div>
            <h2 className="text-2xl font-black text-slate-900 mb-4">Vizyonumuz</h2>
            <p className="text-slate-700 leading-relaxed">
              Reality capture ve BIM alanında Türkiye'nin referans firması olmak. Endüstriyel tesislerin dijital ikizlerini
              oluşturarak Endüstri 4.0 dönüşümüne katkı sağlamak. Ar-Ge yatırımlarımızla yapay zeka destekli otomatik modelleme
              süreçlerini geliştirmek ve global pazarda rekabet gücümüzü artırmak.
            </p>
          </div>
        </div>

        {/* Değerlerimiz */}
        <div className="mb-24">
          <h2 className="text-3xl font-black text-slate-900 mb-12 text-center">Çalışma Değerlerimiz</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <Award className="w-6 h-6" />, title: "Kalite ve Hassasiyet", desc: "Her projede ±2mm doğruluk standardını koruyoruz. Üç aşamalı QA/QC sürecimizle sıfır hata hedefliyoruz." },
              { icon: <CheckCircle2 className="w-6 h-6" />, title: "Güvenilirlik", desc: "Teslim tarihlerine %100 uyum sağlıyoruz. Sözleşme kapsamı dışında ek ücret talep etmiyoruz." },
              { icon: <Users className="w-6 h-6" />, title: "Müşteri Odaklılık", desc: "Proje başında kapsamlı keşif yapıyor, ihtiyacınızı anlayıp özel çözüm sunuyoruz." },
              { icon: <Globe className="w-6 h-6" />, title: "Sürekli Gelişim", desc: "Yeni yazılım ve donanım teknolojilerini takip ediyoruz. Ekibimize düzenli eğitim veriyoruz." },
              { icon: <Target className="w-6 h-6" />, title: "Şeffaflık", desc: "Proje ilerlemesini haftalık raporlarla paylaşıyoruz. Her aşamada açık iletişim kuruyoruz." },
              { icon: <Award className="w-6 h-6" />, title: "Etik ve Gizlilik", desc: "Müşteri verilerini NDA kapsamında koruyor, üçüncü kişilerle paylaşmıyoruz." }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl border-2 border-slate-100 hover:border-red-100 transition-all hover:shadow-lg">
                <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center text-[var(--color-primary-red)] mb-4">
                  {item.icon}
                </div>
                <h3 className="text-lg font-black text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Ekip & Uzmanlık */}
        <div className="bg-slate-900 rounded-[3rem] p-12 md:p-16 text-white mb-24">
          <h2 className="text-3xl font-black mb-8">Ekibimiz ve Uzmanlık Alanlarımız</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-black text-red-400 mb-4 uppercase tracking-wider">Teknik Ekip</h3>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                  <span><strong className="text-white">BIM Modelleme Uzmanları:</strong> 5+ yıl deneyimli Revit/Plant 3D sertifikalı mühendisler</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                  <span><strong className="text-white">Lazer Tarama Operatörleri:</strong> Leica ve Faro sertifikalı scan teknisyenleri</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                  <span><strong className="text-white">QA/QC Uzmanları:</strong> Bağımsız kalite kontrol ve validasyon ekibi</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-black text-red-400 mb-4 uppercase tracking-wider">Sektörel Deneyim</h3>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                  <span>Petrokimya ve rafineri tesisleri</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                  <span>Otomotiv ve beyaz eşya fabrikaları</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                  <span>Ticari binalar ve AVM kompleksleri</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                  <span>Tarihi yapılar ve restorasyon projeleri</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* İletişim CTA */}
        <div className="text-center bg-slate-50 rounded-[3rem] p-16">
          <h2 className="text-3xl font-black text-slate-900 mb-6">Projeniz İçin Görüşelim</h2>
          <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto">
            BIM modelleme, as-built dokümantasyon veya lazer tarama hizmetlerimiz hakkında detaylı bilgi almak için iletişime geçin.
          </p>
          <Link href="/iletisim" className="inline-flex items-center gap-2 px-10 py-5 bg-[var(--color-primary-red)] text-white font-black rounded-2xl hover:bg-red-700 transition-all shadow-xl">
            İletişime Geçin
          </Link>
        </div>
      </div>
    </div>
  );
}