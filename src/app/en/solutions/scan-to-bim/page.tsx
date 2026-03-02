import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, Scan, Box, FileCheck, Zap, Clock, Shield, Building2, Factory, Landmark, ChevronDown } from "lucide-react";
import SubPageHero from "@/components/SubPageHero";
import { ServiceSchema } from "@/components/schema/ServiceSchema";
import { FAQPageSchema } from "@/components/schema/FAQPageSchema";
import { SITE_URL } from "@/lib/constants";
import { SampleFilesDownload } from "@/components/SampleFilesDownload";

export const metadata: Metadata = {
  title: "Scan to BIM Services | Laser Scanning to BIM Model | EOS Proje",
  description: "Scan to BIM services to convert existing structures into accurate 3D BIM models using laser scanning technology. Professional solutions at LOD 100-500 levels with millimetric precision.",
  keywords: ["scan to bim", "laser scanning bim", "3d scanning", "point cloud to bim", "existing building modeling", "as-built bim"],
  alternates: {
    canonical: `${SITE_URL}/en/solutions/scan-to-bim`,
    languages: {
      "tr": `${SITE_URL}/cozumler/scan-to-bim`,
      "en": `${SITE_URL}/en/solutions/scan-to-bim`,
    },
  },
  openGraph: {
    title: "Scan to BIM Services | EOS Proje",
    description: "Transform laser scan data into intelligent BIM models.",
    url: `${SITE_URL}/en/solutions/scan-to-bim`,
    type: "website",
    images: ["/images/EosProje-point-cloud-to-bim-modelleme.webp"],
  },
};

const faqs = [
  {
    question: "How long does the Scan to BIM process take?",
    answer: "Duration varies from 1-4 weeks depending on project size and required LOD level. Small-scale projects (500m²) can be delivered in 1 week, while large industrial facilities may take up to 4 weeks."
  },
  {
    question: "How is Scan to BIM pricing determined?",
    answer: "Pricing is based on area to be scanned (m²), required level of detail (LOD), complexity of the space, and MEP density. We provide detailed quotes after a free site visit."
  },
  {
    question: "What file formats do you deliver?",
    answer: "Our standard delivery package includes: Point Cloud (.RCP, .E57), BIM Model (.RVT, .IFC), 2D CAD drawings (.DWG), and QA/QC reports."
  },
  {
    question: "What's the difference between LOD 300 and LOD 400?",
    answer: "LOD 300 provides sufficient detail for architectural and engineering coordination, while LOD 400 includes all connection details, flanges, and hangers required for fabrication and installation."
  },
  {
    question: "Can Scan to BIM be applied to historic buildings?",
    answer: "Yes, this process called Heritage BIM (HBIM) preserves irregular geometries and deformations while creating the digital model of historic structures."
  },
  {
    question: "Does production need to stop during scanning?",
    answer: "No. Laser scanning is a contactless and fast process. In industrial facilities, scanning can be performed from a safe distance without interrupting production."
  }
];

const processSteps = [
  {
    step: 1,
    title: "Project Planning",
    description: "Scan points are determined, LOD level and delivery formats are finalized.",
    icon: <FileCheck className="w-6 h-6" />
  },
  {
    step: 2,
    title: "Site Scanning",
    description: "The entire structure is scanned with millimetric precision using LiDAR and SLAM technologies.",
    icon: <Scan className="w-6 h-6" />
  },
  {
    step: 3,
    title: "Data Processing",
    description: "Point clouds are merged, cleaned, and optimized.",
    icon: <Zap className="w-6 h-6" />
  },
  {
    step: 4,
    title: "BIM Modeling",
    description: "Parametric and intelligent BIM model is created in Revit.",
    icon: <Box className="w-6 h-6" />
  },
  {
    step: 5,
    title: "QA/QC & Delivery",
    description: "Model is validated against point cloud, deviation analysis is reported and delivered.",
    icon: <Shield className="w-6 h-6" />
  }
];

export default function ScanToBimPage() {
  return (
    <>
      <ServiceSchema
        name="Scan to BIM Services"
        description="Converting existing structures into intelligent BIM models using laser scanning technology."
        url="/en/solutions/scan-to-bim"
        image="/images/EosProje-point-cloud-to-bim-modelleme.webp"
      />
      <FAQPageSchema faqs={faqs} />
      
      <div className="min-h-screen bg-white">
        <SubPageHero
          category="Engineering Solutions"
          title="Scan to BIM"
          description="Transform your existing structures into intelligent, parametric BIM models using laser scanning technology."
          breadcrumb={[
            { label: "Solutions", href: "/en/solutions" },
            { label: "Scan to BIM", href: "/en/solutions/scan-to-bim" }
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
                <strong>Scan to BIM</strong> is the process of digitizing existing structures through 3D laser scanning and converting them into intelligent BIM models. 
                At EOS Proje, we scan with ±2mm accuracy and produce Revit models at LOD 200-500 levels. 
                We help prevent design errors in renovation, industrial facility, and heritage projects, achieving up to 30% cost savings.
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="text-red-600 font-bold text-sm uppercase tracking-wider">Digital Transformation</span>
                <h2 className="text-4xl font-bold text-slate-900 mt-4 mb-6">Convert Physical Reality to Digital Twin</h2>
                <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                  Instead of traditional survey methods that take days to complete with high error margins, 
                  <strong> Scan to BIM</strong> technology delivers millimetric precision digital models within hours.
                </p>
                <ul className="space-y-4">
                  {[
                    "±2mm accuracy 3D point cloud",
                    "BIM modeling at LOD 200-500 levels",
                    "Delivery in Revit, ArchiCAD, IFC formats",
                    "Clash Detection analysis",
                    "QA/QC report and deviation analysis"
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
                  src="/images/infographics/eosproje-scan-to-bim-sureci.png"
                  alt="Scan to BIM Process"
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 px-4 bg-slate-900">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">5-Step Scan to BIM Process</h2>
              <p className="text-slate-400 max-w-2xl mx-auto">
                We manage our projects with a transparent and auditable workflow.
              </p>
            </div>
            <div className="grid md:grid-cols-5 gap-6">
              {processSteps.map((step) => (
                <div key={step.step} className="bg-slate-800 rounded-2xl p-6 text-center relative">
                  <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center mx-auto mb-4 text-white">
                    {step.icon}
                  </div>
                  <div className="text-red-500 text-sm font-bold mb-2">Step {step.step}</div>
                  <h3 className="text-white font-bold mb-2">{step.title}</h3>
                  <p className="text-slate-400 text-sm">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Application Areas</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Scan to BIM technology provides critical advantages across different sectors.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Building2 className="w-8 h-8" />,
                  title: "Architecture & Renovation",
                  description: "Accurate condition assessment and design base creation for building renovation projects.",
                  link: "/en/sectors/renovation"
                },
                {
                  icon: <Factory className="w-8 h-8" />,
                  title: "Industrial Facilities",
                  description: "MEP system modeling for factories, power plants, and production facilities.",
                  link: "/en/sectors/industrial-facilities"
                },
                {
                  icon: <Landmark className="w-8 h-8" />,
                  title: "Heritage (HBIM)",
                  description: "Documentation for cultural heritage preservation and restoration projects.",
                  link: "/en/solutions/hbim"
                }
              ].map((item, idx) => (
                <Link href={item.link} key={idx} className="group">
                  <div className="bg-slate-50 rounded-2xl p-8 h-full hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-slate-200">
                    <div className="w-16 h-16 bg-red-100 rounded-xl flex items-center justify-center mb-6 text-red-600 group-hover:bg-red-600 group-hover:text-white transition-colors">
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                    <p className="text-slate-600 mb-4">{item.description}</p>
                    <span className="text-red-600 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                      Learn More <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-4 bg-slate-50">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
              <p className="text-slate-600">Common questions about Scan to BIM</p>
            </div>
            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <details key={idx} className="group bg-white rounded-xl border border-slate-200 overflow-hidden">
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Get a Free Site Survey</h2>
            <p className="text-slate-400 mb-8 text-lg">
              Contact us to digitize your existing structure and benefit from BIM advantages.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/en/contact" className="px-8 py-4 bg-red-600 text-white font-bold rounded-xl hover:bg-red-700 transition-colors flex items-center justify-center gap-2">
                Get a Quote <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/en/references" className="px-8 py-4 bg-white text-slate-900 font-bold rounded-xl hover:bg-slate-100 transition-colors">
                View Our Projects
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
                { label: "Point Cloud to BIM", href: "/en/solutions/point-cloud-to-bim" },
                { label: "Laser Scanning", href: "/en/solutions/laser-scanning" },
                { label: "As-Built Modeling", href: "/en/solutions/as-built-modeling" },
                { label: "Digital Twin", href: "/en/solutions/digital-twin" },
                { label: "HBIM", href: "/en/solutions/hbim" },
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
