/* eslint-disable @next/next/no-img-element */
'use client'

import { Carousel } from 'flowbite-react'

export default function Slider() {
  return (
    <div className="h-[500px] w-[900px]">
      <Carousel slide={false} className="relative">
        <img
          src="https://avatars.githubusercontent.com/u/60049302?v=4"
          alt="..."
        />
        <img
          src="https://avatars.githubusercontent.com/u/60049302?v=4"
          alt="..."
        />
        <img
          src="https://avatars.githubusercontent.com/u/60049302?v=4"
          alt="..."
        />
        <img
          src="https://avatars.githubusercontent.com/u/60049302?v=4"
          alt="..."
        />
      </Carousel>
    </div>
  )
}
