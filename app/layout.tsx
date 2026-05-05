import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Kagujje — Digital Excellence',
  description: 'Kagujje is a multidisciplinary digital ecosystem. SMM services, automated forex trading, mobile device management, and more. Built by Kasiba Shardick.',
  keywords: 'Kagujje, SMM panel, forex trading, MDM, Uganda, digital services, Kasiba Shardick',
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  openGraph: {
    title: 'Kagujje — Digital Excellence',
    description: 'Services that ease daily work, solve problems, and make life enjoyable.',
    url: 'https://kagujje.com',
    siteName: 'Kagujje',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kagujje — Digital Excellence',
    description: 'Services that ease daily work, solve problems, and make life enjoyable.',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-[#050505] text-white antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  )
}
