"use client";

import CoverTrackYourOrder from "@/components/CoverTrackYourOrder/CoverTrackYourOrder";
import ProductSummary from "./_components/ProductSummary";
import OrderStatus from "./_components/OrderStatus";
import InformationCards from "./_components/InformationCards";
import Help from "./_components/Help";

export default function page() {
    return (
        <main className="pt-18">
            {/* Hero */}
            <CoverTrackYourOrder />

            {/* Content */}
            <div className="container py-6 md:py-8">

                {/* Product Summary */}
                <ProductSummary />

                {/* Order Status */}
                <OrderStatus />

                {/* Information Cards */}
                <InformationCards />

                {/* Help */}
                <Help />
            </div>
        </main>
    );
}