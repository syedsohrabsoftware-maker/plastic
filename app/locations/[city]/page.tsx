import { notFound } from "next/navigation";

/* ================== ALLOWED SERVICE AREAS ================== */
const cities = [
  "bhiwadi",
  "khushkhera",
  "bhiapur",
  "manesar",
  "gurugram",
  "faridabad",
  "palwal",
  "ballabhgarh",
  "alwar",
];

/* ================== STATIC GENERATION (REQUIRED) ================== */
export function generateStaticParams() {
  return cities.map((city) => ({
    city,
  }));
}

/* ================== SEO METADATA ================== */
export function generateMetadata({
  params,
}: {
  params: { city?: string };
}) {
  if (!params?.city || !cities.includes(params.city)) {
    return {};
  }

  const cityName = params.city.replace(/-/g, " ");

  return {
    title: `Plastic Scrap Buyer in ${cityName} | AK Plastic Recycling`,
    description: `AK Plastic Recycling is a trusted plastic scrap buyer in ${cityName}. We offer fast plastic scrap pickup, best market prices, and eco-friendly recycling services.`,
  };
}

/* ================== PAGE ================== */
export default function CityPage({
  params,
}: {
  params: { city?: string };
}) {
  if (!params?.city || !cities.includes(params.city)) {
    return notFound();
  }

  const cityName = params.city.replace(/-/g, " ").toUpperCase();

  return (
    <main className="py-24 max-w-5xl mx-auto px-4">
      {/* Heading */}
      <h1 className="text-4xl font-bold mb-6 text-gray-900">
        Plastic Scrap Buyer in {cityName}
      </h1>

      {/* Intro */}
      <p className="text-gray-700 mb-6 leading-relaxed">
        AK Plastic Recycling is a reliable plastic scrap buyer in {cityName},
        providing professional plastic scrap pickup and recycling services for
        households, factories, and industrial units. We ensure transparent
        pricing, fast pickup, and eco-friendly recycling practices.
      </p>

      {/* Services */}
      <h2 className="text-2xl font-semibold mb-4 text-gray-900">
        Our Plastic Recycling Services in {cityName}
      </h2>

      <ul className="list-disc ml-6 space-y-2 text-gray-700 mb-8">
        <li>Household plastic scrap pickup</li>
        <li>Industrial & factory plastic waste recycling</li>
        <li>Bulk plastic scrap buying</li>
        <li>Government-compliant recycling process</li>
        <li>Fast pickup with instant payment</li>
      </ul>

      {/* CTA */}
      <p className="text-gray-700 mb-8">
        If you are looking for a trusted plastic scrap buyer in {cityName},
        contact AK Plastic Recycling today for quick pickup and the best market
        rates.
      </p>

      <a
        href="tel:9813124320"
        className="inline-flex items-center justify-center rounded-full bg-[#0F766E] px-8 py-4 text-white font-medium shadow-lg hover:bg-[#115E59] transition"
      >
        📞 Call Now for Scrap Pickup
      </a>
    </main>
  );
}
