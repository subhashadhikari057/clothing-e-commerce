"use client";

import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="w-full">
      {/* ── Hero Image (adaptive height) ───────────────────── */}
      <div className="relative w-full h-[45vh] sm:h-[50vh] md:h-[75vh] lg:h-[100vh]">

        <Image
          src="/hero1.jpg"
          alt="Colorful pashmina collection"
          fill
          className="object-cover object-top"
          priority
        />
      </div>

      {/* ── Story Text ───────────────────────────────────── */}
<div className="max-w-3xl mx-auto px-4 sm:px-6 text-center py-10 sm:py-10 md:py-12 text-gray-700 space-y-6 font-poppins font-extralight italic text-xs sm:text-xs">
      <p className="leading-relaxed">
  pashmina, from the persian word <em>“pashm”</em> meaning wool, embodies
  softness, strength, and centuries of himalayan heritage. at{" "}
  <span className="font-semibold">ambika</span>, we honor this legacy by
  crafting timeless pieces with care and conscience.
</p>

<p className="leading-relaxed">
  our journey begins with natural fibers and ends in mindful design —
  from hand-woven shawls to delicate scarves that carry the warmth of
  tradition and the simplicity of modern elegance. every thread tells a
  story, every weave a whisper of art, culture, and soul.
</p>

    </div>
    </section>
  );
}
