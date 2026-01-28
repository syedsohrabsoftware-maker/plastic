import {
  CheckCircle2,
  Truck,
  Recycle,
  ShieldCheck,
  PlayCircle,
} from "lucide-react";

export default function VideoSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-[#ECFEF7] via-white to-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid gap-14 lg:grid-cols-2 items-center">

          {/* ================= TEXT ================= */}
          <div>
            <span className="inline-flex items-center gap-2 mb-4 px-4 py-1
              rounded-full bg-emerald-100 text-emerald-700 text-sm font-semibold">
              <Recycle size={14} /> Our Recycling Process
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5 leading-tight">
              How We Recycle Plastic Scrap <br className="hidden sm:block" />
              Responsibly & Safely
            </h2>

            <p className="text-gray-600 mb-8 leading-relaxed max-w-xl">
              At <strong>AK Plastic Recycling</strong>, we follow a government-approved,
              eco-friendly plastic recycling process. From pickup to final processing,
              every step is transparent, efficient, and environmentally responsible.
            </p>

            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start gap-3">
                <Truck className="text-emerald-600 mt-0.5" size={20} />
                <span>Fast scrap pickup from factories & warehouses</span>
              </li>
              <li className="flex items-start gap-3">
                <Recycle className="text-emerald-600 mt-0.5" size={20} />
                <span>Scientific plastic segregation & processing</span>
              </li>
              <li className="flex items-start gap-3">
                <ShieldCheck className="text-emerald-600 mt-0.5" size={20} />
                <span>Eco-friendly & pollution-controlled recycling practices</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="text-emerald-600 mt-0.5" size={20} />
                <span>Trusted by industries across India</span>
              </li>
            </ul>
          </div>

          {/* ================= VIDEO ================= */}
          <div className="relative group rounded-3xl overflow-hidden
            shadow-xl bg-black/5 backdrop-blur">

            {/* Play badge */}
            <div className="absolute z-10 inset-0 flex items-center justify-center
              pointer-events-none">
              <PlayCircle
                size={64}
                className="text-white/90 drop-shadow-lg
                group-hover:scale-110 transition-transform"
              />
            </div>

            <iframe
              className="w-full h-full aspect-video"
              src="https://www.youtube.com/embed/c9SBAt-hSzU"
              title="Plastic Recycling Process by AK Plastic Recycling"
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
