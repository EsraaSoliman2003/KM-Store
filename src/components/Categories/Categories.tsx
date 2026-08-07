import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";
import { categories } from "./data";
import { useTranslations } from "next-intl";

export default function Categories() {
  const t = useTranslations();

  return (
    <section className="py-12 lg:py-20">
      <div className="container">
        <h2 className="mb-8 text-center lg:text-start text-3xl font-bold text-(--text-primary) lg:mb-12 lg:text-5xl">
          {t("shopByCategoryTitle")}
        </h2>

        <div className="grid grid-cols-2 gap-4 sm:gap-5 xl:grid-cols-3">
          {categories.map((item) => (
            <div
              key={item.title}
              className="
              group relative
              h-[170px] sm:h-[200px] lg:h-[220px]
              overflow-hidden rounded-2xl sm:rounded-3xl
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
                alt={t(item.title)}
                fill
                sizes="(min-width: 1280px) 33vw, 50vw"
                loading="eager"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
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
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-3 sm:p-5">
                <div>
                  <h3
                    className="
                    text-base sm:text-lg lg:text-xl
                    font-semibold text-white
                    transition-colors duration-300
                    group-hover:text-(--main-light)
                  "
                  >
                    {t(item.title)}
                  </h3>

                  <p className="mt-1 text-xs text-white/75 transition-colors duration-300 group-hover:text-white sm:mt-2 sm:text-sm">
                    {t(item.products)}
                  </p>
                </div>

                <button
                  className="
                  flex
                  h-9 w-9
                  shrink-0
                  items-center justify-center
                  rounded-full
                  border border-(--border-color)
                  bg-[rgba(var(--bg-primary-rgb),0.8)]
                  text-(--text-primary)
                  backdrop-blur-sm
                  transition-all duration-300
                  sm:h-10 sm:w-10
                  lg:h-11 lg:w-11
                  group-hover:rotate-12
                  group-hover:scale-110
                  group-hover:border-(--main)
                  group-hover:bg-(--main)
                  group-hover:text-(--text-white)
                "
                >
                  <FiArrowUpRight className="text-base sm:text-lg lg:text-xl" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}