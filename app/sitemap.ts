import { MetadataRoute } from "next";

/**
 * 🔁 Central source of truth for location based pages
 * Inhe locations aur areas dono folders ke liye use karenge
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
  const lastModified = new Date();

  return [
    // ================= 1. CORE AUTHORITY PAGES =================
    {
      url: `${BASE_URL}/`,
      lastModified,
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/services`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/industries`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },

    // ================= 2. GLOBAL UTILITY & HIGH-TRAFFIC FOLDERS =================
    // Ye aapke app ke direct folders hain
    {
      url: `${BASE_URL}/scrap-rate-today`, 
      lastModified,
      changeFrequency: 'always', // Prices change minute-to-minute
      priority: 1,
    },
    {
      url: `${BASE_URL}/pollution-free-factory-bhiwadi`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/scrap-dealer-bhiwadi`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/scrap-pickup-process`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/faq`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
    },

    // ================= 3. BHIWADI NESTED SERVICES (High Value) =================
    // Ye folders bhiwadi ke andar nested hain
    {
      url: `${BASE_URL}/locations/bhiwadi/factory-waste-disposal`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/locations/bhiwadi/metal-rate-today`,
      lastModified,
      changeFrequency: 'always',
      priority: 0.9,
    },

    // ================= 4. DYNAMIC LOCATION PROTOCOLS =================
    // Ye locations folder ke sab-pages ke liye
    ...cities.map((city) => ({
      url: `${BASE_URL}/locations/${city}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),

    // ================= 5. SERVICE AREAS PROTOCOLS =================
    // Ye areas folder ke sab-pages ke liye
    ...cities.map((city) => ({
      url: `${BASE_URL}/areas/${city}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
  ];
}