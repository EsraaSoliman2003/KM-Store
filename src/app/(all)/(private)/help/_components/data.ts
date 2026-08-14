import {
    ArrowLeft,
    ArrowRight,
    Banknote,
    CircleUserRound,
    FileText,
    Mail,
    MessageCircle,
    PackageCheck,
    RotateCcw,
    ShieldCheck,
    Smartphone,
} from "lucide-react";

export const supportOptions = [
    {
        id: "chat",
        icon: MessageCircle,
        title: "liveChat",
        description: "liveChatDescription",
        badge: "onlineNow",
        button: "startChat",
        className: "bg-green-950/80",
        iconClassName:
            "border-green-400/40 bg-green-500/10 text-green-400",
        badgeClassName:
            "border-green-400 text-green-400",
        buttonClassName:
            "border-green-400 bg-green-500/10 text-green-400 hover:bg-green-500/20",
    },
    {
        id: "phone",
        icon: Smartphone,
        title: "phoneSupport",
        description: "+20 2 1234 5678",
        badge: "supportHours",
        button: "startChat",
        className: "bg-sky-950/80",
        iconClassName:
            "border-sky-400/40 bg-sky-500/10 text-sky-400",
        badgeClassName:
            "border-sky-400 text-sky-400",
        buttonClassName:
            "border-sky-400 bg-sky-500/10 text-sky-400 hover:bg-sky-500/20",
    },
    {
        id: "email",
        icon: Mail,
        title: "emailSupport",
        description: "support@technova.com",
        badge: "replyWithin24h",
        button: "startChat",
        className: "bg-purple-950/80",
        iconClassName:
            "border-purple-400/40 bg-purple-500/10 text-purple-400",
        badgeClassName:
            "border-purple-400 text-purple-400",
        buttonClassName:
            "border-purple-400 bg-purple-500/10 text-purple-400 hover:bg-purple-500/20",
    },
];

export const helpTopics = [
    {
        id: "shipping",
        icon: PackageCheck,
        title: "shippingAndDelivery",
        description: "shippingAndDeliveryDescription",
    },
    {
        id: "returns",
        icon: RotateCcw,
        title: "returnsAndRefunds",
        description: "returnsAndRefundsDescription",
    },
    {
        id: "payments",
        icon: Banknote,
        title: "payments",
        description: "paymentsDescription",
    },
    {
        id: "warranty",
        icon: ShieldCheck,
        title: "warrantyAndRepairs",
        description: "warrantyAndRepairsDescription",
    },
    {
        id: "account",
        icon: CircleUserRound,
        title: "accountAndLogin",
        description: "accountAndLoginDescription",
    },
    {
        id: "order",
        icon: FileText,
        title: "orderIssues",
        description: "orderIssuesDescription",
    },
];