"use client";

import { useTranslations } from "next-intl";
import Header from "./_components/Header";
import OrderHeader from "./_components/OrderHeader";
import MainContent from "./_components/MainContent";
import Side from "./_components/Side";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";

export default function Page() {
    const t = useTranslations();
    const order = {
        id: "#TN-84921",
        placedAt: "Aug 10, 2026 at 09:45 AM",
        total: "1,467.00 $",
        subtotal: "1,399.00 $",
        discount: "-150.00 $",
        shipping: "Free",
        tax: "148.00 $",
        payment: t("orderDetailsPaid"),
        productsNumbers: 2,
    };

    return (
        <main className="mt-18 min-h-screen py-6 text-[var(--text-primary)] transition-colors duration-300 mb-10">
            <div className="container">
                <Breadcrumb
                    items={[
                        {
                            label: t("settings"),
                            href: "/account-menu",
                            mobileOnly: true,
                        },
                        {
                            label: t("profile"),
                            href: "/profile",
                        },
                        {
                            label: t("myOrders"),
                            href: "/orders",
                        },
                        {
                            label: t("orderDetailsPageTitle"),
                        },
                    ]}
                />
                <Header />
                <OrderHeader order={order} />
                <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
                    <MainContent order={order} />
                    <Side order={order} />
                </div>
            </div>
        </main>
    );
}