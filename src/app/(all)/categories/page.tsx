import CoverCategories from "@/components/CoverCategories/CoverCategories";
import DesignCategories from "@/components/DesignCategories/DesignCategories";
import Products from "@/components/ProductsWithPagination/Products";
import ShopByBrand from "@/components/ShopByBrand/ShopByBrand";


export default function Page() {
  return (
    <main className="pt-18">
      <CoverCategories />
      <DesignCategories />
      <Products />
      <ShopByBrand />
    </main>
  );
}