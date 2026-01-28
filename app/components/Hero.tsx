"use client";

import { useEffect, useState } from "react";

const titles = [
  "Plastic Scrap Buyer in Bhiwadi",
  "Plastic Recycling Company",
  "Industrial Plastic Scrap Dealer",
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setIndex((i) => (i + 1) % titles.length);
    }, 4200);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative overflow-x-hidden bg-[#0B1F1E]">

      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#bfeae7] via-[#6cd3cc] to-[#e1f7f6]" />
      <div className="absolute -top-40 -left-40 w-[480px] h-[480px] bg-emerald-800/30 rounded-full blur-3xl" />
      <div className="absolute top-32 -right-40 w-[480px] h-[480px] bg-green-700/20 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-5 pt-20 pb-10 text-center">

        {/* BADGE */}
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/90 border text-xs md:text-sm text-gray-00">
          ♻️ Trusted Plastic Scrap & Recycling Service
        </div>

        {/* TITLE */}
        <h1 className="mt-10 text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold tracking-tight leading-[1.08]">
          <span
            key={index}
            className="
              block
              bg-gradient-to-r from-[#03544e] to-black
              bg-clip-text text-transparent
              transition-all duration-700 ease-out
              opacity-0 translate-y-6
              animate-[fade_0.8s_ease-out_forwards]
            "
          >
            {titles[index]}
          </span>
        </h1>

        {/* DESCRIPTION */}
        <p className="mt-7 max-w-3xl mx-auto text-base md:text-lg text-gray-300">
          AK Plastic Recycling is a professional plastic scrap buyer serving{" "}
          <span className="text-white font-medium">
            Bhiwadi, Alwar, Khushkhera, Tapukra
          </span>{" "}
          with fast pickup, best market rates and eco-friendly recycling.
        </p>

        {/* CTA */}
        <div className="mt-12 flex justify-center flex-wrap gap-6">
          <a
            href="tel:9813124320"
            className="px-9 py-4 rounded-full bg-[#0F766E] text-white font-medium shadow-lg hover:bg-[#115E59] transition"
          >
            📞 Call for Scrap Pickup
          </a>

          <a
            href="#pickup"
            className="px-9 py-4 rounded-full bg-white/90 text-gray-900 border hover:bg-white transition"
          >
            Request Pickup Online
          </a>
        </div>

        {/* TRUST */}
        <div className="mt-16 flex flex-wrap justify-center gap-x-12 gap-y-4 text-sm text-emerald-700
">
          <span>✔ Same-Day Pickup</span>
          <span>✔ Best Market Rates</span>
          <span>✔ Industrial Scrap</span>
          <span>✔ Eco-Friendly Recycling</span>
        </div>
      </div>
    </section>
  );
}
