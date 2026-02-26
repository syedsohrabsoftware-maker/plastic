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
  ArrowUpRight,
  Zap,
} from "lucide-react";

/* ===============================
   CONFIG
================================ */

const CITY = "bhiwadi";

const SERVICES = [
  {
    slug: "plastic-scrap-dealer",
    label: "Plastic Scrap Dealer",
    desc: "Buy & sell all plastic grades",
    icon: <Recycle size={18} />,
    accent: "#10b981",
  },
  {
    slug: "iron-scrap-dealer",
    label: "Iron Scrap Dealer",
    desc: "Premium iron scrap pricing",
    icon: <Factory size={18} />,
    accent: "#f59e0b",
  },
  {
    slug: "metal-scrap-dealer",
    label: "Metal Scrap Dealer",
    desc: "All metal varieties accepted",
    icon: <Factory size={18} />,
    accent: "#6366f1",
  },
  {
    slug: "industrial-scrap-buyer",
    label: "Industrial Scrap Buyer",
    desc: "Bulk industrial pickups",
    icon: <Truck size={18} />,
    accent: "#ec4899",
  },
  {
    slug: "road-waste-management",
    label: "Road Waste Management",
    desc: "End-to-end waste solutions",
    icon: <Truck size={18} />,
    accent: "#14b8a6",
  },
  {
    slug: "e-waste-scrap-dealer",
    label: "E-Waste Scrap Dealer",
    desc: "Certified e-waste disposal",
    icon: <Cpu size={18} />,
    accent: "#8b5cf6",
  },
];

const NAV_LINKS = [
  { href: "/", icon: <Home size={15} />, label: "Home" },
  { href: "/about", icon: <Info size={15} />, label: "About" },
  { href: "/blog", icon: <FileText size={15} />, label: "Blog" },
  { href: "/contact", icon: <PhoneCall size={15} />, label: "Contact" },
];

/* ===============================
   HEADER
================================ */

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
  }, [mobileOpen]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&family=Syne:wght@700;800&display=swap');

        * { box-sizing: border-box; }

        .hdr-root * { font-family: 'DM Sans', sans-serif; }

        .hdr-topbar {
          position: sticky;
          top: 0;
          z-index: 100;
          background: #020c09;
          border-bottom: 1px solid rgba(16,185,129,0.12);
        }

        .hdr-topbar-inner {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 24px;
          height: 44px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        /* Ticker */
        .hdr-ticker {
          overflow: hidden;
          flex: 1;
          max-width: 320px;
          mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
        }
        .hdr-ticker-track {
          display: flex;
          gap: 40px;
          white-space: nowrap;
          animation: ticker-scroll 18s linear infinite;
        }
        @keyframes ticker-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .hdr-ticker-item {
          font-size: 11px;
          font-weight: 500;
          color: rgba(167,243,208,0.7);
          display: flex;
          align-items: center;
          gap: 6px;
          flex-shrink: 0;
        }
        .hdr-ticker-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #10b981;
          flex-shrink: 0;
          animation: blink-dot 2s ease-in-out infinite;
        }
        @keyframes blink-dot {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }

        /* Topbar actions */
        .hdr-top-actions {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .hdr-wa-pill {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 5px 14px;
          border-radius: 100px;
          background: rgba(16,185,129,0.12);
          border: 1px solid rgba(16,185,129,0.25);
          color: #6ee7b7;
          font-size: 12px;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.2s;
          letter-spacing: 0.01em;
        }
        .hdr-wa-pill:hover {
          background: rgba(16,185,129,0.2);
          border-color: rgba(16,185,129,0.45);
          color: #a7f3d0;
        }

        .hdr-top-icon {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          color: rgba(167,243,208,0.6);
          cursor: pointer;
          transition: all 0.2s;
          text-decoration: none;
        }
        .hdr-top-icon:hover {
          background: rgba(16,185,129,0.15);
          border-color: rgba(16,185,129,0.3);
          color: #6ee7b7;
        }

        /* ── MAIN HEADER ── */
        .hdr-main {
          position: sticky;
          top: 44px;
          z-index: 90;
          transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
          background: rgba(255,255,255,0.97);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(0,0,0,0.07);
        }
        .hdr-main.scrolled {
          background: rgba(255,255,255,0.99);
          box-shadow: 0 4px 24px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04);
        }

        .hdr-main-inner {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 28px;
          height: 68px;
          display: flex;
          align-items: center;
        }

        /* Logo */
        .hdr-logo {
          display: flex;
          align-items: center;
          text-decoration: none;
          flex-shrink: 0;
        }
        .hdr-logo-img {
          height: 42px;
          width: auto;
          object-fit: contain;
        }

        /* Desktop nav */
        .hdr-nav {
          display: none;
          margin-left: auto;
          align-items: center;
          gap: 4px;
        }
        @media (min-width: 900px) {
          .hdr-nav { display: flex; }
        }

        .hdr-nav-link {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 8px 14px;
          border-radius: 10px;
          font-size: 14px;
          font-weight: 500;
          color: #374151;
          text-decoration: none;
          transition: all 0.18s;
          white-space: nowrap;
          letter-spacing: -0.01em;
        }
        .hdr-nav-link:hover {
          background: #f0fdf4;
          color: #059669;
        }
        .hdr-nav-link svg { opacity: 0.6; }
        .hdr-nav-link:hover svg { opacity: 1; }

        /* Services dropdown trigger */
        .hdr-svc-btn {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 8px 14px;
          border-radius: 10px;
          font-size: 14px;
          font-weight: 500;
          color: #374151;
          background: none;
          border: none;
          cursor: pointer;
          transition: all 0.18s;
          letter-spacing: -0.01em;
        }
        .hdr-svc-btn:hover, .hdr-svc-btn.active {
          background: #f0fdf4;
          color: #059669;
        }
        .hdr-svc-btn svg { opacity: 0.6; }
        .hdr-svc-btn:hover svg, .hdr-svc-btn.active svg { opacity: 1; }
        .hdr-chevron {
          transition: transform 0.25s;
        }
        .hdr-chevron.open { transform: rotate(180deg); }

        /* Dropdown */
        .hdr-dropdown-wrap {
          position: relative;
        }
        .hdr-dropdown {
          position: absolute;
          left: 50%;
          top: calc(100% + 12px);
          transform: translateX(-50%);
          width: 520px;
          background: #ffffff;
          border-radius: 20px;
          border: 1px solid rgba(0,0,0,0.08);
          box-shadow:
            0 20px 60px rgba(0,0,0,0.12),
            0 4px 16px rgba(0,0,0,0.06),
            0 0 0 1px rgba(16,185,129,0.06);
          padding: 16px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 8px;
          opacity: 0;
          transform: translateX(-50%) translateY(-8px) scale(0.97);
          pointer-events: none;
          transition: all 0.22s cubic-bezier(0.16, 1, 0.3, 1);
          transform-origin: top center;
        }
        .hdr-dropdown.open {
          opacity: 1;
          transform: translateX(-50%) translateY(0) scale(1);
          pointer-events: all;
        }

        .hdr-dropdown-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 14px;
          border-radius: 12px;
          text-decoration: none;
          transition: all 0.18s;
          group: true;
        }
        .hdr-dropdown-item:hover {
          background: #f0fdf4;
        }
        .hdr-dropdown-icon {
          width: 36px;
          height: 36px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: all 0.18s;
        }
        .hdr-dropdown-item:hover .hdr-dropdown-icon {
          transform: scale(1.08);
        }
        .hdr-dropdown-label {
          font-size: 13px;
          font-weight: 600;
          color: #111827;
          line-height: 1.3;
          letter-spacing: -0.01em;
        }
        .hdr-dropdown-desc {
          font-size: 11.5px;
          color: #9ca3af;
          margin-top: 1px;
          line-height: 1.3;
        }
        .hdr-dropdown-arrow {
          margin-left: auto;
          opacity: 0;
          color: #10b981;
          transition: all 0.18s;
          flex-shrink: 0;
        }
        .hdr-dropdown-item:hover .hdr-dropdown-arrow {
          opacity: 1;
          transform: translateX(2px);
        }

        /* Dropdown header */
        .hdr-dropdown-header {
          grid-column: 1 / -1;
          padding: 4px 14px 8px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid #f3f4f6;
          margin-bottom: 4px;
        }
        .hdr-dropdown-header-title {
          font-size: 11px;
          font-weight: 700;
          color: #9ca3af;
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }
        .hdr-dropdown-header-badge {
          font-size: 10px;
          font-weight: 600;
          color: #059669;
          background: #d1fae5;
          padding: 2px 8px;
          border-radius: 100px;
        }

        /* CTA Button */
        .hdr-cta {
          display: none;
          align-items: center;
          gap: 8px;
          margin-left: 16px;
          padding: 10px 22px;
          border-radius: 12px;
          background: #0a2e1f;
          color: #fff;
          font-size: 14px;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.2s;
          letter-spacing: -0.01em;
          white-space: nowrap;
          border: 1.5px solid transparent;
          position: relative;
          overflow: hidden;
        }
        .hdr-cta::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, #10b981, #059669);
          opacity: 0;
          transition: opacity 0.2s;
        }
        .hdr-cta:hover::before { opacity: 1; }
        .hdr-cta > * { position: relative; z-index: 1; }
        .hdr-cta:hover {
          transform: translateY(-1px);
          box-shadow: 0 8px 24px rgba(16,185,129,0.35);
        }

        @media (min-width: 900px) {
          .hdr-cta { display: flex; }
        }

        /* Pulse dot on CTA */
        .hdr-cta-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #10b981;
          position: relative;
        }
        .hdr-cta-dot::after {
          content: '';
          position: absolute;
          inset: -3px;
          border-radius: 50%;
          border: 1.5px solid #10b981;
          animation: cta-pulse 1.6s ease-out infinite;
        }
        @keyframes cta-pulse {
          0% { opacity: 1; transform: scale(1); }
          100% { opacity: 0; transform: scale(2.2); }
        }

        /* Mobile hamburger */
        .hdr-hamburger {
          display: flex;
          margin-left: auto;
          width: 42px;
          height: 42px;
          align-items: center;
          justify-content: center;
          border-radius: 12px;
          background: #0a2e1f;
          color: #fff;
          border: none;
          cursor: pointer;
          transition: all 0.2s;
        }
        .hdr-hamburger:hover {
          background: #10b981;
          transform: scale(1.05);
        }
        @media (min-width: 900px) {
          .hdr-hamburger { display: none; }
        }

        /* ── MOBILE MENU ── */
        .mob-overlay {
          position: fixed;
          inset: 0;
          z-index: 120;
          pointer-events: none;
        }
        .mob-overlay.open { pointer-events: all; }

        .mob-backdrop {
          position: absolute;
          inset: 0;
          background: rgba(2,12,9,0.7);
          backdrop-filter: blur(4px);
          opacity: 0;
          transition: opacity 0.35s;
        }
        .mob-overlay.open .mob-backdrop { opacity: 1; }

        .mob-panel {
          position: absolute;
          top: 0;
          right: 0;
          height: 100%;
          width: min(85vw, 360px);
          background: #020c09;
          display: flex;
          flex-direction: column;
          transform: translateX(100%);
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          overflow-y: auto;
        }
        .mob-overlay.open .mob-panel { transform: translateX(0); }

        .mob-panel-inner {
          padding: 24px 24px 40px;
          display: flex;
          flex-direction: column;
          min-height: 100%;
        }

        .mob-close {
          width: 38px;
          height: 38px;
          border-radius: 10px;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.1);
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          margin-bottom: 32px;
          align-self: flex-start;
          transition: all 0.18s;
        }
        .mob-close:hover { background: rgba(255,255,255,0.12); }

        .mob-nav { display: flex; flex-direction: column; gap: 2px; }

        .mob-nav-link {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 14px 16px;
          border-radius: 12px;
          text-decoration: none;
          color: rgba(255,255,255,0.85);
          font-size: 15px;
          font-weight: 500;
          transition: all 0.18s;
          letter-spacing: -0.01em;
        }
        .mob-nav-link:hover {
          background: rgba(16,185,129,0.1);
          color: #6ee7b7;
        }
        .mob-nav-link svg { color: rgba(16,185,129,0.7); flex-shrink: 0; }

        .mob-svc-btn {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 14px 16px;
          border-radius: 12px;
          background: none;
          border: none;
          width: 100%;
          color: rgba(255,255,255,0.85);
          font-size: 15px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.18s;
          letter-spacing: -0.01em;
        }
        .mob-svc-btn:hover, .mob-svc-btn.open {
          background: rgba(16,185,129,0.1);
          color: #6ee7b7;
        }
        .mob-svc-btn svg:first-child { color: rgba(16,185,129,0.7); }
        .mob-svc-chevron { margin-left: auto; transition: transform 0.25s; color: rgba(255,255,255,0.4) !important; }
        .mob-svc-chevron.open { transform: rotate(180deg); }

        .mob-svc-list {
          display: flex;
          flex-direction: column;
          gap: 2px;
          padding: 8px 0 4px 16px;
          overflow: hidden;
          max-height: 0;
          transition: max-height 0.35s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .mob-svc-list.open { max-height: 420px; }

        .mob-svc-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 11px 14px;
          border-radius: 10px;
          text-decoration: none;
          color: rgba(167,243,208,0.7);
          font-size: 13.5px;
          font-weight: 500;
          transition: all 0.18s;
        }
        .mob-svc-item:hover {
          background: rgba(16,185,129,0.1);
          color: #6ee7b7;
        }

        .mob-svc-icon {
          width: 30px;
          height: 30px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .mob-divider {
          height: 1px;
          background: rgba(255,255,255,0.06);
          margin: 16px 0;
        }

        /* Mobile bottom CTA */
        .mob-cta-section {
          margin-top: auto;
          padding-top: 28px;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .mob-cta-call {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 14px;
          border-radius: 14px;
          background: linear-gradient(135deg, #10b981, #059669);
          color: #fff;
          font-size: 15px;
          font-weight: 700;
          text-decoration: none;
          letter-spacing: -0.01em;
          transition: all 0.2s;
        }
        .mob-cta-call:hover {
          transform: translateY(-1px);
          box-shadow: 0 8px 24px rgba(16,185,129,0.4);
        }

        .mob-cta-wa {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 13px;
          border-radius: 14px;
          background: rgba(16,185,129,0.08);
          border: 1px solid rgba(16,185,129,0.2);
          color: #6ee7b7;
          font-size: 15px;
          font-weight: 600;
          text-decoration: none;
          letter-spacing: -0.01em;
          transition: all 0.2s;
        }
        .mob-cta-wa:hover {
          background: rgba(16,185,129,0.14);
        }

        .mob-socials {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          margin-top: 20px;
        }
        .mob-social-icon {
          width: 36px;
          height: 36px;
          border-radius: 10px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.08);
          color: rgba(167,243,208,0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.18s;
        }
        .mob-social-icon:hover {
          background: rgba(16,185,129,0.15);
          color: #6ee7b7;
          border-color: rgba(16,185,129,0.3);
        }

        .mob-brand {
          text-align: center;
          margin-top: 16px;
          font-size: 11px;
          color: rgba(255,255,255,0.2);
          letter-spacing: 0.04em;
        }
      `}</style>

      <div className="hdr-root">

        {/* ── TOP BAR ── */}
        <div className="hdr-topbar">
          <div className="hdr-topbar-inner">

            {/* Ticker */}
            <div className="hdr-ticker">
              <div className="hdr-ticker-track">
                {["Plastic Scrap", "Iron Scrap", "Metal Scrap", "E-Waste", "Industrial Scrap", "Road Waste",
                  "Plastic Scrap", "Iron Scrap", "Metal Scrap", "E-Waste", "Industrial Scrap", "Road Waste"]
                  .map((t, i) => (
                    <span key={i} className="hdr-ticker-item">
                      <span className="hdr-ticker-dot" />
                      {t} Bhiwadi
                    </span>
                  ))}
              </div>
            </div>

            {/* Actions */}
            <div className="hdr-top-actions">
              <a href="https://wa.me/919813124320" className="hdr-wa-pill">
                <MessageCircle size={12} />
                WhatsApp
              </a>
              <a href="tel:9813124320" className="hdr-top-icon"><Phone size={13} /></a>
              <a href="#" className="hdr-top-icon"><Facebook size={13} /></a>
              <a href="#" className="hdr-top-icon"><Instagram size={13} /></a>
              <a href="#" className="hdr-top-icon"><Globe size={13} /></a>
            </div>

          </div>
        </div>

        {/* ── MAIN HEADER ── */}
        <header className={`hdr-main${scrolled ? " scrolled" : ""}`}>
          <div className="hdr-main-inner">

            {/* Logo */}
            <Link href="/" className="hdr-logo">
              <img
                src="/images/logo.png"
                alt="AK Plastic Recycling"
                className="hdr-logo-img"
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hdr-nav">

              {NAV_LINKS.slice(0, 2).map((l) => (
                <Link key={l.href} href={l.href} className="hdr-nav-link">
                  {l.icon} {l.label}
                </Link>
              ))}

              {/* Services Dropdown */}
              <div ref={servicesRef} className="hdr-dropdown-wrap">
                <button
                  onClick={() => setServicesOpen((p) => !p)}
                  className={`hdr-svc-btn${servicesOpen ? " active" : ""}`}
                >
                  <Briefcase size={15} style={{ opacity: 0.6 }} />
                  Services
                  <ChevronDown size={13} className={`hdr-chevron${servicesOpen ? " open" : ""}`} />
                </button>

                <div className={`hdr-dropdown${servicesOpen ? " open" : ""}`}>
                  <div className="hdr-dropdown-header">
                    <span className="hdr-dropdown-header-title">Our Services</span>
                    <span className="hdr-dropdown-header-badge">
                      <Zap size={9} style={{ display: "inline", verticalAlign: "middle", marginRight: 3 }} />
                      Bhiwadi
                    </span>
                  </div>

                  {SERVICES.map((s) => (
                    <Link
                      key={s.slug}
                      href={`/areas/${CITY}/${s.slug}`}
                      className="hdr-dropdown-item"
                      onClick={() => setServicesOpen(false)}
                    >
                      <div
                        className="hdr-dropdown-icon"
                        style={{ background: `${s.accent}14`, color: s.accent }}
                      >
                        {s.icon}
                      </div>
                      <div>
                        <div className="hdr-dropdown-label">{s.label}</div>
                        <div className="hdr-dropdown-desc">{s.desc}</div>
                      </div>
                      <ArrowUpRight size={13} className="hdr-dropdown-arrow" />
                    </Link>
                  ))}
                </div>
              </div>

              {NAV_LINKS.slice(2).map((l) => (
                <Link key={l.href} href={l.href} className="hdr-nav-link">
                  {l.icon} {l.label}
                </Link>
              ))}

            </nav>

            {/* CTA */}
            <a href="tel:9813124320" className="hdr-cta">
              <span className="hdr-cta-dot" />
              <Phone size={15} />
              Call Now
            </a>

            {/* Hamburger */}
            <button className="hdr-hamburger" onClick={() => setMobileOpen(true)}>
              <Menu size={20} />
            </button>

          </div>
        </header>

        {/* ── MOBILE MENU ── */}
        <div className={`mob-overlay${mobileOpen ? " open" : ""}`}>
          <div className="mob-backdrop" onClick={() => setMobileOpen(false)} />

          <div className="mob-panel">
            <div className="mob-panel-inner">

              <button className="mob-close" onClick={() => setMobileOpen(false)}>
                <X size={18} />
              </button>

              <nav className="mob-nav">

                {NAV_LINKS.slice(0, 2).map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    className="mob-nav-link"
                    onClick={() => setMobileOpen(false)}
                  >
                    {l.icon} {l.label}
                  </Link>
                ))}

                {/* Services */}
                <div>
                  <button
                    className={`mob-svc-btn${mobileServicesOpen ? " open" : ""}`}
                    onClick={() => setMobileServicesOpen((p: boolean) => !p)}
                  >
                    <Briefcase size={18} />
                    Services
                    <ChevronDown size={16} className={`mob-svc-chevron${mobileServicesOpen ? " open" : ""}`} />
                  </button>

                  <div className={`mob-svc-list${mobileServicesOpen ? " open" : ""}`}>
                    {SERVICES.map((s) => (
                      <Link
                        key={s.slug}
                        href={`/areas/${CITY}/${s.slug}`}
                        className="mob-svc-item"
                        onClick={() => setMobileOpen(false)}
                      >
                        <div
                          className="mob-svc-icon"
                          style={{ background: `${s.accent}18`, color: s.accent }}
                        >
                          {s.icon}
                        </div>
                        {s.label}
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="mob-divider" />

                {NAV_LINKS.slice(2).map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    className="mob-nav-link"
                    onClick={() => setMobileOpen(false)}
                  >
                    {l.icon} {l.label}
                  </Link>
                ))}

              </nav>

              {/* Bottom CTAs */}
              <div className="mob-cta-section">
                <a href="tel:9813124320" className="mob-cta-call">
                  <Phone size={18} />
                  Call: 98131 24320
                </a>
                <a href="https://wa.me/919813124320" className="mob-cta-wa">
                  <MessageCircle size={18} />
                  WhatsApp Us
                </a>

                <div className="mob-socials">
                  <div className="mob-social-icon"><Facebook size={15} /></div>
                  <div className="mob-social-icon"><Instagram size={15} /></div>
                  <div className="mob-social-icon"><Globe size={15} /></div>
                  <div className="mob-social-icon"><Phone size={15} /></div>
                </div>

                <p className="mob-brand">AK PLASTIC RECYCLING · BHIWADI</p>
              </div>

            </div>
          </div>
        </div>

      </div>
    </>
  );
}