"use client";

import { Leaf, Truck, IndianRupee, ShieldCheck } from "lucide-react";

const reasons = [
  {
    title: "Best Price Assurance",
    desc: "We offer the most competitive market rates for all types of plastic scrap with transparent pricing.",
    icon: <IndianRupee size={22} />,
  },
  {
    title: "Fast & Reliable Pickup",
    desc: "Our logistics team ensures timely scrap pickup from factories, warehouses, and industrial units.",
    icon: <Truck size={22} />,
  },
  {
    title: "Eco-Friendly Recycling",
    desc: "We follow sustainable and government-approved recycling processes to protect the environment.",
    icon: <Leaf size={22} />,
  },
  {
    title: "Trusted & Certified",
    desc: "Years of experience and trusted by multiple industries for ethical plastic recycling services.",
    icon: <ShieldCheck size={22} />,
  },
];

export default function WhyChooseUs() {
  return (
    <section
      id="why-choose-us"
      className="py-24 bg-gradient-to-b from-white to-emerald-50"
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* SEO Heading */}
        <div className="text-center mb-14">
          <p className="text-sm font-semibold uppercase tracking-widest text-emerald-700">
            Why Choose Us
          </p>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-gray-900">
            Trusted Plastic Recycling Company in India
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-gray-600">
            We provide reliable, eco-friendly, and cost-effective plastic scrap
            recycling services for industries, factories, and businesses.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((item, i) => (
            <div
              key={i}
              className="group bg-white rounded-2xl border border-emerald-100
              p-8 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              {/* Icon */}
              <div
                className="w-12 h-12 rounded-xl bg-emerald-600/10 text-emerald-700
                flex items-center justify-center mb-6 group-hover:bg-emerald-600
                group-hover:text-white transition"
              >
                {item.icon}
              </div>

              {/* Text */}
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
