'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import spider from '@/assets/spider.png'

import { MobileSlider } from '../Slider/Mobile'

export const Main = () => {
  return (
    <main
      id="home"
      className="mx-5 mt-8 flex h-[480px] flex-col items-center justify-between overflow-hidden rounded-3xl border border-gray-100 bg-neutral-50 shadow-md  dark:border-neutral-800 dark:bg-cinza-900 xxs:h-auto lg:mx-auto lg:mt-0 lg:max-w-5xl xl:max-w-7xl"
    >
      <div className="flex flex-col items-center">
        <h1 className="min-320:text-4xl mt-8 text-center text-[28px] font-bold leading-tight tracking-wide text-zinc-800 dark:text-white sm:pt-10 md:text-5xl lg:text-5xl xl:text-6xl">
          Software Engineer <br /> web & Mobile{' '}
        </h1>
        <p className="mt-5 max-w-2xl text-center font-normal text-zinc-500 dark:text-zinc-400 lg:text-base xl:text-xl">
          I am passionate about creating sophisticated digital experiences and
          turning creative visions into interactive reality!
        </p>
        <Link
          href="/projects"
          type="button"
          className="mb-2 mr-2 mt-2 rounded-full bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800"
        >
          All projects
        </Link>
      </div>

      <div>
        <Image
          className="mt-5 w-full overflow-hidden xxs:hidden"
          src={spider}
          alt="projects"
          priority
        />
      </div>

      <div className="hidden cursor-grab pb-8 xxs:flex">
        <MobileSlider />
      </div>
    </main>
  )
}
