"use client";

import SubPageHero from "@/components/SubPageHero";
import { FileText, Download, FileBox, FileCode, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function DocsClient() {
    const documents = [
        {
            category: "Sample Project Files",
            items: [
                { name: "Sample_Architecture_LOD300.rvt", size: "45 MB", type: "RVT", desc: "Sample architectural Revit model (2024)" },
                { name: "Sample_MEP_PlantRoom_LOD350.ifc", size: "28 MB", type: "IFC", desc: "Industrial facility sample in IFC 2x3 format" },
                { name: "Sample_FloorPlan_Level1.pdf", size: "4.2 MB", type: "PDF", desc: "Floor plan sheet generated from BIM model" },
                { name: "Sample_Cloud_Compare_Report.pdf", size: "8.5 MB", type: "PDF", desc: "Sample point cloud deviation analysis report" }
            ]
        },
        {
            category: "Technical Specifications and Standards",
            items: [
                { name: "EosProje_BIM_Execution_Plan_Template.docx", size: "1.2 MB", type: "DOCX", desc: "Our standard BEP (BIM Execution Plan) template" },
                { name: "LOD_Specification_Matrix_2024.xlsx", size: "0.5 MB", type: "XLSX", desc: "LOD 200-400 level of detail matrix" },
                { name: "Laser_Scanning_Method_Statement.pdf", size: "2.1 MB", type: "PDF", desc: "Field scanning methodology and safety procedure" }
            ]
        },
        {
            category: "Corporate Documents",
            items: [
                { name: "EosProje_Company_Profile_EN.pdf", size: "5.4 MB", type: "PDF", desc: "General company profile catalog" },
                { name: "ISO_9001_14001_Certificates.pdf", size: "1.8 MB", type: "PDF", desc: "Our quality and environmental management system certificates" },
                { name: "Reference_List_2025.pdf", size: "0.8 MB", type: "PDF", desc: "Completed projects and client list" }
            ]
        }
    ];

    return (
        <div className="min-h-screen bg-white">
            <SubPageHero
                title="Technical Documents"
                description="Access sample project files, technical specifications, BIM execution plans, and company catalogs here."
                category="Resources"
                breadcrumb={[{ label: "Technical Documents", href: "/en/technical-docs" }]}
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
                                                    <Download className="w-4 h-4" /> Download
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
                    <h2 className="text-3xl font-black mb-6">Custom File Request</h2>
                    <p className="text-slate-300 mb-10 max-w-2xl mx-auto text-lg">
                        If you are looking for a specific sector example or technical document, please fill out the request form.
                        Our technical team will share a WeTransfer link containing suitable sample files for you.
                    </p>
                    <Link href="/en/contact" className="inline-flex items-center gap-2 px-10 py-5 bg-[var(--color-primary-red)] text-white font-black rounded-2xl hover:bg-red-700 transition-all">
                        Request Files <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </div>
        </div>
    );
}
