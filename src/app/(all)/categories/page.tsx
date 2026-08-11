import CoverCategories from "@/components/CoverCategories/CoverCategories";
import DesignCategories from "@/components/DesignCategories/DesignCategories";
import Products from "@/components/ProductsWithPagination/Products";
import { useTranslations } from "next-intl";


export default function Page() {
  const t = useTranslations();
  return (
    <main className="pt-18">
      {/* ================= HERO ================= */}
      <CoverCategories />

      {/* ================= CATEGORIES ================= */}
      <section className="container py-14">
        {/* Header */}
        <div className="mb-8 flex flex-col gap-5 sm:gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="text-center lg:text-start">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              {t("shopByCategoryTitle")}
            </h2>

          </div>
        </div>

        <DesignCategories />
      </section>

      {/* ================= PRODUCTS ================= */}
      <Products />

    </main>
  );
}