"use client";

import { useState, useEffect } from "react";
import SplineViewer from "@/components/spline-viewer";
import LoadingScreen from "@/components/LoadingScreen";

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  // Show main UI after 2s (matches loading screen duration)
  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="relative w-full h-screen overflow-hidden bg-black text-white">
      <SplineViewer />

      {/* Delay Home/About buttons */}
      {loaded && (
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-4">
          <button className="px-6 py-2 rounded-full bg-white text-black font-semibold shadow-md">
            HOME
          </button>
          <button className="px-6 py-2 rounded-full bg-white text-black font-semibold shadow-md">
            ABOUT
          </button>
        </div>
      )}

      {/* Loading overlay */}
      <LoadingScreen />
    </main>
  );
}
