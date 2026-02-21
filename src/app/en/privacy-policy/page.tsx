import SubPageHero from "@/components/SubPageHero";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy Policy | EOSPROJE",
    description: "EOS Proje's commitment to protecting your privacy and personal data while using our digital twins and BIM services.",
};

export default function Page() {
    return (
        <div className="min-h-screen bg-white">
            <SubPageHero
                title="Privacy Policy"
                description="We process your digital assets and data with the highest security standards."
                category="Legal"
                breadcrumb={[{ label: "Privacy Policy", href: "/en/privacy-policy" }]}
            />

            <div className="max-w-4xl mx-auto px-4 py-20 text-slate-600 leading-relaxed space-y-8 text-lg">
                <section>
                    <h2 className="text-2xl font-black text-slate-900 mb-4">Our Commitment to Privacy</h2>
                    <p>
                        At <strong>EOS Proje</strong>, we value the trust you place in us when you share your project data and personal information. This Privacy Policy outlines how we collect, use, and safeguard your information within the scope of our architectural and engineering services.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-black text-slate-900 mb-4">Data Collection and Use</h2>
                    <p className="mb-4">
                        We collect information necessary to provide our <strong>Point Cloud to BIM</strong> and <strong>As-Built Modeling</strong> services effectively:
                    </p>
                    <ul className="list-disc pl-5 space-y-3">
                        <li><strong>Project Data:</strong> Architectural plans, CAD files, and site measurements.</li>
                        <li><strong>Contact Information:</strong> Name, professional email, and phone number for project coordination.</li>
                        <li><strong>Technical Data:</strong> IP addresses and browser information when visiting our website to improve user experience.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-black text-slate-900 mb-4">Security of Your Data</h2>
                    <p>
                        We implement strict organizational and technical measures to protect your data from unauthorized access, loss, or alteration. Our digital twin databases are stored on secure servers with restricted access protocols.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-black text-slate-900 mb-4">Third-Party Sharing</h2>
                    <p>
                        EOS Proje does not sell your personal or project data to third parties. Data is only shared with trusted partners essential for project fulfillment (e.g., specialized software providers) under strict confidentiality agreements.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-black text-slate-900 mb-4">Updates to This Policy</h2>
                    <p>
                        We may update this policy periodically to reflect changes in our services or legal requirements. We encourage you to review this page regularly for any updates.
                    </p>
                </section>

                <div className="pt-10 border-t border-slate-100">
                    <p className="font-bold text-slate-900">Last Updated: January 2026</p>
                    <p>For any questions regarding your privacy, please contact us at <strong>info@eosproje.com</strong>.</p>
                </div>
            </div>
        </div>
    );
}
