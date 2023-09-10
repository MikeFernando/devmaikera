'use client'

import { Skills } from '@/components/Skills'
import { Experience } from '@/components/Experience'
import { Main } from '@/components/Home'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

export default function Home() {
  return (
    <>
      <Header />
      <Main />
      <Experience />
      <Skills />
      <Footer />
    </>
  )
}
