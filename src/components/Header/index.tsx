'use client'

import React from 'react'
import Image from 'next/image'

import Logo from '@/assets/logo.png'
import { DarkMode } from '../ButtonDarkMode/DarkMode'

export const Header = () => {
  function handleToggleMenu(event: React.MouseEvent<HTMLButtonElement>) {
    const btn = event.target as HTMLButtonElement
    const toggleClass = btn.classList.toggle('active')
    console.log(toggleClass)
  }

  return (
    <header className="fixed z-50 w-full bg-white md:h-20 md:pt-4 lg:h-28 lg:pt-6">
      <div className="mx-auto flex items-center justify-between px-5 md:max-w-4xl lg:max-w-5xl xl:max-w-7xl ">
        <div className="h-14 w-14 rounded-full border-2 border-zinc-400">
          <Image
            src={Logo}
            alt="Mike Fernando"
            className="block overflow-hidden rounded-full"
          />
        </div>

        <nav className="list-none gap-12 text-zinc-900 sm:flex md:text-sm lg:text-base">
          <li>
            <a className="hover:text-zinc-500 hover:transition-colors" href="#">
              Home
            </a>
          </li>
          <li>
            <a className="hover:text-zinc-500 hover:transition-colors" href="#">
              Experience
            </a>
          </li>
          <li>
            <a className="hover:text-zinc-500 hover:transition-colors" href="#">
              Skills
            </a>
          </li>
          <li>
            <a className="hover:text-zinc-500 hover:transition-colors" href="#">
              Contact
            </a>
          </li>
        </nav>

        <div className="hidden md:flex">
          <DarkMode />
        </div>

        <button onClick={handleToggleMenu} className="visible block sm:hidden">
          Menu
        </button>
      </div>
    </header>
  )
}
