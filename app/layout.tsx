import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ChatButton } from '@/components/ChatButton'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'MotrunEnterprise & Co | Frozen Seafood Supply Lagos',
  description: 'Reliable bulk frozen fish and seafood supply in Lagos. Premium quality, fast delivery. Trusted by 50+ restaurants and food businesses.',
  generator: 'Osinaku Ugonna Sylvia',
  icons: {
    icon: [
      {
        url: '/icon-dark-32x32.jpg',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.jpg',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon-dark-32x32.jpg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/icon-dark-32x32.jpg',
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
        <ChatButton />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
