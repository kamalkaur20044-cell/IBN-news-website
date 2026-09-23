import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import {
  Newspaper,
  Megaphone,
  Scale,
  Headphones,
  Mail,
  Phone,
  MapPin,
  Clock,
  ShieldCheck,
  Building,
  ArrowUpRight,
} from "lucide-react";

export const metadata = {
  title: "Contact Us | IBN News",
  description:
    "Official contact directory for IBN News. Reach our 24x7 editorial newsdesk, advertising sales team, reader support, and statutory grievance redressal officer.",
  alternates: {
    canonical: "https://ibnpunjabnews.com/contact-us",
  },
  openGraph: {
    title: "Contact Us | IBN News",
    description:
      "Direct communication channels for news tips, commercial advertising, reader assistance, and grievance redressal under Digital Media Ethics Code.",
    url: "https://ibnpunjabnews.com/contact-us",
    siteName: "IBN News",
    locale: "en_IN",
    type: "website",
  },
};

const DEPARTMENT_CHANNELS = [
  {
    icon: Newspaper,
    title: "Editorial Desk",
    description: "Submit breaking news tips, press releases, story leaks, and investigative pitches.",
    email: "desk@ibnpunjabnews.com",
    subject: "News Tip / Story Lead",
  },
  {
    icon: Megaphone,
    title: "Advertising & Sales",
    description: "Inquire about commercial solutions, digital sponsorships, and brand partnerships.",
    email: "ads@ibnpunjabnews.com",
    subject: "Advertising & Commercial Inquiry",
  },
  {
    icon: Scale,
    title: "Grievance Redressal",
    description: "Editorial corrections and compliance under Digital Media Ethics Code Rules, 2021.",
    email: "grievance@ibnpunjabnews.com",
    subject: "Statutory Grievance Submission",
  },
  {
    icon: Headphones,
    title: "Reader Support",
    description: "General feedback, website issues, app bugs, and reader subscription assistance.",
    email: "support@ibnpunjabnews.com",
    subject: "Reader Technical Support",
  },
];

export default function ContactUsPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "IBN News Contact Directory",
    url: "https://ibnpunjabnews.com/contact-us",
    description: "Official contact directory and grievance redressal mechanism for IBN News.",
    publisher: {
      "@type": "NewsMediaOrganization",
      name: "IBN News",
      alternateName: "IBN Punjab News",
      url: "https://ibnpunjabnews.com",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Chandigarh",
        addressRegion: "Punjab",
        postalCode: "160022",
        addressCountry: "IN",
      },
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+91-9317570004",
          contactType: "editorial newsdesk",
          email: "desk@ibnpunjabnews.com",
          availableLanguage: ["English", "Punjabi", "Hindi"],
        },
        {
          "@type": "ContactPoint",
          telephone: "+91-9988772864",
          contactType: "commercial and advertising",
          email: "ads@ibnpunjabnews.com",
        },
        {
          "@type": "ContactPoint",
          contactType: "grievance officer",
          email: "grievance@ibnpunjabnews.com",
        },
      ],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      
      <Navbar />

      <main className="bg-[#f9fafb] text-neutral-900 font-sans min-h-screen">
        <div className="max-w-6xl mx-auto px-4 py-8 md:py-12">
          
          {/* 1. Breadcrumb & Header Section */}
          <header className="border-b border-neutral-200 pb-8 mb-10 bg-white p-6 sm:p-8 rounded-lg shadow-xs">
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-neutral-500 mb-4 font-medium">
              <Link href="/" className="hover:text-[#c81e1e] transition-colors">
                Home
              </Link>
              <span className="text-neutral-300">/</span>
              <span className="text-neutral-800 font-semibold" aria-current="page">
                Contact Us
              </span>
            </nav>

            <div className="text-xs font-bold uppercase tracking-wider text-[#c81e1e] mb-2">
              Official Newsroom Directory
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-900 leading-tight mb-3">
              Contact IBN News
            </h1>

            <div className="w-16 h-1 bg-[#c81e1e] rounded-xs mb-3" />

            <p className="text-sm sm:text-base font-normal text-neutral-600 max-w-3xl">
              Connect directly with our 24/7 editorial newsroom, commercial brand solutions team, reader support, or statutory compliance desk.
            </p>
          </header>

          {/* 2. Top Department Cards (4-Column Grid) */}
          <section aria-label="Key Department Contacts" className="mb-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {DEPARTMENT_CHANNELS.map((dept, idx) => {
                const Icon = dept.icon;
                return (
                  <article
                    key={idx}
                    className="bg-white border border-neutral-200 rounded-lg p-5 flex flex-col justify-between hover:border-neutral-300 hover:shadow-sm transition-all"
                  >
                    <div>
                      <div className="w-10 h-10 rounded-md bg-neutral-100 text-[#c81e1e] flex items-center justify-center mb-3">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h2 className="text-base font-bold text-neutral-900 mb-1.5">
                        {dept.title}
                      </h2>
                      <p className="text-xs text-neutral-600 leading-relaxed mb-4">
                        {dept.description}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-neutral-100">
                      <a
                        href={`mailto:${dept.email}?subject=${encodeURIComponent(dept.subject)}`}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#c81e1e] hover:text-[#a81414] transition-colors group"
                      >
                        <Mail className="w-3.5 h-3.5" />
                        <span className="truncate">{dept.email}</span>
                        <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </a>
                    </div>
                  </article>
                );
              })}
            </div>
          </section>

          {/* 3. Main 2-Column Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Contact Form (7 cols) */}
            <section className="lg:col-span-7">
              <ContactForm />
            </section>

            {/* Right Column: Office Info & Legal Compliance (5 cols) */}
            <aside className="lg:col-span-5 space-y-6">
              
              {/* Newsroom & Operations Office Card */}
              <div className="bg-white border border-neutral-200 rounded-lg p-6 shadow-xs">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#c81e1e] mb-3">
                  <MapPin className="w-4 h-4" />
                  <span>Editorial &amp; Operations Bureau</span>
                </div>

                <h3 className="text-base font-bold text-neutral-900 mb-2">
                  IBN Punjab News Central Bureau
                </h3>

                <address className="not-italic text-xs sm:text-sm text-neutral-600 leading-relaxed space-y-1 mb-5">
                  <p>Press Complex, Sector 17 / Sector 22 Corridor</p>
                  <p>Chandigarh – 160022, Punjab, India</p>
                </address>

                <div className="space-y-3 border-t border-neutral-100 pt-4">
                  <div>
                    <div className="text-[11px] font-semibold text-neutral-500 uppercase tracking-wider mb-1">
                      Direct Newsdesk Helplines
                    </div>
                    <div className="flex flex-col sm:flex-row gap-2">
                      <a
                        href="tel:+919317570004"
                        className="inline-flex items-center gap-2 bg-neutral-50 hover:bg-neutral-100 border border-neutral-200 text-neutral-800 text-xs font-semibold px-3 py-2 rounded-md transition-colors"
                      >
                        <Phone className="w-3.5 h-3.5 text-[#c81e1e]" />
                        <span>+91 9317570004</span>
                      </a>
                      <a
                        href="tel:+919988772864"
                        className="inline-flex items-center gap-2 bg-neutral-50 hover:bg-neutral-100 border border-neutral-200 text-neutral-800 text-xs font-semibold px-3 py-2 rounded-md transition-colors"
                      >
                        <Phone className="w-3.5 h-3.5 text-[#c81e1e]" />
                        <span>+91 9988772864</span>
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-xs text-neutral-600 pt-1">
                    <Clock className="w-4 h-4 text-neutral-400 shrink-0" />
                    <span>Editorial Newsdesk: <strong>24 Hours / 7 Days</strong></span>
                  </div>
                </div>
              </div>

              {/* Corporate Registered Office Card */}
              <div className="bg-white border border-neutral-200 rounded-lg p-6 shadow-xs">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#c81e1e] mb-3">
                  <Building className="w-4 h-4" />
                  <span>Corporate Registered Office</span>
                </div>

                <h3 className="text-base font-bold text-neutral-900 mb-2">
                  IBN Media Network Private Limited
                </h3>

                <address className="not-italic text-xs sm:text-sm text-neutral-600 leading-relaxed space-y-1 mb-4">
                  <p>Plot No. 48, Industrial Area Phase II</p>
                  <p>Chandigarh (U.T.) – 160002, India</p>
                </address>

                <div className="text-xs text-neutral-600 border-t border-neutral-100 pt-3 flex items-center justify-between">
                  <span className="text-neutral-500">Corporate Enquiries:</span>
                  <a
                    href="mailto:corporate@ibnpunjabnews.com"
                    className="font-medium text-[#c81e1e] hover:underline"
                  >
                    corporate@ibnpunjabnews.com
                  </a>
                </div>
              </div>

              {/* Statutory Compliance Box */}
              <div className="bg-[#f9fafb] border border-neutral-200 rounded-lg p-6 border-l-4 border-l-[#c81e1e]">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#c81e1e] mb-2">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Statutory Compliance Notice</span>
                </div>

                <h3 className="text-sm font-bold text-neutral-900 mb-1.5">
                  Digital Media Ethics Code Compliance
                </h3>

                <p className="text-xs text-neutral-600 leading-relaxed mb-3">
                  Under the Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021, readers and stakeholders can submit grievances regarding published editorial content directly to the designated Grievance Officer.
                </p>

                <div className="bg-white border border-neutral-200 rounded-md p-3 text-xs space-y-1.5">
                  <div className="flex justify-between">
                    <span className="text-neutral-500 font-medium">Designated Officer:</span>
                    <span className="text-neutral-900 font-semibold">Himanshu Setia (Harry)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-500 font-medium">Designation:</span>
                    <span className="text-neutral-800">Chief Editor &amp; Compliance Lead</span>
                  </div>
                  <div className="flex justify-between items-center pt-1 border-t border-neutral-100">
                    <span className="text-neutral-500 font-medium">Official Email:</span>
                    <a
                      href="mailto:grievance@ibnpunjabnews.com?subject=Grievance%20Filing%20under%20Rule%2011"
                      className="font-bold text-[#c81e1e] hover:underline"
                    >
                      grievance@ibnpunjabnews.com
                    </a>
                  </div>
                </div>

                <p className="text-[11px] text-neutral-500 mt-2.5 leading-normal">
                  Statutory SLA: Formal acknowledgement is issued within 24 hours, and substantive grievance redressal is executed within 15 days of receipt.
                </p>
              </div>

            </aside>

          </div>

        </div>
        <Footer />
      </main>
    </>
  );
}
