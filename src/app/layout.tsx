import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Image from 'next/image'

import Logo from '@/assets/logo.png'
import { DarkMode } from '@/components/ButtonDarkMode/DarkMode'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Dev | Mike Fernando ',
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
        <div className="bg-[#25282e]">
          <header className="h-28 w-full bg-[#25282e] px-4 py-3">
            <div className="relative mx-auto flex max-w-7xl items-center justify-between py-4">
              <div className="h-14 w-14 rounded-full border-2 border-zinc-400">
                <Image
                  src={Logo}
                  alt="Mike Fernando"
                  className="block overflow-hidden rounded-full"
                />
              </div>
              <nav className="text-md flex list-none gap-12 text-white">
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Experience</a>
                </li>
                <li>
                  <a href="#">Education</a>
                </li>
                <li>
                  <a href="#">Skills</a>
                </li>
              </nav>
              <DarkMode />
            </div>
          </header>
          {children}
        </div>
      </body>
    </html>
  )
}
