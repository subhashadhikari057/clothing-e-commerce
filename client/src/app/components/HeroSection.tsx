"use client";

import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="w-full">
      {/* ── Hero Image (adaptive height) ───────────────────── */}
      <div className="relative w-full h-[45vh] sm:h-[50vh] md:h-[75vh] lg:h-[100vh]">

        <Image
          src="/hero.png"
          alt="Colorful pashmina collection"
          fill
          className="object-cover object-top"
          priority
        />
      </div>

      {/* ── Story Text ───────────────────────────────────── */}
<div className="max-w-3xl mx-auto px-4 sm:px-6 text-center py-8 sm:py-10 md:py-12 text-gray-700 space-y-6 font-poppins font-extralight italic">
  <p className="text-sm sm:text-base leading-relaxed">
    Pashmina, from the Persian word <em>“pashm”</em> meaning wool, embodies softness, strength, and centuries of Himalayan heritage.
    At <span className="font-semibold">Ambika</span>, we honor this legacy by crafting timeless pieces with care and conscience.
  </p>

  <p className="text-sm sm:text-base leading-relaxed">
    Our journey begins with natural fibers and ends in mindful design — from hand-woven shawls to delicate scarves that carry the warmth of tradition and the simplicity of modern elegance.
    Every thread tells a story, every weave a whisper of art, culture, and soul.
  </p>
</div>

    </section>
  );
}
