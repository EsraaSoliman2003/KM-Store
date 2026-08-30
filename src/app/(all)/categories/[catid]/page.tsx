import CoverCategories from "@/components/CoverCategories/CoverCategories";
import ShopByBrand from "@/components/ShopByBrand/ShopByBrand";
import WrapperProducts from "./_components/WrapperProducts";

export default function Page() {

  return (
    <main className="pt-18">
      <CoverCategories />
      <WrapperProducts />
      <ShopByBrand />
    </main>
  );
}