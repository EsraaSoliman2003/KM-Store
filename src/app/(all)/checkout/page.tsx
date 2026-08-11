"use client";

import Summary from "@/components/Cart/Summary";
import ProductsCart from "@/components/Cart/ProductsCart";
import Address from "@/components/Address/Address";
import Receiver from "@/components/Receiver/Receiver";
import Payment from "@/components/Payment/Payment";

export default function Page() {
  return (
    <section className="container mt-18 py-5 md:py-10">
      {/* Header */}
      <div className="mb-6 flex flex-row items-center justify-between gap-4 sm:mb-8">
        <h2 className="text-2xl font-semibold sm:text-4xl">Checkout</h2>
      </div>

      {/* Checkout Content */}
      <div className="grid grid-cols-1 items-start gap-6 xl:grid-cols-3">
        {/* Left */}
        <div className="min-w-0 xl:col-span-2">
          <Address />
          <Receiver />
          <ProductsCart />
          <Payment />
        </div>

        {/* Right */}
        <aside className="w-full xl:sticky xl:top-18">
          <Summary
            text="Place order"
            href="/orders"
            className="h-fit"
          />
        </aside>
      </div>
    </section>
  );
}