import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, AlertTriangle, Search, FileWarning, Shield, TrendingDown, Clock, ChevronDown, Target, Layers } from "lucide-react";
import SubPageHero from "@/components/SubPageHero";
import { ServiceSchema } from "@/components/schema/ServiceSchema";
import { FAQPageSchema } from "@/components/schema/FAQPageSchema";
import { SITE_URL } from "@/lib/constants";
import { SampleFilesDownload } from "@/components/SampleFilesDownload";

export const metadata: Metadata = {
  title: "Clash Detection Services | BIM Coordination | EOS Proje",
  description: "BIM Clash Detection services to identify interdisciplinary clashes during design phase. Up to 30% cost savings with Navisworks. Hard, Soft, and Workflow clash analysis.",
  keywords: ["clash detection", "bim coordination", "navisworks", "mep clash", "bim clash analysis", "design coordination"],
  alternates: {
    canonical: `${SITE_URL}/en/solutions/clash-detection`,
    languages: {
      "tr": `${SITE_URL}/cozumler/cakisma-tespiti`,
      "en": `${SITE_URL}/en/solutions/clash-detection`,
    },
  },
  openGraph: {
    title: "Clash Detection Services | EOS Proje",
    description: "Detect design clashes during design phase with BIM and save costs.",
    url: `${SITE_URL}/en/solutions/clash-detection`,
    type: "website",
    images: ["/images/EosProje-point-cloud-to-bim-modelleme.webp"],
  },
};

const faqs = [
  {
    question: "What is Clash Detection?",
    answer: "Clash Detection is the identification of physical and logical clashes between elements of different disciplines (architectural, structural, MEP) in BIM models. This process enables problems to be resolved during the design phase instead of on site."
  },
  {
    question: "What types of clashes are detected?",
    answer: "Three types of clashes are detected: Hard Clash (physical intersection), Soft Clash (clearance/distance violation), and Workflow Clash (logical sequencing error)."
  },
  {
    question: "How much savings can Clash Detection achieve?",
    answer: "According to research, Clash Detection can reduce site revisions by 30-50%, project duration by 10-15%, and overall costs by 5-10%."
  },
  {
    question: "Which software do you use?",
    answer: "Our main software is Autodesk Navisworks. We also use issue tracking platforms like BIM Track, Solibri, and BIMcollab."
  },
  {
    question: "How are clash reports delivered?",
    answer: "We provide detailed HTML/PDF reports, BCF format issue files, and live coordination through platforms like BIM Track. Reports include priority ranking and resolution suggestions."
  },
  {
    question: "Do you only work with Revit models?",
    answer: "No. Thanks to IFC format, we can coordinate models from different software like ArchiCAD, Tekla, and Allplan."
  }
];

const clashTypes = [
  {
    type: "Hard Clash",
    title: "Physical Clash",
    description: "Two elements occupying the same physical space",
    example: "Pipe running through a beam",
    color: "bg-red-100 text-red-700 border-red-200"
  },
  {
    type: "Soft Clash",
    title: "Clearance Violation",
    description: "Required service distances not maintained",
    example: "Insufficient space for maintenance",
    color: "bg-yellow-100 text-yellow-700 border-yellow-200"
  },
  {
    type: "Workflow Clash",
    title: "Logical Clash",
    description: "Sequencing and coordination errors",
    example: "MEP not checked before drywall",
    color: "bg-blue-100 text-blue-700 border-blue-200"
  }
];

const benefits = [
  {
    icon: <TrendingDown className="w-6 h-6" />,
    title: "30-50% Revision Reduction",
    description: "Dramatic decrease in site changes"
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "10-15% Time Savings",
    description: "Significant reduction in project delivery time"
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "5-10% Cost Savings",
    description: "Reduction in overall project costs"
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: "Zero Surprises",
    description: "Prevention of unexpected site problems"
  }
];

export default function ClashDetectionPage() {
  return (
    <>
      <ServiceSchema
        name="Clash Detection Services"
        description="Detection of interdisciplinary clashes in BIM models using Navisworks and coordination services."
        url="/en/solutions/clash-detection"
        image="/images/EosProje-point-cloud-to-bim-modelleme.webp"
      />
      <FAQPageSchema faqs={faqs} />
      
      <div className="min-h-screen bg-white">
        <SubPageHero
          category="Engineering Solutions"
          title="Clash Detection"
          description="Identify interdisciplinary clashes during design phase with BIM Clash Detection. Prevent site revisions and reduce costs."
          breadcrumb={[
            { label: "Solutions", href: "/en/solutions" },
            { label: "Clash Detection", href: "/en/solutions/clash-detection" }
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
                <strong>Clash Detection</strong> identifies clashes between different disciplines in BIM models during design phase. 
                At EOS Proje, we analyze Hard, Soft, and Workflow clashes with Navisworks. 
                We achieve 30-50% reduction in site revisions and 10-15% reduction in project duration. 
                We provide reports in BCF format and offer live coordination platforms.
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="text-red-600 font-bold text-sm uppercase tracking-wider">BIM Coordination</span>
                <h2 className="text-4xl font-bold text-slate-900 mt-4 mb-6">Solve Site Surprises in the Office</h2>
                <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                  Clashes undetected in traditional 2D coordination cause costly revisions on site. 
                  With <strong>BIM Clash Detection</strong>, solve these problems during design phase to save time and budget.
                </p>
                <div className="bg-slate-50 p-6 rounded-xl mb-6">
                  <div className="text-sm text-slate-500 mb-2">Research Data</div>
                  <div className="text-2xl font-bold text-slate-900">"A problem solved on site costs <span className="text-red-600">10 times</span> more than one solved in design."</div>
                  <div className="text-sm text-slate-500 mt-2">— McGraw Hill Construction</div>
                </div>
                <ul className="space-y-3">
                  {[
                    "Hard, Soft, and Workflow clash analysis",
                    "Priority-ranked reporting",
                    "Issue tracking in BCF format",
                    "Live coordination platforms"
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
                  src="/images/infographics/eosproje-clash-detection-analizi.png"
                  alt="Clash Detection Analysis"
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Clash Types */}
        <section className="py-20 px-4 bg-slate-900">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Clash Types</h2>
              <p className="text-slate-400 max-w-2xl mx-auto">
                We detect and report three different types of clashes.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {clashTypes.map((clash, idx) => (
                <div key={idx} className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
                  <div className={`inline-block px-4 py-2 rounded-lg text-sm font-bold mb-4 ${clash.color}`}>
                    {clash.type}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{clash.title}</h3>
                  <p className="text-slate-400 mb-4">{clash.description}</p>
                  <div className="pt-4 border-t border-slate-700">
                    <div className="text-xs text-slate-500 mb-1">Example:</div>
                    <div className="text-sm text-slate-300">{clash.example}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Savings and Benefits</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Tangible gains achieved with Clash Detection
              </p>
            </div>
            <div className="grid md:grid-cols-4 gap-6">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="bg-slate-50 rounded-2xl p-6 text-center">
                  <div className="w-14 h-14 bg-red-100 rounded-xl flex items-center justify-center mx-auto mb-4 text-red-600">
                    {benefit.icon}
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">{benefit.title}</h3>
                  <p className="text-slate-600 text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-20 px-4 bg-slate-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Clash Detection Process</h2>
            </div>
            <div className="grid md:grid-cols-5 gap-4">
              {[
                { step: 1, title: "Model Collection", desc: "Combining all discipline models" },
                { step: 2, title: "Rule Definition", desc: "Setting clash tests and tolerances" },
                { step: 3, title: "Automated Analysis", desc: "Clash detection with Navisworks" },
                { step: 4, title: "Filtering", desc: "Prioritizing critical clashes" },
                { step: 5, title: "Reporting", desc: "Delivery in BCF and PDF format" }
              ].map((item) => (
                <div key={item.step} className="bg-white rounded-2xl p-6 text-center shadow-sm">
                  <div className="w-10 h-10 bg-red-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                    {item.step}
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-slate-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tools */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Tools We Use</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-slate-50 rounded-xl p-6">
                <h3 className="font-bold text-slate-900 mb-4">Clash Detection</h3>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-center gap-2"><Search className="w-4 h-4 text-red-600" /> Autodesk Navisworks</li>
                  <li className="flex items-center gap-2"><Search className="w-4 h-4 text-red-600" /> Solibri Model Checker</li>
                </ul>
              </div>
              <div className="bg-slate-50 rounded-xl p-6">
                <h3 className="font-bold text-slate-900 mb-4">Issue Tracking</h3>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-center gap-2"><FileWarning className="w-4 h-4 text-red-600" /> BIM Track</li>
                  <li className="flex items-center gap-2"><FileWarning className="w-4 h-4 text-red-600" /> BIMcollab</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-4 bg-slate-50">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
              <p className="text-slate-600">Common questions about Clash Detection</p>
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Let Us Coordinate Your Project</h2>
            <p className="text-slate-400 mb-8 text-lg">
              Let us perform clash analysis on your BIM models and prevent site surprises.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/en/contact" className="px-8 py-4 bg-red-600 text-white font-bold rounded-xl hover:bg-red-700 transition-colors flex items-center justify-center gap-2">
                Request Analysis <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/en/blog/clash-detection-cost-savings" className="px-8 py-4 bg-white text-slate-900 font-bold rounded-xl hover:bg-slate-100 transition-colors">
                Read Blog Post
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
                { label: "BIM Modeling", href: "/en/solutions/bim-modeling" },
                { label: "Scan to BIM", href: "/en/solutions/scan-to-bim" },
                { label: "Point Cloud to BIM", href: "/en/solutions/point-cloud-to-bim" },
                { label: "2D to 3D Conversion", href: "/en/solutions/2d-to-3d-bim-conversion" },
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
