import {
  MapPin,
  Recycle,
  Truck,
  Star,
  Phone,
  Factory,
  Leaf,
} from "lucide-react";

export const metadata = {
  title:
    "Top Scrap Dealer in Bhiwadi | Pollution-Free Factory Scrap & E-Waste Management",
  description:
    "AK Plastic Recycling is a top scrap dealer and pollution-free e-waste management company in Bhiwadi, Alwar, Khushkhera, Tapukara, Dharuhera & Faridabad. Helping factories stay clean, compliant and zero-waste.",
};

export default function ScrapDealerSEOPage() {
  return (
    <main className="py-24 max-w-5xl mx-auto px-4">
      {/* ================= HERO ================= */}
      <section className="mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight">
          Pollution-Free Scrap Dealer & E-Waste Management Company in Bhiwadi
        </h1>

        <p className="text-gray-700 text-lg leading-relaxed">
          <strong>AK Plastic Recycling</strong> is a trusted name among the{" "}
          <strong>
            top scrap dealers in Bhiwadi, Alwar, Khushkhera, Tapukara, Dharuhera
            and Faridabad
          </strong>
          . We help factories, warehouses and industries keep their premises{" "}
          <strong>pollution-free, clean and compliant</strong> by providing
          professional scrap pickup, plastic recycling and certified e-waste
          management services.
        </p>
      </section>

      {/* ================= CLEAN FACTORY ================= */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
          <Factory className="text-[#0F766E]" /> Keep Your Factory Clean &
          Pollution-Free
        </h2>

        <p className="text-gray-700 leading-relaxed">
          Industrial scrap and unmanaged waste can lead to pollution,
          non-compliance and safety risks. AK Plastic Recycling helps factories
          in Bhiwadi industrial area maintain{" "}
          <strong>clean shop floors, zero-waste zones and pollution-free
          operations</strong>. Our structured scrap removal process ensures your
          factory remains audit-ready and environmentally responsible.
        </p>
      </section>

      {/* ================= AREAS ================= */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
          <MapPin className="text-[#0F766E]" /> Scrap Dealer Services by Location
        </h2>

        <ul className="grid sm:grid-cols-2 gap-4 text-gray-700">
          <li>✔ Scrap Dealer in Bhiwadi Industrial Area</li>
          <li>✔ Scrap Dealer in Khushkhera & Tapukara</li>
          <li>✔ Scrap Dealer in Bilaspur & Dharuhera</li>
          <li>✔ Scrap Dealer in Faridabad & Ballabhgarh</li>
          <li>✔ Scrap Dealer in Alwar, Rajasthan</li>
        </ul>
      </section>

      {/* ================= TOP 5 ================= */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
          <Star className="text-yellow-500" /> Why We Are Among Top 5 Scrap Dealers
          in Bhiwadi
        </h2>

        <ul className="space-y-3 text-gray-700">
          <li>✔ Best market prices for industrial & plastic scrap</li>
          <li>✔ Fast factory scrap pickup with minimal disruption</li>
          <li>✔ Accurate digital weighing & transparent billing</li>
          <li>✔ Pollution-control and compliance-focused recycling</li>
          <li>✔ Trusted by manufacturing units across Rajasthan & Haryana</li>
        </ul>
      </section>

      {/* ================= EWASTE ================= */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
          <Recycle className="text-green-600" /> Certified E-Waste Management &
          Zero-Waste Support
        </h2>

        <p className="text-gray-700 leading-relaxed">
          We are also a reliable{" "}
          <strong>e-waste management company in Bhiwadi, Rajasthan</strong>,
          helping industries safely dispose electronic waste. Our recycling
          practices support{" "}
          <strong>zero-waste manufacturing and pollution-free factories</strong>{" "}
          while meeting environmental guidelines and audit requirements.
        </p>
      </section>

      {/* ================= SCRAP TYPES ================= */}
      <section className="mb-20">
        <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
          <Truck className="text-[#0F766E]" /> Scrap & Waste Materials We Handle
        </h2>

        <ul className="grid sm:grid-cols-2 gap-4 text-gray-700">
          <li>✔ Plastic scrap (industrial & household)</li>
          <li>✔ Factory waste & rejected production material</li>
          <li>✔ E-waste, electrical & electronic scrap</li>
          <li>✔ Bulk scrap from factories & warehouses</li>
        </ul>
      </section>

      {/* ================= GREEN CTA ================= */}
      <section className="rounded-3xl border bg-[#F6FFFD] p-10 text-center">
        <h3 className="text-2xl font-semibold mb-4 flex items-center justify-center gap-2">
          <Leaf className="text-green-600" /> Make Your Factory Pollution-Free
          Today
        </h3>

        <p className="text-gray-700 mb-8">
          Looking for a reliable scrap dealer in Bhiwadi or nearby areas? Contact
          AK Plastic Recycling to keep your factory clean, compliant and
          environmentally responsible.
        </p>

        <a
          href="tel:9813124320"
          className="inline-flex items-center gap-3 justify-center rounded-full bg-[#0F766E]
          px-10 py-4 text-white font-medium shadow-lg hover:bg-[#115E59] transition"
        >
          <Phone size={18} /> Call Now for Scrap Pickup
        </a>
      </section>
    </main>
  );
}
