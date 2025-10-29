"use client"

import { useEffect, useState } from "react"
import SplineViewer from "@/components/spline-viewer"

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1300)
    return () => clearTimeout(timer)
  }, [])

  return (
    <main className="relative w-full h-screen overflow-hidden bg-black">
      {/* ✅ Spline scene (hidden until loader finishes) */}
      <div
        className={`transition-opacity duration-700 ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
      >
        <SplineViewer />
      </div>

      {/* ✅ Neon loader overlay */}
      {isLoading && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black transition-opacity duration-700">
          <div className="loader mb-4"></div>
          <p className="text-cyan-400 text-lg font-semibold tracking-wide animate-pulse">
            Launching YSR Space...
          </p>
        </div>
      )}

      {/* ✅ Custom spinner styles */}
      <style jsx>{`
        .loader {
          border: 4px solid rgba(0, 255, 255, 0.1);
          border-top: 4px solid #00ffff;
          border-radius: 50%;
          width: 48px;
          height: 48px;
          animation: spin 1s linear infinite, glow 1.3s ease-in-out infinite alternate;
        }

        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes glow {
          from {
            box-shadow: 0 0 10px #00ffff33;
          }
          to {
            box-shadow: 0 0 30px #00ffffaa;
          }
        }
      `}</style>
    </main>
  )
}
