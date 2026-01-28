import Image from "next/image";

/* ================= SEO SERVICE SCHEMA ================= */
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Plastic Scrap Recycling Services",
  "provider": {
    "@type": "Organization",
    "name": "AK Plastic Recycling",
  },
  "areaServed": {
    "@type": "Place",
    "name": "India",
  },
  "serviceType": [
    "Household Plastic Scrap Pickup",
    "Industrial Plastic Scrap Recycling",
    "Bulk Plastic Scrap Buyer",
  ],
  "description":
    "AK Plastic Recycling provides household and industrial plastic scrap pickup, recycling, and bulk plastic waste management services with eco-friendly processing.",
};

export default function Services() {
  return (
    <section
      id="services"
      className="relative bg-gradient-to-b from-white to-[#F6FFFD] py-20"
    >
      {/* SEO Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ================= HEADER ================= */}
        <header className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block mb-4 px-4 py-1 text-xs font-medium rounded-full bg-[#0F766E]/10 text-[#0F766E]">
            Our Services
          </span>

          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900">
            Professional Plastic Scrap Recycling Services
          </h2>

          <p className="mt-4 text-gray-600 text-sm sm:text-base leading-relaxed">
            AK Plastic Recycling is a trusted plastic scrap buyer offering fast
            pickup, transparent pricing, and eco-friendly recycling solutions
            for households, factories, and industrial units across India.
          </p>
        </header>

        {/* ================= SERVICES GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* ============ HOUSEHOLD SERVICE ============ */}
          <article className="group rounded-3xl border bg-white/80 backdrop-blur p-6 sm:p-8 transition-all duration-300 hover:shadow-2xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-[#0F766E]/10 flex items-center justify-center text-[#0F766E] text-lg font-semibold">
                ♻
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
                Household Plastic Scrap Pickup
              </h3>
            </div>

            <ul className="space-y-3 text-sm sm:text-base text-gray-600 leading-relaxed">
              <li>✔ Plastic bottles, containers & packaging waste</li>
              <li>✔ Old buckets, drums & storage plastics</li>
              <li>✔ Doorstep pickup at your convenience</li>
              <li>✔ Accurate digital weighing & instant payment</li>
              <li>✔ Environment-friendly recycling process</li>
            </ul>

            <div className="mt-8 overflow-hidden rounded-2xl">
              <Image
                src="/images/household-plastic.jpg"
                alt="Household plastic scrap pickup and recycling service"
                width={520}
                height={340}
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </article>

          {/* ============ INDUSTRIAL SERVICE ============ */}
          <article className="group rounded-3xl border bg-white/80 backdrop-blur p-6 sm:p-8 transition-all duration-300 hover:shadow-2xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-[#2563EB]/10 flex items-center justify-center text-[#2563EB] text-lg font-semibold">
                🏭
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
                Industrial & Business Plastic Scrap
              </h3>
            </div>

            <ul className="space-y-3 text-sm sm:text-base text-gray-600 leading-relaxed">
              <li>✔ Injection & blow moulding scrap materials</li>
              <li>✔ Factory plastic waste & rejected products</li>
              <li>✔ Bulk pickup with proper documentation</li>
              <li>✔ Long-term recycling partnerships available</li>
              <li>✔ Government-compliant & responsible recycling</li>
            </ul>

            <div className="mt-8 overflow-hidden rounded-2xl">
              <Image
                src="/images/industrial-plastic.jpg"
                alt="Industrial plastic scrap recycling and bulk pickup service"
                width={520}
                height={340}
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </article>

        </div>

        {/* ================= CTA ================= */}
        <div className="mt-20 text-center">
          <p className="text-gray-700 mb-6 text-sm sm:text-base">
            Looking for a reliable plastic scrap buyer near you?
          </p>
          <a
            href="tel:9813124320"
            className="inline-flex items-center justify-center rounded-full bg-[#0F766E] px-10 py-4 text-white font-medium shadow-lg hover:bg-[#115E59] transition"
          >
            📞 Call Now for Scrap Pickup
          </a>
        </div>

      </div>
    </section>
  );
}
