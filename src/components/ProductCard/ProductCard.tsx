"use client"
import { Heart, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { Product } from "@/utils/dtos";
import FavoriteButton from "./FavoriteButton";

type Props = {
  product: Product;
};

export default function ProductCard({ product }: Props) {
  const t = useTranslations();

  return (
    <Link
      href={`/categories/${product.category.id}/${product.id}`}
      className="group block overflow-hidden rounded-2xl border border-(--border-color) bg-(--bg-primary) transition-all duration-300 hover:-translate-y-1 hover:border-(--main) hover:shadow-xl"
    >
      {/* Image */}
      <div className="relative h-40 md:h-56 w-full lg:aspect-square overflow-hidden">
        <Image
          src={product.primary_image}
          alt={product.name}
          fill
          sizes="(min-width: 1280px) 25vw, (min-width: 768px) 33vw, 50vw"
          loading="eager"
          className="object-cover"
        />

        {/* Discount */}
        <span className="absolute left-2 top-2 rounded-full bg-(--secondary) px-2.5 py-1 text-[10px] font-semibold text-(--error) backdrop-blur-sm transition duration-300 sm:left-3 sm:top-3 sm:px-4 sm:py-2 sm:text-[12px]">
          {product.discount_info} OFF
        </span>

        {/* Favorite */}
        <FavoriteButton productId={product.id} isFavorite={product.in_wishlist} />
      </div>

      {/* Details */}
      <div className="p-3 sm:p-4 transition-colors duration-300">
        <div className="mb-2 flex items-center gap-1">
          <div className="flex items-center gap-1">
            {Array.from({
              length: Math.floor(product.avg_rating),
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
            {product.avg_rating > 0 ? product.avg_rating.toFixed(1) : "-"}
          </span>
        </div>

        <h3 className="pb-2 sm:pb-3 text-xs sm:text-sm text-(--text-primary) transition-colors duration-300 group-hover:text-(--main) truncate">
          {product.name}
        </h3>

        <div className="mt-3 flex min-w-0 items-end gap-2">
          <span className="shrink-0 whitespace-nowrap text-lg font-bold text-(--text-primary) sm:text-3xl">
            ${product.final_price}.00
          </span>

          <span className="min-w-0 truncate pb-1 text-xs text-(--text-muted) line-through sm:text-sm">
            ${product.price}.00
          </span>
        </div>
      </div>
    </Link>
  );
}