import React from 'react'

import henrique from '@/assets/testimonials/henrique.jpg'
import Image from 'next/image'
import { Testimonials } from '../Testimonials'

export const Experience = () => {
  return (
    <section className="mx-auto my-24 flex min-h-screen max-w-7xl flex-col justify-center px-5">
      <div className="flex items-center gap-28">
        <h2 className="max-w-xs break-all bg-gradient-to-tr from-gray-200 to-gray-300 bg-clip-text font-montserrat text-9xl font-extrabold uppercase tracking-wider text-transparent">
          Experience
        </h2>
        <ol className="group flex-1 border-l border-gray-200 dark:border-gray-700">
          <div className="p-5">
            <p className="mb-8 text-xl font-normal text-zinc-500">
              During my time at Pixter Technologies I&apos;ve had the
              opportunity to work on challenging projects, learn from incredibly
              talented people and build friendships.
            </p>

            {/* <!-- [2020] --> */}
            <div className="relative mb-5 flex gap-5 rounded bg-gray-50 shadow-md duration-500 hover:!scale-100 group-hover:scale-[0.99]">
              <div className="w-96 flex-col p-5 font-montserrat">
                <span className="absolute -left-[56px] top-[23px] text-sm">
                  2020
                </span>
                <h3 className="mb-[10px] from-blue-600 to-blue-200 text-lg font-bold text-gray-950 before:absolute before:-left-1 before:top-6 before:block before:h-5 before:w-1 before:bg-gradient-to-b">
                  FREELANCER
                </h3>
                <p className="font-montserrat text-sm font-light text-gray-900">
                  At that time, I worked building landing pages for friends and
                  some clients developing skills with the knowledge obtained in
                  the courses.
                </p>
              </div>

              <div className="flex w-[100%] max-w-xs flex-col gap-y-[10px] p-5">
                <h3 className="row-span-1 font-montserrat text-lg font-bold uppercase text-gray-950">
                  Beginner
                </h3>
                <ul className="flex flex-wrap gap-3">
                  <li className="rounded bg-white px-4 py-1 font-montserrat text-xs uppercase">
                    HTML
                  </li>
                  <li className="rounded bg-white px-4 py-1 font-montserrat text-xs uppercase">
                    CSS
                  </li>
                  <li className="rounded bg-white px-4 py-1 font-montserrat text-xs uppercase">
                    JavaScript
                  </li>
                </ul>
              </div>
            </div>

            {/* <!-- [2021] --> */}
            <div className="relative mb-5 flex gap-5 rounded bg-gray-50 shadow-md duration-500 hover:!scale-100 group-hover:scale-[0.99] ">
              <div className=" w-96 flex-col gap-y-[10px] p-5 font-montserrat">
                <span className="absolute -left-[56px] top-[23px] text-sm">
                  2021
                </span>
                <h3 className="mb-[10px] from-blue-600 to-blue-200 text-lg font-bold text-gray-950 before:absolute before:-left-1 before:top-6 before:block before:h-5 before:w-1 before:bg-gradient-to-b">
                  PIXTER TECNOLOGIES
                </h3>
                <p className="font-montserrat text-sm font-light text-gray-900">
                  I also worked on the web building static landing pages using
                  nextjs framework.
                </p>
              </div>

              <div className="flex w-[100%] max-w-xs flex-col gap-y-[10px] p-5">
                <h3 className="row-span-1 font-montserrat text-lg font-bold uppercase text-gray-950">
                  developer web
                </h3>
                <ul className="flex flex-wrap gap-3">
                  <li className="rounded bg-white px-4 py-1 font-montserrat text-xs uppercase">
                    HTML
                  </li>
                  <li className="rounded bg-white px-4 py-1 font-montserrat text-xs uppercase">
                    CSS
                  </li>
                  <li className="rounded bg-white px-4 py-1 font-montserrat text-xs uppercase">
                    JavaScript
                  </li>
                  <li className="rounded bg-white px-4 py-1 font-montserrat text-xs uppercase">
                    React
                  </li>
                  <li className="rounded bg-white px-4 py-1 font-montserrat text-xs uppercase">
                    Git
                  </li>
                </ul>
              </div>
            </div>

            {/* <!-- [2023] --> */}
            <div className="relative mb-5 flex gap-5 rounded bg-gray-50 shadow-md duration-500 hover:!scale-100 group-hover:scale-[0.99] ">
              <div className="w-96 flex-col gap-y-[10px] p-5 font-montserrat">
                <span className="absolute -left-[56px] top-[23px] text-sm">
                  2023
                </span>
                <h3 className="mb-[10px] from-blue-600 to-blue-200 text-lg font-bold text-gray-950 before:absolute before:-left-1 before:top-6 before:block before:h-5 before:w-1 before:bg-gradient-to-b">
                  PIXTER TECNOLOGIES
                </h3>
                <p className="font-montserrat text-sm font-light text-gray-900">
                  Acting in the first internet banking aimed at agribusiness in
                  Brazil, I assisted in mobile solutions in React Native to
                  carry out transactions quickly and securely by receiving and
                  making instant payments through the app.
                </p>
              </div>

              <div className="flex w-[100%] max-w-xs flex-col gap-y-[10px] p-5">
                <h3 className="row-span-1 font-montserrat text-lg font-bold uppercase text-gray-950">
                  Developer web & mobile
                </h3>
                <ul className="flex flex-wrap gap-3">
                  <li className="rounded bg-white px-4 py-1 font-montserrat text-xs uppercase">
                    HTML
                  </li>
                  <li className="rounded bg-white px-4 py-1 font-montserrat text-xs uppercase">
                    CSS
                  </li>
                  <li className="rounded bg-white px-4 py-1 font-montserrat text-xs uppercase">
                    JavaScript
                  </li>
                  <li className="rounded bg-white px-4 py-1 font-montserrat text-xs uppercase">
                    UX Design
                  </li>
                  <li className="rounded bg-white px-4 py-1 font-montserrat text-xs uppercase">
                    UI Design
                  </li>
                  <li className="rounded bg-white px-4 py-1 font-montserrat text-xs uppercase">
                    NextJs
                  </li>
                  <li className="rounded bg-white px-4 py-1 font-montserrat text-xs uppercase">
                    React Native
                  </li>
                  <li className="rounded bg-white px-4 py-1 font-montserrat text-xs uppercase">
                    Git
                  </li>
                  <li className="rounded bg-white px-4 py-1 font-montserrat text-xs uppercase">
                    Tailwindcss
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </ol>
      </div>

      <div className="flex flex-col items-center justify-center gap-5 p-4">
        <figure className="mx-auto max-w-screen-md text-center">
          {/* HENRIQUE */}
          <div>
            <figcaption className="mt-6 flex items-center justify-center space-x-3">
              <div className="flex flex-col items-center ">
                <Image
                  className="mb-3 h-14 w-14 rounded-full"
                  src={henrique}
                  alt="profile picture"
                />
                <cite className="pr-3 font-medium text-gray-900 dark:text-white">
                  Henrique Fernandes
                </cite>
                <cite className="pl-3 text-sm text-gray-500 dark:text-gray-400">
                  Head of Operation | ProductHead of Operation
                </cite>
              </div>
            </figcaption>
            <cite className="text-sm text-zinc-400">
              Henrique is senior to Mike
            </cite>
            <blockquote>
              <p className="my-5 text-lg font-medium italic text-gray-700 dark:text-white">
                &quot;I recommend Mike as a highly engaged and dedicated
                professional. He demonstrated great commitment to his activities
                and always sought to learn and apply new knowledge in his work
                routine. His ability to work well in a team and contribute
                creative solutions to the challenges presented make him a
                valuable developer in any work environment. I&apos;m sure
                he&apos;ll be a great addition to any team and I recommend his
                services without hesitation. &quot;
              </p>
            </blockquote>
          </div>
        </figure>

        <Testimonials />
      </div>
    </section>
  )
}
