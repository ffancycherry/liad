// eslint-disable-next-line max-len
import ThemesPage from '@/components/templates/ScientificWorkPage/ThemesPage'
import { SearchParams } from '@/types/catalog'

export default function Catalog({
  searchParams,
}: {
  searchParams?: SearchParams
}) {
  return <ThemesPage searchParams={searchParams || {}} pageName='themes' />
}
