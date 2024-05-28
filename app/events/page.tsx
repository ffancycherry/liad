import EventsPage from '@/components/templates/EventsPage/EventsPage'
import { SearchParams } from '@/types/catalog'

export default function Events({
  searchParams,
}: {
  searchParams?: SearchParams
}) {
  return <EventsPage searchParams={searchParams || {}} pageName='events' />
}
