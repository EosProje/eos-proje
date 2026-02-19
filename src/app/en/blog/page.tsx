import Link from "next/link";
import { getAllMDXMetadata } from "@/lib/mdx";
import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
    title: "Engineering Blog | BIM & Laser Scanning Tech Insights",
    description: "Stay updated with the latest trends in Point Cloud to BIM, reality capture technologies, and industrial modeling standards. In-depth technical articles for AEC professionals.",
    alternates: {
        canonical: 'https://www.eosproje.com/en/blog',
        languages: {
            "tr": "https://www.eosproje.com/blog",
            "en": "https://www.eosproje.com/en/blog",
        },
    },
};

export default function BlogListingPageEN() {
    const blogPosts = getAllMDXMetadata("blog", "en");
    const categories = Array.from(new Set(blogPosts.map(p => p.category || "General")));

    return (
        <div className="min-h-screen bg-[var(--color-soft-bg)]">
            {/* Hero Section */}
            <div className="bg-[var(--color-deep-charcoal)] text-white py-28 px-4 relative overflow-hidden">
                <div className="absolute inset-0 bg-grid-white/[0.05] [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
                <div className="max-w-7xl mx-auto text-center relative z-10">
                    <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">Blog</h1>
                    <p className="text-xl text-slate-400 max-w-2xl mx-auto font-medium">
                        In-depth articles on BIM technologies, modeling processes, and sector-specific engineering solutions.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-20">
                {/* Category Filter Pills */}
                <div className="flex flex-wrap gap-3 mb-16 justify-center">
                    <button className="px-6 py-2.5 bg-[var(--color-primary-red)] text-white rounded-full text-sm font-black shadow-lg shadow-red-900/20">
                        All
                    </button>
                    {categories.map((cat) => (
                        <button key={cat} className="px-6 py-2.5 bg-white border border-slate-200 text-slate-700 hover:border-[var(--color-primary-red)] hover:text-[var(--color-primary-red)] rounded-full text-sm font-black transition-all hover:bg-slate-50">
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Blog Posts Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {blogPosts.map((post) => (
                        <Link key={post.slug} href={`/en/blog/${post.slug}`} className="group">
                            <div className="bg-white rounded-3xl border border-slate-100 hover:border-[var(--color-primary-red)] transition-all hover:shadow-2xl overflow-hidden h-full flex flex-col relative">
                                {/* Image Placeholder */}
                                <div className="h-56 bg-slate-900 flex items-center justify-center relative overflow-hidden">
                                    {post.images?.hero ? (
                                        <Image src={post.images.hero} alt={`EosProje Blog: ${post.title}`} fill className="object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" />
                                    ) : (
                                        <div className="bg-gradient-to-br from-slate-800 to-slate-950 w-full h-full flex items-center justify-center">
                                            <svg className="w-16 h-16 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                            </svg>
                                        </div>
                                    )}
                                    <div className="absolute top-4 left-4">
                                        <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-[var(--color-primary-red)] text-[10px] font-black rounded-full uppercase tracking-widest">
                                            {post.category}
                                        </span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-8 flex-grow flex flex-col">
                                    <div className="flex items-center gap-2 mb-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                                        <span>{new Date(post.date).toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                                        <span>•</span>
                                        <span>{post.readingTime}</span>
                                    </div>
                                    <h3 className="text-xl font-black mb-4 text-slate-900 group-hover:text-[var(--color-primary-red)] transition-colors leading-tight">
                                        {post.title.split("|")[0].trim()}
                                    </h3>
                                    <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-grow">
                                        {post.description}
                                    </p>
                                    <div className="pt-6 border-t border-slate-50 flex items-center justify-between">
                                        <span className="text-[var(--color-primary-red)] text-xs font-black uppercase tracking-widest group-hover:translate-x-1 transition-transform inline-block">
                                            Read More &rarr;
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
