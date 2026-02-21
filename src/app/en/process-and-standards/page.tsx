"use client";

import SubPageHero from "@/components/SubPageHero";
import { Workflow, Clock, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Page() {
    const steps = [
        {
            phase: "Discovery and Planning",
            duration: "1-2 days",
            items: [
                "Initial meeting: Project scope, needs, expectations",
                "Site preliminary inspection (if necessary)",
                "Technical feasibility analysis",
                "Determining LOD level and delivery format",
                "Preparation of a detailed price quote",
                "Signing the contract and NDA"
            ]
        },
        {
            phase: "Data Collection",
            duration: "2-5 days",
            items: [
                "Laser scanning equipment preparation",
                "Creating a scan plan on-site",
                "Point cloud data collection (Leica/Faro)",
                "Panoramic photography",
                "Collecting existing CAD/PDF documents",
                "Receiving technical information from the operations team"
            ]
        },
        {
            phase: "Data Processing",
            duration: "3-7 days",
            items: [
                "Scan registration (point cloud merging)",
                "Quality check and identification of missing data",
                "Coordinate system definition",
                "Outlier cleaning",
                "Data optimization",
                "Low-res model export for client review"
            ]
        },
        {
            phase: "BIM Modeling",
            duration: "10-20 days",
            items: [
                "Revit template preparation",
                "Creating Levels, Grids, and Views",
                "Parametric modeling (architectural, structural, MEP)",
                "Family assignment and parameter filling",
                "Adding annotations and dimensions",
                "First draft delivery and feedback"
            ]
        },
        {
            phase: "Quality Control",
            duration: "3-5 days",
            items: [
                "Internal control: Revit Warnings cleaning",
                "Independent QC: Geometric validation",
                "Point cloud overlay analysis (Â±2mm)",
                "Clash detection (Navisworks)",
                "IFC export testing",
                "Revision cycle (if necessary)"
            ]
        },
        {
            phase: "Delivery and Support",
            duration: "1-2 days",
            items: [
                "Final package preparation (RVT, IFC, DWG, PDF)",
                "Adding deviation analysis report",
                "Documentation (BEP, user manual)",
                "Client training (optional)",
                "Starting the 30-day support process",
                "Project closing meeting"
            ]
        }
    ];

    return (
        <div className="min-h-screen bg-white">
            <SubPageHero
                title="Process and Standards"
                description="Our 6-stage workflow and quality standards that we apply in point cloud to BIM projects. Full compliance with ISO 19650 BIM standard."
                category="Process & Quality"
                breadcrumb={[{ label: "Process & Standards", href: "/en/process-and-standards" }]}
            />

            <div className="max-w-7xl mx-auto px-4 py-20">
                {/* Timeline */}
                <div className="mb-24">
                    <h2 className="text-3xl font-black text-slate-900 mb-4">6-Stage Project Process</h2>
                    <p className="text-lg text-slate-600 mb-12">
                        Phases and durations of an average 3-4 week as-built modeling project:
                    </p>
                    <div className="relative">
                        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[var(--color-primary-red)] to-slate-200"></div>
                        <div className="space-y-12">
                            {steps.map((step, idx) => (
                                <div key={idx} className="relative pl-24">
                                    <div className="absolute left-0 w-16 h-16 bg-[var(--color-primary-red)] rounded-2xl flex items-center justify-center">
                                        <span className="text-white text-xl font-black">{idx + 1}</span>
                                    </div>
                                    <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
                                        <div className="flex items-center justify-between mb-4">
                                            <h3 className="text-2xl font-black text-slate-900">{step.phase}</h3>
                                            <span className="px-4 py-2 bg-blue-100 text-blue-700 font-bold rounded-lg text-sm flex items-center gap-2">
                                                <Clock className="w-4 h-4" />
                                                {step.duration}
                                            </span>
                                        </div>
                                        <ul className="grid md:grid-cols-2 gap-3">
                                            {step.items.map((item, i) => (
                                                <li key={i} className="flex items-start gap-2 text-slate-700">
                                                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Standards */}
                <div className="mb-24 bg-slate-900 rounded-[3rem] p-12 md:p-16 text-white">
                    <h2 className="text-3xl font-black mb-8">International Standards We Follow</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-lg font-black text-red-400 mb-4 uppercase">BIM Standards</h3>
                            <ul className="space-y-3 text-slate-300">
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                                    <span><strong className="text-white">ISO 19650:</strong> BIM information management (UK BIM Level 2)</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                                    <span><strong className="text-white">LOD Specification:</strong> Detail levels defined by BIMForum</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                                    <span><strong className="text-white">IFC Standards:</strong> buildingSMART IFC2x3 and IFC4 compatibility</span>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-black text-red-400 mb-4 uppercase">Laser Scanning Standards</h3>
                            <ul className="space-y-3 text-slate-300">
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                                    <span><strong className="text-white">ASTM E2807:</strong> Standard for building measurement using 3D imaging</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                                    <span><strong className="text-white">USIBD:</strong> US BIM documentation standard</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                                    <span><strong className="text-white">E57 Format:</strong> Point cloud data standard (ASTM E2807)</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <div className="bg-gradient-to-br from-blue-600 to-cyan-700 rounded-[3rem] p-16 text-white text-center">
                    <Workflow className="w-16 h-16 mx-auto mb-6 opacity-80" />
                    <h2 className="text-3xl font-black mb-6">Let's Start Your Project</h2>
                    <p className="text-blue-100 mb-10 max-w-2xl mx-auto text-lg">
                        Contact us to receive BIM modeling services that comply with standards and offer guaranteed quality.
                    </p>
                    <Link href="/en/contact" className="inline-flex items-center gap-2 px-10 py-5 bg-white text-blue-700 font-black rounded-2xl hover:bg-slate-100 transition-all">
                        Make a Project Application <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </div>
        </div>
    );
}
