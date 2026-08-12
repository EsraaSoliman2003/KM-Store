"use client";

import { MapPin, Plus, Check } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useState } from "react";

export default function Address() {
  const t = useTranslations();
  const [selected, setSelected] = useState(true);

  return (
    <section className="mb-7">
      <h2 className="mb-3 text-xl font-semibold text-[var(--text-primary)]">
        {t("addressTitle")}
      </h2>

      <div className="overflow-hidden rounded-2xl border border-[var(--border-dark)] bg-[var(--bg-tertiary)]">
        {/* Address */}
        <button
          type="button"
          onClick={() => setSelected((prev) => !prev)}
          className="flex w-full items-start gap-3 p-4 text-left transition hover:bg-[var(--main)]/5 sm:p-5"
          aria-pressed={selected}
        >
          {/* Icon */}
          <div
            className={`mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition ${
              selected
                ? "border-[var(--main)] text-[var(--main)]"
                : "border-[var(--border-dark)] text-[var(--text-muted)]"
            }`}
          >
            <MapPin size={17} />
          </div>

          {/* Address Info */}
          <div className="min-w-0 flex-1">
            <p className="text-sm font-semibold text-[var(--text-primary)]">
              {t("deliverToHome")}
            </p>

            <p className="mt-1 max-w-[600px] text-xs leading-5 text-[var(--text-muted)] sm:text-sm">
              {t("deliveryAddress")}
            </p>
          </div>

          {/* Checkbox */}
          <span
            className={`mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-[5px] border-2 transition ${
              selected
                ? "border-[var(--main)] bg-[var(--main)]"
                : "border-[var(--border-dark)] bg-transparent"
            }`}
          >
            {selected && (
              <Check
                size={13}
                strokeWidth={3}
                className="text-[var(--text-white)]"
              />
            )}
          </span>
        </button>

        <div className="mx-4 border-t border-[var(--border-dark)]" />

        {/* Add Address */}
        <Link
          href="/add-address"
          className="flex w-full items-center gap-2 px-4 py-3 text-sm font-semibold text-[var(--text-primary)] transition hover:bg-[var(--main)]/10"
        >
          <span className="flex h-7 w-7 items-center justify-center rounded-md border border-[var(--border-dark)] text-[var(--text-muted)]">
            <Plus size={15} />
          </span>

          {t("addAddress")}
        </Link>
      </div>
    </section>
  );
}