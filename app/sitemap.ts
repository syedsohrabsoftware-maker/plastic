import { MetadataRoute } from "next";

/* ================================================================
   🗺️ SITEMAP — akplasticscrap.com
   Google Search Console ke liye complete URL map
================================================================ */

const BASE_URL = "https://akplasticscrap.com";

// ── Cities (locations + areas dono ke liye use hoga) ──────────
const cities = [
  "bhiwadi",
  "khushkhera",
  "bilaspur",
  "manesar",
  "gurugram",
  "faridabad",
  "palwal",
  "ballabhgarh",
  "alwar",
];

// ── Bhiwadi ke nested service pages ───────────────────────────
const bhiwadiServices = [
  "factory-waste-disposal",
  "metal-rate-today",
  "pollution-free-factory-bhiwadi",
  "scrap-dealer-bhiwadi",
];

// ── Services pages ─────────────────────────────────────────────
const services = [
  "plastic-scrap-pickup",
  "metal-scrap-pickup",
  "e-waste-disposal",
  "bulk-scrap-management",
  "factory-waste-disposal",
];

// ── Blog posts (apne actual slugs yahan add karo) ─────────────
const blogPosts = [
  "copper-scrap-price-today-bhiwadi",
  "plastic-scrap-kaise-bechein",
  "hdpe-ldpe-pvc-scrap-rate",
  "iron-scrap-rate-delhi-ncr",
  "e-waste-disposal-bhiwadi",
  "factory-waste-management-tips",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // Daily updated date (for price pages)
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  return [

    // ═══════════════════════════════════════════════════════════
    // 1. CORE AUTHORITY PAGES — Priority 1.0
    // ═══════════════════════════════════════════════════════════
    {
      url: `${BASE_URL}/`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/scrap-rate-today`,
      lastModified: today,       // ← roz update hota hai
      changeFrequency: "always", // prices minute-to-minute badlte hain
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/locations/bhiwadi/metal-rate-today`,
      lastModified: today,
      changeFrequency: "always",
      priority: 1.0,
    },
{
      url: `${BASE_URL}/locations/bhiwadi/factory-waster-disposal`,
      lastModified: today,
      changeFrequency: "always",
      priority: 1.0,
    },
    // ═══════════════════════════════════════════════════════════
    // 2. HIGH-VALUE CONVERSION PAGES — Priority 0.9
    // ═══════════════════════════════════════════════════════════
    {
      url: `${BASE_URL}/contact`,
      lastModified: now,
      changeFrequency: "yearly",
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
    // 3. IMPORTANT INFORMATIONAL PAGES — Priority 0.8
    // ═══════════════════════════════════════════════════════════
    {
      url: `${BASE_URL}/about`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/industries`,
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
    {
      url: `${BASE_URL}/scrap-pickup-process`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/pollution-free-factory-bhiwadi`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },

    // ═══════════════════════════════════════════════════════════
    // 4. SERVICES SUBPAGES — Priority 0.8
    // ═══════════════════════════════════════════════════════════
    ...services.map((slug) => ({
      url: `${BASE_URL}/services/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),

    // ═══════════════════════════════════════════════════════════
    // 5. LOCATION PAGES — Priority 0.8
    // ═══════════════════════════════════════════════════════════
    ...cities.map((city) => ({
      url: `${BASE_URL}/locations/${city}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),

    // Bhiwadi ke andar nested service pages
    ...bhiwadiServices.map((service) => ({
      url: `${BASE_URL}/locations/bhiwadi/${service}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),

    // ═══════════════════════════════════════════════════════════
    // 6. AREA PAGES — Priority 0.7
    // ═══════════════════════════════════════════════════════════
    ...cities.map((city) => ({
      url: `${BASE_URL}/areas/${city}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),

    // ═══════════════════════════════════════════════════════════
    // 7. BLOG POSTS — Priority 0.7
    // ═══════════════════════════════════════════════════════════
    ...blogPosts.map((slug) => ({
      url: `${BASE_URL}/blog/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),

    // ═══════════════════════════════════════════════════════════
    // 8. UTILITY PAGES — Priority 0.5
    // ═══════════════════════════════════════════════════════════
    {
      url: `${BASE_URL}/faq`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/privacy-policy`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/terms-and-conditions`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}