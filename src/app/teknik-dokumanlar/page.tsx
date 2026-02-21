"use client";

import SubPageHero from "@/components/SubPageHero";
import { FileText, Download, FileBox, FileCode, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Page() {
    const documents = [
        {
            category: "Örnek Proje Dosyaları",
            items: [
                { name: "Sample_Architecture_LOD300.rvt", size: "45 MB", type: "RVT", desc: "Örnek mimari Revit modeli (2024)" },
                { name: "Sample_MEP_PlantRoom_LOD350.ifc", size: "28 MB", type: "IFC", desc: "IFC 2x3 formatında endüstriyel tesisat örneği" },
                { name: "Sample_FloorPlan_Level1.pdf", size: "4.2 MB", type: "PDF", desc: "BIM modelinden üretilmiş kat planı paftası" },
                { name: "Sample_Cloud_Compare_Report.pdf", size: "8.5 MB", type: "PDF", desc: "Nokta bulutu sapma analiz raporu örneği" }
            ]
        },
        {
            category: "Teknik Şartnameler ve Standartlar",
            items: [
                { name: "EosProje_BIM_Execution_Plan_Template.docx", size: "1.2 MB", type: "DOCX", desc: "Standart BEP (BIM Uygulama Planı) şablonumuz" },
                { name: "LOD_Specification_Matrix_2024.xlsx", size: "0.5 MB", type: "XLSX", desc: "LOD 200-400 detay seviyesi matrisi" },
                { name: "Laser_Scanning_Method_Statement.pdf", size: "2.1 MB", type: "PDF", desc: "Saha tarama metodolojisi ve güvenlik prosedürü" }
            ]
        },
        {
            category: "Kurumsal Dökümanlar",
            items: [
                { name: "EosProje_Company_Profile_TR.pdf", size: "5.4 MB", type: "PDF", desc: "Genel şirket tanıtım kataloğu" },
                { name: "ISO_9001_14001_Certificates.pdf", size: "1.8 MB", type: "PDF", desc: "Kalite ve çevre yönetim sistemi sertifikalarımız" },
                { name: "Referans_Listesi_2025.pdf", size: "0.8 MB", type: "PDF", desc: "Tamamlanan projeler ve müşteri listesi" }
            ]
        }
    ];

    return (
        <div className="min-h-screen bg-white">
            <SubPageHero
                title="Teknik Dökümanlar"
                description="Örnek proje dosyaları, teknik şartnameler, BIM uygulama planları ve şirket kataloglarımıza buradan erişebilirsiniz."
                category="Kaynaklar"
                breadcrumb={[{ label: "Teknik Dökümanlar", href: "/teknik-dokumanlar" }]}
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
                                                    <Download className="w-4 h-4" /> İndir
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
                    <h2 className="text-3xl font-black mb-6">Özel Dosya Talebi</h2>
                    <p className="text-slate-300 mb-10 max-w-2xl mx-auto text-lg">
                        Spesifik bir sektör örneği veya teknik döküman arıyorsanız, lütfen talep formunu doldurun.
                        Teknik ekibimiz size uygun örnek dosyaları içeren bir WeTransfer linki paylaşacaktır.
                    </p>
                    <Link href="/iletisim" className="inline-flex items-center gap-2 px-10 py-5 bg-[var(--color-primary-red)] text-white font-black rounded-2xl hover:bg-red-700 transition-all">
                        Dosya Talep Edin <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </div>
        </div>
    );
}
