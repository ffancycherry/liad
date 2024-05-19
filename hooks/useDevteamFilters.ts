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
import styles from '@/styles/devteam-page/index.module.scss'
import { $devteam, loadAllDevteam, loadAllDevteamFx } from '@/context/devteam'

export const useDevteamFilters = (searchParams: SearchParams) => {
  const devteam = useUnit($devteam)
  const isValidOffset = checkOffsetParam(searchParams.offset)
  const pagesCount = Math.ceil((devteam.count || 12) / 12)
  const [currentPage, setCurrentPage] = useState(
    isValidOffset ? +(searchParams.offset || 0) : 0
  )
  const pathname = usePathname()
  const devteamSpinner = useUnit(loadAllDevteamFx.pending)

  useEffect(() => {
    const urlParams = getSearchParamsUrl()

    urlParams.delete('offset')

    if (!isValidOffset) {
      loadAllDevteam({
        limit: 12,
        offset: 0,
        additionalParam: urlParams.toString(),
      })

      updateSearchParam('offset', 0, pathname)
      setCurrentPage(0)
      return
    }

    loadAllDevteam({
      limit: 12 * +(searchParams.offset || 0) + 12,
      offset: +(searchParams.offset || 0) * 12,
      additionalParam: urlParams.toString(),
    })

    setCurrentPage(+(searchParams.offset || 0))
  }, [])

  const handlePageChange = ({ selected }: { selected: number }) => {
    const urlParams = getSearchParamsUrl()

    urlParams.delete('offset')
    loadAllDevteam({
      limit: 12 * selected + 12,
      offset: selected * 12,
      additionalParam: urlParams.toString(),
    })

    updateSearchParam('offset', selected, pathname)
    setCurrentPage(selected)
  }

  const paginationProps = {
    containerClassName: `list-reset ${styles.devteam__bottom__list}`,
    pageClassName: `devteam-pagination-item ${styles.devteam__bottom__list__item}`,
    pageLinkClassName: styles.devteam__bottom__list__item__link,
    previousClassName: `devteam-pagination-prev ${styles.devteam__bottom__list__prev}`,
    nextClassName: `devteam-pagination-next ${styles.devteam__bottom__list__next}`,
    breakClassName: styles.devteam__bottom__break,
    breakLinkClassName: styles.devteam__bottom__list__break__link,
    breakLabe: '...',
    pageCount: pagesCount,
    forcePage: currentPage,
  }

  return {
    paginationProps,
    devteam,
    pagesCount,
    devteamSpinner,
    handlePageChange,
  }
}
