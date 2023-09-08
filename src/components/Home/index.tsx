'use client'

import React from 'react'
import Image from 'next/image'

import apple from '@/assets/apple.png'

import { MobileSlider } from '../Slider/Mobile'
import Link from 'next/link'

export const Main = () => {
  return (
    <main className="xxs:h-auto mx-5 mt-24 flex h-[480px] flex-col items-center justify-between overflow-hidden rounded-3xl bg-gray-100 shadow-md md:mt-24 lg:mx-auto lg:mt-28 lg:max-w-5xl xl:max-w-7xl">
      <div className="flex flex-col items-center">
        <h1 className="min-320:text-4xl mt-4 text-center text-[28px] font-bold leading-tight tracking-wide text-zinc-800 sm:pt-10 md:text-4xl lg:text-5xl xl:text-6xl">
          Software Engineer <br /> web & Mobile{' '}
        </h1>
        <p className="mt-5 max-w-2xl text-center font-normal text-zinc-500 lg:text-base xl:text-xl">
          I am passionate about creating sophisticated digital experiences and
          turning creative visions into interactive reality!
        </p>
        <button
          type="button"
          className="my-3 rounded-full bg-varianteBlue px-4 py-3 text-center text-xs font-medium text-white transition-all hover:bg-varianteBlueHover sm:my-4 sm:px-5 sm:py-3 md:text-sm"
        >
          See projects
        </button>
      </div>

      <div>
        <Image
          className="xxs:hidden mt-5 w-full overflow-hidden"
          src={apple}
          alt="projects"
        />
      </div>

      <div className="xxs:flex hidden cursor-grab pb-8">
        <MobileSlider />
      </div>
    </main>
  )
}
