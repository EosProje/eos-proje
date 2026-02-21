"use client";

import Link from "next/link";
import SubPageHero from "@/components/SubPageHero";
import { motion, AnimatePresence } from "framer-motion";
import { sectors } from "@/data/sectors";
import { useState } from "react";
import { EASE_CURVES } from "@/lib/animations";
import {
    Factory,
    Building2,
    MapPin,
    CheckCircle2,
    FileCheck,
    ArrowRight,
    Landmark,
    Layout,
    HardHat
} from "lucide-react";

// Icon mapping for pins
const icons = {
    factory: <Factory className="w-6 h-6" />,
    building: <Building2 className="w-6 h-6" />,
    landmark: <Landmark className="w-6 h-6" />,
    layout: <Layout className="w-6 h-6" />,
    construction: <HardHat className="w-6 h-6" />,
};

// English Translations for Sectors (since data/sectors.ts is currently only TR)
const sectorsEn = [
    {
        id: "industrial",
        title: "Industrial Facility",
        description: "Complex MEP and equipment modeling in factories, power plants, and process facilities.",
        services: ["MEP Modeling", "Equipment Inventory", "Clash Detection", "As-built Documentation"],
        precision: "Â±8mm - Â±15mm",
        lod: "350 - 400",
        icon: "factory"
    },
    {
        id: "architecture",
        title: "Architecture & Design",
        description: "High-accuracy architectural as-built model production as a design base.",
        services: ["Architectural Modeling", "Existing Condition Analysis", "Deformation Analysis"],
        precision: "Â±5mm - Â±10mm",
        lod: "200 - 300",
        icon: "building"
    },
    {
        id: "restoration",
        title: "Restoration & Heritage",
        description: "Millimetric precision documentation for the preservation of historical structures.",
        services: ["Precise Surface Modeling", "Damage Detection", "Point Cloud Archiving"],
        precision: "Â±2mm - Â±5mm",
        lod: "300 - 400 (Custom)",
        icon: "landmark"
    },
    {
        id: "renovation",
        title: "Renovasyon & Fit-out",
        description: "Digital infrastructure for renovation projects of existing interior spaces.",
        services: ["Interior Modeling", "Existing MEP Detection", "Installation Planning"],
        precision: "Â±10mm",
        lod: "300",
        icon: "layout"
    },
    {
        id: "construction",
        title: "Construction & Contracting",
        description: "BIM solutions that audit the harmony between the site and the design.",
        services: ["Quality Control (QA/QC)", "Progress Control", "Concrete Tolerance Analysis"],
        precision: "Â±20mm (Global)",
        lod: "300 - 350",
        icon: "construction"
    }
];

export default function SectorListClient({ relatedProjectsMetadata }: { relatedProjectsMetadata: any[] }) {
    const [activeSector, setActiveSector] = useState(sectorsEn[0].id);

    const currentSectorData = sectorsEn.find(s => s.id === activeSector)!;
    const sectorsTr = sectors; // Original TR sectors for ID matching if needed

    // Find matching TR sector to filter related projects (metadata is currently only TR)
    const matchingTrSector = sectorsTr.find(s => s.id === activeSector);

    const relatedProjects = relatedProjectsMetadata
        .filter(p => matchingTrSector && p.sector?.toLowerCase().includes(matchingTrSector.title.toLowerCase().split(' ')[0].toLowerCase()))
        .slice(0, 3);

    return (
        <div className="min-h-screen bg-white">
            <SubPageHero
                title="Sectors We Serve"
                description="From industrial facilities to historical structures, we provide professional BIM and modeling services in every field."
                category="Sectors"
                breadcrumb={[{ label: "Sectors", href: "/en/sectors" }]}
            />

            <div className="max-w-7xl mx-auto px-4 py-24 relative">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">

                    {/* Navigation Sidebar (Pins) */}
                    <div className="lg:col-span-4 space-y-4">
                        <h3 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 mb-8 flex items-center gap-2">
                            <MapPin className="w-3 h-3" /> Select Expertise Area
                        </h3>
                        <div className="flex flex-col gap-3">
                            {sectorsEn.map((sector) => (
                                <button
                                    key={sector.id}
                                    onClick={() => setActiveSector(sector.id)}
                                    className={`group flex items-center justify-between p-6 rounded-2xl border transition-all duration-500 text-left ${activeSector === sector.id
                                        ? "bg-[var(--color-deep-charcoal)] border-transparent shadow-2xl scale-[1.02] text-white"
                                        : "bg-white border-slate-100 text-slate-600 hover:border-red-100 hover:bg-slate-50"
                                        }`}
                                >
                                    <div className="flex items-center gap-4">
                                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${activeSector === sector.id ? "bg-[var(--color-primary-red)] text-white" : "bg-slate-100 text-slate-400 group-hover:bg-red-50 group-hover:text-red-500"
                                            }`}>
                                            {icons[sector.icon as keyof typeof icons]}
                                        </div>
                                        <span className="font-black text-sm uppercase tracking-wider">{sector.title}</span>
                                    </div>
                                    <ChevronRightSmall className={activeSector === sector.id ? "text-white" : "text-slate-300"} />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Main Detail Area */}
                    <div className="lg:col-span-8">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeSector}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.5, ease: EASE_CURVES.smooth }}
                                className="bg-slate-50 rounded-[3.5rem] p-8 md:p-16 border border-slate-100 relative overflow-hidden"
                            >
                                {/* Background Grid Accent */}
                                <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none"></div>

                                <div className="relative z-10">
                                    <div className="flex flex-wrap items-center gap-4 mb-10">
                                        <div className="px-4 py-2 bg-white rounded-xl shadow-sm border border-slate-200">
                                            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-1">Accuracy Target</span>
                                            <span className="text-sm font-black text-slate-900">{currentSectorData.precision}</span>
                                        </div>
                                        <div className="px-4 py-2 bg-white rounded-xl shadow-sm border border-slate-100">
                                            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-1">Precision Level</span>
                                            <span className="text-sm font-black text-[var(--color-primary-red)]">LOD {currentSectorData.lod}</span>
                                        </div>
                                    </div>

                                    <h3 className="text-4xl font-black text-slate-900 mb-6 leading-tight">{currentSectorData.title} BIM Solution</h3>
                                    <p className="text-lg text-slate-500 font-medium leading-relaxed mb-12">
                                        {currentSectorData.description}
                                    </p>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                        {/* Services */}
                                        <div>
                                            <h4 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 mb-6 flex items-center gap-2">
                                                <CheckCircle2 className="w-4 h-4 text-green-500" /> Applied Services
                                            </h4>
                                            <ul className="space-y-4">
                                                {currentSectorData.services.map((service, i) => (
                                                    <li key={i} className="flex items-center gap-3 text-sm font-bold text-slate-700">
                                                        <span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span>
                                                        {service}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* Deliverables Info (Simplified for EN as it uses TR data otherwise) */}
                                        <div className="space-y-8">
                                            <div>
                                                <h4 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 mb-4 flex items-center gap-2">
                                                    <FileCheck className="w-4 h-4 text-blue-500" /> Professional Deliverables
                                                </h4>
                                                <p className="text-sm text-slate-500 font-medium">Standard BIM formats including Revit (RVT), IFC, and high-accuracy CAD drawings (DWG/PDF).</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* CTA */}
                                    <div className="mt-16 pt-10 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-6">
                                        <p className="text-sm font-bold text-slate-400">Get technical consultancy for your projects in this sector.</p>
                                        <Link href="/en/contact" className="px-8 py-4 bg-[var(--color-primary-red)] text-white font-black rounded-2xl shadow-xl shadow-red-900/20 hover:bg-black transition-all flex items-center gap-3">
                                            Request Meeting <ArrowRight className="w-5 h-5" />
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>

                {/* Dynamic Project List for Selected Sector */}
                <div className="mt-32">
                    <div className="flex items-center justify-between mb-12">
                        <h4 className="text-2xl font-black text-slate-900 uppercase tracking-tight">Related Case Studies</h4>
                        <Link href="/en/references" className="text-xs font-black text-[var(--color-primary-red)] uppercase tracking-widest hover:underline whitespace-nowrap">View All Projects &rarr;</Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {relatedProjects.length > 0 ? (
                            relatedProjects.map(project => (
                                <Link key={project.slug} href={`/en/references/${project.slug}`} className="group hover-lift active-shrink block h-full">
                                    <div className="bg-slate-50 rounded-3xl border border-slate-100 h-full overflow-hidden flex flex-col">
                                        <div className="h-48 bg-slate-900 overflow-hidden relative grayscale group-hover:grayscale-0 transition-all duration-700">
                                            <div className="absolute inset-0 bg-red-900/20 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                            {project.images?.hero && <img src={project.images.hero} alt={project.title} className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" />}
                                        </div>
                                        <div className="p-8 flex-grow">
                                            <span className="text-[9px] font-black text-[var(--color-primary-red)] uppercase tracking-widest block mb-4">{project.sector} â€¢ {project.year}</span>
                                            <h5 className="text-lg font-black text-slate-900 group-hover:text-[var(--color-primary-red)] transition-colors leading-tight">{project.title.split('|')[0]}</h5>
                                        </div>
                                    </div>
                                </Link>
                            ))
                        ) : (
                            <p className="text-slate-400 font-bold italic col-span-full py-10 bg-slate-50 rounded-[2rem] text-center border border-dashed border-slate-200">No case studies have been published for this sector yet.</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

function ChevronRightSmall({ className = "" }: { className?: string }) {
    return <svg className={`${className} w-4 h-4`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" /></svg>;
}
