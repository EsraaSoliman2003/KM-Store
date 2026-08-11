import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import React from "react";
import SplashScreen from "@/components/common/SplashScreen";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {/* <SplashScreen> */}
      <Navbar />
      <main className="min-h-screen">{children}</main>
      <Footer />
      {/* </SplashScreen> */}
    </>
  );
}
