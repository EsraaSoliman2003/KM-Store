import { useTranslations } from "next-intl";
import Summary from "@/components/Cart/Summary";
import Coupon from "@/components/Cart/Coupon";
import ProductsCart from "@/components/Cart/ProductsCart";

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
        <aside className="flex w-full flex-col gap-6 col-span-1">
          <Summary />
          <Coupon />
        </aside>

      </div>
    </section>
  );
}