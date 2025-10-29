"use client"

import { useEffect, useState } from "react"
import SplineViewer from "@/components/spline-viewer"

export default function Home() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000) // 2s loading
    return () => clearTimeout(timer)
  }, [])

  return (
    <main className="relative w-full h-screen overflow-hidden bg-transparent">
      {/* 3D Scene */}
      <SplineViewer />

      {/* YSpace Logo (shows after loading) */}
      {!loading && (
        <div className="absolute top-6 left-6 flex items-center space-x-3 z-20 backdrop-blur-lg bg-white/10 rounded-2xl px-4 py-2 shadow-lg">
          <img
            src="/favicon.png"
            alt="YSpace Logo"
            className="w-10 h-10 drop-shadow-[0_0_10px_rgba(255,255,255,0.7)]"
          />
          <h1 className="text-xl font-semibold text-white drop-shadow-[0_0_6px_rgba(255,255,255,0.3)]">
            YSpace
          </h1>
        </div>
      )}

      {/* Loading Animation */}
      {loading && (
        <div
          className="absolute inset-0 flex flex-col items-center justify-center z-50 
                     bg-gradient-to-br from-white via-[#f9f9f9] to-[#f0f0f0]
                     backdrop-blur-2xl overflow-hidden animate-[fadeStorm_2s_ease-in-out_forwards]"
        >
          {/* Wind Effect (your noise image) */}
          <div
            className="absolute inset-0 opacity-25 mix-blend-overlay animate-[windFlow_2s_linear_infinite]"
            style={{
              backgroundImage: "url('/noise.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>

          {/* Sun Logo */}
          <img
            src="/favicon.png"
            alt="YSpace Logo"
            className="w-20 h-20 mb-6 animate-[spinPulse_2s_ease-in-out]"
          />

          {/* Text */}
          <h1
            className="text-3xl md:text-5xl font-extrabold tracking-wide 
                       bg-gradient-to-r from-[#ffcc00] via-[#ffd966] to-[#fff2b3]
                       bg-clip-text text-transparent 
                       drop-shadow-[0_0_25px_rgba(255,200,80,0.6)]
                       animate-pulse"
          >
            LAUNCHING OUR SPACE...
          </h1>
        </div>
      )}
    </main>
  )
}
