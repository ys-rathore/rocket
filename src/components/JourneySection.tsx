import { SplineScene } from './SplineScene';

export function JourneySection() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black dark:bg-black">
      {/* 3D Spline Scene */}
      <div className="absolute inset-0 w-full h-full">
        <SplineScene 
          sceneUrl="https://prod.spline.design/journey-R5bXhUaZOPie8lSIwd0JuRFb/scene.splinecode"
          className="w-full h-full"
        />
      </div>

      {/* Optional Overlay Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* You can add text overlays here if needed */}
        </div>
      </div>
    </section>
  );
}
