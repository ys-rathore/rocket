"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [dots, setDots] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev.length >= 3 ? "" : prev + "."));
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="fixed inset-0 flex flex-col items-center justify-center bg-gradient-to-b from-black via-[#0a0a1a] to-black z-50"
    >
      <motion.div
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <Image src="/favicon.png" alt="YSpace logo" width={120} height={120} priority />
      </motion.div>
      <motion.p
        className="mt-6 text-xl font-semibold tracking-wider text-white"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        YSpace{dots}
      </motion.p>
    </motion.div>
  );
}
