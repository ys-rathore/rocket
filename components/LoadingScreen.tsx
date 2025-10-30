"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 2000); // 2-second loading
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm transition-opacity duration-700">
      <Image
        src="/loading-bg.png"     // we’ll place your uploaded image here
        alt="Loading"
        fill
        style={{ objectFit: "cover", filter: "blur(6px)" }}
        priority
      />
      <h2 className="text-white text-xl font-semibold z-10 tracking-widest">
        Loading YSpace...
      </h2>
    </div>
  );
}
