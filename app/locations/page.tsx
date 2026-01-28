import { notFound } from "next/navigation";

const cities = [
  "delhi",
  "gurgaon",
  "noida",
  "faridabad",
  "ghaziabad",
  "greater-noida",
];

// 🔥 SEO Metadata (per city)
export function generateMetadata({ params }: { params: { city: string } }) {
  const cityName = params.city.replace("-", " ");

  return {
    title: `Plastic Scrap Buyer in ${cityName} | AK Plastic Recycling`,
    description: `AK Plastic Recycling is a trusted plastic scrap buyer in ${cityName}. Get best prices, fast pickup and eco-friendly recycling services.`,
  };
}

export default function CityPage({
  params,
}: {
  params: { city: string };
}) {
  if (!params?.city || !cities.includes(params.city)) {
    return notFound();
  }

  const cityName = params.city.replace("-", " ").toUpperCase();

  return (
    <main className="py-24 max-w-5xl mx-auto px-4">
      <h1 className="text-4xl font-bold mb-6">
        Plastic Scrap Buyer in {cityName}
      </h1>

      <p className="text-gray-700 mb-6 leading-relaxed">
        AK Plastic Recycling is a leading plastic scrap buyer in {cityName}.
        We provide reliable plastic scrap pickup, industrial plastic recycling,
        and bulk scrap buying services at the best market prices.
      </p>

      <h2 className="text-2xl font-semibold mb-3">
        Our Plastic Recycling Services in {cityName}
      </h2>

      <ul className="list-disc ml-6 space-y-2 text-gray-700 mb-8">
        <li>Industrial plastic scrap pickup</li>
        <li>Factory plastic waste recycling</li>
        <li>Bulk plastic scrap buyer</li>
        <li>Government approved recycling process</li>
      </ul>

      <p className="text-gray-700">
        Contact us today for fast pickup and the best price for plastic scrap in{" "}
        {cityName}.
      </p>
    </main>
  );
}
