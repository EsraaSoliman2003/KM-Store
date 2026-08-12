import { FileText, Package } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function Products() {
    const t = useTranslations();

    const products = [
        {
            id: 1,
            name: "iPhone 15 pro max",
            variant: "Deep purple 256 GB",
            price: "3600.00 $",
            quantity: 1,
            subtotal: "3600.00 $",
            image: "/2.png",
        },
        {
            id: 2,
            name: "iPhone 15 pro max",
            variant: "Deep purple 256 GB",
            price: "1199.00 $",
            quantity: 1,
            subtotal: "1199.00 $",
            image: "/2.png",
        },
    ];

    return (
        <section className="overflow-hidden rounded-[15px] border border-(--border-dark) bg-(--bg-tertiary)">
            {/* Header */}
            <div className="flex items-center gap-2 border-b border-(--border-dark) px-4 py-3.5">
                <Package
                    size={24}
                    className="text-(--main)"
                />

                <h2 className="text-[18px] font-semibold text-(--text-primary)">
                    1. {t("orderDetailsOrderItems")}
                </h2>
            </div>

            {/* Table */}
            <div className="mx-3.5 my-3.5 overflow-hidden rounded-[10px] border border-(--border-dark)">
                {/* Table Header */}
                <div className="hidden grid-cols-[1.2fr_1.5fr_1fr_1fr_1fr] border-b border-(--border-dark) bg-(--bg-tertiary) px-5 py-3 text-[14px] text-(--text-muted) sm:grid">
                    <span>{t("orderDetailsProduct")}</span>
                    <span>{t("orderDetailsDetails")}</span>
                    <span>{t("orderDetailsPrice")}</span>
                    <span>{t("orderDetailsQty")}</span>
                    <span>{t("orderDetailsSubtotal")}</span>
                </div>

                {/* Products */}
                {products.map((product, index) => (
                    <div
                        key={product.id}
                        className={`pb-5 grid grid-cols-1 gap-4 px-5 sm:grid-cols-[1.2fr_1.5fr_1fr_1fr_1fr] sm:items-center sm:gap-0 sm:py-2.5 ${
                            index !== products.length - 1
                                ? "border-b border-(--border-dark)"
                                : ""
                        }`}
                    >
                        {/* Product Image */}
                        <div className="flex items-center">
                            <div className="flex h-30 w-30 shrink-0 items-center justify-center overflow-hidden rounded-md">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="h-full w-full object-contain"
                                />
                            </div>
                        </div>

                        {/* Details */}
                        <div className="min-w-0 pr-5">
                            <p className="truncate text-[18px] font-semibold leading-5 text-(--text-primary)">
                                {product.name}
                            </p>

                            <p className="mt-1 truncate text-[14px] text-(--text-muted)">
                                {product.variant}
                            </p>
                        </div>

                        {/* Price */}
                        <div className="flex items-center justify-between sm:block">
                            <span className="text-[12px] text-(--text-muted) sm:hidden">
                                {t("orderDetailsTotal")}
                            </span>

                            <p className="mt-0.5 text-[18px] font-semibold text-(--text-primary)">
                                {product.price}
                            </p>
                        </div>

                        {/* Quantity */}
                        <div className="flex items-center justify-between sm:block">
                            <span className="text-[12px] text-(--text-muted) sm:hidden">
                                {t("orderDetailsQty")}
                            </span>

                            <span className="text-[18px] font-semibold text-(--text-primary)">
                                {product.quantity}
                            </span>
                        </div>

                        {/* Subtotal */}
                        <div className="flex items-center justify-between sm:block">
                            <span className="text-[12px] text-(--text-muted) sm:hidden">
                                {t("orderDetailsSubtotal")}
                            </span>

                            <span className="text-[18px] font-semibold text-(--text-primary)">
                                {product.subtotal}
                            </span>
                        </div>
                    </div>
                ))}
            </div>

            {/* Return Policy */}
            <div className="px-4 pb-4 pt-1">
                <Link
                    href="/return-policy"
                    className="group flex w-fit items-center gap-2 text-[16px] font-semibold text-(--text-primary) transition-colors hover:text-(--main)"
                >
                    <FileText
                        size={24}
                        strokeWidth={1.8}
                        className="text-(--main)"
                    />

                    {t("orderDetailsReturnPolicy")}
                </Link>
            </div>
        </section>
    );
}