import Image from "next/image";
import { FiArrowUpRight, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { categories } from "../Categories/data";
import { useTranslations } from "next-intl";

export default function Brands() {
  const t = useTranslations();
  return (
    <section className="py-16">
      <div className="container">

        {/* Header */}
        <div className="mb-8 flex flex-col items-start gap-5 lg:flex-row lg:items-center lg:justify-between">
          <h2 className="text-3xl font-bold text-(--text-primary) sm:text-4xl">
            Brands
          </h2>

          <button className="group flex w-fit items-center gap-2 text-lg text-purple-400 transition-all duration-300 hover:text-purple-300">
            <span className="border-b-2 border-purple-500 pb-1">
              Show more
            </span>

            {t("dir") === "rtl" ? (
              <FiChevronLeft
                size={22}
                className="transition-transform duration-300 group-hover:-translate-x-1"
              />
            ) : (
              <FiChevronRight
                size={22}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            )}
          </button>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {categories.slice(0, 3).map((item) => (
            <div
              key={item.title}
              className="
                group relative h-[220px] overflow-hidden rounded-3xl
                border border-transparent
                transition-all duration-300 ease-in-out
                hover:-translate-y-1
                hover:border-(--main)
                hover:shadow-[0_16px_40px_var(--shadow-color)]
              "
            >
              {/* Image */}
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="
                  object-cover
                  transition-transform duration-500
                  group-hover:scale-110
                "
              />

              {/* Overlay */}
              <div
                className="
                  absolute inset-0
                  bg-gradient-to-t from-black/80 via-black/20 to-transparent
                  transition-opacity duration-300
                  group-hover:opacity-90
                "
              />

              {/* Content */}
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5">
                <div>
                  <h3
                    className="
                      text-xl font-semibold text-white
                      transition-colors duration-300
                      group-hover:text-(--main-light)
                    "
                  >
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm text-white/75 transition-colors duration-300 group-hover:text-white">
                    {item.products}
                  </p>
                </div>

                <button
                  className="
                    flex h-11 w-11 items-center justify-center
                    rounded-full
                    border border-(--border-color)
                    bg-[rgba(var(--bg-primary-rgb),0.8)]
                    text-(--text-primary)
                    backdrop-blur-sm
                    transition-all duration-300
                    group-hover:rotate-12
                    group-hover:scale-110
                    group-hover:border-(--main)
                    group-hover:bg-(--main)
                    group-hover:text-(--text-white)
                  "
                >
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