import { Star } from "lucide-react";
import { useTranslations } from "next-intl";

export function ReviewsContent({ reviews }: { reviews: number }) {
    const t = useTranslations();

    return (
        <div className="w-full max-w-[700px]">
            {/* Rating Summary */}
            <div className="flex items-center gap-4">
                <div>
                    <div className="text-[25px] font-semibold text-white">
                        5.0
                    </div>

                    <div className="mt-1 flex gap-[3px]">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <Star
                                key={star}
                                size={16}
                                fill="#f59e0b"
                                strokeWidth={0}
                                className="text-[#f59e0b]"
                            />
                        ))}
                    </div>
                </div>

                <div className="text-[14px] text-[#777]">
                    {t("basedOn")}{" "}
                    <span className="text-[#aaa]">
                        {reviews.toLocaleString()}
                    </span>{" "}
                    {t("reviewsLabel")}
                </div>
            </div>

            {/* Review */}
            <div className="mt-6 rounded-[8px] border border-[#333] bg-[#1d1d1d] p-4 sm:p-5">
                <p className="text-[14px] leading-[1.7] text-[#aaa] sm:text-[15px]">
                    {t("reviewQuote")}
                </p>

                <p className="mt-3 text-[12px] text-[#666] sm:text-[13px]">
                    {t("verifiedCustomer")}
                </p>
            </div>
        </div>
    );
}