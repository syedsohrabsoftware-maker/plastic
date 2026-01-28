"use client";

import { useEffect, useState } from "react";
import { Star, User } from "lucide-react";

const reviews = [
  {
    name: "Rakesh Sharma",
    location: "Bhiwadi",
    text: "AK Plastic Recycling is the best plastic scrap buyer in Bhiwadi. Transparent rates and instant payment.",
    color: "bg-emerald-500",
  },
  {
    name: "Amit Verma",
    location: "Khushkhera",
    text: "Very professional plastic scrap recycler. Pickup was on time and staff was very supportive.",
    color: "bg-sky-500",
  },
  {
    name: "Sanjay Industries",
    location: "Tapukra",
    text: "Reliable recycling partner for industrial plastic scrap. Proper documentation and fair pricing.",
    color: "bg-indigo-500",
  },
  {
    name: "Neha Gupta",
    location: "Bilaspur",
    text: "Best scrap dealer near Bilaspur. Doorstep pickup and smooth process.",
    color: "bg-pink-500",
  },
  {
    name: "Rahul Packaging",
    location: "Kehrani",
    text: "Trusted long-term plastic scrap buyer for our factory. Payments always on time.",
    color: "bg-orange-500",
  },
  {
    name: "Vikas Traders",
    location: "Faridabad",
    text: "One of the best plastic scrap recyclers near Faridabad. Highly professional team.",
    color: "bg-teal-500",
  },
];

export default function Reviews() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  // Auto slide
  useEffect(() => {
    if (paused) return;

    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % reviews.length);
    }, 3500);

    return () => clearInterval(timer);
  }, [paused]);

  return (
    <section className="bg-[#F9FFFB] py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5">

        {/* HEADING */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
            Customer Reviews
          </h2>
          <p className="mt-4 text-gray-600 text-sm md:text-base">
            Trusted as the best plastic scrap buyer and recycling company in
            Bhiwadi, Khushkhera, Tapukra and nearby areas.
          </p>
        </div>

        {/* SLIDER */}
        <div
          className="relative"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${index * 100}%)`,
            }}
          >
            {reviews.map((r, i) => (
              <div
                key={i}
                className="min-w-full md:min-w-[33.3333%] px-3"
              >
                <div className="bg-white border rounded-2xl p-6 shadow-sm h-full">

                  {/* USER */}
                  <div className="flex items-center gap-4 mb-4">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center text-white ${r.color}`}
                    >
                      <User size={22} />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 text-sm">
                        {r.name}
                      </p>
                      <p className="text-xs text-gray-500">
                        {r.location}
                      </p>
                    </div>
                  </div>

                  {/* STARS */}
                  <div className="flex gap-1 text-yellow-500 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} fill="currentColor" />
                    ))}
                  </div>

                  {/* REVIEW */}
                  <p className="text-sm text-gray-600 leading-relaxed">
                    “{r.text}”
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* DOTS */}
        <div className="flex justify-center gap-2 mt-6">
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-2.5 h-2.5 rounded-full transition ${
                index === i ? "bg-[#0F766E]" : "bg-gray-300"
              }`}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <a
            href="tel:9813124320"
            className="inline-block px-8 py-3 rounded-full bg-[#0F766E] text-white text-sm font-medium hover:bg-[#115E59] transition"
          >
            📞 Call Best Scrap Dealer in Bhiwadi
          </a>
        </div>
      </div>
    </section>
  );
}
