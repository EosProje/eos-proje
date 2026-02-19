"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Box,
  Cpu,
  Search,
  CheckCircle2,
  ArrowRight,
  Layers,
  ShieldCheck,
  Zap,
  Clock,
  FileText,
  Warehouse,
  Landmark,
  Paintbrush,
  Plus,
  Minus,
  Settings,
  HardHat
} from "lucide-react";
import SubPageHero from "@/components/SubPageHero";
import ComparisonTable from "@/components/geo/ComparisonTable";
import BeforeAfterSlider from "@/components/ui/BeforeAfterSlider";
import { EASE_CURVES } from "@/lib/animations";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: EASE_CURVES.smooth }
};

export default function PointCloudToBimPage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const steps = [
    { title: "Saha Taraması", tech: "LiDAR, SLAM, Drone Fotogrametri", desc: "Lazer tarayıcılarla yapının X,Y,Z koordinatlarının saniyede milyonlarca nokta ile yakalanması." },
    { title: "Kayıt (Registration)", tech: "Leica Cyclone, Autodesk ReCap Pro", desc: "Parçalı taramaların tek bir koordinat sisteminde birleştirilmesi ve gürültü temizliği." },
    { title: "Modelleme", tech: "Autodesk Revit, ArchiCAD, Tekla", desc: "Nokta bulutunun üzerinden geçilerek (tracing) mimari, statik ve MEP elemanlarının oluşturulması." },
    { title: "Kalite Kontrol (QA/QC)", tech: "Navisworks, Verity (Isı Haritaları)", desc: "Modelin nokta bulutu ile çakışma ve tolerans testlerinin yapılması." }
  ];

  const faqs = [
    { q: "Point Cloud to BIM hizmetinin maliyeti nedir?", a: "Maliyet; projeninin metrekaresi, istenen detay seviyesi (LOD) ve mekanın karmaşıklığına (dolu/eşyalı olması veya MEP yoğunluğu) göre değişir. EOS Proje olarak, gereksiz detaylardan arındırılmış, ihtiyaca yönelik optimize bütçeler sunuyoruz." },
    { q: "Teslim süresi ne kadardır?", a: "Küçük ölçekli bir konut projesi (LOD 200) tarama sonrası 1-2 hafta içinde teslim edilebilirken, karmaşık endüstriyel tesisler veya hastaneler birkaç hafta sürebilir." },
    { q: "Sadece 3D model mi veriyorsunuz?", a: "Hayır. Teslim paketimiz genellikle şunları içerir: Temizlenmiş Nokta Bulutu (.RCP), Parametrik BIM Modeli (.RVT/.PLN), 2D CAD altlıkları (.DWG) ve talep edilirse Sapma Analizi Raporu." },
    { q: "Kendi ekibim bu dosyaları açarken zorlanır mı?", a: "Ham veriyi doğrudan yazılıma atarsanız evet, zorlanabilirler. Ancak biz veriyi indeksleyip optimize ettiğimiz için standart iş istasyonlarında rahatça çalışabilirsiniz." }
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-[var(--color-deep-charcoal)]">
      <SubPageHero
        category="Mühendislik Çözümleri"
        title="Akıllı 'Point Cloud to BIM' Çözümleri"
        description="Fiziksel gerçekliği milimetrik hassasiyetle dijital dünyaya taşıyoruz. Karar vericiler için akıllı ve parametrik Dijital İkizler."
        breadcrumb={[
          { label: "Çözümler", href: "/cozumler" },
          { label: "Point Cloud to BIM", href: "/cozumler/point-cloud-to-bim" }
        ]}
      />

      {/* Intro Section */}
      <section className="py-24 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <motion.div {...fadeUp} className="lg:w-1/2">
              <span className="text-[var(--color-primary-red)] font-black uppercase tracking-widest text-[10px] bg-red-50 px-4 py-2 rounded-full mb-6 inline-block">Modern Rölöve Teknolojisi</span>
              <h2 className="text-4xl md:text-5xl font-black mb-8 text-slate-900 leading-tight">Geleneksel Rölöve ile Zaman Kaybetmeyin</h2>
              <p className="text-lg text-slate-600 font-medium leading-relaxed mb-6">
                Şerit metrelerle günlerce süren ölçümleri, birleşmeyen köşe noktalarını ve ofise döndüğünüzde fark edilen "eksik ölçü" krizlerini unutun. EOS Proje olarak, fiziksel yapılarınızı milimetrik hassasiyetle dijital dünyaya taşıyoruz.
              </p>
              <p className="text-lg text-slate-600 font-medium leading-relaxed">
                <strong className="text-slate-900">Point Cloud to BIM</strong> hizmetimizle, sahadaki gerçekliği (As-Built), tasarım ve işletme süreçlerinizde kullanabileceğiniz akıllı, parametrik ve bilgi yüklü BIM modellerine dönüştürüyoruz.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="lg:w-1/2 relative"
            >
              <div className="bg-slate-50 rounded-[3rem] p-12 border border-slate-100 shadow-2xl shadow-slate-900/5 relative z-10">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-50 mb-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 bg-[var(--color-primary-red)] rounded-lg flex items-center justify-center text-white">
                      <Zap className="w-5 h-5" />
                    </div>
                    <span className="font-black text-slate-900">Gerçek Zamanlı Veri</span>
                  </div>
                  <p className="text-sm text-slate-500 font-medium italic">"İster tarihi bir restorasyon, ister karmaşık bir endüstriyel tesis olsun; size sadece bir 3D çizim değil, dijital bir ikiz sunuyoruz."</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-50">
                    <span className="block text-2xl font-black text-[var(--color-primary-red)] mb-1">±10mm</span>
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Doğruluk Garantisi</span>
                  </div>
                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-50">
                    <span className="block text-2xl font-black text-[var(--color-primary-red)] mb-1">-%50</span>
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Süre Avantajı</span>
                  </div>
                </div>
              </div>
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-red-100 rounded-full blur-[120px] -z-10 opacity-50"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Before/After Showcase Section */}
      <section className="py-24 px-4 bg-slate-900 border-t border-slate-800">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeUp} className="text-center mb-16">
            <span className="text-[var(--color-primary-red)] font-black uppercase tracking-widest text-[10px] bg-red-900/20 px-4 py-2 rounded-full mb-6 inline-block border border-red-900/30">
              Görsel Dönüşüm
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
              Karmaşadan <span className="text-gradient-red">Netliğe</span>
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto font-medium leading-relaxed">
              Milyonlarca ham noktayı (Point Cloud), projenizde kullanabileceğiniz akıllı ve parametrik BIM elemanlarına nasıl dönüştürdüğümüzü inceleyin.
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <BeforeAfterSlider
              beforeImage="/images/case-studies/eosproje-migros-magazasi-3d-bim-model-scan-to-bim.webp"
              afterImage="/images/case-studies/eosproje-migros-istanbul-revit-bim-model-lod350.webp"
              beforeLabel="Ham Nokta Bulutu (Scan)"
              afterLabel="Revit BIM Modeli"
              alt="Migros Mağaza Scan to BIM Dönüşümü"
            />
            <div className="mt-8 flex justify-center gap-8 text-sm font-medium text-slate-400">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-slate-700"></div>
                <span>Lazer Tarama: ±2mm Hassasiyet</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[var(--color-primary-red)]"></div>
                <span>LOD 300 Modelleme</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why EOS Section */}
      <section className="py-24 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeUp} className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6">Neden EOS Proje ile "Scan to BIM"?</h2>
            <p className="text-lg text-slate-500 max-w-3xl mx-auto font-medium">
              Piyasadaki standart tarama hizmetlerinin aksine, biz süreci sadece veri toplama olarak görmüyoruz. Verinin işlenmesi mühendislik gerektirir.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "'Hayalet Noktalardan' Arındırılmış Veri",
                desc: "Autodesk ReCap ve Leica Cyclone ile veriyi temizleyerek, bilgisayarınızı kasmayan, optimize edilmiş veriler sunuyoruz.",
                icon: <Search className="w-6 h-6" />,
                color: "bg-red-50 text-[var(--color-primary-red)]"
              },
              {
                title: "Sadece Geometri Değil, 'Akıllı' Modeller",
                desc: "Malzemesi, katmanları ve tipi tanımlanmış parametrik Revit aileleri. Metraj alabilir, analiz yapabilirsiniz.",
                icon: <Cpu className="w-6 h-6" />,
                color: "bg-blue-50 text-blue-600"
              },
              {
                title: "Matematiksel Doğrulama (Validation)",
                desc: "Oluşturduğumuz modeli orijinal nokta bulutu ile çakıştırarak Sapma Analizi ve QC raporları sunuyoruz.",
                icon: <ShieldCheck className="w-6 h-6" />,
                color: "bg-green-50 text-green-600"
              }
            ].map((card, idx) => (
              <motion.div
                key={idx}
                {...fadeUp}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 group"
              >
                <div className={`w-14 h-14 ${card.color} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}>
                  {card.icon}
                </div>
                <h3 className="text-xl font-black mb-4 text-slate-900">{card.title}</h3>
                <p className="text-slate-500 font-medium leading-relaxed">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Table Section */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeUp} className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6">4 Adımda Kusursuz Dijitalleşme</h2>
            <p className="text-lg text-slate-500 font-medium">Sürecimiz şeffaf ve denetlenebilir bir akış izler.</p>
          </motion.div>

          <div className="overflow-x-auto rounded-[2.5rem] border border-slate-100">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-900 text-white">
                  <th className="p-8 text-[10px] font-black uppercase tracking-widest border-r border-white/5">Adım</th>
                  <th className="p-8 text-[10px] font-black uppercase tracking-widest border-r border-white/5">İşlem</th>
                  <th className="p-8 text-[10px] font-black uppercase tracking-widest">Teknoloji / Standart</th>
                </tr>
              </thead>
              <tbody className="font-medium">
                {steps.map((step, idx) => (
                  <tr key={idx} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                    <td className="p-8 font-black text-[var(--color-primary-red)] border-r border-slate-100">{idx + 1}</td>
                    <td className="p-8 border-r border-slate-100">
                      <div className="font-black text-slate-900 mb-1">{step.title}</div>
                      <div className="text-sm text-slate-500">{step.desc}</div>
                    </td>
                    <td className="p-8 text-[var(--color-primary-red)] italic text-sm">{step.tech}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Comparison Sections */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeUp} className="mb-16">
            <h2 className="text-3xl font-black text-slate-900 mb-6 text-center">Teknoloji Karşılaştırması</h2>
            <p className="text-center text-slate-500 mb-12">Yapay zeka ve lazer tarama teknolojilerinin geleneksel yöntemlere göre üstünlüğü.</p>

            <ComparisonTable
              title="Geleneksel Rölöve vs. 3D Lazer Tarama"
              headers={["Kriter", "Geleneksel Yöntem (Şerit Metre)", "3D Lazer Tarama (LiDAR)"]}
              data={[
                { feature: "Doğruluk (Hata Payı)", traditional: "±5 - 10 cm (İnsan hatasına açık)", modern: "±1 - 3 mm (Milimetrik hassasiyet)" },
                { feature: "Veri Toplama Hızı", traditional: "500 m² / gün", modern: "10.000 m² / gün (Leica RTC360)" },
                { feature: "Detay Seviyesi", traditional: "Sadece ana ölçüler, detaylar eksik", modern: "Tüm yüzeyler, deformasyonlar, eğrilikler" },
                { feature: "Maliyet / Verim", traditional: "Düşük ilk maliyet, Yüksek Revizyon Maliyeti", modern: "Yüksek ilk maliyet, Sıfır Revizyon" },
                { feature: "Çıktı Formatları", traditional: "2D CAD Çizimi", modern: "3D Nokta Bulutu, BIM Modeli, Dijital İkiz" }
              ]}
            />

            <div className="mt-16"></div>

            <ComparisonTable
              title="Detay Seviyesi (LOD) Karşılaştırması"
              headers={["Kullanım Amacı", "LOD 200 (Konsept)", "LOD 400 (İmalat)"]}
              data={[
                { feature: "Geometrik Detay", traditional: "Genel kütleler, yaklaşık boyutlar", modern: "Birebir imalat ölçüleri, bağlantı detayları" },
                { feature: "Bilgi Yoğunluğu", traditional: "Sadece alan ve hacim bilgisi", modern: "Malzeme, marka, model, montaj tarihi" },
                { feature: "Kullanım Yeri", traditional: "Ruhsat projeleri, etüt çalışmaları", modern: "Uygulama, metraj, çakışma analizi (Clash)" },
                { feature: "Boru/Kanal (MEP)", traditional: "Tek çizgi şematik gösterim", modern: "Askı elemanları, flanşlar, izolasyon detayları" }
              ]}
            />
          </motion.div>
        </div>
      </section>

      {/* LOD Section */}
      <section className="py-24 px-4 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="lg:w-1/3">
              <h2 className="text-4xl font-black text-slate-900 mb-8 leading-tight">Teknik Spesifikasyonlar</h2>
              <p className="text-slate-600 font-medium mb-12">
                Projelerimizde endüstri standardı donanım ve yazılımlar kullanıyoruz.
              </p>

              <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm mb-6">
                <h4 className="font-black text-slate-900 mb-4 border-b border-slate-100 pb-2">Donanım Envanteri</h4>
                <ul className="space-y-3 text-sm font-medium text-slate-600">
                  <li className="flex justify-between"><span>Tarayıcı:</span> <span className="text-slate-900 font-bold">Leica RTC360</span></li>
                  <li className="flex justify-between"><span>Hız:</span> <span className="text-slate-900 font-bold">2 Milyon nokta/sn</span></li>
                  <li className="flex justify-between"><span>Menzil:</span> <span className="text-slate-900 font-bold">130 metre</span></li>
                  <li className="flex justify-between"><span>HDR Görüntü:</span> <span className="text-slate-900 font-bold">5 Bracket 360°</span></li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
                <h4 className="font-black text-slate-900 mb-6 border-b border-slate-100 pb-4">Desteklenen Formatlar</h4>
                <div className="space-y-4">
                  {[
                    { label: "BIM", val: ".RVT, .PLN, .IFC" },
                    { label: "Point Cloud", val: ".RCP, .E57, .LGS" },
                    { label: "CAD", val: ".DWG, .DXF" }
                  ].map((f, i) => (
                    <div key={i} className="flex justify-between items-center text-sm">
                      <span className="font-black text-slate-400">{f.label}</span>
                      <span className="font-bold text-[var(--color-primary-red)] text-right">{f.val}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { lod: "LOD 200", title: "Konsept Tasarım", desc: "Genel kütle, yaklaşık boyutlar. Hızlı hacim etüdleri ve ruhsat projeleri için ideal." },
                { lod: "LOD 300", title: "Kesin Proje", desc: "Spesifik sistemler, doğru miktar ve boyutlar. Standart mimari ve statik projeler." },
                { lod: "LOD 350", title: "Koordinasyon", desc: "Yapı elemanlarının diğer sistemlerle etkileşimi. Çakışma analizleri için gereklidir." },
                { lod: "LOD 400", title: "İmalat Detayı", desc: "Montaj detayları, imalat verisi. Karmaşık MEP ve endüstriyel tesisler için üretim altlığı." },
                { lod: "LOD 500", title: "As-Built (İşletme)", desc: "Sahadaki imalatın birebir dijital ikizi. Tesis yönetimi (FM) verilerini içerir." }
              ].map((item, idx) => (
                <div key={idx} className="bg-white p-8 rounded-[2.5rem] border border-slate-200 hover:border-red-100 transition-all group">
                  <div className="text-[var(--color-primary-red)] font-black mb-3">{item.lod}</div>
                  <h3 className="text-xl font-black mb-4 text-slate-900">{item.title}</h3>
                  <p className="text-sm text-slate-500 font-medium leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sectoral Solutions Section */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeUp} className="text-center mb-20 text-slate-900">
            <h2 className="text-3xl md:text-5xl font-black mb-6">Sektörel Çözümlerimiz</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Landmark className="w-8 h-8" />,
                title: "Mimari ve Renovasyon",
                desc: "Duvar eğriliklerini, döşeme sarkmalarını belgeleyin. Yenileme çalışmalarında sürpriz maliyetlerden kurtulun."
              },
              {
                icon: <Warehouse className="w-8 h-8" />,
                title: "Endüstriyel Tesisler",
                desc: "Karmaşık boru hatlarını milimetrik hassasiyetle modelleyin. Clash Detection ile montaj risklerini ofiste test edin."
              },
              {
                icon: <Paintbrush className="w-8 h-8" />,
                title: "Tarihi Eser (Heritage BIM)",
                desc: "Düzensiz formları ve deformasyonları belgelemek için temassız lazer tarama ile dijital kayıt altına alıyoruz."
              }
            ].map((item, idx) => (
              <div key={idx} className="p-12 bg-slate-50 rounded-[3rem] text-center border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-red-900/5 transition-all duration-500">
                <div className="w-16 h-16 bg-white shadow-sm flex items-center justify-center rounded-2xl mx-auto mb-8 text-[var(--color-primary-red)]">
                  {item.icon}
                </div>
                <h3 className="text-xl font-black mb-6 text-slate-900">{item.title}</h3>
                <p className="text-slate-500 font-medium leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-4 bg-slate-50">
        <div className="max-w-3xl mx-auto">
          <motion.div {...fadeUp} className="text-center mb-16">
            <h2 className="text-4xl font-black text-slate-900 mb-6">Sıkça Sorulan Sorular</h2>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white rounded-[2rem] border border-slate-100 shadow-sm overflow-hidden">
                <button
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full p-8 flex items-center justify-between text-left"
                >
                  <span className="font-black text-slate-900 pr-8">{faq.q}</span>
                  {activeFaq === idx ? <Minus className="w-5 h-5 text-red-600" /> : <Plus className="w-5 h-5 text-red-600" />}
                </button>
                <motion.div
                  initial={false}
                  animate={{ height: activeFaq === idx ? "auto" : 0, opacity: activeFaq === idx ? 1 : 0 }}
                  className="overflow-hidden"
                >
                  <div className="p-8 pt-0 text-slate-500 font-medium border-t border-slate-50 mt-4 leading-relaxed">
                    {faq.a}
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="bg-[var(--color-deep-charcoal)] rounded-[4rem] p-12 md:p-20 text-center relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-black text-white mb-8">🚀 Projenizi Riske Atmayın, Dijitalleştirin</h2>
              <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto font-medium">
                Sürpriz şantiye maliyetlerini önlemek ve mevcut yapınızın gerçek durumunu belgelemek için EOS Proje uzmanlığına güvenin.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <Link href="/iletisim" className="px-10 py-5 bg-[var(--color-primary-red)] text-white font-black rounded-2xl hover:bg-red-800 transition-all flex items-center justify-center gap-3">
                  Ücretsiz Keşif Alın
                </Link>
                <a href="https://wa.me/905306642263" target="_blank" rel="noopener noreferrer" className="px-10 py-5 bg-white text-slate-900 font-black rounded-2xl hover:bg-slate-100 transition-all flex items-center justify-center gap-3">
                  WhatsApp ile Sorun
                </a>
              </div>
            </div>
            {/* Background pattern */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-red-600/5 -skew-x-12 translate-x-1/2"></div>
          </div>
        </div>
      </section>
    </div>
  );
}