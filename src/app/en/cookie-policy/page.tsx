import SubPageHero from "@/components/SubPageHero";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Cookie Policy | EOSPROJE",
    description: "Learn how EOS Proje uses cookies to enhance your experience on our engineering and BIM services website.",
};

export default function Page() {
    return (
        <div className="min-h-screen bg-white">
            <SubPageHero
                title="Cookie Policy"
                description="We use cookies to optimize our digital experience."
                category="Legal"
                breadcrumb={[{ label: "Cookie Policy", href: "/en/cookie-policy" }]}
            />

            <div className="max-w-4xl mx-auto px-4 py-20 text-slate-600 leading-relaxed space-y-8">
                <section>
                    <h2 className="text-2xl font-black text-slate-900 mb-4">What Are Cookies?</h2>
                    <p>
                        Cookies are small text files stored on your device when you visit our website. They help us remember your preferences and understand how you interact with our content.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-black text-slate-900 mb-4">How We Use Cookies</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-slate-50 p-6 rounded-2xl">
                            <h3 className="font-black text-slate-900 mb-2">Essential Cookies</h3>
                            <p className="text-sm">Necessary for the website to function properly, such as navigating between pages.</p>
                        </div>
                        <div className="bg-slate-50 p-6 rounded-2xl">
                            <h3 className="font-black text-slate-900 mb-2">Performance Cookies</h3>
                            <p className="text-sm">Help us analyze website traffic and user behavior to improve our services.</p>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-black text-slate-900 mb-4">Managing Your Preferences</h2>
                    <p>
                        You can control or delete cookies through your browser settings. However, disabling certain cookies may impact the functionality of our website.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-black text-slate-900 mb-4">More Information</h2>
                    <p>
                        If you have any questions about our use of cookies, please reach out to us at <strong>info@eosproje.com</strong>.
                    </p>
                </section>
            </div>
        </div>
    );
}
