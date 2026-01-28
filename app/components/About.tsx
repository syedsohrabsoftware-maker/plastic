import Image from "next/image";

export default function About() {
  return (
    <section className="bg-[#F9FFFB] py-20">
      <div className="max-w-7xl mx-auto px-5 grid md:grid-cols-2 gap-14 items-center">

        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 leading-tight">
            Best Plastic Scrap Buyer & Recycling Company <br />
            <span className="text-[#0F766E]">
              in Bhiwadi, Khushkhera, Tapukra & Nearby Areas
            </span>
          </h2>

          <p className="mt-6 text-gray-600 text-sm md:text-base leading-relaxed">
            <strong>AK Plastic Recycling</strong> is a trusted name in plastic
            scrap buying and recycling services. We specialize in collecting,
            processing and recycling all types of plastic scrap from households,
            factories and industrial units.
          </p>

          <p className="mt-4 text-gray-600 text-sm md:text-base leading-relaxed">
            We proudly serve industrial areas such as{" "}
            <strong>
              Bhiwadi, Khushkhera, Tapukra, Faridabad, Kehrani and Bilaspur
            </strong>.
            Our mission is to provide fair pricing, fast pickup and responsible
            recycling solutions that help reduce plastic waste and protect the
            environment.
          </p>

          {/* POINTS */}
          <ul className="mt-6 space-y-3 text-sm text-gray-700">
            <li>✔ ISO-standard digital weighing system</li>
            <li>✔ Same-day & scheduled plastic scrap pickup</li>
            <li>✔ Industrial & bulk plastic scrap specialist</li>
            <li>✔ Eco-friendly recycling & compliance-focused process</li>
          </ul>

          {/* CTA */}
          <div className="mt-8 flex gap-4 flex-wrap">
            <a
              href="tel:9813124320"
              className="px-6 py-3 rounded-full bg-[#0F766E] text-white text-sm font-medium hover:bg-[#115E59] transition"
            >
              📞 Call Scrap Expert
            </a>
            <a
              href="#pickup"
              className="px-6 py-3 rounded-full bg-white border text-sm font-medium hover:bg-gray-50 transition"
            >
              Request Pickup
            </a>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative">
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#D9F99D]/40 rounded-full blur-3xl" />
          <div className="absolute bottom-0 -right-10 w-40 h-40 bg-[#99F6E4]/40 rounded-full blur-3xl" />

          <Image
            src="/images/about-plastic-recycling.webp"
            alt="Plastic Scrap Recycling Company in Bhiwadi and Khushkhera"
            width={520}
            height={420}
            className="relative rounded-3xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
