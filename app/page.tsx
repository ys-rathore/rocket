"use client"

import { useEffect, useState } from "react"

export default function Home() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500) // 2.5s transition
    return () => clearTimeout(timer)
  }, [])

  return (
    <main className="relative w-full h-screen overflow-hidden bg-black">
      {/* ✅ Loading Screen */}
      {loading && (
        <div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-cover bg-center transition-all duration-1000 ease-out backdrop-blur-2xl animate-storm"
          style={{
            backgroundImage: "url('/bg1.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

          <h1 className="relative text-4xl md:text-6xl font-extrabold tracking-wide text-center text-transparent bg-clip-text bg-gradient-to-r from-gray-200 via-gray-400 to-white drop-shadow-[0_0_15px_rgba(255,255,255,0.5)] animate-pulse-slow">
            LAUNCHING YSPACE...
          </h1>
        </div>
      )}

      {/* ✅ Main Spline App */}
      <spline-viewer
        loading-anim-type="none"
        url="https://prod.spline.design/nvSwDpk1ogJtgZO8/scene.splinecode"
        class="absolute inset-0 w-full h-full"
      ></spline-viewer>
    </main>
  )
}
