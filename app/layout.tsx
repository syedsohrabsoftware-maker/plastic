import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Poppins } from "next/font/google";
import ReviewSchema from "./components/ReviewSchema";
import Providers from "./providers/ThemeProvider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${poppins.variable} font-poppins bg-white dark:bg-gray-950
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
