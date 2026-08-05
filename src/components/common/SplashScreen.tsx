// /component/common/SplashScreen.tsx
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type Props = {
  children: React.ReactNode;
};

export default function SplashScreen({ children }: Props) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 z-[9999] overflow-hidden bg-black">
        <Image
          src="/splash.jpeg"
          alt="Loading..."
          fill
          priority
          className="animate-[splashZoom_2s_ease-in-out_forwards] object-cover"
        />
      </div>
    );
  }

  return <>{children}</>;
}