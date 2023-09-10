import React from 'react'
import { Github, Instagram, Linkedin } from 'lucide-react'

export const Footer = () => {
  return (
    <footer className="border-t-[1px] bg-gray-50 px-5 py-10 text-zinc-500 dark:border-gray-700 dark:bg-cinza-900">
      <div className="mx-auto flex max-w-7xl justify-between text-sm dark:text-gray-400">
        <p className="">2023© All Rights Reserved.</p>
        <div className="flex gap-4">
          <a
            href="https://www.linkedin.com/in/mike-fernando3g/"
            target="_blank"
          >
            <Linkedin />
          </a>
          <a
            href="https://www.instagram.com/eai_mikera/?next=%2F"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram />
          </a>
          <a
            href="https://github.com/MikeFernando"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github />
          </a>
        </div>
      </div>
    </footer>
  )
}
