"use client";

import Image from "next/image";
import { useState } from "react";

/* ——— Pashmina Categories ——— */
interface Category {
  id: string;
  name: string;
  image: string;
  description: string;
}

const categories: Category[] = [
  {
    id: "low-cashmere",
    name: "Low Cashmere",
    image: "/category/shawl.png",
    description: "Affordable blend with essential warmth",
  },
  {
    id: "medium-cashmere",
    name: "Medium Cashmere",
    image: "/category/scarf.png",
    description: "Balanced quality for everyday comfort",
  },
  {
    id: "high-cashmere",
    name: "High Cashmere",
    image: "/category/dupatta.png",
    description: "Refined softness and premium touch",
  },
  {
    id: "premium-cashmere",
    name: "Premium Cashmere",
    image: "/category/kurta.png",
    description: "Pure luxury with unmatched craftsmanship",
  },
];

/* ——— Card (no curves) ——— */
function CategoryCard({ category }: { category: Category }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="group cursor-pointer overflow-hidden transition-transform duration-500 hover:scale-[1.02]"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative aspect-[4/5] w-full">
        <Image
          src={category.image}
          alt={category.name}
          fill
          priority
          className={`object-cover object-top transition-all duration-500 ${
            hovered ? "md:scale-110 md:blur-sm" : "scale-100 blur-0"
          }`}
        />

        {/* Desktop overlay */}
        <div className="hidden md:block absolute inset-0">
          <div
            className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-500 ${
              hovered ? "opacity-90" : "opacity-40"
            }`}
          />
          <div
            className={`absolute inset-0 flex flex-col justify-end p-5 text-white transition-all duration-500 ${
              hovered ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
            }`}
          >
            <h3 className="text-xl font-semibold">{category.name}</h3>
            <p className="text-sm text-white/90">{category.description}</p>
          </div>
        </div>
      </div>

      {/* Mobile label */}
      <h3 className="mt-2 text-center text-[13px] text-gray-800 md:hidden">
        {category.name}
      </h3>
    </div>
  );
}

/* ——— Showcase ——— */
export default function CategoryShowcase() {
  return (
    <section className="w-full max-w-5xl mx-auto px-4 py-6 sm:py-10 font-cormorant">
      {/* Heading */}
      <div className="text-center mb-8">
        <div className="text-stone-400 text-xs tracking-widest uppercase mb-2">
          Nepal&rsquo;s Heritage Weave
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
          Cashmere Collections
        </h2>
        <div className="w-10 h-[2px] bg-stone-400 mx-auto my-3" />
        <p className="text-sm sm:text-base text-gray-600 max-w-md mx-auto font-light">
          Softness in every thread, elegance in every fold.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 gap-3 sm:gap-5">
        {categories.map((c) => (
          <CategoryCard key={c.id} category={c} />
        ))}
      </div>

      {/* CTA button (square) */}
      <div className="text-center mt-10">
        <button className="bg-gray-900 text-white px-6 py-3 text-sm tracking-wide hover:bg-gray-800 transition">
          View All Pashmina
        </button>
      </div>
    </section>
  );
}
