import Link from "next/link";
import { PhoneCall, MessageCircle, Factory, Recycle, MapPin } from "lucide-react";

export const metadata = {
  title: "Plastic Scrap Dealer in Khushkhera | AK Plastic Recycling",
  description:
    "Best plastic scrap dealer in Khushkhera. AK Plastic Recycling provides fast pickup, best scrap rates and eco-friendly recycling services.",
};

export default function PlasticScrapDealerKhushkhera() {
  return (
    <main className="bg-white text-[#033]">

      {/* HERO */}
      <section className="py-24 bg-gradient-to-r from-[#7EDAD0] to-[#9EE6DB]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <span className="inline-block mb-4 px-6 py-2 rounded-full bg-white/70 font-semibold">
            ♻ Trusted Scrap Recycling Service
          </span>

          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
            Plastic Scrap Dealer in Khushkhera
          </h1>

          <p className="max-w-3xl mx-auto text-lg opacity-90">
            AK Plastic Recycling is a trusted <strong>plastic scrap buyer in Khushkhera</strong>
            offering factory scrap pickup, best market prices and eco-friendly recycling.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-5 justify-center">
            <a
              href="tel:9813124320"
              className="px-10 py-4 rounded-full bg-[#0F766E] text-white font-bold flex items-center gap-2 justify-center shadow-lg"
            >
              <PhoneCall /> Call for Pickup
            </a>
            <a
              href="https://wa.me/919813124320"
              className="px-10 py-4 rounded-full bg-white font-bold flex items-center gap-2 justify-center"
            >
              <MessageCircle /> WhatsApp Now
            </a>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6 space-y-16">

          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">
              Best Plastic Scrap Buyer in Khushkhera
            </h2>
            <p className="text-gray-700">
              We buy all types of plastic scrap from factories, warehouses and
              industries in Khushkhera industrial area with fast pickup and
              transparent weighing.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Feature icon={<Factory />} title="Industrial Scrap Pickup" />
            <Feature icon={<Recycle />} title="All Plastic Scrap Types" />
            <Feature icon={<MapPin />} title="Khushkhera & Nearby Areas" />
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Other Services</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <Service href="/services/iron-scrap-dealer" label="Iron Scrap Dealer" />
              <Service href="/services/e-waste-scrap-dealer" label="E-Waste Scrap Dealer" />
              <Service href="/services/industrial-scrap-buyer" label="Industrial Scrap Buyer" />
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}

function Feature({ icon, title }: any) {
  return (
    <div className="p-8 rounded-2xl shadow text-center">
      <div className="text-[#0F766E] mb-4 flex justify-center">{icon}</div>
      <h3 className="font-bold text-lg">{title}</h3>
    </div>
  );
}

function Service({ href, label }: any) {
  return (
    <Link href={href} className="px-6 py-3 rounded-full bg-[#ECFEF7] font-semibold">
      {label}
    </Link>
  );
}
