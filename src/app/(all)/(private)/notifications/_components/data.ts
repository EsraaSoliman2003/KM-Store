type NotificationType =
    | "success"
    | "sale"
    | "info"
    | "warning"
    | "coupon"
    | "review";

type Notification = {
    id: number;
    title: string;
    description: string;
    time: string;
    type: NotificationType;
};

export const notifications: Notification[] = [
    {
        id: 1,
        title: "notificationOrderDelivered",
        description: "notificationOrderDeliveredDescription",
        time: "twoHoursAgo",
        type: "success",
    },
    {
        id: 2,
        title: "notificationFlashSale",
        description: "notificationFlashSaleDescription",
        time: "fiveHoursAgo",
        type: "sale",
    },
    {
        id: 3,
        title: "notificationOrderShipped",
        description: "notificationOrderShippedDescription",
        time: "yesterday",
        type: "info",
    },
    {
        id: 4,
        title: "notificationSecurityAlert",
        description: "notificationSecurityAlertDescription",
        time: "yesterday",
        type: "warning",
    },
    {
        id: 5,
        title: "notificationCouponExpires",
        description: "notificationCouponExpiresDescription",
        time: "threeDaysAgo",
        type: "coupon",
    },
    {
        id: 6,
        title: "notificationRatePurchase",
        description: "notificationRatePurchaseDescription",
        time: "fourDaysAgo",
        type: "review",
    },
    {
        id: 7,
        title: "notificationNewArrival",
        description: "notificationNewArrivalDescription",
        time: "oneDayAgo",
        type: "sale",
    },
    {
        id: 8,
        title: "notificationOrderConfirmed",
        description: "notificationOrderConfirmedDescription",
        time: "fiveDaysAgo",
        type: "success",
    },
    {
        id: 9,
        title: "notificationFlashSaleElectronics",
        description: "notificationFlashSaleElectronicsDescription",
        time: "twoDaysAgo",
        type: "sale",
    },
    {
        id: 10,
        title: "notificationExclusiveMember",
        description: "notificationExclusiveMemberDescription",
        time: "threeDaysAgo",
        type: "review",
    },
    {
        id: 11,
        title: "notificationHereToHelp",
        description: "notificationHereToHelpDescription",
        time: "fourDaysAgo",
        type: "review",
    },
    {
        id: 12,
        title: "notificationLimitedTime",
        description: "notificationLimitedTimeDescription",
        time: "fiveDaysAgo",
        type: "success",
    },
];