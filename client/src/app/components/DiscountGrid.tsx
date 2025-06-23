"use client";

import Image from "next/image";

const DISCOUNTS = [
  {
    label: "FLAT 80% OFF",
    image: "/discount/discount.png",
  },
  {
    label: "UPTO 70% OFF",
    image: "/discount/discount1.png",
  },
  {
    label: "UPTO 60% OFF",
    image: "/discount/discount2.png",
  },
];

export default function DiscountGrid() {
  return (
    <section className="py-10 px-4 bg-white font-cormorant text-gray-800">
      {/* Section Title */}
      <div className="text-center mb-8">
        <div className="text-stone-400 text-xs tracking-widest uppercase mb-2">
          Explore Great Savings
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 font-cormorant">
          Shop by Discount
        </h2>
        <div className="w-10 h-[2px] bg-stone-400 mx-auto my-3 rounded-full" />
        <p className="text-sm sm:text-base text-gray-600 max-w-md mx-auto font-light">
          Discover timeless elegance — at exclusive seasonal prices.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {DISCOUNTS.map((d, i) => (
          <div key={i} className="overflow-hidden rounded-lg shadow-sm">
            <div className="relative w-full h-[220px] sm:h-[300px]">
              <Image
                src={d.image}
                alt={d.label}
                fill
                className="object-cover transition-transform duration-300 hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
            <div className="bg-stone-100 text-center py-4 text-base sm:text-lg font-semibold tracking-wider uppercase">
              {d.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
