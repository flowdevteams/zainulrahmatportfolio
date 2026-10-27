import type { Metadata, Viewport } from 'next'
import { Inter, Abril_Fatface } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
});

const abrilFatface = Abril_Fatface({
  weight: '400',
  subsets: ["latin"],
  variable: '--font-abril',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Zainul Rahmat | Portfolio',
  description: 'Portfolio of Zainul Rahmat Saputra — Web Developer, Designer & Entrepreneur. Founder of Flowdev Teams.',
  keywords: ['Web Developer', 'UI Designer', 'Portfolio', 'Flowdev Teams', 'Next.js', 'React'],
  authors: [{ name: 'Zainul Rahmat Saputra' }],
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'apple-touch-icon-precomposed',
        url: '/apple-touch-icon.png',
      },
    ],
  },
}

export const viewport: Viewport = {
  themeColor: '#0b0e1a',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${abrilFatface.variable} font-sans antialiased overflow-x-hidden`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
