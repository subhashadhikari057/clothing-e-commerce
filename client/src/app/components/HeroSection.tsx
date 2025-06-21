"use client";

export default function HeroSection() {
  return (
    <section className="relative flex min-h-[60vh] flex-col items-center justify-center overflow-hidden bg-gray-50 px-4 text-center">
      <h1 className="mb-4 max-w-2xl text-4xl font-bold leading-tight md:text-5xl">
        Premium Nepali&nbsp;Pashmina
      </h1>
      <p className="mb-8 max-w-xl text-gray-600">
        Softness you have to feel to believe. Crafted in Nepal, shipped worldwide.
      </p>
      <a
        href="#"
        className="rounded-lg bg-amber-500 px-6 py-3 font-medium text-white shadow hover:bg-amber-600 transition"
      >
        Shop now
      </a>
    </section>
  );
}
