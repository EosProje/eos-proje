"use client";

import SubPageHero from "@/components/SubPageHero";
import { SectorDetail } from "@/data/sectors";
import { motion, AnimatePresence } from "framer-motion";
import {
    CheckCircle2,
    FileCheck,
    ArrowRight,
    HelpCircle,
    ChevronDown,
    Layout,
    Target
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function SectorDetailClient({
    sector,
    relatedProjects
}: {
    sector: SectorDetail;
    relatedProjects: any[];
}) {
    const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

    return (
        <div className="min-h-screen bg-white">
            <SubPageHero
                title={sector.title}
                description={sector.description}
                category="Sektör Çözümleri"
                breadcrumb={[
                    { label: "Sektörler", href: "/sektorler" },
                    { label: sector.title, href: `/sektorler/${sector.slug}` }
                ]}
            />

            <div className="max-w-7xl mx-auto px-4 py-24">

                {/* 1. Value Proposition & Standards */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24 items-center">
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 text-[var(--color-primary-red)] text-xs font-bold uppercase tracking-wider mb-6">
                            <Target className="w-4 h-4" />
                            <span>Sektörel Uzmanlık</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6 leading-tight">
                            {sector.title} İçin Özelleştirilmiş BIM Çözümleri
                        </h2>
                        <p className="text-lg text-slate-500 font-medium leading-relaxed mb-8">
                            {sector.description} Bu alandaki projelerinizde uluslararası standartlara (ISO 19650) uygun, doğruluğu kanıtlanmış ve uygulamaya hazır veriler üretiyoruz.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <div className="px-6 py-4 bg-slate-50 rounded-2xl border border-slate-100">
                                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-1">Hassasiyet</span>
                                <span className="text-xl font-black text-slate-900">{sector.precision}</span>
                            </div>
                            <div className="px-6 py-4 bg-slate-50 rounded-2xl border border-slate-100">
                                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-1">LOD Seviyesi</span>
                                <span className="text-xl font-black text-[var(--color-primary-red)]">LOD {sector.lod}</span>
                            </div>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="absolute inset-0 bg-[var(--color-primary-red)] rounded-[3rem] rotate-3 opacity-5"></div>
                        <div className="bg-white p-8 rounded-[2.5rem] shadow-2xl border border-slate-100 relative">
                            <h3 className="text-lg font-black text-slate-900 mb-6 flex items-center gap-2">
                                <Layout className="w-5 h-5 text-slate-400" />
                                Teslimat Standartları
                            </h3>
                            <div className="space-y-6">
                                <div>
                                    <h4 className="text-xs font-bold uppercase text-slate-400 mb-3 ml-1">Modeller</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {sector.deliverables.models.map((item, i) => (
                                            <span key={i} className="px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-xs font-bold text-slate-600">
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <h4 className="text-xs font-bold uppercase text-slate-400 mb-3 ml-1">Çizimler (2D)</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {sector.deliverables.drawings.map((item, i) => (
                                            <span key={i} className="px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-xs font-bold text-slate-600">
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <h4 className="text-xs font-bold uppercase text-slate-400 mb-3 ml-1">Raporlar</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {sector.deliverables.reports.map((item, i) => (
                                            <span key={i} className="px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-xs font-bold text-slate-600">
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 2. Services List */}
                <div className="mb-24">
                    <h3 className="text-2xl font-black text-slate-900 mb-10 text-center">Sunulan Hizmetler</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {sector.services.map((service, i) => (
                            <div key={i} className="bg-white p-6 rounded-2xl border border-slate-100 hover:border-red-100 hover:shadow-lg transition-all group">
                                <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                    <CheckCircle2 className="w-6 h-6 text-[var(--color-primary-red)]" />
                                </div>
                                <h4 className="font-bold text-slate-900 mb-2">{service}</h4>
                                <p className="text-xs text-slate-500 font-medium">Bu hizmet kapsamında {sector.title.toLowerCase()} projeleriniz için özelleştirilmiş iş akışları sunuyoruz.</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 3. FAQ Section */}
                <div className="max-w-3xl mx-auto mb-24">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-slate-100 mb-4">
                            <HelpCircle className="w-6 h-6 text-slate-400" />
                        </div>
                        <h3 className="text-2xl font-black text-slate-900">Sıkça Sorulan Sorular</h3>
                        <p className="text-slate-500 mt-2">Bu sektördeki projelerle ilgili merak edilenler.</p>
                    </div>

                    <div className="space-y-4">
                        {sector.faq.map((item, i) => (
                            <div key={i} className="bg-slate-50 rounded-2xl border border-slate-100 overflow-hidden">
                                <button
                                    onClick={() => setOpenFaqIndex(openFaqIndex === i ? null : i)}
                                    className="w-full flex items-center justify-between p-6 text-left"
                                >
                                    <span className="font-bold text-slate-900">{item.question}</span>
                                    <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform ${openFaqIndex === i ? 'rotate-180' : ''}`} />
                                </button>
                                <AnimatePresence>
                                    {openFaqIndex === i && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <div className="px-6 pb-6 pt-0 text-slate-600 text-sm leading-relaxed border-t border-slate-100/50 mt-2">
                                                {item.answer}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 4. Connected Case Studies */}
                <div>
                    <div className="flex items-center justify-between mb-12 border-b border-slate-100 pb-6">
                        <h3 className="text-2xl font-black text-slate-900">İlgili Referanslar</h3>
                        <Link href="/referanslar" className="text-sm font-bold text-[var(--color-primary-red)] hover:underline flex items-center gap-1">
                            Tüm Projeler <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {relatedProjects.length > 0 ? (
                            relatedProjects.map(project => (
                                <Link key={project.slug} href={`/referanslar/${project.slug}`} className="group block h-full">
                                    <div className="bg-white rounded-2xl border border-slate-100 h-full overflow-hidden flex flex-col hover:shadow-xl transition-all duration-300">
                                        <div className="h-56 bg-slate-200 overflow-hidden relative">
                                            {project.images?.hero ? (
                                                <img src={project.images.hero} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                                            ) : (
                                                <div className="w-full h-full bg-slate-100 flex items-center justify-center text-slate-300">
                                                    <FileCheck className="w-12 h-12" />
                                                </div>
                                            )}
                                            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider text-slate-900">
                                                {project.year}
                                            </div>
                                        </div>
                                        <div className="p-6 flex-grow flex flex-col">
                                            <span className="text-[10px] font-black text-[var(--color-primary-red)] uppercase tracking-widest block mb-3">{project.sector}</span>
                                            <h4 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-[var(--color-primary-red)] transition-colors">{project.title}</h4>
                                            <p className="text-xs text-slate-500 line-clamp-2 mb-4 flex-grow">{project.description}</p>
                                            <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400 mt-auto">
                                                <div className="flex items-center gap-1">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                                                    {project.location || "İstanbul"}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ))
                        ) : (
                            <div className="col-span-full py-16 bg-slate-50 rounded-3xl border border-dashed border-slate-200 text-center">
                                <FileCheck className="w-10 h-10 text-slate-300 mx-auto mb-4" />
                                <p className="text-slate-500 font-bold">Bu alanda henüz vaka analizi eklenmemiştir.</p>
                                <p className="text-xs text-slate-400 mt-1">Lütfen daha sonra tekrar kontrol edin.</p>
                            </div>
                        )}
                    </div>
                </div>

                {/* Bottom CTA */}
                <div className="mt-24 py-16 bg-[var(--color-deep-charcoal)] rounded-[3rem] px-8 text-center relative overflow-hidden">
                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-4xl font-black text-white mb-6">Projeniz İçin Teknik Destek Alın</h2>
                        <p className="text-slate-400 max-w-2xl mx-auto mb-10 text-lg">
                            {sector.title} projelerinizde nokta bulutu, BIM modelleme ve rölöve süreçleri hakkında ücretsiz danışmanlık hizmeti sunuyoruz.
                        </p>
                        <Link href="/iletisim" className="inline-flex items-center gap-3 px-8 py-4 bg-white text-[var(--color-deep-charcoal)] font-black rounded-xl hover:bg-slate-100 transition-colors">
                            Teklif Oluştur <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                    {/* Abstract Shapes */}
                    <div className="absolute top-0 left-0 w-64 h-64 bg-red-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
                    <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 translate-x-1/2 translate-y-1/2"></div>
                </div>
            </div>
        </div>
    );
}
