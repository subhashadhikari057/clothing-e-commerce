import "./globals.css";
import type { Metadata } from "next";
import Navbar from "./components/Navbar";

import { Poppins } from "next/font/google";
import localFont from "next/font/local";

/* Google – Poppins (already there) */
const poppins = Poppins({
  weight: ["100", "200", "300", "400"],
  subsets: ["latin"],
  variable: "--font-poppins",   // <- creates CSS var
  display: "swap",
});



export const metadata: Metadata = {
  title: "Ambika",
  description: "Elegant and minimal Pashmina store",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  /* put BOTH variables on <html> */
  return (
    <html lang="en" className={`${poppins.variable}}`}>
      <body className="bg-white text-gray-900 antialiased font-sans">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
