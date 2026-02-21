"use client";

import { useState } from "react";
import { calculatePrice, LOD_LEVELS, SECTORS, EXTRA_SERVICES, PricingCalculation } from "@/data/pricing-config";
import { CheckSquare, ArrowRight, Plus, ChevronDown, ChevronUp, Zap } from "lucide-react";

export default function PricingCalculator({ isEn = false }: { isEn?: boolean }) {
    const [formData, setFormData] = useState({
        area: "",
        lodLevel: "300",
        hasLaserScanning: true,
        sector: "mimarlik",
        name: "",
        email: "",
        phone: "",
        company: "",
    });

    const [selectedExtras, setSelectedExtras] = useState<string[]>([]);
    const [isUrgent, setIsUrgent] = useState(false);
    const [showExtras, setShowExtras] = useState(false);

    // Calculation sonucunu sadece limit kontrolü ve API'ye göndermek için kullanacağız, ekrana basmayacağız.
    const [calculationResult, setCalculationResult] = useState<PricingCalculation | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

    const labels = isEn ? {
        badge: "Custom Proposal",
        title: "Request a Quote",
        subtitle: "Fill in your project details to request a personalized quote.",
        success: "Request received successfully!",
        successDetail: "Our team will review your project and contact you via email shortly.",
        error: "An error occurred.",
        errorDetail: "Please try again or contact us directly.",
        areaLabel: "Project Area (m²) *",
        areaPlaceholder: "e.g. 2500",
        lodLabel: "LOD Level *",
        sectorLabel: "Sector *",
        laserScanning: "Include laser scanning service",
        addExtras: "ADD EXTRA SERVICES",
        urgentLabel: "URGENT DELIVERY (+30%)",
        urgentDetail: "Reduce delivery time by 50%",
        contactNote: "We need your contact details to send the proposal.",
        contactTitle: "Contact & Company Information",
        namePlaceholder: "Full Name *",
        emailPlaceholder: "Work Email *",
        phonePlaceholder: "Phone Number *",
        companyPlaceholder: "Company Name *",
        calculateBtn: "Submit Quote Request",
        limitTitle: "Large Scale Project",
        limitDetail: "For projects over 50,000 m², please contact us directly for custom pricing and capacity planning.",
        contactUs: "Contact Us",
        submitBtn: "Send Request",
        submitting: "Sending...",
        kvkkNote: "By clicking Submit, you accept the KVKK Clarification Text.",
        disclaimer: "Your request will be reviewed by our engineering team."
    } : {
        badge: "Size Özel Teklif",
        title: "Teklif İste",
        subtitle: "Proje detaylarını girerek size özel fiyat teklifi talep edin.",
        success: "Talebiniz başarıyla alındı!",
        successDetail: "Ekibimiz projenizi inceleyip en kısa sürede e-posta ile dönüş yapacaktır.",
        error: "Bir hata oluştu.",
        errorDetail: "Lütfen tekrar deneyin veya bize doğrudan ulaşın.",
        areaLabel: "Proje Alanı (m²) *",
        areaPlaceholder: "Örn: 2500",
        lodLabel: "LOD Seviyesi *",
        sectorLabel: "Sektör *",
        laserScanning: "Lazer tarama hizmeti dahil",
        addExtras: "EK HİZMETLER EKLE",
        urgentLabel: "ACİL TESLİMAT (+30%)",
        urgentDetail: "Teslim süresini %50 kısaltın",
        contactNote: "Teklifi size ulaştırmak için iletişim bilgilerinize ihtiyacımız var.",
        contactTitle: "İletişim ve Şirket Bilgileri",
        namePlaceholder: "Ad Soyad *",
        emailPlaceholder: "İş E-postası *",
        phonePlaceholder: "Telefon Numarası *",
        companyPlaceholder: "Şirket Adı *",
        calculateBtn: "Teklif İste",
        limitTitle: "Büyük Ölçekli Proje",
        limitDetail: "50.000 m² üzerindeki projeler için lütfen size özel fiyatlandırma ve kapasite planlaması adına bizimle doğrudan iletişime geçiniz.",
        contactUs: "İletişime Geçin",
        submitBtn: "Talebi Gönder",
        submitting: "Gönderiliyor...",
        kvkkNote: "Teklif İste düğmesine basarak KVKK Aydınlatma Metni'ni kabul etmiş sayılırsınız.",
        disclaimer: "Talebiniz mühendislik ekibimiz tarafından incelenecektir."
    };

    const lodDescriptionsEn: Record<string, string> = {
        "100": "Mass/volume (concept)",
        "200": "Generic elements (schematic)",
        "300": "Measure-based as-built (standard)",
        "350": "Coordination (inc. MEP)",
        "400": "Fabrication/shop drawing (special)"
    };

    const sectorLabelsEn: Record<string, string> = {
        "mimarlik": "Architecture",
        "renovasyon": "Renovation Projects",
        "insaat": "Construction & Contracting",
        "endustriyel": "Industrial Facility",
        "restorasyon": "Restoration & Heritage"
    };

    const extraLabelsEn: Record<string, string> = {
        "drone": "Drone Survey",
        "ortofoto": "Orthophoto Production",
        "animasyon": "Animation/Walkthrough Video",
        "sapma": "Deviation Analysis Report",
        "revizyon": "Revision Right"
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const value = e.target.type === "checkbox" ? (e.target as HTMLInputElement).checked : e.target.value;
        setFormData({
            ...formData,
            [e.target.name]: value,
        });
    };

    const toggleExtra = (id: string) => {
        setSelectedExtras(prev =>
            prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
        );
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Validation
        if (!formData.area || parseFloat(formData.area) <= 0) {
            alert(isEn ? "Please enter a valid area." : "Lütfen geçerli bir alan giriniz.");
            return;
        }

        if (!formData.name || !formData.email || !formData.phone || !formData.company) {
            alert(isEn ? "Please fill in all contact information." : "Lütfen tüm iletişim bilgilerini doldurunuz.");
            return;
        }

        // Calculate internally for backend reference
        const calculation = calculatePrice(
            parseFloat(formData.area),
            formData.lodLevel,
            formData.hasLaserScanning,
            formData.sector,
            selectedExtras,
            isUrgent
        );

        // Check for limit
        if (calculation.isLimitExceeded) {
            setCalculationResult(calculation); // To show limit warning
            return;
        }

        setIsSubmitting(true);
        setSubmitStatus("idle");

        try {
            const response = await fetch("/api/calculate-quote", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    ...formData,
                    selectedExtras,
                    isUrgent,
                    calculation, // Backend needs this to email Admin
                    locale: isEn ? "en" : "tr"
                }),
            });

            if (response.ok) {
                setSubmitStatus("success");
                setFormData({
                    area: "",
                    lodLevel: "300",
                    hasLaserScanning: true,
                    sector: "mimarlik",
                    name: "",
                    email: "",
                    phone: "",
                    company: "",
                });
                setSelectedExtras([]);
                setIsUrgent(false);
                setCalculationResult(null);
            } else {
                setSubmitStatus("error");
            }
        } catch (error) {
            console.error("Error submitting quote:", error);
            setSubmitStatus("error");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="bg-white/70 backdrop-blur-2xl rounded-[3rem] shadow-2xl p-10 md:p-20 border border-white/60 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-red-500/5 rounded-full blur-[100px] -mr-48 -mt-48 pointer-events-none"></div>

            <div className="text-center mb-20 relative z-10">
                <span className="text-[var(--color-primary-red)] font-black uppercase tracking-[0.4em] text-[10px] bg-red-50/50 px-6 py-3 rounded-full mb-10 inline-block backdrop-blur-sm border border-red-100/50 shadow-sm">
                    {labels.badge}
                </span>
                <h2 className="text-5xl md:text-7xl font-black mb-8 text-slate-900 tracking-tight text-balance leading-[1.1]">
                    {labels.title}
                </h2>
                <p className="text-xl text-slate-500 font-medium leading-relaxed max-w-2xl mx-auto text-balance">
                    {labels.subtitle}
                </p>
            </div>

            {submitStatus === "success" && (
                <div className="mb-12 p-10 bg-green-50/50 backdrop-blur-md border border-green-100 rounded-[3rem] flex items-center gap-8 animate-in fade-in zoom-in duration-700 relative z-10">
                    <div className="w-16 h-16 bg-green-500 rounded-[2rem] flex items-center justify-center text-white shrink-0 shadow-2xl shadow-green-200 group-hover:rotate-6 transition-transform">
                        <CheckSquare className="w-8 h-8" />
                    </div>
                    <div>
                        <p className="text-green-900 text-xl font-black mb-1">{labels.success}</p>
                        <p className="text-green-700 font-medium">{labels.successDetail}</p>
                    </div>
                </div>
            )}

            {calculationResult?.isLimitExceeded && (
                <div className="mb-12 p-10 bg-red-50/50 border border-red-100 rounded-[3rem] text-center backdrop-blur-sm relative overflow-hidden animate-in fade-in slide-in-from-bottom-4">
                    <h3 className="text-2xl font-black text-red-900 mb-4 tracking-tight uppercase">{labels.limitTitle}</h3>
                    <p className="text-red-700 font-medium mb-8 leading-relaxed max-w-xl mx-auto">{labels.limitDetail}</p>
                    <a
                        href="mailto:info@eosproje.com"
                        className="inline-block px-10 py-4 bg-[var(--color-primary-red)] text-white font-black rounded-2xl hover:bg-red-800 transition-all shadow-xl uppercase tracking-[0.2em] text-xs"
                    >
                        {labels.contactUs}
                    </a>
                </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-16 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="group">
                        <label htmlFor="area" className="block text-[11px] font-black text-slate-400 uppercase tracking-[0.3em] mb-5 ml-4">
                            {labels.areaLabel}
                        </label>
                        <div className="relative">
                            <input
                                type="number"
                                id="area"
                                name="area"
                                required
                                min="1"
                                value={formData.area}
                                onChange={handleChange}
                                className="w-full px-10 py-6 bg-white border border-slate-100 rounded-[2rem] focus:ring-2 focus:ring-[var(--color-primary-red)] focus:border-transparent outline-none transition-all font-bold text-slate-900 shadow-sm hover:shadow-xl group-hover:border-red-100/50 text-lg"
                                placeholder={labels.areaPlaceholder}
                            />
                            <div className="absolute right-10 top-1/2 -translate-y-1/2 text-slate-300 font-black text-sm tracking-widest uppercase">m²</div>
                        </div>
                    </div>

                    <div className="group">
                        <label htmlFor="lodLevel" className="block text-[11px] font-black text-slate-400 uppercase tracking-[0.3em] mb-5 ml-4">
                            {labels.lodLabel}
                        </label>
                        <div className="relative">
                            <select
                                id="lodLevel"
                                name="lodLevel"
                                required
                                value={formData.lodLevel}
                                onChange={handleChange}
                                className="w-full px-10 py-6 bg-white border border-slate-100 rounded-[2rem] focus:ring-2 focus:ring-[var(--color-primary-red)] focus:border-transparent outline-none transition-all font-bold text-slate-900 appearance-none shadow-sm hover:shadow-xl group-hover:border-red-100/50 cursor-pointer text-lg"
                            >
                                {LOD_LEVELS.map((lod) => (
                                    <option key={lod.level} value={lod.level}>
                                        LOD {lod.level} - {isEn ? lodDescriptionsEn[lod.level] : lod.description}
                                    </option>
                                ))}
                            </select>
                            <ChevronDown className="absolute right-10 top-1/2 -translate-y-1/2 w-6 h-6 text-slate-300 pointer-events-none group-hover:text-[var(--color-primary-red)] transition-colors" />
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="group">
                        <label htmlFor="sector" className="block text-[11px] font-black text-slate-400 uppercase tracking-[0.3em] mb-5 ml-4">
                            {labels.sectorLabel}
                        </label>
                        <div className="relative">
                            <select
                                id="sector"
                                name="sector"
                                required
                                value={formData.sector}
                                onChange={handleChange}
                                className="w-full px-10 py-6 bg-white border border-slate-100 rounded-[2rem] focus:ring-2 focus:ring-[var(--color-primary-red)] focus:border-transparent outline-none transition-all font-bold text-slate-900 appearance-none shadow-sm hover:shadow-xl group-hover:border-red-100/50 cursor-pointer text-lg"
                            >
                                {SECTORS.map((sector) => (
                                    <option key={sector.value} value={sector.value}>
                                        {isEn ? sectorLabelsEn[sector.value] : sector.label}
                                    </option>
                                ))}
                            </select>
                            <ChevronDown className="absolute right-10 top-1/2 -translate-y-1/2 w-6 h-6 text-slate-300 pointer-events-none group-hover:text-[var(--color-primary-red)] transition-colors" />
                        </div>
                    </div>

                    <div className="flex items-center pt-8 ml-4">
                        <label className="relative flex items-center cursor-pointer group/toggle">
                            <input
                                type="checkbox"
                                name="hasLaserScanning"
                                checked={formData.hasLaserScanning}
                                onChange={handleChange}
                                className="sr-only peer"
                            />
                            <div className="w-16 h-9 bg-slate-100 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-7 peer-checked:after:border-white after:content-[''] after:absolute after:top-[4px] after:left-[4px] after:bg-white after:border-slate-200 after:border after:rounded-full after:h-7 after:w-7 after:transition-all peer-checked:bg-[var(--color-primary-red)] border border-slate-100 transition-colors shadow-inner"></div>
                            <span className="ml-5 text-base font-bold text-slate-700 group-hover/toggle:text-[var(--color-primary-red)] transition-colors">{labels.laserScanning}</span>
                        </label>
                    </div>
                </div>

                <div className="space-y-8">
                    <button
                        type="button"
                        onClick={() => setShowExtras(!showExtras)}
                        className="flex items-center gap-5 px-10 py-5 bg-slate-50 border border-slate-100 rounded-[2rem] hover:bg-slate-100 transition-all text-[var(--color-primary-red)] font-black uppercase tracking-[0.3em] text-[11px] group w-full md:w-auto shadow-sm"
                    >
                        <div className={`w-8 h-8 rounded-xl flex items-center justify-center transition-all duration-500 shadow-sm ${showExtras ? 'bg-[var(--color-primary-red)] text-white rotate-[135deg] scale-110' : 'bg-white text-[var(--color-primary-red)]'}`}>
                            <Plus className="w-5 h-5" />
                        </div>
                        {labels.addExtras}
                        <ChevronDown className={`w-5 h-5 ml-4 transition-transform duration-500 ${showExtras ? 'rotate-180' : ''}`} />
                    </button>

                    {showExtras && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-12 bg-[#F8FAFC] border border-slate-100 rounded-[3rem] animate-in fade-in slide-in-from-top-6 duration-700 shadow-inner">
                            {EXTRA_SERVICES.map(service => (
                                <label key={service.id} className="flex items-start gap-5 cursor-pointer group/extra">
                                    <div className={`mt-1 flex-shrink-0 w-7 h-7 rounded-[0.9rem] border-2 flex items-center justify-center transition-all duration-300 ${selectedExtras.includes(service.id) ? 'bg-[var(--color-primary-red)] border-[var(--color-primary-red)] shadow-lg shadow-red-200' : 'border-slate-200 bg-white group-hover/extra:border-[var(--color-primary-red)] group-hover/extra:scale-110'}`}>
                                        <input
                                            type="checkbox"
                                            className="sr-only"
                                            checked={selectedExtras.includes(service.id)}
                                            onChange={() => toggleExtra(service.id)}
                                        />
                                        {selectedExtras.includes(service.id) && <CheckSquare className="w-4 h-4 text-white" />}
                                    </div>
                                    <div className="space-y-1.5">
                                        <p className="text-base font-bold text-slate-800 group-hover/extra:text-[var(--color-primary-red)] transition-colors">{isEn ? extraLabelsEn[service.id] : service.label}</p>
                                        <p className="text-[10px] text-slate-400 font-black uppercase tracking-[0.3em] bg-white w-fit px-3 py-1 rounded-full border border-slate-100 shadow-sm">{isEn ? `from ${service.price.toLocaleString("en-US")} TL` : `${service.price.toLocaleString("tr-TR")} TL'den başlayan`}</p>
                                    </div>
                                </label>
                            ))}
                        </div>
                    )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="flex items-center">
                        <label className="relative flex items-center cursor-pointer p-10 bg-orange-50/40 backdrop-blur-sm border border-orange-100/50 rounded-[3rem] w-full transition-all hover:bg-orange-50 hover:shadow-2xl hover:shadow-orange-200/20 group/urgent border-dashed">
                            <input
                                type="checkbox"
                                checked={isUrgent}
                                onChange={(e) => setIsUrgent(e.target.checked)}
                                className="sr-only peer"
                            />
                            <div className="w-16 h-9 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-7 peer-checked:after:border-white after:content-[''] after:absolute after:top-[4px] after:left-[4px] after:bg-white after:border-slate-200 after:border after:rounded-full after:h-7 after:w-7 after:transition-all peer-checked:bg-orange-600 shadow-inner"></div>
                            <div className="ml-8 flex flex-col">
                                <div className="flex items-center gap-3 text-orange-700 font-black text-[12px] uppercase tracking-[0.3em]">
                                    <Zap className="w-5 h-5 fill-orange-500 text-orange-500 animate-pulse" /> {labels.urgentLabel}
                                </div>
                                <span className="text-[11px] text-orange-600/60 font-black uppercase tracking-[0.2em] mt-2">{labels.urgentDetail}</span>
                            </div>
                        </label>
                    </div>

                    <div className="bg-slate-50 p-10 rounded-[3rem] border border-slate-100 flex items-center gap-8 shadow-sm">
                        <div className="w-14 h-14 bg-white rounded-[1.2rem] flex items-center justify-center text-[var(--color-primary-red)] shadow-xl shadow-slate-200">
                            <ArrowRight className="w-6 h-6" />
                        </div>
                        <p className="text-sm font-bold text-slate-500 leading-relaxed text-balance italic">{labels.contactNote}</p>
                    </div>
                </div>

                <div className="bg-[#F8FAFC] p-12 md:p-16 rounded-[4rem] border border-slate-100 space-y-12 shadow-inner">
                    <div className="flex items-center gap-6 mb-4">
                        <div className="w-2 h-10 bg-[var(--color-primary-red)] rounded-full shadow-[0_0_15px_rgba(239,68,68,0.3)]"></div>
                        <h4 className="text-sm font-black text-slate-900 uppercase tracking-[0.4em]">{labels.contactTitle}</h4>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        {[
                            { name: "name", placeholder: labels.namePlaceholder, type: "text" },
                            { name: "email", placeholder: labels.emailPlaceholder, type: "email" },
                            { name: "phone", placeholder: labels.phonePlaceholder, type: "tel" },
                            { name: "company", placeholder: labels.companyPlaceholder, type: "text" }
                        ].map((input) => (
                            <div key={input.name} className="group">
                                <input
                                    type={input.type}
                                    name={input.name}
                                    required
                                    placeholder={input.placeholder}
                                    value={(formData as any)[input.name]}
                                    onChange={handleChange}
                                    className="w-full px-10 py-6 bg-white border border-slate-100 rounded-2xl focus:ring-2 focus:ring-[var(--color-primary-red)] outline-none transition-all font-bold text-sm shadow-sm group-hover:shadow-xl group-hover:border-red-100/50"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                <div className="space-y-6 text-center">
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-8 bg-slate-900 text-white font-black rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.2)] transition-all hover:-translate-y-2 uppercase tracking-[0.5em] text-[12px] flex items-center justify-center gap-6 group relative overflow-hidden"
                    >
                        {isSubmitting ? (
                            <span className="flex items-center gap-5">
                                <div className="w-6 h-6 border-3 border-white/30 border-t-white rounded-full animate-spin"></div>
                                {labels.submitting}
                            </span>
                        ) : (
                            <>
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-shimmer"></div>
                                <span className="relative z-10">{labels.calculateBtn}</span>
                                <ArrowRight className="w-6 h-6 group-hover:translate-x-3 transition-transform relative z-10" />
                            </>
                        )}
                    </button>
                    <p className="text-[11px] text-slate-400 font-bold max-w-lg mx-auto leading-relaxed">
                        {labels.kvkkNote} <br /> {labels.disclaimer}
                    </p>
                </div>
            </form>
        </div>
    );
}
