import { Truck, Recycle, Leaf, MapPin, PhoneCall, CheckCircle2 } from "lucide-react";

export default function RoadWastePage() {
  return (
    <main className="bg-[#F9FAFB] text-gray-800">

      {/* HERO */}
      <section className="bg-gradient-to-br from-emerald-500 to-teal-400 text-white">
        <div className="max-w-7xl mx-auto px-6 py-24 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
            Road Waste Management Service
          </h1>
          <p className="text-lg max-w-3xl mx-auto">
            Professional road waste collection & disposal services for
            municipalities, contractors & industries in Bhiwadi and nearby areas.
          </p>

          <a
            href="tel:9813124320"
            className="inline-flex items-center gap-2 mt-8 px-8 py-4 rounded-full
            bg-white text-emerald-700 font-bold shadow-lg hover:scale-105 transition"
          >
            <PhoneCall size={18} /> Call for Pickup
          </a>
        </div>
      </section>

      {/* CONTENT */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-6">
          Reliable Road Waste Collection & Disposal
        </h2>

        <p className="text-gray-600 text-lg mb-10">
          We provide road waste management services including collection of
          debris, construction waste, soil, plastic waste and mixed garbage.
          Our process follows eco-friendly and government-approved norms.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            "Construction & road debris removal",
            "Municipal road waste handling",
            "Eco-friendly disposal",
            "Fast pickup & transportation",
            "Serving industrial areas",
            "Authorized waste management",
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition"
            >
              <CheckCircle2 className="text-emerald-600 mb-3" />
              <p className="font-semibold">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* AREAS */}
      <section className="bg-emerald-50 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-2xl font-bold mb-4">Areas We Serve</h3>
          <div className="flex flex-wrap gap-4">
            {["Bhiwadi", "Alwar", "Neemrana", "Tapukara"].map((city) => (
              <span
                key={city}
                className="px-5 py-2 bg-white rounded-full shadow flex items-center gap-2"
              >
                <MapPin size={16} className="text-emerald-600" /> {city}
              </span>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
