"use client"
import Navbar from '@/compnents/Navbar'
import './globals.css'
import { ThemeProvider } from 'next-themes'

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
      <body className='dark:bg-stone-900' >
        <ThemeProvider enableSystem={true} attribute='class'>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
