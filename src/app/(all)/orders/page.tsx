"use client";

import React from "react";
import {
  CheckCircle2,
  ChevronRight,
  Clock3,
  Plus,
  ShoppingCart,
  Truck,
  X,
} from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";

type OrderStatus = "shipped" | "delivered" | "processing" | "cancelled";

type Order = {
  id: string;
  date: string;
  total: string;
  itemsCount: number;
  products: {
    name: string;
    image: string;
  }[];
  status: OrderStatus;
  deliveryLabel: string;
  deliveryDate: string;
};

export default function Page() {
  const t = useTranslations();

  const orders: Order[] = [
    {
      id: "#TN-84921",
      date: "Aug 10, 2026",
      total: "1199.00 $",
      itemsCount: 3,
      status: "shipped",
      deliveryLabel: t("ordersEstimatedDelivery"),
      deliveryDate: "Aug 13, 2026",
      products: [
        {
          name: t("ordersProductIphone15ProMax"),
          image: "/2.png",
        },
        {
          name: t("ordersProductMacbookAirM2"),
          image: "/2.png",
        },
        {
          name: t("ordersProductIpadPro"),
          image: "/2.png",
        },
      ],
    },
    {
      id: "#TN-84922",
      date: "Aug 10, 2026",
      total: "1199.00 $",
      itemsCount: 2,
      status: "delivered",
      deliveryLabel: t("ordersEstimatedDelivery"),
      deliveryDate: "Aug 13, 2026",
      products: [
        {
          name: t("ordersProductIphone15ProMax"),
          image: "/2.png",
        },
        {
          name: t("ordersProductMacbookAirM2"),
          image: "/2.png",
        },
      ],
    },
    {
      id: "#TN-84923",
      date: "Aug 10, 2026",
      total: "1199.00 $",
      itemsCount: 2,
      status: "processing",
      deliveryLabel: t("ordersEstimatedDelivery"),
      deliveryDate: "Aug 13, 2026",
      products: [
        {
          name: t("ordersProductIphone15ProMax"),
          image: "/2.png",
        },
        {
          name: t("ordersProductMacbookAirM2"),
          image: "/2.png",
        },
      ],
    },
    {
      id: "#TN-84924",
      date: "Aug 10, 2026",
      total: "1199.00 $",
      itemsCount: 2,
      status: "cancelled",
      deliveryLabel: t("ordersCancelledOn"),
      deliveryDate: "Aug 13, 2026",
      products: [
        {
          name: t("ordersProductIphone15ProMax"),
          image: "/2.png",
        },
        {
          name: t("ordersProductMacbookAirM2"),
          image: "/2.png",
        },
      ],
    },
  ];

  const statusConfig = {
    shipped: {
      label: t("ordersShippedStatus"),
      icon: Truck,
      className:
        "border-(--main) bg-[rgba(104,58,208,0.08)] text-(--main)",
    },

    delivered: {
      label: t("ordersDeliveredStatus"),
      icon: CheckCircle2,
      className:
        "border-[var(--success)] bg-[rgba(34,197,94,0.08)] text-[var(--success)]",
    },

    processing: {
      label: t("ordersProcessingStatus"),
      icon: Clock3,
      className:
        "border-[var(--warning)] bg-[rgba(245,158,11,0.08)] text-[var(--warning)]",
    },

    cancelled: {
      label: t("ordersCancelledStatus"),
      icon: Truck,
      className:
        "border-[var(--error)] bg-[rgba(239,68,68,0.08)] text-[var(--error)]",
    },
  };

  return (
    <main className="min-h-screen py-6 text-(--text-primary) transition-colors duration-300 mt-18 mb-10">
      <div className="container">

        {/* Breadcrumb */}
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
            },
          ]}
        />

        {/* Page Header */}
        <div className="mb-9">
          <h1 className="text-[26px] font-bold leading-tight text-(--text-primary) sm:text-[28px]">
            {t("myOrders")}
          </h1>
          <p className="mt-1.5 text-[15px] text-(--text-secondary)">
            {t("myOrdersSubtitle")}
          </p>
        </div>

        {/* قائمة الطلبات */}
        <div className="flex flex-col gap-6">
          {orders.map((order, index) => {
            const config = statusConfig[order.status];
            const StatusIcon = config.icon;

            return (
              <section
                key={`${order.id}-${index}`}
                className="rounded-sm border border-(--border-dark) bg-(--bg-tertiary) p-4 transition-colors duration-300 sm:p-5"
              >
                {/* شبكة مرنة للشاشات الكبيرة */}
                <div className="grid grid-cols-1 gap-5 lg:grid-cols-[1fr_2fr_180px_200px] lg:gap-6">

                  {/* 1. معلومات الطلب (رقم، تاريخ، إجمالي) */}
                  <div className={`flex flex-col justify-center border-b border-(--border-dark) pb-4 lg:border-b-0 ${t("dir") === "ltr" && "lg:border-r lg:pr-6"} lg:pb-0`}>
                    <p className="text-[18px] font-semibold text-(--text-primary)">
                      {t("ordersOrder")} {order.id}
                    </p>
                    <p className="mt-1 text-[12px] text-(--text-muted)">
                      {order.date}
                    </p>
                    <p className="mt-2 text-[18px] font-semibold text-(--text-primary)">
                      {order.total}
                    </p>
                  </div>

                  {/* 2. المنتجات (صور + أسماء) */}
                  <div className="flex min-w-0 flex-col justify-center lg:items-center gap-3 border-b border-(--border-dark) pb-4 lg:border-b-0 lg:border-r lg:pr-6 lg:pb-0">
                    {/* Product Images */}
                    <div className="flex flex-wrap items-center gap-2.5">
                      {order.products.slice(0, 2).map((product, i) => (
                        <div
                          key={i}
                          className="relative h-20 w-20 overflow-hidden rounded-sm border border-(--border-dark) bg-(--bg-primary)"
                        >
                          <img
                            src={product.image}
                            alt={product.name}
                            className="h-full w-full object-contain p-1"
                          />
                        </div>
                      ))}

                      {order.itemsCount > 2 && (
                        <div className="flex h-20 w-20 items-center justify-center rounded-sm border border-(--border-dark) bg-(--bg-primary) text-[14px] font-medium text-(--text-primary)">
                          +{order.itemsCount - 2}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Order Status + Delivery Date */}
                  <div className="flex flex-col justify-center border-b border-(--border-dark) pb-4 lg:border-b-0 lg:border-r lg:pr-6 lg:pb-0">
                    <div
                      className={`inline-flex items-center gap-2 rounded-sm border px-3 py-2 text-[14px] font-medium ${config.className}`}
                    >
                      <StatusIcon size={18} />
                      <span>{config.label}</span>
                    </div>

                    <p className="mt-2 text-[12px] text-(--text-muted)">
                      {order.deliveryLabel}
                    </p>

                    <p className="text-[13px] font-semibold text-(--text-primary)">
                      {order.deliveryDate}
                    </p>
                  </div>

                  {/* Action Buttons */}
                  <div className={`flex min-w-40 flex-col justify-center gap-2 border-(--border-dark) ${t("dir") === "rtl" && "lg:border-r lg:pr-6"}`}>
                    {order.status === "shipped" && (
                      <>
                        <Link
                          href="/track-your-order"
                          className="flex h-11.5 w-full items-center justify-center gap-2 rounded-sm bg-(--main) px-4 text-[15px] font-medium text-(--text-white) transition-colors hover:bg-(--main-hover)"
                        >
                          <Truck size={19} />
                          {t("ordersTrackYourOrder")}
                        </Link>

                        <Link
                          href={`/orders/${order.id.replace("#", "")}`}
                          className="flex h-11.5 w-full items-center justify-center rounded-sm border border-(--main) bg-transparent px-4 text-[15px] font-medium text-(--main) transition-colors hover:bg-(--main)/10"
                        >
                          {t("ordersOrderDetails")}
                        </Link>
                      </>
                    )}

                    {order.status === "delivered" && (
                      <>
                        <Link
                          href={`/orders/${order.id.replace("#", "")}`}
                          className="flex h-11.5 w-full items-center justify-center rounded-sm border border-(--main) bg-transparent px-4 text-[15px] font-medium text-(--main) transition-colors hover:bg-(--main)/10"
                        >
                          {t("ordersOrderDetails")}
                        </Link>

                        <button
                          type="button"
                          className="flex h-11.5 w-full items-center justify-center gap-2 rounded-sm bg-(--main) px-4 text-[15px] font-medium text-(--text-white) transition-colors hover:bg-(--main-hover)"
                        >
                          <ShoppingCart size={19} />
                          {t("ordersBuyAgain")}
                        </button>
                      </>
                    )}

                    {order.status === "processing" && (
                      <>
                        <Link
                          href={`/orders/${order.id.replace("#", "")}`}
                          className="flex h-11.5 w-full items-center justify-center rounded-sm border border-(--main) bg-transparent px-4 text-[15px] font-medium text-(--main) transition-colors hover:bg-(--main)/10"
                        >
                          {t("ordersOrderDetails")}
                        </Link>

                        <button
                          type="button"
                          className="flex h-11.5 w-full items-center justify-center gap-2 rounded-sm border border-(--error) bg-transparent px-4 text-[15px] font-medium text-(--error) transition-colors hover:bg-(--error)/10"
                        >
                          <X size={19} />
                          {t("ordersCancelOrder")}
                        </button>
                      </>
                    )}

                    {order.status === "cancelled" && (
                      <Link
                        href={`/orders/${order.id.replace("#", "")}`}
                        className="flex h-11.5 w-full items-center justify-center rounded-sm border border-(--main) bg-transparent px-4 text-[15px] font-medium text-(--main) transition-colors hover:bg-(--main)/10"
                      >
                        {t("ordersOrderDetails")}
                      </Link>
                    )}
                  </div>

                </div>
              </section>
            );
          })}
        </div>
      </div>
    </main>
  );
}
