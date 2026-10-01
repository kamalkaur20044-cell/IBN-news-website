"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

type NewsItem = {
  id: number;
  title: string;
  slug: string;
  excerpt: string | null;
  image: string;
  author: string | null;
  read_time: string | null;
  published_at: string | null;
};

export default function LatestNews() {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchLatestNews() {
      try {
        const response = await fetch("/api/news/latest");
        const data = await response.json();

        if (Array.isArray(data.news)) {
          setNews(data.news);
        }
      } catch (error) {
        console.error("Failed to fetch latest news:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchLatestNews();
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
    return <div>Loading latest news...</div>;
  }

  return (
    <section className="mx-auto max-w-[90%] px-5 my-10">

      {/* Section Header */}
      <div className="mb-6 flex items-center justify-between border-b border-gray-200 pb-4">
        <h2 className="text-2xl font-bold text-gray-900">Latest News</h2>
        <Link
          href="/news/latest"
          className="flex items-center gap-1 text-sm font-medium text-[#C1121F] hover:underline"
        >
          See all <span className="text-base">›</span>
        </Link>
      </div>

      {/* Cards grid */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {news.slice(0,3).map((item) => (
          <Link key={item.id} href={'/news/${item.slug}'} className="group block">

            {/* Thumbnail */}
            <div className="relative mb-4 aspect-[16/10] w-full overflow-hidden rounded-xl">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition duration-300 group-hover:scale-105"
              />
            </div>

            {/* Author row */}
            <div className="mb-2 flex items-center gap-2">
              <span className="text-sm font-medium text-gray-800">{item.author}</span>
              <span className="text-gray-300">•</span>
              <span className="text-xs text-gray-500">{formatDate(item.published_at)}</span>
            </div>

            {/* Title */}
            <h3 className="mb-2 text-[16px] font-bold leading-snug text-gray-900 group-hover:text-[#C1121F] transition-colors duration-200">
              {item.title}
            </h3>

            {/* Description */}
            <p className="mb-3 line-clamp-2 text-sm leading-relaxed text-gray-500">
              {item.excerpt}
            </p>

            {/* Category + read time */}
            <div className="flex items-center gap-2 text-xs">
            {/* <span className="font-semibold text-[#C1121F]">{item.category}</span>
              <span className="text-gray-300">•</span> */}
              <span className="text-gray-500">{item.read_time}</span>
            </div>

          </Link>
        ))}
      </div>

    </section>
  );
}
