import React from 'react'
import { Wand2, Code2, Book } from 'lucide-react'

import { IconCheck } from './IconCheck'

export const Skills = () => {
  return (
    <div className="bg-gradient-to-br from-blue-700 to-purple-600 shadow-skills ">
      <section className="mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center pt-16">
        <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
          <span className="text-white">Hi, I’m Mike Fernando</span>{' '}
        </h1>
        <p className="mx-auto mb-10 mt-5 max-w-2xl text-center text-xl font-normal text-zinc-200">
          Since I started my journey in 2020 I have been working continuously to
          improve my skills and excel, looking for new problem solvers
          collaborating as a team to create efficient and innovative software
          solutions.
        </p>

        <ul className="text group mx-auto flex gap-8">
          <li className="flex w-96 flex-col items-center justify-center rounded-2xl bg-gray-50 px-8 py-12 shadow-md duration-500 hover:!scale-100 group-hover:scale-[0.95]">
            <div className="flex flex-col items-center justify-center border-b-[1px] border-zinc-300">
              <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-purple-600 to-blue-500 shadow-lg shadow-blue-500/50 group-hover:bg-gradient-to-br">
                <Wand2 className="text-white" />
              </div>
              <h3 className="mb-4 text-2xl">Designer</h3>
              <p className="pb-5 text-center">
                I value simple content structure, clean design patterns, and
                thoughtful interactions.
              </p>
            </div>

            <ul className="mt-4 max-w-md list-inside space-y-3 text-sm text-gray-500 dark:text-gray-400">
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
                  Digital Interfaces:{' '}
                  <span className="font-semibold text-gray-900 dark:text-white">
                    web & mobile
                  </span>
                </span>
              </li>
            </ul>
          </li>

          <li className="flex w-96 flex-col items-center justify-center rounded-2xl bg-gray-50 px-8 py-12 shadow-md duration-500 hover:!scale-100 group-hover:scale-[0.95]">
            <div className="flex flex-col items-center justify-center border-b-[1px] border-zinc-300">
              <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-purple-600 to-blue-500 shadow-lg shadow-blue-500/50 group-hover:bg-gradient-to-br">
                <Code2 className="text-white" />
              </div>
              <h3 className="mb-4 text-2xl">Frontend Developer</h3>
              <p className="pb-5 text-center">
                Technical skills with creativity and attention to detail to
                create interfaces that delight and captivate users.
              </p>
            </div>

            <ul className="mt-4 max-w-md list-inside space-y-3 text-sm text-gray-500 dark:text-gray-400">
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

          <li className="flex w-96 flex-col items-center justify-center rounded-2xl bg-gray-50 px-8 py-12 shadow-md duration-500 hover:!scale-100 group-hover:scale-[0.95]">
            <div className="flex flex-col items-center justify-center border-b-[1px] border-zinc-300">
              <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-purple-600 to-blue-500 shadow-lg shadow-blue-500/50 group-hover:bg-gradient-to-br">
                <Book className="text-white" />
              </div>
              <h3 className="mb-4 text-2xl">Mentor</h3>
              <p className="pb-5 text-center">
                Willingness to help coworkers seeking to create a more positive
                and productive work environment for everyone.
              </p>
            </div>

            <ul className="mt-4 max-w-md list-inside space-y-3 text-sm text-gray-500 dark:text-gray-400">
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
      </section>
    </div>
  )
}
