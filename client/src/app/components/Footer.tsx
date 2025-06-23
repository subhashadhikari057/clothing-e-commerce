"use client";

import { Facebook, Instagram, Youtube, MapPin } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative bg-stone-200 overflow-hidden font-cormorant text-gray-700 text-[14px] leading-relaxed font-sm">
      {/* Top wave divider */}
      <div className="absolute -top-[1px] left-0 right-0">
        <svg viewBox="0 0 1440 120" className="w-full h-[40px]" preserveAspectRatio="none">
          <path d="M0,80 C480,0 960,160 1440,80 L1440,0 L0,0 Z" fill="#ffffff" />
        </svg>
      </div>

      <div className="relative z-10 container mx-auto px-6 sm:px-8 py-12">
        {/* ── Tagline (enhanced) ───────────────── */}
        <div className="relative text-center mb-12 overflow-hidden">
          {/* faint background brand */}
          <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-7xl sm:text-8xl font-bold text-stone-200 opacity-15 select-none pointer-events-none">
            Ambika
          </span>

          {/* heading */}
          <h2 className="relative z-10 text-3xl sm:text-4xl font-light tracking-wide text-stone-700 leading-snug">
            <span className="bg-gradient-to-r from-stone-700 via-stone-800 to-stone-700 bg-clip-text text-transparent font-semibold">
              The&nbsp;Soul
            </span>{" "}
            of Himalayas
          </h2>

          {/* gradient divider */}
          <div className="w-14 h-[2px] mx-auto my-4 rounded-full bg-gradient-to-r from-stone-400/0 via-stone-400 to-stone-400/0" />

          {/* sub-tagline */}
          <p className="text-sm sm:text-base italic tracking-[0.05em] text-stone-500">
            Woven in Elegance
          </p>
        </div>

        {/* ── White panel with bottom wave ───────── */}
        <div className="relative bg-white px-6 sm:px-10 pt-12 pb-20 rounded-t-xl shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            {/* Explore */}
            <FooterCol title="Explore" links={[
              ["About us","/about"],["Partner onboarding","/wholesale"],["News and events","/news"],
              ["Work with us","/artisans"],["Bulk Order","/bulk-order"],["Return Order","/returns"],["Blogs","/blog"]]}/>
            {/* Help */}
            <FooterCol title="Help" links={[
              ["Privacy and terms of use","/privacy"],["Shipping and cancellation","/shipping"],["FAQ's","/faq"]]}/>
            {/* Connect */}
            <div>
              <h4 className="mb-5 text-stone-600 tracking-wide">Connect with us</h4>
              <ul className="space-y-2 text-stone-500">
                <li><Link href="/contact" className="hover:text-stone-700">Contact us</Link></li>
                <li>079-66131721</li><li>+91 6359 021 222</li><li>info@ambika.com</li>
                <li><Link href="/stores" className="hover:text-stone-700">Store locator</Link></li>
              </ul>
            </div>
            {/* Categories */}
            <FooterCol title="Categories" links={[
              ["Pashmina","/pashmina"],["Shawls","/shawls"],["Scarves","/scarves"],["Wraps","/wraps"]]}/>
          </div>

          {/* bottom wave */}
          <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1440 120" className="w-full h-[40px]" preserveAspectRatio="none">
              <path d="M0,40 C480,120 960,0 1440,40 L1440,120 L0,120 Z" fill="#ffffff" />
            </svg>
          </div>
        </div>

        {/* Made in Nepal badge */}
        <div className="text-center mt-6 mb-4">
          <span className="inline-block border border-gray-400 text-gray-600 px-4 py-1 rounded-full text-xs tracking-wide">
            🇳🇵 Made in Nepal
          </span>
        </div>

        {/* bottom bar */}
        <div className="mt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-stone-500 text-xs">
          <p>2024 © Ambika.com — Authentic handcrafted pashmina</p>
          <p className="text-center">Certified by: Genuine Handmade Products</p>
          <div className="flex gap-4">
            {[Facebook, Instagram, MapPin, Youtube].map((Icon, i) => (
              <Link key={i} href="#" className="hover:text-stone-600 transition-colors">
                <Icon className="w-4 h-4 text-stone-400" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ——— Helper Component for columns ——— */
function FooterCol({ title, links }:{
  title:string; links:[string,string][];
}) {
  return (
    <div>
      <h4 className="mb-5 text-stone-600 tracking-wide">{title}</h4>
      <ul className="space-y-2 text-stone-500">
        {links.map(([label, href]) => (
          <li key={href}>
            <Link href={href} className="hover:text-stone-700 transition-colors">
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
