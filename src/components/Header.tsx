"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, Cpu, ChevronDown, ArrowRight, Phone, Mail, MapPin } from "lucide-react";
import { EASE_CURVES } from "@/lib/animations";
import { CONTACT_EMAIL, CONTACT_PHONE, getLanguageEquivalentPath } from "@/lib/constants";

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const pathname = usePathname() || "/";
    const isEn = pathname.startsWith("/en");

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const menuItems = isEn ? {
        home: "Home",
        solutions: "Solutions",
        solutionsItems: [
            { label: "Point Cloud to BIM", href: "/en/solutions/point-cloud-to-bim" },
            { label: "As-built Modeling", href: "/en/solutions/as-built-modeling" },
            { label: "2D to 3D/BIM Conversion", href: "/en/solutions/2d-to-3d-bim-conversion" },
            { label: "Industrial Equipment", href: "/en/solutions/industrial-equipment-modeling" },
            { label: "All Solutions", href: "/en/solutions" }
        ],
        sectors: "Sectors",
        sectorsItems: [
            { label: "Industrial Facilities", href: "/en/sectors#endustriyel-tesis" },
            { label: "Architecture", href: "/en/sectors#mimarlik" },
            { label: "Restoration", href: "/en/sectors#restorasyon" },
            { label: "Renovation", href: "/en/sectors#renovasyon" },
            { label: "Construction", href: "/en/sectors#insaat-taahhut" },
            { label: "All Sectors", href: "/en/sectors" }
        ],
        process: "Process & Quality",
        processItems: [
            { label: "Process & Standards", href: "/en/process-and-standards" },
            { label: "QA/QC", href: "/en/qa-qc" },
            { label: "Pricing", href: "/en/pricing" }
        ],
        info: "Info Center",
        infoItems: [
            { label: "References", href: "/en/references" },
            { label: "Blog", href: "/en/blog" },
            { label: "Technical Docs", href: "/en/technical-docs" },
            { label: "FAQ", href: "/en/faq" }
        ],
        corporate: "Corporate",
        corporateItems: [
            { label: "About Us", href: "/en/about" },
            { label: "Quality Policy", href: "/en/quality-policy" },
            { label: "Team", href: "/en/team" },
            { label: "Contact", href: "/en/contact" }
        ],
        cta: "Get Quote",
        tr: "TR",
        en: "EN"
    } : {
        home: "Ana Sayfa",
        solutions: "Çözümler",
        solutionsItems: [
            { label: "Point Cloud to BIM", href: "/cozumler/nokta-bulutu-bim" },
            { label: "As-built Modelleme", href: "/cozumler/mevcut-durum-modelleme" },
            { label: "2D to 3D/BIM Dönüşüm", href: "/cozumler/2d-3d-bim-donusum" },
            { label: "Endüstriyel Ekipman", href: "/cozumler/endustriyel-ekipman-modelleme" },
            { label: "Tüm Çözümler", href: "/cozumler" }
        ],
        sectors: "Sektörler",
        sectorsItems: [
            { label: "Endüstriyel Tesis", href: "/sektorler#endustriyel-tesis" },
            { label: "Mimarlık & Tasarım", href: "/sektorler#mimarlik" },
            { label: "Restorasyon", href: "/sektorler#restorasyon" },
            { label: "Renovasyon", href: "/sektorler#renovasyon" },
            { label: "İnşaat & Taahhüt", href: "/sektorler#insaat-taahhut" },
            { label: "Tüm Sektörler", href: "/sektorler" }
        ],
        process: "Süreç & Kalite",
        processItems: [
            { label: "Süreç & Standartlar", href: "/surec-ve-standartlar" },
            { label: "QA/QC", href: "/qa-qc" },
            { label: "Ücretlendirme", href: "/ucretlendirme" }
        ],
        info: "Bilgi Merkezi",
        infoItems: [
            { label: "Referanslar", href: "/referanslar" },
            { label: "Blog", href: "/blog" },
            { label: "Teknik Dökümanlar", href: "/teknik-dokumanlar" },
            { label: "SSS", href: "/sss" }
        ],
        corporate: "Kurumsal",
        corporateItems: [
            { label: "Hakkımızda", href: "/hakkimizda" },
            { label: "Kalite Politikamız", href: "/kalite-politikamiz" },
            { label: "Ekip", href: "/ekip" },
            { label: "İletişim", href: "/iletisim" }
        ],
        cta: "Teklif Al",
        tr: "TR",
        en: "EN"
    };

    const NavItem = ({ label, items }: { label: string; items: { label: string; href: string }[] }) => (
        <div className="relative group/menu">
            <button className="flex items-center gap-1.5 px-4 py-2 text-[11px] font-black uppercase tracking-widest text-slate-600 hover:text-[var(--color-primary-red)] transition-colors">
                {label}
                <ChevronDown className="w-3.5 h-3.5 group-hover/menu:rotate-180 transition-transform duration-300" />
            </button>
            <div className="absolute top-full left-0 pt-4 opacity-0 invisible group-hover/menu:opacity-100 group-hover/menu:visible transition-all duration-300 translate-y-2 group-hover/menu:translate-y-0 z-[100]">
                <div className="bg-white/95 backdrop-blur-xl border border-slate-100 shadow-2xl rounded-3xl p-3 min-w-[220px]">
                    {items.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`flex items-center justify-between px-5 py-3 hover:bg-slate-50 rounded-2xl transition-all group/item ${pathname === item.href ? "bg-red-50 text-[var(--color-primary-red)]" : "text-slate-600"
                                }`}
                        >
                            <span className="text-xs font-bold">{item.label}</span>
                            <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all text-[var(--color-primary-red)]" />
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );

    return (
        <>
            {/* Top Bar */}
            <div className="bg-[var(--color-deep-charcoal)] text-white/80 py-2.5 px-4 sm:px-6 lg:px-8 border-b border-white/5 relative z-[60]">
                <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center text-[10px] font-black uppercase tracking-[0.2em]">
                    <div className="flex items-center gap-8">
                        <a href={`https://wa.me/${CONTACT_PHONE.replace(/\s+/g, '')}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 hover:text-white transition-colors">
                            <Phone className="w-3.5 h-3.5 text-[var(--color-primary-red)]" />
                            <span>{CONTACT_PHONE}</span>
                        </a>
                        <div className="hidden sm:flex items-center gap-2.5 hover:text-white transition-colors">
                            <Mail className="w-3.5 h-3.5 text-[var(--color-primary-red)]" />
                            <span className="lowercase">{CONTACT_EMAIL}</span>
                        </div>
                    </div>

                    <div className="flex items-center gap-8">
                        <div className="hidden md:flex items-center gap-4">
                            <div className="flex items-center gap-2">
                                <MapPin className="w-3.5 h-3.5 text-[var(--color-primary-red)]" />
                                <span>{isEn ? "Istanbul / Budapest" : "İstanbul / Budapeşte"}</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 border-l border-white/10 pl-8">
                            <a
                                href={getLanguageEquivalentPath(pathname, 'tr')}
                                className={`transition-colors ${!isEn ? "text-white" : "text-white/40 hover:text-white"}`}
                                onClick={(e) => {
                                    e.preventDefault();
                                    window.location.href = getLanguageEquivalentPath(pathname, 'tr');
                                }}
                            >
                                TR
                            </a>
                            <span className="text-white/10 font-light">|</span>
                            <a
                                href={getLanguageEquivalentPath(pathname, 'en')}
                                className={`transition-colors ${isEn ? "text-white" : "text-white/40 hover:text-white"}`}
                                onClick={(e) => {
                                    e.preventDefault();
                                    window.location.href = getLanguageEquivalentPath(pathname, 'en');
                                }}
                            >
                                EN
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <header
                className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled
                    ? "mt-0 py-3 bg-white/70 premium-blur border-b border-slate-200/50 shadow-xl shadow-slate-900/5"
                    : "mt-10 py-6 bg-transparent"
                    }`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center">
                        {/* Logo */}
                        <div className="flex-shrink-0 relative group">
                            <Link href={isEn ? "/en" : "/"} className="flex items-center gap-3">
                                <span className="text-2xl font-black text-slate-900 tracking-tighter uppercase">
                                    EOS<span className="text-[var(--color-primary-red)]">PROJE</span>
                                </span>
                            </Link>
                        </div>

                        {/* Desktop Nav */}
                        <nav className="hidden lg:flex items-center gap-1">
                            <NavItem label={menuItems.solutions} items={menuItems.solutionsItems} />
                            <NavItem label={menuItems.sectors} items={menuItems.sectorsItems} />
                            <NavItem label={menuItems.process} items={menuItems.processItems} />
                            <NavItem label={menuItems.info} items={menuItems.infoItems} />
                            <NavItem label={menuItems.corporate} items={menuItems.corporateItems} />

                            <Link href={isEn ? "/en/contact" : "/iletisim"} className="ml-6 px-8 py-3.5 bg-[var(--color-primary-red)] text-white text-[11px] font-black uppercase tracking-widest rounded-2xl hover:bg-red-800 transition-all shadow-xl shadow-red-900/20 hover:shadow-red-900/40 hover:-translate-y-0.5">
                                {menuItems.cta}
                            </Link>
                        </nav>

                        {/* Mobile Button */}
                        <div className="lg:hidden">
                            <button
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className="w-12 h-12 flex items-center justify-center rounded-2xl bg-white border border-slate-100 shadow-lg text-slate-900 hover:text-[var(--color-primary-red)] transition-colors"
                            >
                                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="lg:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-2xl border-b border-slate-100 shadow-2xl overflow-y-auto max-h-[80vh]">
                        <div className="p-6 space-y-6">
                            {[
                                { title: menuItems.solutions, items: menuItems.solutionsItems },
                                { title: menuItems.sectors, items: menuItems.sectorsItems },
                                { title: menuItems.process, items: menuItems.processItems },
                                { title: menuItems.info, items: menuItems.infoItems },
                                { title: menuItems.corporate, items: menuItems.corporateItems },
                            ].map((section, idx) => (
                                <div key={idx} className="space-y-3">
                                    <div className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 px-4">{section.title}</div>
                                    <div className="grid grid-cols-1 gap-2">
                                        {section.items.map((item) => (
                                            <Link
                                                key={item.href}
                                                href={item.href}
                                                onClick={() => setIsMobileMenuOpen(false)}
                                                className="block px-4 py-3 bg-slate-50 rounded-2xl text-sm font-bold text-slate-700 hover:bg-red-50 hover:text-[var(--color-primary-red)] transition-all"
                                            >
                                                {item.label}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            ))}
                            <div className="pt-6">
                                <Link
                                    href={isEn ? "/en/contact" : "/iletisim"}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="block w-full py-5 bg-[var(--color-primary-red)] text-white text-center text-xs font-black uppercase tracking-widest rounded-2xl shadow-xl shadow-red-900/20"
                                >
                                    {menuItems.cta}
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
            </header>
        </>
    );
}
