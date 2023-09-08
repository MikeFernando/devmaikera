'use client'

import React from 'react'
import { SunDim, X } from 'lucide-react'

import { DarkMode } from '../ButtonDarkMode/DarkMode'
import { Logo } from './Logo'
import { SvgMenu } from './SvgMenu'
import { MenuMobile } from './MenuMobile'

export const Header = () => {
  const [open, setOpen] = React.useState(false)

  function handleMenu() {
    setOpen((prev) => !prev)
  }

  return (
    <header className="fixed z-50 h-20 w-full bg-white lg:h-28 lg:pt-6">
      <div className="mx-auto flex items-center justify-between px-5 pt-4 md:max-w-4xl lg:max-w-5xl lg:px-0 lg:pt-0 xl:max-w-7xl ">
        <div>
          <Logo className="h-14 w-14 -rotate-[8deg] fill-gray-900" />
        </div>

        <nav className="hidden list-none gap-12 text-zinc-900 md:flex md:text-sm lg:text-base">
          <li>
            <a
              className="hover:text-zinc-500 hover:transition-colors"
              href="#home"
            >
              Home
            </a>
          </li>
          <li>
            <a
              className="hover:text-zinc-500 hover:transition-colors"
              href="#experience"
            >
              Experience
            </a>
          </li>
          <li>
            <a
              className="hover:text-zinc-500 hover:transition-colors"
              href="#skills"
            >
              Skills
            </a>
          </li>
          <li>
            <a className="hover:text-zinc-500 hover:transition-colors" href="#">
              Projects
            </a>
          </li>
        </nav>

        <div className="hidden md:flex">
          <DarkMode />
        </div>

        <div className="flex items-center gap-4 md:hidden">
          <button className="rounded-full border border-gray-200 p-1">
            <SunDim size={20} className="text-gray-600" />
          </button>

          <button
            onClick={handleMenu}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 p-2"
          >
            {open === true ? (
              <X className='className="h-6 fill-gray-800" w-6' />
            ) : (
              <SvgMenu className="h-6 w-6 fill-gray-800" />
            )}
          </button>
        </div>

        {open && <MenuMobile />}
      </div>
    </header>
  )
}
