import CoverCategories from "@/components/CoverCategories/CoverCategories";
import DesignCategories from "@/components/DesignCategories/DesignCategories";
import Products from "@/components/ProductsWithPagination/Products";
import ShopByBrand from "@/components/ShopByBrand/ShopByBrand";
import { useTranslations } from "next-intl";

export default function Page() {
  const t = useTranslations();
  return (
    <main className="pt-18">
      <CoverCategories />
      <Products text={t("earpods")} noCats />
      <ShopByBrand />
    </main>
  );
}