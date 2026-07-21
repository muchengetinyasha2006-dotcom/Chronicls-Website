import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Chronicls - Luxury Streetwear',
  description: 'Premium streetwear crafted for the modern lifestyle',
  keywords: ['streetwear', 'clothing', 'luxury', 'fashion'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-chronicls-white text-chronicls-black">
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
