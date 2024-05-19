import DevteamPage from '@/components/templates/DevteamPage/DevteamPage'
import { SearchParams } from '@/types/catalog'

export default function Catalog({
  searchParams,
}: {
  searchParams?: SearchParams
}) {
  return <DevteamPage searchParams={searchParams || {}} pageName='catalog' />
}
