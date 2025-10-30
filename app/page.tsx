"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SplineViewer from "../components/SplineViewer";
import LoadingScreen from "../components/LoadingScreen";

export default function HomePage() {
  const [loaded, setLoaded] = useState(false);

  return (
    <main className="relative w-full h-screen overflow-hidden bg-black text-white">
      <SplineViewer
        sceneUrl="https://prod.spline.design/nvSwDpk1ogJtgZO8/scene.splinecode"
        onLoad={() => setLoaded(true)}
      />

      <AnimatePresence>
        {!loaded && <LoadingScreen />}
      </AnimatePresence>

      {loaded && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-6"
        >
          <button className="px-6 py-2 rounded-full bg-white text-black font-semibold shadow-md hover:shadow-lg transition">
            HOME
          </button>
          <button className="px-6 py-2 rounded-full bg-white text-black font-semibold shadow-md hover:shadow-lg transition">
            ABOUT
          </button>
        </motion.div>
      )}
    </main>
  );
}
