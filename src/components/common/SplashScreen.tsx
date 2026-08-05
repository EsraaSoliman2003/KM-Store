"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function SplashScreen({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {loading ? (
        <motion.div
          key="splash"
          className="fixed inset-0 z-[9999] bg-black"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.7, ease: "easeOut" } }}
        >
          {/* الصورة بقت تغطي الشاشة كلها (أكبر حاجة) */}
          <motion.div
            className="relative w-screen h-screen"
            initial={{ scale: 1 }}
            exit={{
              scale: 1.2,      // تكبر زيادة بسيطة أثناء الاختفاء
              opacity: 0,
              transition: { duration: 0.7, ease: "easeOut" },
            }}
          >
            <Image
              src="/splash.png"
              alt="Loading..."
              fill
              priority
              className="object-cover"
            />
          </motion.div>
        </motion.div>
      ) : (
        <motion.div
          key="content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}