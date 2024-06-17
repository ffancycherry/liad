'use client'
import { useUnit } from 'effector-react'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import {
  checkOffsetParam,
  getSearchParamsUrl,
  updateSearchParam,
} from '@/lib/utils/common'
import { SearchParams } from '@/types/catalog'
import styles from '@/styles/scientific-examples-page/index.module.scss'
import { $examples } from '@/context/examples'
import { loadAllExamples, loadAllExamplesFx } from '@/context/examples'

export const useExamplesFilters = (searchParams: SearchParams) => {
  const examples = useUnit($examples)
  const isValidOffset = checkOffsetParam(searchParams.offset)
  const pagesCount = Math.ceil((examples.count || 12) / 12)
  const [currentPage, setCurrentPage] = useState(
    isValidOffset ? +(searchParams.offset || 0) : 0
  )
  const pathname = usePathname()
  const examplesSpinner = useUnit(loadAllExamplesFx.pending)

  useEffect(() => {
    const urlParams = getSearchParamsUrl()

    urlParams.delete('offset')

    if (!isValidOffset) {
      loadAllExamples({
        limit: 12,
        offset: 0,
        additionalParam: urlParams.toString(),
      })

      updateSearchParam('offset', 0, pathname)
      setCurrentPage(0)
      return
    }

    loadAllExamples({
      limit: 12 * +(searchParams.offset || 0) + 12,
      offset: +(searchParams.offset || 0) * 12,
      additionalParam: urlParams.toString(),
    })

    setCurrentPage(+(searchParams.offset || 0))
  }, [])

  const handlePageChange = ({ selected }: { selected: number }) => {
    const urlParams = getSearchParamsUrl()

    urlParams.delete('offset')
    loadAllExamples({
      limit: 12 * selected + 12,
      offset: selected * 12,
      additionalParam: urlParams.toString(),
    })

    updateSearchParam('offset', selected, pathname)
    setCurrentPage(selected)
  }

  const paginationProps = {
    containerClassName: `list-reset ${styles.examples__bottom__list}`,
    pageClassName: `examples-pagination-item ${styles.examples__bottom__list__item}`,
    pageLinkClassName: styles.examples__bottom__list__item__link,
    previousClassName: `examples-pagination-prev ${styles.examples__bottom__list__prev}`,
    nextClassName: `examples-pagination-next ${styles.examples__bottom__list__next}`,
    breakClassName: styles.examples__bottom__break,
    breakLinkClassName: styles.examples__bottom__list__break__link,
    breakLabe: '...',
    pageCount: pagesCount,
    forcePage: currentPage,
  }

  return {
    paginationProps,
    examples,
    pagesCount,
    examplesSpinner,
    handlePageChange,
  }
}
