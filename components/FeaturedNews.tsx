import Image from "next/image";
import Link from "next/link";

type SideArticle = {
  image: string;
  author: string;
  timeAgo: string;
  title: string;
  category: string;
  readTime: string;
};

const mainArticle = {
  image: "/images/l3.png",
  author: "Jack Harleom",
  timeAgo: "10 hours ago",
  title:"IIT Bombay : ਸਾਹਿਲ ਦੀ ਮੌਤ ਮਗਰੋਂ ਵਿਦਿਆਰਥੀਆਂ ਵੱਲੋਂ ਇਨਸਾਫ਼ ਦੀ ਮੰਗ; ਪ੍ਰਸ਼ਾਸਨਿਕ ਢਾਂਚੇ ’ਚ ਸੁਧਾਰ ਲਈ ਚੁੱਕੀ ਆਵਾਜ਼",
  description:"ਵਿਦਿਆਰਥੀਆਂ ਨੇ ਸਪੱਸ਼ਟ ਕੀਤਾ ਹੈ ਕਿ ਉਨ੍ਹਾਂ ਦੇ ਵਿਰੋਧ ਪ੍ਰਦਰਸ਼ਨ ਦਾ ਮਕਸਦ ਅਕਾਦਮਿਕ ਬੇਨਿਯਮੀਆਂ ਜਾਂ ਨਕਲ ਨੂੰ ਸਹੀ ਠਹਿਰਾਉਣਾ ਨਹੀਂ ਹੈ, ਸਗੋਂ ਕੈਂਪਸ ਦੀਆਂ ਢਾਂਚਾਗਤ ਖਾਮੀਆਂ ਨੂੰ ਸੁਧਾਰਨਾ ਹੈ, ਤਾਂ ਜੋ ਭਵਿੱਖ ਵਿੱਚ ਕਿਸੇ ਹੋਰ ਵਿਦਿਆਰਥੀ ਨੂੰ ਅਜਿਹੇ ਹਾਲਾਤਾਂ ਦਾ ਸਾਹਮਣਾ ਨਾ ਕਰਨਾ ਪਵੇ",
  category: "Disaster",
  readTime: "1 min read",
};

const sideArticles: SideArticle[] = [
  {
    image: "/images/l1.png",
    author: "Oliver Grey",
    timeAgo: "5 hours ago",
    title: "Stella explains what 'instrumental' Rob Marshall will bring to McLaren in 2024",
    category: "Sport",
    readTime: "5 min read",
  },
  {
    image: "/images/news-2.png",
    author: "Rey Creig",
    timeAgo: "2 hours ago",
    title: "Pope Francis undergoes abdominal surgery in latest health concern",
    category: "World",
    readTime: "3 min read",
  },
  {
    image: "/images/l3.png",
    author: "Rey Creig",
    timeAgo: "2 hours ago",
    title: "Pope Francis undergoes abdominal surgery in latest health concern mm",
    category: "World",
    readTime: "3 min read",
  },
  {
    image: "/images/l3.png",
    author: "Rey Creig",
    timeAgo: "2 hours ago",
    title: "Pope Francis undergoes abdominal surgery in latest health concern omm",
    category: "World",
    readTime: "3 min read",
  },
  
];
export default function FeaturedNews() {
  return (
    <section className="mx-auto max-w-[90%] px-0 my-10 ">
      {/* Section Header */}
      <div className="mb-6 flex items-center justify-between border-b border-gray-200 pb-4">
        <h2 className="text-2xl font-bold text-gray-900">Must Read</h2>
        <Link
          href="/news"
          className="flex items-center gap-1 text-sm font-medium text-[#C1121F] hover:underline"
        >
          See all <span className="text-base">›</span>
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">

        {/* ── LEFT: Main featured article ── */}
        <Link href="#" className="group block">
          {/* Image */}
          <div className="relative h-[260px] w-full overflow-hidden rounded-xl">
            <Image
              src={mainArticle.image}
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
              <span className="text-xs text-gray-500">{mainArticle.timeAgo}</span>
            </div>

            {/* Title */}
            <h3 className="mb-2 text-xl font-bold leading-snug text-gray-900 group-hover:text-[#C1121F] transition-colors duration-200">
              {mainArticle.title}
            </h3>

            {/* Description */}
            <p className="mb-3 line-clamp-2 text-sm leading-relaxed text-gray-500">
              {mainArticle.description}
            </p>

            {/* Category + read time */}
            <div className="flex items-center gap-2 text-xs">
              <span className="font-semibold text-[#C1121F]">{mainArticle.category}</span>
              <span className="text-gray-300">•</span>
              <span className="text-gray-500">{mainArticle.readTime}</span>
            </div>
          </div>
        </Link>

        {/* ── RIGHT: 3 compact side articles ── */}
        <div className="flex flex-col divide-y divide-gray-100">
          {sideArticles.map((article) => (
            <Link
              key={article.title}
              href="#"
              className="group flex gap-4 py-4 first:pt-0 last:pb-0"
            >
              {/* Thumbnail */}
              <div className="relative h-[90px] w-[130px] shrink-0 overflow-hidden rounded-lg">
                <Image
                  src={article.image}
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
                  <span className="text-xs text-gray-400 shrink-0">{article.timeAgo}</span>
                </div>

                {/* Title */}
                <h4 className="line-clamp-3 text-sm font-semibold leading-snug text-gray-900 group-hover:text-[#C1121F] transition-colors duration-200">
                  {article.title}
                </h4>

                {/* Category + read time */}
                <div className="mt-1 flex items-center gap-2 text-xs">
                  <span className="font-semibold text-[#C1121F]">{article.category}</span>
                  <span className="text-gray-300">•</span>
                  <span className="text-gray-500">{article.readTime}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
