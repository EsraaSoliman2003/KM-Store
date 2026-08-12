import {
    Check,
    Truck,
    Box,
} from "lucide-react";

type Translate = (key: string) => string;

export const getSteps = (t: Translate) => [
    {
        title: t("orderPlaced"),
        date: "Aug 08, 2026",
        icon: Check,
        completed: true,
    },
    {
        title: t("confirmed"),
        date: "Aug 08, 2026",
        icon: Check,
        completed: true,
    },
    {
        title: t("processing"),
        date: "Aug 09, 2026",
        icon: Check,
        completed: true,
    },
    {
        title: t("shipped"),
        date: "Aug 09, 2026",
        icon: Truck,
        active: true,
    },
    {
        title: t("outForDelivery"),
        date: "Aug 10, 2026",
        icon: Box,
    },
    {
        title: t("delivered"),
        date: "--",
        icon: Check,
    },
];