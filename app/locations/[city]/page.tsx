import { notFound } from "next/navigation";

/**
 * ✅ Allowed cities (SEO + routing control)
 * URL must match exactly (lowercase, hyphen-separated)
 */
const cities = [
  "bhiwadi",
  "khushkhera",
  "bilaspur",
  "manesar",
  "gurugram",
  "faridabad",
  "palwal",
  "ballabhgarh",
  "alwar",
];

/**
 * ✅ SEO METADATA (Dynamic, Safe)
 */
export function generateMetadata({
  params,
}: {
  params: { city?: string };
}) {
  const city = params?.city;

  if (!city || !cities.includes(city)) {
    return {
      title: "Location Not Found | AK Plastic Recycling",
    };
  }

  const cityName = city.replace(/-/g, " ");

  return {
    title: `Plastic Scrap Buyer in ${cityName} | AK Plastic Recycling`,
    description: `AK Plastic Recycling is a trusted plastic scrap buyer and recycling company in ${cityName}. We provide fast pickup, best scrap prices and pollution-free recycling services.`,
  };
}

/**
 * ✅ PAGE COMPONENT
 */
export default function LocationPage({
  params,
}: {
  params: { city?: string };
}) {
  const city = params?.city;

  // ❌ Invalid city → 404
  if (!city || !cities.includes(city)) {
    notFound();
  }

  const cityName = city.replace(/-/g, " ");
  const cityUpper = cityName.toUpperCase();

  return (
    <main className="py-24 max-w-6xl mx-auto px-4">
      {/* ================= HERO ================= */}
      <section className="mb-14">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight">
          Plastic Scrap Buyer in {cityUpper}
        </h1>

        <p className="text-gray-700 text-lg leading-relaxed max-w-3xl">
          <strong>AK Plastic Recycling</strong> is a leading plastic scrap buyer
          and recycling company in <strong>{cityName}</strong>. We help factories,
          warehouses and industries keep their premises clean, pollution-free
          and compliant with eco-friendly recycling practices.
        </p>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">
          Our Plastic Scrap Services in {cityName}
        </h2>

        <ul className="grid sm:grid-cols-2 gap-4 text-gray-700">
          <li>✔ Industrial plastic scrap pickup</li>
          <li>✔ Factory waste & rejected material recycling</li>
          <li>✔ Bulk plastic scrap buying</li>
          <li>✔ Pollution-free recycling process</li>
          <li>✔ Digital weighing & instant payment</li>
          <li>✔ Government-compliant recycling</li>
        </ul>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">
          Why Choose AK Plastic Recycling in {cityName}?
        </h2>

        <ul className="space-y-3 text-gray-700">
          <li>✔ Best market prices for plastic scrap</li>
          <li>✔ Same-day pickup from industrial areas</li>
          <li>✔ Experienced and professional team</li>
          <li>✔ Pollution-free factory support</li>
          <li>✔ Trusted by industries across Rajasthan & Haryana</li>
        </ul>
      </section>

      {/* ================= CTA ================= */}
      <section className="rounded-3xl border bg-[#F6FFFD] p-10 text-center">
        <h3 className="text-2xl font-semibold mb-4">
          Need Plastic Scrap Pickup in {cityName}?
        </h3>

        <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
          Contact AK Plastic Recycling today for fast pickup and the best plastic
          scrap rates in {cityName}. We help you keep your factory clean,
          compliant and pollution-free.
        </p>

        <a
          href="tel:9813124320"
          className="inline-flex items-center justify-center rounded-full
          bg-[#0F766E] px-10 py-4 text-white font-medium shadow-lg
          hover:bg-[#115E59] transition"
        >
          📞 Call Now for Scrap Pickup
        </a>
      </section>
    </main>
  );
}
