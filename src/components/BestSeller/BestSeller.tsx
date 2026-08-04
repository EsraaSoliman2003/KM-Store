import Image from "next/image";
import { FiChevronRight, FiHeart } from "react-icons/fi";

const products = [
    {
        id: 1,
        title: "AURA Lite True Wireless Earbuds",
        image: "/iPhone.png",
        price: 400,
        oldPrice: 550,
        rating: 5.0,
        badge: "Top rated",
        badgeColor: "bg-purple-900/70 text-purple-300",
    },
    {
        id: 2,
        title: "SonicWave Over-Ear Headphones",
        image: "/iPhone.png",
        price: 250,
        oldPrice: 300,
        rating: 4.5,
        badge: "New",
        badgeColor: "bg-blue-900/70 text-blue-300",
    },
    {
        id: 3,
        title: "BassBoost Portable Speaker",
        image: "/iPhone.png",
        price: 150,
        oldPrice: 180,
        rating: 3.8,
        badge: "In Stock",
        badgeColor: "bg-green-900/70 text-green-300",
    },
    {
        id: 4,
        title: "NoiseCancelling Travel Headphones",
        image: "/iPhone.png",
        price: 350,
        oldPrice: 420,
        rating: 4.2,
        badge: "Out Of Stock",
        badgeColor: "bg-gray-700 text-gray-300",
    },
];

export default function BestSeller() {
    return (
        <section className="py-14">
            <div className="mx-auto max-w-7xl px-6">

                {/* Header */}
                <div className="mb-8">
                    <h2 className="text-4xl font-bold text-white">
                        Best Seller
                    </h2>

                    <p className="mt-2 text-sm text-white/45">
                        Limited time deals on premium electronics
                    </p>
                </div>

                {/* Cards */}
                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

                    {products.map((item) => (
                        <div
                            key={item.id}
                            className="group overflow-hidden rounded-2xl border border-white/20 bg-[#222]"
                        >

                            <div className="relative h-56 bg-black">

                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-contain p-6 transition duration-500 group-hover:scale-105"
                                />

                                <span
                                    className={`absolute left-3 top-3 rounded-full px-3 py-1 text-[10px] ${item.badgeColor}`}
                                >
                                    {item.badge}
                                </span>

                                <button className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-lg border border-white/20 bg-black/40 text-white">
                                    <FiHeart />
                                </button>

                            </div>

                            <div className="p-4">

                                <div className="mb-2 text-xs text-yellow-400">
                                    ★★★★★
                                    <span className="ml-1 text-white/40">
                                        {item.rating}
                                    </span>
                                </div>

                                <h3 className="min-h-[48px] text-sm text-white">
                                    {item.title}
                                </h3>

                                <div className="mt-3 flex items-end gap-2">
                                    <span className="text-3xl font-bold text-white">
                                        ${item.price}.00
                                    </span>

                                    <span className="pb-1 text-sm text-white/30 line-through">
                                        ${item.oldPrice}.00
                                    </span>
                                </div>

                            </div>

                        </div>
                    ))}

                </div>

                {/* Button */}
                <div className="mt-8 flex justify-end">

                    <button className="flex items-center gap-2 rounded-xl bg-[#8B5CF6] px-5 py-3 text-white transition hover:bg-[#7C3AED]">
                        Show more
                        <FiChevronRight />
                    </button>

                </div>

            </div>
        </section>
    );
}