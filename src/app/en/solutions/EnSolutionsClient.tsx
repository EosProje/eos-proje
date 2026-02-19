"use client";

import Link from "next/link";
import SubPageHero from "@/components/SubPageHero";
import { motion } from "framer-motion";
import { Box, Layers, Database, Settings, ArrowRight } from "lucide-react";

const solutions = [
    {
        title: "Point Cloud to BIM",
        desc: "We produce intelligent Revit/IFC models from laser scan data. Parametric content at LOD 200-400 level.",
        icon: <Box className="w-8 h-8" />,
        href: "/en/solutions/point-cloud-to-bim",
        tags: ["RVT", "IFC", "E57"]
    },
    {
        title: "As-built Modeling",
        desc: "We digitalize the current state of existing structures with millimeter accuracy. Reality capture and measurement.",
        icon: <Layers className="w-8 h-8" />,
        href: "/en/solutions/as-built-modeling",
        tags: ["DWG", "PDF", "RCS"]
    },
    {
        title: "2D to 3D/BIM Conversion",
        desc: "We transform archive projects in paper or CAD environments into modern BIM standards.",
        icon: <Database className="w-8 h-8" />,
        href: "/en/solutions/2d-to-3d-bim-conversion",
        tags: ["Legacy to BIM"]
    },
    {
        title: "Industrial Equipment",
        desc: "Detailed equipment libraries for complex MEP systems and machinery in factories and facilities.",
        icon: <Settings className="w-8 h-8" />,
        href: "/en/solutions/industrial-equipment-modeling",
        tags: ["MEP", "Equipment"]
    }
];

export default function EnSolutionsClient() {
    return (
        <div className="min-h-screen bg-white">
            <SubPageHero
                title="Our Engineering Solutions"
                description="From point cloud to intelligent models; professional as-built documentation and BIM services for your digital twin projects."
                category="Services"
                breadcrumb={[{ label: "Solutions", href: "/en/solutions" }]}
            />

            <div className="max-w-7xl mx-auto px-4 py-24 relative">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                    {solutions.map((item, idx) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                        >
                            <Link href={item.href} className="group block h-full">
                                <div className="bg-slate-50 rounded-[2.5rem] p-10 md:p-14 border border-transparent hover:border-red-100 hover:bg-white transition-all duration-500 hover:shadow-2xl flex flex-col h-full relative overflow-hidden group hover-lift active-shrink bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]">
                                    <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:opacity-10 transition-opacity">
                                        {item.icon}
                                    </div>
                                    <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-8 text-[var(--color-primary-red)] group-hover:bg-[var(--color-primary-red)] group-hover:text-white transition-all duration-500 transform group-hover:rotate-6">
                                        {item.icon}
                                    </div>
                                    <h3 className="text-3xl font-black mb-6 text-slate-900 leading-tight">{item.title}</h3>
                                    <p className="text-slate-500 text-lg leading-relaxed mb-10 flex-grow font-medium">
                                        {item.desc}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mb-10">
                                        {item.tags.map(tag => (
                                            <span key={tag} className="px-3 py-1 bg-white border border-slate-100 rounded-lg text-[10px] font-black font-mono text-slate-400 group-hover:border-red-50 group-hover:text-red-400 transition-colors uppercase">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="pt-8 border-t border-slate-100">
                                        <span className="text-[var(--color-primary-red)] text-sm font-black uppercase tracking-widest flex items-center gap-2">
                                            Service Details <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                {/* Action Bar */}
                <div className="mt-24 bg-[var(--color-deep-charcoal)] rounded-[3rem] p-12 md:p-20 text-white text-center shadow-2xl relative overflow-hidden">
                    <div className="absolute inset-0 bg-grid-white/[0.03] pointer-events-none"></div>
                    <h3 className="text-3xl md:text-5xl font-black mb-8 relative z-10">Let's Define Your Project Scope</h3>
                    <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 relative z-10 font-medium">
                        Get support from our engineering team regarding the LOD precision and delivery formats you need.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center relative z-10">
                        <Link href="/en/contact" className="px-12 py-5 bg-[var(--color-primary-red)] text-white font-black rounded-2xl shadow-xl shadow-red-900/40 hover:bg-white hover:text-black transition-all">
                            Get Quote Now
                        </Link>
                        <Link href="/en/references" className="px-12 py-5 bg-white/10 backdrop-blur-md border border-white/20 text-white font-black rounded-2xl hover:bg-white/20 transition-all">
                            View Case Studies
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
