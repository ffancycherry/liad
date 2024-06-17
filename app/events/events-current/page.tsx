import EventsCurrentPage from '@/components/templates/EventsPage/EventsCurrentPage'
import { SearchParams } from '@/types/catalog'

export default function Events({
  searchParams,
}: {
  searchParams?: SearchParams
}) {
  return (
    <EventsCurrentPage
      searchParams={searchParams || {}}
      pageName='current-events'
    />
  )
}
