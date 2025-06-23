import { notFound } from "next/navigation";
import ProductPageClient from "./ProductPageClient";

/* ——— replace with real fetch / CMS ——— */
const products = [
  {
    slug: "black-shawl",
    name: "Black Pashmina Shawl",
    price: "₹2,999.00",
    originalPrice: "₹3,999.00",
    discount: "25%",
    description:
      "Luxuriously soft hand-woven black pashmina shawl crafted in Nepal.",
    sizes: ["Free"],
    images: [
      "/pashmina/black-shawl-1.jpg",
      "/pashmina/black-shawl-2.jpg",
      "/pashmina/black-shawl-3.jpg",
    ],
  },
  {
    slug: "pink-scarf",
    name: "Blush Pink Pashmina Scarf",
    price: "₹1,899.00",
    originalPrice: "₹2,199.00",
    discount: "15%",
    description:
      "Feather-light blush scarf woven with Himalayan care and elegance.",
    sizes: ["Free"],
    images: [
      "/pashmina/pink-scarf-1.jpg",
      "/pashmina/pink-scarf-2.jpg",
    ],
  },
];

/* -----------  Metadata  ----------- */
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const product = products.find((p) => p.slug === params.slug);
  return {
    title: product
      ? `${product.name} | Ambika Pashmina`
      : "Product Not Found | Ambika",
    description: product?.description,
  };
}

/* -----------  Page  ----------- */
export default function Page({ params }: { params: { slug: string } }) {
  const product = products.find((p) => p.slug === params.slug);
  if (!product) return notFound();

  /* Pass server data down */
  return <ProductPageClient product={product} />;
}
