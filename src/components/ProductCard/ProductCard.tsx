"use client"
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
      <div className="relative h-40 md:h-56 w-full lg:aspect-square overflow-hidden">
        <Image
          src={product.image}
          alt={t(product.title)}
          fill
          sizes="(min-width: 1280px) 25vw, (min-width: 768px) 33vw, 50vw"
          loading="eager"
          className="object-cover"
        />

        {/* Discount */}
        <span className="absolute left-2 top-2 rounded-full bg-(--secondary) px-2.5 py-1 text-[10px] font-semibold text-(--main) backdrop-blur-sm transition duration-300 sm:left-3 sm:top-3 sm:px-4 sm:py-2 sm:text-[12px]">
          {t("productDiscountLabel", { discount: product.discount })}
        </span>

        {/* Favorite */}
        <button
          onClick={(e) => e.preventDefault()}
          className="absolute right-2 top-2 flex items-center justify-center rounded-[8px] border border-(--border-color) bg-[rgba(var(--bg-primary-rgb),0.7)] p-1.5 text-(--text-primary) backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:border-(--main) hover:bg-(--main) hover:text-(--text-white) sm:right-3 sm:top-3 sm:p-2"
        >
          <Heart size={16} className="sm:h-5 sm:w-5" />
        </button>
      </div>

      {/* Details */}
      <div className="p-3 sm:p-4 transition-colors duration-300">
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

          <span className="ml-1 text-[11px] sm:text-xs text-(--text-muted)">
            {product.rate.toFixed(1)}
          </span>
        </div>

        <h3 className="pb-2 sm:pb-3 text-xs sm:text-sm text-(--text-primary) transition-colors duration-300 group-hover:text-(--main) line-clamp-2">
          {t(product.title)}
        </h3>

        <div className="mt-3 flex items-end gap-2">
          <span className="text-xl font-bold text-(--text-primary) sm:text-3xl">
            ${product.price}.00
          </span>

          <span className="pb-1 text-xs sm:text-sm text-(--text-muted) line-through">
            ${product.oldPrice}.00
          </span>
        </div>
      </div>
    </Link>
  );
}