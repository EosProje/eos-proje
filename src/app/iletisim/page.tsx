import QuoteForm from "@/components/QuoteForm";
import { Metadata } from "next";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "İletişim - Lazer Tarama ve BIM Teklif Alın | Eos Proje",
  description: "Point Cloud to BIM projeleriniz için teklif alın. İstanbul ve Budapeşte ofislerimizle iletişime geçin.",
};

export default function Page() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "EOS Proje",
    "image": "https://www.eosproje.com/images/logo.png",
    "telephone": "+90 530 664 2263",
    "email": "info@eosproje.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Murat Reis mah Teyyareci Muammer sok No:10/4",
      "addressLocality": "Üsküdar",
      "addressRegion": "İstanbul",
      "postalCode": "34664",
      "addressCountry": "TR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 41.0256, // Approximate, update with real coordinates if known
      "longitude": 29.0426
    },
    "url": "https://www.eosproje.com/iletisim",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    }
  };

  return (
    <div className="min-h-screen bg-[var(--color-soft-bg)]">
      <JsonLd data={localBusinessSchema} />
      {/* Hero Section */}
      <div className="bg-[var(--color-deep-charcoal)] text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">İletişim</h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Projeniz için teklif almak veya bizimle iletişime geçmek için formu doldurun.
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
                  <h3 className="font-bold text-lg mb-2 text-[var(--color-deep-charcoal)]">İstanbul Ofis</h3>
                  <p className="text-sm text-slate-600 mb-2">Murat Reis mah Teyyareci Muammer sok No:10/4<br />34664 Üsküdar/İstanbul, Türkiye</p>
                  <p className="text-sm text-slate-600"><strong>Tel:</strong> +90 530 664 2263</p>
                  <p className="text-sm text-slate-600"><strong>Email:</strong> info@eosproje.com</p>
                </div>
              </div>
            </div>

            {/* Iskenderun Office */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[var(--color-primary-red)]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-[var(--color-primary-red)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2 text-[var(--color-deep-charcoal)]">İskenderun Ofis</h3>
                  <p className="text-sm text-slate-600 mb-2">Piri Reis, Barbaros Cd. No:20<br />31200 İskenderun/Hatay</p>
                  <p className="text-sm text-slate-600"><strong>Tel:</strong> +90 530 664 2263</p>
                  <p className="text-sm text-slate-600"><strong>Email:</strong> ugur@eosproje.com</p>
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
                  <h3 className="font-bold text-lg mb-2 text-[var(--color-deep-charcoal)]">Budapest Ofis (Partner)</h3>
                  <p className="text-sm text-slate-600 mb-2">
                    <strong>Intera Survey</strong><br />
                    1063 Budapest, Szinyei Merse utca 21.<br />
                    1. em. 5. ajtó
                  </p>
                  <p className="text-sm text-slate-600"><strong>Tel:</strong> +36 70 244 9628</p>
                  <p className="text-sm text-slate-600"><strong>Web:</strong> <a href="http://interasurvey.com" target="_blank" className="text-blue-600 hover:underline">interasurvey.com</a></p>
                  <p className="text-sm text-slate-600"><strong>Email:</strong> info@interasurvey.com</p>
                </div>
              </div>
            </div>

            {/* Info Box */}
            <div className="bg-blue-50 rounded-xl border border-blue-100 p-6">
              <h3 className="font-bold mb-2 text-[var(--color-deep-charcoal)]">Hızlı Yanıt</h3>
              <p className="text-sm text-slate-600">
                Teklif taleplerinize genellikle 24 saat içinde dönüş yapıyoruz. Acil projeler için lütfen doğrudan telefon ile iletişime geçin.
              </p>
            </div>
          </div>

          {/* Quote Form */}
          <div className="lg:col-span-2">
            <QuoteForm />
          </div>
        </div>
      </div>
    </div>
  );
}