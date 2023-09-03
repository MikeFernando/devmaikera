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
      <p className="mx-auto mb-10 mt-5 max-w-2xl text-center text-base font-normal text-zinc-900">
        Since I started my journey in 2020 I have been working continuously to
        improve my skills and excel, looking for new problem solvers
        collaborating as a team to create efficient and innovative software
        solutions.
      </p>
      <ul className="text group mx-auto flex gap-8">
        <li className="flex w-96 flex-col items-center justify-center rounded-2xl bg-gray-100 px-8 py-12 shadow-lg duration-500 hover:!scale-100 hover:!blur-none group-hover:scale-[0.85] group-hover:blur-sm ">
          <div className="flex flex-col items-center justify-center">
            <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-varianteBlue">
              <Wand2 className="text-white" />
            </div>
            <h3 className="mb-4 text-2xl">Designer</h3>
            <p className="pb-5 text-center">
              I value simple content structure, clean design patterns, and
              thoughtful interactions.
            </p>
          </div>

          <div className="my-5 text-center">
            <span className="text-varianteBlue">Things I enjoy designing:</span>
            <p className="text-sm">UX, UI, Web, Apps</p>
          </div>

          <div className="mb-4 text-center">
            <p className="mb-1 text-varianteBlue">Design Tools:</p>
            <p>Affinity Designer</p>
            <p>Figma</p>
            <p>Font Awesome</p>
            <p>Pen & Paper</p>
          </div>
        </li>

        <li className="flex w-96 flex-col items-center justify-center rounded-2xl bg-gray-100 px-8 py-12 shadow-lg duration-500 hover:!scale-100 hover:!blur-none group-hover:scale-[0.85] group-hover:blur-sm ">
          <div className="flex flex-col items-center justify-center">
            <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-varianteBlue shadow-md">
              <Code2 className="text-white" />
            </div>
            <h3 className="mb-4 text-2xl">Frontend Developer</h3>
            <p className="pb-5 text-center">
              Technical skills with creativity and attention to detail to create
              interfaces that delight and captivate users.
            </p>
          </div>

          <div className="my-5 text-center">
            <span className="text-varianteBlue">Framework:</span>
            <p>NextJs, React-Native, Tailwindcss</p>
          </div>

          <div className="mb-4 text-center">
            <p className="mb-1 text-varianteBlue">Technologies:</p>
            <p>Html</p>
            <p>Css</p>
            <p>Javascript ES6</p>
            <p>Typescript</p>
          </div>
        </li>

        <li className="flex w-96 flex-col items-center justify-center rounded-2xl bg-gray-100 px-8 py-12 shadow-lg duration-500 hover:!scale-100 hover:!blur-none group-hover:scale-[0.85] group-hover:blur-sm ">
          <div className="flex flex-col items-center justify-center">
            <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-varianteBlue shadow-md">
              <Book className="text-white" />
            </div>
            <h3 className="mb-4 text-2xl">Mentor</h3>
            <p className="pb-5 text-center">
              Willingness to help coworkers seeking to create a more positive
              and productive work environment for everyone.
            </p>
          </div>

          <div className="my-5 text-center">
            <span className="text-varianteBlue">Highlights:</span>
            <p className="text-sm">Contributions to the Team</p>
          </div>

          <div className="mb-4 text-center">
            <p className="mb-1 text-varianteBlue">Side effects:</p>
            <p>Innovations and Improvements</p>
            <p>Problem solving</p>
            <p>Goals achieved</p>
            <p>Recognition</p>
          </div>
        </li>
      </ul>
    </section>
  )
}
