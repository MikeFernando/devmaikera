import './globals.css'
import { Inter } from 'next/font/google'
import type { Metadata } from 'next'

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
    <html lang="en" className="antialiased">
      <body className={inter.className}>
        <div className="dark:dark:bg-cinza-800 overflow-hidden bg-white">
          {children}
        </div>
      </body>
    </html>
  )
}
