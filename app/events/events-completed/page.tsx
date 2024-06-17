import EventsCompletedPage from '@/components/templates/EventsPage/EventsCompletedPage'
import { SearchParams } from '@/types/catalog'

export default function Events({
  searchParams,
}: {
  searchParams?: SearchParams
}) {
  return (
    <EventsCompletedPage
      searchParams={searchParams || {}}
      pageName='completed-events'
    />
  )
}
