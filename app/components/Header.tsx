"use client";

/* =========================================================
   AK PLASTIC RECYCLING – ADVANCED HEADER (ENTERPRISE LEVEL)
   ---------------------------------------------------------
   Features:
   ✔ Desktop hover dropdown (no overflow issues)
   ✔ Mobile slide menu (accessible + smooth)
   ✔ Scroll lock (safe)
   ✔ High z-index (never hides behind hero)
   ✔ Clean architecture (small components)
   ✔ SEO + UX friendly
   ✔ Future scalable (mega menu ready)
========================================================= */

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
} from "lucide-react";

/* =========================================================
   MAIN HEADER COMPONENT
========================================================= */

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);

  /* ---------------- BODY SCROLL LOCK ---------------- */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
  }, [mobileOpen]);

  /* ---------------- CLICK OUTSIDE (DESKTOP DROPDOWN) ---------------- */
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        servicesRef.current &&
        !servicesRef.current.contains(e.target as Node)
      ) {
        setServicesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <TopBar />

      <MainHeader
        setMobileOpen={setMobileOpen}
        servicesOpen={servicesOpen}
        setServicesOpen={setServicesOpen}
        servicesRef={servicesRef}
      />

      <MobileMenu
        open={mobileOpen}
        setOpen={setMobileOpen}
        servicesOpen={servicesOpen}
        setServicesOpen={setServicesOpen}
      />

      {/* Spacer to push content below fixed header */}
      <div className="h-[96px] md:h-[104px]" />
    </>
  );
}

/* =========================================================
   TOP BAR
========================================================= */

function TopBar() {
  return (
    <div className="fixed top-0 left-0 w-full z-[100] bg-[#06201E]">
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
  );
}

/* =========================================================
   MAIN HEADER (DESKTOP)
========================================================= */

function MainHeader({
  setMobileOpen,
  servicesOpen,
  setServicesOpen,
  servicesRef,
}: any) {
  return (
    <header className="fixed top-[32px] left-0 w-full z-[90] bg-white/90 backdrop-blur-xl border-b shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* LOGO */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo.png"
            alt="AK Plastic Recycling"
            width={130}
            height={48}
            priority
          />
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-10 text-sm font-medium text-gray-700">
          <NavItem href="/" icon={<Home size={15} />} label="Home" />
          <NavItem href="/about" icon={<Info size={15} />} label="About" />

          {/* SERVICES DROPDOWN */}
          <div
            ref={servicesRef}
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button className="flex items-center gap-1 hover:text-[#0F766E] transition">
              <Briefcase size={15} /> Services <ChevronDown size={14} />
            </button>

            {servicesOpen && <ServicesDropdown />}
          </div>

          <NavItem
            href="/contact"
            icon={<PhoneCall size={15} />}
            label="Contact"
          />
        </nav>

        {/* CTA */}
        <a
          href="tel:9813124320"
          className="hidden md:flex items-center gap-2 px-6 py-2 rounded-full
          bg-green-200 border border-green-800 text-sm font-medium hover:bg-green-100 transition"
        >
          <PhoneCall size={16} /> Call Now
        </a>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setMobileOpen(true)}
          className="md:hidden w-10 h-10 flex items-center justify-center rounded-full border"
          aria-label="Open menu"
        >
          <Menu size={20} />
        </button>
      </div>
    </header>
  );
}

/* =========================================================
   SERVICES DROPDOWN (DESKTOP)
========================================================= */

function ServicesDropdown() {
  return (
    <div
      className="
      absolute left-0 top-full mt-3 w-64
      bg-white border rounded-2xl shadow-xl
      p-3 z-[9999]
      animate-in fade-in slide-in-from-top-2
    "
    >
      <DropdownItem label="Plastic Scrap Pickup" />
      <DropdownItem label="Industrial Plastic Scrap" />
      <DropdownItem label="Bulk Plastic Recycling" />
      <DropdownItem label="Factory Scrap Buyer" />
      <DropdownItem label="E-Waste Management" />
    </div>
  );
}

/* =========================================================
   MOBILE MENU
========================================================= */

function MobileMenu({ open, setOpen, servicesOpen, setServicesOpen }: any) {
  return (
    <div
      className={`fixed inset-0 z-[120] transition-all duration-300
      ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
    >
      {/* BACKDROP */}
      <div
        onClick={() => setOpen(false)}
        className="absolute inset-0 bg-black/50"
      />

      {/* PANEL */}
      <div
        className={`absolute top-0 right-0 h-full w-[85vw] max-w-[360px] bg-white
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
          <MobileNav href="/" label="Home" setOpen={setOpen} />
          <MobileNav href="/about" label="About" setOpen={setOpen} />

          {/* MOBILE SERVICES */}
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
                <div>E-Waste Management</div>
              </div>
            )}
          </div>

          <MobileNav href="/contact" label="Contact" setOpen={setOpen} />
        </nav>

        <div className="mt-10 space-y-3">
          <a
            href="tel:9813124320"
            className="block py-3 text-center rounded-full bg-[#0F766E] text-white"
          >
            📞 Call 9813124320
          </a>
          <a
            href="https://wa.me/919813124320"
            className="block py-3 text-center rounded-full border"
          >
            💬 WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   SMALL REUSABLE COMPONENTS
========================================================= */

function NavItem({ href, icon, label }: any) {
  return (
    <Link href={href} className="flex items-center gap-1 hover:text-[#0F766E]">
      {icon} {label}
    </Link>
  );
}

function DropdownItem({ label }: any) {
  return (
    <div className="px-3 py-2 rounded-lg hover:bg-gray-100 cursor-pointer">
      {label}
    </div>
  );
}

function MobileNav({ href, label, setOpen }: any) {
  return (
    <Link
      href={href}
      onClick={() => setOpen(false)}
      className="flex items-center gap-2"
    >
      {label}
    </Link>
  );
}

function TopIcon({ children }: any) {
  return (
    <div
      className="w-6 h-6 rounded-full flex items-center justify-center
      bg-[#0F766E]/20 border border-[#0F766E] text-[#3AF5C4]"
    >
      {children}
    </div>
  );
}
