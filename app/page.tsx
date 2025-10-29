"use client"

import { useState, useEffect } from "react"
import SplineViewer from "@/components/spline-viewer"

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1200) // 1.2 seconds delay
    return () => clearTimeout(timer)
  }, [])

  return (
    <main className="w-full h-screen overflow-hidden bg-black relative">
      {/* ✅ Fade-out loader */}
      <div
        className={`absolute inset-0 flex items-center justify-center 
        bg-gradient-to-br from-fuchsia-600 to-blue-700 
        text-white text-2xl font-semibold tracking-wider 
        transition-opacity duration-700 
        ${isLoading ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      >
        Loading...
      </div>

      {/* ✅ Your 3D Spline viewer */}
      <SplineViewer />
    </main>
  )
}
