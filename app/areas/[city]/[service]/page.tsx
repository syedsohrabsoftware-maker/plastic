import Link from "next/link";
import {
  PhoneCall,
  MapPin,
  CheckCircle2,
  Recycle,
  Truck,
} from "lucide-react";

/* ===============================
   TYPES
================================ */

type Params = {
  city: string;
  service: string;
};

type ServiceInfo = {
  title: string;
  short: string;
};

/* ===============================
   SERVICE CONFIG
================================ */

const SERVICES: Record<string, ServiceInfo> = {
  "plastic-scrap-dealer": {
    title: "Plastic Scrap Dealer",
    short: "plastic scrap buyer & recycling service",
  },
  "iron-scrap-dealer": {
    title: "Iron Scrap Dealer",
    short: "iron scrap buyer & MS scrap dealer",
  },
  "metal-scrap-dealer": {
    title: "Metal Scrap Dealer",
    short: "metal scrap buyer & recycling service",
  },
  "industrial-scrap-buyer": {
    title: "Industrial Scrap Buyer",
    short: "industrial & factory scrap buyer",
  },
  "factory-scrap-buyer": {
    title: "Factory Scrap Buyer",
    short: "factory waste & manufacturing scrap buyer",
  },
  "road-waste-management": {
    title: "Road Waste Management",
    short: "road & construction waste management service",
  },
  "e-waste-scrap-dealer": {
    title: "E-Waste Scrap Dealer",
    short: "electronic waste recycling & disposal",
  },
  "recycling-company": {
    title: "Recycling Company",
    short: "authorized waste recycling company",
  },
};

/* ===============================
   PAGE
================================ */

export default function AreaServicePage({
  params,
}: {
  params: Params;
}) {
  const cityRaw = params.city || "";
  const serviceRaw = params.service || "";

  const city =
    cityRaw.charAt(0).toUpperCase() +
    cityRaw.slice(1).toLowerCase();

  /* ✅ SAFE SERVICE TITLE (NO TS ERROR) */
  const fallbackTitle = serviceRaw
    .split("-")
    .map(
      (segment) =>
        segment.charAt(0).toUpperCase() + segment.slice(1)
    )
    .join(" ");

  const serviceData: ServiceInfo =
    SERVICES[serviceRaw] || {
      title: fallbackTitle,
      short: "scrap buying & recycling service",
    };

  return (
    <main className="bg-[#F9FAFB]">

      {/* ================= HERO ================= */}
      <section className="bg-gradient-to-r from-[#7CCFC2] to-[#BFF1EA] py-24 text-center">
        <span className="inline-block mb-4 px-5 py-2 bg-white rounded-full text-sm font-semibold text-[#064E3B]">
          ♻ Trusted Scrap & Recycling Service
        </span>

        <h1 className="text-4xl md:text-6xl font-extrabold text-[#063F3A]">
          {serviceData.title} in {city}
        </h1>

        <p className="mt-5 text-lg md:text-xl max-w-3xl mx-auto text-[#064E3B]">
          AK Plastic Recycling is a reliable {serviceData.short} in {city}.
          We offer fast pickup, best market rates and eco-friendly recycling.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-5 justify-center">
          <a
            href="tel:9813124320"
            className="inline-flex items-center gap-2 px-10 py-4
            bg-[#0F766E] text-white rounded-full font-bold shadow-lg
            hover:scale-105 transition"
          >
            <PhoneCall size={18} /> Call for Pickup
          </a>

          <a
            href="https://wa.me/919813124320"
            className="inline-flex items-center gap-2 px-10 py-4
            bg-white text-[#0F766E] rounded-full font-bold shadow"
          >
            💬 WhatsApp Now
          </a>
        </div>
      </section>

      {/* ================= WHY US ================= */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-10 text-center">
          Why Choose AK Plastic Recycling in {city}?
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            "Best scrap rates",
            "Fast industrial pickup",
            "Authorized recycling",
            "Eco-friendly process",
            "Serving industries & factories",
            "Trusted local recycler",
          ].map((item) => (
            <div
              key={item}
              className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition"
            >
              <CheckCircle2 className="text-[#0F766E] mb-3" />
              <p className="font-medium text-gray-800">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= SERVICE INFO ================= */}
      <section className="bg-[#E6F7F4] py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-3xl font-bold mb-4">
              {serviceData.title} Services in {city}
            </h3>
            <p className="text-gray-700 leading-relaxed">
              We provide complete {serviceData.short} in {city} including
              scrap pickup, segregation, transparent weighing and
              government-approved recycling.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Feature icon={<Truck />} label="Fast Pickup" />
            <Feature icon={<Recycle />} label="Eco Recycling" />
            <Feature icon={<MapPin />} label="Local Service" />
            <Feature icon={<span>💰</span>} label="Best Rates" />
          </div>
        </div>
      </section>

      {/* ================= INTERNAL LINKS ================= */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-2xl font-bold mb-8">Our Scrap Services</h3>

          <div className="grid md:grid-cols-2 gap-4">
            {Object.entries(SERVICES).map(([slug, data]) => (
              <Link
                key={slug}
                href={`/areas/${cityRaw}/${slug}`}
                className="p-5 rounded-xl border hover:bg-[#F0FDFA] transition font-semibold"
              >
                {data.title} in {city}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="bg-gradient-to-r from-[#0F766E] to-[#064E3B] text-white py-20 text-center">
        <h3 className="text-3xl font-bold mb-4">
          Need {serviceData.title} in {city}?
        </h3>
        <p className="mb-8 opacity-90">
          Call AK Plastic Recycling today for quick pickup & best scrap prices.
        </p>

        <a
          href="tel:9813124320"
          className="inline-block px-12 py-4 bg-white text-[#064E3B]
          rounded-full font-bold shadow-lg"
        >
          📞 Call Now
        </a>
      </section>
    </main>
  );
}

/* ===============================
   SMALL COMPONENT
================================ */

function Feature({
  icon,
  label,
}: {
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <div className="bg-white p-5 rounded-xl shadow text-center">
      <div className="mx-auto text-[#0F766E]">{icon}</div>
      <p className="mt-2 font-semibold">{label}</p>
    </div>
  );
}
