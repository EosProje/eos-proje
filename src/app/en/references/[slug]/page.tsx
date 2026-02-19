import { getMDXBySlug, getAllMDXMetadata } from "@/lib/mdx";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { mdxComponents } from "@/components/mdx/MDXComponents";
import FAQSchema from "@/components/schema/FAQSchema";
import OrganizationSchema from "@/components/schema/OrganizationSchema";
import Link from "next/link";

interface PageProps {
    params: { slug: string };
}

export async function generateStaticParams() {
    const cases = getAllMDXMetadata("case-studies", "en");
    return cases.map((c) => ({
        slug: c.slug,
    }));
}

export default async function CaseStudyPageEN({ params }: PageProps) {
    const { slug } = await params;
    const project = await getMDXBySlug(slug, "case-studies", "en");

    if (!project) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-[var(--color-soft-bg)]">
            <OrganizationSchema />

            {/* Hero Section */}
            <div className="bg-[var(--color-deep-charcoal)] text-white py-24 px-4 relative overflow-hidden">
                <div className="max-w-7xl mx-auto flex flex-col items-center text-center relative z-10">
                    <span className="px-4 py-1.5 bg-[var(--color-primary-red)] text-white text-xs font-black rounded-full uppercase tracking-widest mb-6">
                        Case Study: {project.frontmatter.sector}
                    </span>
                    <h1 className="text-4xl md:text-7xl font-black mb-8 leading-tight max-w-5xl">
                        {project.frontmatter.title.split("|")[0].trim()}
                    </h1>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 mt-8 py-8 border-t border-slate-700/50 w-full max-w-4xl">
                        <div className="flex flex-col">
                            <span className="text-slate-400 text-xs uppercase font-bold tracking-widest mb-1">Client</span>
                            <span className="text-sm md:text-base font-bold">{project.frontmatter.client}</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-slate-400 text-xs uppercase font-bold tracking-widest mb-1">Location</span>
                            <span className="text-sm md:text-base font-bold">{project.frontmatter.location}</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-slate-400 text-xs uppercase font-bold tracking-widest mb-1">Year</span>
                            <span className="text-sm md:text-base font-bold">{project.frontmatter.year}</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-slate-400 text-xs uppercase font-bold tracking-widest mb-1">Project Size</span>
                            <span className="text-sm md:text-base font-bold">{project.frontmatter.projectSize}</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-20 grid grid-cols-1 lg:grid-cols-12 gap-16">
                {/* Main Content */}
                <div className="lg:col-span-8">
                    <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100 
            prose prose-slate prose-lg max-w-none
            prose-h2:text-3xl prose-h2:font-black prose-h2:text-[var(--color-deep-charcoal)]
            prose-h3:text-xl prose-h3:font-bold prose-h3:text-slate-800
            prose-p:text-slate-600 prose-p:leading-relaxed
            prose-strong:text-slate-900
            prose-img:rounded-3xl prose-img:shadow-xl">
                        <MDXRemote source={project.content} components={mdxComponents} />
                    </div>
                </div>

                {/* Sidebar */}
                <div className="lg:col-span-4 space-y-8">
                    <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
                        <h3 className="text-lg font-black text-slate-900 mb-6 uppercase tracking-widest">Deliverables</h3>
                        <ul className="space-y-4">
                            {project.frontmatter.deliverables?.map((item, idx) => (
                                <li key={idx} className="flex items-start gap-3 text-sm text-slate-600">
                                    <div className="w-5 h-5 bg-green-50 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <svg className="w-3 h-3 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <span className="font-medium text-slate-800">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="bg-[var(--color-deep-charcoal)] rounded-3xl p-8 text-white shadow-xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-10">
                            <svg className="w-24 h-24 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                        </div>
                        <h3 className="text-lg font-black mb-4 uppercase tracking-widest relative z-10">Start Your Project</h3>
                        <p className="text-slate-400 text-xs leading-relaxed mb-8 relative z-10">
                            Do you have a similar need for this project? You can determine the most accurate BIM strategy by meeting with our engineering team.
                        </p>
                        <Link href="/en/contact" className="block w-full py-4 bg-[var(--color-primary-red)] hover:bg-red-800 text-white text-center font-black rounded-xl transition-all relative z-10 shadow-lg shadow-red-900/20">
                            Get a Quote
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
