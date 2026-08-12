"use client";
import DesktopCard from "./DesktopCard";
import MobileCard from "./MobileCard";

const products = [
  {
    id: 1,
    name: "Arion 43-Inch Full HD Smart Android TV, A+ Grade Panel, Frameless Design, Wi-Fi, HDMI & USB",
    description:
      "Compact wireless earbuds with clear sound, a lightweight design, and a comfortable fit for everyday listening.",
    price: 400,
    oldPrice: 550,
    rating: 5,
    image: "/phone.png",
    delivery: "Sat, Nov 1",
  },
  {
    id: 2,
    name: "Arion 43-Inch Full HD Smart Android TV, A+ Grade Panel, Frameless Design, Wi-Fi, HDMI & USB",
    description:
      "Compact wireless earbuds with clear sound, a lightweight design, and a comfortable fit for everyday listening.",
    price: 400,
    oldPrice: 550,
    rating: 5,
    image: "/phone.png",
    delivery: "Sat, Nov 1",
  },
  {
    id: 3,
    name: "Arion 43-Inch Full HD Smart Android TV, A+ Grade Panel, Frameless Design, Wi-Fi, HDMI & USB",
    description:
      "Compact wireless earbuds with clear sound, a lightweight design, and a comfortable fit for everyday listening.",
    price: 400,
    oldPrice: 550,
    rating: 5,
    image: "/phone.png",
    delivery: "Sat, Nov 1",
  },
];

export default function ProductsCart() {
  return (
    <div className="flex flex-col gap-4">
      {products.map((product) => (
        <div
          key={product.id}
          className="rounded-2xl border border-[var(--border-dark)] bg-[var(--bg-tertiary)] p-4"
        >
          <MobileCard product={product} />
          <DesktopCard product={product} />
        </div>
      ))}
    </div>
  );
}