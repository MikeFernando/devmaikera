import React from 'react'

export const MenuMobile = () => {
  return (
    <div className="absolute -bottom-[300px] left-0 right-0 h-[300px] rounded-b-2xl bg-white shadow-md transition-all duration-500 md:hidden">
      <div className="flex h-[300px] flex-col items-center justify-center space-y-8 px-2 pb-2 pt-2 sm:px-3">
        <a href="#home">Home</a>
        <a href="#experience">Experience</a>
        <a href="#skills">Skills</a>
        <a href="#">Projects</a>
      </div>
    </div>
  )
}
