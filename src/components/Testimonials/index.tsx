/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import React from 'react'
import 'keen-slider/keen-slider.min.css'
import './styles.css'
import { useKeenSlider } from 'keen-slider/react'
import Image from 'next/image'

import henrique from '@/assets/testimonials/henrique.jpg'
import murilo from '@/assets/testimonials/murilo.jpg'
import fernanda from '@/assets/testimonials/fernanda.jpg'

export function Testimonials() {
  const [currentSlide, setCurrentSlide] = React.useState(0)
  const [loaded, setLoaded] = React.useState(false)
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created() {
      setLoaded(true)
    },
  })

  return (
    <>
      <div className="navigation-wrapper">
        <div ref={sliderRef} className="keen-slider">
          <div className="keen-slider__slide number-slide">
            <figure className="flex max-w-2xl items-center justify-center text-center">
              <div>
                <figcaption className="mt-6 flex items-center justify-center space-x-3">
                  <div className="flex flex-col items-center ">
                    <Image
                      className="mb-3 h-20 w-20 rounded-full"
                      src={henrique}
                      alt="profile picture"
                    />
                    <cite className="pr-3 text-2xl font-medium text-gray-900 dark:text-white">
                      Henrique Fernandes
                    </cite>
                    <cite className="pl-3 text-sm text-gray-500 dark:text-gray-400">
                      Head of Operation | ProductHead of Operation
                    </cite>
                    <cite className="text-sm text-zinc-400">
                      Henrique is senior to Mike
                    </cite>
                  </div>
                </figcaption>

                <blockquote>
                  <p className="my-5 text-lg font-medium italic text-gray-700 dark:text-white">
                    Mike is an excellent professional, engaged, super
                    analytical, hardworking, communicative and many other skills
                    that make him a professional who fits any type of
                    project/challenge.
                  </p>
                </blockquote>
              </div>
            </figure>
          </div>

          <div className="keen-slider__slide number-slide">
            <figure className="flex max-w-2xl items-center justify-center text-center">
              <div>
                <figcaption className="mt-6 flex items-center justify-center space-x-3">
                  <div className="flex flex-col items-center ">
                    <Image
                      className="mb-3 h-20 w-20 rounded-full"
                      src={murilo}
                      alt="profile picture"
                    />
                    <cite className="pr-3 text-2xl font-medium text-gray-900 dark:text-white">
                      Murilo Cunha
                    </cite>
                    <cite className="pl-3 text-sm text-gray-500 dark:text-gray-400">
                      Front-end Developer @Verx Tecnologia e Inovação | Serasa
                      Experian
                    </cite>
                    <cite className="text-sm text-zinc-400">
                      Murilo is senior to Mike
                    </cite>
                  </div>
                </figcaption>

                <blockquote>
                  <p className="my-5 text-lg font-medium italic text-gray-700 dark:text-white">
                    &quot;I recommend Mike as a highly engaged and dedicated
                    professional. He demonstrated great commitment to his
                    activities and always sought to learn and apply new
                    knowledge in his work routine. His ability to work well in a
                    team and contribute creative solutions to the challenges
                    presented make him a valuable developer in any work
                    environment. I&apos;m sure he&apos;ll be a great addition to
                    any team and I recommend his services without hesitation.
                    &quot;
                  </p>
                </blockquote>
              </div>
            </figure>
          </div>

          <div className="keen-slider__slide number-slide">
            <figure className="flex max-w-2xl items-center justify-center text-center">
              <div>
                <figcaption className="mt-6 flex items-center justify-center space-x-3">
                  <div className="flex flex-col items-center ">
                    <Image
                      className="mb-3 h-20 w-20 rounded-full"
                      src={fernanda}
                      alt="profile picture"
                    />
                    <cite className="pr-3 text-2xl font-medium text-gray-900 dark:text-white">
                      Fernanda Monteiro
                    </cite>
                    <cite className="pl-3 text-sm text-gray-500 dark:text-gray-400">
                      People & Culture | Business Partner | HRBP
                    </cite>
                    <cite className="text-sm text-zinc-400">
                      Fernanda is directly supervising Mike
                    </cite>
                  </div>
                </figcaption>

                <blockquote>
                  <p className="my-5 text-lg font-medium italic text-gray-700 dark:text-white">
                    Mike is an amazing professional! He joined the team eager to
                    learn and put what he had already studied into practice, and
                    he was excellent in everything he did. Surely, he will be
                    very successful in future challenges!
                  </p>
                </blockquote>
              </div>
            </figure>
          </div>
        </div>
      </div>
      {loaded && instanceRef.current && (
        <div className="dots">
          {[
            ...Array(instanceRef.current.track.details.slides.length).keys(),
          ].map((idx) => {
            return (
              <button
                key={idx}
                onClick={() => {
                  instanceRef.current?.moveToIdx(idx)
                }}
                className={'dot' + (currentSlide === idx ? ' active' : '')}
              ></button>
            )
          })}
        </div>
      )}
    </>
  )
}
