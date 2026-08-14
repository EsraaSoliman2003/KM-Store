type Product = {
    id: number;
    name: string;
    category: string;
    time: string;
    price: string;
    image: string;
};

type ProductGroup = {
    title: string;
    products: Product[];
};

export const productGroups: ProductGroup[] = [
    {
        title: "today",
        products: [
            {
                id: 1,
                name: "Sony PlayStation 5 Console",
                category: "Gaming",
                time: "2 hours ago",
                price: "$499.00",
                image: "/earbuds.jpg",
            },
            {
                id: 2,
                name: "Apple Watch Ultra 2",
                category: "Wearables",
                time: "5 hours ago",
                price: "$799.00",
                image: "/earbuds.jpg",
            },
        ],
    },
    {
        title: "yesterday",
        products: [
            {
                id: 3,
                name: "Bose QuietComfort Ultra Earbuds",
                category: "Audio",
                time: "Yesterday",
                price: "$325.00",
                image: "/earbuds.jpg",
            },
            {
                id: 4,
                name: "Canon EOS R6 Mark II Camera",
                category: "Photography",
                time: "Yesterday",
                price: "$845.00",
                image: "/earbuds.jpg",
            },
        ],
    },
    {
        title: "earlierThisWeek",
        products: [
            {
                id: 5,
                name: "NVIDIA GeForce RTX 4090",
                category: "PC Components",
                time: "2 days ago",
                price: "$1569.00",
                image: "/earbuds.jpg",
            },
            {
                id: 6,
                name: "Logitech G Pro X Superlight 2",
                category: "Gaming",
                time: "4 days ago",
                price: "$159.00",
                image: "/earbuds.jpg",
            },
        ],
    },
];