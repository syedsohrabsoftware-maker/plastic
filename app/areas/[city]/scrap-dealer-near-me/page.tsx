import { Metadata } from "next";

// ✅ 1. Metadata with Phone Number for SEO
export async function generateMetadata({ params }: { params: { city: string } }): Promise<Metadata> {
  const city = params.city.charAt(0).toUpperCase() + params.city.slice(1);
  return {
    title: `Scrap Dealer Near Me in ${city} | Call +91-9813124320`,
    description: `Best scrap dealer in ${city}. We buy plastic, metal, and industrial scrap at best rates. Call AK Plastic Scrap at +91-9813124320 for instant pickup.`,
  };
}

// ✅ 2. FIX: Added 'export default' which was causing Netlify Build Failure
export default function ScrapDealerNearMe({ params }: { params: { city: string } }) {
  const cityName = params.city.charAt(0).toUpperCase() + params.city.slice(1);

  return (
    <main className="py-24 max-w-5xl mx-auto px-4 font-['Inter']">
      <div className="mb-12">
        <span className="text-emerald-600 font-black uppercase tracking-widest text-xs italic">
          Verified Local Dealer
        </span>
        <h1 className="text-4xl md:text-6xl font-[1000] italic uppercase tracking-tighter mt-2">
          Scrap Dealer Near Me in <span className="text-emerald-600">{cityName}</span>
        </h1>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div className="space-y-6 text-gray-700 leading-relaxed">
          <p>
            Looking for a reliable scrap buyer in <strong>{cityName}</strong>? AK Plastic Scrap 
            provides professional doorstep pickup services for all types of industrial and domestic scrap.
          </p>
          <ul className="space-y-3">
            <li className="flex items-center gap-2 font-bold italic">✔ Best Market Rates in {cityName}</li>
            <li className="flex items-center gap-2 font-bold italic">✔ Digital Weighing Machine</li>
            <li className="flex items-center gap-2 font-bold italic">✔ Instant Cash or UPI Payment</li>
          </ul>
        </div>

        <div className="bg-slate-900 p-8 rounded-[3rem] text-white text-center shadow-2xl">
          <p className="text-emerald-400 font-black uppercase tracking-[0.2em] text-[10px] mb-4">
            Direct Connection
          </p>
          <h2 className="text-2xl font-bold italic mb-6">Schedule a Pickup Today</h2>
          <a 
            href="tel:+919813124320" 
            className="inline-block w-full py-5 bg-emerald-500 hover:bg-emerald-600 rounded-2xl font-[1000] italic uppercase tracking-widest transition-all shadow-xl shadow-emerald-500/20"
          >
            📞 Call: 9813124320
          </a>
        </div>
      </div>
    </main>
  );
}