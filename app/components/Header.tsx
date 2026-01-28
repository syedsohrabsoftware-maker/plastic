"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
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
  FileText,
  Recycle,
  Factory,
  Truck,
  Cpu,
} from "lucide-react";

/* ===============================
   CONFIG
================================ */

const CITY = "bhiwadi";

const SERVICES = [
  { slug: "plastic-scrap-dealer", label: "Plastic Scrap Dealer", icon: <Recycle size={16} /> },
  { slug: "iron-scrap-dealer", label: "Iron Scrap Dealer", icon: <Factory size={16} /> },
  { slug: "metal-scrap-dealer", label: "Metal Scrap Dealer", icon: <Factory size={16} /> },
  { slug: "industrial-scrap-buyer", label: "Industrial Scrap Buyer", icon: <Truck size={16} /> },
  { slug: "road-waste-management", label: "Road Waste Management", icon: <Truck size={16} /> },
  { slug: "e-waste-scrap-dealer", label: "E-Waste Scrap Dealer", icon: <Cpu size={16} /> },
];

/* ===============================
   HEADER
================================ */

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
  }, [mobileOpen]);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      {/* ================= TOP BAR – FOOTER MATCH ================= */}
<div className="sticky top-0 z-[100]">
  <div
    className="
      bg-[#081716]
      border-b border-white/10
      shadow-[0_8px_30px_rgba(16,185,129,0.25)]
    "
  >
    <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">

      {/* WHATSAPP PILL */}
      <a
        href="https://wa.me/919813124320"
        className="
          flex items-center gap-2 px-4 py-1.5 rounded-full
          bg-emerald-500/10
          border border-emerald-500/25
          text-emerald-300 text-xs font-semibold
          
          hover:bg-emerald-500/20
          transition
        "
      >
        <MessageCircle size={13} className="text-emerald-400" />
        WhatsApp
      </a>

      {/* ICONS */}
      <div className="flex items-center gap-3">
        <TopIcon><Phone size={14} /></TopIcon>
        <TopIcon><Facebook size={14} /></TopIcon>
        <TopIcon><Instagram size={14} /></TopIcon>
        <TopIcon><Globe size={14} /></TopIcon>
      </div>

    </div>
  </div>
</div>


      {/* ================= MAIN HEADER ================= */}
      <header className="sticky top-[44px] z-[90] bg-white/95 backdrop-blur-xl border-b shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center">

          {/* LOGO */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="AK Plastic Recycling"
              width={155}
              height={55}
              priority
            />
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex ml-auto items-center gap-12 text-[15px] font-semibold text-gray-800">

            <NavItem href="/" icon={<Home size={16} />} label="Home" />
            <NavItem href="/about" icon={<Info size={16} />} label="About" />

            {/* SERVICES */}
            <div ref={servicesRef} className="relative">
              <button
                onClick={() => setServicesOpen((p) => !p)}
                className="flex items-center gap-1 hover:text-emerald-600"
              >
                <Briefcase size={16} />
                Services
                <ChevronDown
                  size={14}
                  className={`transition ${servicesOpen ? "rotate-180" : ""}`}
                />
              </button>

              <div
                className={`
                  absolute left-0 top-full mt-4 w-[360px]
                  bg-white rounded-2xl shadow-2xl border p-5
                  transition-all duration-300 origin-top
                  ${servicesOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}
                `}
              >
                {SERVICES.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/areas/${CITY}/${s.slug}`}
                    className="
                      flex items-center gap-3 px-3 py-2 rounded-lg
                      hover:bg-emerald-50 transition
                    "
                  >
                    {s.icon}
                    {s.label}
                  </Link>
                ))}
              </div>
            </div>

            <NavItem href="/blog" icon={<FileText size={16} />} label="Blog" />
            <NavItem href="/contact" icon={<PhoneCall size={16} />} label="Contact" />
          </nav>

          {/* CTA */}
          <a
            href="tel:9813124320"
            className="
              hidden md:flex ml-8 items-center gap-2 px-7 py-3
              rounded-full bg-emerald-100
              text-emerald-950 text-sm font-semibold border border-emerald-950
             
              hover:scale-105 transition
            "
          >
            <PhoneCall size={18} />
            Call Now
          </a>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setMobileOpen(true)}
            className="
              md:hidden ml-auto w-11 h-11 flex items-center justify-center
              rounded-full bg-gradient-to-r from-emerald-500 to-green-600
              text-white shadow-lg
            "
          >
            <Menu size={22} />
          </button>
        </div>
      </header>

      {/* ================= MOBILE MENU ================= */}
      <MobileMenu
        open={mobileOpen}
        setOpen={setMobileOpen}
        mobileServicesOpen={mobileServicesOpen}
        setMobileServicesOpen={setMobileServicesOpen}
      />
    </>
  );
}

/* ===============================
   MOBILE MENU
================================ */

function MobileMenu({ open, setOpen, mobileServicesOpen, setMobileServicesOpen }: any) {
  return (
    <div className={`fixed inset-0 z-[120] transition-opacity ${open ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
      <div onClick={() => setOpen(false)} className="absolute inset-0 bg-black/60" />

      <div
        className={`
          absolute top-0 right-0 h-full w-[85vw] max-w-[380px]
          bg-gradient-to-b from-emerald-900 to-emerald-950
          px-6 py-6 transform transition-transform duration-500
          ${open ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <button
          onClick={() => setOpen(false)}
          className="w-10 h-10 mb-8 flex items-center justify-center rounded-full bg-white text-black"
        >
          <X size={22} />
        </button>

        <nav className="flex flex-col gap-6 text-white font-semibold text-lg">

          <MobileNav href="/" icon={<Home />} label="Home" setOpen={setOpen} />
          <MobileNav href="/about" icon={<Info />} label="About" setOpen={setOpen} />

          {/* SERVICES */}
          <div>
            <button
              onClick={() => setMobileServicesOpen((p: boolean) => !p)}
              className="flex w-full items-center justify-between"
            >
              <span className="flex items-center gap-2">
                <Briefcase size={20} /> Services
              </span>
              <ChevronDown size={18} className={`transition ${mobileServicesOpen ? "rotate-180" : ""}`} />
            </button>

            <div className={`ml-4 mt-4 space-y-3 text-sm text-emerald-200 ${mobileServicesOpen ? "block" : "hidden"}`}>
              {SERVICES.map((s) => (
                <Link
                  key={s.slug}
                  href={`/areas/${CITY}/${s.slug}`}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-3"
                >
                  {s.icon}
                  {s.label}
                </Link>
              ))}
            </div>
          </div>

          <MobileNav href="/blog" icon={<FileText />} label="Blog" setOpen={setOpen} />
          <MobileNav href="/contact" icon={<PhoneCall />} label="Contact" setOpen={setOpen} />
        </nav>
      </div>
    </div>
  );
}

/* ===============================
   SMALL COMPONENTS
================================ */

function NavItem({ href, icon, label }: any) {
  return (
    <Link href={href} className="flex items-center gap-1 hover:text-emerald-600">
      {icon} {label}
    </Link>
  );
}

function MobileNav({ href, icon, label, setOpen }: any) {
  return (
    <Link href={href} onClick={() => setOpen(false)} className="flex items-center gap-3">
      {icon} {label}
    </Link>
  );
}

function TopIcon({ children }: any) {
  return (
    <div
      className="
        w-7 h-7
        rounded-full
        flex items-center justify-center
        bg-emerald-500/10
        border border-emerald-500/20
        text-emerald-400
        hover:bg-emerald-500/20
        transition
        cursor-pointer
      "
    >
      {children}
    </div>
  );
}
