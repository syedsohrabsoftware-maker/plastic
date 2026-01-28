import Link from "next/link";
import { PhoneCall, MessageCircle, Factory, Recycle, MapPin } from "lucide-react";

export const metadata = {
  title: "Plastic Scrap Dealer in Tapukara | AK Plastic Recycling",
  description:
    "Leading plastic scrap dealer in Tapukara industrial area. Fast scrap pickup, best prices & eco-friendly recycling.",
};

export default function PlasticScrapDealerTapukara() {
  return (
    <main className="bg-white text-[#033]">

      <section className="py-24 bg-gradient-to-r from-[#7EDAD0] to-[#9EE6DB]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <span className="inline-block mb-4 px-6 py-2 rounded-full bg-white/70 font-semibold">
            ♻ Trusted Industrial Scrap Buyer
          </span>

          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
            Plastic Scrap Dealer in Tapukara
          </h1>

          <p className="max-w-3xl mx-auto text-lg opacity-90">
            AK Plastic Recycling provides professional plastic scrap buying
            and recycling services in <strong>Tapukara industrial area</strong>.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-5 justify-center">
            <a href="tel:9813124320" className="px-10 py-4 rounded-full bg-[#0F766E] text-white font-bold flex gap-2 justify-center">
              <PhoneCall /> Call Now
            </a>
            <a href="https://wa.me/919813124320" className="px-10 py-4 rounded-full bg-white font-bold flex gap-2 justify-center">
              <MessageCircle /> WhatsApp
            </a>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6 space-y-16">

          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">
              Plastic Scrap Buyer in Tapukara Industrial Area
            </h2>
            <p className="text-gray-700">
              We serve factories and warehouses in Tapukara with reliable
              scrap pickup, best pricing and pollution-free recycling.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Feature icon={<Factory />} title="Factory Scrap Pickup" />
            <Feature icon={<Recycle />} title="Eco-Friendly Recycling" />
            <Feature icon={<MapPin />} title="Tapukara & Nearby Zones" />
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Related Services</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <Service href="/services/metal-scrap-dealer" label="Metal Scrap Dealer" />
              <Service href="/services/road-waste-management" label="Road Waste Management" />
              <Service href="/services/recycling-company" label="Recycling Company" />
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
