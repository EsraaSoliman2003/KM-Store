import { ArrowRight } from "lucide-react";

type Props = {
    activeProduct: any;
}

export default function Content({ activeProduct }: Props) {
    return (
        <div className="flex w-full flex-col justify-center py-20 lg:w-[48%] lg:py-0 items-center lg:items-start">

            {/* Badge */}
            <div
                className="inline-flex w-fit items-center gap-2 rounded-full px-4 py-2"
                style={{
                    border: `1px solid ${activeProduct.color}66`,
                    backgroundColor: `${activeProduct.color}1A`,
                }}
            >
                <span
                    className="h-2 w-2 rounded-full animate-pulse"
                    style={{
                        backgroundColor: activeProduct.color,
                    }}
                />
                <span
                    className="text-[12px] font-[510] uppercase tracking-[1px]"
                    style={{
                        color: activeProduct.color,
                    }}
                >
                    OnePlus · New Arrival
                </span>
            </div>

            {/* Title */}
            <h1 className="mt-7 text-[40px] font-bold leading-none text-(--text-primary) transition-all duration-500">
                {activeProduct.title}
            </h1>

            {/* Subtitle */}
            <h2 className="mt-4 text-[18px] text-(--text-muted)">
                {activeProduct.subtitle}
            </h2>

            {/* Description */}
            <p className="mt-6 max-w-[450px] text-[14px] leading-[1.8] text-(--text-muted) text-center lg:text-start">
                {activeProduct.description}
            </p>

            {/* Price */}
            <div className="mt-10 flex items-end gap-3">
                <span className="text-[32px] font-bold text-(--text-primary)">
                    ${Number(activeProduct.price).toLocaleString("en-US")}
                </span>

                <span className="text-[12px] text-(--text-muted)">
                    Starting price
                </span>
                <span
                    className="rounded-sm px-3 py-1 text-[14px] font-semibold"
                    style={{
                        color: activeProduct.color,
                        border: `1px solid ${activeProduct.color}66`,
                        backgroundColor: `${activeProduct.color}1A`,
                    }}
                >
                    Free shipping
                </span>
            </div>

            {/* Buttons */}
            <div className="mt-10 flex flex-wrap gap-5">
                <button
                    className="
                        group
                        inline-flex items-center justify-center gap-2
                        rounded-[12px]
                        px-9 py-4
                        text-[18px] font-medium leading-none text-white
                        transition-all duration-300
                        hover:shadow-[0_15px_40px_rgba(239,68,68,.35)]
                        active:scale-95
                    "
                    style={{
                        backgroundColor: activeProduct.color,
                    }}
                >
                    <span>Buy now</span>

                    <ArrowRight
                        size={20}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                </button>

                <button
                    className="
                        inline-flex items-center justify-center gap-2
                        rounded-[12px]
                        border-[rgba(var(--border-color-rgb),0.12)]
                        bg-[rgba(var(--bg-secondary-rgb),0.06)]
                        px-9 py-4
                        text-[18px] font-medium leading-none text-(--text-primary)
                        backdrop-blur-md
                        transition-all duration-300
                        hover:border-[rgba(var(--border-color-rgb),0.20)]
                        hover:bg-[rgba(var(--bg-secondary-rgb),0.10)]
                        active:scale-95
                    "
                >
                    Learn more
                </button>
            </div>

            {/* Feature Chips */}
            <div className="mt-8 flex flex-wrap gap-3">

                {activeProduct.properties.map((item : any) => (
                    <span
                        key={item}
                        className="
                            rounded-xl
                            border border-(--border-color)
                            bg-(--bg-secondary)
                            px-5 py-2
                            text-sm
                            text-(--text-muted)
                        "
                    >
                        {item}
                    </span>
                ))}

            </div>

        </div>
    )
}