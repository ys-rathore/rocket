import './globals.css';

export const metadata = {
  title: 'Rocket Spline Scene',
  description: '3D experience built with Spline and Next.js',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
