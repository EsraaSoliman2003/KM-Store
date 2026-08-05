"use client";

import {
  FiZap,
  FiShield,
  FiAward,
  FiRefreshCw,
} from "react-icons/fi";

const features = [
  {
    icon: FiZap,
    title: "Fast Delivery",
    subtitle: "1–3 Business Days",
    description:
      "Same-day delivery available in select cities. Track your order in real time.",
  },
  {
    icon: FiShield,
    title: "Secure Payment",
    subtitle: "256-bit SSL Encryption",
    description:
      "All transactions are encrypted end-to-end. Your payment information is always protected.",
  },
  {
    icon: FiAward,
    title: "Official Warranty",
    subtitle: "Manufacturer Guarantee",
    description:
      "Every product is 100% authentic and backed by the official manufacturer warranty.",
  },
  {
    icon: FiRefreshCw,
    title: "Easy Returns",
    subtitle: "30-Day Return Policy",
    description:
      "Not satisfied? Return your order within 30 days with a quick and hassle-free process.",
  },
];

export default function WhyUs() {
  return (
    <section className="py-20">
      <div className="container">
        <h2 className="mb-12 text-center text-3xl font-bold text-(--text-primary) sm:text-4xl">
          Why Shop With Us
        </h2>

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {features.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group rounded-2xl border border-[#838383] p-4 transition-all duration-300 hover:-translate-y-1 hover:border-(--main)/60 hover:bg-(--main)/5"
              >
                <div className="mb-4 text-(--main) transition-all duration-300">
                  <Icon size={36} />
                </div>

                <h3 className="text-xl font-semibold text-(--text-primary)">
                  {item.title}
                </h3>

                <p className="mt-1 text-xs font-medium text-(--main)">
                  {item.subtitle}
                </p>

                <p className="mt-3 text-sm text-(--text-muted)">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}