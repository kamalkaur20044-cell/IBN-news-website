'use client';

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useEffect, useState } from "react";

type News = {
    id: number;
    title: string;
    slug: string;
    excerpt: string | null;
    image: string;
    author: string | null;
    read_time: string | null;
    published_at: string | null;
};

export default function FeaturedNewPage() {
    const [news, setNews] = useState<News[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchFeaturedNews() {
            try {
                const response = await fetch("/api/news/featured");
                const data = await response.json();

                if (Array.isArray(data.news)) {
                    setNews(data.news);
                }
            } catch (error) {
                console.error("failed to fetch featured news :", error);
            } finally {
                setLoading(false);
            }
        }
        fetchFeaturedNews();
    }, []);

    const formatDate = (date: string | null) => {
        if (!date) return "";
        return new Date(date).toLocaleDateString("en-IN", {
            day: "2-digit",
            month: "long",
            year: "numeric",
        });
    };

    if (loading) {
        return (
            <main className="mx-auto w-full max-w-[90%] px-6 py-10 md:px-8">
                <p>Loading featuerd news...</p>
            </main>
        );
    }

    return (
        <div>
            <Navbar />
            <main className="mx-auto w-full max-w-[90%] px-6 py-10 md:px-8">
                <h1 className="text-2xl font-bold text-red-700">Featured News</h1>

                {news.length === 0 ? (
                    <p className="mt-10 text-gray-500"> No featuerd news avaiable</p>

                ) : (
                    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {
                            news.map((article) => (
                                <article key={article.id} className="overflow-hidden rounded-lg bg-white shadow" >
                                    <a href={`/news/${article.slug}`}>
                                        <div className="h-[220px] w-full overflow-hidden bg-gray-200">
                                            <img src={article.image} alt={article.title} className="h-full w-full object-cover" />
                                        </div>
                                        <div className="p-5">
                                            <h2 className="text-xl font-semibold leading-snug text-black">{article.title}</h2>
                                            {article.excerpt && (
                                                <p className="mt-2 text-sm leading-6 text-gray-600">{article.excerpt}</p>
                                            )}
                                            <div className="mt-4 flex items-center gap-2 text-sm text-gray-500">
                                                <span className="text-[#e95420]">{article.author}</span><span>|</span><span>{formatDate(article.published_at)}</span>
                                            </div>
                                        </div>
                                    </a>
                                </article>
                            ))
                        }</div>
                )}
            </main>
            <Footer />
        </div>
    );
}

