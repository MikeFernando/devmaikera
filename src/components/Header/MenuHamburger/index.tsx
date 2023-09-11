import Link from 'next/link'
import React from 'react'

export const MenuHamburger = () => {
  return (
    <div className="absolute -bottom-[300px] left-0 right-0 top-20 z-[999px] h-[300px] rounded-b-2xl bg-white shadow-md transition-all duration-500 dark:bg-cinza-800 md:hidden">
      <div className="flex h-[300px] flex-col items-center justify-center space-y-8 px-2 pb-2 pt-2 sm:px-3">
        <a
          className="bg-white text-cinza-900 dark:bg-cinza-800 dark:text-white"
          href="#home"
        >
          Home
        </a>
        <a
          className="bg-white text-cinza-900 dark:bg-cinza-800 dark:text-white"
          href="#experience"
        >
          Experience
        </a>
        <a
          className="bg-white text-cinza-900 dark:bg-cinza-800 dark:text-white"
          href="#skills"
        >
          Skills
        </a>
        <Link
          className="bg-white text-cinza-900 dark:bg-cinza-800 dark:text-white"
          href="/projects"
        >
          Projects
        </Link>
      </div>
    </div>
  )
}
