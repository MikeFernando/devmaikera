'use client'
import React from 'react'
import Image from 'next/image'

import html from '@/assets/techs/html.png'
import css from '@/assets/techs/css.png'
import javascript from '@/assets/techs/javascript.png'
import react from '@/assets/techs/reactjs.png'
import reactNative from '@/assets/techs/rn.png'
import node from '@/assets/techs/node.png'

import { Testimonials } from '../Testimonials'

export const Skills = () => {
  return (
    <section id="skills" className="mx-auto flex max-w-7xl flex-col md:mt-8">
      <h2 className="mb-4 text-center text-3xl font-extrabold text-gray-800 dark:text-white md:text-5xl lg:text-6xl">
        <span className="bg-gradient-to-r from-cinza-800 to-gray-200 bg-clip-text text-transparent dark:from-white dark:to-cinza-900">
          Hi, I’m Mike Fernando
        </span>
      </h2>
      <p className="mx-auto mb-10 mt-5 max-w-2xl px-5 text-center text-base font-normal text-gray-700 dark:text-zinc-400 lg:text-xl">
        Since I started my journey in 2020 I have been working continuously to
        improve my skills and excel, looking for new problem solvers
        collaborating as a team to create efficient and innovative software
        solutions.
      </p>

      <div className="mx-auto my-10 flex flex-col px-5 lg:flex-row lg:gap-10">
        <ul className="flex flex-col gap-10">
          <li className="rounded-3xl bg-gray-50 p-4 shadow-md dark:bg-cinza-900 dark:shadow-2xl lg:p-10">
            <div className="mb-5 flex items-center gap-2 lg:gap-5">
              <Image
                src={html}
                alt="html"
                className="h-10 w-10 lg:h-14 lg:w-14 "
              />
              <div>
                <h3 className="text-lg font-extrabold dark:text-white lg:text-2xl">
                  Html
                </h3>
                <span className="text-sm dark:text-gray-400 lg:text-lg">
                  HyperText Markup Language
                </span>
              </div>
            </div>
            <p className="max-w-xs">
              HTML is the invisible foundation that makes the web accessible,
              organized and functional, ensuring that information is presented
              clearly and effectively for all users.
            </p>
          </li>
          <li className="rounded-3xl bg-gray-50 p-4 shadow-md dark:bg-cinza-900 dark:shadow-2xl lg:p-10">
            <div className="mb-5 flex items-center gap-2 lg:gap-5">
              <Image
                src={css}
                alt="css"
                className="h-10 w-10 lg:h-14 lg:w-14 "
              />
              <div>
                <h3 className="text-lg font-extrabold dark:text-white lg:text-2xl">
                  CSS
                </h3>
                <span className="text-sm dark:text-gray-400 lg:text-lg">
                  Cascading Style Sheets
                </span>
              </div>
            </div>
            <p className="mb-3 max-w-xs">
              CSS transforms HTML code into an intuitive and memorable immersive
              visual experience for users
            </p>
            <span className="mr-2 rounded bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-300">
              Tailwindcss
            </span>
            <span className="mr-2 rounded bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-300">
              Styled-Components
            </span>
          </li>
          <li className="rounded-3xl bg-gray-50 p-4 shadow-md dark:bg-cinza-900 dark:shadow-2xl lg:p-10">
            <div className="mb-5 flex items-center gap-2 lg:gap-5">
              <Image
                src={javascript}
                alt="javascript"
                className="h-10 w-10 lg:h-14 lg:w-14 "
              />
              <div>
                <h3 className="text-lg font-extrabold dark:text-white lg:text-2xl">
                  Javascript ES6+
                </h3>
                <span className="text-sm dark:text-gray-400 lg:text-lg">
                  Front-end | Back-end
                </span>
              </div>
            </div>
            <p className="max-w-xs">
              Javascript allows make pages interactive and dynamic involving
              communication with the server, manipulação do DOM...
            </p>
          </li>
        </ul>

        <ul className="flex flex-col gap-10 lg:mt-32">
          <li className="mt-10 rounded-3xl bg-gray-50 p-4 shadow-md dark:bg-cinza-900 dark:shadow-2xl lg:p-10">
            <div className="mb-5 flex items-center gap-2 lg:gap-5">
              <Image
                src={react}
                alt="reactjs"
                className="h-10 w-10 lg:h-16 lg:w-16 "
              />
              <div>
                <h3 className="text-lg font-extrabold dark:text-white lg:text-2xl">
                  ReactJS
                </h3>
                <span className="text-sm dark:text-gray-400 lg:text-lg">
                  Front-end
                </span>
              </div>
            </div>
            <p className="max-w-xs">
              I develop modern and reactive web interfaces using a modular and
              scalable library.
            </p>
          </li>
          <li className="rounded-3xl bg-gray-50 p-4 shadow-md dark:bg-cinza-900 dark:shadow-2xl lg:p-10">
            <div className="mb-5 flex items-center gap-2 lg:gap-5">
              <Image
                src={reactNative}
                alt="react-native"
                className="h-10 w-10 lg:h-16 lg:w-16"
              />
              <div>
                <h3 className="text-lg font-extrabold dark:text-white lg:text-2xl">
                  React Native
                </h3>
                <span className="text-sm dark:text-gray-400 lg:text-lg">
                  Mobile
                </span>
              </div>
            </div>
            <p className="max-w-xs">
              I develop modern and reactive mobile applications for both iOS and
              Android natively.
            </p>
          </li>
          <li className="rounded-3xl bg-gray-50 p-4 shadow-md dark:bg-cinza-900 dark:shadow-2xl lg:p-10">
            <div className="mb-5 flex items-center gap-2 lg:gap-5">
              <Image
                src={node}
                alt="nodejs"
                className="h-10 w-10 lg:h-16 lg:w-16 "
              />
              <div>
                <h3 className="flex items-center justify-center gap-3 text-lg font-extrabold dark:text-white lg:text-2xl">
                  NodeJS{' '}
                </h3>
                <span className="text-sm dark:text-gray-400 lg:text-lg">
                  Back-end
                </span>
              </div>
            </div>
            <p className="max-w-xs">
              NodeJS offers unmatched speed, scalability and flexibility to
              build robust and efficient applications with javascript.
            </p>
          </li>
        </ul>
      </div>

      <Testimonials />
    </section>
  )
}
