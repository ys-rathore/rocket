'use client';

import Spline from '@splinetool/react-spline';
import { useEffect } from 'react';

export default function SplineViewer({ onLoad }: { onLoad: () => void }) {
  useEffect(() => {
    const timer = setTimeout(() => onLoad(), 4000);
    return () => clearTimeout(timer);
  }, [onLoad]);

  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-x-0 top-[-2%] bottom-[5%]">
        <Spline
          scene="https://prod.spline.design/nvSwDpk1ogJtgZO8/scene.splinecode"
          onLoad={onLoad}
        />
      </div>
    </div>
  );
}
