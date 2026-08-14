import React from "react";
import Header from "../_components/Header";
import { useTranslations } from "next-intl";
import { Eye, Heart, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { productGroups } from "./_components/data";
import Products from "./_components/Products";


export default function Page() {
  const t = useTranslations();

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
              {t(group.title)}
            </h2>

            {/* Products */}
            <Products group={group} />
          </section>
        ))}
      </div>
    </div>
  );
}