import Image from "next/image";
import { FiHeart, FiChevronRight, FiZap } from "react-icons/fi";

const products = [
  {
    id: 1,
    title: "AURA Lite True Wireless Earbuds",
    image: "/iPhone.png",
    price: 400,
    oldPrice: 550,
    rate: 5.0,
    discount: 25,
  },
  {
    id: 2,
    title: "SonicWave Over-Ear Headphones",
    image: "/iPhone.png",
    price: 250,
    oldPrice: 300,
    rate: 4.5,
    discount: 17,
  },
  {
    id: 3,
    title: "BassBoost Portable Speaker",
    image: "/iPhone.png",
    price: 150,
    oldPrice: 180,
    rate: 3.8,
    discount: 16,
  },
  {
    id: 4,
    title: "NoiseCancelling Travel Headphones",
    image: "/iPhone.png",
    price: 350,
    oldPrice: 420,
    rate: 4.2,
    discount: 17,
  },
];

export default function FlashSales() {
  return (
    <section className="py-14">
      <div className="mx-auto max-w-7xl px-6">

        {/* Header */}
        <div className="mb-8 flex items-start justify-between">

          <div>
            <h2 className="flex items-center gap-2 text-4xl font-bold text-white">
              <FiZap className="text-orange-400" />
              Flash Sales
            </h2>

            <p className="mt-2 text-sm text-white/50">
              Limited time deals on premium electronics
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs text-white/50">Ends in:</span>

            {[
              ["02", "HRS"],
              ["30", "MIN"],
              ["34", "SEC"],
            ].map(([num, label]) => (
              <div
                key={label}
                className="flex h-16 w-16 flex-col items-center justify-center rounded-xl border border-white/10 bg-[#262626]"
              >
                <span className="text-xl font-bold text-red-500">{num}</span>
                <span className="text-[10px] text-white/40">
                  {label}
                </span>
              </div>
            ))}
          </div>

        </div>

        {/* Products */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

          {products.map((product) => (
            <div
              key={product.id}
              className="group overflow-hidden rounded-2xl border border-white/15 bg-[#222]"
            >

              {/* Image */}
              <div className="relative h-56 bg-black">

                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-contain p-6 transition duration-500 group-hover:scale-105"
                />

                <span className="absolute left-3 top-3 rounded-full bg-red-900/80 px-3 py-1 text-[10px] text-red-300">
                  {product.discount}% OFF
                </span>

                <button className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-lg border border-white/20 bg-black/50 text-white">
                  <FiHeart />
                </button>

              </div>

              {/* Details */}
              <div className="p-4">

                <div className="mb-2 flex items-center gap-1 text-xs text-yellow-400">
                  ★★★★★
                  <span className="text-white/40">
                    {product.rate}
                  </span>
                </div>

                <h3 className="min-h-[48px] text-sm text-white">
                  {product.title}
                </h3>

                <div className="mt-3 flex items-end gap-2">

                  <span className="text-3xl font-bold text-white">
                    ${product.price}.00
                  </span>

                  <span className="pb-1 text-sm text-white/30 line-through">
                    ${product.oldPrice}.00
                  </span>

                </div>

              </div>

            </div>
          ))}

        </div>

        {/* Footer */}
        <div className="mt-8 flex justify-end">

          <button className="flex items-center gap-2 border-b border-purple-500 pb-1 text-purple-400 transition hover:text-purple-300">
            Show more
            <FiChevronRight />
          </button>

        </div>

      </div>
    </section>
  );
}