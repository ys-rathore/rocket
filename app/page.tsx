"use client"

import { useEffect, useState } from "react"
import SplineViewer from "@/components/spline-viewer"

export default function Home() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1300) // 1.3 sec
    return () => clearTimeout(timer)
  }, [])

  return (
    <main className="w-full h-screen overflow-hidden bg-black relative">
      {/* Loader Section */}
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center backdrop-blur-2xl bg-[rgba(255,255,255,0.05)] z-50 animate-fadeOut">
          <div className="text-center">
            <h1
              className="text-3xl md:text-5xl font-extrabold 
              bg-gradient-to-r from-white via-gray-200 to-white 
              bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]"
            >
              LAUNCHING OUR SPACE...
            </h1>
          </div>
        </div>
      )}

      {/* 3D Spline Scene */}
      <SplineViewer />
    </main>
  )
}
