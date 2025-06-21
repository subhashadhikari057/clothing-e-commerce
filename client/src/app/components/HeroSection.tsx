"use client";

import Image from "next/image";

export default function HeroSection() {
  return (
    <section>
      {/* Hero Image */}
      <div className="relative w-full h-[120vh]">
  <Image
    src="/hero.png"
    alt="Colorful pashmina collection"
    fill
    /* cover the whole area but pin the crop to the top */
    style={{ objectFit: "cover", objectPosition: "top center" }}
    priority
  />
</div>

      {/* Story Text */}
      <div className="max-w-3xl mx-auto px-6 text-center py-12 text-gray-700 space-y-6 font-poppins font-extralight">
        <p className="text-sm leading-relaxed">
          Pashmina, derived from the Persian word <em>“pashm”</em> meaning wool, is more than fabric — it’s a symbol of warmth,
          heritage, and craftsmanship. At <span className="font-semibold">Ambika</span>, we carry forward this centuries-old
          Himalayan tradition with integrity, elegance, and timeless minimalism.
        </p>

        <p className="text-sm leading-relaxed">
          Our story begins with a commitment to natural fibers, slow fashion, and meaningful detail — from delicately hand-woven shawls
          to thoughtfully finished scarves that speak to the soul. Every piece is rooted in cultural richness and designed for modern expression.
        </p>
      </div>
    </section>
  );
}
