"use client";

import { useState } from "react";
import Spline from "@splinetool/react-spline";
import LoadingScreenPortal from "@/components/LoadingScreenPortal";

export default function HomePage() {
  const [loaded, setLoaded] = useState(false);

  return (
    <main className="relative w-full h-screen overflow-hidden bg-black text-white">
      {/* Spline scene */}
      <Spline
        scene="https://prod.spline.design/your-spline-url/scene.splinecode"
        onLoad={() => setLoaded(true)}
      />

      {/* Loader overlay (visible until Spline fully loads) */}
      <LoadingScreenPortal visible={!loaded} />
    </main>
  );
}
