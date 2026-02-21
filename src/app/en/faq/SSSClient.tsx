"use client";

import { useState } from "react";
import Link from "next/link";
import SubPageHero from "@/components/SubPageHero";
import { ChevronDown } from "lucide-react";

export default function SSSClient() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const faqs = [
        {
            q: "How long does the Point Cloud to BIM process take?",
            a: "It depends on the project size. For a 3,000-5,000 mÂ² industrial facility, scanning takes 2-3 days, and modeling takes 10-15 business days. Including delivery time, we deliver within 3-4 weeks. An express option is available for urgent projects."
        },
        {
            q: "In which LOD (Level of Development) levels do you work?",
            a: "We provide services at all levels from LOD 200 to LOD 400. LOD 200: General geometry and approximate dimensions. LOD 300: Precise dimensions, material definitions, and connection points. LOD 350: Detailed interface info. LOD 400: Fabrication-level details. We determine the most suitable LOD together based on your project needs."
        },
        {
            q: "In which software and file formats do you deliver?",
            a: "We deliver in Revit native (.rvt), IFC 2x3 or IFC4 open BIM formats, AutoCAD DWG plans, Navisworks (.nwc), and raw point cloud data (E57, RCS, RCP). On request, we also provide PDF A0 drawings and COBie tables."
        },
        {
            q: "Do facility operations stop during laser scanning?",
            a: "No, in most cases, we scan while operations continue. Short-term access may be needed only in critical safety areas. We adjust the scanning plan to suit your production schedule, usually working between shifts or on weekends."
        },
        {
            q: "How is modeling accuracy guaranteed?",
            a: "We have a three-stage QA/QC process: 1) Internal check by the modeling team. 2) Geometric validation by an independent quality control specialist. 3) Point cloud-model overlay comparison with CloudCompare (deviation analysis). We provide a Â±2mm precision report in the delivery package. Also, all Revit Warnings are cleared and clash detection is performed."
        },
        {
            q: "Do you offer offshore modeling?",
            a: "Yes, our team does the field scanning on-site, or you scan and send us the point cloud data. Modeling is performed in our Istanbul office. We track progress with weekly online meetings, serving global clients effectively."
        },
        {
            q: "Do you work on restoration projects for historical buildings?",
            a: "Yes, we are specialists in as-built documentation of historical structures. We perform precise laser scanning on listed buildings, model original elements (stonework, wood details, decorations) in high resolution, and report them for submission to conservation boards."
        },
        {
            q: "Why should I convert my 2D CAD drawings to BIM?",
            a: "Working with old 2D plans causes many problems: plans, sections, and views are not synchronized, changes are manual, quantity take-offs take too long, and clash detection is impossible. Moving to a BIM model solves these; projects proceed 30-40% faster and error rates drop."
        },
        {
            q: "How is pricing determined?",
            a: "We provide project-based quotes. Factors affecting price: area to be scanned (mÂ²), LOD level, number of disciplines (architectural only or including MEP), project urgency, and delivery formats. We offer a free preliminary discovery meeting and a detailed custom quote with a fixed price guarantee."
        },
        {
            q: "Do you provide post-delivery support?",
            a: "Yes, we handle questions and correction requests about model use free of charge within 30 days after delivery. We also have optional training packages: Revit model navigation, Schedule use, view management, and simple editing. Long-term maintenance contracts are also available."
        },
        {
            q: "Do you sign an NDA (Non-Disclosure Agreement)?",
            a: "Of course. Even if not requested, we sign an NDA as standard. All project files are stored on encrypted servers and deleted 6 months after project completion (or archived on request). Team members sign confidentiality agreements, and we comply with the ISO 27001 information security standard."
        },
        {
            q: "In which sectors do you have experience?",
            a: "We have completed 50+ projects in sectors like petrochemicals and refineries, automotive production plants, food and beverage factories, power plants, logistics warehouses, mall and hotel complexes, airport terminals, and historical building restorations."
        }
    ];

    return (
        <div className="min-h-screen bg-white">
            <SubPageHero
                title="Frequently Asked Questions"
                description="Answers to the most common questions about our Point Cloud to BIM, as-built modeling, and laser scanning services."
                category="Knowledge Center"
                breadcrumb={[{ label: "FAQ", href: "/en/faq" }]}
            />

            <div className="max-w-4xl mx-auto px-4 py-20">
                <div className="space-y-4">
                    {faqs.map((faq, idx) => (
                        <div key={idx} className="bg-white border-2 border-slate-100 rounded-2xl overflow-hidden hover:border-red-100 transition-all">
                            <button
                                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                                className="w-full px-8 py-6 text-left flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors"
                            >
                                <span className="text-lg font-black text-slate-900">{faq.q}</span>
                                <ChevronDown className={`w-6 h-6 text-[var(--color-primary-red)] flex-shrink-0 transition-transform ${openIndex === idx ? 'rotate-180' : ''}`} />
                            </button>
                            {openIndex === idx && (
                                <div className="px-8 pb-6">
                                    <p className="text-slate-600 leading-relaxed">{faq.a}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                <div className="mt-16 bg-gradient-to-r from-red-600 to-orange-600 rounded-3xl p-12 text-white text-center">
                    <h2 className="text-2xl font-black mb-4">Can't Find Your Answer?</h2>
                    <p className="text-red-100 mb-8">Contact us for detailed information.</p>
                    <Link href="/en/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-red-700 font-black rounded-xl hover:bg-slate-100 transition-all">
                        Contact Form
                    </Link>
                </div>
            </div>
        </div>
    );
}
