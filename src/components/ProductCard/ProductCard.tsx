"use client";

import { Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/utils/dtos";
import FavoriteButton from "./FavoriteButton";

type Props = {
  product: Product;
};

const stripHtml = (html: string) => {
  if (!html) return "";

  return html
    .replace(/<[^>]*>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/\s+/g, " ")
    .trim();
};

export default function ProductCard({ product }: Props) {
  const cleanDescription = stripHtml(product.description);

  return (
    <Link
      href={`/categories/${product.category.id}/${product.id}`}
      className="group relative block overflow-hidden rounded-2xl border border-(--border-color) bg-(--bg-primary) transition-all duration-300 hover:-translate-y-1 hover:border-(--main)/40 hover:shadow-[0_12px_35px_rgba(0,0,0,0.08)]"
    >
      {/* Product Image */}
      <div className="relative h-36 w-full overflow-hidden bg-(--bg-secondary) sm:h-44 md:h-48">
        <Image
          src={product.primary_image}
          alt={product.name}
          fill
          sizes="(min-width: 1280px) 25vw, (min-width: 768px) 33vw, 50vw"
          loading="eager"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />

        {/* Soft Image Overlay */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        {/* Discount */}
        {product.discount_info && (
          <span className="absolute left-3 top-3 rounded-full bg-(--main) px-3 py-1.5 text-[10px] font-bold text-white shadow-sm sm:text-xs">
            {product.discount_info}
          </span>
        )}

        {/* Favorite */}
        <FavoriteButton
          productId={product.id}
          isFavorite={product.in_wishlist}
          className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full border border-white/60 bg-white/90 p-0 shadow-sm backdrop-blur-md transition-all duration-300 hover:scale-105 dark:bg-black/70 sm:h-9 sm:w-9"
          iconClassName="h-4 w-4 sm:h-[18px] sm:w-[18px]"
        />
      </div>

     {/* Product Details */}
<div className="p-3 sm:p-3.5">
  {/* Rating */}
  <div className="mb-2 flex items-center gap-1.5">
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, index) => {
        const rating = product.avg_rating;

        return (
          <Star
            key={index}
            size={12}
            strokeWidth={1.8}
            fill={
              index < Math.floor(rating)
                ? "currentColor"
                : "none"
            }
            className={
              index < Math.floor(rating)
                ? "text-(--warning)"
                : "text-(--border-color)"
            }
          />
        );
      })}
    </div>

    <span className="text-[10px] font-medium text-(--text-muted) sm:text-[11px]">
      {product.avg_rating > 0
        ? product.avg_rating.toFixed(1)
        : "No rating"}
    </span>
  </div>

  {/* Category */}
  <p className="mb-0.5 text-[9px] font-semibold uppercase tracking-wide text-(--main) sm:text-[10px]">
    {product.category.name}
  </p>

  {/* Product Name */}
  <h3 className="line-clamp-1 text-[13px] font-semibold leading-[18px] text-(--text-primary) transition-colors duration-300 group-hover:text-(--main) sm:text-sm">
    {product.name}
  </h3>

  {/* Description */}
  <p className="mt-1 line-clamp-1 text-[10px] leading-4 text-(--text-muted) sm:text-[11px]">
    {cleanDescription}
  </p>

  {/* Price */}
  <div className="mt-3 flex items-center gap-1.5">
    <span className="text-base font-bold tracking-tight text-(--text-primary) sm:text-lg">
      ${product.final_price}.00
    </span>

    {product.price !== product.final_price && (
      <span className="text-[10px] text-(--text-muted) line-through sm:text-[11px]">
        ${product.price}.00
      </span>
    )}
  </div>
</div>
    </Link>
  );
}