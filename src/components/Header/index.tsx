'use client'

import React, { useEffect } from 'react'
import { useTheme } from 'next-themes'
import Link from 'next/link'

import { Menu, SunDim, X } from 'lucide-react'
import { Moon } from './Moon'
import { Logo } from './Logo'
import { MenuHamburger } from './MenuHamburger'

export const Header = () => {
  const [isClient, setIsClient] = React.useState(false)
  const { systemTheme, theme, setTheme } = useTheme()
  const [open, setOpen] = React.useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  function renderThemeChanger() {
    const currentTheme = theme === 'system' ? systemTheme : theme
    if (isClient === true && currentTheme === 'dark') {
      return (
        <div className="cursor-pointer rounded-full bg-cinza-900 p-2">
          <SunDim onClick={() => setTheme('light')} className="h-6 w-6 " />
        </div>
      )
    } else {
      return (
        <div className="cursor-pointer rounded-full bg-gray-50 p-2">
          <Moon
            onClick={() => setTheme('dark')}
            className="h-6 w-6 fill-gray-900"
          />
        </div>
      )
    }
  }

  function handleMenu() {
    setOpen((prev) => !prev)
  }

  return (
    <header className="z-50 h-20 w-full bg-white dark:bg-cinza-800 lg:h-28 lg:pt-6">
      <div className="mx-auto flex items-center justify-between px-5 pt-4 md:max-w-4xl lg:max-w-5xl lg:px-0 lg:pt-0 xl:max-w-7xl ">
        <div>
          <Logo className="h-14 w-14 -rotate-[8deg] fill-gray-900 dark:fill-white" />
        </div>

        <nav className="hidden list-none gap-12 text-zinc-900 md:flex md:text-sm lg:text-base">
          <li>
            <a
              className="hover:text-zinc-500 hover:transition-colors dark:text-gray-300 dark:hover:text-white"
              href="#home"
            >
              Home
            </a>
          </li>
          <li>
            <a
              className="hover:text-zinc-500 hover:transition-colors dark:text-gray-300 dark:hover:text-white"
              href="#experience"
            >
              Experience
            </a>
          </li>
          <li>
            <a
              className="hover:text-zinc-500 hover:transition-colors dark:text-gray-300 dark:hover:text-white"
              href="#skills"
            >
              Skills
            </a>
          </li>
          <li>
            <Link
              className="hover:text-zinc-500 hover:transition-colors dark:text-gray-300 dark:hover:text-white"
              href="/projects"
            >
              Projects
            </Link>
          </li>
        </nav>

        <div className="hidden md:flex">{renderThemeChanger()}</div>

        {/* menu mobile */}
        <div className="flex items-center gap-4 md:hidden">
          {renderThemeChanger()}

          <button
            onClick={handleMenu}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 p-2"
          >
            {open === true ? (
              <X className='className="w-6 h-6 fill-gray-800 dark:fill-white' />
            ) : (
              <Menu className="h-6 w-6 text-cinza-900 dark:fill-white dark:text-white " />
            )}
          </button>
        </div>

        {open && <MenuHamburger />}
      </div>
    </header>
  )
}
