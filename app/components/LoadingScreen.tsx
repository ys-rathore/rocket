'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function LoadingScreen({ visible }: { visible: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: visible ? 1 : 0 }}
      transition={{ duration: 1 }}
      className={`fixed inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-black via-gray-900 to-gray-800 transition-all duration-1000 z-50 ${
        visible ? 'pointer-events-auto' : 'pointer-events-none'
      }`}
    >
      <motion.div
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <Image src="/favicon.png" alt="Logo" width={100} height={100} priority />
      </motion.div>
      <motion.h1
        className="text-3xl mt-6 font-semibold tracking-wide text-white"
        animate={{ opacity: [1, 0.6, 1] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        YSpace<span className="ml-1 animate-pulse">...</span>
      </motion.h1>
    </motion.div>
  );
}
