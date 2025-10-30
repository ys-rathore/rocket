'use client';

import Spline from '@splinetool/react-spline';
import rocketScene from '@/assets/rocket-model.splinecode';

interface SplineViewerProps {
  onLoad?: () => void;
}

export default function SplineViewer({ onLoad }: SplineViewerProps) {
  return (
    <div className="w-full h-full">
      <Spline scene={rocketScene} onLoad={onLoad} />
    </div>
  );
}
