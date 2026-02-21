import Script from "next/script";
import type { Metadata } from "next";
import { Factory, Warehouse, Truck, ShieldCheck, Zap, Recycle, Star, Clock, Weight, FileText } from "lucide-react";

/* ================================================================
   ✅ ADVANCED SEO METADATA — Google Rankings ke liye
================================================================ */
export const metadata: Metadata = {
  // Title: Primary keyword + Location + Brand (55-60 chars)
  title: "Industrial Scrap Buyer Bhiwadi | Factory Waste Management | AK Plastic",

  // Description: keyword-rich + CTA (150-160 chars)
  description:
    "AK Plastic — #1 authorized industrial scrap buyer in Bhiwadi, Gurgaon & Delhi NCR. Same-day pickup, GST billing, highest rates for factories & warehouses. Call +91-9813124320.",

  keywords: [
    "industrial scrap buyer Bhiwadi",
    "factory waste management Bhiwadi",
    "scrap dealer Gurgaon",
    "industrial scrap pickup Delhi NCR",
    "factory scrap buyer Rajasthan",
    "plastic scrap buyer manufacturing unit",
    "e-waste buyer Bhiwadi",
    "GST scrap dealer Bhiwadi",
    "bulk scrap pickup Manesar",
    "authorized scrap buyer Faridabad",
  ],

  alternates: {
    canonical: "https://akplasticrecycling.com/industries",
  },

  openGraph: {
    title: "Industrial Scrap Buyer Bhiwadi | AK Plastic Recycling",
    description:
      "Authorized industrial scrap buyers for factories & manufacturing units in Bhiwadi, Gurgaon & Delhi NCR. Same-day pickup, GST billing. Call +91-9813124320.",
    url: "https://akplasticrecycling.com/industries",
    siteName: "AK Plastic Recycling",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://akplasticrecycling.com/og-industries.jpg",
        width: 1200,
        height: 630,
        alt: "AK Plastic — Industrial Scrap Management Bhiwadi",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Industrial Scrap Buyer Bhiwadi | AK Plastic Recycling",
    description: "Same-day scrap pickup for factories, warehouses & manufacturing units. GST billing. Call +91-9813124320.",
    images: ["https://akplasticrecycling.com/og-industries.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
    },
  },

  other: {
    "geo.region": "IN-RJ",
    "geo.placename": "Bhiwadi, Rajasthan",
    "geo.position": "28.2006;76.8561",
    ICBM: "28.2006, 76.8561",
  },
};

/* ================================================================
   DATA
================================================================ */
const industries = [
  {
    name: "Manufacturing Units",
    icon: Factory,
    desc: "Plastic moulding, metal fabrication, rubber — sab kuch handle karte hain.",
    keywords: "manufacturing scrap, factory waste",
  },
  {
    name: "Plastic Processing",
    icon: Recycle,
    desc: "HDPE, LDPE, PVC, PP — har grade ka scrap best rate pe lete hain.",
    keywords: "plastic scrap, HDPE buyer",
  },
  {
    name: "Warehouses & Logistics",
    icon: Warehouse,
    desc: "Packaging waste, pallets, strapping — bulk pickup available.",
    keywords: "warehouse scrap, packaging waste",
  },
  {
    name: "Auto & Engineering",
    icon: Zap,
    desc: "Metal turnings, castings, stampings — industrial grade recovery.",
    keywords: "auto parts scrap, engineering scrap",
  },
  {
    name: "Electronics (E-Waste)",
    icon: ShieldCheck,
    desc: "PCBs, wiring, components — authorized e-waste disposal with certificate.",
    keywords: "e-waste buyer, electronics scrap",
  },
  {
    name: "Packaging & FMCG",
    icon: Truck,
    desc: "Carton, shrink wrap, PET bottles — FMCG factory scrap specialists.",
    keywords: "packaging scrap, FMCG waste",
  },
];

const stats = [
  { value: "500+", label: "Factory Clients", icon: Factory },
  { value: "48hr", label: "Max Pickup Time", icon: Clock },
  { value: "₹2Cr+", label: "Monthly Payouts", icon: Weight },
  { value: "100%", label: "GST Compliant", icon: FileText },
];

const trustPoints = [
  "ISO-Standard Digital Weighing — transparent, tamper-proof",
  "Instant GST Billing & Compliance Documentation",
  "Heavy Logistics — trucks, cranes, labour included",
  "Zero-Waste Green Recycling Certificate",
  "Dedicated Account Manager for bulk clients",
  "Same-day payment via NEFT/RTGS",
];

const faqs = [
  {
    q: "AK Plastic kaun si industries serve karta hai?",
    a: "Hum manufacturing units, plastic processors, warehouses, auto engineering companies, e-waste generators aur FMCG/packaging factories ko serve karte hain Bhiwadi, Gurgaon, Manesar, Faridabad aur poore Delhi NCR mein.",
  },
  {
    q: "Minimum quantity kitni honi chahiye pickup ke liye?",
    a: "500 kg se zyada scrap ke liye hum free pickup provide karte hain. Isse kam ke liye bhi rate discuss ho sakta hai — +91-9813124320 par call karein.",
  },
  {
    q: "Kya GST bill milta hai?",
    a: "Haan, AK Plastic ek registered GST dealer hai. Har transaction ke saath proper GST invoice aur compliance documentation milti hai.",
  },
  {
    q: "Pickup kitni jaldi hoti hai?",
    a: "Emergency pickup 24 ghante mein. Regular scheduling ke liye 48 ghante ka turnaround. Bhiwadi ke local factories ke liye same-day pickup bhi possible hai.",
  },
  {
    q: "Kya e-waste ka authorized disposal certificate milta hai?",
    a: "Haan, electronics (e-waste) ke liye hum authorized certificate provide karte hain jo aapki company ki environmental compliance ke liye zaroor hoga.",
  },
];

/* ================================================================
   PAGE COMPONENT
================================================================ */
export default function IndustriesPage() {

  // ── JSON-LD Structured Data ──────────────────────────────────
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "AK Plastic Recycling",
    description: "Authorized industrial scrap buyer and recycler in Bhiwadi, Rajasthan serving Delhi NCR factories and manufacturing units.",
    url: "https://akplasticrecycling.com",
    telephone: "+91-9813124320",
    email: "info@akplasticrecycling.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Industrial Area",
      addressLocality: "Bhiwadi",
      addressRegion: "Rajasthan",
      postalCode: "301019",
      addressCountry: "IN",
    },
    geo: { "@type": "GeoCoordinates", latitude: 28.2006, longitude: 76.8561 },
    openingHours: "Mo-Sa 09:00-18:00",
    priceRange: "₹₹",
    areaServed: [
      { "@type": "City", name: "Bhiwadi" },
      { "@type": "City", name: "Gurgaon" },
      { "@type": "City", name: "Manesar" },
      { "@type": "City", name: "Faridabad" },
      { "@type": "State", name: "Delhi NCR" },
    ],
    sameAs: [
      "https://wa.me/919813124320",
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Industrial Scrap Management & Pickup",
    provider: {
      "@type": "LocalBusiness",
      name: "AK Plastic Recycling",
      telephone: "+91-9813124320",
    },
    serviceType: "Scrap Metal & Plastic Recycling",
    areaServed: ["Bhiwadi", "Gurgaon", "Manesar", "Faridabad", "Delhi NCR"],
    description: "Same-day industrial scrap pickup for factories, warehouses and manufacturing units with GST billing and highest market rates.",
    offers: {
      "@type": "Offer",
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://akplasticrecycling.com" },
      { "@type": "ListItem", position: 2, name: "Industries We Serve", item: "https://akplasticrecycling.com/industries" },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      {/* ── JSON-LD ── */}
      <Script id="lb-schema"   type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <Script id="svc-schema"  type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <Script id="bc-schema"   type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="faq-schema"  type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <main className="bg-white font-['Inter'] overflow-x-hidden">

        {/* ── BREADCRUMB ── */}
        <nav aria-label="Breadcrumb" className="max-w-6xl mx-auto px-5 pt-6">
          <ol
            className="flex items-center gap-2 text-[11px] text-slate-400 font-bold uppercase tracking-widest"
            itemScope itemType="https://schema.org/BreadcrumbList"
          >
            <li itemScope itemType="https://schema.org/ListItem" itemProp="itemListElement">
              <a href="/" itemProp="item" className="hover:text-slate-700 transition-colors">
                <span itemProp="name">Home</span>
              </a>
              <meta itemProp="position" content="1" />
            </li>
            <li aria-hidden="true" className="text-slate-200">›</li>
            <li itemScope itemType="https://schema.org/ListItem" itemProp="itemListElement">
              <span itemProp="name" className="text-slate-600">Industries We Serve</span>
              <meta itemProp="position" content="2" />
            </li>
          </ol>
        </nav>

        {/* ── HERO ── */}
        <header className="py-20 md:py-28 text-center px-5 relative overflow-hidden">
          {/* bg texture */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,#d1fae520,transparent)] pointer-events-none" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0fdf408_1px,transparent_1px),linear-gradient(to_bottom,#f0fdf408_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none" />

          <div className="relative max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 text-emerald-700 rounded-2xl border border-emerald-100 mb-6">
              <Star className="w-3 h-3 fill-emerald-500 text-emerald-500" />
              <span className="text-[10px] font-black uppercase tracking-[0.25em] italic">
                Bhiwadi &amp; Delhi NCR Ka #1 Industrial Scrap Partner
              </span>
            </div>

            <h1 className="text-4xl md:text-7xl font-[1000] text-slate-900 tracking-tighter italic uppercase leading-none mb-6">
              Industries{" "}
              <span className="text-[#0F766E]">We Serve</span>
            </h1>

            <p className="text-slate-500 text-sm md:text-base max-w-2xl mx-auto leading-relaxed mb-8">
              AK Plastic Recycling is the <strong className="text-slate-800">authorized industrial scrap partner</strong> for 500+ factories in{" "}
              <strong className="text-slate-800">Bhiwadi, Gurgaon, Manesar, Faridabad &amp; Delhi NCR</strong>.
              Same-day pickup · GST billing · Highest rates guaranteed.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href="tel:+919813124320"
                aria-label="Call AK Plastic Recycling for industrial scrap pickup"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#0F766E] text-white rounded-2xl font-black uppercase tracking-widest text-[11px] italic hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-200 active:scale-95"
              >
                📞 Call: +91 9813124320
              </a>
              <a
                href="https://wa.me/919813124320"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-slate-800 rounded-2xl border border-slate-200 font-black uppercase tracking-widest text-[11px] italic hover:bg-slate-50 transition-all"
              >
                💬 WhatsApp Quote
              </a>
            </div>
          </div>
        </header>

        {/* ── STATS STRIP ── */}
        <section aria-label="Company statistics" className="bg-slate-900 py-10">
          <div className="max-w-5xl mx-auto px-5 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((s, i) => (
              <div key={i}>
                <div className="text-2xl md:text-4xl font-[1000] text-emerald-400 italic tracking-tighter">{s.value}</div>
                <div className="text-[10px] text-slate-400 font-black uppercase tracking-widest mt-1 italic">{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── INTRO PARAGRAPH (keyword-rich for SEO) ── */}
        <section className="max-w-4xl mx-auto px-5 py-14 text-center">
          <h2 className="text-2xl font-[1000] text-slate-900 italic uppercase tracking-tighter mb-4">
            Bhiwadi Mein Industrial Scrap Management
          </h2>
          <p className="text-slate-500 text-sm leading-relaxed">
            Aapki factory ya warehouse mein jo bhi scrap generate hota hai —{" "}
            <strong className="text-slate-800">metal, plastic, e-waste, packaging waste</strong> — hum sab uthate hain.
            Bhiwadi Industrial Area, Tapukara, Khuskhera, Neemrana, Bhiwadi Phase-I/II/III, aur{" "}
            <strong className="text-slate-800">Gurgaon-Manesar corridor</strong> ke tamam factories humare regular clients hain.
            Ek call mein <strong className="text-slate-800">free site visit, instant quote, aur same-day pickup</strong> arrange ho jaata hai.
          </p>
        </section>

        {/* ── INDUSTRY GRID ── */}
        <section
          aria-labelledby="industries-heading"
          className="max-w-6xl mx-auto px-5 pb-20"
          itemScope itemType="https://schema.org/ItemList"
        >
          <h2 id="industries-heading" className="sr-only">
            Industries served by AK Plastic Recycling — Bhiwadi
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((item, idx) => {
              const Icon = item.icon;
              return (
                <article
                  key={idx}
                  className="group p-8 rounded-[2.5rem] border border-slate-100 bg-white hover:shadow-2xl hover:shadow-emerald-100/60 hover:-translate-y-1 transition-all duration-300"
                  itemScope itemType="https://schema.org/Service"
                >
                  <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-[#0F766E] flex items-center justify-center mb-6 group-hover:bg-[#0F766E] group-hover:text-white transition-colors shadow-sm">
                    <Icon className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-black text-slate-900 italic uppercase tracking-tight mb-2" itemProp="name">
                    {item.name}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed mb-3" itemProp="description">
                    {item.desc}
                  </p>
                  <span className="text-[9px] text-emerald-600 font-black uppercase tracking-widest italic">
                    {item.keywords}
                  </span>
                  <meta itemProp="areaServed" content="Bhiwadi, Delhi NCR" />
                  <meta itemProp="provider" content="AK Plastic Recycling" />
                </article>
              );
            })}
          </div>
        </section>

        {/* ── WHY TRUST SECTION ── */}
        <section
          aria-labelledby="trust-heading"
          className="bg-slate-900 py-20 px-5 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-500/5 blur-[100px] rounded-full pointer-events-none" />

          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center relative">
            <div>
              <p className="text-emerald-400 text-[10px] font-black uppercase tracking-[0.3em] italic mb-4">
                Trust Protocol
              </p>
              <h2
                id="trust-heading"
                className="text-3xl md:text-5xl font-[1000] italic uppercase tracking-tighter text-white mb-8 leading-tight"
              >
                Corporate Units Kyun Chunte Hain{" "}
                <span className="text-emerald-400">AK Plastic?</span>
              </h2>
              <ul className="space-y-5" role="list">
                {trustPoints.map((point, i) => (
                  <li key={i} className="flex items-start gap-4 text-sm text-slate-300 font-medium leading-relaxed">
                    <span className="mt-0.5 w-5 h-5 flex-shrink-0 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-[9px] font-black">
                      ✔
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact card */}
            <div className="bg-white/5 border border-white/10 p-8 rounded-[3rem] backdrop-blur-sm">
              <p className="text-emerald-400 text-[10px] font-black uppercase tracking-[0.3em] mb-2 italic text-center">
                Industrial Pickup Request
              </p>
              <h3 className="text-center text-white text-lg font-bold italic mb-2 uppercase">
                Free Site Visit + Instant Quote
              </h3>
              <p className="text-center text-slate-400 text-xs mb-8 font-medium">
                500 KG se zyada scrap? Call karo — aaj hi rate fix hoga.
              </p>
              <div className="space-y-3">
                <a
                  href="tel:+919813124320"
                  aria-label="Call AK Plastic for industrial scrap pickup"
                  className="flex items-center justify-center gap-3 w-full py-4 rounded-2xl bg-emerald-500 text-white font-[1000] uppercase italic tracking-widest text-xs hover:bg-emerald-600 transition-all shadow-xl shadow-emerald-500/20 active:scale-95"
                >
                  📞 +91 98131 24320
                </a>
                <a
                  href="https://wa.me/919813124320?text=Mujhe%20industrial%20scrap%20pickup%20ke%20liye%20quote%20chahiye"
                  className="flex items-center justify-center gap-3 w-full py-4 rounded-2xl bg-white/10 border border-white/20 text-white font-[1000] uppercase italic tracking-widest text-xs hover:bg-white/20 transition-all active:scale-95"
                >
                  💬 WhatsApp Quote
                </a>
              </div>
              <p className="text-center text-slate-500 text-[10px] mt-4 font-mono">
                Mon–Sat · 9 AM – 6 PM · Response within 2 hrs
              </p>
            </div>
          </div>
        </section>

        {/* ── SERVICE AREAS (local SEO) ── */}
        <section aria-labelledby="areas-heading" className="max-w-5xl mx-auto px-5 py-16 text-center">
          <h2 id="areas-heading" className="text-xl font-black text-slate-900 italic uppercase tracking-tighter mb-4">
            Hamare Service Areas
          </h2>
          <p className="text-slate-500 text-sm mb-6">
            Hum in sabhi industrial zones mein scrap pickup provide karte hain:
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {[
              "Bhiwadi Phase I", "Bhiwadi Phase II", "Bhiwadi Phase III",
              "Tapukara", "Khuskhera", "Neemrana", "Dharuhera",
              "Gurgaon", "Manesar", "IMT Manesar", "Faridabad",
              "Rewari", "Alwar", "Delhi NCR",
            ].map((area, i) => (
              <span
                key={i}
                className="px-3 py-1.5 bg-emerald-50 text-emerald-700 rounded-xl text-[11px] font-bold border border-emerald-100 uppercase tracking-wide"
              >
                {area}
              </span>
            ))}
          </div>
        </section>

        {/* ── FAQ SECTION ── */}
        <section
          aria-labelledby="faq-heading"
          className="max-w-3xl mx-auto px-5 pb-20"
          itemScope itemType="https://schema.org/FAQPage"
        >
          <h2
            id="faq-heading"
            className="text-2xl font-[1000] text-slate-900 italic uppercase tracking-tighter mb-8 text-center"
          >
            Aksar Pooche Jaane Wale Sawaal
          </h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <details
                key={i}
                className="group bg-white border border-slate-100 rounded-2xl px-6 py-5 hover:border-emerald-200 transition-colors"
                itemScope itemProp="mainEntity" itemType="https://schema.org/Question"
              >
                <summary
                  className="font-bold text-slate-800 cursor-pointer list-none flex justify-between items-center text-sm"
                  itemProp="name"
                >
                  {faq.q}
                  <span className="text-slate-300 ml-4 group-open:rotate-180 transition-transform duration-200 flex-shrink-0">▾</span>
                </summary>
                <div
                  className="mt-3 text-slate-500 text-sm leading-relaxed"
                  itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer"
                >
                  <span itemProp="text">{faq.a}</span>
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* ── BOTTOM CTA ── */}
        <section className="bg-[#0F766E] py-16 px-5 text-center">
          <h2 className="text-2xl md:text-4xl font-[1000] text-white italic uppercase tracking-tighter mb-3">
            Ready Hai? Abhi Call Karo
          </h2>
          <p className="text-emerald-100 text-sm mb-8 max-w-md mx-auto">
            Factory scrap ka best rate paane ke liye aaj hi humse baat karo.
            Free site visit, instant quote, same-day pickup.
          </p>
          <a
            href="tel:+919813124320"
            aria-label="Call AK Plastic Recycling now"
            className="inline-flex items-center gap-2 px-10 py-5 bg-white text-[#0F766E] rounded-2xl font-black uppercase tracking-widest text-sm italic hover:bg-emerald-50 transition-all shadow-2xl active:scale-95"
          >
            📞 +91 9813124320
          </a>
        </section>

        {/* ── FOOTER DISCLAIMER (E-E-A-T) ── */}
        <footer className="max-w-4xl mx-auto px-5 py-10 text-center">
          <p className="text-slate-400 text-xs leading-relaxed">
            AK Plastic Recycling — Registered scrap dealer serving Bhiwadi, Rajasthan since 2010. GST registered · ISO compliant · Authorized e-waste recycler.
          </p>
          <p className="text-slate-300 text-[10px] mt-2 uppercase tracking-widest font-bold">
            Bhiwadi · Tapukara · Khuskhera · Neemrana · Dharuhera · Gurgaon · Manesar · Faridabad · Delhi NCR
          </p>
        </footer>

      </main>
    </>
  );
}