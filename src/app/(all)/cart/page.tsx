import { useTranslations } from "next-intl";
import Summary from "@/components/Cart/Summary";
import Coupon from "@/components/Cart/Coupon";
import ProductsCart from "@/components/Cart/ProductsCart";
import { products } from "@/components/FlashSales/data";
import ProductCard from "@/components/ProductCard/ProductCard";

export default function Page() {
  const t = useTranslations();

  return (
    <section className="container mt-18 py-5 md:py-10">
      {/* Header */}
      <div className="mb-6 flex flex-row items-center justify-between gap-4 sm:mb-8">
        <h2 className="text-2xl font-semibold sm:text-4xl">
          {t("Cart")}
        </h2>
      </div>

      {/* Cart Content */}
      <div className="grid grid-cols-1 items-start gap-6 xl:grid-cols-3">

        {/* Left - Products */}
        <div className="min-w-0 col-span-1 xl:col-span-2">
          <ProductsCart />
        </div>

        {/* Right - Summary + Coupon */}
        <aside className="flex w-full flex-col gap-6 col-span-1 xl:sticky xl:top-18">
          <Summary />
          <Coupon />
        </aside>

      </div>

      {/* Header */}
      <div className="mb-6 flex flex-row items-center justify-between gap-4 sm:mb-8 mt-20">
        <h2 className="text-2xl font-semibold sm:text-4xl">
          {t("recommendedForYou")}
        </h2>

      </div>

      {/* Products */}
      <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
        {products.slice(0, 4).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}