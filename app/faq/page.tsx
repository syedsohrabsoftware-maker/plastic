"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

const faqs = [
  {
    q: "What kind of plastic scrap do you buy in Bhiwadi?",
    a: "AK Plastic Recycling buys all types of plastic scrap including industrial plastic waste, injection moulding scrap, blow moulding scrap, plastic drums, containers, packaging plastic and mixed plastic scrap in Bhiwadi and nearby areas.",
  },
  {
    q: "Are you the best plastic scrap buyer in Bhiwadi?",
    a: "Yes, AK Plastic Recycling is one of the most trusted and reliable plastic scrap buyers in Bhiwadi, Khushkhera, Tapukra, Bilaspur and Kehrani, known for fair pricing, fast pickup and eco-friendly recycling.",
  },
  {
    q: "Do you provide doorstep plastic scrap pickup?",
    a: "Yes, we provide doorstep plastic scrap pickup for households, factories and industrial units. Our pickup service is fast, reliable and completely hassle-free.",
  },
  {
    q: "Do you buy plastic scrap in bulk quantity?",
    a: "Yes, we specialize in bulk plastic scrap pickup for factories, warehouses and manufacturing units. We handle large volumes with proper weighing and documentation.",
  },
  {
    q: "Which areas do you serve apart from Bhiwadi?",
    a: "We serve Bhiwadi, Khushkhera, Tapukra, Bilaspur, Kehrani, Alwar, Faridabad and nearby industrial areas for plastic scrap buying and recycling.",
  },
  {
    q: "What are your plastic scrap rates?",
    a: "Our plastic scrap rates depend on the type, quality and quantity of plastic scrap. We offer competitive market rates and transparent pricing with digital weighing.",
  },
  {
    q: "Is doorstep pickup free of cost?",
    a: "Yes, doorstep pickup is generally free for standard and bulk plastic scrap quantities. For very small quantities, minimum pickup value may apply.",
  },
  {
    q: "How do you measure the weight of plastic scrap?",
    a: "We use ISO-certified digital weighing machines to ensure accurate and transparent measurement of your plastic scrap.",
  },
  {
    q: "What payment methods do you offer?",
    a: "We provide instant payment via cash, UPI or bank transfer after weighing the plastic scrap, ensuring a smooth and trusted transaction.",
  },
  {
    q: "Do you recycle plastic in an eco-friendly way?",
    a: "Yes, AK Plastic Recycling follows environmentally responsible recycling processes to reduce landfill waste and promote sustainable plastic recycling.",
  },
  {
    q: "How can I book a plastic scrap pickup?",
    a: "You can book a plastic scrap pickup by calling us directly, sending a WhatsApp message or filling out the pickup request form on our website.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-5">

        {/* HEADING */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-gray-600 text-sm md:text-base">
            Common questions about plastic scrap buying and recycling services
            in Bhiwadi and nearby industrial areas.
          </p>
        </div>

        {/* FAQ GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqs.map((item, i) => (
            <div
              key={i}
              className={`rounded-2xl border px-5 py-4 transition-all duration-300 cursor-pointer
              ${
                open === i
                  ? "border-[#0F766E] bg-[#F9FFFB]"
                  : "border-gray-200 hover:border-[#0F766E]/50"
              }`}
              onClick={() => setOpen(open === i ? null : i)}
            >
              {/* QUESTION */}
              <div className="flex justify-between items-center">
                <h3 className="text-sm md:text-base font-medium text-gray-900">
                  {item.q}
                </h3>

                {/* ROTATING ICON */}
                <div
                  className={`transition-transform duration-300 ${
                    open === i ? "rotate-45 text-[#0F766E]" : "rotate-0 text-gray-500"
                  }`}
                >
                  <Plus size={18} />
                </div>
              </div>

              {/* ANSWER (SMOOTH) */}
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  open === i
                    ? "max-h-40 opacity-100 mt-3"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
