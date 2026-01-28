import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ReviewSchema from "./components/ReviewSchema";
import Providers from "./providers/ThemeProvider";

import { Inter } from "next/font/google";

/* ===============================
   FONT SETUP (PROFESSIONAL)
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
