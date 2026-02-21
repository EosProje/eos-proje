"use client";

import SubPageHero from "@/components/SubPageHero";
import { Layers, CheckCircle2, ArrowRight, Building2, Factory, Ruler, Clock, FileCheck, Shield } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function AsBuiltClient() {
    return (
        <div className="min-h-screen bg-white">
            <SubPageHero
                title="As-Built Modeling Services"
                description="We digitize the real state of existing structures with millimetric precision. Reliable as-built documentation solutions for renovation, restoration, and facility management projects."
                category="Our Solutions"
                breadcrumb={[
                    { label: "Solutions", href: "/en/solutions" },
                    { label: "As-built Modeling", href: "/en/solutions/as-built-modeling" }
                ]}
            />

            <div className="max-w-7xl mx-auto px-4 py-20">
                {/* Intro Text */}
                <div className="prose prose-lg max-w-none mb-20">
                    <p className="text-lg text-slate-700 leading-relaxed mb-6">
                        As-built modeling is a critical process that carries the existing physical state of structures into a digital environment, offering accurate and up-to-date documentation to project stakeholders. Especially in renovation, modernization, expansion, and restoration projects, knowing the current site condition is vital for project success.
                    </p>
                    <p className="text-lg text-slate-700 leading-relaxed mb-6">
                        In as-built studies conducted with traditional measurement methods, human-induced errors, incomplete data, and time losses are frequently encountered problems. In modern as-built processes where laser scanning technology and BIM methodologies come together, every detail of the structure is recorded with millimetric accuracy and transformed into three-dimensional parametric models. This allows project teams to make decisions based on reliable data throughout all processes, from the design phase to maintenance and repair.
                    </p>
                </div>

                {/* Main Features */}
                <div className="mb-24">
                    <h2 className="text-3xl font-black text-slate-900 mb-12">Advantages of Our As-Built Modeling Process</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-slate-50 p-10 rounded-3xl border border-slate-100"
                        >
                            <div className="w-14 h-14 bg-[var(--color-primary-red)] rounded-xl flex items-center justify-center text-white mb-6">
                                <Ruler className="w-7 h-7" />
                            </div>
                            <h3 className="text-2xl font-black text-slate-900 mb-4">Millimetric Accuracy Guarantee</h3>
                            <p className="text-slate-600 leading-relaxed">
                                We achieve a Â±2mm accuracy standard in measurements carried out with Leica and Faro brand laser scanners. Every point cloud data is verified with independent control points and delivered with deviation analysis reports. This level of precision is critical, especially for equipment layout planning and MEP system clash control in industrial facilities.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="bg-slate-50 p-10 rounded-3xl border border-slate-100"
                        >
                            <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center text-white mb-6">
                                <Clock className="w-7 h-7" />
                            </div>
                            <h3 className="text-2xl font-black text-slate-900 mb-4">Fast Delivery and Efficiency</h3>
                            <p className="text-slate-600 leading-relaxed">
                                We provide up to 70% time savings compared to traditional measurement methods. On average, scanning a 5,000 mÂ² industrial facility takes 2-3 days, and the modeling process is completed in 7-10 business days. We affect facility operations at a minimum level during the data collection process; in most cases, scanning operations can be performed without stopping production.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="bg-slate-50 p-10 rounded-3xl border border-slate-100"
                        >
                            <div className="w-14 h-14 bg-green-600 rounded-xl flex items-center justify-center text-white mb-6">
                                <FileCheck className="w-7 h-7" />
                            </div>
                            <h3 className="text-2xl font-black text-slate-900 mb-4">Comprehensive Documentation</h3>
                            <p className="text-slate-600 leading-relaxed">
                                We offer not just a 3D model, but flexible delivery formats according to your project needs: Revit (.rvt) parametric models, IFC standard format, AutoCAD (.dwg) plans, PDF technical drawings, point cloud raw data (.e57, .rcs), and panoramic photo files. Every delivery package comes with a measurement report, deviation analysis, and QA/QC documentation.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="bg-slate-50 p-10 rounded-3xl border border-slate-100"
                        >
                            <div className="w-14 h-14 bg-purple-600 rounded-xl flex items-center justify-center text-white mb-6">
                                <Shield className="w-7 h-7" />
                            </div>
                            <h3 className="text-2xl font-black text-slate-900 mb-4">Multi-Layered Quality Control</h3>
                            <p className="text-slate-600 leading-relaxed">
                                Every project output goes through a three-stage QA/QC process: internal control by the modeling team, geometric validation by an independent quality control specialist, and finally point cloud to model overlay comparison. Revit Warnings are cleared, clash detection is performed, and compliance with BIM standards is tested.
                            </p>
                        </motion.div>
                    </div>
                </div>

                {/* Application Areas */}
                <div className="mb-24">
                    <h2 className="text-3xl font-black text-slate-900 mb-12">Usage Areas of Our As-Built Models</h2>
                    <div className="space-y-6">
                        <div className="bg-white border-2 border-slate-100 rounded-3xl p-10 hover:border-red-100 transition-all">
                            <div className="flex items-start gap-6">
                                <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center flex-shrink-0">
                                    <Building2 className="w-6 h-6 text-[var(--color-primary-red)]" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-black text-slate-900 mb-3">Renovation and Modernization Projects</h3>
                                    <p className="text-slate-600 leading-relaxed mb-4">
                                        The biggest risk in the renovation process of old structures is the misunderstanding of the existing condition. Our as-built model includes all critical information from wall thicknesses to ceiling heights, and current installation routes to the locations of structural elements. Architecture teams can develop new designs based on real data; thus, revisions due to site conditions are minimized.
                                    </p>
                                    <p className="text-slate-600 leading-relaxed">
                                        Especially in historical buildings, we provide technical infrastructure for restoration works by modeling the parts of original structural elements that need to be preserved in detail. Intervention simulations performed on the model give us a significant advantage in preparing reports to be submitted to conservation boards.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white border-2 border-slate-100 rounded-3xl p-10 hover:border-red-100 transition-all">
                            <div className="flex items-start gap-6">
                                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
                                    <Factory className="w-6 h-6 text-blue-600" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-black text-slate-900 mb-3">Industrial Facility Expansion Projects</h3>
                                    <p className="text-slate-600 leading-relaxed mb-4">
                                        In the addition of new production lines or modernization of existing systems in factories, detailed knowledge of the structural carrier system is essential. We provide accurate site information for steel construction and machine assembly works by modeling column-beam systems, existing bridge crane rails, platform levels, and infrastructure connection points with full coordinates.
                                    </p>
                                    <p className="text-slate-600 leading-relaxed">
                                        Furthermore, thanks to scanning operations performed without stopping the process, we can create as-built documentation even in active production areas. Existing conveyor systems, pipelines, and electrical panels are included in the model; it becomes possible to design new equipment in a clash-free manner.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white border-2 border-slate-100 rounded-3xl p-10 hover:border-red-100 transition-all">
                            <div className="flex items-start gap-6">
                                <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center flex-shrink-0">
                                    <CheckCircle2 className="w-6 h-6 text-green-600" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-black text-slate-900 mb-3">Facility Management and FM</h3>
                                    <p className="text-slate-600 leading-relaxed mb-4">
                                        On large campuses, hospital complexes, or commercial buildings, we create a digital twin to facilitate the work of maintenance and repair teams. The BIM model contains critical FM data such as the net area of each room, the number of doors and windows, the locations of air conditioning units, and fire alarm points. This information can be exported in COBie format and integrated into building management systems.
                                    </p>
                                    <p className="text-slate-600 leading-relaxed">
                                        In facilities where periodic scanning is performed, tracking changes also becomes possible. By comparing scans performed six months or a year apart, additions, removed elements, and changed functions can be automatically detected.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Process Details */}
                <div className="mb-24">
                    <h2 className="text-3xl font-black text-slate-900 mb-12">Our As-Built Modeling Process Steps</h2>
                    <div className="relative">
                        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[var(--color-primary-red)] to-slate-200"></div>
                        <div className="space-y-12">
                            {[
                                {
                                    num: "01",
                                    title: "Pre-Interview and Scope Definition",
                                    content: "Detailed information exchange is conducted regarding the project site. The requested LOD level, delivery formats, critical areas, and special requirements are clarified. Existing CAD drawings and previous reports, if any, are examined. A scan plan and timeline are created."
                                },
                                {
                                    num: "02",
                                    title: "Field Scan and Data Collection",
                                    content: "Point cloud data is collected with our Leica RTC360 or Faro Focus devices. Each scan point is referenced with GPS coordinates and auto-registered with each other. Average scan resolution: 6mm @ 10m distance. Colored panoramic photos are also recorded during scanning."
                                },
                                {
                                    num: "03",
                                    title: "Data Processing and Registration",
                                    content: "All scan points are merged in Cyclone, ReCap Pro, or Leica Register software. Reference errors are reduced below 3mm with a combination of target-based and cloud-to-cloud registration methods. Outlier points are cleaned, shadow areas are identified, and additional scanning is planned if necessary."
                                },
                                {
                                    num: "04",
                                    title: "3D Modeling (LOD 200-350)",
                                    content: "A parametric model is created in a Revit environment using the point cloud as a base. Architectural elements such as walls, beams, columns, doors-windows, stairs, and ramps; MEP elements such as mechanical devices, pipelines, electrical panels; and structural steel and reinforced concrete details are modeled. Appropriate Revit Families are assigned to each element."
                                },
                                {
                                    num: "05",
                                    title: "Deviation Analysis and Quality Control",
                                    content: "A mesh-to-cloud comparison between the model and the point cloud is performed with CloudCompare software. A colored deviation map is generated; points outside acceptable tolerances are revised. Revit model health checks (Warnings, inconsistencies), clash detection, and IFC export verification are conducted."
                                },
                                {
                                    num: "06",
                                    title: "Delivery Package Preparation",
                                    content: "The RVT model is printed to PDF by creating plans, sections, and views on Sheets. IFC2x3 or IFC4 export is performed. An .nwc file is prepared for Navisworks. Point cloud raw data (.e57 universal format) and a project report (scope, equipment used, accuracy metrics, deviation analysis results) are delivered."
                                }
                            ].map((step, idx) => (
                                <div key={idx} className="relative pl-24">
                                    <div className="absolute left-0 w-16 h-16 bg-[var(--color-primary-red)] rounded-2xl flex items-center justify-center">
                                        <span className="text-white text-xl font-black">{step.num}</span>
                                    </div>
                                    <div className="bg-slate-50 p-8 rounded-2xl">
                                        <h3 className="text-xl font-black text-slate-900 mb-3">{step.title}</h3>
                                        <p className="text-slate-600 leading-relaxed">{step.content}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Technical Details */}
                <div className="mb-24 bg-slate-900 rounded-[3rem] p-12 md:p-16 text-white">
                    <h2 className="text-3xl font-black mb-8">Technical Specifications and Standards</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-lg font-black text-red-400 mb-4 uppercase tracking-wider">Equipment Used</h3>
                            <ul className="space-y-3 text-slate-300">
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                                    <span>Leica RTC360 Laser Scanner (2mm @ 10m precision)</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                                    <span>Faro Focus Premium (HDR panoramic photo support)</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                                    <span>GPS/Total Station integration (geodetic referencing)</span>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-black text-red-400 mb-4 uppercase tracking-wider">Software Infrastructure</h3>
                            <ul className="space-y-3 text-slate-300">
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                                    <span>Autodesk Revit 2024 (BIM modeling)</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                                    <span>Leica Cyclone / Autodesk ReCap Pro (point cloud processing)</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                                    <span>CloudCompare (deviation analysis and quality control)</span>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-black text-red-400 mb-4 uppercase tracking-wider">Delivery Formats</h3>
                            <ul className="space-y-3 text-slate-300">
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                                    <span>Revit (.rvt) - Native parametric model</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                                    <span>IFC (2x3/4) - Open BIM standard</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                                    <span>AutoCAD DWG - 2D plans and sections</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                                    <span>E57, RCS, RCP - Point cloud raw data</span>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-black text-red-400 mb-4 uppercase tracking-wider">Standards Complied With</h3>
                            <ul className="space-y-3 text-slate-300">
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                                    <span>ISO 19650 (BIM information management)</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                                    <span>Level of Development Specification (LOD 200-350)</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                                    <span>USIBD (United States Institute of Building Documentation)</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <div className="bg-gradient-to-br from-[var(--color-primary-red)] to-red-700 rounded-[3rem] p-16 text-white text-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                    <div className="relative z-10">
                        <h3 className="text-4xl font-black mb-6">Free Discovery for Your As-Built Project</h3>
                        <p className="text-red-100 mb-10 max-w-2xl mx-auto text-lg leading-relaxed">
                            Let's evaluate the scope of your project, the scan area, and delivery requirements together. Our experienced team will prepare a technical solution and a price quote specifically for you.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/en/contact" className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-white text-[var(--color-primary-red)] font-black rounded-2xl hover:bg-slate-100 transition-all shadow-2xl">
                                Get Free Quote <ArrowRight className="w-5 h-5" />
                            </Link>
                            <Link href="/en/references" className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-white/10 backdrop-blur text-white font-black rounded-2xl hover:bg-white/20 transition-all border-2 border-white/30">
                                Our Reference Projects
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
