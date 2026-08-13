import React from "react";
import Header from "../_components/Header";
import { useTranslations } from "next-intl";
import { Eye, Heart, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type Product = {
  id: number;
  name: string;
  category: string;
  time: string;
  price: string;
  image: string;
};

type ProductGroup = {
  title: string;
  products: Product[];
};

export default function Page() {
  const t = useTranslations();

  const productGroups: ProductGroup[] = [
    {
      title: t("today"),
      products: [
        {
          id: 1,
          name: "Sony PlayStation 5 Console",
          category: "Gaming",
          time: "2 hours ago",
          price: "$499.00",
          image: "/earbuds.jpg",
        },
        {
          id: 2,
          name: "Apple Watch Ultra 2",
          category: "Wearables",
          time: "5 hours ago",
          price: "$799.00",
          image: "/earbuds.jpg",
        },
      ],
    },
    {
      title: t("yesterday"),
      products: [
        {
          id: 3,
          name: "Bose QuietComfort Ultra Earbuds",
          category: "Audio",
          time: "Yesterday",
          price: "$325.00",
          image: "/earbuds.jpg",
        },
        {
          id: 4,
          name: "Canon EOS R6 Mark II Camera",
          category: "Photography",
          time: "Yesterday",
          price: "$845.00",
          image: "/earbuds.jpg",
        },
      ],
    },
    {
      title: t("earlierThisWeek"),
      products: [
        {
          id: 5,
          name: "NVIDIA GeForce RTX 4090",
          category: "PC Components",
          time: "2 days ago",
          price: "$1569.00",
          image: "/earbuds.jpg",
        },
        {
          id: 6,
          name: "Logitech G Pro X Superlight 2",
          category: "Gaming",
          time: "4 days ago",
          price: "$159.00",
          image: "/earbuds.jpg",
        },
      ],
    },
  ];

  return (
    <div className="min-w-0 mb-10">
      <Header
        title={t("recentlyViewed")}
        subTitle={t("recentlyViewedSubtitle")}
      />

      <div className="space-y-5">
        {productGroups.map((group) => (
          <section key={group.title}>
            {/* Group title */}
            <h2 className="mb-2.5 text-[12px] font-semibold uppercase text-(--text-muted)">
              {group.title}
            </h2>

            {/* Products */}
            <div className="space-y-2">
              {group.products.map((product) => (
                <div
                  key={product.id}
                  className="flex min-h-[76px] items-center gap-3 rounded-[12px] border border-(--border-dark) bg-(--bg-primary) px-3 py-2.5"
                >
                  {/* Product Image */}
                  <div className="relative h-15 w-15 shrink-0 overflow-hidden rounded-[8px] bg-(--bg-secondary)">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Product Info */}
                  <div className="min-w-0 flex-1">
                    <h3 className="truncate text-[16px] font-semibold text-(--text-primary)">
                      {product.name}
                    </h3>

                    <p className="mt-0.5 truncate text-[14px] text-(--text-muted)">
                      {product.category} · {product.time}
                    </p>
                  </div>

                  {/* Price */}
                  <p className="hidden shrink-0 text-[16px] font-semibold text-(--text-primary) sm:block">
                    {product.price}
                  </p>

                  {/* Actions */}
                  <div className="flex shrink-0 items-center gap-1.5">
                    <Link
                      href={`/products/${product.id}`}
                      className="rounded-full border border-(--main) bg-[rgba(104,58,208,0.12)] px-3 py-1.5 text-[12px] font-medium text-(--text-primary)"
                    >
                      {t("view")}
                    </Link>

                    <button
                      type="button"
                      aria-label={t("addToWishlist")}
                      className="flex px-1.5 py-1.5 items-center justify-center rounded-[7px] border border-(--border-dark) text-(--text-muted) transition-colors hover:border-(--main) hover:text-(--main)"
                    >
                      <Heart size={20} />
                    </button>

                    <button
                      type="button"
                      aria-label={t("remove")}
                      className="flex px-1.5 py-1.5 items-center justify-center rounded-[7px] border border-(--border-dark) text-(--text-muted) transition-colors hover:border-red-500 hover:text-red-500"
                    >
                      <X size={20} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}