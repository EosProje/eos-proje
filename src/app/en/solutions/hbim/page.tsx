import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, Landmark, Camera, FileSearch, Shield, History, BookOpen, ChevronDown, Ruler } from "lucide-react";
import SubPageHero from "@/components/SubPageHero";
import { ServiceSchema } from "@/components/schema/ServiceSchema";
import { FAQPageSchema } from "@/components/schema/FAQPageSchema";
import { SITE_URL } from "@/lib/constants";
import { SampleFilesDownload } from "@/components/SampleFilesDownload";

export const metadata: Metadata = {
  title: "HBIM - Heritage Building Information Modeling | EOS Proje",
  description: "HBIM (Heritage BIM) services for digital documentation of historic buildings using laser scanning and photogrammetry. Conservation-focused BIM solutions for restoration projects.",
  keywords: ["hbim", "heritage bim", "historic building modeling", "restoration bim", "conservation documentation", "heritage laser scanning"],
  alternates: {
    canonical: `${SITE_URL}/en/solutions/hbim`,
    languages: {
      "tr": `${SITE_URL}/cozumler/hbim`,
      "en": `${SITE_URL}/en/solutions/hbim`,
    },
  },
  openGraph: {
    title: "HBIM - Heritage Building Information Modeling | EOS Proje",
    description: "Digital preservation and documentation of historic buildings.",
    url: `${SITE_URL}/en/solutions/hbim`,
    type: "website",
    images: ["/images/EosProje-point-cloud-to-bim-modelleme.webp"],
  },
};

const faqs = [
  {
    question: "What is HBIM?",
    answer: "HBIM (Historic Building Information Modeling) is the digitization of historic buildings using laser scanning and photogrammetry, creating intelligent BIM models containing conservation information. Unlike standard BIM, it preserves irregular geometries and deterioration information."
  },
  {
    question: "Why HBIM instead of traditional survey?",
    answer: "HBIM offers much more accurate (±2mm), faster, and comprehensive data than traditional survey methods. Deformations, cracks, and material deterioration are documented and analyzable in digital form."
  },
  {
    question: "Which historic buildings can HBIM be applied to?",
    answer: "HBIM can be applied to any cultural heritage structure including mosques, churches, palaces, mansions, caravanserais, baths, civil architecture examples, and archaeological sites."
  },
  {
    question: "How does the HBIM process work?",
    answer: "The process: 1) Data collection with laser scanning and photogrammetry, 2) Point cloud processing, 3) Parametric modeling (including irregular geometries), 4) Adding material and deterioration information, 5) Creating conservation report."
  },
  {
    question: "What is stone-by-stone survey?",
    answer: "Stone-by-stone survey is the documentation of each individual stone in historic walls. It can be automatically detected with laser scanning or manually marked. Critical for planning restoration interventions."
  },
  {
    question: "Can HBIM be used for Conservation Board projects?",
    answer: "Yes. HBIM outputs are accepted in Conservation Board applications. Additionally, 2D sections, elevations, and detail drawings can be produced from the models."
  }
];

const services = [
  {
    icon: <Camera className="w-6 h-6" />,
    title: "3D Laser Scanning",
    description: "Contactless digitization of historic buildings with millimetric precision."
  },
  {
    icon: <Ruler className="w-6 h-6" />,
    title: "Survey Outputs",
    description: "Production of plans, sections, elevations, and detail drawings."
  },
  {
    icon: <FileSearch className="w-6 h-6" />,
    title: "Damage Analysis",
    description: "Crack mapping, deformation and deterioration detection."
  },
  {
    icon: <Landmark className="w-6 h-6" />,
    title: "HBIM Modeling",
    description: "Parametric models preserving irregular geometries."
  },
  {
    icon: <BookOpen className="w-6 h-6" />,
    title: "Digital Archiving",
    description: "Passing cultural heritage to future generations."
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Restoration Support",
    description: "Intervention planning and material analysis."
  }
];

export default function HbimPage() {
  return (
    <>
      <ServiceSchema
        name="HBIM - Heritage Building Information Modeling"
        description="Digital documentation of historic buildings using laser scanning and photogrammetry, with Heritage BIM solutions."
        url="/en/solutions/hbim"
        image="/images/EosProje-point-cloud-to-bim-modelleme.webp"
      />
      <FAQPageSchema faqs={faqs} />
      
      <div className="min-h-screen bg-white">
        <SubPageHero
          category="Engineering Solutions"
          title="HBIM - Heritage BIM"
          description="Digital documentation of historic buildings using laser scanning and photogrammetry. Specialized solutions for cultural heritage preservation."
          breadcrumb={[
            { label: "Solutions", href: "/en/solutions" },
            { label: "HBIM", href: "/en/solutions/hbim" }
          ]}
        />

        {/* TL;DR Section */}
        <section className="py-12 px-4 bg-slate-50 border-b border-slate-200">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
              <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                <span className="text-red-600">TL;DR</span> — Summary
              </h2>
              <p className="text-slate-600 leading-relaxed">
                <strong>HBIM (Heritage BIM)</strong> is a specialized BIM approach for digital preservation and documentation of historic buildings. 
                At EOS Proje, we collect data with laser scanning at ±2mm precision, create models preserving irregular geometries, 
                and perform damage analysis. We serve from Conservation Board projects to virtual museum applications.
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="text-red-600 font-bold text-sm uppercase tracking-wider">Cultural Heritage</span>
                <h2 className="text-4xl font-bold text-slate-900 mt-4 mb-6">Digital Guardian of Historic Buildings</h2>
                <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                  Unlike standard BIM, HBIM transfers the actual condition of historic buildings to digital environment by preserving 
                  <strong> irregular geometries, deformations, and deterioration information</strong>.
                </p>
                <p className="text-slate-600 mb-6">
                  Unlike traditional survey methods, laser scanning captures every detail with millimetric precision, 
                  creating a critical base for the restoration process.
                </p>
                <ul className="space-y-3">
                  {[
                    "±2mm precision 3D laser scanning",
                    "Preservation of irregular geometries",
                    "Damage and deterioration analysis",
                    "Stone-by-stone survey documentation",
                    "Conservation Board compatible outputs"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative">
                <Image
                  src="/images/infographics/eosproje-hbim-tarihi-yapi-sureci.png"
                  alt="HBIM Historic Building Process"
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-4 bg-slate-900">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our HBIM Services</h2>
              <p className="text-slate-400 max-w-2xl mx-auto">
                We offer comprehensive solutions specialized for historic buildings.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {services.map((service, idx) => (
                <div key={idx} className="bg-slate-800 rounded-2xl p-6 border border-slate-700">
                  <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center mb-4 text-white">
                    {service.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-slate-400 text-sm">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">HBIM Process</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Our specialized process for digitizing historic buildings
              </p>
            </div>
            <div className="grid md:grid-cols-5 gap-4">
              {[
                { step: 1, title: "Initial Survey", desc: "Building condition and needs assessment" },
                { step: 2, title: "Data Collection", desc: "Laser scanning and photogrammetry" },
                { step: 3, title: "Data Processing", desc: "Point cloud merging and cleaning" },
                { step: 4, title: "HBIM Modeling", desc: "Creating irregular geometry models" },
                { step: 5, title: "Reporting", desc: "Damage analysis and survey outputs" }
              ].map((item) => (
                <div key={item.step} className="text-center">
                  <div className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                    {item.step}
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-slate-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-20 px-4 bg-slate-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Application Areas</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Mosques & Churches", desc: "Religious building preservation projects" },
                { title: "Palaces & Mansions", desc: "Civil architecture examples" },
                { title: "Caravanserais & Baths", desc: "Commercial historic buildings" },
                { title: "Archaeological Sites", desc: "Excavation and conservation work" }
              ].map((item, idx) => (
                <div key={idx} className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
                  <History className="w-8 h-8 text-red-600 mb-4" />
                  <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-slate-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
              <p className="text-slate-600">Common questions about HBIM</p>
            </div>
            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <details key={idx} className="group bg-slate-50 rounded-xl border border-slate-200 overflow-hidden">
                  <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                    <span className="font-semibold text-slate-900 pr-4">{faq.question}</span>
                    <ChevronDown className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" />
                  </summary>
                  <div className="px-6 pb-6 text-slate-600">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Sample Files Download */}
        <SampleFilesDownload isEn />

        {/* CTA Section */}
        <section className="py-20 px-4 bg-slate-900">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Digitize Your Historic Building</h2>
            <p className="text-slate-400 mb-8 text-lg">
              Let's work together to preserve our cultural heritage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/en/contact" className="px-8 py-4 bg-red-600 text-white font-bold rounded-xl hover:bg-red-700 transition-colors flex items-center justify-center gap-2">
                Project Discussion <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/en/sectors/restoration" className="px-8 py-4 bg-white text-slate-900 font-bold rounded-xl hover:bg-slate-100 transition-colors">
                Restoration Solutions
              </Link>
            </div>
          </div>
        </section>

        {/* Related Solutions */}
        <section className="py-16 px-4 bg-white border-t border-slate-100">
          <div className="max-w-7xl mx-auto">
            <h3 className="text-xl font-bold text-slate-900 mb-6">Related Solutions</h3>
            <div className="flex flex-wrap gap-3">
              {[
                { label: "Laser Scanning", href: "/en/solutions/laser-scanning" },
                { label: "Scan to BIM", href: "/en/solutions/scan-to-bim" },
                { label: "Point Cloud to BIM", href: "/en/solutions/point-cloud-to-bim" },
                { label: "Scan to CAD", href: "/en/solutions/scan-to-cad" },
              ].map((item, idx) => (
                <Link key={idx} href={item.href} className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg hover:bg-red-50 hover:text-red-600 transition-colors text-sm font-medium">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
