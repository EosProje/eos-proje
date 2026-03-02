import QuoteForm from "@/components/QuoteForm";
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Contact Us | Get a Point Cloud to BIM Quote",
    description: "Contact our Istanbul and Budapest offices for your laser scanning and BIM modeling projects. Get a custom quote for your industrial or architectural structure digitalization.",
    alternates: {
        canonical: 'https://eosproje.com/en/contact',
        languages: {
            "tr": "https://eosproje.com/iletisim",
            "en": "https://eosproje.com/en/contact",
        },
    },
};

export default function ContactPageEn() {
    return (
        <div className="min-h-screen bg-[var(--color-soft-bg)]">
            {/* Hero Section */}
            <div className="bg-[var(--color-deep-charcoal)] text-white py-20 px-4">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact</h1>
                    <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                        Fill out the form to get a quote for your project or to get in touch with us.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Contact Info */}
                    <div className="lg:col-span-1 space-y-8">
                        {/* Istanbul Office */}
                        <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-[var(--color-primary-red)]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <svg className="w-6 h-6 text-[var(--color-primary-red)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg mb-2 text-[var(--color-deep-charcoal)]">Istanbul Office</h3>
                                    <p className="text-sm text-slate-600 mb-2">Murat Reis mah Teyyareci Muammer sok No:10/4<br />34664 Uskudar/Istanbul, Turkey</p>
                                    <p className="text-sm text-slate-600"><strong>Tel:</strong> +90 530 664 2263</p>
                                    <p className="text-sm text-slate-600"><strong>Email:</strong> info@eosproje.com</p>
                                </div>
                            </div>
                        </div>

                        {/* Budapest Office */}
                        <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-[var(--color-primary-red)]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <svg className="w-6 h-6 text-[var(--color-primary-red)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg mb-2 text-[var(--color-deep-charcoal)]">Budapest Office (Partner)</h3>
                                    <p className="text-sm text-slate-600 mb-2">
                                        <strong>Intera Survey</strong><br />
                                        1063 Budapest, Szinyei Merse utca 21.<br />
                                        1. em. 5. ajto
                                    </p>
                                    <p className="text-sm text-slate-600"><strong>Web:</strong> <a href="http://interasurvey.com" target="_blank" className="text-blue-600 hover:underline">interasurvey.com</a></p>
                                    <p className="text-sm text-slate-600"><strong>Email:</strong> info@interasurvey.com</p>
                                </div>
                            </div>
                        </div>

                        {/* Info Box */}
                        <div className="bg-blue-50 rounded-xl border border-blue-100 p-6">
                            <h3 className="font-bold mb-2 text-[var(--color-deep-charcoal)]">Quick Response</h3>
                            <p className="text-sm text-slate-600">
                                We usually respond to your quote requests within 24 hours. For urgent projects, please contact us directly by phone.
                            </p>
                        </div>
                    </div>

                    {/* Quote Form */}
                    <div className="lg:col-span-2">
                        <QuoteForm isEn={true} />
                    </div>
                </div>
            </div>
        </div>
    );
}
