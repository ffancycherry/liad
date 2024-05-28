import CompetitionPage from '@/components/templates/CompetitionPage/CompetitionCurrentPage'

export default function Competition({ params }: { params: { id: string } }) {
  console.log('Hi', params.id)
  return <CompetitionPage id={params.id} />
}
