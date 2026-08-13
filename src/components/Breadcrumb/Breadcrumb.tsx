import { ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";

type BreadcrumbItem = {
  label: string;
  href?: string;
  mobileOnly?: boolean;
};

type BreadcrumbProps = {
  items: BreadcrumbItem[];
};

export default function Breadcrumb({ items }: BreadcrumbProps) {
  const t = useTranslations();

  return (
    <div className="mb-5 flex flex-wrap items-center gap-3 text-[14px] text-[var(--text-muted)]">
      {/* Home */}
      <Link
        href="/"
        className="transition-colors hover:text-[var(--text-primary)]"
      >
        {t("home")}
      </Link>

      {items.map((item, index) => {
        const isLast = index === items.length - 1;

        return (
          <div
            key={`${item.label}-${index}`}
            className={`flex items-center gap-3 ${item.mobileOnly ? "lg:hidden" : ""
              }`}
          >
            {t("dir") === "rtl"
              ? <ChevronLeft
                size={15}
                className="text-[var(--text-muted)]"
              />
              : <ChevronRight
                size={15}
                className="text-[var(--text-muted)]"
              />
            }

            {isLast ? (
              <span className="font-medium text-[var(--text-primary)]">
                {item.label}
              </span>
            ) : (
              <Link
                href={item.href || "#"}
                className="transition-colors hover:text-[var(--text-primary)]"
              >
                {item.label}
              </Link>
            )}
          </div>
        );
      })}
    </div>
  );
}