"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Phone,
  MessageCircle,
  Menu,
  X,
  Facebook,
  Instagram,
  Globe,
  Home,
  Info,
  Briefcase,
  PhoneCall,
  ChevronDown,
} from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  // ✅ SAFE BODY SCROLL LOCK
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      document.body.style.touchAction = "none";
    } else {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    }
  }, [open]);

  return (
    <>
      {/* ================= TOP BAR ================= */}
      <div className="fixed top-0 left-0 w-full z-[60] bg-[#06201E] overflow-x-hidden">
        <div className="max-w-7xl mx-auto px-4 py-1 flex items-center justify-between">
          <a
            href="https://wa.me/919813124320"
            target="_blank"
            className="flex items-center gap-2 px-3 py-1 rounded-full
            bg-[#0F766E]/20 border border-[#0F766E]
            text-[#3AF5C4] text-xs font-medium"
          >
            <span className="w-4 h-4 flex items-center justify-center rounded-full bg-[#0F766E] text-white">
              <MessageCircle size={10} />
            </span>
            WhatsApp
          </a>

          <div className="flex items-center gap-2">
            <TopIcon><Phone size={12} /></TopIcon>
            <TopIcon><Facebook size={12} /></TopIcon>
            <TopIcon><Instagram size={12} /></TopIcon>
            <TopIcon><Globe size={12} /></TopIcon>
          </div>
        </div>
      </div>

      {/* ================= MAIN HEADER ================= */}
      <header className="fixed top-[32px] left-0 w-full z-[55] bg-white/80 backdrop-blur-xl border-b shadow-sm overflow-x-hidden">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="AK Plastic Recycling"
              width={130}
              height={48}
              priority
              className="object-contain"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-10 text-sm font-medium text-gray-700">
            <NavItem href="/" icon={<Home size={15} />} label="Home" />
            <NavItem href="#about" icon={<Info size={15} />} label="About" />

            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className="flex items-center gap-1">
                <Briefcase size={15} /> Services <ChevronDown size={14} />
              </button>

              {servicesOpen && (
                <div className="absolute top-7 left-0 w-56 bg-white border rounded-xl shadow-lg p-2">
                  <DropdownItem label="Plastic Scrap Pickup" />
                  <DropdownItem label="Industrial Plastic Scrap" />
                  <DropdownItem label="Bulk Plastic Recycling" />
                  <DropdownItem label="Factory Scrap Buyer" />
                </div>
              )}
            </div>

            <NavItem href="/contact" icon={<PhoneCall size={15} />} label="Contact" />
          </nav>

          {/* CTA */}
          <a
            href="tel:9813124320"
            className="hidden md:flex items-center gap-2 px-6 py-2 rounded-full
            bg-green-200 border border-green-800 text-sm font-medium"
          >
            <PhoneCall size={16} /> Call Now
          </a>

          {/* Mobile Button */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-full border"
          >
            <Menu size={20} />
          </button>
        </div>
      </header>

      {/* ================= MOBILE MENU ================= */}
      <div
        className={`fixed inset-0 z-[100] overflow-x-hidden transition-all duration-300
        ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      >
        {/* Backdrop */}
        <div
          onClick={() => setOpen(false)}
          className={`fixed inset-0 bg-black/50 transition-opacity
          ${open ? "opacity-100" : "opacity-0"}`}
        />

        {/* Slide Panel */}
        <div
          className={`fixed top-0 right-0 h-screen w-[80vw] max-w-[320px] bg-white
          px-6 py-6 transform transition-transform duration-500
          ${open ? "translate-x-0" : "translate-x-full"}`}
        >
          <button
            onClick={() => setOpen(false)}
            className="w-10 h-10 mb-8 flex items-center justify-center rounded-full border"
          >
            <X size={20} />
          </button>

          <nav className="flex flex-col gap-6 text-base font-medium">
            <MobileNav href="/" icon={<Home size={18} />} label="Home" setOpen={setOpen} />
            <MobileNav href="#about" icon={<Info size={18} />} label="About" setOpen={setOpen} />

            <div>
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="flex w-full items-center justify-between"
              >
                <span className="flex items-center gap-2">
                  <Briefcase size={18} /> Services
                </span>
                <ChevronDown size={16} />
              </button>

              {servicesOpen && (
                <div className="ml-6 mt-3 space-y-2 text-sm text-gray-600">
                  <div>Plastic Scrap Pickup</div>
                  <div>Industrial Plastic Scrap</div>
                  <div>Bulk Plastic Recycling</div>
                  <div>Factory Scrap Buyer</div>
                </div>
              )}
            </div>

            <MobileNav href="/contact" icon={<PhoneCall size={18} />} label="Contact" setOpen={setOpen} />
          </nav>

          <div className="mt-10 space-y-3">
            <a href="tel:9813124320" className="block py-3 text-center rounded-full bg-[#0F766E] text-white">
              📞 Call 9813124320
            </a>
            <a href="https://wa.me/919813124320" className="block py-3 text-center rounded-full border">
              💬 WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* SPACER */}
      <div className="h-[88px] md:h-[96px]" />
    </>
  );
}

/* ================= COMPONENTS ================= */

function NavItem({ href, icon, label }: any) {
  return (
    <Link href={href} className="flex items-center gap-1 hover:text-[#0F766E]">
      {icon} {label}
    </Link>
  );
}

function DropdownItem({ label }: any) {
  return <div className="px-3 py-2 rounded-lg hover:bg-gray-100 cursor-pointer">{label}</div>;
}

function MobileNav({ href, label, icon, setOpen }: any) {
  return (
    <Link href={href} onClick={() => setOpen(false)} className="flex items-center gap-2">
      {icon} {label}
    </Link>
  );
}

function TopIcon({ children }: any) {
  return (
    <div className="w-6 h-6 rounded-full flex items-center justify-center
    bg-[#0F766E]/20 border border-[#0F766E] text-[#3AF5C4]">
      {children}
    </div>
  );
}
