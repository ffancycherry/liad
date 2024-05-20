import ProjectCompetitionCurrentPage from '@/components/templates/ProjectCompetitionPage/ProjectCompetitionCurrentPage'
import { SearchParams } from '@/types/catalog'

export default function Catalog({
  searchParams,
}: {
  searchParams?: SearchParams
}) {
  return (
    <ProjectCompetitionCurrentPage
      searchParams={searchParams || {}}
      pageName='catalog'
    />
  )
}
