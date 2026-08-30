"use client";
import Tabs from "./_components/Tabs";
import Gallery from "./_components/Gallery";
import ProductInfo from "./_components/ProductInfo";
import RelatedProducts from "@/components/RelatedProducts/RelatedProducts";
import { useAppDispatch, useAppSelector } from "@/rtk/hooks";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import { getProductDetails } from "@/rtk/slices/productDetailsSlice";
import ProductDetailsSkeleton from "@/skeleton/ProductDetailsSkeleton";

export default function page() {
    const product = {
        id: 1,
        title: "AURA Pro X1 Wireless Noise-Cancelling Headphones",
        model: "APL-X1M-2024",
        sku: "AU-PRO-X1-001",
        price: 540.0,
        oldPrice: 840.0,
        discount: 36,
        rating: 5.0,
        reviews: 1357,

        images: [
            "/phone.png",
            "/phone.png",
            "/phone.png",
            "/phone.png",
            "/phone.png",
        ],

        colors: [
            { name: "Deep Purple", value: "#6927d9" },
            { name: "Blue", value: "#70aeb4" },
            { name: "Red", value: "#a52d3e" },
            { name: "Silver", value: "#d1d1d1" },
        ],
    };

    const dispatch = useAppDispatch();
    const params = useParams();
    const id = Number(params.id);
    useEffect(() => {
        dispatch(
            getProductDetails(id)
        );
    }, [dispatch]);

    const { loading } = useAppSelector((s) => s.productDetails)

    if (loading) {
        return <ProductDetailsSkeleton />;
    }

    return (
        <main className="container py-6 mt-18 mb-10">
            <div className="container">
                {/* ================= PRODUCT TOP ================= */}
                <section className="grid gap-8 lg:grid-cols-[minmax(0,470px)_minmax(0,1fr)] lg:gap-10 xl:grid-cols-[470px_minmax(0,1fr)] xl:gap-12">
                    {/* ================= GALLERY ================= */}
                    <Gallery />

                    {/* ================= PRODUCT INFO ================= */}
                    <ProductInfo />
                </section>

                {/* ================= DIVIDER ================= */}
                <div className="my-20 h-px bg-[var(--border-dark)]" />

                {/* ================= TABS ================= */}
                <Tabs />

                {/* ================= DIVIDER ================= */}
                <div className="my-20 h-px bg-[var(--border-dark)]" />

                <RelatedProducts />
            </div>
        </main>
    );
}