import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import React from "react";
import SplashScreen from "@/components/common/SplashScreen";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import { useTranslations } from "next-intl";
import Sidebar from "./_components/Sidebar";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const t = useTranslations();
    return (
        <main className="mt-18 min-h-screen py-6 text-(--text-primary) transition-colors duration-300">
            <div className="container">

                <Breadcrumb
                    items={[
                        {
                            label: t("settings"),
                            href: "/account-menu",
                            mobileOnly: true,
                        },
                        {
                            label: t("profile"),
                        },
                    ]}
                />

                <div className="grid grid-cols-1 gap-5 lg:grid-cols-4">

                    {/* ================= SIDEBAR ================= */}
                    <Sidebar />

                    {/* ================= MAIN CONTENT ================= */}
                    <div className="col-span-1 lg:col-span-3">
                        {children}
                    </div>
                </div>
            </div>
        </main>
    );
}
