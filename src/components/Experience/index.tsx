import React from 'react'

export const Experience = () => {
  return (
    <section
      id="experience"
      className="mx-auto flex flex-col items-center justify-center p-5 md:min-h-screen lg:-mb-32 lg:max-w-7xl lg:py-20"
    >
      <div className="flex flex-col items-center justify-center text-4xl font-bold leading-tight md:mb-24 lg:flex lg:flex-row lg:items-center lg:gap-28">
        <h2 className="mt-8 bg-gradient-to-tr from-gray-200 to-gray-300 bg-clip-text font-montserrat text-3xl font-extrabold uppercase text-transparent dark:bg-gradient-to-br dark:from-gray-200 dark:to-black sm:text-4xl lg:max-w-xs lg:break-all lg:text-9xl lg:tracking-wider">
          Experience
        </h2>
        <div className="group mt-6 dark:border-gray-700 lg:mt-0 lg:flex-1 lg:border-l lg:border-gray-200">
          <div className="min-w-[300px] flex-col items-center justify-center sm:flex-1 lg:pl-20">
            <p className="mb-8 flex flex-wrap text-center text-base font-normal text-zinc-500 dark:text-zinc-400 lg:text-xl">
              During my time at Pixter Technologies I&apos;ve had the
              opportunity to work on challenging projects, learn from incredibly
              talented people and build friendships.
            </p>

            {/* <!-- [2020] --> */}
            <div className="relative mb-5 flex flex-col rounded-lg bg-neutral-50 shadow-md duration-500 hover:!scale-100 group-hover:scale-[0.99] dark:bg-cinza-900 sm:flex-row sm:gap-5">
              <div className="flex-1 flex-col p-5 font-montserrat">
                <span className="absolute -left-[56px] top-[23px] text-sm font-normal">
                  2020
                </span>
                <h3 className="mb-[10px] from-blue-600 to-blue-200 text-lg font-bold text-gray-950 before:absolute before:-left-1 before:top-6 before:block before:h-5 before:w-1 before:bg-gradient-to-b dark:text-white">
                  FREELANCER
                </h3>
                <p className="font-montserrat text-sm font-light text-gray-900 dark:text-gray-200">
                  At that time, I worked building landing pages for friends and
                  some clients developing skills with the knowledge obtained in
                  the courses.
                </p>
              </div>

              <div className="flex w-[100%] max-w-xs flex-col gap-y-[10px] p-5">
                <h3 className="hidden font-montserrat text-lg font-bold uppercase text-gray-950 dark:text-white sm:flex">
                  Beginner
                </h3>
                <ul className="flex flex-wrap gap-3">
                  <li className="rounded bg-white px-4 py-1 font-montserrat text-xs font-normal uppercase dark:bg-cinza-800">
                    HTML
                  </li>
                  <li className="rounded bg-white px-4 py-1 font-montserrat text-xs font-normal uppercase dark:bg-cinza-800">
                    CSS
                  </li>
                  <li className="rounded bg-white px-4 py-1 font-montserrat text-xs font-normal uppercase dark:bg-cinza-800">
                    JavaScript
                  </li>
                </ul>
              </div>
            </div>

            {/* <!-- [2021] --> */}
            <div className="relative mb-5 flex flex-col rounded-lg bg-neutral-50 shadow-md duration-500 hover:!scale-100 group-hover:scale-[0.99] dark:bg-cinza-900 sm:flex-row sm:gap-5 ">
              <div className="flex-1 flex-col gap-y-[10px] p-5 font-montserrat">
                <span className="absolute -left-[56px] top-[23px] text-sm font-normal">
                  2021
                </span>
                <h3 className="mb-[10px] from-blue-600 to-blue-200 text-lg font-bold text-gray-950 before:absolute before:-left-1 before:top-6 before:block before:h-5 before:w-1 before:bg-gradient-to-b dark:text-white">
                  PIXTER TECNOLOGIES
                </h3>
                <p className="font-montserrat text-sm font-light text-gray-900 dark:text-gray-200">
                  I also worked on the web building static landing pages using
                  nextjs framework.
                </p>
              </div>

              <div className="flex w-[100%] max-w-xs flex-col gap-y-[10px] p-5">
                <h3 className="hidden font-montserrat text-lg font-bold uppercase text-gray-950 dark:text-white sm:flex">
                  developer web
                </h3>
                <ul className="flex flex-wrap gap-3">
                  <li className="rounded bg-white px-4 py-1 font-montserrat text-xs font-normal uppercase dark:bg-cinza-800">
                    HTML
                  </li>
                  <li className="rounded bg-white px-4 py-1 font-montserrat text-xs font-normal uppercase dark:bg-cinza-800">
                    CSS
                  </li>
                  <li className="rounded bg-white px-4 py-1 font-montserrat text-xs font-normal uppercase dark:bg-cinza-800">
                    JavaScript
                  </li>
                  <li className="rounded bg-white px-4 py-1 font-montserrat text-xs font-normal uppercase dark:bg-cinza-800">
                    React
                  </li>
                  <li className="rounded bg-white px-4 py-1 font-montserrat text-xs font-normal uppercase dark:bg-cinza-800">
                    Git
                  </li>
                </ul>
              </div>
            </div>

            {/* <!-- [2023] --> */}
            <div className="relative mb-5 flex flex-col rounded-lg bg-neutral-50 shadow-md duration-500 hover:!scale-100 group-hover:scale-[0.99] dark:bg-cinza-900 sm:flex-row sm:gap-5 ">
              <div className="flex-1 flex-col gap-y-[10px] p-5 font-montserrat">
                <span className="absolute -left-[56px] top-[23px] text-sm font-normal">
                  2023
                </span>
                <h3 className="mb-[10px] from-blue-600 to-blue-200 text-lg font-bold text-gray-950 before:absolute before:-left-1 before:top-6 before:block before:h-5 before:w-1 before:bg-gradient-to-b dark:text-white">
                  PIXTER TECNOLOGIES
                </h3>
                <p className="font-montserrat text-sm font-light text-gray-900 dark:text-gray-200">
                  Acting in the first internet banking aimed at agribusiness in
                  Brazil, I assisted in mobile solutions in React Native to
                  carry out transactions quickly and securely by receiving and
                  making instant payments through the app.
                </p>
              </div>

              <div className="flex w-[100%] max-w-xs flex-col gap-y-[10px] p-5">
                <h3 className="hidden font-montserrat text-lg font-bold uppercase text-gray-950 dark:text-white sm:flex">
                  Developer web & mobile
                </h3>
                <ul className="flex flex-wrap gap-3">
                  <li className="rounded bg-white px-4 py-1 font-montserrat text-xs font-normal uppercase dark:bg-cinza-800">
                    HTML
                  </li>
                  <li className="rounded bg-white px-4 py-1 font-montserrat text-xs font-normal uppercase dark:bg-cinza-800">
                    CSS
                  </li>
                  <li className="rounded bg-white px-4 py-1 font-montserrat text-xs font-normal uppercase dark:bg-cinza-800">
                    JavaScript
                  </li>
                  <li className="rounded bg-white px-4 py-1 font-montserrat text-xs font-normal uppercase dark:bg-cinza-800">
                    UX Design
                  </li>
                  <li className="rounded bg-white px-4 py-1 font-montserrat text-xs font-normal uppercase dark:bg-cinza-800">
                    UI Design
                  </li>
                  <li className="rounded bg-white px-4 py-1 font-montserrat text-xs font-normal uppercase dark:bg-cinza-800">
                    NextJs
                  </li>
                  <li className="rounded bg-white px-4 py-1 font-montserrat text-xs font-normal uppercase dark:bg-cinza-800">
                    React Native
                  </li>
                  <li className="rounded bg-white px-4 py-1 font-montserrat text-xs font-normal uppercase dark:bg-cinza-800">
                    Git
                  </li>
                  <li className="rounded bg-white px-4 py-1 font-montserrat text-xs font-normal uppercase dark:bg-cinza-800">
                    Tailwindcss
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
