"use client";

import { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX, FiSearch } from "react-icons/fi";
import { HiOutlineUser } from "react-icons/hi";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { FaInstagram } from "react-icons/fa";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [desktopCurrencyOpen, setDesktopCurrencyOpen] = useState(false);
  const [drawerCurrencyOpen, setDrawerCurrencyOpen] = useState(false);
  const [shopDrawerOpen, setShopDrawerOpen] = useState(false);

  const currencies = ["NPR", "USD", "EUR", "AUD"];

  return (
    <header className="w-full border-b border-gray-200 bg-white">
      {/* ① Top strip */}
      <p className="text-center text-[13px] font-poppins font-thin uppercase py-2 text-grey-900 tracking-wider">
        Complimentary Express Delivery Across Nepal
      </p>

      {/* ② Main row */}
      <div className="flex items-center justify-between max-w-7xl mx-auto px-4 md:px-6 py-4">
        {/* ②.a Left side */}
        <div className="flex items-center gap-4 md:gap-6">
          {/* Hamburger – mobile */}
          <button
            aria-label="Open menu"
            className="md:hidden text-xl"
            onClick={() => setDrawerOpen(true)}
          >
            <FiMenu />
          </button>

          {/* Currency + IG – desktop */}
          <div className="hidden md:flex items-center gap-6 text-sm font-poppins font-thin text-gray-700">
            {/* Currency dropdown desktop */}
            <div className="relative">
              <button
                onClick={() => setDesktopCurrencyOpen((p) => !p)}
                className="flex items-center gap-1 hover:text-black"
              >
                NPR <ChevronDownIcon className="w-4 h-4" />
              </button>
              {desktopCurrencyOpen && (
                <ul
                  onMouseLeave={() => setDesktopCurrencyOpen(false)}
                  className="absolute left-0 mt-2 w-24 rounded-lg border bg-white p-2 shadow-md z-20"
                >
                  {currencies.map((c) => (
                    <li
                      key={c}
                      className="cursor-pointer rounded px-2 py-1 text-xs hover:bg-gray-100"
                      onClick={() => setDesktopCurrencyOpen(false)}
                    >
                      {c}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Instagram */}
            <a href="#" aria-label="Instagram" className="hover:text-black">
              <FaInstagram className="text-lg" />
            </a>
          </div>
        </div>

        {/* ②.b Logo */}
        <Link href="/" aria-label="Ambika Pashmina – Home">
          <Image
            src="/logo.png"
            alt="Ambika Logo"
            priority
            height={48}
            width={160}
            className="object-contain"
          />
        </Link>

        {/* ②.c Right side icons */}
        <div className="flex items-center gap-4 md:gap-6 text-gray-700">
          <FiSearch className="hidden md:inline text-lg cursor-pointer hover:text-black" />
          <HiOutlineUser className="hidden md:inline text-lg cursor-pointer hover:text-black" />

          {/* Bag always */}
          <div className="flex items-center gap-1 cursor-pointer hover:text-black">
            <HiOutlineShoppingBag className="text-lg" />
            <span className="hidden sm:inline font-poppins font-thin text-small">Bag</span>
          </div>
        </div>
      </div>

      {/* ③ Desktop nav */}
      <nav className="hidden md:flex justify-center gap-10 text-[15px] font-poppins font-regular text-gray-700 pb-3">
        <Link href="#" className="hover:text-black">Narrative</Link>

        {/* Hover dropdown for Shop */}
        <div className="relative group">
          <button className="flex items-center gap-1 hover:text-black">
            Shop <ChevronDownIcon className="w-4 h-4" />
          </button>
          <ul className="absolute left-1/2 -translate-x-1/2 mt-2 hidden group-hover:flex flex-col rounded-lg border bg-white p-4 shadow-md z-20 min-w-[180px] gap-2">
            {["Scarves", "Shawls", "Blankets", "Accessories"].map((i) => (
              <li key={i} className="cursor-pointer rounded px-2 py-1 hover:bg-gray-100">
                {i}
              </li>
            ))}
          </ul>
        </div>

        {["Stockists", "Press", "Journal"].map((i) => (
          <Link key={i} href="#" className="hover:text-black">
            {i}
          </Link>
        ))}
      </nav>

      {/* ④ Mobile drawer */}
      {drawerOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/40 z-40"
            onClick={() => setDrawerOpen(false)}
          />

          <aside className="fixed left-0 top-0 h-full w-72 bg-white shadow-lg z-50 flex flex-col">
            <div className="flex items-center justify-between px-4 py-4 border-b">
              <span className="sr-only">Menu</span>
              <button aria-label="Close menu" onClick={() => setDrawerOpen(false)}>
                <FiX className="text-2xl" />
              </button>
            </div>

            <div className="flex justify-between px-4 pt-5 pb-6 text-[12px] font-medium uppercase tracking-widest text-gray-600">
              <Link href="#" onClick={() => setDrawerOpen(false)}>Search</Link>
              <Link href="#" onClick={() => setDrawerOpen(false)}>View Account</Link>
            </div>

            <nav className="flex-1 px-4 space-y-6 text-base text-gray-900 font-poppins font-thin">
              <Link href="#" onClick={() => setDrawerOpen(false)} className="block">
                Narrative
              </Link>

              <div>
                <button
                  className="flex items-center justify-between w-full"
                  onClick={() => setShopDrawerOpen((p) => !p)}
                >
                  <span>Shop</span>
                  <ChevronDownIcon
                    className={`w-5 h-5 transition-transform ${
                      shopDrawerOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {shopDrawerOpen && (
                  <ul className="pl-4 pt-3 space-y-2">
                    {["Scarves", "Shawls", "Blankets", "Accessories"].map((i) => (
                      <li key={i}>
                        <Link
                          href="#"
                          onClick={() => setDrawerOpen(false)}
                          className="text-sm block py-1"
                        >
                          {i}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {["Stockists", "Press", "Journal"].map((i) => (
                <Link
                  key={i}
                  href="#"
                  onClick={() => setDrawerOpen(false)}
                  className="block"
                >
                  {i}
                </Link>
              ))}
            </nav>

            <div className="border-t px-4 py-5">
              <button
                onClick={() => setDrawerCurrencyOpen((p) => !p)}
                className="flex items-center gap-1 text-sm font-poppins font-thin"
              >
                NPR <ChevronDownIcon className="w-4 h-4" />
              </button>
              {drawerCurrencyOpen && (
                <ul className="mt-3 border rounded-lg p-2 shadow space-y-1">
                  {currencies.map((c) => (
                    <li
                      key={c}
                      className="px-2 py-1 text-sm hover:bg-gray-100 cursor-pointer rounded"
                      onClick={() => {
                        setDrawerCurrencyOpen(false);
                        setDrawerOpen(false);
                      }}
                    >
                      {c}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </aside>
        </>
      )}
    </header>
  );
}
