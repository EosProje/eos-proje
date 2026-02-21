"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Cpu, FileCode, CheckCircle2 } from "lucide-react";
import { EASE_CURVES } from "@/lib/animations";

const formats = [
    { name: ".rvt", label: "Revit" },
    { name: ".ifc", label: "OpenBIM" },
    { name: ".dwg", label: "CAD" },
    { name: ".e57", label: "Scan" },
    { name: ".rcp", label: "ReCap" }
];

export default function Hero() {
    const pathname = usePathname();
    const isEn = pathname.startsWith("/en");

    const t = isEn ? {
        badge: "Professional Reality Capture Center",
        title1: "LOD 200-400",
        title2: "Point Cloud â€º BIM",
        subtitle: "We produce parametric models with millimeter precision from point cloud data.",
        cta1: "Get Free Quote",
        cta2: "Case Studies"
    } : {
        badge: "Professional Reality Capture Center",
        title1: "LOD 200-400",
        title2: "Point Cloud â€º BIM",
        subtitle: "Nokta bulutu verilerinden milimetrik hassasiyette parametrik modeller Ã¼retiyoruz.",
        cta1: "Ãœcretsiz Teklif AlÄ±n",
        cta2: "Vaka Analizleri"
    };

    const subtitle = isEn
        ? "We produce parametric models with millimeter precision from point cloud data for Turkey and Europe."
        : "TÃ¼rkiye ve Avrupa genelinde, nokta bulutu verilerinden milimetrik hassasiyette parametrik modeller Ã¼retiyoruz.";

    return (
        <section className="relative bg-[var(--color-soft-bg)] overflow-hidden pt-32 pb-24 md:pt-52 md:pb-40">
            {/* Background Image / Silhouette */}
            <div className="absolute inset-y-0 left-0 w-full md:w-3/5 pointer-events-none z-0">
                <div className="relative w-full h-full">
                    <Image
                        src="/images/case-studies/eosproje-iskenderun-yazici-celik-trafo-bina-scan-to-bim.webp"
                        alt="EosProje Lazer Tarama Scan-to-BIM EndÃ¼striyel Tesis"
                        fill
                        priority
                        className="object-cover object-left opacity-[0.14] filter grayscale contrast-[1.1] brightness-[1.1]"
                        style={{
                            maskImage: 'linear-gradient(to right, rgba(0,0,0,1) 30%, rgba(0,0,0,0) 100%)',
                            WebkitMaskImage: 'linear-gradient(to right, rgba(0,0,0,1) 30%, rgba(0,0,0,0) 100%)'
                        }}
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-soft-bg)] via-transparent to-[var(--color-soft-bg)]" />
            </div>

            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-15%] left-[-10%] w-[50%] h-[50%] bg-[var(--color-primary-red)] opacity-[0.03] rounded-full blur-[150px]"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-100 opacity-[0.2] rounded-full blur-[120px]"></div>

                {/* Technical Grid Accent */}
                <div className="absolute inset-0 bg-grid-pattern opacity-[0.15] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center relative z-10">
                {/* Left Content */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: EASE_CURVES.smooth }}
                    className="md:w-3/5"
                >
                    <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-white/80 premium-blur border border-white shadow-xl shadow-slate-900/5 rounded-full text-[10px] font-black uppercase tracking-[0.25em] text-slate-500 mb-10">
                        <span className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.5)]"></span>
                        {t.badge}
                    </div>

                    <h1 className="text-6xl md:text-8xl font-black mb-8 leading-[1] text-slate-900 tracking-[-0.04em] text-balance">
                        {t.title1} <br />
                        <span className="text-gradient-red">{t.title2}</span>
                    </h1>

                    <h2 className="text-xl md:text-3xl font-bold text-slate-500 mb-12 max-w-2xl leading-relaxed text-balance">
                        {subtitle}
                    </h2>

                    <div className="flex flex-wrap gap-4 mb-16">
                        {formats.map((fmt, i) => (
                            <motion.div
                                key={fmt.name}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 + (i * 0.1) }}
                                whileHover={{ scale: 1.1, y: -4 }}
                                className="group relative cursor-pointer"
                            >
                                <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-red-400 rounded-xl blur opacity-0 group-hover:opacity-10 transition duration-500"></div>
                                <div className="relative px-5 py-2.5 bg-white border border-slate-100 rounded-xl shadow-sm text-xs font-black font-mono text-slate-400 transition-all group-hover:border-red-100 group-hover:text-[var(--color-primary-red)] group-hover:shadow-md">
                                    {fmt.name}
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="flex flex-col sm:flex-row gap-6">
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="relative group">
                            <div className="absolute -inset-1 bg-red-500 rounded-2xl blur-lg opacity-25 group-hover:opacity-40 transition-opacity"></div>
                            <Link href={isEn ? "/en/contact" : "/iletisim"} className="relative px-12 py-5 bg-[var(--color-primary-red)] text-white font-black uppercase tracking-widest text-xs rounded-2xl flex items-center justify-center gap-3 transition-all hover:bg-red-800 shadow-2xl shadow-red-900/30">
                                {t.cta1}
                                <Cpu className="w-5 h-5" />
                            </Link>
                        </motion.div>

                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Link href={isEn ? "/en/references" : "/referanslar"} className="px-12 py-5 bg-white border-2 border-slate-100 text-slate-900 font-black uppercase tracking-widest text-xs rounded-2xl transition-all hover:border-red-100 hover:text-[var(--color-primary-red)] hover:shadow-xl hover:shadow-slate-200/50 flex items-center justify-center gap-3">
                                {t.cta2}
                                <FileCode className="w-5 h-5 text-slate-400" />
                            </Link>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Right Content - Clean Visual */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, ease: EASE_CURVES.smooth, delay: 0.2 }}
                    className="md:w-2/5 mt-20 md:mt-0 relative flex justify-center"
                >
                    <div className="relative w-full max-w-[500px] aspect-square flex items-center justify-center">
                        {/* Soft Glow Background */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-red-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse-slow"></div>

                        {/* Main Image Container */}
                        <div className="relative w-[340px] h-[340px] bg-white p-2 rounded-[3rem] shadow-2xl border border-slate-100 rotate-3 hover:rotate-0 transition-transform duration-700">
                            <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden">
                                <Image
                                    src="/images/case-studies/eosproje-migros-magazasi-3d-bim-model-scan-to-bim.webp"
                                    alt="EosProje - Migros MaÄŸazasÄ± 3B Lazer Tarama ve Revit Modelleme UygulamasÄ±"
                                    fill
                                    className="object-cover scale-110"
                                    priority
                                />
                                {/* Overlay Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent"></div>

                                {/* Floating Badge */}
                                <div className="absolute bottom-6 left-6 right-6">
                                    <div className="bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-white/50 flex items-center justify-between">
                                        <div>
                                            <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest mb-1">Hassasiyet</p>
                                            <p className="text-sm font-black text-slate-900">LOD 400 Ready</p>
                                        </div>
                                        <div className="w-10 h-10 bg-[var(--color-primary-red)] rounded-xl flex items-center justify-center text-white shadow-xl shadow-red-900/20">
                                            <CheckCircle2 className="w-5 h-5" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Floating Decorative Elements */}
                        <div className="absolute -top-4 -right-4 bg-white p-4 rounded-2xl shadow-xl border border-slate-50 animate-bounce-slow">
                            <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest text-center">Nokta YoÄŸunluÄŸu</div>
                            <div className="text-lg font-black text-[var(--color-primary-red)] text-center">2M pts/sec</div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
