"use client";

import { Home } from "lucide-react";
import { useTranslations } from "next-intl";
import { useState } from "react";

export default function Receiver() {
  const t = useTranslations();
  const [receiver, setReceiver] = useState<"person" | "door">("person");

  return (
    <section className="mb-7">
      <h2 className="mb-3 text-xl font-semibold text-[var(--text-primary)]">
        {t("whoWillReceiveThisOrder")}
      </h2>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {/* Person */}
        <button
          type="button"
          onClick={() => setReceiver("person")}
          className={`flex min-h-[72px] items-center justify-between rounded-2xl border bg-[var(--bg-tertiary)] px-4 text-left transition ${
            receiver === "person"
              ? "border-[var(--main)]"
              : "border-[var(--border-dark)] hover:border-[var(--main)]"
          }`}
        >
          <div className="min-w-0">
            <p className="text-sm font-semibold text-[var(--text-primary)]">
              {t("receiverPersonName")}
            </p>

            <p className="mt-1 text-sm text-[var(--text-muted)]">
              {t("receiverPersonPhone")}
            </p>
          </div>

          <span
            className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-full border-2 transition ${
              receiver === "person"
                ? "border-[var(--main)]"
                : "border-[var(--border-dark)]"
            }`}
          >
            {receiver === "person" && (
              <span className="h-2 w-2 rounded-full bg-[var(--main)]" />
            )}
          </span>
        </button>

        {/* Leave at door */}
        <button
          type="button"
          onClick={() => setReceiver("door")}
          className={`flex min-h-[72px] items-center gap-3 rounded-2xl border bg-[var(--bg-tertiary)] px-4 text-left transition ${
            receiver === "door"
              ? "border-[var(--main)]"
              : "border-[var(--border-dark)] hover:border-[var(--main)]"
          }`}
        >
          <div
            className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border transition ${
              receiver === "door"
                ? "border-[var(--main)] text-[var(--main)]"
                : "border-[var(--border-dark)] text-[var(--text-muted)]"
            }`}
          >
            <Home size={16} />
          </div>

          <span className="flex-1 text-sm font-semibold text-[var(--text-primary)]">
            {t("leaveAtMyDoor")}
          </span>

          <span
            className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-full border-2 transition ${
              receiver === "door"
                ? "border-[var(--main)]"
                : "border-[var(--border-dark)]"
            }`}
          >
            {receiver === "door" && (
              <span className="h-2 w-2 rounded-full bg-[var(--main)]" />
            )}
          </span>
        </button>
      </div>
    </section>
  );
}