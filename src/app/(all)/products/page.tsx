import Hero from "./_components/Hero";
import MobileCats from "./_components/MobileCats";
import DesktopCats from "./_components/DesktopCats";
import { useTranslations } from "next-intl";

export const categories = [
  {
    title: "Smart Phones",
    products: "+840 Products",
    image: "/phone.png",
  },
  {
    title: "Laptops",
    products: "+640 Products",
    image: "/phone.png",
  },
  {
    title: "Audio",
    products: "+840 Products",
    image: "/phone.png",
  },
  {
    title: "Smart Watches",
    products: "+840 Products",
    image: "/phone.png",
  },
  {
    title: "Cameras",
    products: "+540 Products",
    image: "/phone.png",
  },
  {
    title: "Tablets",
    products: "+490 Products",
    image: "/phone.png",
  },
  {
    title: "Smart",
    products: "+640 Products",
    image: "/phone.png",
  },
  {
    title: "Gaming",
    products: "+740 Products",
    image: "/phone.png",
  },
  {
    title: "Tablets",
    products: "+900 Products",
    image: "/phone.png",
  },
];

export default function Page() {
  const t = useTranslations();
  return (
    <main className="pt-18">
      {/* ================= HERO ================= */}
      <Hero />

      {/* ================= CATEGORIES ================= */}
      <section className="container py-14">
        {/* Header */}
        <div className="mb-8 flex flex-col gap-5 sm:gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="text-center lg:text-start">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              {t("shopByCategoryTitle")}
            </h2>

          </div>
        </div>

        {/* ================= MOBILE / TABLET ================= */}
        <MobileCats />

        {/* ================= DESKTOP ================= */}
        <DesktopCats />
      </section>
    </main>
  );
}