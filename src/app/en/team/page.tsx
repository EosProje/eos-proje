"use client";

import SubPageHero from "@/components/SubPageHero";
import { Linkedin, Mail, Users } from "lucide-react";
import Link from "next/link";
import SmartImage from "@/components/ui/SmartImage";

export default function Page() {
    const team = [
        {
            name: "Uğur Bilen",
            role: "Founder & Senior 3D Specialist",
            bio: "Graduate of YTÜ Geomatics Engineering. Managed 50+ large-scale as-built projects with 20 years of sector experience. Expert in Laser Scanning, Drones, and Revit.",
            image: "/images/blog/team-1.webp",
            email: "ugur@eosproje.com"
        },
        {
            name: "Öykü Hun",
            role: "Operations Director",
            bio: "Graduate of İTÜ MSc Geomatics Engineering. Expert in Modeling, Six Sigma, and Planning. Manages laser scanning and photogrammetry processes.",
            image: "/images/blog/team-2.webp",
            email: "oyku@eosproje.com"
        },
        {
            name: "Kamil Serin",
            role: "Data & Quality Coordinator",
            bio: "20 years of sector experience. Engineering expertise specialized in Laser Scanning, Data Processing, and modeling processes.",
            image: "/images/blog/team-3.webp",
            email: "kamil@eosproje.com"
        },
        {
            name: "Utku Karaman",
            role: "MEP Modeling Specialist",
            bio: "Graduate of İTÜ Mechanical Engineering. Specialist in Scan-to-MEP and MEP Modeling. Manages 3D drawing and modeling processes in industrial projects.",
            image: "/images/blog/team-7.webp",
            email: "utku@eosproje.com"
        },
        {
            name: "Melis Melike Begdeş",
            role: "Modeling Specialist",
            bio: "Graduate of Işık University Architecture. Specialist in historical building restoration projects. Manages Point Cloud, photogrammetry, and 2D & 3D drafting processes.",
            image: "/images/blog/team-4.webp",
            email: "melis@eosproje.com"
        },
        {
            name: "Yasin Demirci",
            role: "Point Cloud Processing Specialist",
            bio: "Graduate of Geodesy and Photogrammetry. Competent in cloud-to-cloud registration and data cleaning in Faro Scene and ReCap software. Modeling specialist.",
            image: "/images/blog/team-5.webp",
            email: "yasin@eosproje.com"
        },
        {
            name: "Emir Demirci",
            role: "Measurement and Evaluation Specialist",
            bio: "Graduate of Geodesy and Photogrammetry. Competent in Laser Scanning and Drones. Measurement and evaluation specialist.",
            image: "/images/blog/team-8.webp",
            email: "emir@eosproje.com"
        },
        {
            name: "Cafer Saygılı",
            role: "Finance and Accounting Manager",
            bio: "Responsible for all finance and accounting affairs of Eos Proje since 2007.",
            image: "/images/blog/team-6.webp",
            email: "cafer@eosproje.com"
        }
    ];

    return (
        <div className="min-h-screen bg-white">
            <SubPageHero
                title="Our Team"
                description="Meet our dynamic and experienced staff consisting of engineers, architects, and technical experts."
                category="Corporate"
                breadcrumb={[{ label: "Team", href: "/en/team" }]}
            />

            <div className="max-w-7xl mx-auto px-4 py-20">
                {/* Intro */}
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="text-3xl font-black text-slate-900 mb-6">Expertise and Passion Combined</h2>
                    <p className="text-lg text-slate-600 leading-relaxed">
                        The EosProje team makes a difference not only with their technical skills but also with their problem-solving-oriented approaches.
                        We embrace every project as our own and work in accordance with engineering ethics.
                    </p>
                </div>

                {/* Team Grid */}
                <div className="grid md:grid-cols-3 gap-10 mb-24">
                    {team.map((member, idx) => (
                        <div key={idx} className="group bg-white rounded-3xl overflow-hidden border border-slate-100 hover:border-red-100 shadow-sm hover:shadow-2xl transition-all duration-300">
                            <div className="h-64 bg-slate-200 relative overflow-hidden">
                                <SmartImage
                                    src={member.image}
                                    alt={member.name}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <div className="p-8">
                                <div className="mb-4">
                                    <h3 className="text-xl font-black text-slate-900">{member.name}</h3>
                                    <p className="text-[var(--color-primary-red)] font-medium text-sm mt-1">{member.role}</p>
                                </div>
                                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                                    {member.bio}
                                </p>
                                <div className="flex gap-4">
                                    <a href={`mailto:${member.email}`} className="flex items-center gap-2 p-2 rounded-lg bg-slate-50 text-slate-600 hover:bg-red-50 hover:text-[var(--color-primary-red)] transition-all text-xs font-bold w-full justify-center">
                                        <Mail className="w-4 h-4" />
                                        {member.email}
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Join Us */}
                <div className="bg-slate-900 rounded-[3rem] p-12 md:p-16 text-white text-center">
                    <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Users className="w-10 h-10" />
                    </div>
                    <h2 className="text-3xl font-black mb-6">Want to Join Our Team?</h2>
                    <p className="text-slate-300 mb-10 max-w-2xl mx-auto text-lg">
                        If you want to make a career in BIM modeling, laser scanning, or software development, we are waiting for your CV.
                        Become a part of a culture of continuous learning and development.
                    </p>
                    <Link href="/en/contact" className="inline-flex items-center gap-2 px-10 py-5 bg-white text-slate-900 font-black rounded-2xl hover:bg-slate-100 transition-all">
                        Career Opportunities
                    </Link>
                </div>
            </div>
        </div>
    );
}
