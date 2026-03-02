import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, Cpu, Layers, Activity, Shield, Zap, Database, Building2, Factory, Settings, ChevronDown, Network } from "lucide-react";
import SubPageHero from "@/components/SubPageHero";
import { ServiceSchema } from "@/components/schema/ServiceSchema";
import { FAQPageSchema } from "@/components/schema/FAQPageSchema";
import { SITE_URL } from "@/lib/constants";
import { SampleFilesDownload } from "@/components/SampleFilesDownload";

export const metadata: Metadata = {
  title: "Digital Twin Solutions | IoT Integration | EOS Proje",
  description: "Digital Twin solutions to create live digital copies of your buildings and facilities. IoT integration, real-time monitoring, and simulation capabilities.",
  keywords: ["digital twin", "iot integration", "smart building", "facility management", "real-time monitoring", "bim iot"],
  alternates: {
    canonical: `${SITE_URL}/en/solutions/digital-twin`,
    languages: {
      "tr": `${SITE_URL}/cozumler/dijital-ikiz`,
      "en": `${SITE_URL}/en/solutions/digital-twin`,
    },
  },
  openGraph: {
    title: "Digital Twin Solutions | EOS Proje",
    description: "Create live digital copies of your structures.",
    url: `${SITE_URL}/en/solutions/digital-twin`,
    type: "website",
    images: ["/images/EosProje-point-cloud-to-bim-modelleme.webp"],
  },
};

const faqs = [
  {
    question: "What is a Digital Twin?",
    answer: "A Digital Twin is a virtual copy of a physical asset or system supported by real-time data. It's formed by combining BIM models with IoT sensors and reflects the live status of the building."
  },
  {
    question: "What's the difference between Digital Twin and BIM model?",
    answer: "A BIM model is a static 3D model, while a Digital Twin is a dynamic system fed by live sensor data. Digital Twin enables real-time monitoring, simulation, and predictive maintenance."
  },
  {
    question: "Which sectors use Digital Twin?",
    answer: "It's widely used in industrial facilities, smart buildings, power plants, airports, hospitals, and city infrastructure."
  },
  {
    question: "What's needed to create a Digital Twin?",
    answer: "Essentially, an As-Built BIM model from 3D scanning, IoT sensors (temperature, pressure, vibration, etc.), and a platform to integrate them. At EOS Proje, we manage the entire process."
  },
  {
    question: "How is Digital Twin ROI calculated?",
    answer: "Digital Twin can reduce downtime by 30-50%, increase energy efficiency by 10-20%, and cut maintenance costs by 25-40%. ROI is typically seen within 1-2 years."
  },
  {
    question: "Can it integrate with our existing systems?",
    answer: "Yes. Digital Twin platforms can integrate with existing systems like SCADA, BMS, CMMS via APIs. At EOS Proje, we provide support throughout the integration process."
  }
];

const benefits = [
  {
    icon: <Activity className="w-6 h-6" />,
    title: "Real-Time Monitoring",
    description: "Track your building's status 24/7 live."
  },
  {
    icon: <Settings className="w-6 h-6" />,
    title: "Predictive Maintenance",
    description: "Detect and prevent failures before they occur."
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Energy Optimization",
    description: "Analyze and optimize energy consumption."
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Risk Simulation",
    description: "Simulate scenarios like fire and earthquake."
  },
  {
    icon: <Database className="w-6 h-6" />,
    title: "Data Integration",
    description: "Consolidate all building data on a single platform."
  },
  {
    icon: <Network className="w-6 h-6" />,
    title: "IoT Integration",
    description: "Connect sensor data to BIM model."
  }
];

export default function DigitalTwinPage() {
  return (
    <>
      <ServiceSchema
        name="Digital Twin Solutions"
        description="Creating live digital copies of buildings and facilities with IoT integration."
        url="/en/solutions/digital-twin"
        image="/images/EosProje-point-cloud-to-bim-modelleme.webp"
      />
      <FAQPageSchema faqs={faqs} />
      
      <div className="min-h-screen bg-white">
        <SubPageHero
          category="Engineering Solutions"
          title="Digital Twin"
          description="Create live digital copies of your buildings and facilities with IoT integration. Real-time monitoring and intelligent management."
          breadcrumb={[
            { label: "Solutions", href: "/en/solutions" },
            { label: "Digital Twin", href: "/en/solutions/digital-twin" }
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
                <strong>Digital Twin</strong> is a live digital copy of physical structures integrated with IoT sensors and BIM models. 
                At EOS Proje, we create As-Built models with laser scanning, perform sensor integration, and set up real-time monitoring platforms. 
                Achieves 30-50% reduction in downtime and 10-20% energy cost savings.
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="text-red-600 font-bold text-sm uppercase tracking-wider">Smart Buildings</span>
                <h2 className="text-4xl font-bold text-slate-900 mt-4 mb-6">Live Digital Copy of Your Structures</h2>
                <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                  Digital Twin is a virtual copy of your physical assets fed by real-time data. 
                  It consists of the combination of <strong>BIM model + IoT sensors + Analytics platform</strong>.
                </p>
                <p className="text-slate-600 mb-6">
                  While traditional BIM models remain static, Digital Twin reflects the instant status of your building, 
                  makes predictions, and works as a decision support system.
                </p>
                <div className="grid grid-cols-3 gap-4 p-6 bg-slate-50 rounded-xl">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-red-600">30-50%</div>
                    <div className="text-xs text-slate-500">Downtime Reduction</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-red-600">10-20%</div>
                    <div className="text-xs text-slate-500">Energy Savings</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-red-600">25-40%</div>
                    <div className="text-xs text-slate-500">Maintenance Cost Reduction</div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <Image
                  src="/images/infographics/eosproje-dijital-ikiz-mimari.png"
                  alt="Digital Twin Architecture"
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Grid */}
        <section className="py-20 px-4 bg-slate-900">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Digital Twin Benefits</h2>
              <p className="text-slate-400 max-w-2xl mx-auto">
                Next-generation solutions for building and facility management
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="bg-slate-800 rounded-2xl p-6 border border-slate-700">
                  <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center mb-4 text-white">
                    {benefit.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{benefit.title}</h3>
                  <p className="text-slate-400 text-sm">{benefit.description}</p>
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
                Digital Twin technology creates value across different sectors.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Factory className="w-8 h-8" />,
                  title: "Industrial Facilities",
                  description: "Real-time monitoring and predictive maintenance for production lines, power plants, and refineries.",
                  link: "/en/sectors/industrial-facilities"
                },
                {
                  icon: <Building2 className="w-8 h-8" />,
                  title: "Smart Buildings",
                  description: "Energy management and comfort optimization for office buildings, malls, and hospitals.",
                  link: "/en/sectors/architecture"
                },
                {
                  icon: <Cpu className="w-8 h-8" />,
                  title: "Facility Management (FM)",
                  description: "Central platform for asset tracking, maintenance planning, and space management.",
                  link: "/en/blog/bim-facility-management"
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

        {/* Process */}
        <section className="py-20 px-4 bg-slate-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Digital Twin Creation Process</h2>
            </div>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { step: 1, title: "Data Collection", desc: "As-Built data collection with laser scanning" },
                { step: 2, title: "BIM Modeling", desc: "Intelligent model at LOD 300-400 level" },
                { step: 3, title: "IoT Integration", desc: "Sensor connections and data flow" },
                { step: 4, title: "Platform Setup", desc: "Visualization and analytics dashboard" }
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

        {/* FAQ Section */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
              <p className="text-slate-600">Common questions about Digital Twin</p>
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Start Your Digital Twin Project</h2>
            <p className="text-slate-400 mb-8 text-lg">
              Contact us to make your structures smart and connected.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/en/contact" className="px-8 py-4 bg-red-600 text-white font-bold rounded-xl hover:bg-red-700 transition-colors flex items-center justify-center gap-2">
                Get Consultation <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/en/blog/industrial-digital-twin" className="px-8 py-4 bg-white text-slate-900 font-bold rounded-xl hover:bg-slate-100 transition-colors">
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
                { label: "Scan to BIM", href: "/en/solutions/scan-to-bim" },
                { label: "BIM Modeling", href: "/en/solutions/bim-modeling" },
                { label: "Laser Scanning", href: "/en/solutions/laser-scanning" },
                { label: "As-Built Modeling", href: "/en/solutions/as-built-modeling" },
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
