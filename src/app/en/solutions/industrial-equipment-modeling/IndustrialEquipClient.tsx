"use client";

import SubPageHero from "@/components/SubPageHero";
import { Settings, Cpu, ArrowRight, Factory, Gauge, Wrench, CheckCircle2, AlertTriangle } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function IndustrialEquipClient() {
    return (
        <div className="min-h-screen bg-white">
            <SubPageHero
                title="Industrial Equipment and MEP Modeling"
                description="High-detail 3D modeling and as-built documentation services for complex machinery, pipelines, and MEP systems in factories and facilities."
                category="Our Solutions"
                breadcrumb={[
                    { label: "Solutions", href: "/en/solutions" },
                    { label: "Industrial Equipment", href: "/en/solutions/industrial-equipment-modeling" }
                ]}
            />

            <div className="max-w-7xl mx-auto px-4 py-20">
                {/* Intro */}
                <div className="prose prose-lg max-w-none mb-20">
                    <p className="text-lg text-slate-700 leading-relaxed mb-6">
                        Correct modeling of process equipment, machine groups, pipelines, and MEP (Mechanical, Electrical, Plumbing) systems in industrial facilities is critical for the success of facility expansion, modernization, and maintenance-repair processes. Managing these complex systems with traditional 2D drawings leads to serious operational risks, such as inability to perform clash detection, difficulty in planning installation sequences, and inability to determine maintenance access points.
                    </p>
                    <p className="text-lg text-slate-700 leading-relaxed">
                        With the combination of laser scanning technology and Revit MEP/Plant 3D software, all equipment inside the factory is transformed into 3D models with millimetric precision. These models are not just visual representations; they are intelligent digital assets containing data such as technical specifications of each equipment, maintenance periods, and manufacturer information.
                    </p>
                </div>

                {/* Areas of Expertise */}
                <div className="mb-24">
                    <h2 className="text-3xl font-black text-slate-900 mb-12">Our Industrial Modeling Expertise</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                            className="bg-gradient-to-br from-orange-50 to-red-50 p-10 rounded-3xl border border-orange-100">
                            <div className="w-14 h-14 bg-orange-600 rounded-xl flex items-center justify-center text-white mb-6">
                                <Factory className="w-7 h-7" />
                            </div>
                            <h3 className="text-2xl font-black text-slate-900 mb-4">Process Equipment</h3>
                            <p className="text-slate-700 leading-relaxed mb-4">
                                Reactors, tanks, separators, heat exchangers, columns, and filters are modeled. Flange connection points (nozzles), support legs, platforms, and ladder access ways are detailed for each equipment.
                            </p>
                            <ul className="space-y-2 text-sm text-slate-600">
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />Pressure vessels (ASME code compliant)</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />Distillation columns</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />Chemical reactors</li>
                            </ul>
                        </motion.div>

                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
                            className="bg-gradient-to-br from-blue-50 to-cyan-50 p-10 rounded-3xl border border-blue-100">
                            <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center text-white mb-6">
                                <Gauge className="w-7 h-7" />
                            </div>
                            <h3 className="text-2xl font-black text-slate-900 mb-4">Piping</h3>
                            <p className="text-slate-700 leading-relaxed mb-4">
                                Process, ventilation, cooling water, steam, and chemical transfer lines are modeled in accordance with ISO standards. Valves, flanges, manometers, and pressure relief valves (fittings) are shown.
                            </p>
                            <ul className="space-y-2 text-sm text-slate-600">
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />Piping isometric drawings</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />Valves and fitting schedules</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />Pressure drop analysis support</li>
                            </ul>
                        </motion.div>

                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
                            className="bg-gradient-to-br from-green-50 to-emerald-50 p-10 rounded-3xl border border-green-100">
                            <div className="w-14 h-14 bg-green-600 rounded-xl flex items-center justify-center text-white mb-6">
                                <Wrench className="w-7 h-7" />
                            </div>
                            <h3 className="text-2xl font-black text-slate-900 mb-4">Mechanical Equipment</h3>
                            <p className="text-slate-700 leading-relaxed mb-4">
                                Pumps, compressors, turbines, generators, conveyors, cranes, and handling systems are modeled. Vibration isolation, motor foundations, and coupling details are shown.
                            </p>
                            <ul className="space-y-2 text-sm text-slate-600">
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />Centrifugal pumps (with capacities)</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />Air compressors</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />Conveyor belts and rollers</li>
                            </ul>
                        </motion.div>

                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
                            className="bg-gradient-to-br from-purple-50 to-pink-50 p-10 rounded-3xl border border-purple-100">
                            <div className="w-14 h-14 bg-purple-600 rounded-xl flex items-center justify-center text-white mb-6">
                                <Cpu className="w-7 h-7" />
                            </div>
                            <h3 className="text-2xl font-black text-slate-900 mb-4">HVAC and MEP Systems</h3>
                            <p className="text-slate-700 leading-relaxed mb-4">
                                Ventilation ducts, AC units, electrical distribution panels, lighting systems, and fire extinguishing lines are modeled. Ceiling plenum clash detection can be performed.
                            </p>
                            <ul className="space-y-2 text-sm text-slate-600">
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />HVAC duct routing</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />Electrical tray and cable routes</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />Sprinkler and fire systems</li>
                            </ul>
                        </motion.div>
                    </div>
                </div>

                {/* Process */}
                <div className="mb-24">
                    <h2 className="text-3xl font-black text-slate-900 mb-12">Our Industrial Modeling Process</h2>
                    <div className="space-y-6">
                        {[
                            { title: "Field Scan and Data Collection", desc: "The facility is scanned with Leica laser scanners. Equipment nameplates are photographed. P&ID (Piping & Instrumentation Diagram) and PFD (Process Flow Diagram) drawings are collected. Process information is obtained from the operation team." },
                            { title: "Point Cloud Processing", desc: "Scan points are merged (registration). Equipment boundaries are separated by an isolation process. A special segment is created for each machine or tank group. Shadow areas are detected, and additional scanning is done if necessary." },
                            { title: "Equipment Family Creation", desc: "Custom equipment families are created in Revit or Plant 3D. For pumps, suction/discharge flange positions and motor power parameters are added. For tank models, level indicator, manway, and vent locations are defined." },
                            { title: "Piping Modeling", desc: "Pipelines are modeled according to spec (diameter, material, pressure class). Valves, flanges, reducers, and tees are placed in the correct positions. Pipe supports (hanger points) are shown in the model. Isometric drawings are automatically produced." },
                            { title: "MEP Coordination", desc: "HVAC ducts, electrical trays, and sprinkler lines are added to the model. Multi-discipline clash detection is performed in Navisworks. Critical clashes are reported, and solution suggestions are offered." },
                            { title: "Parametric Data Entry", desc: "TAG number, manufacturer, model, serial no, installation date, and maintenance period parameters are entered for each equipment. This data is reported in Schedules and exported to CMMS (Computerized Maintenance Management System) software." }
                        ].map((step, idx) => (
                            <div key={idx} className="flex items-start gap-6 bg-slate-50 p-8 rounded-2xl hover:bg-white hover:shadow-lg transition-all">
                                <div className="w-12 h-12 bg-[var(--color-primary-red)] text-white rounded-2xl flex items-center justify-center font-black flex-shrink-0">{idx + 1}</div>
                                <div>
                                    <h3 className="text-xl font-black text-slate-900 mb-3">{step.title}</h3>
                                    <p className="text-slate-600 leading-relaxed">{step.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Usage Areas */}
                <div className="mb-24 bg-slate-900 rounded-[3rem] p-12 md:p-16 text-white">
                    <h2 className="text-3xl font-black mb-8">Usage Areas of Industrial Equipment Models</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div>
                            <h3 className="text-lg font-black text-orange-400 mb-4 uppercase tracking-wider">Facility Expansion Projects</h3>
                            <p className="text-slate-300 leading-relaxed">
                                When adding a new production line, the location of old equipment must be precisely known. Thanks to the BIM model, new tanks or machines are designed clash-free with the existing structure. Load analysis can be performed on structural support points (column, beam).
                            </p>
                        </div>
                        <div>
                            <h3 className="text-lg font-black text-blue-400 mb-4 uppercase tracking-wider">Maintenance and Repair Planning</h3>
                            <p className="text-slate-300 leading-relaxed">
                                In the 3D model, the location of critical equipment such as valves, pumps, and motors is clear. Maintenance teams can plan access routes by looking at the model and prepare the necessary tools and equipment in advance. Shutdown time is minimized.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-lg font-black text-green-400 mb-4 uppercase tracking-wider">Safety and Operation Training</h3>
                            <p className="text-slate-300 leading-relaxed">
                                Facility introductions can be made to personnel in a virtual reality (VR) environment. Emergency scenarios (fire, leak) are simulated. New operators receive training on the model before entering the actual facility.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Challenges */}
                <div className="mb-24">
                    <h2 className="text-3xl font-black text-slate-900 mb-8">Industrial Modeling Challenges</h2>
                    <div className="space-y-4">
                        <div className="border-l-4 border-yellow-500 bg-yellow-50 p-6 rounded-r-2xl flex items-start gap-4">
                            <AlertTriangle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
                            <div>
                                <h3 className="text-lg font-black text-slate-900 mb-2">Dense Installations and Cable Tray Chaos</h3>
                                <p className="text-slate-700">
                                    In petrochemical facilities, thousands of pipelines cross over each other. It is difficult to distinguish each pipe in the point cloud. Manual segmentation and cross-checking with P&ID references are required.
                                </p>
                            </div>
                        </div>
                        <div className="border-l-4 border-orange-500 bg-orange-50 p-6 rounded-r-2xl flex items-start gap-4">
                            <AlertTriangle className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                            <div>
                                <h3 className="text-lg font-black text-slate-900 mb-2">Scanning During Facility Operation</h3>
                                <p className="text-slate-700">
                                    If production cannot be stopped, scanning is performed while movable equipment (conveyors, robots) is active. In this case, motion blur occurs. Static scan strategies should be planned, and critical points should be captured when equipment is stopped.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <div className="bg-gradient-to-br from-orange-600 to-red-700 rounded-[3rem] p-16 text-white text-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,.05)_50%,transparent_75%,transparent_100%)] bg-[length:250%_250%,100%_100%] animate-shimmer"></div>
                    <div className="relative z-10">
                        <h3 className="text-4xl font-black mb-6">Carry Your Industrial Facility to a 3D Model</h3>
                        <p className="text-orange-100 mb-10 max-w-2xl mx-auto text-lg leading-relaxed">
                            Let's transform your complex machinery, pipelines, and MEP systems into precise 3D models. Contact us for free site discovery and feasibility analysis.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/en/contact" className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-white text-orange-700 font-black rounded-2xl hover:bg-slate-100 transition-all shadow-2xl">
                                Get Free Discovery <ArrowRight className="w-5 h-5" />
                            </Link>
                            <Link href="/en/sectors/endustriyel-tesis" className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-white/10 backdrop-blur text-white font-black rounded-2xl hover:bg-white/20 transition-all border-2 border-white/30">
                                Our Industrial Sector Projects
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
