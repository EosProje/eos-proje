"use client";

import { useState } from "react";
import Link from "next/link";
import SubPageHero from "@/components/SubPageHero";
import { ChevronDown } from "lucide-react";

export default function FaqClient() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const faqs = [
        {
            q: "How long does the Point Cloud to BIM process take?",
            a: "It depends on the project size. For an average 3,000-5,000 mÃ‚Â² industrial facility, scanning takes 2-3 days, and modeling takes 10-15 business days. Including shipping time, we deliver within 3-4 weeks in total. An express option is available for urgent projects."
        },
        {
            q: "What LOD (Level of Development) levels do you work with?",
            a: "We provide services at all levels from LOD 200 to LOD 400. LOD 200: General geometry and approximate dimensions. LOD 300: Precise dimensions, material definitions, and connection points. LOD 350: Detailed interface information. LOD 400: Fabrication-level details (usually for prefabricated elements). We determine the most suitable LOD together according to your project needs."
        },
        {
            q: "Which software and file formats do you deliver?",
            a: "We deliver in Revit native (.rvt), IFC 2x3 or IFC4 open BIM format, AutoCAD DWG plans, Navisworks (.nwc) files, and raw point cloud data (E57, RCS, RCP) formats. Upon request, we can also provide PDF A0 drawings and COBie spreadsheets."
        },
        {
            q: "Do facility operations stop during laser scanning?",
            a: "No, in most cases, we scan while the facility operation continues. Short-term access permission may only be required in critical safety areas (working at heights, hazardous chemical zones). We adjust the scanning plan according to your production schedule; we usually work between shifts or on weekends."
        },
        {
            q: "How is modeling accuracy guaranteed?",
            a: "We have a three-stage QA/QC process: 1) Internal check by the modeling team. 2) Geometric verification by an independent quality control specialist. 3) Point cloud-model overlay comparison (deviation analysis) with CloudCompare. We provide a Ã‚Â±2mm accuracy report in the delivery package. Additionally, all Revit Warnings are cleared, and clash detection is performed."
        },
        {
            q: "Do you perform remote (offshore) modeling?",
            a: "Yes, our team performs the site scanning on-site, or you can scan and send us the point cloud data. The modeling process is carried out in our Turkey office. We track progress with weekly online meetings. This allows us to serve global clients as well."
        },
        {
            q: "Do you work on historical building restoration projects?",
            a: "Yes, we specialize in the as-built documentation of historical structures. We perform precise laser scanning on buildings with cultural heritage status, model original architectural elements (stone masonry, wooden details, ornaments) in high resolution, and report them for submission to the conservation board."
        },
        {
            q: "Why do I need to convert my 2D CAD drawings to BIM?",
            a: "Working with old 2D plans leads to many problems: Plans, sections, and elevations are not synchronized, changes are made manually, quantity take-off takes a lot of time, and clash detection cannot be performed. When you switch to a BIM model, all these problems are solved, projects proceed 30-40% faster, and error rates decrease."
        },
        {
            q: "How is pricing determined?",
            a: "We provide project-based quotes. Factors affecting the price: Area to be scanned (mÃ‚Â²), model LOD level, number of disciplines (only architectural or including MEP), project urgency, and delivery formats. We conduct a free preliminary exploration meeting and offer you a detailed custom quote. We have a fixed price guarantee; we do not request additional fees unless the project scope changes."
        },
        {
            q: "Do you provide post-delivery support?",
            a: "Yes, we respond to questions and correction requests regarding model usage free of charge within 30 days after delivery. We also have optional training packages: Revit model navigation, Schedule usage, view management, and simple editing operations. We also make long-term maintenance contracts."
        },
        {
            q: "Do you sign an NDA (Non-Disclosure Agreement)?",
            a: "Certainly. Even if the customer does not request it, we sign an NDA as a standard. All project files are stored on encrypted servers and deleted 6 months after the project ends (we archive upon request). Team members sign a confidentiality undertaking. We comply with the ISO 27001 information security standard."
        },
        {
            q: "Which sectors do you have experience in?",
            a: "We have completed 50+ projects in many sectors such as petrochemical and refinery, automotive production plants, food and beverage factories, power plants, logistics warehouses, mall and hotel complexes, airport terminals, and historical building restorations. You can review our reference list."
        }
    ];

    return (
        <div className="min-h-screen bg-white">
            <SubPageHero
                title="Frequently Asked Questions"
                description="Answers to the most frequently asked questions about our Point Cloud to BIM, as-built modeling, and laser scanning services."
                category="Info Center"
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
                    <h2 className="text-2xl font-black mb-4">Couldn't find the answer you were looking for?</h2>
                    <p className="text-red-100 mb-8">You can contact us for detailed information.</p>
                    <Link href="/en/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-red-700 font-black rounded-xl hover:bg-slate-100 transition-all">
                        Contact Form
                    </Link>
                </div>
            </div>
        </div>
    );
}
