"use client";

import { useTranslations } from "next-intl";
import { orbitProducts } from "./_components/data";
import { useEffect, useState } from "react";
import {
    FiZap,
    FiHeadphones,
} from "react-icons/fi";
import Content from "./_components/Content";
import Orbits from "./_components/Orbits";
import FloatCards from "./_components/FloatCards";
import ActiveProduct from "./_components/ActiveProduct";
import { AnimatePresence, motion } from "framer-motion";

export default function Hero() {
    const t = useTranslations();
    const defaultActive =
        orbitProducts.find((p) => p.active === true) || orbitProducts[0];
    const [activeProduct, setActiveProduct] = useState(defaultActive);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveProduct((prev) => {
                const currentIndex = orbitProducts.findIndex(
                    (item) => item.id === prev.id
                );

                const nextIndex = (currentIndex + 1) % orbitProducts.length;

                return orbitProducts[nextIndex];
            });
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative min-h-screen overflow-hidden bg-(--bg-primary)">

            {/* ═══ BACKGROUND LAYERS ═══ */}
            <div className="absolute inset-0 z-0">
                <motion.div
                    className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[180px]"
                    style={{
                        backgroundColor: `${activeProduct.color}22`,
                    }}
                    animate={{ backgroundColor: `${activeProduct.color}22` }}
                    transition={{ duration: 0.6 }}
                />

                <div
                    className="absolute inset-0"
                    style={{
                        background: `radial-gradient(circle at 50% 30%, ${activeProduct.color}22 0%, var(--bg-primary) 70%)`,
                    }}
                />

                <div className="noise absolute inset-0" />

                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_50%,#00000040_100%)]" />
            </div>

            {/* ═══ MAIN CONTAINER ═══ */}
            <div className="container relative z-10 flex min-h-screen items-center justify-between flex-col lg:flex-row">

                {/* ─── LEFT CONTENT ─── */}
                <AnimatePresence mode="wait">
                    <Content key={activeProduct.id} activeProduct={activeProduct} />
                </AnimatePresence>

                {/* ───────────────── RIGHT SIDE ───────────────── */}
                <div className="relative w-full lg:w-[48%] flex items-center justify-center lg:block mt-22 lg:mt-0 order-1 lg:order-2">
                    <Orbits
                        activeProduct={activeProduct}
                        setActiveProduct={setActiveProduct}
                    />

                    <AnimatePresence mode="wait">
                        <ActiveProduct key={activeProduct.id} activeProduct={activeProduct} />
                    </AnimatePresence>

                    <div className="absolute inset-0 pointer-events-none block min-[1024px]:hidden min-[1280px]:block">
                        <FloatCards activeProduct={activeProduct} />
                    </div>
                </div>
            </div>

        </section>
    );
}