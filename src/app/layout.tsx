"use client"
import './globals.css'
import { ThemeProvider } from 'next-themes'

import Navbar from '@/compnents/Navbar'
import Footer from '@/compnents/Footer'

export const metadata = {
  title: 'MT Portfolio',
  description: 'Mohammad Tavakolikia Portfolio Site',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body className='dark:bg-stone-900' >
        <ThemeProvider enableSystem={true} attribute='class'>
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
