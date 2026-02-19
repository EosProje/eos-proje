"use client";

import SubPageHero from "@/components/SubPageHero";
import { Settings, Cpu, ArrowRight, Factory, Gauge, Wrench, CheckCircle2, AlertTriangle } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <SubPageHero
        title="Endüstriyel Ekipman ve MEP Modelleme"
        description="Fabrika ve tesislerdeki karmaşık makine parkuru, boru hatları ve MEP sistemleri için yüksek detaylı 3D modelleme ve as-built dokümantasyon hizmetleri."
        category="Çözümlerimiz"
        breadcrumb={[
          { label: "Çözümler", href: "/cozumler" },
          { label: "Endüstriyel Ekipman", href: "/cozumler/endustriyel-ekipman-modelleme" }
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 py-20">
        {/* Giriş */}
        <div className="prose prose-lg max-w-none mb-20">
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            Endüstriyel tesislerde proses ekipmanlarının, makine gruplarının, boru hatlarının ve MEP (Mekanik, Elektrik, Tesisat)
            sistemlerinin doğru bir şekilde modellenmesi, tesis genişletme, modernizasyon ve bakım-onarım süreçlerinin başarısı
            için kritik öneme sahiptir. Geleneksel 2D çizimlerle bu karmaşık sistemleri yönetmek, clash detection yapamama,
            montaj sırası planlayamama ve bakım erişim noktalarını belirleyememe gibi ciddi operasyonel risklere yol açar.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed">
            Lazer tarama teknolojisi ve Revit MEP/Plant 3D yazılımlarının birle şimiyle, fabrika içindeki tüm ekipmanlar
            milimetrik hassasiyette 3D modellere dönüştürülür. Bu modeller, sadece görsel temsil değil; her ekipmanın teknik
            şartnamesi, bakım periyodu, üretici bilgisi gibi verileri de içeren akıllı dijital varlıklardır.
          </p>
        </div>

        {/* Uzmanlık Alanlarımız */}
        <div className="mb-24">
          <h2 className="text-3xl font-black text-slate-900 mb-12">Endüstriyel Modelleme Uzmanlık Alanlarımız</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="bg-gradient-to-br from-orange-50 to-red-50 p-10 rounded-3xl border border-orange-100">
              <div className="w-14 h-14 bg-orange-600 rounded-xl flex items-center justify-center text-white mb-6">
                <Factory className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-4">Proses Ekipmanları</h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                Reaktörler, tanklar, separatörler, heat exchanger'lar, kolonlar, filtreler modellenir. Her ekipmanın flange
                bağlantı noktaları (nozzle), destek ayakları, platformlar ve merdiven erişim yolları detaylandırılır.
              </p>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />Basınçlı tanklar (ASME kod uyumlu)</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />Distilasyon kolonları</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />Kimyasal reaktörler</li>
              </ul>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
              className="bg-gradient-to-br from-blue-50 to-cyan-50 p-10 rounded-3xl border border-blue-100">
              <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center text-white mb-6">
                <Gauge className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-4">Boru Hatları (Piping)</h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                Proses, havalandırma, soğutma suyu, buhar ve kimyasal transfer hatları ISO standartlarına uygun modellenir.
                Vana, flanş, manometre, pressure relief valve gibi fittings gösterilir.
              </p>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />Piping isometrik çizimleri</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />Vana ve fitting schedule</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />Basınç düşüm analizi desteği</li>
              </ul>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-green-50 to-emerald-50 p-10 rounded-3xl border border-green-100">
              <div className="w-14 h-14 bg-green-600 rounded-xl flex items-center justify-center text-white mb-6">
                <Wrench className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-4">Mekanik Ekipmanlar</h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                Pompalar, kompresörler, türbinler, jeneratörler, konveyörler, vinçler ve taşıma sistemleri modellenir.
                Titreşim izolasyonu, motor foundation ve coupling detayları gösterilir.
              </p>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />Santrifüj pompalar (kapasiteleriyle)</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />Hava kompresörleri</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />Konveyör bantları ve ellerler</li>
              </ul>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
              className="bg-gradient-to-br from-purple-50 to-pink-50 p-10 rounded-3xl border border-purple-100">
              <div className="w-14 h-14 bg-purple-600 rounded-xl flex items-center justify-center text-white mb-6">
                <Cpu className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-4">HVAC ve MEP Sistemleri</h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                Havalandırma kanalları, klima santralleri, elektrik pano dağıtımları, aydınlatma sistem ve yangın söndürme
                hatları modellenir. Tavan boşluğu (plenum) clash detection'ı yapılabilir.
              </p>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />HVAC duct routing</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />Elektrik tray ve kablo güzergahları</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />Sprinkler ve yangın tesisatı</li>
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Süreç */}
        <div className="mb-24">
          <h2 className="text-3xl font-black text-slate-900 mb-12">Endüstriyel Modelleme Sürecimiz</h2>
          <div className="space-y-6">
            {[
              { title: "Saha Tarama ve Veri Toplama", desc: "Leica lazer tarayıcılarla tesis taranır. Ekipman nameplateleri fotoğraflanır. P&ID (Piping & Instrumentation Diagram) ve PFD (Process Flow Diagram) çizimleri toplanır. Operasyon ekibinden süreç bilgileri alınır." },
              { title: "Nokta Bulutu İşleme", desc: "Tarama noktaları birleştirilir (registration). Ekipman sınırları isolation işlemiyle ayrıştırılır. Her makine veya tank grubuna özel segment oluşturulur. Gölgeli bölgeler tespit edilir ve gerekirse ek tarama yapılır." },
              { title: "Equipment Family Oluşturma", desc: "Revit veya Plant 3D'de custom equipment families oluşturulur. Pompalar için suction/discharge flange pozisyonları, motor gücü parametreleri eklenir. Tank modellerde level indicator, manway, vent konumları tanımlanır." },
              { title: "Piping Modelleme", desc: "Boru hatları spec'e göre modellenir (çap, malzeme, basınç sınıfı). Vana, flanş, reducers, tee'ler doğru konumlara yerleştirilir. Pipe support (askı noktaları) modelde gösterilir. Isometrik çizimleri otomatik üretilir." },
              { title: "MEP Koordinasyon", desc: "HVAC duct, elektrik tray, sprinkler hatları modele eklenir. Navisworks'te multi-disiplin clash detection yapılır. Kritik çakışmalar raporlanır ve çözüm önerileri sunulur." },
              { title: "Parametrik Veri Girişi", desc: "Her ekipmana TAG numarası, üretici, model, seri no, kurulum tarihi, bakım periyodu parametreleri girilir. Bu veriler Schedule'larda raporlanır ve CMMS (Computerized Maintenance Management System) yazılımlarına export edilir." }
            ].map((step, idx) => (
              <div key={idx} className="flex items-start gap-6 bg-slate-50 p-8 rounded-2xl hover:bg-white hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-[var(--color-primary-red)] text-white rounded-2xl flex items-center justify-center font-black flex-shrink-0">{idx + 1}</div>
                <div>
                  <h3 className="text-xl font-black text-slate-900 mb-3">{step.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Kullanım Alanları */}
        <div className="mb-24 bg-slate-900 rounded-[3rem] p-12 md:p-16 text-white">
          <h2 className="text-3xl font-black mb-8">Endüstriyel Ekipman Modellerinin Kullanım Alanları</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-black text-orange-400 mb-4 uppercase tracking-wider">Tesis Genişletme Projeleri</h3>
              <p className="text-slate-300 leading-relaxed">
                Yeni üretim hattı eklenirken eski ekipmanların konumu hassas bilinmelidir. BIM modeli sayesinde yeni tank veya
                makineler mevcut yapıyla clash-free şekilde tasarlanır. Yapısal destek noktaları (column, beam) üzerinde
                yük analizi yapılabilir.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-black text-blue-400 mb-4 uppercase tracking-wider">Bakım ve Onarım Planlaması</h3>
              <p className="text-slate-300 leading-relaxed">
                3D modelde vana, pompa, motor gibi kritik ekipmanların konumu bellidir. Bakım ekipleri modele bakarak erişim
                rotası planlayabilir, gerekli alet-ekipmanı önceden hazırlayabilir. Duruş (shutdown) süresi minimize edilir.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-black text-green-400 mb-4 uppercase tracking-wider">Güvenlik ve Operasyon Eğitimi</h3>
              <p className="text-slate-300 leading-relaxed">
                Sanal reality (VR) ortamında personele tesis tanıtımı yapılabilir. Acil durum senaryoları (yangın, sizinti)
                simüle edilir. Yeni işe başlayan operatörler, gerçek tesise girmeden önce model üzerinde eğitim alır.
              </p>
            </div>
          </div>
        </div>

        {/* Zorluklar */}
        <div className="mb-24">
          <h2 className="text-3xl font-black text-slate-900 mb-8">Endüstriyel Modelleme Zorlukları</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-yellow-500 bg-yellow-50 p-6 rounded-r-2xl flex items-start gap-4">
              <AlertTriangle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-black text-slate-900 mb-2">Yoğun Tesisat ve Cable Tray Kaosları</h3>
                <p className="text-slate-700">
                  Petrokimya tesislerinde binlerce boru hattı birbiri üzerinden geçer. Nokta bulutunda her boruyu ayırt etmek zordur.
                  Manuel segmentation ve P&ID referansıyla çapraz kontrol gerekir.
                </p>
              </div>
            </div>
            <div className="border-l-4 border-orange-500 bg-orange-50 p-6 rounded-r-2xl flex items-start gap-4">
              <AlertTriangle className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-black text-slate-900 mb-2">Tesis Operasyon Sırasında Tarama</h3>
                <p className="text-slate-700">
                  Üretim durdurulamıyorsa, hareketli ekipmanlar (konveyörler, robotlar) sırasında tarama yapılır. Bu durumda hareket
                  bulanıklığı (motion blur) oluşur. Statik scan stratejisi planlanmalı, ekipman dururken kritik noktalar çekilmeli.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-br from-orange-600 to-red-700 rounded-[3rem] p-16 text-white text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,.05)_50%,transparent_75%,transparent_100%)] bg-[length:250%_250%,100%_100%] animate-shimmer"></div>
          <div className="relative z-10">
            <h3 className="text-4xl font-black mb-6">Endüstriyel Tesisinizi 3D Modele Taşıyın</h3>
            <p className="text-orange-100 mb-10 max-w-2xl mx-auto text-lg leading-relaxed">
              Karmaşık makine parkurunuzu, boru hatlarınızı ve MEP sistemlerinizi hassas 3D modellere dönüştürelim.
              Ücretsiz saha keşfi ve fizibilite analizi için iletişime geçin.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/iletisim" className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-white text-orange-700 font-black rounded-2xl hover:bg-slate-100 transition-all shadow-2xl">
                Ücretsiz Keşif Talep Edin <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/sektorler/endustriyel-tesis" className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-white/10 backdrop-blur text-white font-black rounded-2xl hover:bg-white/20 transition-all border-2 border-white/30">
                Endüstriyel Sektör Projelerimiz
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}