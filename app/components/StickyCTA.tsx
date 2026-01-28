"use client";

export default function StickyCTA() {
  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 md:hidden">
      <a
        href="tel:9813124320"
        className="flex items-center gap-2 px-6 py-4 rounded-full bg-[#0F766E]
        text-white font-medium shadow-xl"
      >
        📞 Call for Scrap Pickup
      </a>
    </div>
  );
}
