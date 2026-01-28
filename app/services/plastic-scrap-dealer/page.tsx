import Link from "next/link";
import {
  Recycle,
  PhoneCall,
  MapPin,
  CheckCircle2,
  Truck,
  Leaf,
  IndianRupee,
} from "lucide-react";

export default function PlasticScrapDealerPage() {
  return (
    <main className="bg-white text-gray-800">

      {/* HERO – MINT THEME */}
      <section
        className="relative overflow-hidden"
        style={{
          background:
            "linear-gradient(90deg, #7CCFC2 0%, #9EE3DB 50%, #BFF1EA 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 py-28 text-center">

          {/* PILL */}
          <div className="inline-flex items-center gap-2 px-5 py-2 mb-8
            rounded-full bg-white/80 backdrop-blur text-sm font-semibold
            text-[#0F766E] shadow">
            <Recycle size={16} />
            Trusted Plastic Scrap & Recycling Service
          </div>

          {/* TITLE */}
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6
            text-[#063F3A] leading-tight">
            Plastic Scrap Buyer in Bhiwadi
          </h1>

          {/* SUBTITLE */}
          <p className="text-lg md:text-xl max-w-3xl mx-auto
            text-[#064E3B]/90">
            AK Plastic Recycling is a professional plastic scrap buyer serving
            Bhiwadi, Alwar, Khushkhera & Tapukara with fast pickup,
            best market rates and eco-friendly recycling.
          </p>

          {/* CTA */}
          <div className="mt-12 flex flex-col sm:flex-row gap-5 justify-center">
            <a
              href="tel:9813124320"
              className="inline-flex items-center gap-2 px-10 py-4
              rounded-full bg-[#0F766E] text-white font-bold shadow-xl
              hover:scale-105 transition"
            >
              <PhoneCall size={18} /> Call for Scrap Pickup
            </a>

            <a
              href="#pickup-form"
              className="inline-flex items-center gap-2 px-10 py-4
              rounded-full bg-white text-[#063F3A] font-bold shadow
              hover:bg-gray-50 transition"
            >
              Request Pickup Online
            </a>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: <IndianRupee />, text: "Best Plastic Scrap Rates" },
            { icon: <Truck />, text: "Fast Factory Pickup" },
            { icon: <Leaf />, text: "Eco-Friendly Recycling" },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 shadow
              hover:shadow-xl hover:-translate-y-1 transition"
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center
                bg-[#E6F7F4] text-[#0F766E] mb-4">
                {item.icon}
              </div>
              <p className="font-semibold text-lg">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TYPES */}
      <section className="bg-[#F4FBFA] py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-[#063F3A]">
            Types of Plastic Scrap We Buy
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              "HDPE Plastic Scrap",
              "LDPE Plastic Scrap",
              "PP Plastic Scrap",
              "PVC Plastic Scrap",
              "PET Bottle Scrap",
              "Plastic Drum & Barrel Scrap",
              "Industrial Plastic Waste",
              "Mixed Plastic Scrap",
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-3 bg-white px-5 py-4
                rounded-xl shadow-sm hover:shadow transition"
              >
                <CheckCircle2 className="text-[#0F766E]" size={20} />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AREAS */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[#063F3A]">
          Areas We Serve
        </h2>

        <div className="flex flex-wrap gap-4">
          {["Bhiwadi", "Alwar", "Neemrana", "Tapukara", "Khushkhera"].map(
            (area, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-2 px-6 py-2
                rounded-full bg-[#E6F7F4] text-[#063F3A] font-medium"
              >
                <MapPin size={16} className="text-[#0F766E]" />
                {area}
              </span>
            )
          )}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-[#0F766E] py-20 text-white text-center">
        <h2 className="text-4xl font-extrabold mb-4">
          Looking for a Plastic Scrap Buyer?
        </h2>
        <p className="mb-8 text-lg opacity-95">
          Get best rates and quick pickup today.
        </p>

        <a
          href="tel:9813124320"
          className="inline-flex items-center gap-2 px-10 py-4
          rounded-full bg-white text-[#0F766E] font-bold shadow-xl
          hover:scale-105 transition"
        >
          <PhoneCall size={20} /> Call Now
        </a>
      </section>

    </main>
  );
}
