import Image from "next/image";

export default function VideoSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-emerald-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          {/* TEXT */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-emerald-700 mb-2">
              Our Process
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How We Recycle Plastic Scrap Responsibly
            </h2>

            <p className="text-gray-600 mb-6 leading-relaxed">
              At AK Plastic Recycling, we follow an eco-friendly and government-approved
              plastic recycling process. From scrap collection to final processing,
              every step is handled with care, transparency, and efficiency.
            </p>

            <ul className="space-y-3 text-gray-700">
              <li>✔ Fast scrap pickup from factories & warehouses</li>
              <li>✔ Scientific plastic segregation & processing</li>
              <li>✔ Eco-friendly recycling practices</li>
              <li>✔ Trusted by industries across India</li>
            </ul>
          </div>

          {/* VIDEO */}
          <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/watch?v=c9SBAt-hSzU"
              title="Plastic Recycling Process"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}
