import ProjectsPage from '@/components/templates/ProjectsPage/ProjectsPage'
import { SearchParams } from '@/types/catalog'

export default function Catalog({
  searchParams,
}: {
  searchParams?: SearchParams
}) {
  return <ProjectsPage searchParams={searchParams || {}} pageName='catalog' />
}
