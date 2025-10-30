"use client";

import { useEffect, useState } from "react";
import SplineViewer from "@/components/spline-viewer";
import LoadingScreenPortal from "@/components/LoadingScreenPortal";

export default function HomePage() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // You can adjust duration or use real onLoad from Spline later
    const timer = setTimeout(() => setLoaded(true), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="relative w-full h-screen overflow-hidden bg-black">
      {/* Spline scene */}
      <SplineViewer />

      {/* Loading overlay controlled by state */}
      <LoadingScreenPortal visible={!loaded} />
    </main>
  );
}
