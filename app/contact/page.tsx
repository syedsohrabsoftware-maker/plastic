import { Phone, MapPin, Mail, Clock, MessageSquare } from "lucide-react";

// ✅ Metadata for Number & Location Detection
export const metadata = {
  title: "Contact AK Plastic Scrap | Call +91-9813124320 for Pickup",
  description: "Get the best scrap rates today. Call AK Plastic Scrap at +91-9813124320. Located in Mansa Chowk, Bhiwadi. Fast industrial plastic scrap pickup in Delhi NCR.",
  other: {
    "telephone": "+919813124320",
    "contact-address": "Mansa Chowk, Bhiwadi, Rajasthan 301019"
  }
};

export default function Contact() {
  return (
    <main className="bg-gradient-to-b from-white to-[#F6FFFD] py-24 font-['Inter']">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">

        {/* ================= HEADER ================= */}
        <header className="text-center mb-16 animate-fintech">
          <span className="inline-block mb-4 px-4 py-1 text-[10px] font-black uppercase tracking-[0.3em] rounded-full bg-[#0F766E]/10 text-[#0F766E] italic">
            Authorized Scrap Buyer Hub
          </span>

          <h1 className="text-3xl sm:text-5xl font-[1000] text-gray-900 tracking-tighter italic uppercase">
            Contact <span className="text-[#0F766E]">AK Plastic</span> Recycling
          </h1>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-sm sm:text-base font-medium">
            Ready to sell your industrial scrap? Get instant pricing and <strong>same-day pickup</strong> in 
            Bhiwadi, Gurgaon, and Delhi NCR. Our experts are just a call away.
          </p>
        </header>

        {/* ================= CONTACT CARDS ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* ===== Address Card ===== */}
          <div className="group rounded-[2.5rem] border border-slate-100 bg-white p-10 shadow-sm hover:shadow-2xl transition-all duration-500 relative overflow-hidden">
            <div className="absolute -right-10 -top-10 w-32 h-32 bg-emerald-50 rounded-full group-hover:scale-150 transition-transform duration-700"></div>
            
            <div className="relative z-10">
                <div className="flex items-center gap-5 mb-8">
                <div className="w-14 h-14 rounded-2xl bg-[#0F766E] flex items-center justify-center text-white shadow-lg shadow-emerald-100">
                    <MapPin size={24} />
                </div>
                <h2 className="text-2xl font-black text-gray-900 italic tracking-tight uppercase">
                    Our Location
                </h2>
                </div>

                <address className="not-italic text-gray-700 leading-relaxed text-sm sm:text-base font-bold">
                <span className="text-[#0F766E] text-xs uppercase tracking-widest block mb-2">Main Godown</span>
                AK Plastic Recycling <br />
                Godown Area, Near Mansa Chowk <br />
                Bhiwadi, Rajasthan - <strong>301019</strong>
                </address>

                <a
                href="https://www.google.com/maps/search/AK+Plastic+Recycling+Bhiwadi"
                target="_blank"
                className="inline-flex items-center gap-2 mt-8 text-xs font-black uppercase tracking-widest text-[#0F766E] hover:gap-4 transition-all"
                >
                📍 Open Navigation Protocol <i className="fa-solid fa-arrow-right"></i>
                </a>
            </div>
          </div>

          {/* ===== Contact Info Card ===== */}
          <div className="group rounded-[2.5rem] border border-slate-100 bg-white p-10 shadow-sm hover:shadow-2xl transition-all duration-500 relative overflow-hidden">
            <div className="absolute -right-10 -top-10 w-32 h-32 bg-blue-50 rounded-full group-hover:scale-150 transition-transform duration-700"></div>

            <div className="relative z-10">
                <div className="flex items-center gap-5 mb-8">
                <div className="w-14 h-14 rounded-2xl bg-blue-600 flex items-center justify-center text-white shadow-lg shadow-blue-100">
                    <Phone size={24} />
                </div>
                <h2 className="text-2xl font-black text-gray-900 italic tracking-tight uppercase">
                    Direct Line
                </h2>
                </div>

                <ul className="space-y-6">
                <li>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Expert Support 24/7</p>
                    <a
                    href="tel:+919813124320"
                    className="text-2xl font-[1000] text-gray-900 hover:text-[#0F766E] transition-colors tracking-tighter italic"
                    >
                    +91 98131 24320
                    </a>
                </li>

                <li className="flex items-center gap-4 text-sm font-bold text-gray-600">
                    <div className="w-8 h-8 rounded-xl bg-slate-50 flex items-center justify-center text-[#0F766E]">
                        <Clock size={16} />
                    </div>
                    <span>MON – SAT: 09:00 AM – 07:00 PM</span>
                </li>
                </ul>

                {/* PRO CTA HUB */}
                <div className="mt-10 flex flex-col sm:flex-row gap-3">
                <a
                    href="tel:+919813124320"
                    className="flex-1 inline-flex items-center justify-center gap-3 rounded-2xl bg-[#0F766E]
                    px-6 py-4 text-white text-[11px] font-black uppercase tracking-widest shadow-xl shadow-emerald-100 hover:bg-[#115E59] transition-all active:scale-95"
                >
                    <Phone size={14} /> Call Now
                </a>
                <a
                    href="https://wa.me/919813124320"
                    className="flex-1 inline-flex items-center justify-center gap-3 rounded-2xl bg-white border-2 border-slate-100
                    px-6 py-4 text-slate-900 text-[11px] font-black uppercase tracking-widest hover:bg-emerald-50 hover:border-emerald-200 transition-all active:scale-95"
                >
                    <MessageSquare size={14} className="text-emerald-500" /> WhatsApp
                </a>
                </div>
            </div>
          </div>

        </div>
        
        {/* TRUST BANNER FOR CRAWLERS */}
        <div className="mt-16 p-8 bg-slate-900 rounded-[3rem] text-center">
             <p className="text-white/50 text-[10px] font-black uppercase tracking-[0.4em] mb-4">Industrial Compliance Protocol</p>
             <h3 className="text-white text-xl font-bold italic">Looking for bulk industrial contracts? <br className="md:hidden" /> 
             <span className="text-emerald-400">Email: contact@akplasticscrap.com</span></h3>
        </div>
      </div>
    </main>
  );
}