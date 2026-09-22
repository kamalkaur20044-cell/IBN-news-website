import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Phone, ShieldCheck, Newspaper, Award, Mail, ArrowRight } from "lucide-react";

export const metadata = {
  title: "About Us | IBN Punjab News",
  description:
    "IBN Punjab News delivers independent, verified regional journalism across Majha, Malwa, and Doaba under Chief Editor Himanshu Setia (Harry).",
  alternates: {
    canonical: "https://ibnpunjabnews.com/about-us",
  },
  openGraph: {
    title: "About Us | IBN Punjab News",
    description:
      "Fearless, unbiased regional journalism across Punjab's grassroots and power corridors.",
    url: "https://ibnpunjabnews.com/about-us",
    siteName: "IBN Punjab News",
    locale: "pa_IN",
    type: "website",
  },
};

const RECENT_NEWS = [
  {
    id: 1,
    title: "ਮਾਲਵਾ ਨਹਿਰੀ ਪਾਣੀ ਵੰਡ: ਆਖਰੀ ਪਿੰਡਾਂ ਤੱਕ ਪਾਣੀ ਪਹੁੰਚਾਉਣ ਲਈ ਵਿਸ਼ੇਸ਼ ਗਰਾਊਂਡ ਰਿਪੋਰਟ",
    titleEn: "Malwa Canal Water Distribution: Ground Reality at Tail-End Villages",
    category: "Punjab Ground Report",
    date: "Sep 20, 2026",
    image: "/images/featured-news.png",
  },
  {
    id: 2,
    title: "ਸਰਹੱਦੀ ਪੱਟੀ ਦੇ ਸਕੂਲਾਂ ਅਤੇ ਸਿਹਤ ਕੇਂਦਰਾਂ ਵਿੱਚ ਬੁਨਿਆਦੀ ਢਾਂਚੇ ਦੀ ਮੌਜੂਦਾ ਸਥਿਤੀ",
    titleEn: "Border Belt Infrastructure Audit: Rural Schools & PHC Facilities",
    category: "Special Investigation",
    date: "Sep 18, 2026",
    image: "/images/featured-news.png",
  },
  {
    id: 3,
    title: "ਦੁਆਬਾ ਐੱਨ.ਆਰ.ਆਈ. ਜ਼ਮੀਨੀ ਮਾਮਲੇ: ਫਾਸਟ-ਟਰੈਕ ਅਦਾਲਤਾਂ ਦੀ ਕਾਰਗੁਜ਼ਾਰੀ ਦਾ ਵਿਸ਼ਲੇਸ਼ਣ",
    titleEn: "Doaba NRI Property Disputes: Fast-Track Clearance Assessment",
    category: "Legal & Society",
    date: "Sep 16, 2026",
    image: "/images/featured-news.png",
  },
  {
    id: 4,
    title: "ਪੰਜਾਬ ਬਜਟ ਅਤੇ ਖੇਤੀਬਾੜੀ ਨੀਤੀਆਂ: ਕਿਸਾਨਾਂ ਅਤੇ ਮਾਹਿਰਾਂ ਨਾਲ ਸਿੱਧੀ ਗੱਲਬਾਤ",
    titleEn: "Punjab Budget & Agri Policy: Direct Expert & Farmer Dialogues",
    category: "Economy & Policy",
    date: "Sep 14, 2026",
    image: "/images/featured-news.png",
  },
];

const CORE_PRINCIPLES = [
  {
    icon: Newspaper,
    title: "Ground Reporting Across 23 Districts",
    description:
      "With active reporters across Majha, Malwa, and Doaba, our stories originate from field verification rather than secondhand wire claims.",
  },
  {
    icon: ShieldCheck,
    title: "Editorial Independence",
    description:
      "Strict operational separation between our commercial operations and newsdesk guarantees unbiased, fearless coverage of public affairs.",
  },
  {
    icon: Award,
    title: "Transparency & Accountability",
    description:
      "Every report adheres to digital media ethics, with clearly documented editorial standards and a statutory grievance redressal mechanism.",
  },
];

export default function AboutUsPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "NewsMediaOrganization",
    name: "IBN Punjab News",
    alternateName: "ਆਈ.ਬੀ.ਐਨ. ਪੰਜਾਬ ਨਿਊਜ਼",
    url: "https://ibnpunjabnews.com",
    address: {
      "@type": "PostalAddress",
      addressRegion: "Punjab",
      addressCountry: "IN",
    },
    editor: {
      "@type": "Person",
      name: "Himanshu Setia (Harry)",
      jobTitle: "Chief Editor & Director",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+91-9317570004",
        contactType: "editorial newsdesk",
      },
      {
        "@type": "ContactPoint",
        telephone: "+91-9988772864",
        contactType: "press communication",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <Navbar />

      <main className="bg-white text-neutral-900 font-sans min-h-screen">
        <div className="max-w-6xl mx-auto px-4 py-8 md:py-12">
          
          <section className="border-b border-neutral-200 pb-10 mb-10">
            <nav className="flex items-center gap-2 text-xs text-neutral-500 mb-6 font-medium">
              <Link href="/" className="hover:text-red-600 transition-colors">
                Home
              </Link>
              <span>/</span>
              <span className="text-neutral-800">About Us</span>
            </nav>

            <div className="text-xs font-bold uppercase tracking-wider text-red-600 mb-2">
              IBN Punjab News
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-900 leading-tight mb-3">
              ਪੰਜਾਬ ਦੀ ਆਵਾਜ਼ – ਸੱਚ, ਨਿਰਪੱਖਤਾ ਅਤੇ ਜ਼ਮੀਨੀ ਰਿਪੋਰਟਿੰਗ
            </h1>
            
            <p className="text-sm sm:text-base font-medium text-neutral-600 mb-6">
              Fearless, Unbiased Regional Journalism Across Punjab
            </p>

            <p className="text-sm sm:text-base text-neutral-700 leading-relaxed max-w-4xl">
              <strong>IBN Punjab News</strong> is an independent digital news organization dedicated to bringing authentic, verified, and unfiltered reporting from every corner of Punjab. From rural farming communities to administrative decision-making in Chandigarh, our field journalists across Majha, Malwa, and Doaba provide transparent, on-record journalism.
            </p>
          </section>
          <section className="mb-12">
            <div className="bg-neutral-50 border border-neutral-200 rounded-lg p-6 md:p-8">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-red-600 mb-1">
                    Editorial Leadership
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-neutral-900 mb-1">
                    Himanshu Setia (Harry)
                  </h2>
                  <p className="text-sm text-neutral-600 mb-3">
                    Chief Editor &amp; Director, IBN Punjab News
                  </p>
                  <blockquote className="border-l-2 border-red-600 pl-3 text-sm italic text-neutral-700 font-medium">
                    &ldquo;ਜ਼ਮੀਨੀ ਸੱਚ ਨੂੰ ਲੋਕਾਂ ਸਾਹਮਣੇ ਲਿਆਉਣਾ ਹੀ ਸਾਡੀ ਪਹਿਲ ਹੈ।&rdquo;
                  </blockquote>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                  <a
                    href="tel:+919317570004"
                    className="inline-flex items-center justify-center gap-2 bg-white border border-neutral-300 hover:border-red-600 hover:text-red-600 text-neutral-800 text-xs sm:text-sm font-semibold px-4 py-2.5 rounded-full transition-colors shadow-sm"
                  >
                    <Phone className="w-4 h-4 text-red-600" />
                    <span>+91 9317570004</span>
                  </a>
                  <a
                    href="tel:+919988772864"
                    className="inline-flex items-center justify-center gap-2 bg-white border border-neutral-300 hover:border-red-600 hover:text-red-600 text-neutral-800 text-xs sm:text-sm font-semibold px-4 py-2.5 rounded-full transition-colors shadow-sm"
                  >
                    <Phone className="w-4 h-4 text-red-600" />
                    <span>+91 9988772864</span>
                  </a>
                </div>
              </div>
            </div>
          </section>
          <section className="mb-14">
            <h2 className="text-lg font-bold text-neutral-900 mb-6 flex items-center gap-2">
              <span className="w-1.5 h-4 bg-red-600 inline-block rounded-sm" />
              Our Journalistic Principles
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {CORE_PRINCIPLES.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="bg-white border border-neutral-200 rounded-lg p-6 hover:shadow-md transition-shadow"
                  >
                    <div className="w-10 h-10 rounded-full bg-red-50 text-red-600 flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-neutral-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </section>
          <section className="mb-14">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-bold text-neutral-900 flex items-center gap-2">
                <span className="w-1.5 h-4 bg-red-600 inline-block rounded-sm" />
                Recent Updates &amp; Reports
              </h2>
              <Link
                href="/news"
                className="text-xs font-semibold text-red-600 hover:text-red-700 flex items-center gap-1"
              >
                View All <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {RECENT_NEWS.map((news) => (
                <article
                  key={news.id}
                  className="bg-white border border-neutral-200 rounded-lg overflow-hidden hover:border-neutral-300 hover:shadow-sm transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="relative aspect-video w-full bg-neutral-100">
                      <Image
                        src={news.image}
                        alt={news.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      />
                      <span className="absolute top-2 left-2 bg-red-600 text-white text-[10px] font-semibold uppercase px-2 py-0.5 rounded">
                        {news.category}
                      </span>
                    </div>
                    <div className="p-4">
                      <h3 className="text-sm font-bold text-neutral-900 leading-snug line-clamp-2 mb-1">
                        {news.title}
                      </h3>
                      <p className="text-xs text-neutral-500 line-clamp-1 mb-2">
                        {news.titleEn}
                      </p>
                    </div>
                  </div>

                  <div className="px-4 py-3 bg-neutral-50 border-t border-neutral-100 flex items-center justify-between text-[11px] text-neutral-500">
                    <span>{news.date}</span>
                    <span className="text-red-600 font-semibold">IBN News</span>
                  </div>
                </article>
              ))}
            </div>
          </section>
          <section className="bg-neutral-50 border border-neutral-200 rounded-lg p-6 md:p-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="max-w-2xl">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase text-red-600 mb-1">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Digital Media Ethics Compliance</span>
                </div>
                <h2 className="text-base sm:text-lg font-bold text-neutral-900 mb-2">
                  Institutional Grievance Redressal &amp; Feedback
                </h2>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                  In compliance with the Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Rules, IBN Punjab News maintains a responsive grievance redressal mechanism for editorial inquiries and corrections.
                </p>
                <div className="flex items-center gap-2 text-xs text-neutral-600 mt-3">
                  <Mail className="w-3.5 h-3.5 text-neutral-500" />
                  <span>Editorial Desk: <strong>desk@ibnpunjabnews.com</strong></span>
                </div>
              </div>

              <div className="shrink-0">
                <a
                  href="mailto:desk@ibnpunjabnews.com?subject=Editorial%20Grievance%20Docket"
                  className="inline-flex items-center justify-center bg-red-600 hover:bg-red-700 text-white text-xs sm:text-sm font-bold uppercase tracking-wider px-6 py-3 rounded-lg transition-colors shadow-sm"
                >
                  Grievance Cell
                </a>
              </div>
            </div>
          </section>
        </div>
        <Footer />
      </main>
    </>
  );
}
