"use client";

import Link from "next/link";
import Image from "next/image";
import SubPageHero from "@/components/SubPageHero";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, Calendar, Layers } from "lucide-react";

const clientLogos = [
    {
        name: "Migros",
        logo: "/images/case-studies/eosproje-migros-magaza-rolove-lazer-tarama-scan-to-bim.webp",
        sector: "Retail",
    },
    {
        name: "Turkcell",
        logo: "/images/case-studies/eosproje-turkcell-magaza-lazer-tarama-rolove-as-built.webp",
        sector: "Telecommunication",
    },
    {
        name: "Linde",
        logo: "/images/case-studies/eosproje-linde-endustriyel-gaz-tesisi-as-built-logo.webp",
        sector: "Industrial Gas",
    },
    {
        name: "Toyota",
        logo: "/images/case-studies/eosproje-toyota-fabrikasi-lazer-tarama-point-cloud-bim-logo.webp",
        sector: "Automotive",
    },
    {
        name: "BMW",
        logo: "/images/case-studies/eosproje-bmw-fabrikasi-macaristan-lazer-tarama-rolove-logo.webp",
        sector: "Automotive",
    },
    {
        name: "Thyssenkrupp",
        logo: "/images/case-studies/Thyssenkrupp-Eos-Proje-Polyol-Fabrika-Asbuilt-3d-model.webp",
        sector: "Chemistry & Industry",
    },
    {
        name: "Şişecam",
        logo: "/images/case-studies/eosproje-sisecam-cam-fabrikasi-kaposvar-rolove-survey-logo.webp",
        sector: "Glass Manufacturing",
    },
    {
        name: "Cevahir Mall",
        logo: "/images/case-studies/eosproje-cevahir-avm-lazer-tarama-scan-to-bim-istanbul.webp",
        sector: "Commercial",
    },
    {
        name: "Yüksel Proje",
        logo: "/images/case-studies/eosproje-yuksel-proje-metro-halihazir-harita-bim.webp",
        sector: "Construction",
    },
];

const featuredProjects = [
    {
        slug: "migros-magaza-scan-to-bim",
        title: "Migros Retail Chain",
        subtitle: "Multi-Location As-Built BIM",
        description:
            "Laser scanning and LOD 300 Revit model production for multiple Migros stores across Istanbul. As-built survey documentation.",
        image: "/images/case-studies/eosproje-migros-magaza-scan-to-bim-revit-modelleme.webp",
        sector: "Retail",
        location: "Istanbul, Turkey",
        year: "2024",
        lod: "LOD 300",
        tags: ["Scan to BIM", "As-Built", "Multi-Location"],
    },
    {
        slug: "cevahir-avm",
        title: "Cevahir Shopping Mall",
        subtitle: "Commercial Area As-Built Modeling",
        description:
            "Measuring 25,000 m² of mall area during night shifts using laser scanning and generating GLA area verification reports.",
        image: "/images/case-studies/eosproje-cevahir-avm-lazer-tarama-scan-to-bim-istanbul.webp",
        sector: "Commercial",
        location: "Istanbul, Turkey",
        year: "2024",
        lod: "LOD 300",
        tags: ["Mall Survey", "Area Analysis", "Renovation"],
    },
    {
        slug: "linde-endustriyel-gaz-tesisi",
        title: "Linde Industrial Gas Plant",
        subtitle: "Boiler Room Point Cloud to BIM",
        description:
            "As-built MEP modeling of the high-pressure boiler room and piping systems at the Linde gas production facility in Hungary.",
        image: "/images/case-studies/eosproje-linde-teknokon-kazan-dairesi-point-cloud-to-bim.webp",
        sector: "Industrial",
        location: "Hungary",
        year: "2023",
        lod: "LOD 300",
        tags: ["MEP Modeling", "Industrial", "International"],
    },
    {
        slug: "toyota-fabrikasi",
        title: "Toyota Factory",
        subtitle: "50,000 m² Point Cloud to BIM",
        description:
            "LOD 300 structural and MEP modeling for a 50,000 m² area at the Toyota production facility. ±8mm accuracy, 320% ROI.",
        image: "/images/case-studies/eosproje-endustriyel-tesis-lazer-tarama-scan-to-bim-fabrika.webp",
        sector: "Automotive",
        location: "Turkey",
        year: "2024",
        lod: "LOD 300",
        tags: ["Point Cloud to BIM", "MEP", "Large Scale"],
    },
    {
        slug: "turkcell-magaza-rolove",
        title: "Turkcell Retail Chain",
        subtitle: "Rapid As-Built Survey Program",
        description:
            "Rapid laser scanning and as-built survey production for multiple locations as part of the Turkcell store renovation program.",
        image: "/images/case-studies/eosproje-turkcell-magaza-lazer-tarama-rolove-as-built.webp",
        sector: "Telecommunication",
        location: "Istanbul, Turkey",
        year: "2024",
        lod: "LOD 200",
        tags: ["Rapid Survey", "Retail", "Multi-Location"],
    },
    {
        slug: "enerji-santrali",
        title: "Power Plant Steel Structure",
        subtitle: "Deformation Analysis & As-Built",
        description:
            "Deformation analysis and as-built modeling for static verification of the steel construction structure at the Izmir power plant.",
        image: "/images/case-studies/eosproje-iskenderun-yazici-celik-trafo-bina-scan-to-bim.webp",
        sector: "Energy",
        location: "Izmir, Turkey",
        year: "2023",
        lod: "LOD 350",
        tags: ["Steel Structure", "Deformation", "Static Analysis"],
    },
];

export default function ReferencesClient() {
    return (
        <div className="min-h-screen bg-white">
            <SubPageHero
                title="References"
                description="BIM modeling and laser scanning projects we have successfully realized in industrial facilities, commercial buildings, and retail chains."
                category="Portfolio"
                breadcrumb={[{ label: "References", href: "/en/references" }]}
            />

            {/* Trusted Clients — Logo Grid */}
            <section className="py-20 px-4 bg-slate-50 border-b border-slate-100">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-14"
                    >
                        <span className="text-[var(--color-primary-red)] font-black uppercase tracking-[0.3em] text-[10px] bg-red-50 px-5 py-2.5 rounded-full mb-6 inline-block border border-red-100">
                            Trusted Brands
                        </span>
                        <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight mt-4">
                            Companies We Work <span className="text-gradient-red">With</span>
                        </h2>
                        <p className="text-slate-500 mt-4 max-w-xl mx-auto font-medium">
                            Leading companies in Turkey and Europe trust EosProje.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-9 gap-4 items-center">
                        {clientLogos.map((client, idx) => (
                            <motion.div
                                key={client.name}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: idx * 0.05 }}
                                className="group flex flex-col items-center gap-2"
                            >
                                <div className="w-full aspect-square bg-white rounded-2xl border border-slate-100 hover:border-red-100 transition-all duration-300 hover:shadow-lg flex items-center justify-center p-3 overflow-hidden">
                                    <Image
                                        src={client.logo}
                                        alt={`${client.name} - EosProje Reference Client Laser Scanning BIM`}
                                        width={80}
                                        height={80}
                                        className="object-contain w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500 opacity-60 group-hover:opacity-100"
                                    />
                                </div>
                                <span className="text-[9px] font-black uppercase tracking-wider text-slate-400 group-hover:text-slate-700 transition-colors text-center leading-tight">
                                    {client.name}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Projects */}
            <section className="py-24 px-4">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mb-16"
                    >
                        <span className="text-[var(--color-primary-red)] font-black uppercase tracking-[0.3em] text-[10px] bg-red-50 px-5 py-2.5 rounded-full mb-6 inline-block border border-red-100">
                            Case Studies
                        </span>
                        <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mt-4">
                            Featured <span className="text-gradient-red">Projects</span>
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {featuredProjects.map((project, idx) => (
                            <motion.div
                                key={project.slug}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                            >
                                <Link href={`/en/references/${project.slug}`} className="group block h-full">
                                    <div className="bg-[#F8FAFC] rounded-[2.5rem] border border-slate-100 hover:border-red-100/50 hover:bg-white transition-all duration-500 overflow-hidden flex flex-col h-full hover:shadow-2xl hover:shadow-slate-200/50 hover:-translate-y-1">
                                        {/* Project Image */}
                                        <div className="relative h-56 overflow-hidden">
                                            <Image
                                                src={project.image}
                                                alt={`${project.title} - EosProje ${project.subtitle} Laser Scanning BIM`}
                                                fill
                                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                                            <div className="absolute top-4 left-4">
                                                <span className="px-3 py-1 bg-[var(--color-primary-red)] text-white text-[10px] font-black rounded-full uppercase tracking-widest">
                                                    {project.sector}
                                                </span>
                                            </div>
                                            <div className="absolute top-4 right-4">
                                                <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-slate-700 text-[10px] font-black rounded-full uppercase tracking-widest flex items-center gap-1">
                                                    <Layers className="w-3 h-3" />
                                                    {project.lod}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="p-8 flex-grow flex flex-col">
                                            <div className="flex items-center gap-4 mb-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                                                <span className="flex items-center gap-1">
                                                    <MapPin className="w-3 h-3" />
                                                    {project.location}
                                                </span>
                                                <span className="flex items-center gap-1">
                                                    <Calendar className="w-3 h-3" />
                                                    {project.year}
                                                </span>
                                            </div>

                                            <h3 className="text-xl font-black text-slate-900 group-hover:text-[var(--color-primary-red)] transition-colors tracking-tight mb-1">
                                                {project.title}
                                            </h3>
                                            <p className="text-xs font-black text-[var(--color-primary-red)] uppercase tracking-wider mb-4">
                                                {project.subtitle}
                                            </p>
                                            <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-grow font-medium">
                                                {project.description}
                                            </p>

                                            <div className="flex flex-wrap gap-2 mb-6">
                                                {project.tags.map((tag) => (
                                                    <span
                                                        key={tag}
                                                        className="text-[9px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full border bg-slate-50 text-slate-500 border-slate-100"
                                                    >
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>

                                            <div className="pt-5 border-t border-slate-100">
                                                <span className="text-[var(--color-primary-red)] text-xs font-black uppercase tracking-[0.2em] flex items-center gap-2 group-hover:gap-3 transition-all">
                                                    View Case Study <ArrowRight className="w-4 h-4" />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 px-4 bg-slate-900">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-black text-white mb-6 tracking-tight">
                            Let Your Project Be Our Next <span className="text-[var(--color-primary-red)]">Reference</span>
                        </h2>
                        <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto font-medium leading-relaxed">
                            Request a free consultation for your industrial facility, commercial building, or retail project.
                        </p>
                        <Link
                            href="/en/contact"
                            className="inline-flex items-center gap-3 px-12 py-5 bg-[var(--color-primary-red)] text-white font-black uppercase tracking-[0.2em] text-xs rounded-2xl hover:bg-red-800 transition-all shadow-2xl shadow-red-900/40 hover:-translate-y-1"
                        >
                            Get a Free Quote <ArrowRight className="w-5 h-5" />
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
