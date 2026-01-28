import Link from "next/link";

const locations = [
  {
    name: "Bhiwadi",
    slug: "bhiwadi",
    desc: "Industrial plastic scrap pickup & recycling services",
  },
  {
    name: "Khushkhera",
    slug: "khushkhera",
    desc: "Factory scrap buyer & pollution-free recycling",
  },
  {
    name: "Bilaspur",
    slug: "bilaspur",
    desc: "Bulk plastic scrap dealer for industries",
  },
  {
    name: "Manesar",
    slug: "manesar",
    desc: "Industrial waste & plastic recycling solutions",
  },
  {
    name: "Gurugram",
    slug: "gurugram",
    desc: "Commercial & factory scrap pickup",
  },
  {
    name: "Faridabad",
    slug: "faridabad",
    desc: "Plastic scrap dealer & eco recycling",
  },
  {
    name: "Palwal",
    slug: "palwal",
    desc: "Bulk scrap buying & recycling services",
  },
  {
    name: "Ballabhgarh",
    slug: "ballabhgarh",
    desc: "Industrial plastic scrap pickup",
  },
  {
    name: "Alwar",
    slug: "alwar",
    desc: "Plastic scrap buyer in Rajasthan",
  },
];

export const metadata = {
  title: "Plastic Scrap Buyer Locations | AK Plastic Recycling",
  description:
    "Find AK Plastic Recycling services across Bhiwadi, Khushkhera, Alwar, Manesar, Faridabad and nearby industrial areas.",
};

export default function LocationsPage() {
  return (
    <main className="py-24 max-w-7xl mx-auto px-4">
      {/* Heading */}
      <section className="mb-14 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
          Our Service Locations
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          AK Plastic Recycling provides professional plastic scrap pickup and
          recycling services across major industrial locations in Rajasthan and
          Haryana.
        </p>
      </section>

      {/* Locations Grid */}
      <section className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
        {locations.map((loc) => (
          <Link
            key={loc.slug}
            href={`/locations/${loc.slug}`}
            className="block rounded-3xl border p-6 bg-white
            hover:shadow-xl transition"
          >
            <h2 className="text-xl font-semibold mb-2 text-gray-900">
              Scrap Dealer in {loc.name}
            </h2>
            <p className="text-gray-600 text-sm mb-4">{loc.desc}</p>

            <span className="text-[#0F766E] font-medium">
              View services →
            </span>
          </Link>
        ))}
      </section>
    </main>
  );
}
