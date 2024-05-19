import EventsPage from '@/components/templates/EventsPage/EventsPage'
import { SearchParams } from '@/types/catalog'

export default function Catalog({
  searchParams,
}: {
  searchParams?: SearchParams
}) {
  return <EventsPage searchParams={searchParams || {}} pageName='catalog' />
}
