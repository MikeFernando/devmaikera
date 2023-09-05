import { Github, Instagram, Linkedin } from 'lucide-react'
import React from 'react'

export const Footer = () => {
  return (
    <footer className="border-t-[1px] bg-gray-50 px-5 py-10 text-zinc-500">
      <div className="mx-auto mb-16 flex max-w-7xl justify-between text-sm">
        <p className="">2023© All Rights Reserved.</p>
        <div className="flex gap-4">
          <Instagram />
          <Linkedin />
          <Github />
        </div>
      </div>
    </footer>
  )
}
