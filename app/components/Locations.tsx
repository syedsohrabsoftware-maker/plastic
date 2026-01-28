import {
  MapPin,
  PhoneCall,
  MessageCircle,
} from "lucide-react";

/* ===============================
   LOCATIONS CONFIG
================================ */

const locations = [
  {
    slug: "delhi",
    name: "Delhi",
    map: "https://maps.google.com/?q=Delhi",
  },
  {
    slug: "gurgaon",
    name: "Gurgaon",
    map: "https://maps.google.com/?q=Gurgaon",
  },
  {
    slug: "noida",
    name: "Noida",
    map: "https://maps.google.com/?q=Noida",
  },
  {
    slug: "faridabad",
    name: "Faridabad",
    map: "https://maps.google.com/?q=Faridabad",
  },
  {
    slug: "ghaziabad",
    name: "Ghaziabad",
    map: "https://maps.google.com/?q=Ghaziabad",
  },
  {
    slug: "greater-noida",
    name: "Greater Noida",
    map: "https://maps.google.com/?q=Greater+Noida",
  },
];

const PHONE = "9813124320";
const WHATSAPP = "919813124320";

/* ===============================
   COMPONENT
================================ */

export default function Locations() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-[#ECFEF7]">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADING */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Plastic Scrap Buyer Near You
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto mt-4">
            We provide fast plastic scrap pickup and recycling services across
            major cities in <strong>Delhi NCR</strong>.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {locations.map((city) => (
            <div
              key={city.slug}
              className="group bg-white rounded-2xl p-6 shadow
              hover:shadow-xl transition-all"
            >
              {/* CITY */}
              <div className="flex items-center justify-center gap-2 mb-4">
                <MapPin className="text-emerald-600" />
                <h3 className="text-lg font-semibold text-gray-900">
                  {city.name}
                </h3>
              </div>

              <p className="text-sm text-gray-600 mb-6 text-center">
                Plastic Scrap Buyer & Recycling Services in {city.name}
              </p>

              {/* ACTIONS */}
              <div className="flex gap-3">
                {/* MAP */}
                <a
                  href={city.map}
                  target="_blank"
                  className="flex-1 inline-flex items-center justify-center gap-2
                  px-4 py-2 rounded-xl border border-emerald-200
                  text-emerald-700 font-semibold
                  hover:bg-emerald-50 transition"
                >
                  <MapPin size={16} /> Map
                </a>

                {/* CALL */}
                <a
                  href={`tel:${PHONE}`}
                  className="flex-1 inline-flex items-center justify-center gap-2
                  px-4 py-2 rounded-xl bg-gradient-to-r
                  from-emerald-500 to-green-600
                  text-white font-semibold hover:scale-105 transition"
                >
                  <PhoneCall size={16} /> Call
                </a>

                {/* WHATSAPP */}
                <a
                  href={`https://wa.me/${WHATSAPP}`}
                  target="_blank"
                  className="flex-1 inline-flex items-center justify-center gap-2
                  px-4 py-2 rounded-xl bg-white border
                  font-semibold text-gray-800
                  hover:bg-gray-50 transition"
                >
                  <MessageCircle size={16} /> WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
