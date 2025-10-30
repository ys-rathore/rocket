"use client";

import { useState, useEffect } from "react";
import LoadingScreen from "@/components/LoadingScreen";

export default function HomePage() {
  const [loaded, setLoaded] = useState(false);

  // handle iframe load event
  useEffect(() => {
    const iframe = document.getElementById("spline-frame") as HTMLIFrameElement | null;
    if (!iframe) return;
    iframe.addEventListener("load", () => setLoaded(true));
    return () => iframe.removeEventListener("load", () => setLoaded(true));
  }, []);

  return (
    <main className="relative w-full h-screen overflow-hidden bg-black text-white">
      {/* Spline Web Player iframe */}
      <iframe
        id="spline-frame"
        src="https://my.spline.design/journey-R5bXhUaZOPie8lSIwd0JuRFb/"
        frameBorder="0"
        width="100%"
        height="100%"
        allow="fullscreen"
        className="absolute inset-0"
      />

      {/* Loader */}
      <LoadingScreen visible={!loaded} />

      {/* Main UI (only visible after model load) */}
      {loaded && (
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-4">
          <button className="px-6 py-2 rounded-full bg-white text-black font-semibold shadow-md hover:shadow-lg transition">
            HOME
          </button>
          <button className="px-6 py-2 rounded-full bg-white text-black font-semibold shadow-md hover:shadow-lg transition">
            ABOUT
          </button>
        </div>
      )}
    </main>
  );
}
