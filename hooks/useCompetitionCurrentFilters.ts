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
import styles from '@/styles/competition-page/index.module.scss'
import {
  $competitions,
  loadAllCompetitions,
  loadAllCompetitionsCurrentFx,
} from '@/context/competition-current'

export const useCompetitionFilters = (searchParams: SearchParams) => {
  const competitions = useUnit($competitions)
  const isValidOffset = checkOffsetParam(searchParams.offset)
  const pagesCount = Math.ceil((competitions.count || 10) / 10)
  const [currentPage, setCurrentPage] = useState(
    isValidOffset ? +(searchParams.offset || 0) : 0
  )
  const pathname = usePathname()
  const competitionsSpinner = useUnit(loadAllCompetitionsCurrentFx.pending)

  useEffect(() => {
    const urlParams = getSearchParamsUrl()

    urlParams.delete('offset')

    if (!isValidOffset) {
      loadAllCompetitions({
        limit: 10,
        offset: 0,
        additionalParam: urlParams.toString(),
      })

      updateSearchParam('offset', 0, pathname)
      setCurrentPage(0)
      return
    }

    loadAllCompetitions({
      limit: 10 * +(searchParams.offset || 0) + 10,
      offset: +(searchParams.offset || 0) * 10,
      additionalParam: urlParams.toString(),
    })

    setCurrentPage(+(searchParams.offset || 0))
  }, [])

  const handlePageChange = ({ selected }: { selected: number }) => {
    const urlParams = getSearchParamsUrl()

    urlParams.delete('offset')
    loadAllCompetitions({
      limit: 10 * selected + 10,
      offset: selected * 10,
      additionalParam: urlParams.toString(),
    })

    updateSearchParam('offset', selected, pathname)
    setCurrentPage(selected)
  }

  const paginationProps = {
    containerClassName: `list-reset ${styles.competitions__bottom__list}`,
    pageClassName: `competitions-pagination-item ${styles.competitions__bottom__list__item}`,
    pageLinkClassName: styles.competitions__bottom__list__item__link,
    previousClassName: `competitions-pagination-prev ${styles.competitions__bottom__list__prev}`,
    nextClassName: `competitions-pagination-next ${styles.competitions__bottom__list__next}`,
    breakClassName: styles.competitions__bottom__break,
    breakLinkClassName: styles.competitions__bottom__list__break__link,
    breakLabe: '...',
    pageCount: pagesCount,
    forcePage: currentPage,
  }

  return {
    paginationProps,
    competitions,
    pagesCount,
    competitionsSpinner,
    handlePageChange,
  }
}
