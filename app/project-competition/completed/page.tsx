// eslint-disable-next-line max-len
import ProjectCompetitionCompletedPage from '@/components/templates/ProjectCompetitionPage/ProjectCompetitionCompletedPage'
import { SearchParams } from '@/types/catalog'

export default function Catalog({
  searchParams,
}: {
  searchParams?: SearchParams
}) {
  return (
    <ProjectCompetitionCompletedPage
      searchParams={searchParams || {}}
      pageName='catalog'
    />
  )
}
