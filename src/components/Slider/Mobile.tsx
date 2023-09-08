'use client'

import * as React from 'react'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'

import spiderman from '@/assets/projects/spiderman-capa.png'
import apple from '@/assets/projects/apple-capa.png'
import bikecraft from '@/assets/projects/bikecraft-capa.png'
import wordtrip from '@/assets/projects/wortrip-capa.png'
import untitledui from '@/assets/projects/untitledui-capa.png'
import Image from 'next/image'

export function MobileSlider() {
  const [ref] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: {
      origin: 'center',
      perView: 1,
      spacing: 10,
    },
    vertical: true,
  })
  return (
    <div
      ref={ref}
      className="keen-slider xxs::h-[200px] relative mx-auto h-[300px]  lg:h-[500px]"
    >
      <div className="absolute right-6 top-[37%] sm:right-10">
        <span className="-mt-0.5 block h-3 w-3 rotate-[45deg] animate-arrow border-b-2 border-r-2 border-gray-200 duration-100 md:h-5 md:w-5 lg:h-7 lg:w-7"></span>
        <span className="-mt-0.5 block h-3 w-3 rotate-[45deg] animate-arrow border-b-2 border-r-2 border-gray-400 duration-200 md:h-5 md:w-5 lg:h-7 lg:w-7"></span>
        <span className="-mt-0.5 block h-3 w-3 rotate-[45deg] animate-arrow border-b-2 border-r-2 border-gray-600 duration-300 md:h-5 md:w-5 lg:h-7 lg:w-7"></span>
        <span className="-mt-0.5 block h-3 w-3 rotate-[45deg] animate-arrow border-b-2 border-r-2 border-gray-900 duration-500 md:h-5 md:w-5 lg:h-7 lg:w-7"></span>
      </div>
      <div className="keen-slider flex w-full max-w-[calc(1280px-((1280px-1280px)/2))] flex-col px-5">
        <div>
          <Image
            className="keen-slider__slide px-0 sm:p-5"
            src={spiderman}
            alt="imagem 2"
            width={850}
            priority
          />
        </div>
        <div>
          <Image
            className="keen-slider__slide px-0 sm:p-5"
            src={apple}
            alt="imagem 2"
            width={850}
            priority
          />
        </div>
        <div>
          <Image
            className="keen-slider__slide px-0 sm:p-5"
            src={bikecraft}
            alt="imagem 2"
            width={850}
            priority
          />
        </div>
        <div>
          <Image
            className="keen-slider__slide px-0 sm:p-5"
            src={wordtrip}
            alt="imagem 2"
            width={850}
            priority
          />
        </div>
        <div>
          <Image
            className="keen-slider__slide px-0 sm:p-5"
            src={untitledui}
            alt="imagem 2"
            width={850}
            priority
          />
        </div>
      </div>
    </div>
  )
}
