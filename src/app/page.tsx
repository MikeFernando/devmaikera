'use client'

import { ThemeProvider } from 'next-themes'

import { Skills } from '@/components/Skills'
import { Experience } from '@/components/Experience'
import { Main } from '@/components/Home'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

export default function Home() {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <Header />
      <Main />
      <Experience />
      <Skills />
      <Footer />
    </ThemeProvider>
  )
}
