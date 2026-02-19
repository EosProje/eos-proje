"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
    Box,
    Cpu,
    Search,
    CheckCircle2,
    ArrowRight,
    Layers,
    ShieldCheck,
    Zap,
    Clock,
    FileText,
    Warehouse,
    Landmark,
    Paintbrush,
    Plus,
    Minus,
    Settings,
    HardHat
} from "lucide-react";
import SubPageHero from "@/components/SubPageHero";
import ComparisonTable from "@/components/geo/ComparisonTable";
import { EASE_CURVES } from "@/lib/animations";

const fadeUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: EASE_CURVES.smooth }
};

export default function PointToBimClient() {
    const [activeFaq, setActiveFaq] = useState<number | null>(null);

    const steps = [
        { title: "Field Scanning", tech: "LiDAR, SLAM, Drone Photogrammetry", desc: "Capturing X,Y,Z coordinates of the structure with millions of points per second using laser scanners." },
        { title: "Registration", tech: "Leica Cyclone, Autodesk ReCap Pro", desc: "Merging partial scans into a single coordinate system and cleaning noise." },
        { title: "Modeling", tech: "Autodesk Revit, ArchiCAD, Tekla", desc: "Creating architectural, structural, and MEP elements by tracing over the point cloud." },
        { title: "Quality Control (QA/QC)", tech: "Navisworks, Verity (Heat Maps)", desc: "Performing clash and tolerance tests of the model against the point cloud." }
    ];

    const faqs = [
        { q: "What is the cost of Point Cloud to BIM service?", a: "The cost varies depending on the project square footage, requested Level of Detail (LOD), and the complexity of the space (furnished/full or MEP density). At EOS Proje, we offer optimized budgets tailored to your needs, stripped of unnecessary details." },
        { q: "How long is the delivery time?", a: "While a small-scale residential project (LOD 200) can be delivered within 1-2 weeks after scanning, complex industrial facilities or hospitals may take several weeks." },
        { q: "Do you provide only a 3D model?", a: "No. Our delivery package usually includes: Cleaned Point Cloud (.RCP), Parametric BIM Model (.RVT/.PLN), 2D CAD backgrounds (.DWG), and a Deviation Analysis Report upon request." },
        { q: "Will my team have difficulty opening these files?", a: "If you import raw data directly into the software, yes, they might. However, since we index and optimize the data, you can work comfortably on standard workstations." }
    ];

    return (
        <div className="min-h-screen bg-white font-sans text-[var(--color-deep-charcoal)]">
            <SubPageHero
                category="Engineering Solutions"
                title="Smart 'Point Cloud to BIM' Solutions"
                description="We carry physical reality into the digital world with millimetric precision. Intelligent and parametric Digital Twins for decision-makers."
                breadcrumb={[
                    { label: "Solutions", href: "/en/solutions" },
                    { label: "Point Cloud to BIM", href: "/en/solutions/point-cloud-to-bim" }
                ]}
            />

            {/* Intro Section */}
            <section className="py-24 px-4 overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col lg:flex-row gap-20 items-center">
                        <motion.div {...fadeUp} className="lg:w-1/2">
                            <span className="text-[var(--color-primary-red)] font-black uppercase tracking-widest text-[10px] bg-red-50 px-4 py-2 rounded-full mb-6 inline-block">Modern Survey Technology</span>
                            <h2 className="text-4xl md:text-5xl font-black mb-8 text-slate-900 leading-tight">Don't Waste Time with Traditional Surveys</h2>
                            <p className="text-lg text-slate-600 font-medium leading-relaxed mb-6">
                                Forget measurements that take days with tape measures, non-aligning corner points, and \"missing measurement\" crises noticed after returning to the office. At EOS Proje, we carry your physical structures into the digital world with millimetric precision.
                            </p>
                            <p className="text-lg text-slate-600 font-medium leading-relaxed">
                                With our <strong className="text-slate-900">Point Cloud to BIM</strong> service, we transform the reality on-site (As-Built) into intelligent, parametric, and information-rich BIM models that you can use in your design and operation processes.
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="lg:w-1/2 relative"
                        >
                            <div className="bg-slate-50 rounded-[3rem] p-12 border border-slate-100 shadow-2xl shadow-slate-900/5 relative z-10">
                                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-50 mb-6">
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="w-10 h-10 bg-[var(--color-primary-red)] rounded-lg flex items-center justify-center text-white">
                                            <Zap className="w-5 h-5" />
                                        </div>
                                        <span className="font-black text-slate-900">Real-Time Data</span>
                                    </div>
                                    <p className="text-sm text-slate-500 font-medium italic">\"Whether it's a historical restoration or a complex industrial facility; we don't just offer you a 3D drawing, we provide a digital twin.\"</p>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-50">
                                        <span className="block text-2xl font-black text-[var(--color-primary-red)] mb-1">±10mm</span>
                                        <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Accuracy Guarantee</span>
                                    </div>
                                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-50">
                                        <span className="block text-2xl font-black text-[var(--color-primary-red)] mb-1">-50%</span>
                                        <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Time Advantage</span>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute -top-10 -right-10 w-64 h-64 bg-red-100 rounded-full blur-[120px] -z-10 opacity-50"></div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Why EOS Section */}
            <section className="py-24 px-4 bg-slate-50">
                <div className="max-w-7xl mx-auto">
                    <motion.div {...fadeUp} className="text-center mb-20">
                        <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6">Why \"Scan to BIM\" with EOS Proje?</h2>
                        <p className="text-lg text-slate-500 max-w-3xl mx-auto font-medium">
                            Unlike standard scanning services in the market, we don't see the process as just data collection. Processing data requires engineering.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Data Free of 'Ghost Points'",
                                desc: "By cleaning data with Autodesk ReCap and Leica Cyclone, we offer optimized data that doesn't slow down your computer.",
                                icon: <Search className="w-6 h-6" />,
                                color: "bg-red-50 text-[var(--color-primary-red)]"
                            },
                            {
                                title: "Not Just Geometry, 'Smart' Models",
                                desc: "Parametric Revit families with defined materials, layers, and types. You can take-off quantities and perform analysis.",
                                icon: <Cpu className="w-6 h-6" />,
                                color: "bg-blue-50 text-blue-600"
                            },
                            {
                                title: "Mathematical Validation",
                                desc: "By overlaying the model we created with the original point cloud, we offer Deviation Analysis and QC reports.",
                                icon: <ShieldCheck className="w-6 h-6" />,
                                color: "bg-green-50 text-green-600"
                            }
                        ].map((card, idx) => (
                            <motion.div
                                key={idx}
                                {...fadeUp}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 group"
                            >
                                <div className={`w-14 h-14 ${card.color} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}>
                                    {card.icon}
                                </div>
                                <h3 className="text-xl font-black mb-4 text-slate-900">{card.title}</h3>
                                <p className="text-slate-500 font-medium leading-relaxed">{card.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Table Section */}
            <section className="py-24 px-4 bg-white">
                <div className="max-w-7xl mx-auto">
                    <motion.div {...fadeUp} className="text-center mb-20">
                        <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6">Perfect Digitization in 4 Steps</h2>
                        <p className="text-lg text-slate-500 font-medium">Our process follows a transparent and auditable flow.</p>
                    </motion.div>

                    <div className="overflow-x-auto rounded-[2.5rem] border border-slate-100">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-slate-900 text-white">
                                    <th className="p-8 text-[10px] font-black uppercase tracking-widest border-r border-white/5">Step</th>
                                    <th className="p-8 text-[10px] font-black uppercase tracking-widest border-r border-white/5">Operation</th>
                                    <th className="p-8 text-[10px] font-black uppercase tracking-widest">Technology / Standard</th>
                                </tr>
                            </thead>
                            <tbody className="font-medium">
                                {steps.map((step, idx) => (
                                    <tr key={idx} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                                        <td className="p-8 font-black text-[var(--color-primary-red)] border-r border-slate-100">{idx + 1}</td>
                                        <td className="p-8 border-r border-slate-100">
                                            <div className="font-black text-slate-900 mb-1">{step.title}</div>
                                            <div className="text-sm text-slate-500">{step.desc}</div>
                                        </td>
                                        <td className="p-8 text-[var(--color-primary-red)] italic text-sm">{step.tech}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* Comparison Sections */}
            <section className="py-24 px-4 bg-white">
                <div className="max-w-4xl mx-auto">
                    <motion.div {...fadeUp} className="mb-16">
                        <h2 className="text-3xl font-black text-slate-900 mb-6 text-center">Technology Comparison</h2>
                        <p className="text-center text-slate-500 mb-12">The superiority of AI and laser scanning technologies over traditional methods.</p>

                        <ComparisonTable
                            title="Traditional Survey vs. 3D Laser Scanning"
                            headers={["Criterion", "Traditional Method (Tape Measure)", "3D Laser Scanning (LiDAR)"]}
                            data={[
                                { feature: "Accuracy (Error Margin)", traditional: "±5 - 10 cm (Prone to human error)", modern: "±1 - 3 mm (Millimetric precision)" },
                                { feature: "Data Collection Speed", traditional: "500 m² / day", modern: "10,000 m² / day (Leica RTC360)" },
                                { feature: "Level of Detail", traditional: "Only main measurements, details missing", modern: "All surfaces, deformations, curvatures" },
                                { feature: "Cost / Efficiency", traditional: "Low initial cost, High Revision Cost", modern: "High initial cost, Zero Revision" },
                                { feature: "Output Formats", traditional: "2D CAD Drawing", modern: "3D Point Cloud, BIM Model, Digital Twin" }
                            ]}
                        />

                        <div className="mt-16"></div>

                        <ComparisonTable
                            title="Level of Detail (LOD) Comparison"
                            headers={["Intended Use", "LOD 200 (Concept)", "LOD 400 (Manufacturing)"]}
                            data={[
                                { feature: "Geometric Detail", traditional: "General masses, approximate dimensions", modern: "Exact manufacturing dimensions, connection details" },
                                { feature: "Information Density", traditional: "Only area and volume info", modern: "Material, brand, model, installation date" },
                                { feature: "Usage Area", traditional: "Permit projects, preliminary studies", modern: "Application, quantity take-off, clash analysis" },
                                { feature: "Pipe/Duct (MEP)", traditional: "Single line schematic display", modern: "Supports, flanges, insulation details" }
                            ]}
                        />
                    </motion.div>
                </div>
            </section>

            {/* LOD Section */}
            <section className="py-24 px-4 bg-[#F8FAFC]">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col lg:flex-row gap-16">
                        <div className="lg:w-1/3">
                            <h2 className="text-4xl font-black text-slate-900 mb-8 leading-tight">Technical Specifications</h2>
                            <p className="text-slate-600 font-medium mb-12">
                                We use industry-standard hardware and software in our projects.
                            </p>

                            <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm mb-6">
                                <h4 className="font-black text-slate-900 mb-4 border-b border-slate-100 pb-2">Hardware Inventory</h4>
                                <ul className="space-y-3 text-sm font-medium text-slate-600">
                                    <li className="flex justify-between"><span>Scanner:</span> <span className="text-slate-900 font-bold">Leica RTC360</span></li>
                                    <li className="flex justify-between"><span>Speed:</span> <span className="text-slate-900 font-bold">2 Million points/sec</span></li>
                                    <li className="flex justify-between"><span>Range:</span> <span className="text-slate-900 font-bold">130 meters</span></li>
                                    <li className="flex justify-between"><span>HDR Image:</span> <span className="text-slate-900 font-bold">5 Bracket 360°</span></li>
                                </ul>
                            </div>

                            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
                                <h4 className="font-black text-slate-900 mb-6 border-b border-slate-100 pb-4">Supported Formats</h4>
                                <div className="space-y-4">
                                    {[
                                        { label: "BIM", val: ".RVT, .PLN, .IFC" },
                                        { label: "Point Cloud", val: ".RCP, .E57, .LGS" },
                                        { label: "CAD", val: ".DWG, .DXF" }
                                    ].map((f, i) => (
                                        <div key={i} className="flex justify-between items-center text-sm">
                                            <span className="font-black text-slate-400">{f.label}</span>
                                            <span className="font-bold text-[var(--color-primary-red)] text-right">{f.val}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {[
                                { lod: "LOD 200", title: "Concept Design", desc: "General mass, approximate dimensions. Ideal for fast volume studies and permit projects." },
                                { lod: "LOD 300", title: "Definitive Project", desc: "Specific systems, accurate quantities and dimensions. Standard architectural and structural projects." },
                                { lod: "LOD 350", title: "Coordination", desc: "Interaction of building elements with other systems. Required for clash analysis." },
                                { lod: "LOD 400", title: "Manufacturing Detail", desc: "Installation details, manufacturing data. Production base for complex MEP and industrial facilities." },
                                { lod: "LOD 500", title: "As-Built (Operation)", desc: "Exact digital twin of on-site fabrication. Includes facility management (FM) data." }
                            ].map((item, idx) => (
                                <div key={idx} className="bg-white p-8 rounded-[2.5rem] border border-slate-200 hover:border-red-100 transition-all group">
                                    <div className="text-[var(--color-primary-red)] font-black mb-3">{item.lod}</div>
                                    <h3 className="text-xl font-black mb-4 text-slate-900">{item.title}</h3>
                                    <p className="text-sm text-slate-500 font-medium leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Sectoral Solutions Section */}
            <section className="py-24 px-4 bg-white">
                <div className="max-w-7xl mx-auto">
                    <motion.div {...fadeUp} className="text-center mb-20 text-slate-900">
                        <h2 className="text-3xl md:text-5xl font-black mb-6">Our Sectoral Solutions</h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: <Landmark className="w-8 h-8" />,
                                title: "Architecture and Renovation",
                                desc: "Document wall curvatures and floor sags. Avoid surprise costs in renovation works."
                            },
                            {
                                icon: <Warehouse className="w-8 h-8" />,
                                title: "Industrial Facilities",
                                desc: "Model complex pipe lines with millimetric precision. Test installation risks in the office with Clash Detection."
                            },
                            {
                                icon: <Paintbrush className="w-8 h-8" />,
                                title: "Heritage (Heritage BIM)",
                                desc: "We digitally record irregular forms and deformations with contactless laser scanning for documentation."
                            }
                        ].map((item, idx) => (
                            <div key={idx} className="p-12 bg-slate-50 rounded-[3rem] text-center border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-red-900/5 transition-all duration-500">
                                <div className="w-16 h-16 bg-white shadow-sm flex items-center justify-center rounded-2xl mx-auto mb-8 text-[var(--color-primary-red)]">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-black mb-6 text-slate-900">{item.title}</h3>
                                <p className="text-slate-500 font-medium leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-24 px-4 bg-slate-50">
                <div className="max-w-3xl mx-auto">
                    <motion.div {...fadeUp} className="text-center mb-16">
                        <h2 className="text-4xl font-black text-slate-900 mb-6">Frequently Asked Questions</h2>
                    </motion.div>

                    <div className="space-y-4">
                        {faqs.map((faq, idx) => (
                            <div key={idx} className="bg-white rounded-[2rem] border border-slate-100 shadow-sm overflow-hidden">
                                <button
                                    onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                                    className="w-full p-8 flex items-center justify-between text-left"
                                >
                                    <span className="font-black text-slate-900 pr-8">{faq.q}</span>
                                    {activeFaq === idx ? <Minus className="w-5 h-5 text-red-600" /> : <Plus className="w-5 h-5 text-red-600" />}
                                </button>
                                <motion.div
                                    initial={false}
                                    animate={{ height: activeFaq === idx ? "auto" : 0, opacity: activeFaq === idx ? 1 : 0 }}
                                    className="overflow-hidden"
                                >
                                    <div className="p-8 pt-0 text-slate-500 font-medium border-t border-slate-50 mt-4 leading-relaxed">
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
                    <div className="bg-[var(--color-deep-charcoal)] rounded-[4rem] p-12 md:p-20 text-center relative overflow-hidden">
                        <div className="relative z-10">
                            <h2 className="text-3xl md:text-5xl font-black text-white mb-8">🚀 Don't Risk Your Project, Digitize It</h2>
                            <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto font-medium">
                                Trust EOS Proje expertise to prevent surprise construction site costs and document the real state of your existing structure.
                            </p>
                            <div className="flex flex-col sm:flex-row justify-center gap-6">
                                <Link href="/en/contact" className="px-10 py-5 bg-[var(--color-primary-red)] text-white font-black rounded-2xl hover:bg-red-800 transition-all flex items-center justify-center gap-3">
                                    Get Free Discovery
                                </Link>
                                <a href="https://wa.me/905306642263" target="_blank" rel="noopener noreferrer" className="px-10 py-5 bg-white text-slate-900 font-black rounded-2xl hover:bg-slate-100 transition-all flex items-center justify-center gap-3">
                                    Ask via WhatsApp
                                </a>
                            </div>
                        </div>
                        {/* Background pattern */}
                        <div className="absolute top-0 right-0 w-1/2 h-full bg-red-600/5 -skew-x-12 translate-x-1/2"></div>
                    </div>
                </div>
            </section>
        </div>
    );
}
