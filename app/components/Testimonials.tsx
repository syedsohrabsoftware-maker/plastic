"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { useState, useEffect } from "react";

const testimonials = [
  {
    name: "Rajesh Kumar",
    company: "Plastic Manufacturing Unit",
    review:
      "AK Plastic Recycling provided timely pickup and fair pricing. Very professional and transparent service.",
    rating: 5,
  },
  {
    name: "Sunita Sharma",
    company: "Industrial Scrap Dealer",
    review:
      "Eco-friendly recycling with excellent coordination. Highly reliable team.",
    rating: 5,
  },
  {
    name: "Amit Verma",
    company: "Factory Operations Manager",
    review:
      "Best plastic scrap buyer we have worked with. On-time pickup and honest pricing.",
    rating: 4,
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  // 🔁 Auto slide
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 bg-gradient-to-b from-emerald-50 to-white overflow-hidden">
      <div className="max-w-5xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-14">
          <p className="text-sm font-semibold tracking-widest text-emerald-700 uppercase">
            Testimonials
          </p>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-gray-900">
            Trusted by Industry Leaders
          </h2>
          <p className="mt-4 text-gray-600">
            Real feedback from businesses who trust our recycling services.
          </p>
        </div>

        {/* Slider */}
        <div className="relative">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="bg-white border border-emerald-100 rounded-3xl shadow-lg p-10 text-center"
          >
            <div className="mx-auto mb-6 w-12 h-12 rounded-full bg-emerald-600
            flex items-center justify-center text-white">
              <Quote size={20} />
            </div>

            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              “{testimonials[index].review}”
            </p>

            {/* Stars */}
            <div className="flex justify-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={18}
                  className={
                    i < testimonials[index].rating
                      ? "text-emerald-600 fill-emerald-600"
                      : "text-gray-300"
                  }
                />
              ))}
            </div>

            <p className="font-semibold text-gray-900">
              {testimonials[index].name}
            </p>
            <p className="text-sm text-gray-500">
              {testimonials[index].company}
            </p>
          </motion.div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`w-2.5 h-2.5 rounded-full transition
                ${i === index ? "bg-emerald-600" : "bg-emerald-200"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
