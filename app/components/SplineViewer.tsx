"use client";
import Spline from "@splinetool/react-spline";
import { useEffect } from "react";

interface Props {
  sceneUrl: string;
  onLoad: () => void;
}

export default function SplineViewer({ sceneUrl, onLoad }: Props) {
  useEffect(() => {
    // fallback timeout if onLoad not triggered
    const timer = setTimeout(onLoad, 8000);
    return () => clearTimeout(timer);
  }, [onLoad]);

  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="w-full h-full" style={{ clipPath: "inset(0 0 4% 0)" }}>
        <Spline scene={sceneUrl} onLoad={onLoad} />
      </div>
    </div>
  );
}
