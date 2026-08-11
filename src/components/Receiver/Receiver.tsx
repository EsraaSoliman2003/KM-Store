"use client";

import { Home } from "lucide-react";
import { useState } from "react";

export default function Receiver() {
  const [receiver, setReceiver] = useState<"person" | "door">("person");

  return (
    <section className="mb-7">
      <h2 className="mb-3 text-xl font-semibold text-white">
        Who will receive this order
      </h2>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {/* Person */}
        <button
          type="button"
          onClick={() => setReceiver("person")}
          className={`flex min-h-[72px] items-center justify-between rounded-2xl border bg-[#151515] px-4 text-left transition ${
            receiver === "person"
              ? "border-[#683AD0]"
              : "border-[#2d2d2d] hover:border-[#683AD0]"
          }`}
        >
          <div className="min-w-0">
            <p className="text-sm font-semibold text-white">
              Hossam Hassan
            </p>

            <p className="mt-1 text-sm text-gray-400">
              +20-1234567890
            </p>
          </div>

          <span
            className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-full border-2 transition ${
              receiver === "person"
                ? "border-[#683AD0]"
                : "border-gray-500"
            }`}
          >
            {receiver === "person" && (
              <span className="h-2 w-2 rounded-full bg-[#683AD0]" />
            )}
          </span>
        </button>

        {/* Leave at door */}
        <button
          type="button"
          onClick={() => setReceiver("door")}
          className={`flex min-h-[72px] items-center gap-3 rounded-2xl border bg-[#151515] px-4 text-left transition ${
            receiver === "door"
              ? "border-[#683AD0]"
              : "border-[#2d2d2d] hover:border-[#683AD0]"
          }`}
        >
          <div
            className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border transition ${
              receiver === "door"
                ? "border-[#683AD0] text-[#9b6cff]"
                : "border-[#2d2d2d] text-gray-500"
            }`}
          >
            <Home size={16} />
          </div>

          <span className="flex-1 text-sm font-semibold text-white">
            Leave at my door
          </span>

          <span
            className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-full border-2 transition ${
              receiver === "door"
                ? "border-[#683AD0]"
                : "border-gray-500"
            }`}
          >
            {receiver === "door" && (
              <span className="h-2 w-2 rounded-full bg-[#683AD0]" />
            )}
          </span>
        </button>
      </div>
    </section>
  );
}