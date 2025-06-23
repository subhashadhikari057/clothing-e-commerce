"use client";

import Image from "next/image";

export default function PashminaStory() {
  return (
    <section className="relative bg-white px-4 sm:px-8 py-8 space-y-12 font-cormorant text-gray-800 overflow-hidden">
      {/* ── Title ─────────────────────────────────── */}
      <div className="text-center max-w-2xl mx-auto space-y-4">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 bg-clip-text text-transparent leading-tight">
          What is Pashmina?
        </h2>
        <div className="w-20 h-[2px] bg-gradient-to-r from-amber-400 to-orange-500 mx-auto rounded-full" />
        <p className="text-base sm:text-lg text-gray-600 italic font-light">
          A timeless fabric, hand-woven from the finest Himalayan Cashmere.
        </p>
      </div>

      {/* ── Block 1 — Origin ─────────────────────── */}
      <div className="group relative">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-6 lg:gap-10">
          {/* text */}
          <div className="w-full lg:w-1/2 space-y-4 transform transition duration-700 group-hover:translate-x-1">
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center">
                <span className="text-white text-xs font-bold">1</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-medium text-gray-900">Pashmina’s Roots</h3>
            </div>
            <p className="text-sm sm:text-base leading-relaxed text-gray-700 ml-10">
              High in the Himalayas, the hardy Chyangra goat grows an ultra-soft under-coat — the source of authentic
              pashmina.
            </p>
          </div>
          {/* image */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative overflow-hidden rounded-2xl shadow-lg transition duration-700 group-hover:scale-105">
              <Image
                src="/images/goat.png"
                alt="Chyangra goat in the Himalayas"
                width={450}
                height={300}
                className="w-full object-cover aspect-[3/2]"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </div>

      {/* ── Block 2 — Craftsmanship ───────────────── */}
      <div className="group relative">
        <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-10">
          {/* image */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative overflow-hidden rounded-2xl shadow-lg transition duration-700 group-hover:scale-105">
              <Image
                src="/images/work.png"
                alt="Artisan weaving Pashmina"
                width={500}
                height={330}
                className="w-full object-cover aspect-[3/2]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
            </div>
          </div>
          {/* text */}
          <div className="w-full lg:w-1/2 space-y-4 transform transition duration-700 group-hover:-translate-x-1">
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 flex items-center justify-center">
                <span className="text-white text-xs font-bold">2</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-medium text-gray-900">Woven by Tradition</h3>
            </div>
            <p className="text-sm sm:text-base leading-relaxed text-gray-700 ml-10">
              Master artisans spin and weave each thread, preserving centuries-old skills in every piece.
            </p>
          </div>
        </div>
      </div>

      {/* ── Block 3 — Purity & Luxury ─────────────── */}
      <div className="group relative">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-6 lg:gap-10">
          {/* text */}
          <div className="w-full lg:w-1/2 space-y-4 transform transition duration-700 group-hover:translate-x-1">
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 flex items-center justify-center">
                <span className="text-white text-xs font-bold">3</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-medium text-gray-900">Softness You Can Feel</h3>
            </div>
            <p className="text-sm sm:text-base leading-relaxed text-gray-700 ml-10">
              Feather-light yet warm — pure pashmina offers a luxuriously soft touch you’ll never forget.
            </p>
          </div>
          {/* image */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative overflow-hidden rounded-2xl shadow-lg transition duration-700 group-hover:scale-105">
              <Image
                src="/images/pashmina.png"
                alt="Close-up of Pashmina fabric"
                width={500}
                height={330}
                className="w-full object-cover aspect-[3/2]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </div>

      {/* ── Block 4 — Brand Promise ───────────────── */}
      <div className="group relative">
        <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-10">
          {/* image */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative overflow-hidden rounded-2xl shadow-lg transition duration-700 group-hover:scale-105">
              <Image
                src="/images/women.png"
                alt="Model wearing Pashmina"
                width={500}
                height={330}
                className="w-full object-cover aspect-[3/2]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
            </div>
          </div>
          {/* text */}
          <div className="w-full lg:w-1/2 space-y-4 transform transition duration-700 group-hover:-translate-x-1">
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                <span className="text-white text-xs font-bold">4</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-medium text-gray-900">
                From Mountains to You
              </h3>
            </div>
            <p className="text-sm sm:text-base leading-relaxed text-gray-700 ml-10">
              At&nbsp;
              <span className="font-semibold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Ambika
              </span>
              , each shawl carries the soul of the Himalayas — delivered with care and elegance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
