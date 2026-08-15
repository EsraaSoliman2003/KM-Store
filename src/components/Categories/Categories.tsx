import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";
import { useTranslations } from "next-intl";
import CategoryCard from "../CategoryCard/CategoryCard";
import { categories } from "@/fakeData/data";

export default function Categories() {
  const t = useTranslations();

  return (
    <section className="py-12 lg:py-20">
      <div className="container">
        <h2 className="mb-8 text-center lg:text-start font-bold text-(--text-primary) lg:mb-12 text-3xl sm:text-4xl">
          {t("shopByCategoryTitle")}
        </h2>

        <div className="grid grid-cols-2 gap-4 sm:gap-5 xl:grid-cols-3">
          {categories.slice(0, 3).map((item, index) => (
            <CategoryCard key={index} item={item} className="h-[170px] sm:h-[200px] lg:h-[220px]" />
          ))}
        </div>
      </div>
    </section>
  );
}