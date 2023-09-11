'use client'

import './globals.css'
import { Inter } from 'next/font/google'
import type { Metadata } from 'next'
import { ThemeProvider } from 'next-themes'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Dev | Mike Fernando',
  description:
    'Portfolio of a software developer passionate about creating sophisticated digital experiences and turning creative visions into interactive reality!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth antialiased">
      <body className={inter.className}>
        <ThemeProvider enableSystem={true} attribute="class">
          <div className="overflow-hidden bg-white dark:bg-cinza-800">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
