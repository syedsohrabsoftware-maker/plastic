import React from "react";
import { notFound } from "next/navigation";
import { Phone, MapPin, CheckCircle2, Factory, Recycle, ArrowRight, MessageCircle, Truck } from "lucide-react";

// 1. Updated Data Object with all your new locations
const getPageData = (slug: string) => {
  const data: any = {
    // --- RAJASTHAN ---
    "scrap-buyer-in-bhiwadi": {
      title: "Best Industrial Scrap Buyer in Bhiwadi | Call +91-9813124320",
      h1: "Bhiwadi's Trusted Factory Scrap Buyer",
      location: "Bhiwadi, Rajasthan",
      desc: "Bhiwadi ki sabhi industries ke liye AK Plastic laya hai best scrap solutions. Hum MS scrap, plastic, aur factory waste ke liye best rate dete hain."
    },
    "scrap-buyer-in-tapukda": {
      title: "Best Scrap Buyer in Tapukda | AK Plastic",
      h1: "Tapukda's Leading Industrial Scrap Buyer",
      location: "Tapukda, Rajasthan",
      desc: "Tapukda ki factories ke liye AK Plastic laya hai best scrap rates. Hum plastic, iron, aur machine waste ke expert hain."
    },
    "scrap-buyer-in-Imt-Manesar": {
      title: "Best Scrap Buyer in Manesar | AK Plastic",
      h1: "Manesar's Leading Industrial Scrap Buyer",
      location: "Manesar, Haryana",
      desc: "Manesar ki factories ke liye AK Plastic laya hai best scrap rates. Hum plastic, iron, aur machine waste ke expert hain."
    },
    "scrap-buyer-in-khushkhera": {
      title: "Authorized Scrap Dealer in Khushkhera | +91-9813124320",
      h1: "Reliable Scrap Dealer in Khushkhera",
      location: "Khushkhera Industrial Area",
      desc: "Khushkhera mein factory waste disposal ab hua asaan. Paiye on-the-spot payment aur fast lifting."
    },
    "scrap-buyer-in-alwar": {
      title: "Industrial Scrap Buyer in Alwar | AK Plastic",
      h1: "Alwar Industrial Scrap Solutions",
      location: "Alwar, Rajasthan",
      desc: "Alwar industrial zones ke liye authorized waste collection partner. Sahi wazan aur turant payment."
    },
    "scrap-buyer-in-jaipur": {
      title: "Industrial Scrap Buyer in Jaipur | AK Plastic Recycling",
      h1: "Jaipur's Leading Factory Scrap Buyer",
      location: "Jaipur, Rajasthan",
      desc: "Jaipur (Vishwakarma, Sitapura) ki industries ke liye best scrap rates. Hum bulk quantity mein har tarah ka scrap kharidte hain."
    },

    // --- HARYANA ---
    "scrap-buyer-in-manesar": {
      title: "IMT Manesar Factory Scrap Dealer | +91-9813124320",
      h1: "IMT Manesar Industrial Waste Experts",
      location: "IMT Manesar, Haryana",
      desc: "IMT Manesar ki badi companies ke liye trusted scrap partner. Professional lifting aur ethical weighing."
    },
    "scrap-buyer-in-faridabad": {
      title: "Authorized Scrap Buyer in Faridabad | AK Plastic",
      h1: "Faridabad Industrial Scrap Solutions",
      location: "Faridabad, Haryana",
      desc: "Faridabad industrial sectors ke liye best scrap dealer. Hum loha, plastic aur copper ka sabse accha rate dete hain."
    },
    "scrap-buyer-in-ballabgarh": {
      title: "Scrap Buyer in Ballabgarh | Industrial Waste Management",
      h1: "Ballabgarh's Trusted Scrap Dealer",
      location: "Ballabgarh, Haryana",
      desc: "Ballabgarh area mein factory scrap aur industrial waste ke liye best rates aur fast service."
    },
    "scrap-buyer-in-palwal": {
      title: "Industrial Scrap Buyer in Palwal | AK Plastic",
      h1: "Palwal Scrap Solutions",
      location: "Palwal, Haryana",
      desc: "Palwal ki sabhi manufacturing units ke liye authorized scrap pickup service. Immediate payment available."
    },

    // --- UTTAR PRADESH / BRJ BELT ---
    "scrap-buyer-in-mathura": {
      title: "Industrial Scrap Buyer in Mathura | AK Plastic",
      h1: "Mathura's Top Scrap Dealer",
      location: "Mathura, Uttar Pradesh",
      desc: "Mathura aur Refinery area ke scrap management ke liye expert team. Hum bulk industrial kachra kharidte hain."
    },
    "scrap-buyer-in-kosikalan": {
      title: "Scrap Buyer in Kosi Kalan | Industrial Waste Experts",
      h1: "Kosi Kalan Factory Scrap Solutions",
      location: "Kosi Kalan, Uttar Pradesh",
      desc: "Kosi Kalan industrial area ke liye best scrap rates. On-site weighing aur fast loading."
    },
    "scrap-buyer-agra": {
      title: "Industrial Scrap Buyer in Agra | AK Plastic Recycling",
      h1: "Agra's Leading Scrap Buyer",
      location: "Agra, Uttar Pradesh",
      desc: "Agra ke industrial clusters ke liye professional scrap management service. Sahi daam, sahi kaam."
    },
    "scrap-buyer-in-delhi": {
      title: "Industrial Scrap Buyer in Delhi NCR | AK Plastic",
      h1: "Delhi's Trusted Scrap Network",
      location: "Delhi NCR",
      desc: "Okhla, Bawana, aur Narela ke liye Delhi ka sabse bada scrap buyer. Sahi wazan aur sahi daam."
    }
  };
  return data[slug] || null;
};

// 2. Metadata Function
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const page = getPageData(resolvedParams.slug);
  if (!page) return { title: "Page Not Found" };
  return {
    title: page.title,
    description: page.desc,
  };
}

// 3. Main Component
export default async function DynamicLocationPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const page = getPageData(resolvedParams.slug);

  if (!page) {
    notFound();
  }

  const contactNumber = "+919813124320";

  return (
    <div className="bg-slate-50 min-h-screen font-sans">
      {/* Hero Section */}
      <header className="bg-[#0F766E] text-white pt-24 pb-20 px-6 relative overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="flex items-center gap-2 mb-4 bg-white/10 w-fit px-4 py-1 rounded-full border border-white/20">
            <MapPin size={16} className="text-teal-300" />
            <span className="text-sm font-semibold uppercase tracking-wider">{page.location}</span>
          </div>
          <h1 className="text-4xl md:text-7xl font-black italic uppercase leading-none mb-6">
            {page.h1}
          </h1>
          <p className="text-xl max-w-2xl opacity-90 leading-relaxed font-medium">
            {page.desc}
          </p>
          
          <div className="mt-10 flex flex-wrap gap-4">
            <a href={`tel:${contactNumber}`} className="bg-white text-[#0F766E] px-8 py-4 rounded-2xl font-black italic shadow-2xl flex items-center gap-3 hover:scale-105 transition-all text-lg border-2 border-white">
              <Phone size={24} fill="currentColor" /> CALL PHOOL BHAI
            </a>
            <a href={`https://wa.me/${contactNumber.replace('+', '')}`} className="bg-[#25D366] text-white px-8 py-4 rounded-2xl font-black italic shadow-2xl flex items-center gap-3 hover:scale-105 transition-all text-lg border-2 border-[#25D366]">
              <MessageCircle size={24} fill="currentColor" /> WHATSAPP RATE
            </a>
          </div>
        </div>
        <Factory className="absolute -right-10 -bottom-10 w-80 h-80 text-white/5 rotate-12" />
      </header>

      {/* Info Cards */}
      <section className="py-20 px-6 max-w-6xl mx-auto text-slate-800">
         <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-black italic uppercase text-[#0F766E]">
              Trusted Industrial Partner in {page.location}
            </h2>
            <div className="h-2 w-24 bg-teal-500 mt-2"></div>
         </div>

         <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-white rounded-3xl shadow-md border border-slate-100 hover:border-teal-500 transition-all group">
               <div className="bg-teal-50 w-14 h-14 rounded-2xl flex items-center justify-center text-teal-600 mb-6 group-hover:bg-teal-600 group-hover:text-white transition-colors">
                  <CheckCircle2 size={30} />
               </div>
               <h4 className="text-xl font-bold mb-2 uppercase italic">Verified Weights</h4>
               <p className="text-slate-600">Hum transparency mein vishwas rakhte hain. Digital scales aur dharam kanta weighing facility.</p>
            </div>

            <div className="p-8 bg-white rounded-3xl shadow-md border border-slate-100 hover:border-teal-500 transition-all group">
               <div className="bg-teal-50 w-14 h-14 rounded-2xl flex items-center justify-center text-teal-600 mb-6 group-hover:bg-teal-600 group-hover:text-white transition-colors">
                  <Recycle size={30} />
               </div>
               <h4 className="text-xl font-bold mb-2 uppercase italic">Bulk Disposal</h4>
               <p className="text-slate-600">Factories ka mahine bhar ka bulk waste ek baar mein saaf karne ki shamta.</p>
            </div>

            <div className="p-8 bg-white rounded-3xl shadow-md border border-slate-100 hover:border-teal-500 transition-all group">
               <div className="bg-teal-50 w-14 h-14 rounded-2xl flex items-center justify-center text-teal-600 mb-6 group-hover:bg-teal-600 group-hover:text-white transition-colors">
                  <Truck size={30} />
               </div>
               <h4 className="text-xl font-bold mb-2 uppercase italic">Fast Lifting</h4>
               <p className="text-slate-600">Jaipur ho ya Agra, hamari gaadiyan har jagah fast pickup ke liye available hain.</p>
            </div>
         </div>
      </section>

      {/* Materials */}
      <section className="bg-slate-900 py-20 px-6 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-4 uppercase tracking-widest text-teal-400">Scrap We Handle</h3>
          <p className="mb-12 opacity-70">Hum niche diye gaye har tarah ke scrap ka best market value dete hain.</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['HDPE/PP Plastic', 'MS Boring', 'Copper/Brass', 'Aluminum', 'Iron Scrap', 'Machinery', 'Factory Leftovers', 'E-Waste'].map((item) => (
              <div key={item} className="p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-colors cursor-default">
                 <span className="font-bold italic uppercase text-sm tracking-tight">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}