"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

type NewsArticle = {
  id: number;
  title: string;
  slug: string;
  excerpt: string | null;
  image: string;
  author: string | null;
  read_time: string | null;
  published_at: string | null;
};

export default function FeaturedNews() {

  const [news, setNews] = useState<NewsArticle[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchFeaturedNews() {
      try {
        const response = await fetch("/api/news/featured");
        const data = await response.json();
        if (Array.isArray(data.news)) {
          setNews(data.news);
        }
        setNews(data.news);

      } catch (error) {
        console.error("Failed to fetch featured news:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchFeaturedNews();
  }, []);

  const mainArticle = news[0];
  const sideArticles = news.slice(1, 5);

  if (loading) {
    return <div>Loading featured news...</div>;
  }

  if (!mainArticle) {
    return <div>No featured article found</div>;
  }

  const formatDate = (date: string | null) => {
  if (!date) return "";

  return new Date(date).toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
};

  return (
    <section className="mx-auto max-w-[90%] px-0 my-10 ">
      {/* Section Header */}
      <div className="mb-6 flex items-center justify-between border-b border-gray-200 pb-4">
        <h2 className="text-2xl font-bold text-gray-900">Must Read</h2>
        <Link
          href="/news/featured"
          className="flex items-center gap-1 text-sm font-medium text-[#C1121F] hover:underline"
        >
          See all <span className="text-base">›</span>
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">

        {/* Main featured article */}
        <Link href={`/news/${mainArticle.slug}`} className="group block">
          {/* Image */}
          <div className="relative h-[260px] w-full overflow-hidden rounded-xl">
            <Image
              src={mainArticle.image || "/images/featured-news.png"}
              alt={mainArticle.title}
              fill
              priority
              className="object-cover transition duration-500 group-hover:scale-105"
            />
          </div>

          {/* Content */}
          <div className="mt-4">
            {/* Author row */}
            <div className="mb-3 flex items-center gap-2">

              <span className="text-sm font-medium text-gray-800">{mainArticle.author}</span>
              <span className="text-gray-300">•</span>
              <span className="text-xs text-gray-500">{formatDate(mainArticle.published_at)}</span>
            </div>

            {/* Title */}
            <h3 className="mb-2 text-xl font-bold leading-snug text-gray-900 group-hover:text-[#C1121F] transition-colors duration-200">
              {mainArticle.title}
            </h3>

            {/* Description */}
            <p className="mb-3 line-clamp-2 text-sm leading-relaxed text-gray-500">
              {mainArticle.excerpt}
            </p>

            {/* Category + read time */}
            <div className="flex items-center gap-2 text-xs">
              {/*<span className="font-semibold text-[#C1121F]">{mainArticle.category}</span>*/}
              <span className="text-gray-300">•</span>
              <span className="text-gray-500">{mainArticle.read_time}</span>
            </div>
          </div>
        </Link>

        {/* ── RIGHT: 3 compact side articles ── */}
        <div className="flex flex-col divide-y divide-gray-100">
          {sideArticles.map((article) => (
            <Link
              key={article.id}
              href={`/news/${article.slug}`}
              className="group flex gap-4 py-4 first:pt-0 last:pb-0"
            >
              {/* Thumbnail */}
              <div className="relative h-[90px] w-[130px] shrink-0 overflow-hidden rounded-lg">
                <Image
                  src={article.image || "/images/l1.png"}
                  alt={article.title}
                  fill
                  className="object-cover transition duration-300 group-hover:scale-105"
                />
              </div>

              {/* Text content */}
              <div className="flex flex-1 flex-col justify-between min-w-0">
                {/* Author row */}
                <div className="flex items-center gap-2 mb-1">

                  <span className="text-xs font-medium text-gray-800 truncate">{article.author}</span>
                  <span className="text-gray-300 text-xs">•</span>
                  <span className="text-xs text-gray-400 shrink-0">{formatDate(article.published_at)}</span>
                </div>

                {/* Title */}
                <h4 className="line-clamp-3 text-sm font-semibold leading-snug text-gray-900 group-hover:text-[#C1121F] transition-colors duration-200">
                  {article.title}
                </h4>

                {/* Category + read time */}
                <div className="mt-1 flex items-center gap-2 text-xs">
                  {/*<span className="font-semibold text-[#C1121F]">{article.category}</span> */}
                  <span className="text-gray-300">•</span>
                  <span className="text-gray-500">{article.read_time}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
