import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "YSpace",
  description: "Immersive 3D experience powered by Spline & Next.js",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
