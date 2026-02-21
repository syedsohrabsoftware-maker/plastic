import { MetadataRoute } from "next";

/* ================================================================
    🗺️ SITEMAP — akplasticscrap.com
    Fully Updated with Top Plastic Buyers Hub & All Cities
================================================================ */

const BASE_URL = "https://akplasticscrap.com";

// ── Cities (Updated with missing cities) ────────────────────────
const locationCities = [
  "bhiwadi",
  "khushkhera",
  "bilaspur",
  "manesar",
  "gurugram",
  "faridabad",
  "palwal",
  "ballabhgarh",
  "alwar",
  "tapukara",
  "tauru", // ✅ Naya add kiya
];

// ── Area+Service combos (SEO Gold) ─────────────────────────────
const areaServiceCombos = [
  { city: "bhiwadi",    service: "plastic-scrap-dealer",   priority: 0.95 },
  { city: "bhiwadi",    service: "iron-scrap-dealer",      priority: 0.90 },
  { city: "bhiwadi",    service: "scrap-dealer-near-me",   priority: 0.90 },
  { city: "alwar",      service: "plastic-scrap-dealer",   priority: 0.90 },
  { city: "khushkhera", service: "plastic-scrap-dealer",   priority: 0.90 },
  { city: "tapukara",   service: "plastic-scrap-dealer",   priority: 0.90 },
  { city: "gurugram",   service: "plastic-scrap-dealer",   priority: 0.90 },
  { city: "gurugram",   service: "scrap-dealer-near-me",   priority: 0.90 },
  { city: "faridabad",  service: "plastic-scrap-dealer",   priority: 0.90 },
  { city: "faridabad",  service: "scrap-dealer-near-me",   priority: 0.90 },
  { city: "manesar",    service: "plastic-scrap-dealer",   priority: 0.85 },
  { city: "manesar",    service: "scrap-dealer-near-me",   priority: 0.85 },
  { city: "palwal",     service: "plastic-scrap-dealer",   priority: 0.85 },
  { city: "ballabhgarh",service: "plastic-scrap-dealer",   priority: 0.85 },
  { city: "alwar",      service: "scrap-dealer-near-me",   priority: 0.85 },
  { city: "bilaspur",   service: "plastic-scrap-dealer",   priority: 0.85 },
  { city: "tauru",      service: "scrap-dealer-near-me",   priority: 0.85 }, // ✅ Naya combo
];

// ── Services ───────────────────────────────────────────────────
const services = [
  { slug: "plastic-scrap-dealer",     priority: 0.95 },
  { slug: "iron-scrap-dealer",        priority: 0.90 },
  { slug: "metal-scrap-dealer",       priority: 0.90 },
  { slug: "industrial-scrap-buyer",   priority: 0.90 },
  { slug: "road-waste-management",    priority: 0.90 },
  { slug: "e-waste-scrap-dealer",     priority: 0.90 },
  { slug: "plastic-scrap-pickup",     priority: 0.85 },
  { slug: "metal-scrap-pickup",       priority: 0.85 },
  { slug: "e-waste-disposal",         priority: 0.85 },
  { slug: "bulk-scrap-management",    priority: 0.85 },
  { slug: "factory-waste-disposal",   priority: 0.85 },
];

// ── Blog posts ─────────────────────────────────────────────────
const blogPosts = [
  "plastic-scrap-recycling-benefits",
  "how-to-sell-plastic-scrap",
  "industrial-scrap-management",
  "copper-scrap-price-today-bhiwadi",
  "plastic-scrap-kaise-bechein",
  "hdpe-ldpe-pvc-scrap-rate",
  "iron-scrap-rate-delhi-ncr",
  "e-waste-disposal-bhiwadi",
  "factory-waste-management-tips",
];

// ── Bhiwadi nested pages ───────────────────────────────────────
const bhiwadiNested = [
  "metal-rate-today",
  "pollution-free-factory-bhiwadi",
  "scrap-dealer-bhiwadi",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now   = new Date();
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  return [

    // ═══════════════════════════════════════════════════════════
    // 1. CORE — Priority 1.0
    // ═══════════════════════════════════════════════════════════
    {
      url: `${BASE_URL}/`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/scrap-rate-today`,
      lastModified: today,
      changeFrequency: "always",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/areas/top-plastic-buyers`, // ✅ Naya Hub Page Add Kiya
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/locations/bhiwadi/metal-rate-today`,
      lastModified: today,
      changeFrequency: "always",
      priority: 1.0,
    },

    // ═══════════════════════════════════════════════════════════
    // 2. HIGH-VALUE CONVERSION — Priority 0.9+
    // ═══════════════════════════════════════════════════════════
    {
      url: `${BASE_URL}/contact`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/services`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/scrap-dealer-bhiwadi`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/locations/bhiwadi/factory-waste-disposal`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },

    // ═══════════════════════════════════════════════════════════
    // 3. INFORMATIONAL & DYNAMIC PAGES
    // ═══════════════════════════════════════════════════════════
    {
      url: `${BASE_URL}/about`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },

    // 4. SERVICES SUBPAGES
    ...services.map((s) => ({
      url: `${BASE_URL}/services/${s.slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: s.priority,
    })),

    // 5. LOCATION PAGES
    ...locationCities.map((city) => ({
      url: `${BASE_URL}/locations/${city}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.85,
    })),

    // 6. AREA + SERVICE COMBOS (SEO GOLD)
    ...areaServiceCombos.map((combo) => ({
      url: `${BASE_URL}/areas/${combo.city}/${combo.service}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: combo.priority,
    })),

    // 7. BLOG POSTS
    ...blogPosts.map((slug) => ({
      url: `${BASE_URL}/blog/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),

    // 8. UTILITY
    {
      url: `${BASE_URL}/privacy-policy`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}