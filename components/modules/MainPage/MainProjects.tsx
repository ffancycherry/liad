import { getProjectsFx } from '@/api/main-page'
import { $mainProjects } from '@/context/projects'
import { useUnit } from 'effector-react'
import MainPageSection from './MainPageSection'

const MainProjects = () => {
  const projects = useUnit($mainProjects)
  const spinner = useUnit(getProjectsFx.pending)
  return (
    <MainPageSection title='Проекты' projects={projects} spinner={spinner} />
  )
}

export default MainProjects
