import Image from "next/image";

const newsItems = [
  {
    image: "/images/featured-news.png",
    source: "IBN News",
    time: "1 hour ago",
    title: "Starbucks ਭਾਰਤ ’ਚ ਖੋਲ੍ਹੇਗੀ ਗਲੋਬਲ ਟੈਕ ਸੈਂਟਰ; 800 ਨੌਕਰੀਆਂ ਹੋਣਗੀਆਂ ਪੈਦਾ",
    category: "Business",
    readTime: "2 min read",
  },
  {
    image: "/images/featured-news.png",
    source: "IBN News",
    time: "1 hour ago",
    title: "Starbucks ਭਾਰਤ ’ਚ ਖੋਲ੍ਹੇਗੀ ਗਲੋਬਲ ਟੈਕ ਸੈਂਟਰ; 800 ਨੌਕਰੀਆਂ ਹੋਣਗੀਆਂ ਪੈਦਾ",
    category: "Business",
    readTime: "5 min read",
  },
  {
    image: "/images/featured-news.png",
    source: "IBN News",
    time: "2 hours ago",
    title: "Starbucks ਭਾਰਤ ’ਚ ਖੋਲ੍ਹੇਗੀ ਗਲੋਬਲ ਟੈਕ ਸੈਂਟਰ; 800 ਨੌਕਰੀਆਂ ਹੋਣਗੀਆਂ ਪੈਦਾ",
    category: "Business",
    readTime: "3 min read",
  },
  {
    image: "/images/featured-news.png",
    source: "IBN News",
    time: "1 hour ago",
    title: "Starbucks ਭਾਰਤ ’ਚ ਖੋਲ੍ਹੇਗੀ ਗਲੋਬਲ ਟੈਕ ਸੈਂਟਰ; 800 ਨੌਕਰੀਆਂ ਹੋਣਗੀਆਂ ਪੈਦਾ",
    category: "Business",
    readTime: "2 min read",
  },
];

export default function FeaturedNews() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      
      <div className="grid gap-8 lg:grid-cols-[2fr_1fr]">

        {/* Featured News */}
        <div className="relative h-[550px] overflow-hidden rounded-2xl">

          <Image
            src="/images/featured-news.png"
            alt="Featured news"
            fill
            className="object-cover"
          />

          {/* Overlay Card */}
          <div className="absolute bottom-8 top- max-w-lg rounded-2xl bg-white p-7 shadow-xl">

            <div className="mb-4 flex items-center gap-3 text-sm text-gray-500">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-black text-xs text-white">
                IBN
              </span>

              <span className="font-medium text-gray-900">
                IBN Punjab News
              </span>

              <span>•</span>

              <span>10 mins ago</span>
            </div>

            <h2 className="text-3xl font-semibold leading-tight text-gray-900">
              Starbucks ਭਾਰਤ ’ਚ ਖੋਲ੍ਹੇਗੀ ਗਲੋਬਲ ਟੈਕ ਸੈਂਟਰ; 800 ਨੌਕਰੀਆਂ ਹੋਣਗੀਆਂ ਪੈਦਾ
            </h2>

            <p className="mt-4 text-sm leading-6 text-gray-500">
                ਅਮਰੀਕੀ ਕਾਫ਼ੀ ਚੇਨ ਸਟਾਰਬਕਸ ਨੇ ਦੱਖਣੀ ਭਾਰਤੀ ਸ਼ਹਿਰ ਚੇਨੱਈ ਵਿੱਚ ਗਲੋਬਲ ਕੈਪੇਬਿਲਟੀ ਸੈਂਟਰ (GCC) ਸਥਾਪਤ ਕਰਨ ਲਈ ਇੱਕ ਸਮਝੌਤੇ ’ਤੇ ਦਸਤਖਤ ਕੀਤੇ ਹਨ, ਜਿਸ ਨਾਲ ਲਗਪਗ 800 ਤਕਨਾਲੋਜੀ ਨੌਕਰੀਆਂ ਪੈਦਾ ਹੋਣਗੀਆਂ। ਇਹ ਜਾਣਕਾਰੀ ਤਾਮਿਲਨਾਡੂ ਰਾਜ ਸਰਕਾਰ ਨੇ ਸੋਮਵਾਰ ਨੂੰ ਦਿੱਤੀ।
            </p>

            <div className="mt-6 flex items-center justify-between">
              <span className="text-sm text-gray-500">
                Aug 03, 2023
              </span>

              <span className="text-xl text-gray-400">
                →
              </span>
            </div>

          </div>
        </div>


        {/* Right Side News */}
        <div className="flex flex-col justify-between">

          {newsItems.map((news, index) => (
            <article
              key={index}
              className="flex gap-4 border-b border-gray-200 pb-5 pt-1 last:border-b-0"
            >

              {/* Image */}
              <div className="relative h-28 w-36 shrink-0 overflow-hidden rounded-lg">
                <Image
                  src={news.image}
                  alt={news.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div>
                <div className="mb-2 flex items-center gap-2 text-xs text-gray-500">
                  <span className="font-semibold text-gray-900">
                    {news.source}
                  </span>

                  <span>•</span>

                  <span>{news.time}</span>
                </div>

                <h3 className="text-base font-semibold leading-6 text-gray-900">
                  {news.title}
                </h3>

                <div className="mt-2 flex gap-2 text-xs">
                  <span className="text-red-600">
                    {news.category}
                  </span>

                  <span className="text-gray-400">
                    • {news.readTime}
                  </span>
                </div>
              </div>

            </article>
          ))}

        </div>

      </div>
    </section>
  );
}