"use client"

import { useState, useEffect } from "react"
import Spline from "@splinetool/react-spline"

export default function Home() {
  const [loading, setLoading] = useState(true)
  const [showButtons, setShowButtons] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
      // show buttons after 0.5 sec
      setTimeout(() => setShowButtons(true), 500)
    }, 2000) // loading duration
    return () => clearTimeout(timer)
  }, [])

  return (
    <main className="relative w-full h-screen overflow-hidden bg-black">
      {/* ✅ 3D Scene */}
      <Spline
        scene="https://prod.spline.design/nvSwDpk1ogJtgZO8/scene.splinecode"
        className="absolute inset-0 w-full h-full"
      />

      {/* ✅ Loading Overlay */}
      {loading && (
        <div
          className="absolute inset-0 flex items-center justify-center z-50 bg-cover bg-center backdrop-blur-2xl transition-all duration-1000"
          style={{
            backgroundImage: `url('/bg1.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            animation: "fadeStorm 2s ease forwards",
          }}
        >
          <div className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-gray-100 tracking-wide animate-pulse-slow">
            LAUNCHING OUR SPACE...
          </div>
        </div>
      )}

      {/* ✅ Navigation Buttons */}
      {showButtons && (
        <nav className="absolute top-8 right-8 flex gap-6 z-40 animate-fadeSlideIn">
          <button className="px-6 py-2 rounded-xl border border-gray-500/40 text-gray-200 backdrop-blur-md bg-white/10 hover:bg-white/20 transition">
            HOME
          </button>
          <button className="px-6 py-2 rounded-xl border border-gray-500/40 text-gray-200 backdrop-blur-md bg-white/10 hover:bg-white/20 transition">
            ABOUT
          </button>
        </nav>
      )}
    </main>
  )
}
