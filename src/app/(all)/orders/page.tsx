"use client";

import React from "react";
import {
  CheckCircle2,
  ChevronRight,
  Clock3,
  Package,
  Truck,
} from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function page() {
  const t = useTranslations();

  const orders = [
    {
      id: "#10245",
      date: "Aug 10, 2026",
      status: t("orderStatusDelivered"),
      statusIcon: CheckCircle2,
      statusClass: "text-green-500 bg-green-500/10",
      image: "/phone.png",
      products: [
        {
          name: t("productArionTV"),
          quantity: 1,
        },
        {
          name: t("productWirelessEarbuds"),
          quantity: 2,
        },
      ],
      total: "EGP 1,626.95",
    },
    {
      id: "#10244",
      date: "Aug 7, 2026",
      status: t("orderStatusOnTheWay"),
      statusIcon: Truck,
      statusClass: "text-[#9b6cff] bg-[#683AD0]/10",
      image: "/phone.png",
      products: [
        {
          name: t("productArionSmartTV"),
          quantity: 1,
        },
        {
          name: t("productWirelessEarbuds"),
          quantity: 1,
        },
      ],
      total: "EGP 950.00",
    },
    {
      id: "#10243",
      date: "Aug 2, 2026",
      status: t("orderStatusProcessing"),
      statusIcon: Clock3,
      statusClass: "text-yellow-400 bg-yellow-400/10",
      image: "/phone.png",
      products: [
        {
          name: t("productWirelessEarbuds"),
          quantity: 1,
        },
      ],
      total: "EGP 400.00",
    },
  ];

  return (
    <main className="container mt-18 py-5 md:py-10">
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-white sm:text-3xl">
          {t("myOrders")}
        </h1>

        <p className="mt-1 text-sm text-gray-400">
          {t("myOrdersSubtitle")}
        </p>
      </div>

      {/* Orders */}
      <div className="flex flex-col gap-5">
        {orders.map((order) => {
          const StatusIcon = order.statusIcon;

          return (
            <div
              key={order.id}
              className="overflow-hidden rounded-2xl border border-[#2d2d2d] bg-[#151515]"
            >
              {/* Order Header */}
              <div className="flex flex-col gap-3 border-b border-[#2d2d2d] px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#683AD0]/10 text-[#9b6cff]">
                    <Package size={19} />
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-white">
                      {t("orderLabel")} {order.id}
                    </p>

                    <p className="mt-0.5 text-xs text-gray-500">
                      {order.date}
                    </p>
                  </div>
                </div>

                <div
                  className={`flex w-fit items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium ${order.statusClass}`}
                >
                  <StatusIcon size={14} />
                  {order.status}
                </div>
              </div>

              {/* Order Body */}
              <div className="p-4 sm:p-5">
                <div className="flex gap-4">
                  {/* Product Image */}
                  <div className="h-[105px] w-[90px] shrink-0 overflow-hidden rounded-xl bg-black sm:h-[120px] sm:w-[105px]">
                    <img
                      src={order.image}
                      alt={t("orderProductImageAlt")}
                      className="h-full w-full object-cover"
                    />
                  </div>

                  {/* Products */}
                  <div className="flex min-w-0 flex-1 flex-col justify-between">
                    <div>
                      {order.products.map((product, index) => (
                        <div
                          key={index}
                          className="mb-2 flex min-w-0 items-start gap-2 last:mb-0"
                        >
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#683AD0]" />

                          <p className="min-w-0 truncate text-sm font-medium text-white">
                            {product.name}
                          </p>

                          <span className="shrink-0 text-xs text-gray-500">
                            ×{product.quantity}
                          </span>
                        </div>
                      ))}
                    </div>

                    <p className="mt-3 text-xs text-gray-500">
                      {order.products.length}{" "}
                      {order.products.length === 1 ? t("orderProductLabel") : t("orderProductsLabel")} {t("inThisOrder")}
                    </p>
                  </div>
                </div>

                {/* Bottom */}
                <div className="mt-5 flex flex-col gap-3 border-t border-[#2d2d2d] pt-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-xs text-gray-500">{t("orderTotalLabel")}</p>
                    <p className="mt-0.5 text-lg font-bold text-white">
                      {order.total}
                    </p>
                  </div>

                  <Link
                    href={"/track-your-order"}
                    className="flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-[#683AD0] px-5 text-sm font-medium text-white transition hover:bg-[#5a30bd] sm:w-auto"
                  >
                    {t("trackYourOrderButton")}
                    <ChevronRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}