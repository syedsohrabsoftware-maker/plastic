import Link from "next/link";
import {
  PhoneCall,
  MessageCircle,
  Factory,
  Recycle,
  ShieldCheck,
  MapPin,
} from "lucide-react";

export const metadata = {
  title: "Plastic Scrap Dealer in Bhiwadi | AK Plastic Recycling",
  description:
    "AK Plastic Recycling is the best plastic scrap dealer in Bhiwadi providing factory scrap pickup, plastic recycling and best scrap prices.",
};

export default function AreaPlasticScrapDealerPage() {
  return (
    <main className="bg-white text-[#033]">

      {/* ================= HERO ================= */}
      <section
        className="py-24"
        style={{
          background:
            "linear-gradient(90deg, #7EDAD0 0%, #9EE6DB 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 text-center">
          <span className="inline-block mb-4 px-6 py-2 rounded-full bg-white/70 text-sm font-semibold">
            ♻ Trusted Plastic Scrap & Recycling Service
          </span>

          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
            Plastic Scrap Dealer in Bhiwadi
          </h1>

          <p className="max-w-3xl mx-auto text-lg md:text-xl opacity-90">
            AK Plastic Recycling is a professional plastic scrap dealer in Bhiwadi
            offering fast pickup, best market rates and eco-friendly recycling
            services for industries and factories.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-5 justify-center">
            <a
              href="tel:9813124320"
              className="px-10 py-4 rounded-full bg-[#0F766E]
              text-white font-bold flex items-center gap-2 justify-center
              shadow-lg hover:scale-105 transition"
            >
              <PhoneCall size={20} /> Call for Scrap Pickup
            </a>

            <a
              href="https://wa.me/919813124320"
              className="px-10 py-4 rounded-full bg-white
              text-[#033] font-bold flex items-center gap-2 justify-center
              shadow hover:shadow-lg transition"
            >
              <MessageCircle size={20} /> WhatsApp Now
            </a>
          </div>
        </div>
      </section>

      {/* ================= CONTENT ================= */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6 space-y-20">

          {/* INTRO */}
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Best Plastic Scrap Buyer & Recycler in Bhiwadi
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We buy all types of plastic scrap from factories, warehouses,
              industrial units and commercial facilities in Bhiwadi.
              Our recycling process follows government-approved environmental
              standards ensuring safe and responsible waste management.
            </p>
          </div>

          {/* FEATURES */}
          <div className="grid md:grid-cols-3 gap-10">
            <Feature
              icon={<Factory size={28} />}
              title="Factory Scrap Pickup"
            >
              Fast plastic scrap pickup from Bhiwadi industrial areas including
              Khushkhera, Chopanki, Tapukara and Neemrana.
            </Feature>

            <Feature
              icon={<Recycle size={28} />}
              title="All Types of Plastic Scrap"
            >
              HDPE, LDPE, PP, PVC, PET bottles, drums, pipes and industrial
              plastic waste.
            </Feature>

            <Feature
              icon={<ShieldCheck size={28} />}
              title="Authorized Recycling"
            >
              Pollution-controlled and eco-friendly recycling as per government
              guidelines and documentation.
            </Feature>
          </div>

          {/* AREAS */}
          <div>
            <h2 className="text-3xl font-bold mb-6 text-center">
              Plastic Scrap Pickup Areas Near Bhiwadi
            </h2>

            <div className="flex flex-wrap justify-center gap-4">
              {[
                "Bhiwadi",
                "Khushkhera",
                "Chopanki",
                "Tapukara",
                "Neemrana",
                "Alwar",
              ].map((area) => (
                <span
                  key={area}
                  className="flex items-center gap-2 px-5 py-2
                  rounded-full bg-[#ECFEF7] text-[#0F766E]
                  font-semibold"
                >
                  <MapPin size={16} /> {area}
                </span>
              ))}
            </div>
          </div>

          {/* INTERNAL LINKS */}
          <div>
            <h2 className="text-3xl font-bold mb-6 text-center">
              Other Scrap Dealer Services
            </h2>

            <ul className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto">
              <ServiceLink href="/services/iron-scrap-dealer" label="Iron Scrap Dealer" />
              <ServiceLink href="/services/metal-scrap-dealer" label="Metal Scrap Dealer" />
              <ServiceLink href="/services/e-waste-scrap-dealer" label="E-Waste Scrap Dealer" />
              <ServiceLink href="/services/industrial-scrap-buyer" label="Industrial Scrap Buyer" />
            </ul>
          </div>

          {/* FINAL CTA */}
          <div
            className="rounded-3xl py-16 px-6 text-center text-white"
            style={{
              background:
                "linear-gradient(90deg, #7EDAD0 0%, #9EE6DB 100%)",
            }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#033]">
              Looking for a Plastic Scrap Dealer in Bhiwadi?
            </h2>
            <p className="mb-8 text-[#033]">
              Contact AK Plastic Recycling today for best scrap prices and
              quick pickup service.
            </p>

            <a
              href="tel:9813124320"
              className="inline-flex items-center gap-2
              px-10 py-4 rounded-full bg-[#0F766E]
              text-white font-bold shadow-lg hover:scale-105 transition"
            >
              <PhoneCall /> Call Now
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

/* ================= FEATURE CARD ================= */

function Feature({ icon, title, children }: any) {
  return (
    <div className="bg-white rounded-2xl p-8 shadow
      hover:shadow-xl transition text-center">
      <div className="text-[#0F766E] mb-4 flex justify-center">
        {icon}
      </div>
      <h3 className="font-bold text-xl mb-3">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">
        {children}
      </p>
    </div>
  );
}

function ServiceLink({ href, label }: any) {
  return (
    <li>
      <Link
        href={href}
        className="block px-5 py-4 rounded-xl bg-[#ECFEF7]
        text-[#0F766E] font-semibold hover:bg-[#D1FAE5]
        transition text-center"
      >
        ➜ {label}
      </Link>
    </li>
  );
}
