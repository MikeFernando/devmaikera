'use client'

import React from 'react'
import { Wand2, Code2, Book } from 'lucide-react'

import { IconCheck } from './IconCheck'
import { Testimonials } from '../Testimonials'
import { Design } from './Design'
import { FrontEnd } from './FrontEnd'
import { Mentor } from './Mentor'

export const Skills = () => {
  return (
    <div className="bg-gradient-to-br from-black to-gray-600 pb-10 lg:pb-0 lg:shadow-skills ">
      <div className="mx-auto flex max-w-7xl flex-col items-center pt-16">
        <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
          <span className="bg-gradient-to-r from-slate-600 to-gray-300 bg-clip-text text-transparent">
            Hi, I’m Mike Fernando
          </span>{' '}
        </h1>
        <p className="mx-auto mb-10 mt-5 max-w-2xl px-5 text-center text-base font-normal text-zinc-200 lg:text-xl">
          Since I started my journey in 2020 I have been working continuously to
          improve my skills and excel, looking for new problem solvers
          collaborating as a team to create efficient and innovative software
          solutions.
        </p>

        <div className="p-10">
          <ol className="relative border-l border-gray-200 text-gray-500 dark:border-gray-700 dark:text-gray-400 lg:hidden">
            <li className="mb-10 pl-5">
              <span className="absolute -left-4 flex h-8 w-8 items-center justify-center rounded-full bg-black ring-4 ring-white dark:bg-green-900 dark:ring-gray-900">
                <Wand2 className="text-white" />
              </span>
              <h3 className="mb-2 ml-2 font-medium leading-tight text-white">
                Designer
              </h3>
              <p className="ml-2 max-w-xs text-sm">
                I value simple content structure, clean design patterns, and
                thoughtful interactions.
              </p>
              <Design />
            </li>

            <li className="mb-10 pl-5">
              <span className="absolute -left-4 flex h-8 w-8 items-center justify-center rounded-full bg-black ring-4 ring-white dark:bg-gray-700 dark:ring-gray-900">
                <Code2 className="text-white" />
              </span>
              <h3 className="mb-2 ml-2 font-medium leading-tight text-white">
                Frontend Developer
              </h3>
              <p className="ml-2 max-w-xs text-sm">
                Technical skills with creativity and attention to detail to
                create interfaces that delight and captivate users.
              </p>

              <FrontEnd />
            </li>

            <li className="mb-10 pl-5">
              <span className="absolute -left-4 flex h-8 w-8 items-center justify-center rounded-full bg-black ring-4 ring-white dark:bg-gray-700 dark:ring-gray-900">
                <Book className="text-white" />
              </span>
              <h3 className="mb-2 ml-2 font-medium leading-tight text-white">
                Mentor
              </h3>
              <p className="ml-2 max-w-xs text-sm">
                Willingness to help coworkers seeking to create a more positive
                and productive work environment for everyone.
              </p>

              <Mentor />
            </li>
          </ol>
        </div>

        <div className="mx-auto mb-8 hidden w-full px-2 md:max-w-3xl lg:flex lg:max-w-7xl lg:items-center lg:justify-center lg:gap-12">
          {/* DEVICE 1 */}
          <div className="relative rounded-[2.5rem] border-[14px] border-gray-300 bg-gray-300 dark:border-gray-800 dark:bg-gray-800 lg:h-[600px] lg:w-[300px]">
            <div className="h-[572px] w-[272px] overflow-hidden rounded-[2rem] bg-gray-50 dark:bg-gray-800">
              <ul className="text group flex flex-wrap gap-8 lg:mx-auto lg:flex-row lg:gap-8">
                <li className="flex w-96 flex-col items-center justify-center rounded-2xl bg-gray-50 px-5 py-10">
                  <div className="flex flex-col items-center justify-center border-b-[1px] border-zinc-300">
                    <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-black to-gray-500 shadow-lg shadow-slate-700/50 group-hover:bg-gradient-to-br">
                      <Wand2 className="text-white" />
                    </div>
                    <h3 className="mb-4 text-xl">Designer</h3>
                    <p className="min-h-[100px] pb-5 text-center text-sm">
                      I value simple content structure, clean design patterns,
                      and thoughtful interactions.
                    </p>
                  </div>

                  <ul className="mt-4 max-w-md list-inside space-y-3 text-xs text-gray-500 dark:text-gray-400">
                    <li className="flex items-center space-x-3">
                      <IconCheck className="h-4 w-4 text-blue-500" />
                      <span>UI Design</span>
                    </li>

                    <li className="flex items-center space-x-3">
                      <IconCheck className="h-4 w-4 text-blue-500" />
                      <span>UX Design</span>
                    </li>

                    <li className="flex items-center space-x-3">
                      <IconCheck className="h-4 w-4 text-blue-500" />
                      <span>Wireframe</span>
                    </li>

                    <li className="flex items-center space-x-3">
                      <IconCheck className="h-4 w-4 text-blue-500" />
                      <span>Typography</span>
                    </li>

                    <li className="flex items-center space-x-3">
                      <IconCheck className="h-4 w-4 text-blue-500" />
                      <span>Colors in Interfaces</span>
                    </li>

                    <li className="flex items-center space-x-3">
                      <IconCheck className="h-4 w-4 text-blue-500" />
                      <span>
                        Protótipo:{' '}
                        <span className="font-semibold text-gray-900 dark:text-white">
                          product
                        </span>
                      </span>
                    </li>

                    <li className="flex items-center space-x-3">
                      <IconCheck className="h-4 w-4 text-blue-500" />
                      <span>
                        Interfaces:{' '}
                        <span className="font-semibold text-gray-900 dark:text-white">
                          web & mobile
                        </span>
                      </span>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>

          {/* DEVICE 2 */}
          <div className="relative h-[600px] w-[300px] rounded-[2.5rem] border-[14px] border-gray-300 bg-gray-300 dark:border-gray-800 dark:bg-gray-800">
            <div className="h-[572px] w-[272px] overflow-hidden rounded-[2rem] bg-gray-50 dark:bg-gray-800">
              <ul className="group flex flex-wrap gap-8 lg:mx-auto lg:flex-row lg:gap-8">
                <li className="flex w-96 flex-col items-center justify-center bg-gray-50 px-5 py-10">
                  <div className="flex flex-col items-center justify-center border-b-[1px] border-zinc-300">
                    <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-black to-gray-500 shadow-lg shadow-slate-700/50 group-hover:bg-gradient-to-br">
                      <Code2 className="text-white" />
                    </div>
                    <h3 className="mb-4 px-4 text-center text-xl">
                      Frontend Developer
                    </h3>
                    <p className="min-h-[100px] pb-5 text-center text-sm">
                      Technical skills with creativity and attention to detail
                      to create interfaces that delight and captivate users.
                    </p>
                  </div>

                  <ul className="mt-4 max-w-md list-inside space-y-3 text-xs text-gray-500 dark:text-gray-400">
                    <li className="flex items-center space-x-3">
                      <IconCheck className="h-4 w-4 text-blue-500" />
                      <span>Html</span>
                    </li>

                    <li className="flex items-center space-x-3">
                      <IconCheck className="h-4 w-4 text-blue-500" />
                      <span>CSS | tailwindcss | css-in-js</span>
                    </li>

                    <li className="flex items-center space-x-3">
                      <IconCheck className="h-4 w-4 text-blue-500" />
                      <span>Javascript ES6+</span>
                    </li>

                    <li className="flex items-center space-x-3">
                      <IconCheck className="h-4 w-4 text-blue-500" />
                      <span>Typescript</span>
                    </li>

                    <li className="flex items-center space-x-3">
                      <IconCheck className="h-4 w-4 text-blue-500" />
                      <span>React | NextJS</span>
                    </li>

                    <li className="flex items-center space-x-3">
                      <IconCheck className="h-4 w-4 text-blue-500" />
                      <span>
                        React-Native:{' '}
                        <span className="font-semibold text-gray-900 dark:text-white">
                          Expo & CLI
                        </span>
                      </span>
                    </li>

                    <li className="flex items-center space-x-3">
                      <IconCheck className="h-4 w-4 text-blue-500" />
                      <span>
                        Git:{' '}
                        <span className="font-semibold text-gray-900 dark:text-white">
                          GitFlow
                        </span>
                      </span>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>

          {/* DEVICE 3 */}
          <div className="relative h-[600px] w-[300px] rounded-[2.5rem] border-[14px] border-gray-300 bg-gray-300 dark:border-gray-800 dark:bg-gray-800">
            <div className="h-[572px] w-[272px] overflow-hidden rounded-[2rem] bg-gray-50 dark:bg-gray-800">
              <ul className="group flex flex-wrap gap-8 lg:mx-auto lg:flex-row lg:gap-8">
                <li className="flex w-96 flex-col items-center justify-center rounded-2xl bg-gray-50 px-5 py-10">
                  <div className="flex flex-col items-center justify-center border-b-[1px] border-zinc-300">
                    <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-black to-gray-500 shadow-lg shadow-slate-700/50 group-hover:bg-gradient-to-br">
                      <Book className="text-white" />
                    </div>
                    <h3 className="mb-4 text-xl">Mentor</h3>
                    <p className="min-h-[100px] pb-5 text-center text-sm">
                      Willingness to help coworkers seeking to create a more
                      positive and productive work environment for everyone.
                    </p>
                  </div>

                  <ul className="mt-4 max-w-md list-inside space-y-3 text-xs text-gray-500 dark:text-gray-400">
                    <li className="flex items-center space-x-3">
                      <IconCheck className="h-4 w-4 text-blue-500" />
                      <span>Contributions to the Team</span>
                    </li>

                    <li className="flex items-center space-x-3">
                      <IconCheck className="h-4 w-4 text-blue-500" />
                      <span>Innovations and Improvements</span>
                    </li>

                    <li className="flex items-center space-x-3">
                      <IconCheck className="h-4 w-4 text-blue-500" />
                      <span>Problem solving</span>
                    </li>

                    <li className="flex items-center space-x-3">
                      <IconCheck className="h-4 w-4 text-blue-500" />
                      <span>Goals achieved</span>
                    </li>

                    <li className="flex items-center space-x-3">
                      <IconCheck className="h-4 w-4 text-blue-500" />
                      <span>Recognition</span>
                    </li>

                    <li className="flex items-center space-x-3">
                      <IconCheck className="h-4 w-4 text-blue-500" />
                      <span>
                        Balance:{' '}
                        <span className="font-semibold text-gray-900 dark:text-white">
                          healthy work-life balance
                        </span>
                      </span>
                    </li>

                    <li className="flex items-center space-x-3">
                      <IconCheck className="h-4 w-4 text-blue-500" />
                      <span>
                        Updating Skills:{' '}
                        <span className="font-semibold text-gray-900 dark:text-white">
                          latest tech trends
                        </span>
                      </span>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Testimonials />
    </div>
  )
}
