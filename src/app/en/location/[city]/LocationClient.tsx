'use client';

import Link from 'next/link';
import { ServiceSchema } from '@/components/schema/ServiceSchema';
import LocalBusinessSchema from '@/components/schema/LocalBusinessSchema';
import BreadcrumbSchema from '@/components/schema/BreadcrumbSchema';
import { getWhatsAppByLocation } from '@/lib/keywords';
import { 
  MapPin, 
  Building2, 
  Cpu, 
  Camera, 
  FileText, 
  CheckCircle, 
  ArrowRight, 
  Phone, 
  Mail,
  Globe,
  Factory,
  Landmark,
  HardHat,
  Zap,
  Shield,
  Award,
  Clock,
  Target,
  Plane,
  MessageCircle
} from 'lucide-react';

interface LocationClientProps {
  location: string;
  slug: string;
}

const services = [
  {
    icon: Factory,
    title: 'Industrial Facility Scanning',
    description: '3D laser scanning with ±2mm accuracy for refineries, factories and power plants',
    link: '/en/solutions/laser-scanning',
    badge: 'Most Popular'
  },
  {
    icon: Landmark,
    title: 'Survey & Restoration',
    description: 'Detailed HBIM modeling and preservation documentation for heritage buildings',
    link: '/en/solutions/heritage-bim',
    badge: null
  },
  {
    icon: Plane,
    title: 'UAV Mapping',
    description: 'Aerial photogrammetry and orthophoto production for large-scale mapping',
    link: '/en/solutions/laser-scanning',
    badge: null
  },
  {
    icon: Cpu,
    title: 'BIM Modeling',
    description: 'Scan to BIM conversion and professional Revit modeling at LOD 100-400 levels',
    link: '/en/solutions/scan-to-bim',
    badge: null
  }
];

const sectors = [
  {
    icon: Factory,
    title: 'Industrial Facilities',
    description: 'Factories, power plants, petrochemical facilities',
    link: '/en/sectors/industrial-facilities'
  },
  {
    icon: Landmark,
    title: 'Heritage Buildings',
    description: 'Restoration, preservation and cultural heritage documentation',
    link: '/en/sectors/restoration'
  },
  {
    icon: Building2,
    title: 'Architectural Projects',
    description: 'Commercial buildings, residences and mixed-use developments',
    link: '/en/sectors/architecture'
  },
  {
    icon: HardHat,
    title: 'Construction & Renovation',
    description: 'Renovation, refurbishment and construction projects',
    link: '/en/sectors/renovation'
  }
];

const reasons = [
  {
    icon: Globe,
    title: '15+ Countries International Experience',
    description: '500+ successful projects in Europe, Middle East and Gulf region'
  },
  {
    icon: Shield,
    title: 'ISO 19650 BIM Standards',
    description: 'Full compliance with international BIM management standards'
  },
  {
    icon: Target,
    title: '±2mm Millimeter Precision',
    description: 'High-precision measurements with Faro, Leica, NavVis'
  },
  {
    icon: Zap,
    title: 'State-of-the-Art Equipment',
    description: 'The most advanced laser scanning systems in the market'
  },
  {
    icon: Award,
    title: 'Certified Expert Team',
    description: 'Autodesk certified BIM specialists'
  },
  {
    icon: Clock,
    title: '24/7 Technical Support',
    description: 'Uninterrupted customer service and project tracking'
  }
];

const stats = [
  { value: '500+', label: 'Projects' },
  { value: '15+', label: 'Countries' },
  { value: '10+', label: 'Years' },
  { value: '±2mm', label: 'Accuracy' }
];

export default function LocationClientEn({ location, slug }: LocationClientProps) {
  const breadcrumbs = [
    { name: 'Home', url: '/en' },
    { name: 'Locations', url: '/en/location' },
    { name: location, url: `/en/location/${slug}` }
  ];

  // Determine WhatsApp number based on region
  const whatsappInfo = getWhatsAppByLocation(slug, 'en');
  const whatsappMessage = encodeURIComponent(`Hello, I would like to get a quote for our project in ${location}.`);
  const whatsappUrl = `https://wa.me/${whatsappInfo.number}?text=${whatsappMessage}`;

  return (
    <>
      {/* Schema Markup */}
      <ServiceSchema
        name={`${location} Laser Scanning and BIM Modeling Solutions`}
        description={`Professional 3D laser scanning, Scan to BIM, digital twin and HBIM services for ${location}. ±2mm accuracy, ISO 19650 standards.`}
        url={`/en/location/${slug}`}
        image="/images/EosProje-Lazer-Tarama-Sistemleri.webp"
      />
      <LocalBusinessSchema isEn={true} />
      <BreadcrumbSchema items={breadcrumbs} />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(220,38,38,0.1),transparent_50%)]"></div>
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Greek_Cross_Pattern.svg/1920px-Greek_Cross_Pattern.svg.png fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }} />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="max-w-4xl">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
              <Link href="/en" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <span className="text-red-400">{location}</span>
            </nav>

            {/* Location Badge */}
            <div className="inline-flex items-center gap-2 bg-red-600/20 text-red-400 px-4 py-2 rounded-full mb-6 backdrop-blur-sm border border-red-600/20">
              <MapPin className="w-4 h-4" />
              <span className="text-sm font-medium">{location} Service Area</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              {location}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-400 mt-2">
                Laser Scanning and BIM Modeling Solutions
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-gray-300 mb-4 font-light">
              Professional 3D Scanning, BIM Modeling and Digital Documentation Services
            </p>

            {/* Description */}
            <p className="text-lg text-gray-400 mb-8 max-w-2xl">
              We provide ISO 19650 compliant 3D laser scanning, Scan to BIM and digital twin solutions 
              for industrial facilities, architectural projects and heritage buildings in {location}.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Link
                href="/en/contact"
                className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-xl font-semibold transition-all shadow-lg hover:shadow-red-600/30 hover:scale-105"
              >
                <Phone className="w-5 h-5" />
                Get a Quote
              </Link>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-semibold transition-all shadow-lg hover:shadow-green-600/30 hover:scale-105"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp Contact
              </a>
              <Link
                href="/en/references"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-semibold transition-all border border-white/20 hover:border-white/40"
              >
                View Our Projects
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Decorative Element */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-red-600 mb-1">{stat.value}</div>
                <div className="text-gray-500 text-sm font-medium uppercase tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block text-red-600 font-semibold text-sm uppercase tracking-wider mb-4">Our Services</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Solutions We Offer in {location}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive engineering solutions to prepare your projects for digital transformation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Link
                key={index}
                href={service.link}
                className="group relative bg-gray-50 hover:bg-gradient-to-br hover:from-red-50 hover:to-white rounded-2xl p-8 transition-all hover:shadow-xl border border-gray-100 hover:border-red-100"
              >
                {service.badge && (
                  <span className="absolute top-4 right-4 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                    {service.badge}
                  </span>
                )}
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-red-600 transition-colors">
                    <service.icon className="w-8 h-8 text-red-600 group-hover:text-white transition-colors" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <span className="inline-flex items-center gap-2 text-red-600 font-semibold group-hover:gap-3 transition-all">
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block text-red-400 font-semibold text-sm uppercase tracking-wider mb-4">Why Us?</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              EOS Proje for Your {location} Projects
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              With our experience in Turkey and worldwide, we are by your side for your {location} projects.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reasons.map((reason, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-red-500/30 transition-all hover:bg-white/10">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-red-600/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <reason.icon className="w-6 h-6 text-red-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">{reason.title}</h3>
                    <p className="text-gray-400 text-sm">{reason.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Trust Badges */}
          <div className="mt-16 flex flex-wrap justify-center gap-8 pt-16 border-t border-white/10">
            <div className="flex items-center gap-3 bg-white/5 px-6 py-3 rounded-full">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span className="text-sm font-medium">ISO 19650 Certified</span>
            </div>
            <div className="flex items-center gap-3 bg-white/5 px-6 py-3 rounded-full">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span className="text-sm font-medium">Autodesk Certified</span>
            </div>
            <div className="flex items-center gap-3 bg-white/5 px-6 py-3 rounded-full">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span className="text-sm font-medium">Leica Gold Partner</span>
            </div>
          </div>
        </div>
      </section>

      {/* Sectors Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block text-red-600 font-semibold text-sm uppercase tracking-wider mb-4">Sectors</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Industries We Serve
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We provide specialized solutions for different industries in {location}.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sectors.map((sector, index) => (
              <Link
                key={index}
                href={sector.link}
                className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all border border-gray-100 hover:border-red-100"
              >
                <div className="w-14 h-14 bg-gray-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-red-600 transition-colors">
                  <sector.icon className="w-7 h-7 text-gray-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{sector.title}</h3>
                <p className="text-sm text-gray-600">{sector.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-red-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Contact Us for Your Projects in {location}
          </h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Our expert team is ready to provide the best solution for your project in {location}.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-green-500 text-white px-8 py-4 rounded-xl font-semibold hover:bg-green-600 transition-all shadow-lg hover:shadow-green-500/30 hover:scale-105"
            >
              <MessageCircle className="w-5 h-5" />
              Send WhatsApp Message
            </a>
            <a
              href={`tel:+${whatsappInfo.number}`}
              className="inline-flex items-center gap-3 bg-white text-red-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all shadow-lg"
            >
              <Phone className="w-5 h-5" />
              {whatsappInfo.formatted}
            </a>
            <a
              href="mailto:info@eosproje.com"
              className="inline-flex items-center gap-3 bg-red-800 text-white px-8 py-4 rounded-xl font-semibold hover:bg-red-900 transition-all"
            >
              <Mail className="w-5 h-5" />
              info@eosproje.com
            </a>
          </div>

          <Link
            href="/en/contact"
            className="inline-flex items-center gap-2 text-white underline underline-offset-4 hover:no-underline transition-all"
          >
            Contact Us via Form
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
