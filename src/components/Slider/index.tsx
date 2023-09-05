'use client'

import Image from 'next/image'
import React from 'react'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'

import spiderman from '@/assets/projects/spiderman-capa.png'
import apple from '@/assets/projects/apple-capa.png'
import bikecraft from '@/assets/projects/bikecraft-capa.png'
import wordtrip from '@/assets/projects/wortrip-capa.png'
import untitledui from '@/assets/projects/untitledui-capa.png'

export const Slider = () => {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 1.5,
    },
  })

  return (
    <div className="flex flex-col items-center">
      <section
        ref={sliderRef}
        className="keen-slider my-14 ml-[22%] flex w-[100%] max-w-[calc(1280px-((1280px-1280px)/2))] px-5"
      >
        <div className="group flex gap-10 shadow-projects">
          <div>
            <Image
              className="keen-slider__slide rounded-2xl "
              src={spiderman}
              alt="imagem 2"
            />
          </div>
          <div>
            <Image
              className="keen-slider__slide rounded-2xl"
              src={apple}
              alt="imagem 2"
            />
          </div>
          <div>
            <Image
              className="keen-slider__slide rounded-2xl"
              src={bikecraft}
              alt="imagem 2"
            />
          </div>
          <div>
            <Image
              className="keen-slider__slide rounded-2xl"
              src={wordtrip}
              alt="imagem 2"
            />
          </div>
          <div>
            <Image
              className="keen-slider__slide rounded-2xl"
              src={untitledui}
              alt="imagem 2"
            />
          </div>
          <div className="keen-slider__slide" />
        </div>
      </section>
    </div>
  )
}
