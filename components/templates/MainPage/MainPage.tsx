'use client'
import { useGate } from 'effector-react'
import Hero from '@/components/modules/MainPage/Hero/Hero'
import { MainPageGate } from '@/context/projects'
import MainProjects from '@/components/modules/MainPage/MainProjects'

const MainPage = () => {
  useGate(MainPageGate)
  return (
    <main>
      <Hero />
      <MainProjects />
    </main>
  )
}

export default MainPage
