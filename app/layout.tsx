import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'YSpace',
  description: 'Lets Create it!',
  generator: 'Space.in',
  icons: {
    icon: '/favicon.png', // ✅ Your custom favicon
  },
  openGraph: {
    title: 'YSpace',
    description: 'Lets Create it!',
    url: 'https://yourdomain.com', // optional — replace with your actual domain
    siteName: 'YSpace',
    images: [
      {
        url: '/favicon.png',
        width: 512,
        height: 512,
        alt: 'YSpace Logo',
      },
    ],
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
