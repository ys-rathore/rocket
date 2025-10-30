'use client';

import { useState } from 'react';
import SplineViewer from './components/SplineViewer';
import LoadingScreen from './components/LoadingScreen';

export default function HomePage() {
  const [loaded, setLoaded] = useState(false);

  return (
    <main className="relative w-full h-screen overflow-hidden bg-black text-white">
      <SplineViewer onLoad={() => setLoaded(true)} />
      <LoadingScreen visible={!loaded} />

      {loaded && (
        <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex gap-4">
          <button className="px-6 py-2 rounded-full bg-white text-black font-semibold shadow-md hover:shadow-lg transition">
            HOME
          </button>
          <button className="px-6 py-2 rounded-full bg-white text-black font-semibold shadow-md hover:shadow-lg transition">
            ABOUT
          </button>
        </div>
      )}
    </main>
  );
}
