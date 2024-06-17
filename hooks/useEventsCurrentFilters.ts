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
import styles from '@/styles/events-page/index.module.scss'
import {
  $events,
  loadAllEvents,
  loadAllEventsCurrentFx,
} from '@/context/events-current'

export const useEventsFilters = (searchParams: SearchParams) => {
  const events = useUnit($events)
  const isValidOffset = checkOffsetParam(searchParams.offset)
  const pagesCount = Math.ceil((events.count || 12) / 12)
  const [currentPage, setCurrentPage] = useState(
    isValidOffset ? +(searchParams.offset || 0) : 0
  )
  const pathname = usePathname()
  const eventsSpinner = useUnit(loadAllEventsCurrentFx.pending)

  useEffect(() => {
    const urlParams = getSearchParamsUrl()

    urlParams.delete('offset')

    if (!isValidOffset) {
      loadAllEvents({
        limit: 12,
        offset: 0,
        additionalParam: urlParams.toString(),
      })

      updateSearchParam('offset', 0, pathname)
      setCurrentPage(0)
      return
    }

    loadAllEvents({
      limit: 12 * +(searchParams.offset || 0) + 12,
      offset: +(searchParams.offset || 0) * 12,
      additionalParam: urlParams.toString(),
    })

    setCurrentPage(+(searchParams.offset || 0))
  }, [])

  const handlePageChange = ({ selected }: { selected: number }) => {
    const urlParams = getSearchParamsUrl()

    urlParams.delete('offset')
    loadAllEvents({
      limit: 12 * selected + 12,
      offset: selected * 12,
      additionalParam: urlParams.toString(),
    })

    updateSearchParam('offset', selected, pathname)
    setCurrentPage(selected)
  }

  const paginationProps = {
    containerClassName: `list-reset ${styles.events__bottom__list}`,
    pageClassName: `events-pagination-item ${styles.events__bottom__list__item}`,
    pageLinkClassName: styles.events__bottom__list__item__link,
    previousClassName: `events-pagination-prev ${styles.events__bottom__list__prev}`,
    nextClassName: `events-pagination-next ${styles.events__bottom__list__next}`,
    breakClassName: styles.events__bottom__break,
    breakLinkClassName: styles.events__bottom__list__break__link,
    breakLabe: '...',
    pageCount: pagesCount,
    forcePage: currentPage,
  }

  return {
    paginationProps,
    events,
    pagesCount,
    eventsSpinner,
    handlePageChange,
  }
}
