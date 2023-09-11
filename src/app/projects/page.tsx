import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

import spiderman from '@/assets/projects/spiderman.gif'
import wordtrip from '@/assets/projects/wordtrip.gif'
import bikecraft from '@/assets/projects/bikecraft.gif'
import apple from '@/assets/projects/apple.gif'

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
        <ul className="grid grid-cols-1 gap-10 p-5 md:grid-cols-2">
          <li>
            <Link
              href="https://mikefernando-spiderman.netlify.app/"
              target="_blank"
            >
              <Image src={spiderman} alt="spiderman" className="rounded-md" />
            </Link>
          </li>
          <li>
            <Link
              href="https://worldtrip.vercel.app/continent/europe"
              target="_blank"
            >
              <Image src={wordtrip} alt="spiderman" className="rounded-md" />
            </Link>
          </li>
          <li>
            <Link
              href="https://mikefernando-bikecraft.netlify.app/"
              target="_blank"
            >
              <Image src={bikecraft} alt="spiderman" className="rounded-md" />
            </Link>
          </li>
          <li>
            <Link
              href="https://mikefernando-apple.netlify.app/"
              target="_blank"
            >
              <Image src={apple} alt="spiderman" className="rounded-md" />
            </Link>
          </li>
        </ul>
      </main>
    </div>
  )
}
