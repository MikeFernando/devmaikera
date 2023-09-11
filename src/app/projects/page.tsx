import React from 'react'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

import spiderman from '@/assets/slider/spiderman-capa.png'
import wordtrip from '@/assets/slider/wortrip-capa.png'
import bikecraft from '@/assets/slider/bikecraft-capa.png'
import apple from '@/assets/slider/apple-capa.png'

export default function Projects() {
  return (
    <div className="bg-white dark:bg-cinza-900">
      <main className="mx-auto min-h-screen max-w-7xl bg-gray-50 dark:bg-cinza-800">
        <div className="flex items-center px-5">
          <Link href="/" className="mr-auto">
            <ArrowLeft className="text-cinza-900 dark:text-white" />
          </Link>
          <h1 className="mr-auto py-10 text-center text-3xl font-extrabold text-cinza-900 dark:text-white md:text-5xl">
            Projects
          </h1>
        </div>
        <div className="flex items-center justify-center md:mt-10">
          <ul className="grid grid-cols-1 gap-10 p-5 md:grid-cols-2">
            <li className="rounded-lg bg-gray-100 p-6 dark:bg-cinza-900">
              <Link
                href="https://mikefernando-bikecraft.netlify.app/"
                target="_blank"
              >
                <Image
                  width={500}
                  height={500}
                  priority
                  src={bikecraft}
                  alt="bikecraft"
                  className="rounded-md"
                />
              </Link>
            </li>
            <li className="rounded-lg bg-gray-100 p-6 dark:bg-cinza-900">
              <Link
                href="https://mikefernando-spiderman.netlify.app/"
                target="_blank"
              >
                <Image
                  width={500}
                  height={500}
                  priority
                  src={spiderman}
                  alt="spiderman"
                  className="rounded-md"
                />
              </Link>
            </li>
            <li className="rounded-lg bg-gray-100 p-6 dark:bg-cinza-900">
              <Link
                href="https://worldtrip.vercel.app/continent/europe"
                target="_blank"
              >
                <Image
                  width={500}
                  height={500}
                  priority
                  src={wordtrip}
                  alt="wordtrip"
                  className="rounded-md"
                />
              </Link>
            </li>
            <li className="rounded-lg bg-gray-100 p-6 dark:bg-cinza-900">
              <Link
                href="https://mikefernando-apple.netlify.app/"
                target="_blank"
              >
                <Image
                  width={500}
                  height={500}
                  priority
                  src={apple}
                  alt="spiderman"
                  className="rounded-md"
                />
              </Link>
            </li>
          </ul>
        </div>
      </main>
    </div>
  )
}
