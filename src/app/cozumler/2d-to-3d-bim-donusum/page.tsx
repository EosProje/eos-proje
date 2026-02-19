"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Files,
  Cpu,
  Layers,
  ShieldCheck,
  Activity,
  Settings,
  HelpCircle,
  ArrowRight,
  Zap,
  CheckCircle2,
  Database,
  Search,
  Plus,
  Minus,
  FileCode,
  Layout,
  HardHat
} from "lucide-react";
import SubPageHero from "@/components/SubPageHero";
import { EASE_CURVES } from "@/lib/animations";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: EASE_CURVES.smooth }
};

export default function CADtoBimPage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const lodLevels = [
    {
      level: "LOD 200",
      title: "Konsept",
      desc: "Kütlesel Modelleme: Elemanlar yaklaşık miktar, boyut, şekil ve konumla modellenir. Hacim etüdleri için idealdir."
    },
    {
      level: "LOD 300",
      title: "Kesin Proje",
      desc: "Spesifik Sistemler: Elemanlar kesin boyut, şekil ve konumla modellenir. Ruhsat projeleri için standarttır."
    },
    {
      level: "LOD 350",
      title: "Koordinasyon",
      desc: "İnşaat Öncesi Koordinasyon: Elemanların diğer sistemlerle arayüzleri modellenir. Çakışma testleri için gereklidir."
    },
    {
      level: "LOD 400",
      title: "İmalat",
      desc: "Üretim Detayı: Detaylandırma, fabrikasyon, montaj ve kurulum bilgilerini içerir. Çelik ve prefabrik yapılar için."
    }
  ];

  const workflow = [
    { title: "Veri Analizi ve Temizlik", desc: "Mevcut CAD (.dwg) veya PDF dosyalarınızdaki katman yapısı incelenir, eksik ölçüler tespit edilir." },
    { title: "BIM Uygulama Planı (BEP)", desc: "Proje başında yazılım versiyonu ve family standartlarını belirleyen yol haritası çıkarılır." },
    { title: "Parametrik Modelleme", desc: "2D altlıklar referans alınarak mimari, statik ve MEP elemanları akıllı familyalarla 3. boyuta taşınır." },
    { title: "Kalite Kontrol (QA/QC)", desc: "Orijinal 2D çizimlerle tutarlılık denetlenir, Solibri veya Navisworks ile mantıksal veri kontrolü yapıyoruz." }
  ];

  const faqs = [
    { q: "2D çizimlerim güncel değilse ne yapmalısınız?", a: "Eğer elinizdeki projeler mevcut durumu yansıtmıyorsa, Scan to BIM hizmetimizi öneriyoruz. Lazer tarama ile binanın milimetrik röntgenini çekip modeli bu gerçek veri üzerine kuruyoruz." },
    { q: "Dönüşüm maliyeti neye göre belirlenir?", a: "Maliyet; toplam metrekare, istenen LOD seviyesi ve projenin disiplin yoğunluğuna (Sadece mimari mi, yoksa MEP dahil mi?) göre değişir." },
    { q: "Sadece mimari mi çalışıyorsunuz?", a: "Hayır. EOS Proje, Mimari, Statik ve MEP disiplinlerinin tamamında modelleme yapar. MEP dönüşümü renovasyonlarda hayati önem taşır." },
    { q: "Hangi dosya formatlarını teslim ediyorsunuz?", a: "BEP planına göre; düzenlenebilir .RVT (Revit), .PLN (ArchiCAD), .NWD (Navisworks) ve açık veri paylaşımı için .IFC formatlarında teslimat yapıyoruz." }
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-[var(--color-deep-charcoal)]">
      <SubPageHero
        category="Mühendislik Çözümleri"
        title="2D CAD'den 3D BIM'e Dönüşüm"
        description="Çizgisel veriden akıllı yapı yönetimine geçiş yapın. Düz .DWG dosyalarınızı bilgi yüklü parametrik modellere dönüştürüyoruz."
        breadcrumb={[
          { label: "Çözümler", href: "/cozumler" },
          { label: "2D to 3D BIM Dönüşüm", href: "/cozumler/2d-to-3d-bim-donusum" }
        ]}
      />

      {/* Intro Section */}
      <section className="py-24 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <motion.div {...fadeUp} className="lg:w-1/2">
              <span className="text-red-600 font-black uppercase tracking-widest text-[10px] bg-red-50 px-4 py-2 rounded-full mb-6 inline-block">Dijital Dönüşüm</span>
              <h2 className="text-4xl md:text-5xl font-black mb-8 text-slate-900 leading-tight">Düz .DWG Dosyalarından Fazlasını İsteyin</h2>
              <p className="text-lg text-slate-600 font-medium leading-relaxed mb-6">
                İnşaat endüstrisi "çizim" çağından "bilgi" çağına geçti. Ancak pek çok değerli proje, hala 2D CAD dosyalarında sıkışıp kalmış durumda. EOS Proje olarak, mevcut 2D arşivinizi sadece üç boyutlu hale getirmiyoruz.
              </p>
              <p className="text-lg text-slate-600 font-medium leading-relaxed">
                Onları <strong className="text-slate-900">ISO 19650</strong> standartlarına uyumlu, metraj verebilen, çakışma analizi yapabilen ve tesis yönetimine (FM) hazır Akıllı BIM Modellerine dönüştürüyoruz.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="lg:w-1/2 relative"
            >
              <div className="bg-slate-50 rounded-[3rem] p-12 border border-slate-100 shadow-2xl shadow-slate-900/5 relative z-10">
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-50 flex items-start gap-6">
                  <div className="w-14 h-14 bg-red-600 rounded-xl flex items-center justify-center text-white flex-shrink-0">
                    <Database className="w-7 h-7" />
                  </div>
                  <div>
                    <h4 className="font-black text-slate-900 mb-2">Yapılarınızın "Dijital DNA"sı</h4>
                    <p className="text-sm text-slate-500 font-medium">Biz, "duvar" olarak çizilmiş iki çizgiyi, yangın dayanım sınıfı ve malzeme katmanları tanımlanmış parametrik bir BIM ailesine evriltiyoruz.</p>
                  </div>
                </div>
              </div>
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-red-100 rounded-full blur-[120px] -z-10 opacity-50"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why CAD to BIM Section */}
      <section className="py-24 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeUp} className="text-center mb-20 text-slate-900">
            <h2 className="text-3xl md:text-5xl font-black mb-6">Neden EOS Proje ile CAD to BIM?</h2>
            <p className="text-lg text-slate-500 max-w-3xl mx-auto font-medium">Teknik farkımız; doğruluk, tam entegrasyon ve uluslararası standartlara tam uyumdur.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              {
                title: "Semantik Veri Üretiyoruz",
                desc: "Sadece geometri değil, LOD standartlarına uygun parametreler ekliyoruz. Metraj ve mahal listeleriniz modelden otomatik çekilir.",
                icon: <FileCode className="w-8 h-8" />,
                color: "text-red-600"
              },
              {
                title: "Disiplinlerarası Çakışma Analizi",
                desc: "Mimari, statik ve MEP projelerini 3D ortamda birleştirir, Navisworks ile fiziksel çakışmaları şantiye öncesi ofiste çözeriz.",
                icon: <Layers className="w-8 h-8" />,
                color: "text-red-600"
              },
              {
                title: "Yazılım Interoperabilite",
                desc: "Revit, ArchiCAD veya Tekla kullanarak yerel formatların yanı sıra evrensel IFC formatında kayıpsız teslimat yapıyoruz.",
                icon: <Settings className="w-8 h-8" />,
                color: "text-green-600"
              }
            ].map((card, idx) => (
              <motion.div
                key={idx}
                {...fadeUp}
                className="bg-white p-12 rounded-[3.5rem] border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500"
              >
                <div className={`mx-auto w-16 h-16 flex items-center justify-center mb-8 ${card.color}`}>
                  {card.icon}
                </div>
                <h3 className="text-2xl font-black mb-6 text-slate-900 leading-tight">{card.title}</h3>
                <p className="text-slate-500 font-medium leading-relaxed">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* LOD Table Section */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeUp} className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6">LOD Standartları: Bütçenizi Akıllı Yönetin</h2>
            <p className="text-lg text-slate-500 font-medium max-w-3xl mx-auto">BIM Forum standartlarını esas alarak projenize en uygun detay seviyesini (LOD Specification 2019) belirliyoruz.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {lodLevels.map((item, idx) => (
              <motion.div
                key={idx}
                {...fadeUp}
                transition={{ delay: idx * 0.1 }}
                className="p-8 bg-slate-50 rounded-[2rem] border border-slate-100 hover:bg-white hover:border-red-100 hover:shadow-xl transition-all group"
              >
                <div className="text-red-600 font-black text-lg mb-4">{item.level}</div>
                <h3 className="text-xl font-black text-slate-900 mb-4">{item.title}</h3>
                <p className="text-sm text-slate-500 font-medium leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="py-24 px-4 bg-slate-900 text-white rounded-[4rem] mx-4 overflow-hidden relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div {...fadeUp} className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-black mb-6">2D'den Dijital İkize Yolculuk</h2>
            <p className="text-slate-400 font-medium">Uçtan uca şeffaf ve profesyonel çalışma süreci.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {workflow.map((step, idx) => (
              <div key={idx} className="relative group">
                <div className="text-8xl font-black text-white/5 absolute -top-10 -left-6 group-hover:text-red-500/10 transition-colors">{idx + 1}</div>
                <div className="relative">
                  <h3 className="text-xl font-black mb-6 flex items-center gap-3">
                    <span className="w-10 h-10 bg-red-600 rounded-xl flex items-center justify-center text-sm">{idx + 1}</span>
                    {step.title}
                  </h3>
                  <p className="text-slate-400 font-medium text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Decorative background element */}
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-red-600/10 rounded-full blur-[150px] translate-x-1/2 translate-y-1/2"></div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <motion.div {...fadeUp} className="text-center mb-16 text-slate-900">
            <h2 className="text-4xl font-black mb-6">Sıkça Sorulan Sorular</h2>
            <p className="text-slate-500 font-medium italic">2D to 3D Dönüşüm Süreci Hakkında Merak Edilenler</p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-slate-50 rounded-[2rem] border border-slate-100 overflow-hidden">
                <button
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full p-8 flex items-center justify-between text-left group"
                >
                  <span className="font-black text-slate-900 pr-8 group-hover:text-red-600 transition-colors uppercase text-sm tracking-wide">{faq.q}</span>
                  {activeFaq === idx ? <Minus className="w-5 h-5 text-red-600" /> : <Plus className="w-5 h-5 text-red-600" />}
                </button>
                <motion.div
                  initial={false}
                  animate={{ height: activeFaq === idx ? "auto" : 0, opacity: activeFaq === idx ? 1 : 0 }}
                  className="overflow-hidden"
                >
                  <div className="p-8 pt-0 text-slate-600 font-medium leading-relaxed border-t border-slate-200/50 mt-4">
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
          <div className="bg-[var(--color-primary-red)] rounded-[4rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl shadow-red-900/40">
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-black text-white mb-8">Projenizi Geleceğe Taşıyın</h2>
              <p className="text-xl text-red-100 mb-12 max-w-2xl mx-auto font-medium">
                Arşivinizdeki çizgileri, yönetilebilir veriye dönüştürmek bir masraf değil, projenizin yaşam döngüsüne yapılan bir yatırımdır.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <Link href="/iletisim" className="px-10 py-5 bg-white text-red-600 font-black rounded-2xl hover:bg-slate-50 transition-all flex items-center justify-center gap-3">
                  Ücretsiz Proje Analizi Alın
                </Link>
                <a href="https://wa.me/905306642263" target="_blank" rel="noopener noreferrer" className="px-10 py-5 bg-red-900/40 backdrop-blur text-white font-black rounded-2xl hover:bg-red-900/60 transition-all flex items-center justify-center gap-3">
                  WhatsApp ile Sorun
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}