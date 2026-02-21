"use client";

import SubPageHero from "@/components/SubPageHero";
import { Target, Users, Award, TrendingUp, CheckCircle2, Globe } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function AboutClient() {
    return (
        <div className="min-h-screen bg-white">
            <SubPageHero
                title="About Us"
                description="From point cloud to intelligent models. EosProje provides high-precision BIM modeling and as-built documentation services for industrial facilities and the construction sector."
                category="Corporate"
                breadcrumb={[{ label: "About Us", href: "/en/about" }]}
            />

            <div className="max-w-7xl mx-auto px-4 py-20">

                {/* About Image & Intro */}
                <div className="flex flex-col lg:flex-row items-center gap-16 mb-24">
                    <div className="lg:w-1/2 relative">
                        <div className="relative aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-100">
                            <Image
                                src="/images/case-studies/eosproje-lazer-tarama-sistemleri-bim-modelleme-hizmetleri.webp"
                                alt="EosProje Team Laser Scanning on Site"
                                fill
                                className="object-cover"
                            />
                            {/* Overlay Badge */}
                            <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-white/50">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center text-[var(--color-primary-red)] font-black text-lg">
                                        10+
                                    </div>
                                    <div>
                                        <h4 className="font-black text-slate-900 text-sm">Years Experience</h4>
                                        <p className="text-xs text-slate-500 font-medium">In International Projects</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Decorative Pattern */}
                        <div className="absolute -top-10 -left-10 w-full h-full bg-slate-900/5 -z-10 rounded-[2.5rem]"></div>
                    </div>

                    <div className="lg:w-1/2">
                        <span className="text-[var(--color-primary-red)] font-black uppercase tracking-widest text-[10px] bg-red-50 px-4 py-2 rounded-full mb-6 inline-block border border-red-100">
                            Who We Are?
                        </span>
                        <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
                            The Intersection of <span className="text-gradient-red">Technology and Engineering</span>
                        </h2>
                        <div className="space-y-6 text-lg text-slate-600 font-medium leading-relaxed">
                            <p>
                                EosProje is a technology-focused engineering firm established to respond to the digital transformation needs in the construction and industrial sectors.
                            </p>
                            <p>
                                In complex projects where traditional survey and documentation methods fall short; we <strong>&quot;digitize reality&quot;</strong> using laser scanning (LiDAR), photogrammetry, and BIM technologies.
                            </p>
                            <p className="border-l-4 border-[var(--color-primary-red)] pl-6 italic text-slate-800">
                                Our goal is not just to deliver a 3D model; it is to ensure that investors and engineers have the most accurate data about their existing structures.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Mission & Vision */}
                <div className="grid md:grid-cols-2 gap-12 mb-24">
                    <div className="bg-gradient-to-br from-red-50 to-orange-50 p-10 rounded-3xl border border-red-100">
                        <div className="w-14 h-14 bg-[var(--color-primary-red)] rounded-xl flex items-center justify-center text-white mb-6">
                            <Target className="w-7 h-7" />
                        </div>
                        <h2 className="text-2xl font-black text-slate-900 mb-4">Our Mission</h2>
                        <p className="text-slate-700 leading-relaxed">
                            To provide digital documentation solutions with millimetric precision for industrial and architectural projects by
                            combining laser scanning technology with BIM methodologies in Turkey and the global market. To ensure that our
                            clients make decisions based on accurate data during renovation, expansion, and facility management processes.
                        </p>
                    </div>

                    <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-10 rounded-3xl border border-blue-100">
                        <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center text-white mb-6">
                            <TrendingUp className="w-7 h-7" />
                        </div>
                        <h2 className="text-2xl font-black text-slate-900 mb-4">Our Vision</h2>
                        <p className="text-slate-700 leading-relaxed">
                            To be Turkey's reference company in reality capture and BIM. To contribute to the Industry 4.0 transformation by
                            creating digital twins of industrial facilities. To develop AI-supported automated modeling processes with our
                            R&D investments and increase our competitiveness in the global market.
                        </p>
                    </div>
                </div>

                {/* Values */}
                <div className="mb-24">
                    <h2 className="text-3xl font-black text-slate-900 mb-12 text-center">Our Working Values</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { icon: <Award className="w-6 h-6" />, title: "Quality and Precision", desc: "We maintain a Â±2mm accuracy standard in every project. We target zero errors with our three-stage QA/QC process." },
                            { icon: <CheckCircle2 className="w-6 h-6" />, title: "Reliability", desc: "We achieve 100% compliance with delivery dates. We do not request additional fees outside the scope of the contract." },
                            { icon: <Users className="w-6 h-6" />, title: "Customer Orientation", desc: "We conduct comprehensive exploration at the beginning of the project, understand your needs, and offer special solutions." },
                            { icon: <Globe className="w-6 h-6" />, title: "Continuous Development", desc: "We follow new software and hardware technologies. We provide regular training to our team." },
                            { icon: <Target className="w-6 h-6" />, title: "Transparency", desc: "We share project progress with weekly reports. We establish open communication at every stage." },
                            { icon: <Award className="w-6 h-6" />, title: "Ethics and Privacy", desc: "We protect customer data under NDA and do not share it with third parties." }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-white p-8 rounded-2xl border-2 border-slate-100 hover:border-red-100 transition-all hover:shadow-lg">
                                <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center text-[var(--color-primary-red)] mb-4">
                                    {item.icon}
                                </div>
                                <h3 className="text-lg font-black text-slate-900 mb-3">{item.title}</h3>
                                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Team & Expertise */}
                <div className="bg-slate-900 rounded-[3rem] p-12 md:p-16 text-white mb-24">
                    <h2 className="text-3xl font-black mb-8">Our Team and Expertise Areas</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-lg font-black text-red-400 mb-4 uppercase tracking-wider">Technical Team</h3>
                            <ul className="space-y-3 text-slate-300">
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                                    <span><strong className="text-white">BIM Modeling Specialists:</strong> Engineers with 5+ years of experience and Revit/Plant 3D certification</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                                    <span><strong className="text-white">Laser Scanning Operators:</strong> Leica and Faro certified scan technicians</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                                    <span><strong className="text-white">QA/QC Specialists:</strong> Independent quality control and validation team</span>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-black text-red-400 mb-4 uppercase tracking-wider">Sectoral Experience</h3>
                            <ul className="space-y-3 text-slate-300">
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                                    <span>Petrochemical and refinery facilities</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                                    <span>Automotive and white goods factories</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                                    <span>Commercial buildings and shopping mall complexes</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                                    <span>Historical structures and restoration projects</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Contact CTA */}
                <div className="text-center bg-slate-50 rounded-[3rem] p-16">
                    <h2 className="text-3xl font-black text-slate-900 mb-6">Let's Discuss Your Project</h2>
                    <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto">
                        Contact us for detailed information about our BIM modeling, as-built documentation, or laser scanning services.
                    </p>
                    <Link href="/en/contact" className="inline-flex items-center gap-2 px-10 py-5 bg-[var(--color-primary-red)] text-white font-black rounded-2xl hover:bg-red-700 transition-all shadow-xl">
                        Contact Us
                    </Link>
                </div>
            </div>
        </div>
    );
}
