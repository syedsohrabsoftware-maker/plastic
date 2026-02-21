import { MetadataRoute } from "next";

/* ================================================================
   🤖 ROBOTS.TS — akplasticscrap.com
   Googlebot & other crawlers ke liye rules
   File location: app/robots.ts
================================================================ */

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // ── Main rule: Google + Bing + all good bots ────────────
      {
        userAgent: "*",
        allow: [
          "/",
          "/services/",
          "/locations/",
          "/areas/",
          "/blog/",
          "/industries",
          "/about",
          "/contact",
          "/faq",
          "/scrap-rate-today",
          "/scrap-dealer-bhiwadi",
          "/scrap-pickup-process",
          "/pollution-free-factory-bhiwadi",
        ],
        disallow: [
          "/api/",           // API routes crawl nahi hone chahiye
          "/_next/",         // Next.js internals
          "/admin/",         // admin panel agar ho
          "/dashboard/",     // private pages
          "/*.json$",        // JSON files
          "/privacy-policy", // optional: crawl karna ho toh hata do
          "/terms-and-conditions",
        ],
      },

      // ── Block bad/spam bots ──────────────────────────────────
      {
        userAgent: [
          "AhrefsBot",      // aggressive crawler — bandwidth waste
          "SemrushBot",
          "MJ12bot",
          "DotBot",
          "BLEXBot",
          "DataForSeoBot",
        ],
        disallow: "/",      // inhe poora site block
      },

      // ── GPTBot (OpenAI) — training se bachao ────────────────
      {
        userAgent: "GPTBot",
        disallow: "/",
      },

      // ── Google extended crawling ─────────────────────────────
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: [
          "/api/",
          "/_next/",
          "/admin/",
        ],
      },

      // ── Google Images ────────────────────────────────────────
      {
        userAgent: "Googlebot-Image",
        allow: "/",
      },
    ],

    // Sitemap ka URL — Google ko directly batao
    sitemap: "https://akplasticscrap.com/sitemap.xml",

    // Host (optional but helpful)
    host: "https://akplasticscrap.com",
  };
}