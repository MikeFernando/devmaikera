import * as React from 'react'

type MoonProps = React.ComponentProps<'svg'>

export function Moon(props: MoonProps) {
  return (
    <svg
      width="800px"
      height="800px"
      viewBox="0 0 56 56"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M31.316 14.887c.282 0 .446-.188.492-.446.727-3.89.704-3.984 4.758-4.78.281-.048.446-.188.446-.47 0-.304-.165-.445-.446-.492-4.054-.82-4.03-.89-4.758-4.781-.046-.258-.21-.445-.492-.445-.28 0-.422.187-.468.445-.75 3.89-.704 3.96-4.782 4.781-.258.047-.445.188-.445.492 0 .282.188.422.445.47 4.102.796 4.032.89 4.782 4.78.046.258.187.446.468.446zM42.543 30.73c.422 0 .726-.304.773-.75.774-6.304 1.031-6.398 7.43-7.453.516-.093.82-.328.82-.797 0-.445-.304-.726-.726-.796-6.493-1.102-6.75-1.149-7.524-7.454-.047-.445-.351-.75-.773-.75-.446 0-.75.305-.797.727-.82 6.305-1.008 6.375-7.523 7.477-.422.07-.727.351-.727.796 0 .446.305.704.727.797 6.515 1.055 6.75 1.149 7.523 7.5a.775.775 0 00.797.703zM24.918 52.528c8.578 0 15.516-4.312 18.68-11.648.421-1.008.28-1.781-.164-2.25-.422-.398-1.125-.492-1.97-.164-1.757.703-3.913 1.101-6.609 1.101-10.476 0-17.226-6.539-17.226-16.828 0-2.836.539-5.648 1.265-7.125.47-.937.422-1.734.024-2.226-.445-.516-1.242-.68-2.344-.235-7.195 2.93-12.14 10.43-12.14 19.196 0 11.414 8.39 20.18 20.484 20.18zm.047-3.562c-10.008 0-16.969-7.29-16.969-16.899 0-5.906 2.742-11.109 7.101-14.437-.562 1.523-.89 3.867-.89 6.117 0 11.531 7.969 19.266 19.758 19.266 2.11 0 4.031-.258 5.015-.61-2.93 4.055-8.156 6.563-14.015 6.563z" />
    </svg>
  )
}
