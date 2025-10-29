"use client"

import { useEffect, useState } from "react"
import Spline from "@splinetool/react-spline"

export default function Home() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500)
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
          <h1 className="relative text-4xl md:text-6xl font-extrabold tracking-wide text-center text-transparent bg-clip-text bg-gradient-to-r from-gray-300 via-gray-200 to-white drop-shadow-[0_0_20px_rgba(255,255,255,0.6)] animate-pulse-slow">
            LAUNCHING&nbsp;YSPACE...
          </h1>
        </div>
      )}

      {/* ✅ Main Spline Scene */}
      <div
        className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
          loading ? "opacity-0" : "opacity-100"
        }`}
      >
        <Spline scene="https://prod.spline.design/nvSwDpk1ogJtgZO8/scene.splinecode" />
      </div>
    </main>
  )
}
