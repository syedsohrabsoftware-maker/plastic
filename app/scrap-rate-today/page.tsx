"use client";

import { useState, useEffect, useCallback } from "react";

// ─── STATIC RATES — Roz yahan se manually update karein ──────────────────────
const STATIC_RATES = {
  metals: [
    { id: "copper",    symbol: "Cu", name: "Copper Heavy",     hindiName: "लाल तांबा",     price: 742,  prev: 734, unit: "kg", category: "metal",   purity: "Grade A"   },
    { id: "aluminum",  symbol: "Al", name: "Aluminum Section", hindiName: "एल्युमिनियम",   price: 204,  prev: 204, unit: "kg", category: "metal",   purity: "Industrial"},
    { id: "iron",      symbol: "Fe", name: "Iron Scrap",       hindiName: "लोहा कबाड़",     price: 42,   prev: 44,  unit: "kg", category: "metal",   purity: "Mixed"     },
    { id: "brass",     symbol: "Zn", name: "Brass (Pital)",    hindiName: "पीतल",           price: 485,  prev: 473, unit: "kg", category: "metal",   purity: "Grade A"   },
    { id: "stainless", symbol: "SS", name: "Stainless Steel",  hindiName: "स्टेनलेस स्टील", price: 78,   prev: 76,  unit: "kg", category: "metal",   purity: "Grade 304" },
    { id: "lead",      symbol: "Pb", name: "Lead (Sisa)",      hindiName: "सीसा",           price: 138,  prev: 142, unit: "kg", category: "metal",   purity: "Battery"   },
  ],
  plastics: [
    { id: "hdpe", symbol: "HD", name: "HDPE Scrap",        hindiName: "एचडीपीई",        price: 54, prev: 51, unit: "kg", category: "plastic", purity: "Industrial"},
    { id: "ldpe", symbol: "LD", name: "LDPE (Milk/Pack)",  hindiName: "एलडीपीई",        price: 34, prev: 34, unit: "kg", category: "plastic", purity: "Mixed"     },
    { id: "pvc",  symbol: "PV", name: "PVC Pipe Scrap",    hindiName: "पीवीसी पाइप",    price: 28, prev: 29, unit: "kg", category: "plastic", purity: "Grade B"   },
    { id: "pp",   symbol: "PP", name: "PP Granules",       hindiName: "पीपी ग्रेन्यूल", price: 62, prev: 58, unit: "kg", category: "plastic", purity: "Grade A"   },
  ],
  source: "Manual — Bhiwadi Market",
};

// ─── TYPES ────────────────────────────────────────────────────────────────────
type RateItem = {
  id: string; symbol: string; name: string; hindiName: string;
  price: number; prev: number; unit: string; category: string; purity: string;
};
type Dir = "up" | "down" | "flat";

// ─── HELPERS ─────────────────────────────────────────────────────────────────
function getDelta(price: number, prev: number) {
  const d = price - prev;
  const pct = ((d / prev) * 100).toFixed(2);
  const dir: Dir = d > 0 ? "up" : d < 0 ? "down" : "flat";
  return { d, pct, dir };
}
function fmt(n: number) {
  return "₹" + Number(n).toLocaleString("en-IN");
}
function isMarketOpen() {
  const h = new Date().getHours();
  const day = new Date().getDay(); // 0=Sun
  return day >= 1 && day <= 6 && h >= 9 && h < 18;
}

// ─── TICKER ──────────────────────────────────────────────────────────────────
function Ticker({ items }: { items: RateItem[] }) {
  const all = [...items, ...items];
  return (
    <div style={{ overflow: "hidden", background: "#0a0a0a", borderBottom: "1px solid #1a1a1a", padding: "8px 0" }}>
      <div style={{ display: "flex", gap: "3rem", animation: "ticker 32s linear infinite", width: "max-content" }}>
        {all.map((m, i) => {
          const { d, dir } = getDelta(m.price, m.prev);
          return (
            <span key={i} style={{
              display: "inline-flex", alignItems: "center", gap: "0.4rem",
              fontSize: "11px", fontFamily: "monospace", letterSpacing: "0.05em",
              color: dir === "up" ? "#4ade80" : dir === "down" ? "#f87171" : "#888",
              whiteSpace: "nowrap",
            }}>
              <span style={{ color: "#444", fontSize: "9px" }}>{m.symbol}</span>
              {m.name.split(" ")[0].toUpperCase()}
              <span style={{ color: "#fff", fontWeight: 700 }}>{fmt(m.price)}</span>
              <span>{dir === "up" ? "▲" : dir === "down" ? "▼" : "●"}{Math.abs(d)}</span>
            </span>
          );
        })}
      </div>
    </div>
  );
}

// ─── RATE CARD ───────────────────────────────────────────────────────────────
function RateCard({ item, index }: { item: RateItem; index: number }) {
  const { d, pct, dir } = getDelta(item.price, item.prev);
  const colors = {
    up:   { bg: "#052010", border: "#14532d", badge: "#4ade80", text: "#4ade80" },
    down: { bg: "#1c0505", border: "#450a0a", badge: "#f87171", text: "#f87171" },
    flat: { bg: "#0f0f12", border: "#222",    badge: "#60a5fa", text: "#60a5fa" },
  }[dir];

  return (
    <div
      style={{
        background: "#111", border: `1px solid ${colors.border}`,
        borderRadius: "1.25rem", padding: "1.5rem",
        display: "flex", flexDirection: "column", gap: "0.75rem",
        position: "relative", overflow: "hidden",
        animation: "fadeUp 0.4s ease both",
        animationDelay: `${index * 55}ms`,
        transition: "transform 0.2s, box-shadow 0.2s",
        cursor: "default",
      }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLDivElement).style.transform = "translateY(-3px)";
        (e.currentTarget as HTMLDivElement).style.boxShadow = `0 16px 40px ${colors.bg}`;
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
        (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
      }}
    >
      {/* glow */}
      <div style={{
        position: "absolute", top: 0, right: 0, width: "90px", height: "90px",
        background: `radial-gradient(circle at top right, ${colors.badge}15, transparent 70%)`,
        pointerEvents: "none",
      }} />

      {/* top row */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{
          width: "36px", height: "36px", borderRadius: "10px",
          background: "#1a1a1a", border: "1px solid #2a2a2a",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontFamily: "monospace", fontSize: "11px", fontWeight: 700, color: "#666",
        }}>
          {item.symbol}
        </div>
        <div style={{
          padding: "3px 10px", borderRadius: "999px",
          background: colors.bg, border: `1px solid ${colors.border}`,
          fontSize: "10px", fontWeight: 700, fontFamily: "monospace",
          color: colors.text, letterSpacing: "0.04em",
        }}>
          {dir === "up" ? "▲" : dir === "down" ? "▼" : "●"}{" "}
          {Math.abs(d) > 0 ? `${d > 0 ? "+" : ""}${d} (${pct}%)` : "STABLE"}
        </div>
      </div>

      {/* name */}
      <div>
        <div style={{ fontSize: "13px", fontWeight: 700, color: "#e5e5e5", textTransform: "uppercase", letterSpacing: "0.03em" }}>
          {item.name}
        </div>
        <div style={{ fontSize: "11px", color: "#555", marginTop: "2px", fontFamily: "monospace" }}>
          {item.hindiName} · {item.purity}
        </div>
      </div>

      {/* price */}
      <div style={{ display: "flex", alignItems: "baseline", gap: "0.4rem" }}>
        <span style={{ fontSize: "28px", fontWeight: 900, color: "#fff", fontFamily: "monospace", letterSpacing: "-0.04em", lineHeight: 1 }}>
          {fmt(item.price)}
        </span>
        <span style={{ fontSize: "11px", color: "#555" }}>/{item.unit}</span>
      </div>

      {/* prev */}
      <div style={{ fontSize: "10px", color: "#3a3a3a", fontFamily: "monospace" }}>
        Prev: {fmt(item.prev)} · Change:{" "}
        <span style={{ color: colors.text }}>{d >= 0 ? "+" : ""}{fmt(d)}</span>
      </div>
    </div>
  );
}

// ─── SKELETON ────────────────────────────────────────────────────────────────
function SkeletonCard() {
  return (
    <div style={{ background: "#111", border: "1px solid #1e1e1e", borderRadius: "1.25rem", padding: "1.5rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
      {[36, 55, 80, 40].map((w, i) => (
        <div key={i} style={{
          height: i === 2 ? "30px" : "11px", width: `${w}%`,
          background: "linear-gradient(90deg,#1a1a1a 25%,#242424 50%,#1a1a1a 75%)",
          backgroundSize: "200% 100%", borderRadius: "6px",
          animation: "shimmer 1.4s ease infinite",
        }} />
      ))}
    </div>
  );
}

// ─── MAIN PAGE ────────────────────────────────────────────────────────────────
export default function MetalRateTodayPage() {
  const [data]        = useState(STATIC_RATES);           // always uses static — no API needed
  const [activeTab, setActiveTab] = useState<"all"|"metal"|"plastic">("all");
  const [search, setSearch]       = useState("");
  const [now, setNow]             = useState(new Date());

  // Live clock update
  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 30_000);
    return () => clearInterval(t);
  }, []);

  const allItems: RateItem[] = [...data.metals, ...data.plastics];

  const filtered = allItems.filter(m => {
    const tabOk  = activeTab === "all" || m.category === activeTab;
    const q      = search.trim().toLowerCase();
    const matchOk = !q || m.name.toLowerCase().includes(q) || m.hindiName.includes(q) || m.symbol.toLowerCase().includes(q);
    return tabOk && matchOk;
  });

  const maxPrice  = Math.max(...allItems.map(m => m.price));
  const topItem   = allItems.find(m => m.price === maxPrice);
  const open      = isMarketOpen();

  const tabs = [
    { key: "all",     label: "All" },
    { key: "metal",   label: "Metal" },
    { key: "plastic", label: "Plastic" },
  ] as const;

  return (
    <>
      {/* ── GLOBAL STYLES ── */}
      <style>{`
        @keyframes ticker  { from{transform:translateX(0)} to{transform:translateX(-50%)} }
        @keyframes fadeUp  { from{opacity:0;transform:translateY(14px)} to{opacity:1;transform:translateY(0)} }
        @keyframes shimmer { 0%{background-position:200% 0} 100%{background-position:-200% 0} }
        @keyframes pulse   { 0%,100%{opacity:1} 50%{opacity:.4} }
      `}</style>

      <div style={{ minHeight: "100vh", background: "#0a0a0a", color: "#e5e5e5", fontFamily: "system-ui, sans-serif" }}>

        {/* TICKER */}
        <Ticker items={allItems} />

        <div style={{ maxWidth: "960px", margin: "0 auto", padding: "2.5rem 1.25rem 5rem" }}>

          {/* ── HEADER ── */}
          <header style={{ marginBottom: "2.5rem", animation: "fadeUp .5s ease" }}>
            {/* status pill */}
            <div style={{ display: "flex", alignItems: "center", gap: ".5rem", marginBottom: ".75rem" }}>
              <span style={{
                display: "inline-block", width: "8px", height: "8px", borderRadius: "50%",
                background: "#4ade80", animation: "pulse 1.8s ease infinite",
              }} />
              <span style={{ fontSize: "10px", color: "#4ade80", fontWeight: 700, letterSpacing: ".12em", textTransform: "uppercase", fontFamily: "monospace" }}>
                Static Rates · Manual Update
              </span>
              <span style={{ marginLeft: "auto", fontSize: "10px", color: "#444", fontFamily: "monospace" }}>
                {now.toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" })}
              </span>
            </div>

            <h1 style={{ fontSize: "clamp(2rem,6vw,3.8rem)", fontWeight: 900, color: "#fff", letterSpacing: "-0.04em", lineHeight: 1, margin: 0 }}>
              Metal Rate{" "}
              <span style={{ color: "#4ade80" }}>Today</span>
            </h1>
            <p style={{ fontSize: "12px", color: "#555", marginTop: ".5rem", fontFamily: "monospace" }}>
              AK Plastic Recycling · Bhiwadi &amp; Delhi NCR · Scrap Market Prices
            </p>
          </header>

          {/* ── CONTROLS ── */}
          <div style={{ display: "flex", gap: ".75rem", marginBottom: "1.75rem", flexWrap: "wrap", alignItems: "center", animation: "fadeUp .5s ease .1s both" }}>
            {/* Tab buttons */}
            <div style={{ display: "flex", background: "#111", border: "1px solid #1e1e1e", borderRadius: "12px", padding: "4px", gap: "2px" }}>
              {tabs.map(t => (
                <button key={t.key} onClick={() => setActiveTab(t.key)} style={{
                  padding: "6px 18px", borderRadius: "9px", border: "none",
                  background: activeTab === t.key ? "#1e1e1e" : "transparent",
                  color: activeTab === t.key ? "#e5e5e5" : "#555",
                  fontSize: "11px", fontWeight: 700, cursor: "pointer",
                  fontFamily: "monospace", letterSpacing: ".04em",
                  textTransform: "uppercase", transition: "all .15s",
                }}>
                  {t.label}
                </button>
              ))}
            </div>

            {/* Search */}
            <input
              type="search"
              placeholder="Search copper, loha, HDPE…"
              value={search}
              onChange={e => setSearch(e.target.value)}
              style={{
                flex: 1, minWidth: "160px", padding: "8px 16px",
                borderRadius: "12px", background: "#111",
                border: "1px solid #1e1e1e", color: "#e5e5e5",
                fontSize: "12px", fontFamily: "monospace", outline: "none",
              }}
            />
          </div>

          {/* ── RATE GRID ── */}
          {filtered.length === 0 ? (
            <div style={{ textAlign: "center", padding: "4rem 2rem", color: "#444", fontFamily: "monospace" }}>
              No results for &quot;{search}&quot;
            </div>
          ) : (
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
              gap: "1rem",
            }}>
              {filtered.map((item, i) => <RateCard key={item.id} item={item} index={i} />)}
            </div>
          )}

          {/* ── STATS BAR ── */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
            gap: "1rem", marginTop: "2.5rem",
            animation: "fadeUp .5s ease .4s both",
          }}>
            {[
              { label: "Highest Today",  value: fmt(maxPrice),           sub: topItem?.name ?? "" },
              { label: "Total Items",    value: String(allItems.length), sub: `${data.metals.length} metals · ${data.plastics.length} plastics` },
              { label: "Market",         value: open ? "OPEN" : "CLOSED", sub: "Mon–Sat  9AM–6PM", color: open ? "#4ade80" : "#f87171" },
              { label: "Last Updated",   value: now.toLocaleDateString("en-IN",{day:"2-digit",month:"short"}), sub: "Manual sync" },
            ].map((s, i) => (
              <div key={i} style={{ background: "#111", border: "1px solid #1e1e1e", borderRadius: "1rem", padding: "1.25rem" }}>
                <div style={{ fontSize: "9px", color: "#444", fontFamily: "monospace", letterSpacing: ".1em", textTransform: "uppercase", marginBottom: ".4rem" }}>
                  {s.label}
                </div>
                <div style={{ fontSize: "1.2rem", fontWeight: 800, color: (s as any).color ?? "#fff", lineHeight: 1 }}>
                  {s.value}
                </div>
                <div style={{ fontSize: "10px", color: "#555", marginTop: ".3rem", fontFamily: "monospace" }}>
                  {s.sub}
                </div>
              </div>
            ))}
          </div>

          {/* ── CTA ── */}
          <div style={{
            marginTop: "2.5rem",
            background: "linear-gradient(135deg,#052e16 0%,#0a0a0a 65%)",
            border: "1px solid #14532d", borderRadius: "1.5rem", padding: "2rem",
            display: "flex", flexDirection: "column", gap: "1rem",
            animation: "fadeUp .5s ease .5s both",
          }}>
            <div>
              <div style={{ fontSize: "10px", color: "#4ade80", fontFamily: "monospace", letterSpacing: ".1em", textTransform: "uppercase", marginBottom: ".5rem" }}>
                ▸ Bulk Pickup — 500 KG+
              </div>
              <div style={{ fontSize: "1.4rem", fontWeight: 900, color: "#fff", lineHeight: 1.15 }}>
                Industrial scrap ke liye<br />special rates milenge
              </div>
            </div>
            <a
              href="tel:+919813124320"
              style={{
                display: "inline-flex", alignItems: "center", gap: ".5rem",
                padding: "12px 28px", borderRadius: "999px",
                background: "#4ade80", color: "#052e16",
                fontSize: "12px", fontWeight: 800, fontFamily: "monospace",
                letterSpacing: ".08em", textTransform: "uppercase",
                textDecoration: "none", width: "fit-content",
                transition: "background .15s",
              }}
            >
              📞 +91 9813124320
            </a>
          </div>

          {/* ── FAQ (SEO) ── */}
          <section style={{ marginTop: "3rem" }}>
            <h2 style={{ fontSize: "1.1rem", fontWeight: 800, color: "#e5e5e5", marginBottom: "1rem", letterSpacing: "-0.02em" }}>
              Aksar Pooche Jaane Wale Sawaal
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: ".75rem" }}>
              {[
                { q: "Aaj copper scrap ka rate kya hai?",       a: `Aaj Bhiwadi mein copper heavy (lal tamba) ka rate ₹${data.metals[0].price} per kg hai.` },
                { q: "Iron scrap price today Delhi NCR?",       a: `Iron scrap (loha) ka aaj ka rate ₹${data.metals[2].price} per kg hai Bhiwadi aur Delhi NCR mein.` },
                { q: "HDPE plastic scrap rate kya chal raha?",  a: `HDPE plastic scrap ka rate aaj ₹${data.plastics[0].price} per kg hai.` },
                { q: "Bulk pickup ke liye kaise contact karein?", a: "500 kg se zyada ke liye +91-9813124320 par call karein. Special industrial rates available hain." },
              ].map((faq, i) => (
                <details key={i} style={{ background: "#111", border: "1px solid #1e1e1e", borderRadius: "1rem", padding: "1rem 1.25rem" }}>
                  <summary style={{ fontWeight: 700, color: "#e5e5e5", cursor: "pointer", fontSize: "13px", listStyle: "none", display: "flex", justifyContent: "space-between" }}>
                    {faq.q} <span style={{ color: "#555" }}>▾</span>
                  </summary>
                  <p style={{ marginTop: ".75rem", fontSize: "12px", color: "#777", lineHeight: 1.6, fontFamily: "monospace" }}>
                    {faq.a}
                  </p>
                </details>
              ))}
            </div>
          </section>

          {/* ── FOOTER ── */}
          <footer style={{ marginTop: "2.5rem", paddingTop: "1.5rem", borderTop: "1px solid #1a1a1a", fontSize: "10px", color: "#333", fontFamily: "monospace", lineHeight: 1.8 }}>
            <p>Prices are indicative based on Bhiwadi local market. Actual rates depend on quantity, quality &amp; negotiation.</p>
            <p>Source: {data.source} · {now.toLocaleDateString("en-IN", { day: "2-digit", month: "long", year: "numeric" })}</p>
            <p style={{ marginTop: ".5rem" }}>Serving: Bhiwadi · Alwar · Dharuhera · Rewari · Gurugram · Delhi NCR</p>
          </footer>
        </div>
      </div>
    </>
  );
}