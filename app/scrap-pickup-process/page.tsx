export const metadata = {
  title: "Scrap Pickup Process | AK Plastic Recycling",
  description:
    "Learn how our scrap pickup process works. Simple steps for factory scrap pickup, digital weighing and instant payment in Bhiwadi and nearby areas.",
};

export default function ScrapPickupProcessPage() {
  return (
    <main className="py-24 max-w-5xl mx-auto px-4">
      <h1 className="text-4xl md:text-5xl font-bold mb-6">
        Scrap Pickup Process
      </h1>

      <p className="text-gray-700 mb-10 leading-relaxed">
        AK Plastic Recycling follows a transparent and easy scrap pickup
        process to ensure smooth service for factories, warehouses
        and businesses.
      </p>

      <ol className="space-y-6 text-gray-700 mb-12">
        <li>
          <strong>Step 1:</strong> Call or WhatsApp us to book scrap pickup
        </li>
        <li>
          <strong>Step 2:</strong> Our team visits your location
        </li>
        <li>
          <strong>Step 3:</strong> Scrap is weighed using digital weighing
        </li>
        <li>
          <strong>Step 4:</strong> Instant payment at best market rates
        </li>
        <li>
          <strong>Step 5:</strong> Eco-friendly recycling & disposal
        </li>
      </ol>

      <div className="rounded-3xl border bg-[#F6FFFD] p-8 text-center">
        <h3 className="text-xl font-semibold mb-4">
          Book Scrap Pickup Today
        </h3>

        <p className="text-gray-700 mb-6">
          Get fast scrap pickup service in Bhiwadi, Khushkhera,
          Tapukara and nearby industrial areas.
        </p>

        <a
          href="tel:9813124320"
          className="inline-flex justify-center rounded-full bg-[#0F766E]
          px-10 py-4 text-white font-medium hover:bg-[#115E59]"
        >
          📞 Schedule Scrap Pickup
        </a>
      </div>
    </main>
  );
}
