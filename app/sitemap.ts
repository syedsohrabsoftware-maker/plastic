import { MetadataRoute } from "next";

/**
 * 🔁 Central source of truth
 * (same cities jo [city]/page.tsx me hain)
 */
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

const BASE_URL = "https://akplasticscrap.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    // ================= CORE PAGES =================
    {
      url: `${BASE_URL}/`,
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: `${BASE_URL}/services`,
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/locations`,
      lastModified: new Date(),
      priority: 0.9,
    },

    // ================= SEO LANDING PAGES =================
    {
      url: `${BASE_URL}/scrap-dealer-bhiwadi`,
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/pollution-free-factory-bhiwadi`,
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/industries`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/scrap-pickup-process`,
      lastModified: new Date(),
      priority: 0.8,
    },

    // ================= DYNAMIC LOCATION PAGES =================
    ...cities.map((city) => ({
      url: `${BASE_URL}/locations/${city}`,
      lastModified: new Date(),
      priority: 0.8,
    })),
  ];
}
