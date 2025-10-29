"use client"

import type React from "react"
import { useEffect, useRef } from "react"

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "spline-viewer": SplineViewerProps
    }
  }
}

interface SplineViewerProps {
  url: string
  "loading-anim-type"?: string
  style?: React.CSSProperties
}

export default function SplineViewer() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Load Spline viewer script
    const script = document.createElement("script")
    script.type = "module"
    script.src = "https://unpkg.com/@splinetool/viewer@1.10.89/build/spline-viewer.js"
    script.async = true
    document.head.appendChild(script)

    const removeWatermark = () => {
      try {
        // Strategy 1: Access shadow DOM and hide watermark elements
        const splineViewer = document.querySelector("spline-viewer") as any
        if (splineViewer?.shadowRoot) {
          const shadowElements = splineViewer.shadowRoot.querySelectorAll("*")
          shadowElements.forEach((el: any) => {
            const text = el.textContent?.toLowerCase() || ""
            const className = el.className?.toLowerCase() || ""
            const id = el.id?.toLowerCase() || ""

            // Target watermark/logo elements specifically
            if (
              text.includes("spline") ||
              text.includes("powered") ||
              className.includes("watermark") ||
              className.includes("logo") ||
              className.includes("branding") ||
              id.includes("watermark") ||
              id.includes("logo")
            ) {
              el.style.display = "none !important"
              el.style.visibility = "hidden !important"
              el.style.opacity = "0 !important"
              el.style.pointerEvents = "none !important"
              el.style.width = "0 !important"
              el.style.height = "0 !important"
            }
          })
        }

        // Strategy 2: Create SOLID footer bar that covers the entire bottom - looks like design element
        let footer = document.getElementById("design-footer")
        if (!footer) {
          footer = document.createElement("div")
          footer.id = "design-footer"
          footer.style.cssText = `
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            width: 100%;
            height: 80px;
            background: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.95) 100%);
            z-index: 9999;
            pointer-events: none;
            box-shadow: 0 -10px 40px rgba(0,0,0,0.8);
          `
          document.body.appendChild(footer)
        }

        // Strategy 3: Try to find and hide via iframe if embedded
        const iframes = document.querySelectorAll("iframe")
        iframes.forEach((iframe) => {
          try {
            const iframeDoc = iframe.contentDocument || iframe.contentWindow?.document
            if (iframeDoc) {
              const watermarks = iframeDoc.querySelectorAll(
                "[class*='watermark'], [class*='logo'], [class*='branding']",
              )
              watermarks.forEach((el) => {
                el.style.display = "none !important"
              })
            }
          } catch (e) {
            // CORS restrictions
          }
        })
      } catch (e) {
        console.log("[v0] Watermark removal attempt completed")
      }
    }

    // Run removal multiple times to catch dynamically loaded elements
    removeWatermark()
    const intervals = [
      setTimeout(removeWatermark, 300),
      setTimeout(removeWatermark, 600),
      setTimeout(removeWatermark, 1000),
      setTimeout(removeWatermark, 1500),
      setTimeout(removeWatermark, 2000),
      setTimeout(removeWatermark, 3000),
    ]

    // Monitor for new elements and remove watermarks continuously
    const observer = new MutationObserver(() => {
      removeWatermark()
    })

    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ["style", "class"],
    })

    return () => {
      observer.disconnect()
      intervals.forEach(clearTimeout)
      if (script.parentNode) {
        script.parentNode.removeChild(script)
      }
    }
  }, [])

  return (
    <div ref={containerRef} className="w-full h-screen relative bg-black overflow-hidden">
      <spline-viewer
        url="https://prod.spline.design/nvSwDpk1ogJtgZO8/scene.splinecode"
        loading-anim-type="none"
        style={{
          width: "100%",
          height: "100%",
          display: "block",
        }}
      />

      <div
        className="fixed bottom-0 left-0 right-0 z-40 pointer-events-none"
        style={{
          height: "60px",
          background: "#000000",
        }}
      />

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 flex gap-3 mt-32">
        <a
          href="https://ysrathore.space/home"
          className="px-4 py-2 rounded-full font-bold text-black backdrop-blur-md bg-white/40 hover:bg-white/50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 text-sm tracking-wide"
        >
          HOME
        </a>
        <a
          href="https://ysrathore.space/about"
          className="px-4 py-2 rounded-full font-bold text-black backdrop-blur-md bg-white/40 hover:bg-white/50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 text-sm tracking-wide"
        >
          ABOUT
        </a>
      </div>
    </div>
  )
}
