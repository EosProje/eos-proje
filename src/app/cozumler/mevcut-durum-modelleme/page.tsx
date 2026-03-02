"use client";

import SubPageHero from "@/components/SubPageHero";
import { Layers, CheckCircle2, ArrowRight, Building2, Factory, Ruler, Clock, FileCheck, Shield } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { SampleFilesDownload } from "@/components/SampleFilesDownload";

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <SubPageHero
        title="As-Built Modelleme Hizmetleri"
        description="Mevcut yapıların gerçek durumunu milimetrik hassasiyetle dijitalleştiriyoruz. Renovasyon, restorasyon ve tesis yönetimi projeleri için güvenilir as-built dokümantasyon çözümleri."
        category="Çözümlerimiz"
        breadcrumb={[
          { label: "Çözümler", href: "/cozumler" },
          { label: "Mevcut Durum Modelleme", href: "/cozumler/mevcut-durum-modelleme" }
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 py-20">
        {/* Giriş Metni */}
        <div className="prose prose-lg max-w-none mb-20">
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            As-built modelleme, yapıların mevcut fiziksel durumunu dijital ortama aktararak proje paydaşlarına doğru
            ve güncel dokümantasyon sunan kritik bir süreçtir. Özellikle renovasyon, modernizasyon, genişletme ve
            restorasyon projelerinde, güncel zemin durumunun bilinmesi projenin başarısı açısından hayati öneme sahiptir.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            Geleneksel ölçüm yöntemleriyle yapılan as-built çalışmalarda insan kaynaklı hatalar, tamamlanmamış
            veriler ve zaman kayıpları sıklıkla karşılaşılan sorunlardır. Lazer tarama teknolojisi ve BIM metodolojilerinin
            bir araya geldiği modern as-built süreçlerde ise, yapının her detayı milimetrik doğrulukla kaydedilir ve
            üç boyutlu parametrik modellere dönüştürülür. Bu sayede proje ekipleri, tasarım aşamasından bakım-onarıma
            kadar tüm süreçlerde güvenilir verilere dayanarak karar alabilir.
          </p>
        </div>

        {/* Ana Özellikler */}
        <div className="mb-24">
          <h2 className="text-3xl font-black text-slate-900 mb-12">As-Built Modelleme Sürecimizin Avantajları</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-slate-50 p-10 rounded-3xl border border-slate-100"
            >
              <div className="w-14 h-14 bg-[var(--color-primary-red)] rounded-xl flex items-center justify-center text-white mb-6">
                <Ruler className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-4">Milimetrik Doğruluk Garantisi</h3>
              <p className="text-slate-600 leading-relaxed">
                Leica ve Faro marka lazer tarayıcılarla gerçekleştirdiğimiz ölçümlerde ±2mm doğruluk standardını yakalıyoruz.
                Her nokta bulutu verisi, bağımsız kontrol noktalarıyla doğrulanır ve sapma analizi raporlarıyla teslim edilir.
                Bu seviyedeki hassasiyet, özellikle endüstriyel tesislerde ekipman yerleşim planlaması ve MEP sistemlerinin
                çakışma kontrolünde kritik öneme sahiptir.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-slate-50 p-10 rounded-3xl border border-slate-100"
            >
              <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center text-white mb-6">
                <Clock className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-4">Hızlı Teslimat ve Verimlilik</h3>
              <p className="text-slate-600 leading-relaxed">
                Geleneksel ölçüm yöntemlerine kıyasla %70'e varan zaman tasarrufu sağlıyoruz. Ortalama 5.000 m² bir endüstriyel
                tesisin taranması 2-3 gün, modelleme süreci ise 7-10 iş gününde tamamlanıyor. Veri toplama sürecinde tesis
                operasyonlarını minimum düzeyde etkiliyoruz; çoğu durumda üretim durmadan tarama işlemleri gerçekleştirilebiliyor.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-slate-50 p-10 rounded-3xl border border-slate-100"
            >
              <div className="w-14 h-14 bg-green-600 rounded-xl flex items-center justify-center text-white mb-6">
                <FileCheck className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-4">Kapsamlı Dokümantasyon</h3>
              <p className="text-slate-600 leading-relaxed">
                Sadece 3D model değil, projenizin ihtiyacına göre esnek teslimat formatları sunuyoruz: Revit (.rvt) parametrik
                modeller, IFC standart formatı, AutoCAD (.dwg) planları, PDF teknik çizimler, nokta bulutu ham verisi (.e57, .rcs)
                ve panoramik fotoğraf dosyaları. Her teslimat paketi, ölçüm raporu, sapma analizi ve QA/QC dokümantasyonu ile birlikte gelir.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-slate-50 p-10 rounded-3xl border border-slate-100"
            >
              <div className="w-14 h-14 bg-purple-600 rounded-xl flex items-center justify-center text-white mb-6">
                <Shield className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-4">Çok Katmanlı Kalite Kontrolü</h3>
              <p className="text-slate-600 leading-relaxed">
                Her proje çıktısı, üç aşamalı QA/QC sürecinden geçer: modelleme ekibi tarafından iç kontrol, bağımsız
                kalite kontrol uzmanı tarafından geometrik doğrulama ve son olarak nokta bulutu ile model overlay karşılaştırması.
                Revit Warnings sıfırlanır, clash detection yapılır ve BIM standartlarına uygunluk test edilir.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Uygulama Alanları */}
        <div className="mb-24">
          <h2 className="text-3xl font-black text-slate-900 mb-12">As-Built Modellerimizin Kullanım Alanları</h2>
          <div className="space-y-6">
            <div className="bg-white border-2 border-slate-100 rounded-3xl p-10 hover:border-red-100 transition-all">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Building2 className="w-6 h-6 text-[var(--color-primary-red)]" />
                </div>
                <div>
                  <h3 className="text-xl font-black text-slate-900 mb-3">Renovasyon ve Modernizasyon Projeleri</h3>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    Eski yapıların yenilenmesi sürecinde en büyük risk, mevcut durumun yanlış anlaşılmasıdır.
                    As-built modelimiz, duvar kalınlıklarından tavan yüksekliklerine, mevcut tesisat güzergahlarından
                    yapısal elemanların konumlarına kadar tüm kritik bilgileri içerir. Mimari ekipler, yeni tasarımlarını
                    gerçek veriler üzerinden geliştirebilir; böylece saha şartlarından kaynaklı revizyonlar minimum seviyeye iner.
                  </p>
                  <p className="text-slate-600 leading-relaxed">
                    Özellikle tarihi binalarda, orijinal yapı elemanlarının korunması gereken kısımları detaylı bir şekilde
                    modelleyerek restorasyon çalışmalarına teknik altyapı sağlıyoruz. Model üzerinde yapılan müdahale
                    simülasyonları, koruma kurullarına sunulacak raporların hazırlanmasında bize ciddi avantaj kazandırıyor.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white border-2 border-slate-100 rounded-3xl p-10 hover:border-red-100 transition-all">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Factory className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-black text-slate-900 mb-3">Endüstriyel Tesis Genişletme Projeleri</h3>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    Fabrikalarda yeni üretim hatlarının eklenmesi veya mevcut sistemlerin modernizasyonunda, yapısal taşıyıcı
                    sistemin detaylı bilinmesi şarttır. Kolon-kiriş sistemlerini, mevcut köprü vinç raylarını, platform seviyelerini
                    ve alt yapı bağlantı noktalarını tam koordinatlarıyla modelleyerek çelik konstrüksiyon ve makine montaj
                    çalışmalarına doğru zemin bilgisi sağlıyoruz.
                  </p>
                  <p className="text-slate-600 leading-relaxed">
                    Ayrıca prosesi durmadan yapılan tarama işlemleri sayesinde, aktif üretim alanlarında bile as-built dokümantasyon
                    oluşturabiliyoruz. Mevcut konveyör sistemleri, boru hatları ve elektrik panoları modelde yer alır; yeni ekipmanların
                    clash-free şekilde tasarlanması mümkün hale gelir.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white border-2 border-slate-100 rounded-3xl p-10 hover:border-red-100 transition-all">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-black text-slate-900 mb-3">Tesis Yönetimi ve FM (Facility Management)</h3>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    Büyük kampüslerde, hastane komplekslerinde veya ticari binalarda bakım-onarım ekiplerinin işini kolaylaştıracak
                    dijital ikiz oluşturuyoruz. BIM modelinde her odanın net alanı, kapı-pencere sayıları, klima cihazlarının konumları,
                    yangın alarm noktaları gibi kritik FM verileri bulunur. Bu bilgiler COBie formatında export edilerek bina yönetim
                    sistemlerine entegre edilebilir.
                  </p>
                  <p className="text-slate-600 leading-relaxed">
                    Periyodik tarama yapılan tesislerde, değişimin takibi de mümkün oluyor. Altı ay veya bir yıl arayla yapılan
                    taramaların karşılaştırılmasıyla, yapılan ilaveler, kaldırılan elemanlar ve değişen işlevler otomatik olarak tespit edilebilir.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Süreç Detayları */}
        <div className="mb-24">
          <h2 className="text-3xl font-black text-slate-900 mb-12">As-Built Modelleme Süreç Adımlarımız</h2>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[var(--color-primary-red)] to-slate-200"></div>
            <div className="space-y-12">
              {[
                {
                  num: "01",
                  title: "Ön Görüşme ve Kapsam Belirleme",
                  content: "Proje sahasıyla ilgili detaylı bilgi alışverişi yapılır. İstenen LOD seviyesi, teslimat formatları, kritik alanlar ve özel gereksinimler netleştirilir. Varsa mevcut CAD çizimleri ve önceki raporlar incelenir. Tarama planı ve zaman çizelgesi oluşturulur."
                },
                {
                  num: "02",
                  title: "Saha Tarama ve Veri Toplama",
                  content: "Leica RTC360 veya Faro Focus cihazlarımızla nokta bulutu verisi toplanır. Her tarama noktası, GPS koordinatlarıyla referanslanır ve birbiriyle otomatik kayıt (registration) yapılır. Ortalama scan çözünürlüğü: 6mm @ 10m mesafe. Tarama sırasında renkli panoramik fotoğraflar da kayıt edilir."
                },
                {
                  num: "03",
                  title: "Veri İşleme ve Kayıt (Registration)",
                  content: "Cyclone, ReCap Pro veya Leica Register yazılımlarında tüm tarama noktaları birleştirilir. Target-based ve cloud-to-cloud kayıt yöntemleri kombinasyonuyla referans hataları 3mm altına çekilir. Outlier noktalar temizlenir, gölgeli bölgeler tespiti yapılır, gerekirse ek tarama planlanır."
                },
                {
                  num: "04",
                  title: "3D Modelleme (LOD 200-350)",
                  content: "Revit ortamında nokta bulutu altlık olarak kullanılarak parametrik model oluşturulur. Duvarlar, kirişler, kolonlar, kapı-pencereler, merdiven ve rampa gibi mimari elemanlar; mekanik cihazlar, boru hatları, elektrik panoları gibi MEP elemanlar; yapısal çelik, betonarme detaylar modellenir. Her elemana uygun Revit Families atanır."
                },
                {
                  num: "05",
                  title: "Sapma Analizi ve Kalite Kontrol",
                  content: "CloudCompare yazılımıyla model ile nokta bulutu arasında mesh-to-cloud karşılaştırması yapılır. Renkli sapma haritası oluşturulur; kabul edilebilir tolerans dışındaki noktalar revize edilir. Revit model sağlığı kontrolü (Warnings, inconsistencies), clash detection ve IFC export doğrulaması gerçekleştirilir."
                },
                {
                  num: "06",
                  title: "Teslimat Paketi Hazırlama",
                  content: "RVT modeli, Sheet'ler üzerinde plan, kesit ve görünüşler oluşturularak PDF'e basılır. IFC2x3 veya IFC4 export yapılır. Navisworks için .nwc dosyası hazırlanır. Nokta bulutu ham verisi (.e57 universal format) ve proje raporu (kapsam, kullanılan cihazlar, doğruluk metrikleri, sapma analiz sonuçları) teslim edilir."
                }
              ].map((step, idx) => (
                <div key={idx} className="relative pl-24">
                  <div className="absolute left-0 w-16 h-16 bg-[var(--color-primary-red)] rounded-2xl flex items-center justify-center">
                    <span className="text-white text-xl font-black">{step.num}</span>
                  </div>
                  <div className="bg-slate-50 p-8 rounded-2xl">
                    <h3 className="text-xl font-black text-slate-900 mb-3">{step.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{step.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Teknik Detaylar */}
        <div className="mb-24 bg-slate-900 rounded-[3rem] p-12 md:p-16 text-white">
          <h2 className="text-3xl font-black mb-8">Teknik Özellikler ve Standartlar</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-black text-red-400 mb-4 uppercase tracking-wider">Kullanılan Ekipmanlar</h3>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                  <span>Leica RTC360 Lazer Tarayıcı (2mm @ 10m hassasiyet)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                  <span>Faro Focus Premium (HDR panoramik fotoğraf desteği)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                  <span>GPS/Total Station entegrasyonu (jeodezik referanslama)</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-black text-red-400 mb-4 uppercase tracking-wider">Yazılım Altyapısı</h3>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                  <span>Autodesk Revit 2024 (BIM modelleme)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                  <span>Leica Cyclone / Autodesk ReCap Pro (nokta bulutu işleme)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                  <span>CloudCompare (sapma analizi ve kalite kontrol)</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-black text-red-400 mb-4 uppercase tracking-wider">Teslimat Formatları</h3>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                  <span>Revit (.rvt) - Native parametrik model</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                  <span>IFC (2x3/4) - Açık BIM standardı</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                  <span>AutoCAD DWG - 2D planlar ve kesitler</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                  <span>E57, RCS, RCP - Nokta bulutu ham verisi</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-black text-red-400 mb-4 uppercase tracking-wider">Uyulan Standartlar</h3>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                  <span>ISO 19650 (BIM enformasyon yönetimi)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                  <span>Level of Development Specification (LOD 200-350)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                  <span>USIBD (United States Institute of Building Documentation)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Sample Files Download */}
        <SampleFilesDownload />

        {/* CTA */}
        <div className="bg-gradient-to-br from-[var(--color-primary-red)] to-red-700 rounded-[3rem] p-16 text-white text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
          <div className="relative z-10">
            <h3 className="text-4xl font-black mb-6">As-Built Projeniz İçin Ücretsiz Keşif</h3>
            <p className="text-red-100 mb-10 max-w-2xl mx-auto text-lg leading-relaxed">
              Projenizin kapsamını, tarama alanını ve teslimat gereksinimlerini birlikte değerlendirelim.
              Deneyimli ekibimiz, size özel teknik çözüm ve fiyat teklifi hazırlayacak.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/iletisim" className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-white text-[var(--color-primary-red)] font-black rounded-2xl hover:bg-slate-100 transition-all shadow-2xl">
                Ücretsiz Teklif Alın <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/referanslar" className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-white/10 backdrop-blur text-white font-black rounded-2xl hover:bg-white/20 transition-all border-2 border-white/30">
                Referans Projelerimiz
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
