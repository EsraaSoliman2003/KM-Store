import { Star } from "lucide-react";

export const renderStars = (rating: number, size = 14) => {
    return (
        <div className="flex items-center gap-0.5">
            {Array.from({ length: 5 }).map((_, index) => (
                <Star
                    key={index}
                    size={size}
                    fill={index < rating ? "currentColor" : "none"}
                    className={
                        index < rating
                            ? "text-(--main)"
                            : "text-(--text-muted)"
                    }
                />
            ))}
        </div>
    );
};