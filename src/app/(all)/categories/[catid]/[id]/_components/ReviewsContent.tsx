import { useAppSelector } from "@/rtk/hooks";
import { Star } from "lucide-react";
import { useTranslations } from "next-intl";

export function ReviewsContent() {
    const t = useTranslations();
    const { product } = useAppSelector((s) => s.productDetails);

    return (
        <div className="w-full max-w-[700px]">
            {/* Rating Summary */}
            <div className="flex items-center gap-4">
                <div>
                    <div className="text-[25px] font-semibold text-[var(--text-primary)]">
                        {product?.avg_rating}
                    </div>

                    <div className="mt-1 flex gap-[3px]">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <Star
                                key={star}
                                size={16}
                                fill="var(--warning)"
                                strokeWidth={0}
                                className="text-[var(--warning)]"
                            />
                        ))}
                    </div>
                </div>

                <div className="text-[14px] text-[var(--text-muted)]">
                    {t("basedOn")}{" "}
                    <span className="text-[var(--text-secondary)]">
                        {product?.reviews_count.toLocaleString()}
                    </span>{" "}
                    {t("reviewsLabel")}
                </div>
            </div>

            {/* Review */}
            <div className="mt-6 rounded-[8px] border border-[var(--border-dark)] bg-[var(--bg-tertiary)] p-4 sm:p-5">
                <p className="text-[14px] leading-[1.7] text-[var(--text-secondary)] sm:text-[15px]">
                    {t("reviewQuote")}
                </p>

                <p className="mt-3 text-[12px] text-[var(--text-muted)] sm:text-[13px]">
                    {t("verifiedCustomer")}
                </p>
            </div>
        </div>
    );
}