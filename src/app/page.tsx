export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-between rounded-3xl bg-[#1f2328]">
      <div className="flex flex-col items-center">
        <h1 className="pt-14 text-center text-6xl font-bold leading-tight tracking-wide text-white">
          Developer front-end <br /> web & Mobile{' '}
        </h1>
        <p className="mt-5 max-w-xl text-center text-xl font-normal text-zinc-500">
          I am passionate about creating sophisticated digital experiences and
          turning creative visions into interactive reality!
        </p>
        <a
          href="#"
          className="mt-4 block rounded-full bg-[#2a85ff] px-6 py-3 font-medium text-white shadow-blue-500/50 hover:bg-[#2a86ffd7]  hover:transition-colors "
        >
          All projects
        </a>
      </div>
    </main>
  )
}
