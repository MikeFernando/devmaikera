import { Skills } from '@/components/Skills'
import { Experience } from '@/components/Experience'
import { Main } from '@/components/Home'
// import { Slider } from '@/components/Slider'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Main />
      <Experience />
      <Skills />
      {/* <Slider /> */}
      <Footer />
    </>
  )
}
