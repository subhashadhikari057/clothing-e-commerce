/* ────────────────────────────────────────────
   src/app/layout.tsx
   Root layout (server component)
──────────────────────────────────────────── */

import "./globals.css";
import type { Metadata } from "next";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Cormorant_Garamond } from "next/font/google";

/* ---------- Google font ---------- */
const cormorant = Cormorant_Garamond({
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
});

/* ---------- Meta / icons ---------- */
export const metadata: Metadata = {
  title: "ambika",
  description: "Elegant and minimal Pashmina store",
  icons: {
    icon: [
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon/favicon.ico", type: "image/x-icon" },
    ],
    apple: [{ url: "/favicon/apple-touch-icon.png", sizes: "180x180" }],
    other: [
      { rel: "android-chrome", url: "/favicon/android-chrome-192x192.png" },
      { rel: "android-chrome", url: "/favicon/android-chrome-512x512.png" },
    ],
  },
};

/* ---------- Client-side providers ---------- */
import Providers from "@/providers";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cormorant.variable}>
      <body className="bg-white text-gray-900 antialiased font-sans">
        <Navbar />

        {/* all client providers & toaster */}
        <Providers>{children}</Providers>

        <Footer />
      </body>
    </html>
  );
}
