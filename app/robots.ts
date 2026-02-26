import { MetadataRoute } from "next";

/* ================================================================
   🤖 ROBOTS.TS — akplasticscrap.com
   Fully Optimized for ALL Slugs (Buyer, Dealer, In-City)
================================================================ */

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        // ── 1. Sabhi Ache Bots (Google, Bing, etc.) ────────────
        userAgent: "*",
        allow: [
          "/",
          "/services/",
          "/locations/",
          "/areas/",
          "/blog/",
          "/scrap-rate-today",
          "/scrap-dealer-bhiwadi",
          "/scrap-buyer-in-*",    // ✅ Covers: scrap-buyer-in-jaipur
          "/scrap-buyer-*",       // ✅ Covers: scrap-buyer-agra
          "/scrap-dealer-*",      // ✅ IMPORTANT: Covers: scrap-dealer-khushkhera
          "/about",
          "/contact",
          "/industries",
        ],
        disallow: [
          "/api/",
          "/_next/",
          "/admin/",
          "/dashboard/",
          "/*.json$",
          "/privacy-policy",
          "/terms-and-conditions",
        ],
      },

      {
        // ── 2. Spam Bots (Block) ───────────────────────────────
        userAgent: [
          "AhrefsBot",
          "SemrushBot",
          "MJ12bot",
          "DotBot",
          "BLEXBot",
          "DataForSeoBot",
        ],
        disallow: "/", 
      },

      {
        // ── 3. AI Protection ───────────────────────────────────
        userAgent: "GPTBot",
        disallow: "/",
      },

      {
        // ── 4. Googlebot Specific ──────────────────────────────
        userAgent: "Googlebot",
        allow: [
          "/",
          "/scrap-buyer-in-*",
          "/scrap-buyer-*",
          "/scrap-dealer-*", // ✅ Added for complete coverage
        ],
        disallow: ["/api/", "/_next/", "/admin/"],
      },

      {
        userAgent: "Googlebot-Image",
        allow: "/",
      },
    ],
    sitemap: "https://akplasticscrap.com/sitemap.xml",
  };
}