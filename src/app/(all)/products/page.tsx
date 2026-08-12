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

      {/* ================= PRODUCTS ================= */}
      <Products text={t("earpods")} noCats />
      
    </main>
  );
}