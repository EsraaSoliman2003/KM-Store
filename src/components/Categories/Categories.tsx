import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";
import { categories } from "./data";
import { useTranslations } from "next-intl";
import CategoryCard from "../CategoryCard/CategoryCard";

export default function Categories() {
  const t = useTranslations();

  return (
    <section className="py-12 lg:py-20">
      <div className="container">
        <h2 className="mb-8 text-center lg:text-start font-bold text-(--text-primary) lg:mb-12 text-3xl sm:text-4xl">
          {t("shopByCategoryTitle")}
        </h2>

        <div className="grid grid-cols-2 gap-4 sm:gap-5 xl:grid-cols-3">
          {categories.map((item) => (
            <CategoryCard item={item} className="h-[170px] sm:h-[200px] lg:h-[220px]" />
          ))}
        </div>
      </div>
    </section>
  );
}