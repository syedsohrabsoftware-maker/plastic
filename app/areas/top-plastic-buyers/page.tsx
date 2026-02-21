import { Metadata } from "next";
import Link from "next/link";
import { MapPin, Phone, ArrowRight, Factory } from "lucide-react";
import Script from "next/script";

// ✅ 1. Advanced SEO Metadata
export const metadata: Metadata = {
  // ✅ Title mein mobile number sabse aage ya end mein hona chahiye (High Conversion)
  title: "Top HDPE, PP, PVC Plastic Buyer Bhiwadi & Alwar | Call +91-9813124320",
  
  description: "Looking for Top Plastic Buyer in Bhiwadi, Alwar or Manesar? We buy HDPE, PP, ABS & Industrial Plastic Scrap. Authorized recycler with doorstep pickup & instant payment. Call +91-9813124320.",
  
  keywords: [
    "top plastic buyer Bhiwadi", 
    "HDPE scrap buyer Alwar", 
    "PP plastic recycling Manesar", 
    "Industrial waste disposal Tapukara", 
    "ABS scrap buyer Bilaspur",
    "factory scrap pickup Tauru",
    "plastic scrap rates today Rajasthan",
    "AK Plastic Scrap contact number",
    "scrap buyer mobile number Bhiwadi"
  ].join(", "),

  // ✅ Extra SEO Signals
  other: {
    "telephone": "+919813124320",
  }
};

export default function TopBuyersAreaPage() {
  // ✅ City Array: Central source of truth
  const cities = [
    { name: "Bhiwadi", zone: "RIICO Industrial Hub", slug: "bhiwadi" },
    { name: "Alwar", zone: "MIA Industrial Area", slug: "alwar" },
    { name: "Tapukara", zone: "Honda & Allied Clusters", slug: "tapukara" },
    { name: "Manesar", zone: "IMT Manesar Sector", slug: "manesar" },
    { name: "Bilaspur", zone: "Logistics & Warehousing", slug: "bilaspur" },
    { name: "Tauru", zone: "Regional Collection Center", slug: "tauru" },
  ];

  // ✅ 2. FAQ Schema for Google Rich Snippets
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Who is the top plastic buyer in Bhiwadi and Alwar?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "AK Plastic Scrap (+91-9813124320) is the leading authorized plastic scrap buyer in Bhiwadi, Alwar, and the surrounding industrial belts."
        }
      },
      {
        "@type": "Question",
        "name": "Do you buy industrial plastic scrap in Manesar and Bilaspur?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we provide specialized pickup services for industrial plastic scrap in IMT Manesar, Bilaspur, and Tauru industrial zones."
        }
      }
    ]
  };

  return (
    <main className="py-24 bg-white font-['Inter']">
      {/* Injecting Schema for SEO */}
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-7xl mx-auto px-5">
        
        {/* --- Hero Section --- */}
        <header className="mb-20">
          <div className="flex items-center gap-2 mb-4">
             <div className="h-[2px] w-12 bg-emerald-600"></div>
             <span className="text-emerald-600 font-black uppercase tracking-widest text-[10px] italic">
               Authorized NCR & Rajasthan Network
             </span>
          </div>
          <h1 className="text-5xl md:text-8xl font-[1000] italic uppercase tracking-tighter text-slate-900 leading-[0.9]">
            Top Plastic <br />
            <span className="text-emerald-600">Buyer</span>
          </h1>
        </header>

        {/* --- Dynamic Grid using Array --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cities.map((city, index) => (
            <div key={index} className="group border-2 border-slate-50 p-10 rounded-[3rem] hover:bg-slate-900 transition-all duration-500 relative overflow-hidden">
              {/* Background Decoration */}
              <div className="absolute -right-10 -bottom-10 opacity-0 group-hover:opacity-10 transition-opacity duration-500 text-white pointer-events-none">
                 <Factory size={150} />
              </div>

              <div className="relative z-10">
                <div className="flex justify-between items-center mb-8">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center group-hover:bg-emerald-500 group-hover:text-white transition-all">
                    <MapPin size={24} />
                  </div>
                  <span className="text-[10px] font-black text-slate-300 uppercase italic tracking-widest group-hover:text-emerald-500">
                    Active Zone
                  </span>
                </div>

                <h3 className="text-3xl font-black italic uppercase text-slate-900 group-hover:text-white transition-colors mb-2">
                  {city.name}
                </h3>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-10 italic group-hover:text-slate-500">
                  {city.zone}
                </p>

                <Link 
                  href={`/areas/${city.slug}/scrap-dealer-near-me`}
                  className="inline-flex items-center gap-2 text-xs font-black uppercase italic text-emerald-600 group-hover:text-emerald-400 transition-all"
                >
                  Check {city.name} Rates <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* --- Industrial CTA --- */}
        <div className="mt-24 grid md:grid-cols-2 gap-10 items-center bg-slate-50 p-10 md:p-20 rounded-[4rem] border border-slate-100">
           <div>
              <h2 className="text-4xl font-[1000] italic uppercase text-slate-900 tracking-tighter leading-none mb-6">
                Bulk Disposal <br /> 
                <span className="text-emerald-600">Experts</span>
              </h2>
              <p className="text-slate-500 font-medium text-sm">
                Bhiwadi se Tauru tak, humari logistics team har industrial zone mein fast pickup provide karti hai. Best rates aur transparent weighing ki guarantee.
              </p>
           </div>
           <div className="flex flex-col gap-4">
              <a href="tel:+919813124320" className="flex items-center justify-center gap-4 bg-emerald-600 text-white py-6 rounded-3xl font-black italic uppercase tracking-widest text-sm hover:scale-105 transition-all shadow-xl shadow-emerald-600/20">
                <Phone size={18} fill="currentColor" /> Call: 9813124320
              </a>
              <p className="text-center text-[10px] font-black text-slate-400 uppercase tracking-widest italic">
                Official Partner - AK Plastic Scrap
              </p>
           </div>
        </div>

      </div>
    </main>
  );
}