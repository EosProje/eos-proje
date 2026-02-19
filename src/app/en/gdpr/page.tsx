import SubPageHero from "@/components/SubPageHero";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "KVKK Clarification Text | EOSPROJE",
    description: "EOS Proje Personal Data Protection Law (KVKK) clarification text and our data privacy policy.",
};

export default function Page() {
    return (
        <div className="min-h-screen bg-white">
            <SubPageHero
                title="KVKK Clarification Text"
                description="The security of your personal data is important to us."
                category="Legal"
                breadcrumb={[{ label: "GDPR / KVKK", href: "/en/gdpr" }]}
            />

            <div className="max-w-4xl mx-auto px-4 py-20 text-slate-600 leading-relaxed space-y-6">
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 mb-8">
                    <h3 className="text-xl font-black text-slate-900 mb-4">1. Identity of the Data Controller</h3>
                    <p className="mb-4">
                        In accordance with the Law No. 6698 on the Protection of Personal Data (“KVKK”), your personal data may be processed by <strong>EOS Proje</strong> as the data controller within the scope described below.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <div>
                            <span className="block font-bold text-slate-900">Commercial Title:</span>
                            <span>EOS Proje Engineering and Consultancy</span>
                        </div>
                        <div>
                            <span className="block font-bold text-slate-900">Address:</span>
                            <span>Murat Reis mah Teyyareci Muammer sok No:10/4 Üsküdar/İstanbul</span>
                        </div>
                        <div>
                            <span className="block font-bold text-slate-900">Phone:</span>
                            <span>+90 530 664 2263</span>
                        </div>
                        <div>
                            <span className="block font-bold text-slate-900">E-mail:</span>
                            <span>info@eosproje.com</span>
                        </div>
                    </div>
                </div>

                <div>
                    <h3 className="text-2xl font-black text-slate-900 mb-4">2. Purpose of Processing Personal Data</h3>
                    <p>
                        Our company, which has been operating in the fields of <strong>Laser Scanning (Point Cloud)</strong>, <strong>BIM Modeling</strong>, and <strong>Digital Twin</strong> since 2007, processes the personal data it collects (Name-Surname, Contact Information, Project Location Data, etc.) within the framework of our following areas of expertise:
                    </p>
                    <ul className="list-disc pl-5 space-y-2 mt-4">
                        <li>Conducting field operations safely in laser scanning and survey projects,</li>
                        <li>Managing engineering calculations and proposal processes (Scan-to-BIM, As-Built),</li>
                        <li>Establishing and performing commercial contracts,</li>
                        <li>Fulfilling legal obligations (Tax Procedure Law, Labor Law, etc.).</li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-2xl font-black text-slate-900 mb-4">3. To Whom and For What Purpose Formally Processed Personal Data Can Be Transferred</h3>
                    <p>
                        Your collected personal data may be transferred to our business partners, suppliers, legally authorized public institutions, and private individuals within the framework of the personal data processing conditions and purposes specified in Articles 8 and 9 of the KVKK, in line with the realization of the purposes stated above.
                    </p>
                </div>

                <div>
                    <h3 className="text-2xl font-black text-slate-900 mb-4">4. Method and Legal Reason for Collecting Personal Data</h3>
                    <p>
                        Your personal data is obtained for the purpose of presenting the products and services we offer as a Company in the determined legal framework and to fulfill our Company's responsibilities arising from contracts and laws completely and accurately in any verbal, written, or electronic environment, in line with the purposes mentioned above.
                    </p>
                </div>

                <div>
                    <h3 className="text-2xl font-black text-slate-900 mb-4">5. Rights of the Personal Data Owner</h3>
                    <p className="mb-4">
                        In accordance with Article 11 of the KVKK, data owners have the right to;
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Learn whether personal data is processed,</li>
                        <li>Request information if personal data has been processed,</li>
                        <li>Learn the purpose of processing personal data and whether they are used in accordance with their purpose,</li>
                        <li>Know the third parties to whom personal data is transferred domestically or abroad,</li>
                        <li>Request correction of personal data if it is incomplete or incorrectly processed,</li>
                        <li>Request deletion or destruction of personal data within the framework of the conditions stipulated in Article 7 of the KVKK.</li>
                    </ul>
                </div>

                <div className="pt-8 border-t border-slate-200">
                    <h3 className="text-2xl font-black text-slate-900 mb-4">Contact</h3>
                    <p>
                        To exercise your rights under the KVKK, you can submit your requests in writing to <strong>Murat Reis mah Teyyareci Muammer sok No:10/4 Üsküdar/İstanbul</strong> or send them to the <strong>info@eosproje.com</strong> e-mail address.
                    </p>
                </div>
            </div>
        </div>
    );
}
