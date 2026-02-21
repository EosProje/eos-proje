"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Tag, Filter, X, ChevronRight, Calendar, Clock } from "lucide-react";
import SubPageHero from "@/components/SubPageHero";

interface BlogPost {
    slug: string;
    title: string;
    description: string;
    date: string;
    category?: string;
    tags?: string[];
    image?: string;
    images?: { hero?: string };
    readingTime?: string;
}

export default function BlogListClient({ posts }: { posts: BlogPost[] }) {
    const searchParams = useSearchParams();
    const router = useRouter();
    const pathname = usePathname();

    const selectedCategory = searchParams.get("category");
    const selectedTag = searchParams.get("tag");
    const [searchQuery, setSearchQuery] = useState("");

    // URL gÃƒÂ¼ncelleme fonksiyonu
    const updateFilter = (type: "category" | "tag", value: string | null) => {
        const params = new URLSearchParams(searchParams.toString());

        if (value) {
            if (type === "category") {
                params.set("category", value);
                params.delete("tag");
            } else {
                params.set("tag", value);
                params.delete("category");
            }
        } else {
            params.delete(type);
        }

        router.push(`${pathname}?${params.toString()}`, { scroll: false });
    };

    const clearFilters = () => {
        setSearchQuery("");
        router.push(pathname, { scroll: false });
    };

    // Benzersiz kategorileri ve etiketleri ÃƒÂ§Ã„Â±kar
    const categories = useMemo(() => {
        const cats = new Set(posts.map((p) => p.category).filter(Boolean));
        return Array.from(cats) as string[];
    }, [posts]);

    const allTags = useMemo(() => {
        const tags = new Set<string>();
        posts.forEach((p) => p.tags?.forEach((t) => tags.add(t)));
        return Array.from(tags);
    }, [posts]);

    // Filtreleme mantÃ„Â±Ã„Å¸Ã„Â±
    const filteredPosts = useMemo(() => {
        return posts.filter((post) => {
            const matchesCategory = selectedCategory ? post.category === selectedCategory : true;
            const matchesTag = selectedTag ? post.tags?.includes(selectedTag) : true;
            const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                post.description.toLowerCase().includes(searchQuery.toLowerCase());
            return matchesCategory && matchesTag && matchesSearch;
        });
    }, [posts, selectedCategory, selectedTag, searchQuery]);

    return (
        <div className="min-h-screen bg-white">
            <SubPageHero
                title="Blog & Makaleler"
                description="BIM teknolojileri, lazer tarama sÃƒÂ¼reÃƒÂ§leri ve endÃƒÂ¼striyel dijitalleÃ…Å¸me ÃƒÂ¼zerine teknik rehberler."
                category="Bilgi BankasÃ„Â±"
                breadcrumb={[{ label: "Blog", href: "/blog" }]}
            />

            <div className="max-w-7xl mx-auto px-4 py-16">
                <div className="flex flex-col lg:flex-row gap-12">

                    {/* Ã¢â€â‚¬Ã¢â€â‚¬ SOL SIDEBAR (Filtreler) Ã¢â€â‚¬Ã¢â€â‚¬ */}
                    <aside className="lg:w-1/4 space-y-10">

                        {/* Arama */}
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Makale ara..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-12 pr-4 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-[var(--color-primary-red)] focus:ring-1 focus:ring-[var(--color-primary-red)] transition-all font-medium text-slate-700 placeholder:text-slate-400"
                            />
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                        </div>

                        {/* Kategoriler */}
                        <div>
                            <h3 className="font-black text-slate-900 mb-6 flex items-center gap-2">
                                <Filter className="w-4 h-4 text-[var(--color-primary-red)]" />
                                Kategoriler
                            </h3>
                            <div className="space-y-2">
                                <button
                                    onClick={() => updateFilter("category", null)}
                                    className={`w-full text-left px-4 py-3 rounded-xl text-sm font-bold transition-all flex justify-between items-center ${selectedCategory === null
                                        ? "bg-[var(--color-primary-red)] text-white shadow-lg shadow-red-900/20"
                                        : "bg-white text-slate-600 hover:bg-slate-50 border border-slate-100"
                                        }`}
                                >
                                    TÃƒÂ¼mÃƒÂ¼
                                    <ChevronRight className={`w-4 h-4 ${selectedCategory === null ? "text-white" : "text-slate-300"}`} />
                                </button>
                                {categories.map((cat) => (
                                    <button
                                        key={cat}
                                        onClick={() => updateFilter("category", cat === selectedCategory ? null : cat)}
                                        className={`w-full text-left px-4 py-3 rounded-xl text-sm font-bold transition-all flex justify-between items-center ${selectedCategory === cat
                                            ? "bg-[var(--color-primary-red)] text-white shadow-lg shadow-red-900/20"
                                            : "bg-white text-slate-600 hover:bg-slate-50 border border-slate-100"
                                            }`}
                                    >
                                        {cat}
                                        <ChevronRight className={`w-4 h-4 ${selectedCategory === cat ? "text-white" : "text-slate-300"}`} />
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Etiketler */}
                        <div>
                            <h3 className="font-black text-slate-900 mb-6 flex items-center gap-2">
                                <Tag className="w-4 h-4 text-[var(--color-primary-red)]" />
                                PopÃƒÂ¼ler Etiketler
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {allTags.map((tag) => (
                                    <button
                                        key={tag}
                                        onClick={() => updateFilter("tag", tag === selectedTag ? null : tag)}
                                        className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all border ${selectedTag === tag
                                            ? "bg-slate-800 text-white border-slate-800"
                                            : "bg-white text-slate-500 border-slate-200 hover:border-slate-400 hover:text-slate-700"
                                            }`}
                                    >
                                        #{tag}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Aktif Filtreleri Temizle */}
                        {(selectedCategory || selectedTag || searchQuery) && (
                            <button
                                onClick={clearFilters}
                                className="w-full py-3 text-xs font-black uppercase tracking-widest text-red-500 hover:text-red-700 flex items-center justify-center gap-2 border border-red-100 rounded-xl hover:bg-red-50 transition-all"
                            >
                                <X className="w-4 h-4" /> Filtreleri Temizle
                            </button>
                        )}
                    </aside>

                    {/* Ã¢â€â‚¬Ã¢â€â‚¬ SAÃ„Â Ã„Â°Ãƒâ€¡ERÃ„Â°K (Grid) Ã¢â€â‚¬Ã¢â€â‚¬ */}
                    <main className="lg:w-3/4">
                        <div className="grid md:grid-cols-2 gap-8">
                            <AnimatePresence>
                                {filteredPosts.map((post, idx) => (
                                    <motion.div
                                        key={post.slug}
                                        layout
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.9 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <Link href={`/blog/${post.slug}`} className="group block h-full">
                                            <div className="bg-white rounded-[2rem] border border-slate-100 hover:border-red-100/50 hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500 overflow-hidden flex flex-col h-full hover:-translate-y-1">

                                                {/* GÃƒÂ¶rsel */}
                                                <div className="relative h-60 overflow-hidden bg-slate-100">
                                                    {post.image || post.images?.hero ? (
                                                        <Image
                                                            src={post.image || post.images?.hero || ""}
                                                            alt={post.title}
                                                            fill
                                                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                                                        />
                                                    ) : (
                                                        <div className="w-full h-full flex items-center justify-center text-slate-300 bg-slate-50">
                                                            <div className="text-center">
                                                                <span className="block text-4xl mb-2">ÄŸÅ¸â€œâ€</span>
                                                                <span className="text-xs font-black uppercase tracking-widest">GÃƒÂ¶rsel Yok</span>
                                                            </div>
                                                        </div>
                                                    )}

                                                    {/* Kategori Badge */}
                                                    {post.category && (
                                                        <div className="absolute top-4 left-4">
                                                            <span className="px-3 py-1 bg-white/95 backdrop-blur-sm text-[var(--color-primary-red)] text-[10px] font-black rounded-full uppercase tracking-widest shadow-sm">
                                                                {post.category}
                                                            </span>
                                                        </div>
                                                    )}
                                                </div>

                                                {/* Ã„Â°ÃƒÂ§erik */}
                                                <div className="p-8 flex-grow flex flex-col">
                                                    <div className="flex items-center gap-4 mb-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                                                        <span className="flex items-center gap-1">
                                                            <Calendar className="w-3 h-3" />
                                                            {new Date(post.date).toLocaleDateString("tr-TR", { day: "numeric", month: "long", year: "numeric" })}
                                                        </span>
                                                        {post.readingTime && (
                                                            <span className="flex items-center gap-1">
                                                                <Clock className="w-3 h-3" />
                                                                {post.readingTime}
                                                            </span>
                                                        )}
                                                    </div>

                                                    <h3 className="text-xl font-black text-slate-900 group-hover:text-[var(--color-primary-red)] transition-colors tracking-tight mb-3 leading-tight">
                                                        {post.title}
                                                    </h3>

                                                    <p className="text-slate-500 text-sm font-medium leading-relaxed mb-6 line-clamp-3">
                                                        {post.description}
                                                    </p>

                                                    {/* Etiketler (Mini) */}
                                                    <div className="mt-auto pt-6 border-t border-slate-50 flex flex-wrap gap-2">
                                                        {post.tags?.slice(0, 3).map(tag => (
                                                            <span key={tag} className="text-[9px] font-bold text-slate-400 bg-slate-50 px-2 py-1 rounded">#{tag}</span>
                                                        ))}
                                                        {post.tags && post.tags.length > 3 && <span className="text-[9px] font-bold text-slate-400 px-1 py-1">+{post.tags.length - 3}</span>}
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </div>

                        {filteredPosts.length === 0 && (
                            <div className="text-center py-20 bg-slate-50 rounded-[2rem] border border-slate-100">
                                <Search className="w-12 h-12 text-slate-300 mx-auto mb-4" />
                                <h3 className="text-xl font-black text-slate-400">SonuÃƒÂ§ BulunamadÃ„Â±</h3>
                                <p className="text-slate-400 mt-2 text-sm">Arama kriterlerinizi deÃ„Å¸iÃ…Å¸tirip tekrar deneyin.</p>
                                <button
                                    onClick={clearFilters}
                                    className="mt-6 px-6 py-3 bg-white text-slate-700 font-bold text-sm rounded-xl border border-slate-200 hover:border-slate-300 transition-all shadow-sm"
                                >
                                    Filtreleri Temizle
                                </button>
                            </div>
                        )}
                    </main>
                </div>
            </div>
        </div>
    );
}
