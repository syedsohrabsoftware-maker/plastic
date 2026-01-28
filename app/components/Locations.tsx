import Link from "next/link";

const locations = [
  { slug: "delhi", name: "Delhi" },
  { slug: "gurgaon", name: "Gurgaon" },
  { slug: "noida", name: "Noida" },
  { slug: "faridabad", name: "Faridabad" },
  { slug: "ghaziabad", name: "Ghaziabad" },
  { slug: "greater-noida", name: "Greater Noida" },
];

export default function Locations() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Plastic Scrap Buyer Near You
        </h2>

        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-10">
          We provide fast plastic scrap pickup and recycling services across major
          cities in Delhi NCR.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {locations.map((city) => (
            <Link
              key={city.slug}
              href={`/locations/${city.slug}`}
              className="border rounded-xl p-5 text-center
              hover:border-emerald-600 hover:text-emerald-600 transition"
            >
              Plastic Scrap Buyer in {city.name}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
