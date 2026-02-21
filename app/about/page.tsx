import Image from "next/image";

// ✅ Meta Tags optimized for Google Search & Number Detection
export const metadata = {
  title: "About AK Plastic Scrap | Industrial Buyer +91-9813124320",
  description: "Contact AK Plastic Scrap at +91-9813124320. Trusted industrial plastic scrap buyers in Bhiwadi, Khushkhera & Delhi NCR. Best rates & instant cash payments.",
  other: {
    "telephone": "+919813124320",
    "contact-number": "+919813124320",
  }
};

export default function About() {
  return (
    <section className="bg-[#F9FFFB] py-20 overflow-hidden font-['Inter']">
      <div className="max-w-7xl mx-auto px-5 grid md:grid-cols-2 gap-14 items-center">

        {/* LEFT CONTENT */}
        <div className="animate-fintech">
          <p className="text-[#0F766E] font-black uppercase tracking-[0.3em] text-[10px] mb-4 italic">
            Authorized Industrial Scrap Buyer
          </p>
          
          <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight tracking-tighter italic uppercase">
            Best Plastic Scrap <span className="text-[#0F766E]">Buyer & Recycling</span> in Bhiwadi 
          </h1>

          <div className="mt-6 space-y-4">
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              <strong>AK Plastic Scrap (Mob: +91 98131 24320)</strong> is a trusted name for 
              <strong> industrial plastic scrap recycling</strong>. We specialize in bulk 
              collection from factories and units in <strong>Bhiwadi, Khushkhera, Tapukra, 
              and Bilaspur</strong>.
            </p>

            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              Serving major industrial hubs including <strong>Gurgaon, Faridabad, Alwar, 
              and Delhi NCR</strong>. Our mission is 100% environment-friendly 
              processing with the <strong>highest scrap rates in the market</strong>.
            </p>
          </div>

          {/* SERVICE POINTS: Highlighting Trust for Google Snippets */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex items-center gap-3 p-4 bg-white rounded-2xl border border-emerald-50 shadow-sm">
               <div className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center text-xs">✔</div>
               <span className="text-[11px] font-bold text-gray-700 uppercase">Digital Weighing</span>
            </div>
            <div className="flex items-center gap-3 p-4 bg-white rounded-2xl border border-emerald-50 shadow-sm">
               <div className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center text-xs">✔</div>
               <span className="text-[11px] font-bold text-gray-700 uppercase">Spot Cash Payment</span>
            </div>
          </div>

          {/* CTA: Priority Phone Number Display */}
          <div className="mt-10 flex gap-4 flex-wrap">
            <a
              href="tel:+919813124320"
              className="px-8 py-5 rounded-2xl bg-[#0F766E] text-white text-xs font-black uppercase tracking-widest hover:bg-[#115E59] transition-all shadow-xl shadow-emerald-200 active:scale-95 flex items-center gap-3"
            >
              <i className="fa-solid fa-phone-volume animate-pulse"></i>
              Call: +91 98131 24320
            </a>
            <a
              href="https://wa.me/919813124320?text=I%20want%20to%20sell%20scrap"
              target="_blank"
              className="px-8 py-5 rounded-2xl bg-white border-2 border-slate-100 text-slate-900 text-xs font-black uppercase tracking-widest hover:bg-emerald-50 hover:border-emerald-200 transition-all active:scale-95 flex items-center gap-3"
            >
              <i className="fa-brands fa-whatsapp text-emerald-500 text-lg"></i>
              WhatsApp Now
            </a>
          </div>
        </div>

        {/* RIGHT IMAGE: Optimized with Alt for Image Search */}
        <div className="relative group">
          <div className="absolute -top-10 -left-10 w-48 h-48 bg-[#D9F99D]/20 rounded-full blur-3xl group-hover:bg-[#D9F99D]/40 transition-all duration-700" />
          <div className="absolute bottom-0 -right-10 w-48 h-48 bg-[#99F6E4]/20 rounded-full blur-3xl group-hover:bg-[#99F6E4]/40 transition-all duration-700" />

          <Image
            src="/images/about-plastic-recycling.webp"
            alt="AK Plastic Scrap Dealer Contact +91-9813124320 Bhiwadi Alwar"
            width={600}
            height={500}
            className="relative rounded-[3rem] shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]"
            priority
          />
          
          {/* Floating Trust Badge */}
          <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-[2rem] shadow-2xl border border-slate-50 hidden sm:block animate-bounce">
             <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Market Rate</p>
             <p className="text-xl font-black text-emerald-600 italic leading-none">Best Price</p>
          </div>
        </div>
      </div>
    </section>
  );
}