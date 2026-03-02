import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, Scan, Target, Gauge, Shield, Zap, Clock, Building2, Factory, Landmark, ChevronDown, Radio } from "lucide-react";
import SubPageHero from "@/components/SubPageHero";
import { ServiceSchema } from "@/components/schema/ServiceSchema";
import { FAQPageSchema } from "@/components/schema/FAQPageSchema";
import { SITE_URL } from "@/lib/constants";
import { SampleFilesDownload } from "@/components/SampleFilesDownload";

export const metadata: Metadata = {
  title: "3D Laser Scanning Services | LiDAR Technology | EOS Proje",
  description: "3D laser scanning (LiDAR) services to digitize your structures with millimetric precision. Terrestrial and Mobile scanning solutions with ±2mm accuracy.",
  keywords: ["laser scanning", "3d scanning", "lidar", "point cloud", "terrestrial laser scanning", "mobile mapping", "3d measurement"],
  alternates: {
    canonical: `${SITE_URL}/en/solutions/laser-scanning`,
    languages: {
      "tr": `${SITE_URL}/cozumler/lazer-tarama`,
      "en": `${SITE_URL}/en/solutions/laser-scanning`,
    },
  },
  openGraph: {
    title: "3D Laser Scanning Services | EOS Proje",
    description: "Millimetric precision 3D digitization with LiDAR technology.",
    url: `${SITE_URL}/en/solutions/laser-scanning`,
    type: "website",
    images: ["/images/EosProje-Lazer-Tarama-Sistemleri.webp"],
  },
};

const faqs = [
  {
    question: "What is 3D laser scanning and how does it work?",
    answer: "Laser scanning is a contactless measurement technology that sends laser beams to surfaces, measures the return time, and collects millions of 3D coordinate points. Up to 2 million points per second can be captured."
  },
  {
    question: "Which scanning technology do you use?",
    answer: "We use Terrestrial (Static) Laser Scanning (Leica RTC360) and Mobile SLAM scanning technologies depending on project needs. We combine advantages of both technologies with a hybrid approach."
  },
  {
    question: "How accurate is laser scanning?",
    answer: "We achieve ±2mm accuracy with Terrestrial scanning and ±10-15mm with Mobile SLAM. We recommend the most suitable technology based on project requirements."
  },
  {
    question: "How long does scanning take?",
    answer: "One scan point takes approximately 2 minutes. For a 1000 m² area, typically 1-2 hours of site work is sufficient. This duration may increase for industrial facilities."
  },
  {
    question: "Can scanning be done outdoors?",
    answer: "Yes. Our laser scanners can operate between -20°C and +50°C. We have suitable equipment for facade scanning, city modeling, and terrain surveys."
  },
  {
    question: "What deliverables are provided?",
    answer: "Standard delivery includes: Merged and cleaned point cloud (.E57, .RCP), colored 360° panoramic images, and BIM model upon request."
  }
];

const technologies = [
  {
    title: "Terrestrial (TLS)",
    subtitle: "Static Laser Scanning",
    accuracy: "±2mm",
    speed: "2M points/sec",
    range: "130m",
    best: "Projects requiring high precision",
    equipment: "Leica RTC360"
  },
  {
    title: "Mobile SLAM",
    subtitle: "Mobile Mapping",
    accuracy: "±10-15mm",
    speed: "300K points/sec",
    range: "100m",
    best: "Large areas, rapid scanning",
    equipment: "NavVis VLX"
  }
];

export default function LaserScanningPage() {
  return (
    <>
      <ServiceSchema
        name="3D Laser Scanning Services"
        description="Millimetric precision 3D digitization of structures using LiDAR technology."
        url="/en/solutions/laser-scanning"
        image="/images/EosProje-Lazer-Tarama-Sistemleri.webp"
      />
      <FAQPageSchema faqs={faqs} />
      
      <div className="min-h-screen bg-white">
        <SubPageHero
          category="Engineering Solutions"
          title="3D Laser Scanning"
          description="Digitize your structures with millimetric precision using LiDAR technology. Contactless, fast, and safe 3D measurement."
          breadcrumb={[
            { label: "Solutions", href: "/en/solutions" },
            { label: "Laser Scanning", href: "/en/solutions/laser-scanning" }
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
                <strong>3D Laser Scanning</strong> is a contactless measurement technology that digitizes structures by collecting millions of points per second. 
                At EOS Proje, we use Leica RTC360 (±2mm) and Mobile SLAM technologies. It's 80% faster than traditional survey methods, 
                much more accurate and safer. Provides critical base data for renovation, industrial, and heritage projects.
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="text-red-600 font-bold text-sm uppercase tracking-wider">LiDAR Technology</span>
                <h2 className="text-4xl font-bold text-slate-900 mt-4 mb-6">Millimetric Precision 3D Digitization</h2>
                <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                  Laser scanning (LiDAR) is a contactless measurement technology that sends laser beams to structures, 
                  measures return time, and collects <strong>millions of 3D coordinate points per second</strong>.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-slate-50 p-4 rounded-xl">
                    <div className="text-2xl font-bold text-red-600">±2mm</div>
                    <div className="text-sm text-slate-600">Accuracy</div>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-xl">
                    <div className="text-2xl font-bold text-red-600">2M</div>
                    <div className="text-sm text-slate-600">Points/second</div>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-xl">
                    <div className="text-2xl font-bold text-red-600">130m</div>
                    <div className="text-sm text-slate-600">Range</div>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-xl">
                    <div className="text-2xl font-bold text-red-600">360°</div>
                    <div className="text-sm text-slate-600">HDR Imaging</div>
                  </div>
                </div>
                <ul className="space-y-3">
                  {[
                    "Contactless and safe measurement",
                    "80% faster than traditional methods",
                    "Capture of all details",
                    "HDR 360° panoramic images"
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
                  src="/images/infographics/eosproje-lazer-tarama-teknolojileri.png"
                  alt="Laser Scanning Technologies"
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Technology Comparison */}
        <section className="py-20 px-4 bg-slate-900">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Scanning Technologies</h2>
              <p className="text-slate-400 max-w-2xl mx-auto">
                We select the most suitable technology for your project, offering hybrid solutions when needed.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {technologies.map((tech, idx) => (
                <div key={idx} className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center">
                      {idx === 0 ? <Target className="w-6 h-6 text-white" /> : <Radio className="w-6 h-6 text-white" />}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{tech.title}</h3>
                      <p className="text-slate-400 text-sm">{tech.subtitle}</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <div className="text-red-500 text-sm font-medium">Accuracy</div>
                      <div className="text-white font-bold">{tech.accuracy}</div>
                    </div>
                    <div>
                      <div className="text-red-500 text-sm font-medium">Speed</div>
                      <div className="text-white font-bold">{tech.speed}</div>
                    </div>
                    <div>
                      <div className="text-red-500 text-sm font-medium">Range</div>
                      <div className="text-white font-bold">{tech.range}</div>
                    </div>
                    <div>
                      <div className="text-red-500 text-sm font-medium">Equipment</div>
                      <div className="text-white font-bold">{tech.equipment}</div>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-slate-700">
                    <div className="text-slate-400 text-sm">Best use:</div>
                    <div className="text-white">{tech.best}</div>
                  </div>
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
                3D laser scanning provides critical advantages across different sectors.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Building2 className="w-8 h-8" />,
                  title: "Architectural Survey",
                  description: "Precise measurement of existing buildings, facade analysis, and base creation for renovation projects.",
                  features: ["Wall deformations", "Floor deflections", "Facade details"]
                },
                {
                  icon: <Factory className="w-8 h-8" />,
                  title: "Industrial Facilities",
                  description: "Complete digitization of factories, power plants, and production lines.",
                  features: ["Pipe routes", "Equipment layout", "MEP systems"]
                },
                {
                  icon: <Landmark className="w-8 h-8" />,
                  title: "Cultural Heritage",
                  description: "Documentation for historic building preservation, restoration, and archiving projects.",
                  features: ["Deformation analysis", "Stone-by-stone survey", "3D archiving"]
                }
              ].map((item, idx) => (
                <div key={idx} className="bg-slate-50 rounded-2xl p-8 h-full">
                  <div className="w-16 h-16 bg-red-100 rounded-xl flex items-center justify-center mb-6 text-red-600">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                  <p className="text-slate-600 mb-4">{item.description}</p>
                  <ul className="space-y-2">
                    {item.features.map((f, i) => (
                      <li key={i} className="text-sm text-slate-500 flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-red-600 rounded-full"></div>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-4 bg-slate-50">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
              <p className="text-slate-600">Common questions about laser scanning</p>
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
              Contact us to digitize your structure with millimetric precision.
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
                { label: "Scan to BIM", href: "/en/solutions/scan-to-bim" },
                { label: "Point Cloud to BIM", href: "/en/solutions/point-cloud-to-bim" },
                { label: "Digital Twin", href: "/en/solutions/digital-twin" },
                { label: "HBIM", href: "/en/solutions/hbim" },
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
