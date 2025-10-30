'use client';

import { motion, AnimatePresence } from 'framer-motion';

interface LoadingScreenProps {
  visible: boolean;
}

export default function LoadingScreen({ visible }: LoadingScreenProps) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center bg-black text-white z-[99999]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6 } }}
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 1.2, ease: 'linear' }}
            className="w-16 h-16 border-4 border-white border-t-transparent rounded-full"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
