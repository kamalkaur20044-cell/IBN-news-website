"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";

type News = {
  id: number;
  title: string;
  slug: string;
  excerpt: string | null;
  image: string | null;
  author: string | null;
  read_time: string | null;
  published_at: string | null;
};

function SearchContent() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";

  const [news, setNews] = useState<News[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function searchNews() {
      if (!query.trim()) {
        setNews([]);
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(
          `/api/news/search?q=${encodeURIComponent(query)}`
        );

        const data = await response.json();

        if (Array.isArray(data.news)) {
          setNews(data.news);
        }
      } catch (error) {
        console.error("Failed to search news:", error);
      } finally {
        setLoading(false);
      }
    }

    searchNews();
  }, [query]);

  const formatDate = (date: string | null) => {
    if (!date) return "";

    return new Date(date).toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  };

  return (
    <div>
      <Navbar />

      <main className="mx-auto w-full max-w-[90%] px-6 py-10 md:px-8">
        <h1 className="text-3xl font-bold text-black">
          Search Results
        </h1>

        <p className="mt-2 text-gray-600">
          Results for: <span className="font-semibold">{query}</span>
        </p>

        {loading ? (
          <p className="mt-10 text-gray-500">
            Searching...
          </p>
        ) : news.length === 0 ? (
          <p className="mt-10 text-gray-500">
            No news found.
          </p>
        ) : (
          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {news.map((article) => (
              <article
                key={article.id}
                className="overflow-hidden rounded-lg bg-white shadow"
              >
                <a href={`/news/${article.slug}`}>
                  <div className="h-[220px] w-full overflow-hidden bg-gray-200">
                    <img
                      src={article.image || "/images/featured-news.png"}
                      alt={article.title}
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <div className="p-5">
                    <h2 className="text-xl font-semibold leading-snug text-black">
                      {article.title}
                    </h2>

                    {article.excerpt && (
                      <p className="mt-2 text-sm leading-6 text-gray-600">
                        {article.excerpt}
                      </p>
                    )}

                    <div className="mt-4 flex items-center gap-2 text-sm text-gray-500">
                      <span className="text-[#e95420]">
                        {article.author}
                      </span>

                      <span>|</span>

                      <span>
                        {formatDate(article.published_at)}
                      </span>
                    </div>
                  </div>
                </a>
              </article>
            ))}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={<p>Loading search...</p>}>
      <SearchContent />
    </Suspense>
    
  );
}