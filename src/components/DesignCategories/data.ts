type Translate = (key: string, values?: Record<string, string | number>) => string;

export const getCategories = (t: Translate) => [
  {
    title: t("smartPhones"),
    products: t("productsCountPlus", { count: 840 }),
    image: "/phone.png",
  },
  {
    title: t("laptops"),
    products: t("productsCountPlus", { count: 640 }),
    image: "/phone.png",
  },
  {
    title: t("audio"),
    products: t("productsCountPlus", { count: 840 }),
    image: "/phone.png",
  },
  {
    title: t("smartWatches"),
    products: t("productsCountPlus", { count: 840 }),
    image: "/phone.png",
  },
  {
    title: t("cameras"),
    products: t("productsCountPlus", { count: 540 }),
    image: "/phone.png",
  },
  {
    title: t("tablets"),
    products: t("productsCountPlus", { count: 490 }),
    image: "/phone.png",
  },
  {
    title: t("smart"),
    products: t("productsCountPlus", { count: 640 }),
    image: "/phone.png",
  },
  {
    title: t("gaming"),
    products: t("productsCountPlus", { count: 740 }),
    image: "/phone.png",
  },
  {
    title: t("tablets"),
    products: t("productsCountPlus", { count: 900 }),
    image: "/phone.png",
  },
];