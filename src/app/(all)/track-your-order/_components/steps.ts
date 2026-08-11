import {
    Check,
    Truck,
    Box,
} from "lucide-react";

export const steps = [
    {
        title: "Order Placed",
        date: "Aug 08, 2026",
        icon: Check,
        completed: true,
    },
    {
        title: "Confirmed",
        date: "Aug 08, 2026",
        icon: Check,
        completed: true,
    },
    {
        title: "Processing",
        date: "Aug 09, 2026",
        icon: Check,
        completed: true,
    },
    {
        title: "Shipped",
        date: "Aug 09, 2026",
        icon: Truck,
        active: true,
    },
    {
        title: "Out for delivery",
        date: "Aug 10, 2026",
        icon: Box,
    },
    {
        title: "Delivered",
        date: "--",
        icon: Check,
    },
];