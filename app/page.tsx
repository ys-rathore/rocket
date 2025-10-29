"use client"

import { useEffect, useState } from "react"
import SplineViewer from "@/components/spline-viewer"

export default function Home() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000) // 2 sec loading
    return () => clearTimeout(timer)
  }, [])

  return (
    <main className="relative w-full h-screen overflow-hidden">
      {/* Gradient Glass Loading Screen */}
      {loading && (
        <div
          className="absolute inset-0 z-50 flex items-center justify-center 
          backdrop-blur-3xl 
          bg-gradient-to-br from-[rgba(255,255,255,0.2)] 
          via-[rgba(255,255,255,0.05)] 
          to-[rgba(255,255,255,0.1)] 
          animate-fadeOut"
        >
          <h1
            className="text-3xl md:text-5xl font-extrabold 
            bg-gradient-to-r from-white via-gray-200 to-white 
            bg-clip-text text-transparent 
            drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]
            animate-pulse-slow"
          >
            LAUNCHING OUR SPACE...
          </h1>
        </div>
      )}

      {/* 3D Scene (Hidden under loader) */}
      <div className={`${loading ? "opacity-0" : "opacity-100"} transition-opacity duration-700`}>
        <SplineViewer />
      </div>
    </main>
  )
}
