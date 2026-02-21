"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Mail, Phone, MapPin, Linkedin, Instagram, Youtube, ArrowRight, Cpu } from "lucide-react";
import { CONTACT_EMAIL, CONTACT_PHONE } from "@/lib/constants";

const Footer = () => {
    const pathname = usePathname() || "";
    const isEn = pathname.startsWith("/en");

    const footerData = isEn ? {
        description: "LOD 100-400 Point Cloud to BIM modeling and High-Detail Industrial As-built services. Millimeter precision engineering solutions for the AEC industry.",
        solutions: "Engineering Solutions",
        solutionsLinks: [
            { label: "Point Cloud to BIM", href: "/en/solutions/point-cloud-to-bim" },
            { label: "As-built Modeling", href: "/en/solutions/as-built-modeling" },
            { label: "2D to 3D Conversion", href: "/en/solutions/2d-to-3d-bim-conversion" },
            { label: "Industrial Equipment", href: "/en/solutions/industrial-equipment-modeling" },
            { label: "QA/QC Process", href: "/en/qa-qc" }
        ],
        corporate: "Corporate",
        corporateLinks: [
            { label: "About Us", href: "/en/about" },
            { label: "Quality Policy", href: "/en/quality-policy" },
            { label: "Project Portfolio", href: "/en/references" },
            { label: "Sectors & Markets", href: "/en/sectors" },
            { label: "Pricing Protocol", href: "/en/pricing" }
        ],
        info: "Info Center",
        infoLinks: [
            { label: "Engineering Blog", href: "/en/blog" },
            { label: "Technical Docs", href: "/en/technical-docs" },
            { label: "FAQ / Support", href: "/en/faq" },
            { label: "Contact Us", href: "/en/contact" }
        ],
        contact: "Global Presence",
        rights: "All rights reserved. Engineering Excellence."
    } : {
        description: "LOD 100-400 Point Cloud to BIM modelleme ve Yüksek Detaylı Endüstriyel As-built hizmetleri. AEC endüstrisi için milimetrik hassasiyette mühendislik çözümleri.",
        solutions: "Mühendislik Çözümleri",
        solutionsLinks: [
            { label: "Point Cloud to BIM", href: "/cozumler/point-cloud-to-bim" },
            { label: "As-built Modelleme", href: "/cozumler/as-built-modeling" },
            { label: "2D to 3D Dönüşüm", href: "/cozumler/2d-to-3d-bim-conversion" },
            { label: "Endüstriyel Ekipman", href: "/cozumler/industrial-equipment-modeling" },
            { label: "QA/QC Süreci", href: "/qa-qc" }
        ],
        corporate: "Kurumsal",
        corporateLinks: [
            { label: "Hakkımızda", href: "/hakkimizda" },
            { label: "Kalite Politikamız", href: "/kalite-politikamiz" },
            { label: "Referanslar", href: "/referanslar" },
            { label: "Sektörler", href: "/sektorler" },
            { label: "Ücretlendirme", href: "/ucretlendirme" }
        ],
        info: "Bilgi Merkezi",
        infoLinks: [
            { label: "Mühendislik Blogu", href: "/blog" },
            { label: "Teknik Dökümanlar", href: "/teknik-dokumanlar" },
            { label: "SSS / Destek", href: "/sss" },
            { label: "İletişim", href: "/iletisim" }
        ],
        contact: "Küresel İletişim",
        rights: "Tüm haklar saldırıdır. Mühendislikte Mükemmellik."
    };

    return (
        <footer className="bg-[var(--color-deep-charcoal)] text-white pt-32 pb-12 px-4 border-t border-white/5 relative overflow-hidden">
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-red-900/10 to-transparent pointer-events-none opacity-50"></div>
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-500/20 to-transparent"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 mb-24">
                    {/* Brand Section */}
                    <div className="space-y-10">
                        <Link href={isEn ? "/en" : "/"} className="flex items-center gap-3 group">
                            <div className="w-10 h-10 bg-[var(--color-primary-red)] rounded-xl flex items-center justify-center shadow-lg shadow-red-900/20 transition-transform duration-500 group-hover:rotate-12">
                                <Cpu className="w-5 h-5 text-white" />
                            </div>
                            <span className="text-3xl font-black tracking-tighter">
                                EOS<span className="text-[var(--color-primary-red)] text-gradient-red">PROJE</span>
                            </span>
                        </Link>
                        <p className="text-slate-400 text-[15px] leading-relaxed font-medium text-balance">
                            {footerData.description}
                        </p>
                        <div className="flex gap-4">
                            {[
                                { icon: <Linkedin className="w-5 h-5" />, href: "https://www.linkedin.com/company/eos-proje", label: "LinkedIn" },
                                { icon: <Instagram className="w-5 h-5" />, href: "https://www.instagram.com/datageomatic?igsh=NjAxM2pxcGR4MDE4&utm_source=qr", label: "Instagram" },
                                { icon: <Youtube className="w-5 h-5" />, href: "https://www.youtube.com/@datageomatic1212", label: "YouTube" }
                            ].map((social, idx) => (
                                <a key={idx} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={`EosProje ${social.label}`} className="w-11 h-11 bg-white/5 border border-white/5 rounded-2xl flex items-center justify-center hover:bg-[var(--color-primary-red)] hover:border-[var(--color-primary-red)] transition-all group shadow-sm">
                                    <div className="text-slate-400 group-hover:text-white transition-colors">
                                        {social.icon}
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links Grid */}
                    <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-12">
                        {/* Solutions */}
                        <div>
                            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-[var(--color-primary-red)] mb-10 flex items-center gap-3">
                                <span className="w-8 h-px bg-[var(--color-primary-red)]/30"></span>
                                {footerData.solutions}
                            </h4>
                            <ul className="space-y-5">
                                {footerData.solutionsLinks.map((link, i) => (
                                    <li key={i}>
                                        <Link href={link.href} className="text-slate-400 hover:text-white text-sm font-bold transition-all flex items-center gap-3 group">
                                            <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[var(--color-primary-red)]" />
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-[var(--color-primary-red)] mb-10 flex items-center gap-3">
                                <span className="w-8 h-px bg-[var(--color-primary-red)]/30"></span>
                                {footerData.corporate}
                            </h4>
                            <ul className="space-y-5">
                                {footerData.corporateLinks.map((link, i) => (
                                    <li key={i}>
                                        <Link href={link.href} className="text-slate-400 hover:text-white text-sm font-bold transition-all flex items-center gap-3 group">
                                            <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[var(--color-primary-red)]" />
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                                {footerData.infoLinks.map((link, i) => (
                                    <li key={i + 10}>
                                        <Link href={link.href} className="text-slate-400 hover:text-white text-sm font-bold transition-all flex items-center gap-3 group">
                                            <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[var(--color-primary-red)]" />
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-[var(--color-primary-red)] mb-10 flex items-center gap-3">
                            <span className="w-8 h-px bg-[var(--color-primary-red)]/30"></span>
                            {footerData.contact}
                        </h4>
                        <div className="space-y-8">
                            {[
                                { city: isEn ? "Istanbul HQ" : "İstanbul Merkez", addr: "Üsküdar / İstanbul" },
                                { city: isEn ? "Budapest Branch" : "Budapeşte Şube", addr: "1063 Budapest" }
                            ].map((loc, i) => (
                                <div key={i} className="flex items-start gap-4 group">
                                    <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-red-500/10 transition-colors">
                                        <MapPin className="w-5 h-5 text-[var(--color-primary-red)]" />
                                    </div>
                                    <div className="text-xs">
                                        <div className="font-black text-white uppercase tracking-widest mb-1.5">{loc.city}</div>
                                        <div className="text-slate-500 font-medium leading-relaxed">{loc.addr}</div>
                                    </div>
                                </div>
                            ))}
                            <div className="space-y-4 pt-8 border-t border-white/5">
                                <a href={`tel:${CONTACT_PHONE.replace(/\s+/g, '')}`} className="flex items-center gap-4 text-sm font-bold text-slate-400 hover:text-white transition-colors group">
                                    <Phone className="w-5 h-5 text-[var(--color-primary-red)]" />
                                    <span>{CONTACT_PHONE}</span>
                                </a>
                                <a href={`mailto:${CONTACT_EMAIL}`} className="flex items-center gap-4 text-sm font-bold text-slate-400 hover:text-white transition-colors group">
                                    <Mail className="w-5 h-5 text-[var(--color-primary-red)]" />
                                    <span className="lowercase">{CONTACT_EMAIL}</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Privacy Bar */}
                <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex items-center gap-4">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-lg shadow-green-500/50"></div>
                        <p className="text-slate-500 text-[10px] font-black uppercase tracking-[0.2em] transition-colors">
                            © 2026 EOS PROJE. {footerData.rights}
                        </p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-8 text-[10px] font-black uppercase tracking-[0.2em]">
                        {[
                            { label: "KVKK", href: "/kvkk" },
                            { label: isEn ? "Privacy" : "Gizlilik", href: "/gizlilik" },
                            { label: isEn ? "Cookies" : "Çerezler", href: "/cerez-politikasi" }
                        ].map((legal, i) => (
                            <Link key={i} href={isEn ? "/en" + legal.href : legal.href} className="text-slate-500 hover:text-[var(--color-primary-red)] transition-colors">
                                {legal.label}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
