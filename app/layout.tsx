import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ReviewSchema from "./components/ReviewSchema";
import Providers from "./providers/ThemeProvider";
import Script from "next/script";

import { Inter } from "next/font/google";

/* ===============================
   FONT SETUP
================================ */

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

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

      {/* ✅ HEAD START */}
      <head>

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
            "telephone": "+91-9813124320",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "IN"
            },
            "areaServed": [
              "Bhiwadi",
              "Gurgaon",
              "Faridabad",
              "Delhi NCR",
              "Alwar"
            ],
            "sameAs": [
              "https://www.google.com/maps"
            ]
          }
          `}
        </Script>

      </head>
      {/* ✅ HEAD END */}

      <body
        className={`${inter.className} bg-white dark:bg-gray-950
        text-gray-900 dark:text-gray-100 transition-colors`}
      >
        <Providers>
          <ReviewSchema />
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}