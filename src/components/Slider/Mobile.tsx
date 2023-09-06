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
      spacing: 20,
    },
    vertical: true,
  })
  return (
    <div
      ref={ref}
      className="keen-slider relative mx-auto mt-3 py-5"
      style={{ height: 300 }}
    >
      <div className="absolute right-3 top-[37%]">
        <span className="animate-arrow -mt-0.5 block h-5 w-5 rotate-[45deg] border-b-2 border-r-2 border-gray-200 duration-100"></span>
        <span className="animate-arrow -mt-0.5 block h-5 w-5 rotate-[45deg] border-b-2 border-r-2 border-gray-300 duration-200"></span>
        <span className="animate-arrow -mt-0.5 block h-5 w-5 rotate-[45deg] border-b-2 border-r-2 border-gray-400 duration-300"></span>
        <span className="animate-arrow -mt-0.5 block h-5 w-5 rotate-[45deg] border-b-2 border-r-2 border-gray-500 duration-500"></span>
      </div>
      <div className="flex flex-col items-center justify-center">
        <div>
          <Image
            className="keen-slider__slide p-5"
            src={spiderman}
            alt="imagem 2"
            width={850}
            priority
          />
        </div>
        <div>
          <Image
            className="keen-slider__slide p-5"
            src={apple}
            alt="imagem 2"
            width={850}
            priority
          />
        </div>
        <div>
          <Image
            className="keen-slider__slide p-5"
            src={bikecraft}
            alt="imagem 2"
            width={850}
            priority
          />
        </div>
        <div>
          <Image
            className="keen-slider__slide p-5"
            src={wordtrip}
            alt="imagem 2"
            width={850}
            priority
          />
        </div>
        <div>
          <Image
            className="keen-slider__slide p-5"
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
