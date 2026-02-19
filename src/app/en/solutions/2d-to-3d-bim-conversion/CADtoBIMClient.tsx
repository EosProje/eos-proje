"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
    Files,
    Cpu,
    Layers,
    ShieldCheck,
    Activity,
    Settings,
    HelpCircle,
    ArrowRight,
    Zap,
    CheckCircle2,
    Database,
    Search,
    Plus,
    Minus,
    FileCode,
    Layout,
    HardHat
} from "lucide-react";
import SubPageHero from "@/components/SubPageHero";
import { EASE_CURVES } from "@/lib/animations";

const fadeUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: EASE_CURVES.smooth }
};

export default function CADtoBIMClient() {
    const [activeFaq, setActiveFaq] = useState<number | null>(null);

    const lodLevels = [
        {
            level: "LOD 200",
            title: "Concept",
            desc: "Massive Modeling: Elements are modeled with approximate quantity, size, shape, and location. Ideal for volume studies."
        },
        {
            level: "LOD 300",
            title: "Definitive Project",
            desc: "Specific Systems: Elements are modeled with exact size, shape, and location. It is the standard for permit projects."
        },
        {
            level: "LOD 350",
            title: "Coordination",
            desc: "Pre-Construction Coordination: Interfaces of elements with other systems are modeled. Necessary for clash tests."
        },
        {
            level: "LOD 400",
            title: "Manufacturing",
            desc: "Production Detail: Includes detailing, fabrication, assembly, and installation info. For steel and precast structures."
        }
    ];

    const workflow = [
        { title: "Data Analysis and Cleaning", desc: "The layer structure in your existing CAD (.dwg) or PDF files is examined, and missing measurements are identified." },
        { title: "BIM Execution Plan (BEP)", desc: "A roadmap is created at the beginning of the project, determining software versions and family standards." },
        { title: "Parametric Modeling", desc: "Taking 2D backgrounds as reference, architectural, structural, and MEP elements are carried to the 3rd dimension with smart families." },
        { title: "Quality Control (QA/QC)", desc: "Consistency with original 2D drawings is inspected; we perform logical data control with Solibri or Navisworks." }
    ];

    const faqs = [
        { q: "What should you do if my 2D drawings are not up-to-date?", a: "If your available projects do not reflect the current site condition, we recommend our Scan to BIM service. We take a millimetric X-ray of the building with laser scanning and build the model on this real data." },
        { q: "How is the conversion cost determined?", a: "The cost varies depending on the total square footage, the requested LOD level, and the discipline intensity of the project (Architectural only, or including MEP?)." },
        { q: "Do you work only on architecture?", a: "No. EOS Proje performs modeling across all Architectural, Structural, and MEP disciplines. MEP conversion is vital in renovations." },
        { q: "Which file formats do you deliver?", a: "According to the BEP plan; we deliver in editable .RVT (Revit), .PLN (ArchiCAD), .NWD (Navisworks) formats and .IFC for open data sharing." }
    ];

    return (
        <div className="min-h-screen bg-white font-sans text-[var(--color-deep-charcoal)]">
            <SubPageHero
                category="Engineering Solutions"
                title="Conversion from 2D CAD to 3D BIM"
                description="Transition from linear data to intelligent building management. We transform your flat .DWG files into information-rich parametric models."
                breadcrumb={[
                    { label: "Solutions", href: "/en/solutions" },
                    { label: "2D to 3D BIM Conversion", href: "/en/solutions/2d-to-3d-bim-conversion" }
                ]}
            />

            {/* Intro Section */}
            <section className="py-24 px-4 overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col lg:flex-row gap-20 items-center">
                        <motion.div {...fadeUp} className="lg:w-1/2">
                            <span className="text-red-600 font-black uppercase tracking-widest text-[10px] bg-red-50 px-4 py-2 rounded-full mb-6 inline-block">Digital Transformation</span>
                            <h2 className="text-4xl md:text-5xl font-black mb-8 text-slate-900 leading-tight">Ask for More Than Flat .DWG Files</h2>
                            <p className="text-lg text-slate-600 font-medium leading-relaxed mb-6">
                                The construction industry has moved from the \"drawing\" era to the \"information\" era. However, many valuable projects are still stuck in 2D CAD files. At EOS Proje, we don't just make your existing 2D archive three-dimensional.
                            </p>
                            <p className="text-lg text-slate-600 font-medium leading-relaxed">
                                We transform them into Intelligent BIM Models that are compliant with <strong className="text-slate-900">ISO 19650</strong> standards, capable of giving quantity take-offs, performing clash analysis, and ready for facility management (FM).
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="lg:w-1/2 relative"
                        >
                            <div className="bg-slate-50 rounded-[3rem] p-12 border border-slate-100 shadow-2xl shadow-slate-900/5 relative z-10">
                                <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-50 flex items-start gap-6">
                                    <div className="w-14 h-14 bg-red-600 rounded-xl flex items-center justify-center text-white flex-shrink-0">
                                        <Database className="w-7 h-7" />
                                    </div>
                                    <div>
                                        <h4 className="font-black text-slate-900 mb-2">The \"Digital DNA\" of Your Structures</h4>
                                        <p className="text-sm text-slate-500 font-medium">We evolve two lines drawn as a \"wall\" into a parametric BIM family with defined fire resistance class and material layers.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute -top-10 -right-10 w-64 h-64 bg-red-100 rounded-full blur-[120px] -z-10 opacity-50"></div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Why CAD to BIM Section */}
            <section className="py-24 px-4 bg-slate-50">
                <div className="max-w-7xl mx-auto">
                    <motion.div {...fadeUp} className="text-center mb-20 text-slate-900">
                        <h2 className="text-3xl md:text-5xl font-black mb-6">Why CAD to BIM with EOS Proje?</h2>
                        <p className="text-lg text-slate-500 max-w-3xl mx-auto font-medium">Our technical difference lies in accuracy, full integration, and complete compliance with international standards.</p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        {[
                            {
                                title: "Producing Semantic Data",
                                desc: "We don't just add geometry; we include parameters in line with LOD standards. Your quantity and space lists are automatically pulled from the model.",
                                icon: <FileCode className="w-8 h-8" />,
                                color: "text-red-600"
                            },
                            {
                                title: "Interdisciplinary Clash Analysis",
                                desc: "We merge architectural, structural, and MEP projects in a 3D environment and resolve physical clashes in the office with Navisworks before reaching the site.",
                                icon: <Layers className="w-8 h-8" />,
                                color: "text-red-600"
                            },
                            {
                                title: "Software Interoperability",
                                desc: "Using Revit, ArchiCAD, or Tekla, we deliver without data loss in local formats as well as the universal IFC format.",
                                icon: <Settings className="w-8 h-8" />,
                                color: "text-green-600"
                            }
                        ].map((card, idx) => (
                            <motion.div
                                key={idx}
                                {...fadeUp}
                                className="bg-white p-12 rounded-[3.5rem] border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500"
                            >
                                <div className={`mx-auto w-16 h-16 flex items-center justify-center mb-8 ${card.color}`}>
                                    {card.icon}
                                </div>
                                <h3 className="text-2xl font-black mb-6 text-slate-900 leading-tight">{card.title}</h3>
                                <p className="text-slate-500 font-medium leading-relaxed">{card.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* LOD Table Section */}
            <section className="py-24 px-4 bg-white">
                <div className="max-w-7xl mx-auto">
                    <motion.div {...fadeUp} className="text-center mb-20">
                        <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6">LOD Standards: Manage Your Budget Wisely</h2>
                        <p className="text-lg text-slate-500 font-medium max-w-3xl mx-auto">Based on BIM Forum standards, we determine the most appropriate Level of Detail (LOD Specification 2019) for your project.</p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {lodLevels.map((item, idx) => (
                            <motion.div
                                key={idx}
                                {...fadeUp}
                                transition={{ delay: idx * 0.1 }}
                                className="p-8 bg-slate-50 rounded-[2rem] border border-slate-100 hover:bg-white hover:border-red-100 hover:shadow-xl transition-all group"
                            >
                                <div className="text-red-600 font-black text-lg mb-4">{item.level}</div>
                                <h3 className="text-xl font-black text-slate-900 mb-4">{item.title}</h3>
                                <p className="text-sm text-slate-500 font-medium leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Workflow Section */}
            <section className="py-24 px-4 bg-slate-900 text-white rounded-[4rem] mx-4 overflow-hidden relative">
                <div className="max-w-7xl mx-auto relative z-10">
                    <motion.div {...fadeUp} className="text-center mb-20">
                        <h2 className="text-3xl md:text-5xl font-black mb-6">Journey from 2D to Digital Twin</h2>
                        <p className="text-slate-400 font-medium">End-to-end transparent and professional working process.</p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                        {workflow.map((step, idx) => (
                            <div key={idx} className="relative group">
                                <div className="text-8xl font-black text-white/5 absolute -top-10 -left-6 group-hover:text-red-500/10 transition-colors">{idx + 1}</div>
                                <div className="relative">
                                    <h3 className="text-xl font-black mb-6 flex items-center gap-3">
                                        <span className="w-10 h-10 bg-red-600 rounded-xl flex items-center justify-center text-sm">{idx + 1}</span>
                                        {step.title}
                                    </h3>
                                    <p className="text-slate-400 font-medium text-sm leading-relaxed">{step.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                {/* Decorative background element */}
                <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-red-600/10 rounded-full blur-[150px] translate-x-1/2 translate-y-1/2"></div>
            </section>

            {/* FAQ Section */}
            <section className="py-24 px-4 bg-white">
                <div className="max-w-3xl mx-auto">
                    <motion.div {...fadeUp} className="text-center mb-16 text-slate-900">
                        <h2 className="text-4xl font-black mb-6">Frequently Asked Questions</h2>
                        <p className="text-slate-500 font-medium italic">Things to Know About the 2D to 3D Conversion Process</p>
                    </motion.div>

                    <div className="space-y-4">
                        {faqs.map((faq, idx) => (
                            <div key={idx} className="bg-slate-50 rounded-[2rem] border border-slate-100 overflow-hidden">
                                <button
                                    onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                                    className="w-full p-8 flex items-center justify-between text-left group"
                                >
                                    <span className="font-black text-slate-900 pr-8 group-hover:text-red-600 transition-colors uppercase text-sm tracking-wide">{faq.q}</span>
                                    {activeFaq === idx ? <Minus className="w-5 h-5 text-red-600" /> : <Plus className="w-5 h-5 text-red-600" />}
                                </button>
                                <motion.div
                                    initial={false}
                                    animate={{ height: activeFaq === idx ? "auto" : 0, opacity: activeFaq === idx ? 1 : 0 }}
                                    className="overflow-hidden"
                                >
                                    <div className="p-8 pt-0 text-slate-600 font-medium leading-relaxed border-t border-slate-200/50 mt-4">
                                        {faq.a}
                                    </div>
                                </motion.div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-24 px-4 bg-white">
                <div className="max-w-5xl mx-auto">
                    <div className="bg-[var(--color-primary-red)] rounded-[4rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl shadow-red-900/40">
                        <div className="relative z-10">
                            <h2 className="text-3xl md:text-5xl font-black text-white mb-8">Carry Your Project into the Future</h2>
                            <p className="text-xl text-red-100 mb-12 max-w-2xl mx-auto font-medium">
                                Turning lines in your archive into manageable data is not an expense, it's an investment in the life cycle of your project.
                            </p>
                            <div className="flex flex-col sm:flex-row justify-center gap-6">
                                <Link href="/en/contact" className="px-10 py-5 bg-white text-red-600 font-black rounded-2xl hover:bg-slate-50 transition-all flex items-center justify-center gap-3">
                                    Get Free Project Analysis
                                </Link>
                                <a href="https://wa.me/905306642263" target="_blank" rel="noopener noreferrer" className="px-10 py-5 bg-red-900/40 backdrop-blur text-white font-black rounded-2xl hover:bg-red-900/60 transition-all flex items-center justify-center gap-3">
                                    Ask via WhatsApp
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
