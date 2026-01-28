"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const galleryImages = [
  {
    src: "/images/plastic-processing-1.jpg",
    title: "Plastic Scrap Processing",
    desc: "Modern plastic scrap processing unit with pollution-free workflow.",
    alt: "Plastic scrap processing plant in Bhiwadi",
  },
  {
    src: "/images/plastic-recycling-2.jpg",
    title: "Plastic Recycling Line",
    desc: "Automated recycling conveyor system ensuring clean processing.",
    alt: "Plastic recycling conveyor belt process",
  },
  {
    src: "/images/plastic-recycling-3.jpg",
    title: "Plastic Flakes Output",
    desc: "High-quality recycled plastic flakes for industrial reuse.",
    alt: "Plastic flakes after recycling process",
  },
  {
    src: "/images/plastic-processing-3.jpg",
    title: "Premium Recycled Plastic Flakes",
    desc: "Clean and uniform recycled flakes using modern technology.",
    alt: "Premium quality recycled plastic flakes",
  },
  {
    src: "/images/plastic-recycling-4.jpg",
    title: "Recycled Plastic Pellets",
    desc: "Uniform recycled plastic pellets ready for manufacturing.",
    alt: "Recycled plastic pellets manufacturing unit",
  },
];

export default function Gallery() {
  const [index, setIndex] = useState(0);

  // 🔁 Auto slide
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 3500);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Plastic Recycling & Processing Gallery
        </h2>

        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-14">
          Explore our modern plastic recycling and processing facilities in
          Bhiwadi with pollution-free and eco-friendly operations.
        </p>

        {/* Slider Wrapper */}
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]"
            style={{
              transform: `translateX(-${index * 50}%)`,
            }}
          >
            {galleryImages.concat(galleryImages).map((item, i) => (
              <div
                key={i}
                className="
                  w-1/2 md:w-1/3 
                  px-3 shrink-0
                "
              >
                <div className="bg-white rounded-3xl border shadow-md hover:shadow-xl transition overflow-hidden">
                  {/* Image */}
                  <div className="relative h-[220px] md:h-[240px]">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-5 text-center">
                    <h3 className="text-lg font-semibold mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {galleryImages.map((_, i) => (
              <span
                key={i}
                className={`h-2.5 w-2.5 rounded-full transition-all
                ${
                  index % galleryImages.length === i
                    ? "bg-[#0F766E] scale-110"
                    : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
