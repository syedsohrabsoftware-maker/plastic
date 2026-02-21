import Script from "next/script"; // ✅ Next.js optimized script tag

export const metadata = {
  title: "Industrial Factory Waste Disposal in Bhiwadi | Call +91-9813124320",
  description: "Authorized factory waste disposal services in Bhiwadi. We handle industrial scrap with full compliance. Call AK Plastic Scrap at +91-9813124320 for best rates.",
  keywords: "factory waste Bhiwadi, industrial scrap disposal Alwar, scrap pickup Bhiwadi factories",
  other: {
    "telephone": "+919813124320",
    "contact-number": "+919813124320",
  }
};

export default function FactoryWastePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "AK Plastic Scrap",
    "telephone": "+919813124320",
    "url": "https://akplasticscrap.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Mansa Chowk, Industrial Area",
      "addressLocality": "Bhiwadi",
      "addressRegion": "Rajasthan",
      "postalCode": "301019",
      "addressCountry": "IN"
    }
  };

  return (
    <>
      {/* ✅ Google bot will read this and show your number in Search Results */}
      <Script
        id="factory-waste-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <main>
        {/* Aapka Page Content Yahan Aayega */}
        <section className="py-20">
           <h1 className="text-4xl font-bold italic uppercase">Factory Waste Disposal in Bhiwadi</h1>
           <p className="mt-4">Authorized scrap buyer for all types of industrial waste.</p>
           <a href="tel:+919813124320" className="mt-6 inline-block bg-[#0F766E] text-white px-8 py-4 rounded-2xl font-black italic shadow-xl">
             📞 CALL NOW: +91 98131 24320
           </a>
        </section>
      </main>
    </>
  );
}