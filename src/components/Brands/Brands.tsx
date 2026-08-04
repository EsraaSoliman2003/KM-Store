import Image from "next/image";
import { FiArrowRightCircle, FiChevronRight } from "react-icons/fi";

const brands = [
  {
    id: 1,
    title: "Smartphones",
    products: "+840 Products",
    logo: "/iPhone.png",
  },
  {
    id: 2,
    title: "Smartphones",
    products: "+840 Products",
    logo: "/iPhone.png",
  },
  {
    id: 3,
    title: "Smartphones",
    products: "+840 Products",
    logo: "/iPhone.png",
  },
];

export default function Brands() {
  return (
    <section className="bg-[#1f1f1f] py-14">
      <div className="mx-auto max-w-7xl px-6">

        {/* Header */}
        <h2 className="mb-8 text-4xl font-bold text-white">
          Brands
        </h2>

        {/* Cards */}
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">

          {brands.map((brand) => (
            <div
              key={brand.id}
              className="group relative h-[180px] overflow-hidden rounded-2xl bg-gradient-to-b from-white via-[#d8d8d8] to-[#555]"
            >

              {/* Logo */}
              <div className="absolute inset-0 flex items-center justify-center">
                <Image
                  src={brand.logo}
                  alt={brand.title}
                  width={180}
                  height={90}
                  className="object-contain transition duration-300 group-hover:scale-105"
                />
              </div>

              {/* Bottom Overlay */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/70 to-transparent p-5">

                <div className="flex items-end justify-between">

                  <div>
                    <h3 className="font-semibold text-white">
                      {brand.title}
                    </h3>

                    <p className="mt-1 text-xs text-white/50">
                      {brand.products}
                    </p>
                  </div>

                  <button className="text-white/80 transition hover:text-white">
                    <FiArrowRightCircle size={22} />
                  </button>

                </div>

              </div>

            </div>
          ))}

        </div>

        {/* Footer */}
        <div className="mt-8 flex justify-end">

          <button className="flex items-center gap-2 rounded-xl bg-[#8B5CF6] px-5 py-3 text-white transition hover:bg-[#7C3AED]">
            See all
            <FiChevronRight />
          </button>

        </div>

      </div>
    </section>
  );
}