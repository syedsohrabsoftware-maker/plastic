export const metadata = {
  title: "Industries We Serve | AK Plastic Recycling",
  description:
    "AK Plastic Recycling provides scrap pickup and recycling services for factories, warehouses, manufacturing units and industries in Bhiwadi and nearby areas.",
};

export default function IndustriesPage() {
  return (
    <main className="py-24 max-w-5xl mx-auto px-4">
      <h1 className="text-4xl md:text-5xl font-bold mb-6">
        Industries We Serve
      </h1>

      <p className="text-gray-700 mb-10 leading-relaxed">
        AK Plastic Recycling works with a wide range of industries,
        helping them manage scrap, industrial waste and recycling
        in a clean, safe and compliant manner.
      </p>

      <ul className="grid sm:grid-cols-2 gap-6 text-gray-700 mb-12">
        <li>✔ Manufacturing Units</li>
        <li>✔ Plastic Processing Factories</li>
        <li>✔ Warehouses & Storage Facilities</li>
        <li>✔ Auto Parts & Engineering Units</li>
        <li>✔ Electronics & E-Waste Generators</li>
        <li>✔ Packaging & FMCG Industries</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4">
        Why Industries Trust AK Plastic Recycling
      </h2>

      <ul className="list-disc ml-6 space-y-2 text-gray-700 mb-10">
        <li>Transparent pricing & digital weighing</li>
        <li>Fast industrial scrap pickup</li>
        <li>Government-compliant recycling</li>
        <li>Long-term scrap management solutions</li>
      </ul>

      <div className="rounded-3xl border bg-[#F6FFFD] p-8 text-center">
        <p className="text-gray-700 mb-6">
          Looking for a reliable scrap dealer for your industry?
        </p>

        <a
          href="tel:9813124320"
          className="inline-flex justify-center rounded-full bg-[#0F766E]
          px-10 py-4 text-white font-medium hover:bg-[#115E59]"
        >
          📞 Contact Our Industrial Scrap Team
        </a>
      </div>
    </main>
  );
}
