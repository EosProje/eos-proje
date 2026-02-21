"use client";

import Link from "next/link";
import SubPageHero from "@/components/SubPageHero";
import { Shield, CheckCircle2, AlertTriangle, FileCheck, Target, Award } from "lucide-react";

export default function QAQCClient() {
    return (
        <div className="min-h-screen bg-white">
            <SubPageHero
                title="QA/QC - Quality Assurance & Control"
                description="Our three-stage quality control process and accuracy guarantees applied in all our projects. We work with a zero-error target in BIM modeling and laser scanning services."
                category="Process & Quality"
                breadcrumb={[{ label: "QA/QC", href: "/en/qa-qc" }]}
            />

            <div className="max-w-7xl mx-auto px-4 py-20">
                {/* Overview */}
                <div className="mb-24">
                    <p className="text-lg text-slate-700 leading-relaxed mb-6">
                        Quality Assurance (QA) and Quality Control (QC) are among the most critical stages in BIM modeling processes.
                        A model being 99% accurate is not enough; a 1% error can lead to significant cost increases or assembly problems during renovation.
                        For this reason, we apply a systematic QA/QC protocol in all our projects.
                    </p>
                </div>

                {/* 3-Stage Process */}
                <div className="mb-24">
                    <h2 className="text-3xl font-black text-slate-900 mb-12">Our Three-Stage Quality Control Process</h2>
                    <div className="space-y-8">
                        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-10 rounded-3xl border-2 border-blue-200">
                            <div className="flex items-start gap-6">
                                <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center text-white font-black text-2xl flex-shrink-0">1</div>
                                <div>
                                    <h3 className="text-2xl font-black text-slate-900 mb-4">Internal QC</h3>
                                    <p className="text-slate-700 leading-relaxed mb-4">
                                        The technical specialist completing the modeling process checks their own work according to the ISO 19650 BIM standard. At this stage:
                                    </p>
                                    <ul className="grid md:grid-cols-2 gap-3">
                                        {[
                                            "Resets the Revit Warnings list",
                                            "Verifies all elements are assigned to the correct Category",
                                            "Checks that Family parameters are filled",
                                            "Tests compliance with the naming convention",
                                            "Reviews that View Templates are correctly applied",
                                            "Tests IFC export quality"
                                        ].map((item, i) => (
                                            <li key={i} className="flex items-start gap-2 text-slate-700">
                                                <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-10 rounded-3xl border-2 border-green-200">
                            <div className="flex items-start gap-6">
                                <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center text-white font-black text-2xl flex-shrink-0">2</div>
                                <div>
                                    <h3 className="text-2xl font-black text-slate-900 mb-4">Independent Geometric Validation</h3>
                                    <p className="text-slate-700 leading-relaxed mb-4">
                                        A QC specialist, completely independent from the modeling team, checks the geometric accuracy and compliance of the model with standards:
                                    </p>
                                    <ul className="grid md:grid-cols-2 gap-3">
                                        {[
                                            "Accuracy of critical dimensions (axis distances, floor heights)",
                                            "Control of element connection points (join, constraint)",
                                            "Model accessibility in different Revit versions",
                                            "Clash detection test in Navisworks",
                                            "Schedule accuracy (quantity take-offs)",
                                            "PDF export quality and visibility check"
                                        ].map((item, i) => (
                                            <li key={i} className="flex items-start gap-2 text-slate-700">
                                                <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-orange-50 to-red-50 p-10 rounded-3xl border-2 border-orange-200">
                            <div className="flex items-start gap-6">
                                <div className="w-16 h-16 bg-orange-600 rounded-2xl flex items-center justify-center text-white font-black text-2xl flex-shrink-0">3</div>
                                <div>
                                    <h3 className="text-2xl font-black text-slate-900 mb-4">Cloud-to-Model Validation (Overlay)</h3>
                                    <p className="text-slate-700 leading-relaxed mb-4">
                                        This is the most critical stage in as-built projects. The model and point cloud are compared in CloudCompare software:
                                    </p>
                                    <ul className="space-y-3">
                                        {[
                                            { title: "Deviation Map Generation", desc: "The distance between each point of the model and the nearest point cloud point is calculated. A colored deviation map is produced (green: within tolerance, yellow-red: outside tolerance)." },
                                            { title: "Acceptance Criteria", desc: "We target Â±5mm for general field work and Â±2mm for industrial facilities. We provide Â±1mm precision for critical equipment mounting points." },
                                            { title: "Revision Cycle", desc: "Out-of-tolerance areas are corrected in the model and the check is repeated. The entire deviation report is added to the delivery package." }
                                        ].map((item, i) => (
                                            <li key={i} className="border-l-4 border-orange-500 pl-4">
                                                <strong className="text-slate-900 block mb-1">{item.title}:</strong>
                                                <span className="text-slate-700">{item.desc}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Quality Metrics */}
                <div className="mb-24 bg-slate-900 rounded-[3rem] p-12 md:p-16 text-white">
                    <h2 className="text-3xl font-black mb-8">Our Quality Metrics</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div>
                            <div className="text-5xl font-black text-red-400 mb-2">Â±2mm</div>
                            <div className="text-lg font-bold text-slate-300 mb-2">Accuracy Standard</div>
                            <p className="text-slate-400 text-sm">The level of geometric precision we guarantee in industrial facilities</p>
                        </div>
                        <div>
                            <div className="text-5xl font-black text-green-400 mb-2">0</div>
                            <div className="text-lg font-bold text-slate-300 mb-2">Revit Warnings</div>
                            <p className="text-slate-400 text-sm">All integrity warnings are cleared before delivery</p>
                        </div>
                        <div>
                            <div className="text-5xl font-black text-blue-400 mb-2">100%</div>
                            <div className="text-lg font-bold text-slate-300 mb-2">IFC Compatibility</div>
                            <p className="text-slate-400 text-sm">Full compliance with Open BIM standards, seamless opening in other software</p>
                        </div>
                    </div>
                </div>

                {/* Common Errors */}
                <div className="mb-24">
                    <h2 className="text-3xl font-black text-slate-900 mb-8">Common Errors We Detect During QC</h2>
                    <div className="space-y-4">
                        {[
                            { icon: <AlertTriangle className="w-6 h-6" />, title: "Overlapping Walls", desc: "Two walls overlapping. Creates errors in quantity take-offs. Fixed with join geometry." },
                            { icon: <AlertTriangle className="w-6 h-6" />, title: "Unplaced Elements", desc: "Elements like Room or Space not appearing in the view. Solved with filter settings." },
                            { icon: <AlertTriangle className="w-6 h-6" />, title: "Incorrect Constraints", desc: "Elements locked to wrong Levels or Grids. Fixed individually." },
                            { icon: <AlertTriangle className="w-6 h-6" />, title: "Missing Parameters", desc: "Critical parameters like Fire Rating or Material left empty in families. Filled manually." }
                        ].map((item, i) => (
                            <div key={i} className="flex items-start gap-4 bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-2xl">
                                <div className="text-yellow-600">{item.icon}</div>
                                <div>
                                    <h3 className="font-black text-slate-900 mb-1">{item.title}</h3>
                                    <p className="text-slate-700 text-sm">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA */}
                <div className="bg-gradient-to-br from-green-600 to-emerald-700 rounded-[3rem] p-16 text-white text-center">
                    <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Shield className="w-10 h-10" />
                    </div>
                    <h2 className="text-3xl font-black mb-6">Quality Guaranteed BIM Modeling</h2>
                    <p className="text-green-100 mb-10 max-w-2xl mx-auto text-lg">
                        We guarantee error-free delivery with our three-stage QA/QC process and deviation analysis reports.
                    </p>
                    <Link href="/en/contact" className="inline-flex items-center gap-2 px-10 py-5 bg-white text-green-700 font-black rounded-2xl hover:bg-slate-100 transition-all">
                        See Our Quality Certificates
                    </Link>
                </div>
            </div>
        </div>
    );
}
