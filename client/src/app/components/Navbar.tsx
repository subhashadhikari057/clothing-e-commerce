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
  const [shopDesktopOpen, setShopDesktopOpen] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState("NPR");

  const currencies = ["NPR", "USD", "EUR", "AUD"];

  return (
    /* ↓ pt-1 mobile, pt-3 desktop */
    <header className="w-full border-b border-gray-200 bg-white pt-1 md:pt-3">
      {/* Top notice strip */}
      <p className="py-0.5 text-center text-[10px] font-poppins font-thin uppercase tracking-wider text-gray-900">
        Complimentary Express Delivery Worldwide
      </p>

      {/* ── Top Row ─────────────────────────────────────────────── */}
      <div className="relative mx-auto flex max-w-7xl items-center justify-between px-4 py-8 md:py-2 md:px-10">
        {/* LEFT CLUSTER – hamburger + currency (desktop) + IG (desktop) */}
        <div className="flex items-center gap-4 md:gap-6">
          <button
            aria-label="Open menu"
            className="text-xl md:hidden"
            onClick={() => setDrawerOpen(true)}
          >
            <FiMenu />
          </button>

          {/* Desktop currency + IG */}
          <div className="hidden items-center gap-10 text-sm font-poppins font-thin text-gray-700 md:flex">
            <div
              className="relative"
              onMouseEnter={() => setDesktopCurrencyOpen(true)}
              onMouseLeave={() => setDesktopCurrencyOpen(false)}
            >
              <button className="flex items-center gap-1 hover:text-black">
                {selectedCurrency} <ChevronDownIcon className="h-4 w-4" />
              </button>
              {desktopCurrencyOpen && (
                <ul className="absolute left-0 mt-1 w-24 rounded-lg border bg-white p-2 text-sm shadow-md z-50">
                  {currencies.map((c) => (
                    <li
                      key={c}
                      className="cursor-pointer rounded px-2 py-1 hover:bg-gray-100"
                      onClick={() => {
                        setSelectedCurrency(c);
                        setDesktopCurrencyOpen(false);
                      }}
                    >
                      {c}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <a
              href="https://www.instagram.com/ambikapashmina"
              aria-label="Instagram"
              className="hover:text-black"
            >
              <FaInstagram className="text-lg" />
            </a>
          </div>
        </div>

        {/* CENTER – logo (mobile uses absolute centering, desktop stays flex-center) */}
        {/* Mobile logo */}
        <Link
          href="/"
          aria-label="Home"
          className="absolute left-1/2 -translate-x-1/2 md:hidden"
        >
          <Image
            src="/logo.png"
            alt="Logo"
            priority
            height={40}
            width={100}
            className="object-contain"
          />
        </Link>

        {/* Desktop logo */}
        <div className="hidden md:flex items-center justify-center py-4">
          <Link href="/" aria-label="Home">
            <Image
              src="/logo.png"
              alt="Logo"
              priority
              height={40}
              width={100}
              className="object-contain"
            />
          </Link>
        </div>

        {/* RIGHT CLUSTER – search, user, bag */}
        <div className="flex items-center gap-4 text-gray-700 md:gap-6">
          <FiSearch className="hidden text-lg hover:text-black md:inline" />
          <HiOutlineUser className="hidden text-lg hover:text-black md:inline" />
          <div className="flex cursor-pointer items-center gap-1 hover:text-black">
            <HiOutlineShoppingBag className="text-lg" />
            <span className="hidden font-poppins font-thin text-sm sm:inline">
              Bag
            </span>
          </div>
        </div>
      </div>

      {/* ── Desktop Nav Row ─────────────────────────────────────── */}
      <nav className="hidden md:flex justify-center gap-10 text-[11px] font-poppins font-thin text-gray-700 mb-3">
        <Link href="#" className="hover:text-black">NARRATIVE</Link>

        <div
          className="relative"
          onMouseEnter={() => setShopDesktopOpen(true)}
          onMouseLeave={() => setShopDesktopOpen(false)}
        >
          <button className="flex items-center gap-1 hover:text-black">
            SHOP <ChevronDownIcon className="h-4 w-4" />
          </button>
          {shopDesktopOpen && (
            <ul className="absolute left-1/2 top-full z-20 mt-1 flex min-w-[170px] -translate-x-1/2 flex-col gap-2 rounded-lg border bg-white p-3 shadow-md">
              {["Scarves", "Shawls", "Blankets", "Accessories"].map((i) => (
                <li
                  key={i}
                  className="cursor-pointer rounded px-2 py-1 hover:bg-gray-100"
                >
                  {i}
                </li>
              ))}
            </ul>
          )}
        </div>

        {["STOCKISTS", "PRESS", "JOURNAL"].map((i) => (
          <Link key={i} href="#" className="hover:text-black">{i}</Link>
        ))}
      </nav>

      {/* ── Mobile Drawer (unchanged) ──────────────────────────── */}
      {drawerOpen && (
        <>
          <div
            className="fixed inset-0 z-40 bg-black/40"
            onClick={() => setDrawerOpen(false)}
          />
          <aside className="fixed left-0 top-0 z-50 flex h-full w-72 flex-col bg-white shadow-lg">
            <div className="flex items-center justify-between border-b px-4 py-4">
              <button
                aria-label="Close menu"
                onClick={() => setDrawerOpen(false)}
              >
                <FiX className="text-2xl" />
              </button>
            </div>
            <div className="flex justify-between px-4 pt-5 pb-6 text-[12px] font-medium uppercase tracking-widest text-gray-600">
              <Link href="#" onClick={() => setDrawerOpen(false)}>Search</Link>
              <Link href="#" onClick={() => setDrawerOpen(false)}>Account</Link>
            </div>
            <nav className="flex-1 space-y-6 px-4 font-poppins font-thin text-base text-gray-900">
              <Link
                href="#"
                onClick={() => setDrawerOpen(false)}
                className="block"
              >
                Narrative
              </Link>
              <div>
                <button
                  className="flex w-full items-center justify-between"
                  onClick={() => setShopDrawerOpen((p) => !p)}
                >
                  <span>Shop</span>
                  <ChevronDownIcon
                    className={`h-5 w-5 transition-transform ${
                      shopDrawerOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {shopDrawerOpen && (
                  <ul className="space-y-2 pt-3 pl-4">
                    {["Scarves", "Shawls", "Blankets", "Accessories"].map(
                      (i) => (
                        <li key={i}>
                          <Link
                            href="#"
                            onClick={() => setDrawerOpen(false)}
                            className="block py-1 text-sm"
                          >
                            {i}
                          </Link>
                        </li>
                      )
                    )}
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
            <div className="border-t px-4 py-4">
              <button
                onClick={() => setDrawerCurrencyOpen((p) => !p)}
                className="flex items-center gap-1 text-sm font-poppins font-thin"
              >
                {selectedCurrency} <ChevronDownIcon className="h-4 w-4" />
              </button>
              {drawerCurrencyOpen && (
                <ul className="mt-3 space-y-1 rounded-lg border p-2 shadow">
                  {currencies.map((c) => (
                    <li
                      key={c}
                      className="cursor-pointer rounded px-2 py-1 text-sm hover:bg-gray-100"
                      onClick={() => {
                        setSelectedCurrency(c);
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
