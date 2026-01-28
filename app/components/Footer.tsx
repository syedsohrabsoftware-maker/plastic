"use client";

import Link from "next/link";
import {
  Phone,
  MessageCircle,
  Home,
  Facebook,
  Instagram,
  Linkedin,
  MapPin,
  Clock,
} from "lucide-react";

export default function Footer() {
  return (
    <>
      {/* ================= DESKTOP FOOTER ================= */}
      <footer className="hidden md:block bg-[#081716] text-gray-300 mt-24">
        <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-4 gap-12">

          {/* BRAND */}
          <div>
            <h3 className="text-2xl font-semibold bg-gradient-to-r from-emerald-400 to-emerald-200 bg-clip-text text-transparent">
              AK Plastic Recycling
            </h3>

            <p className="mt-5 text-sm leading-relaxed text-gray-400">
              AK Plastic Recycling is a trusted plastic scrap buyer and
              recycling company in <strong>Bhiwadi</strong>. We offer fast
              doorstep pickup, transparent pricing and eco-friendly
              plastic recycling for households and industries.
            </p>

            {/* SOCIAL */}
            <div className="flex gap-4 mt-6">
              <SocialIcon><Facebook size={16} /></SocialIcon>
              <SocialIcon><Instagram size={16} /></SocialIcon>
              <SocialIcon><Linkedin size={16} /></SocialIcon>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-5 tracking-wide">
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link href="/" className="hover:text-emerald-400 transition">Home</Link></li>
              <li><Link href="/about" className="hover:text-emerald-400 transition">About Us</Link></li>
              <li><Link href="/services" className="hover:text-emerald-400 transition">Services</Link></li>
              <li><Link href="/contact" className="hover:text-emerald-400 transition">Contact</Link></li>
            </ul>
          </div>

          {/* SERVICES */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-5 tracking-wide">
              Our Services
            </h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>Plastic Scrap Pickup</li>
              <li>Industrial Plastic Recycling</li>
              <li>Injection & Blow Scrap</li>
              <li>Bulk Scrap Buying</li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-5 tracking-wide">
              Get In Touch
            </h4>

            <div className="space-y-4 text-sm text-gray-400">
              <p className="flex items-start gap-2">
                <MapPin size={16} className="text-emerald-400 mt-0.5" />
                Bhiwadi, Rajasthan
              </p>

              <p className="flex items-center gap-2">
                <Phone size={16} className="text-emerald-400" />
                <a
                  href="tel:9813124320"
                  className="hover:text-emerald-400 transition"
                >
                  9813124320
                </a>
              </p>

              <p className="flex items-center gap-2">
                <Clock size={16} className="text-emerald-400" />
                Mon – Sat : 9AM – 7PM
              </p>
            </div>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="border-t border-white/10 py-5 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} AK Plastic Recycling. All Rights Reserved.
        </div>
      </footer>

      {/* ================= MOBILE APP STYLE FOOTER ================= */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#081716] border-t border-white/10">
        <div className="flex justify-around items-center h-14 text-[11px]">

          <MobileItem
            href="/"
            icon={<Home size={18} />}
            label="Home"
          />

          <MobileItem
            href="tel:9813124320"
            icon={<Phone size={18} />}
            label="Call"
          />

          <MobileItem
            href="https://wa.me/919813124320"
            icon={<MessageCircle size={18} />}
            label="WhatsApp"
            highlight
          />
        </div>
      </div>
    </>
  );
}

/* ================= SMALL COMPONENTS ================= */

function SocialIcon({ children }: any) {
  return (
    <div className="
      w-10 h-10
      rounded-full
      bg-emerald-500/10
      border border-emerald-500/20
      text-emerald-400
      flex items-center justify-center
      cursor-pointer
      hover:bg-emerald-500/20
      hover:border-emerald-500/40
      transition
    ">
      {children}
    </div>
  );
}

function MobileItem({ href, icon, label, highlight }: any) {
  return (
    <a
      href={href}
      className={`flex flex-col items-center justify-center gap-0.5 ${
        highlight
          ? "text-emerald-400 font-medium"
          : "text-gray-400"
      }`}
    >
      <div
        className={`w-9 h-9 rounded-full flex items-center justify-center border ${
          highlight
            ? "bg-emerald-500/15 border-emerald-500/30"
            : "border-white/10"
        }`}
      >
        {icon}
      </div>
      <span>{label}</span>
    </a>
  );
}
