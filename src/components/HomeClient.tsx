"use client";

import { useState } from "react";
import Link from "next/link";
import { getRandomPosts } from "@/data/blog-posts";
import PricingCalculator from "@/components/PricingCalculator";
import Hero from "@/components/Hero";
import Image from "next/image";
import { motion } from "framer-motion";
import { EASE_CURVES } from "@/lib/animations";
import {
    Box,
    Database,
    Layers,
    Workflow,
    CheckSquare,
    ArrowRight,
    Settings,
    ShieldCheck,
    TrendingDown,
    Cloud,
    Target,
    Search,
    DownloadCloud,
    Warehouse,
    Landmark,
    Home as HomeIcon,
    Paintbrush,
    HardHat
} from "lucide-react";

export default function HomeClient() {
    const blogPosts = getRandomPosts(3);
    const [activeFaq, setActiveFaq] = useState<number | null>(null);

    const fadeUp = {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6, ease: EASE_CURVES.smooth }
    };

    return (
        <div className="min-h-screen flex flex-col font-sans text-[var(--color-deep-charcoal)]">
            <Hero />

            {/* SOLUTIONS SECTION */}
            <section id="solutions" className="bg-white py-32 px-4 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>

                <div className="max-w-7xl mx-auto">
                    <motion.div {...fadeUp} className="text-center mb-24">
                        <span className="text-[var(--color-primary-red)] font-black uppercase tracking-[0.3em] text-[10px] bg-red-50/50 px-5 py-2.5 rounded-full mb-8 inline-block backdrop-blur-sm border border-red-100/50">
                            Mühendislik Çözümlerimiz
                        </span>
                        <h2 className="text-5xl md:text-7xl font-black mb-10 text-slate-900 leading-[1.1] tracking-tight text-balance">
                            Dijital <span className="text-gradient-red">BIM Çözümleri</span>
                        </h2>
                        <p className="text-xl text-slate-500 max-w-2xl mx-auto font-medium leading-relaxed text-balance">
                            Lazer tarama verilerini, projenizin her aşamasında kullanabileceğiniz hatasız dijital varlıklara ve akıllı BIM modellerine dönüştürüyoruz.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                title: "Point Cloud to BIM",
                                desc: "Reality capture verisinden LOD 400 seviyesine kadar hassas Revit modeli üretimi.",
                                icon: (
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" /></svg>
                                ),
                                image: "/images/EosProje-point-cloud-to-bim-modelleme.webp",
                                href: "/cozumler/point-cloud-to-bim"
                            },
                            {
                                title: "As-built Modelleme",
                                desc: "Mevcut durumun kusursuz dijital ikizi ile renovasyon risklerini ve hataları sıfıra indirin.",
                                icon: (
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1-1q4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                                ),
                                image: "/images/EosProje-Endustriyel-Tesis-3B-Lazer-Tarama-Fabrika.webp",
                                href: "/cozumler/as-built-modelleme"
                            },
                            {
                                title: "2D to 3D Dönüşüm",
                                desc: "Arşiv çizimlerinden parametrik BIM geçişi ve teknik dokümantasyon modernizasyonu.",
                                icon: (
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" /></svg>
                                ),
                                image: "/images/EosProje-Lazer-Tarama-Sistemleri-3D-Model.webp",
                                href: "/cozumler/2d-to-3d-bim-donusum"
                            },
                            {
                                title: "MEP & Ekipman",
                                desc: "Endüstriyel tesisler için yüksek detaylı makine ve borulama (P&ID) modellemesi.",
                                icon: (
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                ),
                                image: "/images/eosproje-iskenderun-yazici-celik-trafo-bina-scan-to-mep.webp",
                                href: "/cozumler/endustriyel-ekipman-modelleme"
                            }
                        ].map((item, idx) => (
                            <Link key={idx} href={item.href} className="group relative bg-[#F8FAFC] rounded-[3rem] border border-slate-100 p-3 hover:bg-white hover:border-red-100/50 hover-lift transition-all duration-500 overflow-hidden block">
                                <div className="relative aspect-[4/3] rounded-[2.5rem] overflow-hidden mb-8 shadow-lg border border-slate-100 bg-white">
                                    <Image src={item.image} alt={`EosProje - ${item.title} Hizmeti Uygulama Örneği`} fill className="object-cover object-top transition-transform duration-1000 group-hover:scale-110" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                </div>
                                <div className="px-6 pb-8 flex-grow flex flex-col">
                                    <div className="w-14 h-14 bg-white rounded-2xl shadow-sm border border-slate-50 flex items-center justify-center mb-6 group-hover:bg-[var(--color-primary-red)] transition-all duration-500 text-[var(--color-primary-red)] group-hover:text-white group-hover:rotate-[10deg]">
                                        {item.icon}
                                    </div>
                                    <h3 className="text-2xl font-black mb-3 text-slate-900 group-hover:text-[var(--color-primary-red)] transition-colors tracking-tight">{item.title}</h3>
                                    <p className="text-slate-500 text-sm leading-relaxed mb-10 flex-grow font-medium">
                                        {item.desc}
                                    </p>
                                    <div className="flex items-center justify-between">
                                        <span className="text-[var(--color-primary-red)] text-xs font-black uppercase tracking-[0.2em] flex items-center gap-2 group-hover:gap-3 transition-all">
                                            Detayları Gör <ArrowRight className="w-4 h-4" />
                                        </span>
                                        <div className="w-8 h-8 rounded-full border border-slate-100 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                                            <div className="w-1 h-1 bg-[var(--color-primary-red)] rounded-full animate-ping"></div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                    <div className="text-center mt-20">
                        <Link href="/cozumler" className="px-10 py-4 border-2 border-slate-100 text-slate-900 font-black rounded-2xl hover:border-red-100 hover:text-[var(--color-primary-red)] transition-all uppercase tracking-widest text-xs inline-block">
                            Tüm Çözümleri Gör
                        </Link>
                    </div>
                </div>
            </section>

            {/* TRUSTED BRANDS / LOGO BAND */}
            <section className="py-24 bg-white border-t border-slate-100">
                <div className="max-w-7xl mx-auto px-4">
                    <motion.div {...fadeUp} className="text-center mb-16">
                        <span className="text-[var(--color-primary-red)] font-black uppercase tracking-[0.3em] text-[10px] bg-red-50/50 px-5 py-2.5 rounded-full mb-6 inline-block backdrop-blur-sm border border-red-100/50">
                            Birlikte Çalıştığımız Kurumlar
                        </span>
                        <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-[1.1] tracking-tight text-balance">
                            Türkiye ve Avrupa&apos;nın <span className="text-gradient-red">Önde Gelen Şirketleri</span> <br />EosProje&apos;ye Güveniyor
                        </h2>
                    </motion.div>

                    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
                        {[
                            { name: "Migros", logo: "/images/case-studies/eosproje-migros-magaza-rolove-lazer-tarama-scan-to-bim.webp" },
                            { name: "Turkcell", logo: "/images/case-studies/eosproje-turkcell-magaza-lazer-tarama-rolove-as-built.webp" },
                            { name: "Linde", logo: "/images/case-studies/eosproje-linde-endustriyel-gaz-tesisi-as-built-logo.webp" },
                            { name: "Toyota", logo: "/images/case-studies/eosproje-toyota-fabrikasi-lazer-tarama-point-cloud-bim-logo.webp" },
                            { name: "BMW", logo: "/images/case-studies/eosproje-bmw-fabrikasi-macaristan-lazer-tarama-rolove-logo.webp" },
                            { name: "Thyssenkrupp", logo: "/images/case-studies/Thyssenkrupp-Eos-Proje-Polyol-Fabrika-Asbuilt-3d-model.webp" },
                            { name: "Şişecam", logo: "/images/case-studies/eosproje-sisecam-cam-fabrikasi-kaposvar-rolove-survey-logo.webp" },
                            { name: "Cevahir AVM", logo: "/images/case-studies/eosproje-cevahir-avm-lazer-tarama-scan-to-bim-istanbul.webp" },
                            { name: "Yüksel Proje", logo: "/images/case-studies/eosproje-yuksel-proje-metro-halihazir-harita-bim.webp" }
                        ].map((client, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.05 }}
                                className="group relative w-24 h-24 md:w-32 md:h-32 flex items-center justify-center grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-500"
                            >
                                <div className="relative w-full h-full p-4">
                                    <Image
                                        src={client.logo}
                                        alt={`${client.name} - EosProje Referans Müşteri`}
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ABOUT EOS PROJE SECTION */}
            <section className="relative py-40 px-4 overflow-hidden border-t border-slate-100">
                <div className="absolute inset-0 z-0 opacity-20">
                    <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-10"></div>
                </div>

                <div className="max-w-6xl mx-auto relative z-10">
                    <motion.div {...fadeUp} className="bg-white/40 backdrop-blur-3xl p-12 md:p-24 rounded-[4rem] border border-white/60 shadow-2xl shadow-slate-900/10 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-red-500/5 rounded-full blur-[100px] -mr-32 -mt-32"></div>

                        <h2 className="text-4xl md:text-6xl font-black mb-10 text-slate-900 leading-[1.1] tracking-tight text-balance">
                            EOS Proje: <span className="text-gradient-red">Teknoloji Merkezi</span> <br />
                            Point Cloud to BIM Uzmanlığı
                        </h2>

                        <h3 className="text-xl md:text-3xl font-bold text-slate-400 mb-12 tracking-tight text-balance">
                            Fiziksel Gerçeklik ile Dijital Zeka Arasındaki Köprü
                        </h3>

                        <div className="prose prose-slate prose-lg max-w-none text-slate-500 font-medium leading-relaxed space-y-8 text-balance">
                            <p>
                                EOS Proje, karmaşık mimari ve endüstriyel yapıların milimetrik hassasiyette dijital ikizlerini oluşturmaya odaklanmış uzman bir mühendislik firmasıdır. İstanbul ve Budapeşte ofislerimizden, ham gerçeklik yakalama verilerini yüksek sadakatli BIM ortamlarına dönüştürüyoruz.
                            </p>
                            <p>
                                LOD 100'den LOD 400'e kadar uzanan Scan-to-BIM çözümlerimiz; büyük restorasyonlarda, endüstriyel modernizasyonlarda ve tarihi koruma projelerinde riskleri ortadan kaldırır. Havacılık düzeyi hassasiyeti AEC sektörü uzmanlığıyla birleştirerek, mimarlar ve yatırımcılar için yapı varlıklarında tek ve doğru veri kaynağı sağlıyoruz.
                            </p>
                        </div>

                        <div className="mt-20 flex flex-wrap gap-16 pt-12 border-t border-slate-100/80">
                            {[
                                { label: "Yıllık Tecrübe", value: "10+" },
                                { label: "Modellenen m²", value: "2M+" },
                                { label: "Global Ofis", value: "2" }
                            ].map((stat, i) => (
                                <div key={i} className="flex flex-col gap-2">
                                    <span className="text-5xl font-black text-slate-900 tracking-tighter text-gradient-red">{stat.value}</span>
                                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">{stat.label}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* PROCESS SECTION */}
            <section id="process" className="bg-white py-32 px-4 relative overflow-hidden">
                <div className="max-w-7xl mx-auto relative">
                    <motion.div {...fadeUp} className="text-center mb-24">
                        <span className="text-[var(--color-primary-red)] font-black uppercase tracking-[0.3em] text-[10px] bg-red-50/50 px-5 py-2.5 rounded-full mb-8 inline-block backdrop-blur-sm border border-red-100/50">
                            Süreç Yönetimi
                        </span>
                        <h2 className="text-5xl md:text-7xl font-black text-slate-900 leading-[1.1] tracking-tight text-balance">
                            Uçtan Uca <br />
                            <span className="text-gradient-red">Dijitalleşme Protokolü</span>
                        </h2>
                        <p className="text-xl text-slate-500 mt-8 font-medium max-w-2xl mx-auto leading-relaxed text-balance">
                            Karmaşık veri setlerini, projenizde hemen kullanabileceğiniz akıllı BIM modellerine dönüştüren 5 adımlı mühendislik protokolümüz.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 relative z-10">
                        {[
                            {
                                step: "01",
                                title: "Veri Girişi ve Kabulü",
                                desc: "Projenize ait nokta bulutlarını teslim alıyoruz. .e57, .rcp ve diğer formatları zengin altyapımızla işliyoruz.",
                                message: "Siz veriyi gönderin, formatı biz çözeriz.",
                                icon: <Cloud className="w-6 h-6" />
                            },
                            {
                                step: "02",
                                title: "Kapsam ve LOD Belirleme",
                                desc: "İhtiyaçlarınıza göre detay seviyesini (LOD 100-400) ve tolerans limitlerini uzman ekibimizle teknik olarak netleştiriyoruz.",
                                message: "Baştan planlanan net maliyet ve kapsam.",
                                icon: <Target className="w-6 h-6" />
                            },
                            {
                                step: "03",
                                title: "Parametrik Modelleme",
                                desc: "Nokta bulutunu; mimari, statik ve MEP disiplinlerinde akıllı, parametrik mühendislik objelerine dönüştürüyoruz.",
                                message: "Sadece çizim değil, yaşayan model üretiyoruz.",
                                icon: <Layers className="w-6 h-6" />
                            },
                            {
                                step: "04",
                                title: "QA/QC ve Sapma Analizi",
                                desc: "Oluşturulan modeli orijinal nokta bulutuyla çakıştırıp sapmaları raporluyoruz. Milimetrik hassasiyet güvencemizdir.",
                                message: "Yapay zeka destekli teknik doğrulama.",
                                icon: <Search className="w-6 h-6" />
                            },
                            {
                                step: "05",
                                title: "Teslimat ve Entegrasyon",
                                desc: "Kontrolleri tamamlanan projenizi .rvt, .ifc ve .dwg formatlarında teknik dokümanlarla birlikte eksiksiz teslim ediyoruz.",
                                message: "Hemen kullanıma hazır, tertemiz dosyalar.",
                                icon: <DownloadCloud className="w-6 h-6" />
                            }
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className="group relative bg-[#F8FAFC] p-8 rounded-[3rem] border border-slate-100 hover:bg-white hover:border-red-100/50 hover-lift transition-all duration-500 flex flex-col h-full overflow-hidden"
                            >
                                <span className="absolute -top-4 -right-2 text-8xl font-black text-slate-200/40 select-none group-hover:text-red-50 transition-colors duration-500">
                                    {item.step}
                                </span>

                                <div className="relative z-10 flex flex-col h-full">
                                    <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-8 border border-slate-100 group-hover:bg-[var(--color-primary-red)] group-hover:text-white transition-all duration-500 text-[var(--color-primary-red)]">
                                        {item.icon}
                                    </div>

                                    <h3 className="text-xl font-black mb-4 text-slate-900 min-h-[3rem] items-center flex group-hover:text-[var(--color-primary-red)] transition-colors tracking-tight">
                                        {item.title}
                                    </h3>

                                    <p className="text-slate-500 text-sm leading-relaxed mb-10 flex-grow font-medium">
                                        {item.desc}
                                    </p>

                                    <div className="pt-6 border-t border-slate-200/60">
                                        <p className="text-[var(--color-primary-red)] text-[11px] font-black uppercase tracking-wider italic leading-relaxed">
                                            "{item.message}"
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SHOWCASE GALLERY SECTION */}
            <section id="gallery" className="bg-white py-32 px-4 overflow-hidden border-t border-slate-50">
                <div className="max-w-7xl mx-auto">
                    <motion.div {...fadeUp} className="text-center mb-24">
                        <span className="text-[var(--color-primary-red)] font-black uppercase tracking-[0.3em] text-[10px] bg-red-50/50 px-5 py-2.5 rounded-full mb-8 inline-block backdrop-blur-sm border border-red-100/50">
                            Proje Portfolyosu
                        </span>
                        <h2 className="text-5xl md:text-7xl font-black text-slate-900 mb-10 leading-[1.1] tracking-tight text-balance">
                            Saha Operasyonlarımızdan <br />
                            <span className="text-gradient-red">Gerçek Kesitler</span>
                        </h2>
                        <p className="text-xl text-slate-500 max-w-2xl mx-auto font-medium leading-relaxed text-balance">
                            Gerçekliği yakalama hassasiyetimiz ve dijital ikiz uygulamalarımızdan kesitler.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { src: "/images/case-studies/eosproje-endustriyel-tesis-lazer-tarama-scan-to-bim-fabrika.webp", title: "Fabrika Scan-to-BIM", tag: "Endüstriyel" },
                            { src: "/images/case-studies/eosproje-migros-magaza-scan-to-bim-revit-modelleme.webp", title: "Migros Mağaza BIM", tag: "Perakende" },
                            { src: "/images/case-studies/eosproje-fabrika-3d-lazer-tarama-as-built-modelleme.webp", title: "Dijital İkiz Denetimi", tag: "Endüstriyel" },
                            { src: "/images/case-studies/eosproje-linde-teknokon-kazan-dairesi-point-cloud-to-bim.webp", title: "Linde Kazan Dairesi", tag: "MEP" },
                            { src: "/images/case-studies/eosproje-cevahir-avm-lazer-tarama-scan-to-bim-istanbul.webp", title: "Cevahir AVM Rölöve", tag: "Ticari" },
                            { src: "/images/case-studies/eosproje-lazer-tarama-sistemleri-bim-modelleme-hizmetleri.webp", title: "BIM Analiz Süreci", tag: "Teknik" },
                            { src: "/images/case-studies/eosproje-endustriyel-tesis-drone-lazer-tarama-3d-modelleme.webp", title: "Drone Lazer Tarama", tag: "Endüstriyel" },
                            { src: "/images/case-studies/eosproje-thyssenkrupp-polyol-macaristan-scan-to-bim-point-cloud.webp", title: "Thyssenkrupp Polyol", tag: "Kimya" }
                        ].map((img, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: idx * 0.1 }}
                                className="group relative aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-lg shadow-slate-900/5 bg-slate-50 border border-slate-100 hover-lift"
                            >
                                <Image src={img.src} alt={`EosProje - ${img.title} (${img.tag}) Proje Uygulaması`} fill className="object-cover transition-transform duration-1000 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8">
                                    <span className="text-[10px] font-black text-red-500 uppercase tracking-[0.2em] mb-3 bg-white/10 w-fit px-3 py-1 rounded-full backdrop-blur-sm border border-white/10">{img.tag}</span>
                                    <h4 className="text-white font-black text-xl leading-tight tracking-tight">{img.title}</h4>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTORS SECTION */}
            <section id="sectors" className="bg-[#F8FAFC] py-32 px-4 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-500/5 rounded-full blur-[120px] pointer-events-none"></div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <motion.div {...fadeUp} className="flex flex-col md:flex-row items-end justify-between mb-24 gap-10">
                        <div className="md:w-3/5 text-left">
                            <span className="text-[var(--color-primary-red)] font-black uppercase tracking-[0.3em] text-[10px] bg-red-50/50 px-5 py-2.5 rounded-full mb-8 inline-block backdrop-blur-sm border border-red-100/50">
                                Sektörel Uzmanlık
                            </span>
                            <h2 className="text-5xl md:text-7xl font-black text-slate-900 leading-[1.1] tracking-tight text-balance">
                                Değer Kattığımız <span className="text-gradient-red">Alanlar</span>
                            </h2>
                        </div>
                        <Link href="/sektorler" className="text-[var(--color-primary-red)] font-black uppercase tracking-[0.2em] text-[10px] flex items-center gap-2 group transition-all pb-4">
                            Tüm Sektörleri Keşfet <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                        </Link>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                        {[
                            {
                                title: "Endüstriyel Tesis",
                                desc: "Fabrika ve enerji santrali P&ID süreçlerinde yüksek hassasiyetli dijital ikizler.",
                                benefit: "-%30 Duruş Süresi",
                                icon: <Warehouse className="w-6 h-6" />,
                                slug: "endustriyel-ekipman-modelleme"
                            },
                            {
                                title: "Restorasyon",
                                desc: "Tarihi yapıların rölöve ve korunması için milimetrik BIM modelleri.",
                                benefit: "Belgelenmiş Tarih",
                                icon: <Landmark className="w-6 h-6" />,
                                slug: "restorasyon"
                            },
                            {
                                title: "Mimarlık",
                                desc: "Karmaşık mimari tasarımlar için hatasız Revit altlıkları ve rölöve çalışmaları.",
                                benefit: "Hatasız Tasarım",
                                icon: <HomeIcon className="w-6 h-6" />,
                                slug: "mimari-modelleme"
                            },
                            {
                                title: "Renovasyon",
                                desc: "İç mekan yenileme ve as-built projeleri için kusursuz dijital eşleşme.",
                                benefit: "Kusursuz Uyum",
                                icon: <Paintbrush className="w-6 h-6" />,
                                slug: "renovasyon"
                            },
                            {
                                title: "İnşaat",
                                desc: "Şantiye koordinasyonu ve ilerleme takibi için güncel tarama verileri.",
                                benefit: "Akıllı Şantiye",
                                icon: <HardHat className="w-6 h-6" />,
                                slug: "insaat"
                            },
                        ].map((sector, idx) => (
                            <Link key={idx} href={`/sektorler#${sector.slug}`} className="block group h-full">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                                    className="p-8 bg-white rounded-[3rem] border border-slate-100 hover:border-red-100/50 hover-lift transition-all duration-500 flex flex-col h-full relative overflow-hidden group-hover:shadow-2xl group-hover:shadow-slate-200/50"
                                >
                                    <div className="w-14 h-14 bg-[#F8FAFC] text-[var(--color-primary-red)] rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[var(--color-primary-red)] group-hover:text-white transition-all duration-500 shadow-sm border border-slate-50">
                                        {sector.icon}
                                    </div>
                                    <h3 className="font-black mb-4 text-xl text-slate-900 group-hover:text-[var(--color-primary-red)] transition-colors tracking-tight">{sector.title}</h3>
                                    <p className="text-sm text-slate-500 font-medium leading-relaxed mb-10 flex-grow">{sector.desc}</p>
                                    <div className="pt-6 border-t border-slate-100 flex items-center">
                                        <span className="text-[10px] font-black uppercase tracking-widest text-[var(--color-primary-red)] bg-red-50 px-3 py-1 rounded-full group-hover:bg-red-500 group-hover:text-white transition-colors">
                                            {sector.benefit}
                                        </span>
                                    </div>
                                </motion.div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* PRICING CALCULATOR SECTION */}
            <section className="bg-[var(--color-soft-bg)] py-32 px-4">
                <div className="max-w-4xl mx-auto">
                    <motion.div {...fadeUp} className="bg-white p-2 rounded-[3.5rem] shadow-2xl border border-white">
                        <PricingCalculator />
                    </motion.div>
                </div>
            </section>

            {/* BLOG SECTION */}
            <section className="bg-white py-32 px-4 relative overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <motion.div {...fadeUp} className="text-center mb-24">
                        <span className="text-[var(--color-primary-red)] font-black uppercase tracking-[0.3em] text-[10px] bg-red-50/50 px-5 py-2.5 rounded-full mb-8 inline-block backdrop-blur-sm border border-red-100/50">
                            Mühendislik Günlüğü
                        </span>
                        <h2 className="text-5xl md:text-7xl font-black text-slate-900 leading-[1.1] tracking-tight text-balance">
                            Teknik <span className="text-gradient-red">Gündem</span>
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {blogPosts.map((post, idx) => (
                            <motion.div
                                key={post.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                            >
                                <Link href={`/blog/${post.slug}`} className="group h-full block">
                                    <div className="bg-[#F8FAFC] rounded-[3rem] border border-slate-100 hover:bg-white hover:border-red-100/50 hover-lift transition-all duration-500 overflow-hidden flex flex-col h-full hover:shadow-2xl hover:shadow-slate-200/50">
                                        <div className="relative aspect-video overflow-hidden">
                                            <Image src={post.image} alt={`EosProje Blog: ${post.title}`} fill className="object-cover transition-transform duration-1000 group-hover:scale-110" />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                        </div>
                                        <div className="p-10 flex-grow">
                                            <div className="flex items-center gap-4 mb-6">
                                                <span className="text-[10px] font-black text-[var(--color-primary-red)] uppercase tracking-[0.2em] bg-red-50 px-3 py-1.5 rounded-full border border-red-100/30">
                                                    {post.category}
                                                </span>
                                                <span className="text-[10px] text-slate-400 font-black uppercase tracking-[0.2em]">
                                                    {new Date(post.date).toLocaleDateString('tr-TR', { day: 'numeric', month: 'long', year: 'numeric' })}
                                                </span>
                                            </div>
                                            <h3 className="text-2xl font-black mb-4 text-slate-900 group-hover:text-[var(--color-primary-red)] transition-colors leading-tight tracking-tight">
                                                {post.title}
                                            </h3>
                                            <p className="text-slate-500 text-[15px] leading-relaxed font-medium line-clamp-3">
                                                {post.excerpt}
                                            </p>
                                        </div>
                                        <div className="px-10 pb-10 mt-auto">
                                            <span className="text-[var(--color-primary-red)] text-xs font-black uppercase tracking-[0.2em] flex items-center gap-2 group-hover:gap-3 transition-all">
                                                Okumaya Devam Et <ArrowRight className="w-4 h-4" />
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>

                    <div className="text-center mt-20">
                        <Link href="/blog" className="px-12 py-5 bg-[var(--color-primary-red)] text-white text-xs font-black uppercase tracking-[0.2em] rounded-2xl hover:bg-red-800 transition-all shadow-xl shadow-red-900/20 hover:shadow-red-900/40 hover:-translate-y-1 inline-block">
                            Tüm Blog Yazıları
                        </Link>
                    </div>
                </div>
            </section>

            {/* CTA SECTION */}
            <section id="contact" className="relative py-40 px-4 overflow-hidden">
                <div className="absolute inset-0 bg-[var(--color-deep-charcoal)]"></div>
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-red-900/20 to-transparent pointer-events-none"></div>

                <div className="max-w-4xl mx-auto relative z-10 text-center">
                    <motion.div {...fadeUp}>
                        <h2 className="text-4xl md:text-6xl font-black text-white mb-10 tracking-tight text-balance">
                            Geleceği Birlikte <span className="text-[var(--color-primary-red)] text-gradient-red">Modelleyelim</span>
                        </h2>
                        <p className="text-xl text-slate-400 mb-16 font-medium leading-relaxed max-w-2xl mx-auto text-balance">
                            Projenizin LOD seviyesini, teslimat formatlarını ve mühendislik kapsamını dijital ikiz uzmanlarımızla belirleyin.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-6">
                            <Link href="/iletisim" className="px-12 py-5 bg-[var(--color-primary-red)] text-white font-black uppercase tracking-[0.2em] text-xs rounded-2xl hover:bg-red-800 transition-all shadow-2xl shadow-red-900/40 hover:-translate-y-1 block">
                                Teklif Protokolünü Başlat
                            </Link>
                            <a
                                href="https://wa.me/905306642263"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-12 py-5 bg-white/5 border border-white/10 text-white font-black uppercase tracking-[0.2em] text-xs rounded-2xl hover:bg-white/10 transition-all backdrop-blur-sm block"
                            >
                                Uzmanla Görüntülü Toplantı
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* FAQ SECTION */}
            <section className="bg-slate-50 py-32 px-4 relative overflow-hidden">
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": [
                            { "@type": "Question", "name": "Point Cloud to BIM dönüşümü ne kadar sürer?", "acceptedAnswer": { "@type": "Answer", "text": "Proje büyüklüğü ve LOD seviyesine bağlı olarak; standart projeler için genellikle 5 ile 15 iş günü arasında değişmektedir." } },
                            { "@type": "Question", "name": "Hangi lazer tarama formatlarını destekliyorsunuz?", "acceptedAnswer": { "@type": "Answer", "text": "E57, RCP, RCS, PTX, LAS ve LAZ dahil tüm endüstri standardı ham veri formatlarını işleyebiliyoruz." } },
                            { "@type": "Question", "name": "LOD 200, 300 ve 400 arasındaki fark nedir?", "acceptedAnswer": { "@type": "Answer", "text": "LOD 200 kütlesel gösterimi, LOD 300 detaylı mimari/statik yapıyı, LOD 400 ise imalata hazır teknik detayları ve bileşenleri ifade eder." } },
                            { "@type": "Question", "name": "Birincil teslimat formatlarınız nelerdir?", "acceptedAnswer": { "@type": "Answer", "text": "Autodesk Revit (.rvt), IFC (2x3 veya 4), AutoCAD (.dwg) ve Graphisoft ArchiCAD (.pla) formatlarında doğrudan teslimat sağlıyoruz." } },
                            { "@type": "Question", "name": "Hassasiyet garantisini nasıl veriyorsunuz?", "acceptedAnswer": { "@type": "Answer", "text": "Özel QA/QC protokolümüz ile model ve nokta bulutu arasında otomatik sapma analizi yaparak milimetrik doğruluğu teknik raporla belgeliyoruz." } },
                            { "@type": "Question", "name": "Endüstriyel tesisler için MEP modelleme yapıyor musunuz?", "acceptedAnswer": { "@type": "Answer", "text": "Evet; karmaşık borulama, HVAC sistemleri ve elektriksel altyapı dahil yüksek detaylı MEP modelleme uzmanlık alanımızdır." } }
                        ]
                    }) }}
                />
                <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>

                <div className="max-w-4xl mx-auto relative z-10">
                    <motion.div {...fadeUp} className="text-center mb-24">
                        <span className="text-[var(--color-primary-red)] font-black uppercase tracking-[0.3em] text-[10px] bg-red-50/50 px-5 py-2.5 rounded-full mb-8 inline-block">Destek Merkezi</span>
                        <h2 className="text-5xl md:text-6xl font-black mb-6 text-slate-900 tracking-tight text-balance">Sıkça Sorulan <span className="text-gradient-red">Sorular</span></h2>
                        <p className="text-xl text-slate-500 font-medium leading-relaxed max-w-2xl mx-auto text-balance">Gerçekliği yakalama ve BIM modelleme metodolojilerimiz hakkında uzman görüşleri.</p>
                    </motion.div>

                    <div className="space-y-4">
                        {[
                            { q: "Point Cloud to BIM dönüşümü ne kadar sürer?", a: "Proje büyüklüğü ve LOD seviyesine bağlı olarak; standart projeler için genellikle 5 ile 15 iş günü arasında değişmektedir." },
                            { q: "Hangi lazer tarama formatlarını destekliyorsunuz?", a: "E57, RCP, RCS, PTX, LAS ve LAZ dahil tüm endüstri standardı ham veri formatlarını işleyebiliyoruz." },
                            { q: "LOD 200, 300 ve 400 arasındaki fark nedir?", a: "LOD 200 kütlesel gösterimi, LOD 300 detaylı mimari/statik yapıyı, LOD 400 ise imalata hazır teknik detayları ve bileşenleri ifade eder." },
                            { q: "Birincil teslimat formatlarınız nelerdir?", a: "Autodesk Revit (.rvt), IFC (2x3 veya 4), AutoCAD (.dwg) ve Graphisoft ArchiCAD (.pla) formatlarında doğrudan teslimat sağlıyoruz." },
                            { q: "Hassasiyet garantisini nasıl veriyorsunuz?", a: "Özel QA/QC protokolümüz ile model ve nokta bulutu arasında otomatik sapma analizi yaparak milimetrik doğruluğu teknik raporla belgeliyoruz." },
                            { q: "Endüstriyel tesisler için MEP modelleme yapıyor musunuz?", a: "Evet; karmaşık borulama, HVAC sistemleri ve elektriksel altyapı dahil yüksek detaylı MEP modelleme uzmanlık alanımızdır." }
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.05 }}
                                className="bg-white p-8 rounded-[2.5rem] border border-slate-100 hover:border-red-100/50 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-slate-200/50 overflow-hidden"
                            >
                                <div
                                    className="cursor-pointer group"
                                    onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                                >
                                    <h3 className="font-black text-slate-900 flex justify-between items-center transition-colors text-lg group-hover:text-[var(--color-primary-red)] tracking-tight">
                                        {item.q}
                                        <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${activeFaq === idx ? 'bg-[var(--color-primary-red)] text-white rotate-45' : 'bg-slate-50 text-slate-400 group-hover:bg-red-50 group-hover:text-[var(--color-primary-red)]'}`}>
                                            <span className="text-xl font-light">+</span>
                                        </div>
                                    </h3>
                                    <motion.div
                                        initial={false}
                                        animate={{
                                            height: activeFaq === idx ? "auto" : 0,
                                            opacity: activeFaq === idx ? 1 : 0,
                                            marginTop: activeFaq === idx ? 24 : 0
                                        }}
                                        transition={{ duration: 0.4, ease: EASE_CURVES.smooth }}
                                        className="overflow-hidden"
                                    >
                                        <div className="pt-4 border-t border-slate-50">
                                            <p className="text-[15px] text-slate-500 font-medium leading-[1.6]">
                                                {item.a}
                                            </p>
                                        </div>
                                    </motion.div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

        </div >
    );
}
