import { Suspense, lazy } from 'react';

// Dynamically import Spline to avoid SSR issues
const Spline = lazy(() => import('@splinetool/react-spline'));

interface SplineSceneProps {
  sceneUrl: string;
  className?: string;
  fallback?: React.ReactNode;
}

export function SplineScene({ sceneUrl, className = '', fallback }: SplineSceneProps) {
  return (
    <div className={`relative ${className}`}>
      <Suspense 
        fallback={
          fallback || (
            <div className="w-full h-full flex items-center justify-center bg-black/20 dark:bg-white/5">
              <div className="text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
                <p className="text-sm text-white/60">Loading 3D Scene...</p>
              </div>
            </div>
          )
        }
      >
        <Spline scene={sceneUrl} />
      </Suspense>
    </div>
  );
}
