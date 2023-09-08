import React from 'react'

import { Sun } from './Sun'
import { Moon } from './Moon'

export const DarkMode = () => {
  return (
    <>
      <input type="checkbox" id="darkmode-toggle" className="peer hidden" />
      <label
        className="relative block h-[41px] w-[80px] cursor-pointer rounded-[200px] bg-gray-100 shadow-lightMode after:absolute after:left-[3px] after:top-[3px] after:h-[35px] after:w-[35px] after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:delay-300 peer-checked:bg-transparent peer-checked:after:left-[41px] peer-checked:after:bg-gradient-to-l peer-checked:after:from-[#777] peer-checked:after:to-gray-600 peer-checked:after:transition-all peer-checked:after:delay-300"
        htmlFor="darkmode-toggle"
      >
        <Moon className="absolute bottom-[8px] left-[48px] z-10 h-6 w-6 fill-gray-900" />
        <Sun className="absolute bottom-[8px] left-[8px] z-10 h-6 w-6 fill-gray-900" />
      </label>
    </>
  )
}
