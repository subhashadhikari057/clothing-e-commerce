import "./globals.css";
import type { Metadata } from "next";
import Navbar from "./components/Navbar";

/* ✅ NEW */
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["100", "300", "400"],   // thin, light, regular
  subsets: ["latin"],
  variable: "--font-poppins",      // gives us a CSS variable
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ambika Pashmina",
  description: "Elegant and minimal Pashmina store",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="bg-white text-gray-900 antialiased font-sans">

        <Navbar />
        {children}
      </body>
    </html>
  );
}
