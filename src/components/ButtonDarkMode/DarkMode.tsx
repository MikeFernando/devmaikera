import React from 'react'

import { Sun } from './Sun'
import { Moon } from './Moon'

export const DarkMode = () => {
  return (
    <>
      <input type="checkbox" id="darkmode-toggle" className="peer hidden" />
      <label
        className="relative block h-[41px] w-[90px] cursor-pointer rounded-[200px] bg-[#ebebeb] shadow-darkMode after:absolute after:left-[3px] after:top-[3px] after:h-[35px] after:w-[35px] after:rounded-full after:bg-[#eecfa1] after:bg-gradient-to-r after:from-[#d8860b] after:transition-all after:delay-300 peer-checked:bg-transparent peer-checked:after:left-[51px] peer-checked:after:bg-gradient-to-l peer-checked:after:from-[#777] peer-checked:after:to-[#3a3a3a] peer-checked:after:transition-all peer-checked:after:delay-300"
        htmlFor="darkmode-toggle"
      >
        <Sun className="fill absolute bottom-[7px] left-[6px] z-10 h-7 w-7 text-white" />
        <Moon className="fill absolute bottom-[7px] left-[55px] z-10 h-7 w-7 text-white" />
      </label>
    </>
  )
}
