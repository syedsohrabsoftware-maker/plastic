import { Phone, MapPin, Mail, Clock } from "lucide-react";

export default function Contact() {
  return (
    <main className="bg-gradient-to-b from-white to-[#F6FFFD] py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">

        {/* ================= HEADER ================= */}
        <header className="text-center mb-16">
          <span className="inline-block mb-4 px-4 py-1 text-xs font-medium rounded-full bg-[#0F766E]/10 text-[#0F766E]">
            Get in Touch
          </span>

          <h1 className="text-3xl sm:text-4xl font-semibold text-gray-900">
            Contact AK Plastic Recycling
          </h1>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
            Looking for a reliable plastic scrap buyer in Bhiwadi and nearby
            areas? Contact us today for fast pickup, transparent pricing, and
            eco-friendly recycling solutions.
          </p>
        </header>

        {/* ================= CONTACT CARDS ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* ===== Address ===== */}
          <div className="rounded-3xl border bg-white p-8 shadow-sm hover:shadow-lg transition">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-[#0F766E]/10 flex items-center justify-center text-[#0F766E]">
                <MapPin size={22} />
              </div>
              <h2 className="text-xl font-semibold text-gray-900">
                Our Location
              </h2>
            </div>

            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              <strong>AK Plastic Recycling</strong> <br />
              Godown Area, Bhiwadi <br />
              Mansa Chowk, Rajasthan <br />
              PIN Code: <strong>301019</strong>
            </p>

            <a
              href="https://www.google.com/maps/search/?api=1&query=Bhiwadi+Chundhika+301019"
              target="_blank"
              className="inline-block mt-6 text-sm font-medium text-[#0F766E] hover:underline"
            >
              📍 View on Google Maps
            </a>
          </div>

          {/* ===== Contact Info ===== */}
          <div className="rounded-3xl border bg-white p-8 shadow-sm hover:shadow-lg transition">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-[#2563EB]/10 flex items-center justify-center text-[#2563EB]">
                <Phone size={22} />
              </div>
              <h2 className="text-xl font-semibold text-gray-900">
                Contact Details
              </h2>
            </div>

            <ul className="space-y-4 text-sm sm:text-base text-gray-700">
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-[#0F766E]" />
                <a
                  href="tel:9813124320"
                  className="font-medium hover:underline"
                >
                  +91 98131 24320
                </a>
              </li>

              <li className="flex items-center gap-3">
                <Clock size={18} className="text-[#0F766E]" />
                <span>Monday – Saturday: 9:00 AM – 7:00 PM</span>
              </li>
            </ul>

            {/* CTA */}
            <div className="mt-8">
              <a
                href="tel:9813124320"
                className="inline-flex items-center justify-center rounded-full bg-[#0F766E]
                px-8 py-4 text-white font-medium shadow-lg hover:bg-[#115E59] transition"
              >
                📞 Call for Scrap Pickup
              </a>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
