'use client'

import React from 'react'
import { useTheme } from 'next-themes'

import { SunDim, X } from 'lucide-react'
import { Moon } from './Moon'
import { Logo } from './Logo'
import { SvgMenu } from './SvgMenu'
import { MenuMobile } from './MenuMobile'

export const Header = () => {
  const { systemTheme, theme, setTheme } = useTheme()
  const [open, setOpen] = React.useState(false)

  function renderThemeChanger() {
    const currentTheme = theme === 'system' ? systemTheme : theme

    if (currentTheme === 'dark') {
      return (
        <div>
          <input type="checkbox" id="darkmode-toggle" className="peer hidden" />
          <label
            className="relative block h-[41px] w-[80px] cursor-pointer rounded-[200px] bg-gray-100 after:absolute after:left-[3px] after:top-[3px] after:h-[35px] after:w-[35px] after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:delay-300 peer-checked:after:left-[41px] peer-checked:after:bg-gradient-to-l peer-checked:after:from-[#777] peer-checked:after:to-gray-600 peer-checked:after:transition-all peer-checked:after:delay-300 dark:border-gray-400 dark:bg-cinza-900"
            htmlFor="darkmode-toggle"
          >
            <Moon
              onClick={() => setTheme('dark')}
              className="absolute bottom-[9px] left-[48px] z-10 h-6 w-6 fill-gray-900"
            />
            <SunDim
              onClick={() => setTheme('light')}
              className="absolute bottom-[9px] left-[9px] z-10 h-[22px] w-[22px] "
            />
          </label>
        </div>
      )
    } else {
      return (
        <div>
          <input
            type="checkbox"
            id="darkmode-toggle"
            className="peer hidden"
            onClick={() => renderThemeChanger()}
          />
          <label
            className="relative block h-[41px] w-[80px] cursor-pointer rounded-[200px] bg-gray-100 after:absolute after:left-[3px] after:top-[3px] after:h-[35px] after:w-[35px] after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:delay-300 peer-checked:bg-transparent peer-checked:after:left-[41px] peer-checked:after:bg-gradient-to-l peer-checked:after:from-[#777] peer-checked:after:to-gray-600 peer-checked:after:transition-all peer-checked:after:delay-300 dark:shadow-none"
            htmlFor="darkmode-toggle"
          >
            <Moon
              onClick={() => setTheme('dark')}
              className="absolute bottom-[9px] left-[48px] z-10 h-6 w-6 fill-gray-900"
            />
            <SunDim
              onClick={() => setTheme('light')}
              className="absolute bottom-[9px] left-[9px] z-10 h-[22px] w-[22px] "
            />
          </label>
        </div>
      )
    }
  }

  function handleMenu() {
    setOpen((prev) => !prev)
  }

  return (
    <header className="fixed z-50 h-20 w-full bg-white dark:bg-cinza-800 lg:h-28 lg:pt-6">
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
            <a
              className="hover:text-zinc-500 hover:transition-colors dark:text-gray-300 dark:hover:text-white"
              href="#"
            >
              Projects
            </a>
          </li>
        </nav>

        <div className="hidden md:flex">{renderThemeChanger()}</div>

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
