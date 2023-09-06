'use client'

import React from 'react'
import { SliderDesktop } from '../Slider/Desktop'
import { MobileSlider } from '../Slider/Mobile'

export const Main = () => {
  return (
    <main className="mx-auto flex flex-col items-center justify-between overflow-hidden rounded-3xl bg-gray-50 px-5 shadow-md md:mt-24 md:max-w-2xl lg:mt-28 lg:max-w-5xl xl:max-w-7xl">
      <div className="flex flex-col items-center">
        <h1 className="pt-10 text-center font-bold leading-tight tracking-wide text-zinc-800 md:text-4xl lg:text-5xl xl:text-6xl">
          Software Engineer <br /> web & Mobile{' '}
        </h1>
        <p className="mt-5 max-w-2xl text-center font-normal text-zinc-500 lg:text-base xl:text-xl">
          I am passionate about creating sophisticated digital experiences and
          turning creative visions into interactive reality!
        </p>
        <button
          type="button"
          className="my-4 rounded-full bg-gradient-to-br from-purple-600 to-blue-500 px-5 py-3 text-center font-medium text-white hover:bg-gradient-to-bl focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 md:text-xs lg:text-sm"
        >
          See website 👇
        </button>
      </div>

      {/* Mobile */}
      <div className="visible pb-8 lg:hidden">
        <MobileSlider />
      </div>

      {/* Desktop slider */}
      <div className="hidden pb-6 lg:flex lg:px-8">
        <SliderDesktop />
      </div>
    </main>
  )
}
