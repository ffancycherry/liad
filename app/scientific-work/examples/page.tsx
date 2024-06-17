import ExamplesPage from '@/components/templates/ScientificWorkPage/ExamplesPage'

import { SearchParams } from '@/types/catalog'

export default function Catalog({
  searchParams,
}: {
  searchParams?: SearchParams
}) {
  return <ExamplesPage searchParams={searchParams || {}} pageName='examples' />
}
