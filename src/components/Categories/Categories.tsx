import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";

const categories = [
  {
    title: "Smartphones",
    products: "+840 Products",
    image: "/iPhone.png",
  },
  {
    title: "Gaming",
    products: "+840 Products",
    image: "/iPhone.png",
  },
  {
    title: "Laptops",
    products: "+840 Products",
    image: "/iPhone.png",
  },
  {
    title: "Audio",
    products: "+840 Products",
    image: "/iPhone.png",
  },
  {
    title: "Smart Home",
    products: "+840 Products",
    image: "/iPhone.png",
  },
  {
    title: "Accessories",
    products: "+840 Products",
    image: "/iPhone.png",
  },
];

export default function Categories() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-10 text-4xl font-bold text-white">
          Shop by Category
        </h2>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {categories.map((item) => (
            <div
              key={item.title}
              className="group relative h-[220px] overflow-hidden rounded-3xl"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition duration-500 group-hover:scale-105"
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Content */}
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6">
                <div>
                  <h3 className="text-3xl font-semibold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm text-white/70">
                    {item.products}
                  </p>
                </div>

                <button className="flex h-11 w-11 items-center justify-center rounded-full border border-white/70 text-white transition group-hover:bg-white group-hover:text-black">
                  <FiArrowUpRight size={20} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}