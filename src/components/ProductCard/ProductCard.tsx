import { Heart, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import React from "react";

type Props = {
  product: any;
};

export default function ProductCard({ product }: Props) {
  const t = useTranslations();

  return (
    <Link
      href={`/products/${product.id}`}
      className="group block overflow-hidden rounded-2xl border border-(--border-color) bg-(--bg-primary) transition-all duration-300 hover:-translate-y-1 hover:border-(--main) hover:shadow-xl"
    >
      {/* Image */}
      <div className="relative h-56 w-full overflow-hidden bg-(--bg-tertiary)">
        <Image
          src={product.image}
          alt={t(product.title)}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />

        <span className="absolute left-3 top-3 rounded-full bg-(--secondary) px-4 py-2 text-[12px] font-semibold text-(--main) backdrop-blur-sm transition duration-300">
          {t("productDiscountLabel", { discount: product.discount })}
        </span>

        {/* Favorite */}
        <button
          onClick={(e) => e.preventDefault()}
          className="absolute right-3 top-3 flex items-center justify-center rounded-[8px] border border-(--border-color) bg-[rgba(var(--bg-primary-rgb),0.7)] p-2 text-(--text-primary) backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:border-(--main) hover:bg-(--main) hover:text-(--text-white)"
        >
          <Heart size={20} />
        </button>
      </div>

      {/* Details */}
      <div className="p-4 transition-colors duration-300">
        <div className="mb-2 flex items-center gap-1">
          <div className="flex items-center gap-1">
            {Array.from({
              length: Math.floor(product.rate),
            }).map((_, index) => (
              <Star
                key={index}
                size={14}
                fill="currentColor"
                className="text-(--warning)"
              />
            ))}
          </div>

          <span className="ml-1 text-xs text-(--text-muted)">
            {product.rate.toFixed(1)}
          </span>
        </div>

        <h3 className="pb-3 text-sm text-(--text-primary) transition-colors duration-300 group-hover:text-(--main)">
          {t(product.title)}
        </h3>

        <div className="mt-3 flex items-end gap-2">
          <span className="text-3xl font-bold text-(--text-primary)">
            ${product.price}.00
          </span>

          <span className="pb-1 text-sm text-(--text-muted) line-through">
            ${product.oldPrice}.00
          </span>
        </div>
      </div>
    </Link>
  );
}