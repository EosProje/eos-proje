"use client";

import SubPageHero from "@/components/SubPageHero";
import { FileText, Download, FileBox, FileCode, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Page() {
    const documents = [
        {
            category: "Ãƒâ€“rnek Proje DosyalarÃ„Â±",
            items: [
                { name: "Sample_Architecture_LOD300.rvt", size: "45 MB", type: "RVT", desc: "Ãƒâ€“rnek mimari Revit modeli (2024)" },
                { name: "Sample_MEP_PlantRoom_LOD350.ifc", size: "28 MB", type: "IFC", desc: "IFC 2x3 formatÃ„Â±nda endÃƒÂ¼striyel tesisat ÃƒÂ¶rneÃ„Å¸i" },
                { name: "Sample_FloorPlan_Level1.pdf", size: "4.2 MB", type: "PDF", desc: "BIM modelinden ÃƒÂ¼retilmiÃ…Å¸ kat planÃ„Â± paftasÃ„Â±" },
                { name: "Sample_Cloud_Compare_Report.pdf", size: "8.5 MB", type: "PDF", desc: "Nokta bulutu sapma analiz raporu ÃƒÂ¶rneÃ„Å¸i" }
            ]
        },
        {
            category: "Teknik Ã…Âartnameler ve Standartlar",
            items: [
                { name: "EosProje_BIM_Execution_Plan_Template.docx", size: "1.2 MB", type: "DOCX", desc: "Standart BEP (BIM Uygulama PlanÃ„Â±) Ã…Å¸ablonumuz" },
                { name: "LOD_Specification_Matrix_2024.xlsx", size: "0.5 MB", type: "XLSX", desc: "LOD 200-400 detay seviyesi matrisi" },
                { name: "Laser_Scanning_Method_Statement.pdf", size: "2.1 MB", type: "PDF", desc: "Saha tarama metodolojisi ve gÃƒÂ¼venlik prosedÃƒÂ¼rÃƒÂ¼" }
            ]
        },
        {
            category: "Kurumsal DÃƒÂ¶kÃƒÂ¼manlar",
            items: [
                { name: "EosProje_Company_Profile_TR.pdf", size: "5.4 MB", type: "PDF", desc: "Genel Ã…Å¸irket tanÃ„Â±tÃ„Â±m kataloÃ„Å¸u" },
                { name: "ISO_9001_14001_Certificates.pdf", size: "1.8 MB", type: "PDF", desc: "Kalite ve ÃƒÂ§evre yÃƒÂ¶netim sistemi sertifikalarÃ„Â±mÃ„Â±z" },
                { name: "Referans_Listesi_2025.pdf", size: "0.8 MB", type: "PDF", desc: "Tamamlanan projeler ve mÃƒÂ¼Ã…Å¸teri listesi" }
            ]
        }
    ];

    return (
        <div className="min-h-screen bg-white">
            <SubPageHero
                title="Teknik DÃƒÂ¶kÃƒÂ¼manlar"
                description="Ãƒâ€“rnek proje dosyalarÃ„Â±, teknik Ã…Å¸artnameler, BIM uygulama planlarÃ„Â± ve Ã…Å¸irket kataloglarÃ„Â±mÃ„Â±za buradan eriÃ…Å¸ebilirsiniz."
                category="Kaynaklar"
                breadcrumb={[{ label: "Teknik DÃƒÂ¶kÃƒÂ¼manlar", href: "/teknik-dokumanlar" }]}
            />

            <div className="max-w-7xl mx-auto px-4 py-20">
                <div className="space-y-16">
                    {documents.map((section, idx) => (
                        <div key={idx}>
                            <h2 className="text-2xl font-black text-slate-900 mb-8 border-l-4 border-[var(--color-primary-red)] pl-4">
                                {section.category}
                            </h2>
                            <div className="grid md:grid-cols-2 gap-6">
                                {section.items.map((doc, i) => (
                                    <div key={i} className="group bg-slate-50 hover:bg-white rounded-2xl p-6 border-2 border-slate-100 hover:border-blue-100 transition-all hover:shadow-lg flex items-start gap-5">
                                        <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center border border-slate-200 group-hover:border-blue-200 group-hover:text-blue-600 transition-colors">
                                            {doc.type === "PDF" && <FileText className="w-6 h-6 text-red-500" />}
                                            {doc.type === "RVT" && <FileBox className="w-6 h-6 text-blue-600" />}
                                            {doc.type === "IFC" && <FileCode className="w-6 h-6 text-green-600" />}
                                            {doc.type === "DOCX" && <FileText className="w-6 h-6 text-blue-500" />}
                                            {doc.type === "XLSX" && <FileText className="w-6 h-6 text-green-500" />}
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="font-bold text-slate-900 mb-1 group-hover:text-blue-700 transition-colors">{doc.name}</h3>
                                            <p className="text-sm text-slate-500 mb-3">{doc.desc}</p>
                                            <div className="flex items-center gap-4 text-xs font-medium text-slate-400">
                                                <span className="bg-slate-200 px-2 py-1 rounded text-slate-600">{doc.type}</span>
                                                <span>{doc.size}</span>
                                                <button className="flex items-center gap-1 text-[var(--color-primary-red)] hover:underline ml-auto">
                                                    <Download className="w-4 h-4" /> Ã„Â°ndir
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Access Request CTA */}
                <div className="mt-24 bg-slate-900 rounded-[3rem] p-12 md:p-16 text-white text-center">
                    <h2 className="text-3xl font-black mb-6">Ãƒâ€“zel Dosya Talebi</h2>
                    <p className="text-slate-300 mb-10 max-w-2xl mx-auto text-lg">
                        Spesifik bir sektÃƒÂ¶r ÃƒÂ¶rneÃ„Å¸i veya teknik dÃƒÂ¶kÃƒÂ¼man arÃ„Â±yorsanÃ„Â±z, lÃƒÂ¼tfen talep formunu doldurun.
                        Teknik ekibimiz size uygun ÃƒÂ¶rnek dosyalarÃ„Â± iÃƒÂ§eren bir WeTransfer linki paylaÃ…Å¸acaktÃ„Â±r.
                    </p>
                    <Link href="/iletisim" className="inline-flex items-center gap-2 px-10 py-5 bg-[var(--color-primary-red)] text-white font-black rounded-2xl hover:bg-red-700 transition-all">
                        Dosya Talep Edin <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </div>
        </div>
    );
}
