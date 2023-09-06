import React from 'react'
import { Slider } from '../Slider'

export const Main = () => {
  return (
    <main className="mx-auto flex max-w-7xl flex-col items-center justify-between overflow-hidden rounded-3xl bg-gray-50 px-5 shadow-md md:mt-28">
      <div className="flex flex-col items-center">
        <h1 className="pt-10 text-center text-6xl font-bold leading-tight tracking-wide text-zinc-800">
          Software Engineer <br /> web & Mobile{' '}
        </h1>
        <p className="mt-5 max-w-2xl text-center text-xl font-normal text-zinc-500">
          I am passionate about creating sophisticated digital experiences and
          turning creative visions into interactive reality!
        </p>
        <button
          type="button"
          className="text-md my-4 rounded-full bg-gradient-to-br from-purple-600 to-blue-500 px-5 py-3 text-center font-medium text-white hover:bg-gradient-to-bl focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800"
        >
          See website 👇
        </button>
      </div>

      <div className="flex rounded-3xl px-8">
        <Slider />
      </div>
    </main>
  )
}
