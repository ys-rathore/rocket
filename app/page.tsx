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
      {/* ✅ 3D Scene - fades in after loader */}
      <div
        className={`transition-opacity duration-700 ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
      >
        <SplineViewer />
      </div>

      {/* ✅ Glass gradient loader overlay */}
      {isLoading && (
        <div
          className={`absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-700 ${
            isLoading ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          style={{
            background:
              "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)",
            backdropFilter: "blur(18px) saturate(180%)",
            WebkitBackdropFilter: "blur(18px) saturate(180%)",
          }}
        >
          <div className="loader mb-5"></div>
          <p className="gradient-text text-xl md:text-2xl font-semibold tracking-wider animate-fadeIn">
            LAUNCHING OUR SPACE....
          </p>
        </div>
      )}

      {/* ✅ CSS styles */}
      <style jsx>{`
        .loader {
          border: 4px solid rgba(255, 255, 255, 0.15);
          border-top: 4px solid rgba(255, 255, 255, 0.85);
          border-radius: 50%;
          width: 52px;
          height: 52px;
          animation: spin 1.2s linear infinite, glow 1.5s ease-in-out infinite alternate;
        }

        .gradient-text {
          background: linear-gradient(90deg, #ffffff, #dcdcdc, #ffffff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          text-shadow: 0 0 12px rgba(255, 255, 255, 0.3);
        }

        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes glow {
          from {
            box-shadow: 0 0 10px rgba(255, 255, 255, 0.2);
          }
          to {
            box-shadow: 0 0 25px rgba(255, 255, 255, 0.5);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </main>
  )
}
