"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

type LoadingScreenProps = {
  /** Control visibility externally. If omitted, uses internal timer. */
  visible?: boolean | null;
  /** Duration (ms) before auto-hide when uncontrolled */
  durationMs?: number;
};

function LoadingOverlay() {
  return (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/60 backdrop-blur-md transition-opacity duration-500">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/loading-bg.png"
          alt="Background"
          fill
          priority
          style={{ objectFit: "cover", filter: "blur(6px)" }}
        />
      </div>

      {/* Spinner + Text */}
      <div className="z-10 flex flex-col items-center gap-5">
        <div
          className="rounded-full bg-white/10 p-5"
          aria-hidden
          style={{ backdropFilter: "blur(6px)" }}
        >
          <svg
            className="h-10 w-10 animate-spin text-white"
            viewBox="0 0 24 24"
            fill="none"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
            />
          </svg>
        </div>

        <h2 className="text-white text-xl font-semibold tracking-wider">
          Loading YSpace...
        </h2>
      </div>
    </div>
  );
}

export default function LoadingScreen({
  visible: visibleProp = null,
  durationMs = 2000,
}: LoadingScreenProps) {
  const [internalVisible, setInternalVisible] = useState(true);
  const visible =
    visibleProp === null || visibleProp === undefined
      ? internalVisible
      : visibleProp;

  useEffect(() => {
    if (visibleProp === null || visibleProp === undefined) {
      const timer = setTimeout(() => setInternalVisible(false), durationMs);
      return () => clearTimeout(timer);
    }
  }, [visibleProp, durationMs]);

  if (!visible || typeof document === "undefined") return null;
  return createPortal(<LoadingOverlay />, document.body);
}
