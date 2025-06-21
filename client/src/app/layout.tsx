import "./globals.css";
import type { Metadata } from "next";
import Navbar from "./components/Navbar";   // ⬅️ NEW

export const metadata: Metadata = {
  title: "Ambika Pashmina",
  description: "Elegant and minimal Pashmina store",
};



export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
  <link
    href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100&display=swap"
    rel="stylesheet"
  />
</head>
      <body className="bg-white text-gray-900 antialiased">
        <Navbar/>
        {/* Navbar and content */}
        {children}
      </body>
    </html>
  );
}

