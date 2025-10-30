"use client";

import Spline from "@splinetool/react-spline";
import React from "react";

type SplineViewerProps = {
  /** URL of the Spline scene (.splinecode file) */
  sceneUrl: string;
  /** Fires when the Spline scene is fully loaded */
  onLoad?: () => void;
};

export default function SplineViewer({ sceneUrl, onLoad }: SplineViewerProps) {
  return (
    <div className="absolute inset-0 w-full h-full">
      <Spline scene={sceneUrl} onLoad={onLoad} />
    </div>
  );
}
