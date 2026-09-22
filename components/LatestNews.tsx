import Image from "next/image";
import Link from "next/link";

type NewsItem = {
  image: string;
  authorAvatar: string;
  source: string;
  time: string;
  title: string;
  description: string;
  category: string;
  readTime: string;
};

const news: NewsItem[] = [
  {
    image: "/images/l1.png",
    authorAvatar: "/images/avatar1.png",
    source: "IBN News",
    time: "10 hours ago",
    title: "F1 teams had big upgrades planned for Imola – but what happens now?",
    description:
      "One of the many disruptions the Emilia Romagna Grand Prix not going ahead has caused is that of the teams' development programmes, with several upgrades having been planned...",
    category: "Sport",
    readTime: "1 min read",
  },
  {
    image: "/images/news-2.png",
    authorAvatar: "/images/avatar2.png",
    source: "IBN News",
    time: "10 hours ago",
    title: "Ukraine war: Wagner boss rubbishes Russian claims of Ukrainian casualties",
    description:
      "Speaking to state media, Russian Defence Minister Sergei Shoigu insisted that its forces had inflicted over 3,715 casualties on Ukraine during the attack and destroyed dozens...",
    category: "War",
    readTime: "1 min read",
  },
  {
    image: "/images/l3.png",
    authorAvatar: "/images/avatar3.png",
    source: "IBN News",
    time: "10 hours ago",
    title: "Brutal killings of two young girls show one of India's biggest problems is getting worse",
    description:
      "An even younger girl suffers a similar fate, allegedly at the hands of her own father because she and her mother wanted to sleep on the patio...",
    category: "World",
    readTime: "1 min read",
  },
];

export default function LatestNews() {
  return (
    <section className="mx-auto max-w-[90%] px-5 my-10">

      {/* Section Header */}
      <div className="mb-6 flex items-center justify-between border-b border-gray-200 pb-4">
        <h2 className="text-2xl font-bold text-gray-900">Latest News</h2>
        <Link
          href="/news"
          className="flex items-center gap-1 text-sm font-medium text-[#C1121F] hover:underline"
        >
          See all <span className="text-base">›</span>
        </Link>
      </div>

      {/* Cards grid */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {news.map((item) => (
          <Link key={item.title} href="#" className="group block">

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
              <div className="relative h-6 w-6 shrink-0 overflow-hidden rounded-full bg-gray-200">
                <Image
                  src={item.authorAvatar}
                  alt={item.source}
                  fill
                  className="object-cover"
                />
              </div>
              <span className="text-sm font-medium text-gray-800">{item.source}</span>
              <span className="text-gray-300">•</span>
              <span className="text-xs text-gray-500">{item.time}</span>
            </div>

            {/* Title */}
            <h3 className="mb-2 text-[16px] font-bold leading-snug text-gray-900 group-hover:text-[#C1121F] transition-colors duration-200">
              {item.title}
            </h3>

            {/* Description */}
            <p className="mb-3 line-clamp-2 text-sm leading-relaxed text-gray-500">
              {item.description}
            </p>

            {/* Category + read time */}
            <div className="flex items-center gap-2 text-xs">
              <span className="font-semibold text-[#C1121F]">{item.category}</span>
              <span className="text-gray-300">•</span>
              <span className="text-gray-500">{item.readTime}</span>
            </div>

          </Link>
        ))}
      </div>

    </section>
  );
}
