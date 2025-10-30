"use client";

import { useState } from "react";
import Spline from "@splinetool/react-spline";
import LoadingScreen from "@/components/LoadingScreen";

export default function HomePage() {
  const [loaded, setLoaded] = useState(false);

  return (
    <main className="relative w-full h-screen overflow-hidden bg-black text-white">
      {/* Spline model */}
      <Spline
        scene="https://prod.spline.design/nvSwDpk1ogJtgZO8/scene.splinecode"
        onLoad={() => setLoaded(true)}
        className="w-full h-full object-cover"
      />

      {/* Loading overlay */}
      <LoadingScreen visible={!loaded} />

      {/* Main buttons after model loads */}
      {loaded && (
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-4 z-20">
          <button className="px-6 py-2 rounded-full bg-white text-black font-semibold shadow-md hover:shadow-lg transition">
            HOME
          </button>
          <button className="px-6 py-2 rounded-full bg-white text-black font-semibold shadow-md hover:shadow-lg transition">
            ABOUT
          </button>
        </div>
      )}

      {/* Black footer bar to hide watermark */}
      <div className="absolute bottom-0 left-0 w-full h-[40px] bg-black z-10" />
    </main>
  );
}
