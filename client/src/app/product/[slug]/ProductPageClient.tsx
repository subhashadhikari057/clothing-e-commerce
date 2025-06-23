"use client";

import Image from "next/image";
import { useState } from "react";
import { Heart, Share2 } from "lucide-react";

interface Product {
  slug: string;
  name: string;
  price: string;
  originalPrice?: string;
  discount?: string;
  description: string;
  sizes: string[];
  images: string[];
}

export default function ProductPageClient({ product }: { product: Product }) {
  const [mainImg, setMainImg] = useState(product.images[0]);

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 font-cormorant text-gray-700">
      {/* Top area */}
      <div className="grid lg:grid-cols-2 gap-10">
        {/* Images */}
        <div className="flex gap-4">
          <div className="flex flex-col gap-2">
            {product.images.map((src) => (
              <Image
                key={src}
                src={src}
                alt={product.name}
                width={64}
                height={80}
                className={`cursor-pointer border ${
                  mainImg === src ? "border-gray-800" : "border-gray-300"
                } rounded-md`}
                onClick={() => setMainImg(src)}
              />
            ))}
          </div>
          <Image
            src={mainImg}
            alt={product.name}
            width={600}
            height={800}
            className="rounded-lg object-cover flex-1"
            priority
          />
        </div>

        {/* Details */}
        <div className="space-y-4">
          <h1 className="text-2xl sm:text-3xl font-semibold text-gray-900">
            {product.name}
          </h1>

          <div className="flex items-center gap-3">
            <span className="text-xl sm:text-2xl font-bold">{product.price}</span>
            {product.originalPrice && (
              <span className="text-sm sm:text-base line-through text-gray-400">
                {product.originalPrice}
              </span>
            )}
            {product.discount && (
              <span className="text-sm text-green-700">({product.discount})</span>
            )}
          </div>

          <p className="text-sm text-gray-600">{product.description}</p>

          <div>
            <h4 className="text-sm font-medium mb-1">Size</h4>
            <div className="flex gap-2">
              {product.sizes.map((s) => (
                <button
                  key={s}
                  className="w-10 h-10 border rounded hover:border-gray-600"
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:gap-4 mt-4">
            <button className="flex-1 py-3 border rounded-full hover:bg-gray-50">
              Add to Cart
            </button>
            <button className="flex-1 py-3 bg-black text-white rounded-full hover:bg-gray-800">
              Buy Now
            </button>
          </div>

          <div className="flex gap-3 mt-3">
            <button className="p-2 border rounded hover:bg-gray-50">
              <Heart className="w-4 h-4" />
            </button>
            <button className="p-2 border rounded hover:bg-gray-50">
              <Share2 className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
