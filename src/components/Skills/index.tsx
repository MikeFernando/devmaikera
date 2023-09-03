import React from 'react'
import { Wand2, Code2, Book } from 'lucide-react'

export const Skills = () => {
  return (
    <section className="mx-auto mt-8 flex min-h-screen max-w-7xl flex-col items-center justify-center px-5">
      <h2 className="mb-5 text-center text-5xl font-medium text-zinc-900">
        Skills
      </h2>
      <span className="text-center text-2xl text-varianteBlue">
        Hi, I’m Mike Fernando. Nice to meet you.
      </span>
      <p className="mx-auto mb-10 mt-5 max-w-2xl text-center text-xl font-normal text-zinc-500">
        Since I started my journey in 2020 I have been working continuously to
        improve my skills and excel, looking for new problem solvers
        collaborating as a team to create efficient and innovative software
        solutions.
      </p>

      <ul className="text group mx-auto flex gap-8">
        <li className="flex w-96 flex-col items-center justify-center rounded-2xl bg-gray-50 px-8 py-12 shadow-lg duration-500 hover:!scale-100 hover:!blur-none group-hover:scale-[0.85] group-hover:blur-sm ">
          <div className="flex flex-col items-center justify-center border-b-[1px] border-zinc-300">
            <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 shadow-lg shadow-blue-500/50 group-hover:bg-gradient-to-br">
              <Wand2 className="text-white" />
            </div>
            <h3 className="mb-4 text-2xl">Designer</h3>
            <p className="pb-5 text-center">
              I value simple content structure, clean design patterns, and
              thoughtful interactions.
            </p>
          </div>

          <ul className="mt-4 max-w-md list-inside space-y-1 text-gray-500 dark:text-gray-400">
            <li className="flex items-center space-x-3">
              <svg
                className="h-3.5 w-3.5 flex-shrink-0 text-blue-500 dark:text-blue-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 16 12"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5.917 5.724 10.5 15 1.5"
                />
              </svg>
              <span>UI Design</span>
            </li>

            <li className="flex items-center space-x-3">
              <svg
                className="h-3.5 w-3.5 flex-shrink-0 text-blue-500 dark:text-blue-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 16 12"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5.917 5.724 10.5 15 1.5"
                />
              </svg>
              <span>UX Design</span>
            </li>

            <li className="flex items-center space-x-3">
              <svg
                className="h-3.5 w-3.5 flex-shrink-0 text-blue-500 dark:text-blue-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 16 12"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5.917 5.724 10.5 15 1.5"
                />
              </svg>
              <span>Wireframe</span>
            </li>

            <li className="flex items-center space-x-3">
              <svg
                className="h-3.5 w-3.5 flex-shrink-0 text-blue-500 dark:text-blue-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 16 12"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5.917 5.724 10.5 15 1.5"
                />
              </svg>
              <span>Typography</span>
            </li>

            <li className="flex items-center space-x-3">
              <svg
                className="h-3.5 w-3.5 flex-shrink-0 text-blue-500 dark:text-blue-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 16 12"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5.917 5.724 10.5 15 1.5"
                />
              </svg>
              <span>Colors in Interfaces</span>
            </li>

            <li className="flex items-center space-x-3">
              <svg
                className="h-3.5 w-3.5 flex-shrink-0 text-blue-500 dark:text-blue-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 16 12"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5.917 5.724 10.5 15 1.5"
                />
              </svg>
              <span>
                Protótipo:{' '}
                <span className="font-semibold text-gray-900 dark:text-white">
                  product
                </span>
              </span>
            </li>

            <li className="flex items-center space-x-3">
              <svg
                className="h-3.5 w-3.5 flex-shrink-0 text-blue-500 dark:text-blue-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 16 12"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5.917 5.724 10.5 15 1.5"
                />
              </svg>
              <span>
                Digital Interfaces:{' '}
                <span className="font-semibold text-gray-900 dark:text-white">
                  web & mobile
                </span>
              </span>
            </li>
          </ul>
        </li>

        <li className="flex w-96 flex-col items-center justify-center rounded-2xl bg-gray-50 px-8 py-12 shadow-lg duration-500 hover:!scale-100 hover:!blur-none group-hover:scale-[0.85] group-hover:blur-sm ">
          <div className="flex flex-col items-center justify-center border-b-[1px] border-zinc-300">
            <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 shadow-lg shadow-blue-500/50 group-hover:bg-gradient-to-br">
              <Code2 className="text-white" />
            </div>
            <h3 className="mb-4 text-2xl">Frontend Developer</h3>
            <p className="pb-5 text-center">
              Technical skills with creativity and attention to detail to create
              interfaces that delight and captivate users.
            </p>
          </div>

          <ul className="mt-4 max-w-md list-inside space-y-1 text-gray-500 dark:text-gray-400">
            <li className="flex items-center space-x-3">
              <svg
                className="h-3.5 w-3.5 flex-shrink-0 text-blue-500 dark:text-blue-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 16 12"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5.917 5.724 10.5 15 1.5"
                />
              </svg>
              <span>Html</span>
            </li>

            <li className="flex items-center space-x-3">
              <svg
                className="h-3.5 w-3.5 flex-shrink-0 text-blue-500 dark:text-blue-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 16 12"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5.917 5.724 10.5 15 1.5"
                />
              </svg>
              <span>CSS | tailwindcss | css-in-js</span>
            </li>

            <li className="flex items-center space-x-3">
              <svg
                className="h-3.5 w-3.5 flex-shrink-0 text-blue-500 dark:text-blue-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 16 12"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5.917 5.724 10.5 15 1.5"
                />
              </svg>
              <span>Javascript ES6+</span>
            </li>

            <li className="flex items-center space-x-3">
              <svg
                className="h-3.5 w-3.5 flex-shrink-0 text-blue-500 dark:text-blue-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 16 12"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5.917 5.724 10.5 15 1.5"
                />
              </svg>
              <span>Typescript</span>
            </li>

            <li className="flex items-center space-x-3">
              <svg
                className="h-3.5 w-3.5 flex-shrink-0 text-blue-500 dark:text-blue-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 16 12"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5.917 5.724 10.5 15 1.5"
                />
              </svg>
              <span>React | NextJS</span>
            </li>

            <li className="flex items-center space-x-3">
              <svg
                className="h-3.5 w-3.5 flex-shrink-0 text-blue-500 dark:text-blue-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 16 12"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5.917 5.724 10.5 15 1.5"
                />
              </svg>
              <span>
                React-Native:{' '}
                <span className="font-semibold text-gray-900 dark:text-white">
                  Expo & CLI
                </span>
              </span>
            </li>

            <li className="flex items-center space-x-3">
              <svg
                className="h-3.5 w-3.5 flex-shrink-0 text-blue-500 dark:text-blue-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 16 12"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5.917 5.724 10.5 15 1.5"
                />
              </svg>
              <span>
                Git:{' '}
                <span className="font-semibold text-gray-900 dark:text-white">
                  GitFlow
                </span>
              </span>
            </li>
          </ul>
        </li>

        <li className="flex w-96 flex-col items-center justify-center rounded-2xl bg-gray-50 px-8 py-12 shadow-lg duration-500 hover:!scale-100 hover:!blur-none group-hover:scale-[0.85] group-hover:blur-sm ">
          <div className="flex flex-col items-center justify-center border-b-[1px] border-zinc-300">
            <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 shadow-lg shadow-blue-500/50 group-hover:bg-gradient-to-br">
              <Book className="text-white" />
            </div>
            <h3 className="mb-4 text-2xl">Mentor</h3>
            <p className="pb-5 text-center">
              Willingness to help coworkers seeking to create a more positive
              and productive work environment for everyone.
            </p>
          </div>

          <ul className="mt-4 max-w-md list-inside space-y-1 text-gray-500 dark:text-gray-400">
            <li className="flex items-center space-x-3">
              <svg
                className="h-3.5 w-3.5 flex-shrink-0 text-blue-500 dark:text-blue-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 16 12"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5.917 5.724 10.5 15 1.5"
                />
              </svg>
              <span>Contributions to the Team</span>
            </li>

            <li className="flex items-center space-x-3">
              <svg
                className="h-3.5 w-3.5 flex-shrink-0 text-blue-500 dark:text-blue-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 16 12"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5.917 5.724 10.5 15 1.5"
                />
              </svg>
              <span>Innovations and Improvements</span>
            </li>

            <li className="flex items-center space-x-3">
              <svg
                className="h-3.5 w-3.5 flex-shrink-0 text-blue-500 dark:text-blue-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 16 12"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5.917 5.724 10.5 15 1.5"
                />
              </svg>
              <span>Problem solving</span>
            </li>

            <li className="flex items-center space-x-3">
              <svg
                className="h-3.5 w-3.5 flex-shrink-0 text-blue-500 dark:text-blue-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 16 12"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5.917 5.724 10.5 15 1.5"
                />
              </svg>
              <span>Goals achieved</span>
            </li>

            <li className="flex items-center space-x-3">
              <svg
                className="h-3.5 w-3.5 flex-shrink-0 text-blue-500 dark:text-blue-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 16 12"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5.917 5.724 10.5 15 1.5"
                />
              </svg>
              <span>Recognition</span>
            </li>

            <li className="flex items-center space-x-3">
              <svg
                className="h-3.5 w-3.5 flex-shrink-0 text-blue-500 dark:text-blue-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 16 12"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5.917 5.724 10.5 15 1.5"
                />
              </svg>
              <span>
                Balance:{' '}
                <span className="font-semibold text-gray-900 dark:text-white">
                  healthy work-life balance
                </span>
              </span>
            </li>

            <li className="flex items-center space-x-3">
              <svg
                className="h-3.5 w-3.5 flex-shrink-0 text-blue-500 dark:text-blue-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 16 12"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5.917 5.724 10.5 15 1.5"
                />
              </svg>
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
  )
}
