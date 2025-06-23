import "./globals.css";
import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import { Cormorant_Garamond } from "next/font/google"; // 👈 NEW luxury font
import Footer from "./components/Footer";
import { Toaster } from 'react-hot-toast'
// Load Cormorant Garamond
const cormorant = Cormorant_Garamond({
  weight: ["300", "400", "500", "600", "700"],  // available static weights
  style: ["normal", "italic"],                 // optional but recommended
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
});


/* ─────────────────────────────── */
/*  Metadata with full icon stack  */
/* ─────────────────────────────── */
export const metadata: Metadata = {
  title: "ambika",
  description: "Elegant and minimal Pashmina store",
  icons: {
    icon: [
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon/favicon.ico", type: "image/x-icon" },
    ],
    apple: [
      { url: "/favicon/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      { rel: "android-chrome", url: "/favicon/android-chrome-192x192.png", sizes: "192x192" },
      { rel: "android-chrome", url: "/favicon/android-chrome-512x512.png", sizes: "512x512" },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cormorant.variable}>
      <body className="bg-white text-gray-900 antialiased font-sans">
        <Navbar />
        
        {children}
        <Toaster position="top-right" />
        <Footer/>
      </body>
    </html>
  );
}
