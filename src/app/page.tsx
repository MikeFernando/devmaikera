'use client'

import Image from 'next/image'
import img from '@/assets/main.png'
import { Skills } from '@/components/Skills'

export default function Home() {
  return (
    <>
      <main className="mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-between overflow-hidden rounded-3xl bg-gray-100 px-5 shadow-md">
        <div className="flex flex-col items-center">
          <h1 className="pt-10 text-center text-6xl font-bold leading-tight tracking-wide text-zinc-800">
            Software Engineer <br /> web & Mobile{' '}
          </h1>
          <p className="mt-5 max-w-2xl text-center text-xl font-normal text-zinc-500">
            I am passionate about creating sophisticated digital experiences and
            turning creative visions into interactive reality!
          </p>
          <a
            href="#"
            className="my-4 mb-10 block rounded-full bg-varianteBlue px-6 py-3 font-medium text-white shadow-blue-500/50 hover:bg-varianteBlueHover hover:transition-colors "
          >
            See website 👇
          </a>
        </div>

        <div className="h-[825px] rounded-3xl px-8">
          <Image className="ml-3 block " src={img} alt="bla bla" />
        </div>
      </main>

      <Skills />
    </>
  )
}
