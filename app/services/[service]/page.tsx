import { notFound } from "next/navigation";
import Link from "next/link";
import {
  PhoneCall,
  MapPin,
  CheckCircle2,
  Recycle,
} from "lucide-react";

const SERVICES: Record<string, any> = {
  "plastic-scrap-dealer": {
    title: "Plastic Scrap Dealer",
    desc: "plastic scrap buyer & recycling service",
  },
  "iron-scrap-dealer": {
    title: "Iron Scrap Dealer",
    desc: "iron scrap buyer & ms scrap dealer",
  },
  "metal-scrap-dealer": {
    title: "Metal Scrap Dealer",
    desc: "metal scrap buyer & recycling",
  },
  "industrial-scrap-buyer": {
    title: "Industrial Scrap Buyer",
    desc: "industrial & factory scrap buyer",
  },
  "factory-scrap-buyer": {
    title: "Factory Scrap Buyer",
    desc: "factory waste & manufacturing scrap",
  },
  "road-waste-management": {
    title: "Road Waste Management",
    desc: "road & construction waste services",
  },
  "e-waste-scrap-dealer": {
    title: "E-Waste Scrap Dealer",
    desc: "electronic waste recycling",
  },
  "recycling-company": {
    title: "Recycling Company",
    desc: "authorized waste recycling company",
  },
};

export function generateMetadata({ params }: any) {
  const service = SERVICES[params.service];
  if (!service) return {};

  return {
    title: `${service.title} in Bhiwadi | AK Plastic Recycling`,
    description: `Best ${service.desc} in Bhiwadi, Alwar, Neemrana. Fast pickup & best rates.`,
  };
}

export default function ServicePage({ params }: any) {
  const service = SERVICES[params.service];
  if (!service) notFound();

  return (
    <main className="bg-[#F9FAFB]">

      {/* HERO */}
      <section className="bg-gradient-to-r from-[#7CCFC2] to-[#BFF1EA] py-24 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-[#063F3A]">
          {service.title} in Bhiwadi
        </h1>

        <p className="mt-4 text-lg max-w-3xl mx-auto text-[#064E3B]">
          AK Plastic Recycling is a trusted {service.desc} serving Bhiwadi,
          Alwar, Neemrana & nearby industrial areas.
        </p>

        <a
          href="tel:9813124320"
          className="inline-flex items-center gap-2 mt-8 px-10 py-4
          bg-[#0F766E] text-white rounded-full font-bold"
        >
          <PhoneCall size={18} /> Call Now
        </a>
      </section>

      {/* CONTENT */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-6">
          Why Choose Us for {service.title}?
        </h2>

        <div className="grid md:grid-cols-2 gap-4">
          {[
            "Best market scrap rates",
            "Fast industrial pickup",
            "Authorized recycling process",
            "Serving Bhiwadi & nearby cities",
            "Eco-friendly waste management",
            "Trusted by industries",
          ].map((item, i) => (
            <div key={i} className="flex gap-3 bg-white p-5 rounded-xl shadow">
              <CheckCircle2 className="text-[#0F766E]" />
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* AREAS */}
      <section className="bg-[#E6F7F4] py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-2xl font-bold mb-4">Areas We Serve</h3>
          <div className="flex flex-wrap gap-3">
            {["Bhiwadi", "Alwar", "Neemrana", "Tapukara"].map((city) => (
              <span
                key={city}
                className="px-5 py-2 bg-white rounded-full flex items-center gap-2"
              >
                <MapPin size={14} /> {city}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* INTERNAL LINKS */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h3 className="text-2xl font-bold mb-6">Our Other Services</h3>

        <div className="grid md:grid-cols-2 gap-4">
          {Object.entries(SERVICES).map(([slug, s]: any) => (
            <Link
              key={slug}
              href={`/services/${slug}`}
              className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition"
            >
              {s.title}
            </Link>
          ))}
        </div>
      </section>

    </main>
  );
}
