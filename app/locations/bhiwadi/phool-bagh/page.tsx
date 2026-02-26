import React from "react";
import Script from "next/script";
import { Phone, Truck, ShieldCheck, Zap, Factory, ArrowUpRight } from "lucide-react";

export const metadata = {
  title: "Scrap Buyer in Phool Bagh Bhiwadi | Call +91-9813124320",
  description: "Phool Bagh Bhiwadi's leading industrial scrap buyer. AK Plastic offers best rates for factory waste, MS scrap & plastic. Fast pickup & instant payment.",
  keywords: "Scrap buyer Phool Bagh Bhiwadi, factory waste disposal Phool Bagh, industrial scrap Alwar, AK Plastic Bhiwadi",
};

export default function PhoolBaghPage() {
  const contactNumber = "+919813124320";
  
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "AK Plastic Scrap - Phool Bagh Branch",
    "telephone": contactNumber,
    "url": "https://akplasticscrap.com/locations/bhiwadi/phool-bagh",
    "image": "https://akplasticscrap.com/logo.png", // Replace with your actual logo URL
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Phool Bagh Industrial Area",
      "addressLocality": "Bhiwadi",
      "addressRegion": "Rajasthan",
      "postalCode": "301019",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "28.2055",
      "longitude": "76.8281"
    }
  };

  return (
    <>
      <Script
        id="phool-bagh-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <main className="min-h-screen bg-slate-50">
        {/* HERO SECTION */}
        <section className="bg-gradient-to-r from-[#0F766E] to-[#14B8A6] py-20 px-6 text-center text-white">
          <div className="max-w-4xl mx-auto">
            <span className="bg-white/20 px-4 py-1 rounded-full text-sm font-medium backdrop-blur-sm">
              #1 Scrap Dealer in Phool Bagh
            </span>
            <h1 className="text-4xl md:text-6xl font-black italic uppercase mt-6 tracking-tight">
              Phool Bagh Bhiwadi <br /> Factory Waste Experts
            </h1>
            <p className="mt-6 text-lg md:text-xl text-teal-50 opacity-90 font-medium">
              AK Plastic provide fast, legal, and high-paying scrap disposal services 
              specifically for factories in Phool Bagh Industrial Area.
            </p>
            
            <div className="mt-10 flex flex-col md:flex-row justify-center gap-4">
              <a href={`tel:${contactNumber}`} className="flex items-center justify-center gap-3 bg-white text-[#0F766E] px-8 py-4 rounded-2xl font-black italic shadow-2xl hover:scale-105 transition-transform text-xl">
                <Phone className="w-6 h-6" /> CALL: 98131 24320
              </a>
              <a href="https://wa.me/919813124320" className="flex items-center justify-center gap-3 bg-[#25D366] text-white px-8 py-4 rounded-2xl font-black italic shadow-2xl hover:scale-105 transition-transform text-xl">
                WHATSAPP NOW
              </a>
            </div>
          </div>
        </section>

        {/* FEATURES SECTION */}
        <section className="py-16 px-6 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="bg-teal-100 w-12 h-12 rounded-xl flex items-center justify-center text-teal-700 mb-6">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-800">Fast Response</h3>
              <p className="mt-3 text-slate-600">Phool Bagh local presence ensures team arrival within 2 hours of calling.</p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="bg-teal-100 w-12 h-12 rounded-xl flex items-center justify-center text-teal-700 mb-6">
                <Factory className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-800">Bulk Capacity</h3>
              <p className="mt-3 text-slate-600">Handling 10+ tons of daily waste with professional loaders and trucks.</p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="bg-teal-100 w-12 h-12 rounded-xl flex items-center justify-center text-teal-700 mb-6">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-800">Legal Disposal</h3>
              <p className="mt-3 text-slate-600">Authorized buyer with full documentation and environment-friendly recycling.</p>
            </div>
          </div>
        </section>

        {/* CTA / AREA SECTION */}
        <section className="py-20 bg-slate-900 text-white overflow-hidden relative">
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold">Serving all Units in Phool Bagh & Surroundings</h2>
              <ul className="mt-6 space-y-4">
                {['Industrial Estate Bhiwadi', 'Chopanki Area', 'Khushkhera Belt', 'RIICO Industrial Area'].map((area) => (
                  <li key={area} className="flex items-center gap-3 text-slate-400">
                    <ArrowUpRight className="text-teal-400 w-5 h-5" /> {area}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-teal-800/30 p-8 rounded-3xl border border-teal-500/20 backdrop-blur-sm">
              <h3 className="text-2xl font-black italic">GET A QUOTE TODAY</h3>
              <p className="mt-2 text-teal-200">Send us photos of your scrap on WhatsApp for instant price estimation.</p>
              <a href={`tel:${contactNumber}`} className="mt-6 block text-center bg-teal-500 hover:bg-teal-400 text-white py-4 rounded-xl font-bold transition-colors">
                Contact AK Plastic Now
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}