import React from 'react'

import { Testimonials } from '../Testimonials'

export const Experience = () => {
  return (
    <>
      <section className="mx-auto flex min-h-screen flex-col items-center justify-center p-5 lg:-mb-32 lg:max-w-7xl">
        <div className="flex flex-col items-center justify-center text-4xl font-bold leading-tight lg:flex lg:flex-row lg:items-center lg:gap-28">
          <h2 className="bg-gradient-to-tr from-gray-200 to-gray-300 bg-clip-text font-montserrat font-extrabold uppercase text-transparent lg:max-w-xs lg:break-all lg:text-9xl lg:tracking-wider">
            Experience
          </h2>
          <ol className="group mt-6 dark:border-gray-700 lg:mt-0 lg:flex-1 lg:border-l lg:border-gray-200">
            <div className="flex-1 flex-col items-center justify-center pl-20 pr-5">
              <p className="mx-auto mb-8 text-center text-base font-normal text-zinc-500 lg:text-xl">
                During my time at Pixter Technologies I&apos;ve had the
                opportunity to work on challenging projects, learn from
                incredibly talented people and build friendships.
              </p>

              {/* <!-- [2020] --> */}
              <div className="relative mb-5 flex gap-5 rounded bg-gray-50 shadow-md duration-500 hover:!scale-100 group-hover:scale-[0.99]">
                <div className="w-96 flex-col p-5 font-montserrat">
                  <span className="absolute -left-[56px] top-[23px] text-sm font-normal">
                    2020
                  </span>
                  <h3 className="mb-[10px] from-blue-600 to-blue-200 text-lg font-bold text-gray-950 before:absolute before:-left-1 before:top-6 before:block before:h-5 before:w-1 before:bg-gradient-to-b">
                    FREELANCER
                  </h3>
                  <p className="font-montserrat text-sm font-light text-gray-900">
                    At that time, I worked building landing pages for friends
                    and some clients developing skills with the knowledge
                    obtained in the courses.
                  </p>
                </div>

                <div className="flex w-[100%] max-w-xs flex-col gap-y-[10px] p-5">
                  <h3 className="font-montserrat text-lg font-bold uppercase text-gray-950">
                    Beginner
                  </h3>
                  <ul className="flex flex-wrap gap-3">
                    <li className="rounded bg-white px-4 py-1 font-montserrat text-xs font-normal uppercase">
                      HTML
                    </li>
                    <li className="rounded bg-white px-4 py-1 font-montserrat text-xs font-normal uppercase">
                      CSS
                    </li>
                    <li className="rounded bg-white px-4 py-1 font-montserrat text-xs font-normal uppercase">
                      JavaScript
                    </li>
                  </ul>
                </div>
              </div>

              {/* <!-- [2021] --> */}
              <div className="relative mb-5 flex gap-5 rounded bg-gray-50 shadow-md duration-500 hover:!scale-100 group-hover:scale-[0.99] ">
                <div className=" w-96 flex-col gap-y-[10px] p-5 font-montserrat">
                  <span className="absolute -left-[56px] top-[23px] text-sm font-normal">
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
                    <li className="rounded bg-white px-4 py-1 font-montserrat text-xs font-normal uppercase">
                      HTML
                    </li>
                    <li className="rounded bg-white px-4 py-1 font-montserrat text-xs font-normal uppercase">
                      CSS
                    </li>
                    <li className="rounded bg-white px-4 py-1 font-montserrat text-xs font-normal uppercase">
                      JavaScript
                    </li>
                    <li className="rounded bg-white px-4 py-1 font-montserrat text-xs font-normal uppercase">
                      React
                    </li>
                    <li className="rounded bg-white px-4 py-1 font-montserrat text-xs font-normal uppercase">
                      Git
                    </li>
                  </ul>
                </div>
              </div>

              {/* <!-- [2023] --> */}
              <div className="relative mb-5 flex gap-5 rounded bg-gray-50 shadow-md duration-500 hover:!scale-100 group-hover:scale-[0.99] ">
                <div className="w-96 flex-col gap-y-[10px] p-5 font-montserrat">
                  <span className="absolute -left-[56px] top-[23px] text-sm font-normal">
                    2023
                  </span>
                  <h3 className="mb-[10px] from-blue-600 to-blue-200 text-lg font-bold text-gray-950 before:absolute before:-left-1 before:top-6 before:block before:h-5 before:w-1 before:bg-gradient-to-b">
                    PIXTER TECNOLOGIES
                  </h3>
                  <p className="font-montserrat text-sm font-light text-gray-900">
                    Acting in the first internet banking aimed at agribusiness
                    in Brazil, I assisted in mobile solutions in React Native to
                    carry out transactions quickly and securely by receiving and
                    making instant payments through the app.
                  </p>
                </div>

                <div className="flex w-[100%] max-w-xs flex-col gap-y-[10px] p-5">
                  <h3 className="row-span-1 font-montserrat text-lg font-bold uppercase text-gray-950">
                    Developer web & mobile
                  </h3>
                  <ul className="flex flex-wrap gap-3">
                    <li className="rounded bg-white px-4 py-1 font-montserrat text-xs font-normal uppercase">
                      HTML
                    </li>
                    <li className="rounded bg-white px-4 py-1 font-montserrat text-xs font-normal uppercase">
                      CSS
                    </li>
                    <li className="rounded bg-white px-4 py-1 font-montserrat text-xs font-normal uppercase">
                      JavaScript
                    </li>
                    <li className="rounded bg-white px-4 py-1 font-montserrat text-xs font-normal uppercase">
                      UX Design
                    </li>
                    <li className="rounded bg-white px-4 py-1 font-montserrat text-xs font-normal uppercase">
                      UI Design
                    </li>
                    <li className="rounded bg-white px-4 py-1 font-montserrat text-xs font-normal uppercase">
                      NextJs
                    </li>
                    <li className="rounded bg-white px-4 py-1 font-montserrat text-xs font-normal uppercase">
                      React Native
                    </li>
                    <li className="rounded bg-white px-4 py-1 font-montserrat text-xs font-normal uppercase">
                      Git
                    </li>
                    <li className="rounded bg-white px-4 py-1 font-montserrat text-xs font-normal uppercase">
                      Tailwindcss
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </ol>
        </div>
      </section>

      <Testimonials />
    </>
  )
}
