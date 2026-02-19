"use client";

import SubPageHero from "@/components/SubPageHero";
import { ShieldCheck, Lock, Scale, Leaf, FileCheck } from "lucide-react";

export default function Page() {
    return (
        <div className="min-h-screen bg-white">
            <SubPageHero
                title="Our Quality Policy"
                description="Our fundamental principles and commitments regarding customer satisfaction, sustainability, and occupational safety."
                category="Corporate"
                breadcrumb={[{ label: "Quality Policy", href: "/en/quality-policy" }]}
            />

            <div className="max-w-7xl mx-auto px-4 py-20">
                <div className="grid lg:grid-cols-3 gap-12">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-12">
                        <section>
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center text-[var(--color-primary-red)]">
                                    <ShieldCheck className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl font-black text-slate-900">Quality Management System</h2>
                            </div>
                            <div className="prose prose-lg text-slate-600">
                                <p>
                                    As EosProje, we adopt a quality management system in accordance with ISO 9001:2015 standards.
                                    All our processes (quoting, fieldwork, modeling, delivery) are carried out according to documented procedures.
                                    Our goal is to produce projects that meet 100% of customer requirements, are error-free, and are delivered on time.
                                </p>
                                <p>
                                    We measure our performance through regular internal audits and customer feedback surveys, and we revise
                                    our processes with a continuous improvement (kaizen) philosophy.
                                </p>
                            </div>
                        </section>

                        <section>
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center text-green-600">
                                    <Leaf className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl font-black text-slate-900">Environment and Sustainability</h2>
                            </div>
                            <div className="prose prose-lg text-slate-600">
                                <p>
                                    We are aware of the positive impact of Digital Transformation on the environment.
                                    Our as-built modeling work allows existing buildings to be renovated and reused (adaptive reuse)
                                    instead of being demolished and rebuilt.
                                </p>
                                <p>
                                    In our office operations, we adopt a paperless office policy and use high energy-efficiency equipment.
                                </p>
                            </div>
                        </section>

                        <section>
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600">
                                    <Lock className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl font-black text-slate-900">Information Security (ISMS)</h2>
                            </div>
                            <div className="prose prose-lg text-slate-600">
                                <p>
                                    As we manage the data of industrial facilities and critical infrastructure, information security is our highest priority.
                                    In accordance with ISO 27001 standards:
                                </p>
                                <ul className="list-disc pl-5 space-y-2 mt-4">
                                    <li>All project data is stored on encrypted servers.</li>
                                    <li>Access to data is authorized according to the "need-to-know" principle.</li>
                                    <li>Regular cybersecurity tests and backup procedures are implemented.</li>
                                    <li>All our employees have signed a non-disclosure agreement (NDA).</li>
                                </ul>
                            </div>
                        </section>

                        <section>
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center text-orange-600">
                                    <Scale className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl font-black text-slate-900">Occupational Health and Safety (OHS)</h2>
                            </div>
                            <div className="prose prose-lg text-slate-600">
                                <p>
                                    We act with the "Safety First" principle in fieldwork. Our laser scanning teams use all necessary
                                    PPE (Personal Protective Equipment) on-site and ensure full compliance with the facility's OHS rules.
                                    Specially trained personnel are assigned for risky situations such as working at heights or in confined spaces.
                                </p>
                            </div>
                        </section>
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-1 space-y-8">
                        <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200">
                            <h3 className="font-black text-slate-900 mb-6 flex items-center gap-2">
                                <FileCheck className="w-5 h-5 text-red-500" />
                                Our Certificates
                            </h3>
                            <ul className="space-y-4">
                                <li className="flex items-center gap-3 p-3 bg-white rounded-xl shadow-sm">
                                    <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center font-bold text-xs text-slate-600">ISO</div>
                                    <div>
                                        <div className="font-bold text-slate-900">ISO 9001:2015</div>
                                        <div className="text-xs text-slate-500">Quality Management System</div>
                                    </div>
                                </li>
                                <li className="flex items-center gap-3 p-3 bg-white rounded-xl shadow-sm">
                                    <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center font-bold text-xs text-slate-600">ISO</div>
                                    <div>
                                        <div className="font-bold text-slate-900">ISO 27001</div>
                                        <div className="text-xs text-slate-500">Information Security</div>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-[var(--color-deep-charcoal)] p-8 rounded-3xl text-white">
                            <h3 className="font-black mb-4">Policy Document</h3>
                            <p className="text-slate-400 text-sm mb-6">
                                You can download our official quality policy document and commitment in PDF format.
                            </p>
                            <button className="w-full py-3 bg-[var(--color-primary-red)] rounded-xl font-bold hover:bg-red-700 transition-colors flex items-center justify-center gap-2">
                                Download PDF (EN)
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
