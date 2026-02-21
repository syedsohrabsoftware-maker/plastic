import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ReviewSchema from "./components/ReviewSchema";
import Providers from "./providers/ThemeProvider";
import Script from "next/script";
import { Metadata, Viewport } from "next"; // ✅ Added for SEO
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

/* ===============================
   ✅ ADVANCED SEO METADATA
================================ */
export const metadata: Metadata = {
  metadataBase: new URL('https://akplasticscrap.com'),
  title: {
    default: "AK Plastic Scrap | Best Scrap Dealer in Bhiwadi & Delhi NCR",
    template: "%s | AK Plastic Scrap"
  },
  description: "AK Plastic Scrap is the leading scrap dealer in Bhiwadi, Gurgaon, and Delhi NCR. We offer best rates for plastic, metal, and industrial scrap with instant pickup.",
  keywords: ["scrap dealer Bhiwadi", "plastic scrap buyer Gurgaon", "industrial scrap Alwar", "scrap pickup Delhi NCR", "AK Plastic Scrap"],
  authors: [{ name: "AK Plastic Scrap" }],
  creator: "AK Plastic Scrap",
  publisher: "AK Plastic Scrap",
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  // Open Graph (Social Media)
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://akplasticscrap.com",
    title: "AK Plastic Scrap | Authorized Scrap Buyers",
    description: "Sell your industrial and plastic scrap at the best market rates. Serving Bhiwadi, Delhi NCR, and Haryana.",
    siteName: "AK Plastic Scrap",
    images: [
      {
        url: "/og-image.jpg", // Make sure to add this in public folder
        width: 1200,
        height: 630,
        alt: "AK Plastic Scrap Services",
      },
    ],
  },
  // Search Engine Crawling
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#4f46e5",
  width: "device-width",
  initialScale: 1,
};

/* ===============================
   ROOT LAYOUT
================================ */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Canonical Link (Self-referencing) */}
        <link rel="canonical" href="https://akplasticscrap.com" />
        
        {/* LOCAL BUSINESS SCHEMA */}
        <Script
          id="local-business-schema"
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {`
          {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "AK Plastic Scrap",
            "url": "https://akplasticscrap.com",
            "logo": "https://akplasticscrap.com/logo.png",
            "telephone": "+91-9813124320",
            "priceRange": "₹₹",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Bhiwadi Industrial Area",
              "addressLocality": "Bhiwadi",
              "addressRegion": "Rajasthan",
              "postalCode": "301019",
              "addressCountry": "IN"
            },
            "areaServed": ["Bhiwadi", "Gurgaon", "Faridabad", "Delhi NCR", "Alwar"],
            "openingHours": "Mo-Su 09:00-20:00"
          }
          `}
        </Script>
      </head>

      <body className={`${inter.className} bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors`}>
        <Providers>
          <ReviewSchema />
          <Header />
          <main>{children}</main> {/* ✅ Wrap children in main for better semantics */}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}