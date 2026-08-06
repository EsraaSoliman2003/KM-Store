"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function SplashScreen({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading ? (
        <motion.div
          key="splash"
          className="fixed inset-0 z-[9999] bg-black"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 0.7, ease: "easeOut" },
          }}
        >
          <motion.div
            className="relative w-screen h-screen"
            initial={{ scale: 1 }}
            exit={{
              scale: 5,
              opacity: 0,
              transition: { duration: 5, ease: "easeOut" },
              bottom: 1000
            }}
          >
            <video
              className="absolute inset-0 h-full w-full bg-black object-contain sm:object-cover scale-[2] sm:scale-100"
              autoPlay
              muted
              playsInline
              preload="auto"
            >
              <source src="/splash.mov" type="video/mp4" />
            </video>
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