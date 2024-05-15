import ProjectsPage from '@/components/templates/ProjectsPage/ProjectsPage'
import { searchParams } from '@/types/catalog'

export default function Projects({
  searchParams,
}: {
  searchParams?: searchParams
}) {
  return <ProjectsPage searchParams={searchParams || {}} pageName='projects' />
}
