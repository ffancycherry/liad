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
import styles from '@/styles/scientific-themes-page/index.module.scss'
import { $themes, loadAllThemes, loadAllThemesFx } from '@/context/themes'

export const useThemesFilters = (searchParams: SearchParams) => {
  const themes = useUnit($themes)
  const isValidOffset = checkOffsetParam(searchParams.offset)
  const pagesCount = Math.ceil((themes.count || 12) / 12)
  const [currentPage, setCurrentPage] = useState(
    isValidOffset ? +(searchParams.offset || 0) : 0
  )
  const pathname = usePathname()
  const themesSpinner = useUnit(loadAllThemesFx.pending)

  useEffect(() => {
    const urlParams = getSearchParamsUrl()

    urlParams.delete('offset')

    if (!isValidOffset) {
      loadAllThemes({
        limit: 12,
        offset: 0,
        additionalParam: urlParams.toString(),
      })

      updateSearchParam('offset', 0, pathname)
      setCurrentPage(0)
      return
    }

    loadAllThemes({
      limit: 12 * +(searchParams.offset || 0) + 12,
      offset: +(searchParams.offset || 0) * 12,
      additionalParam: urlParams.toString(),
    })

    setCurrentPage(+(searchParams.offset || 0))
  }, [])

  const handlePageChange = ({ selected }: { selected: number }) => {
    const urlParams = getSearchParamsUrl()

    urlParams.delete('offset')
    loadAllThemes({
      limit: 12 * selected + 12,
      offset: selected * 12,
      additionalParam: urlParams.toString(),
    })

    updateSearchParam('offset', selected, pathname)
    setCurrentPage(selected)
  }

  const paginationProps = {
    containerClassName: `list-reset ${styles.themes__bottom__list}`,
    pageClassName: `themes-pagination-item ${styles.themes__bottom__list__item}`,
    pageLinkClassName: styles.themes__bottom__list__item__link,
    previousClassName: `themes-pagination-prev ${styles.themes__bottom__list__prev}`,
    nextClassName: `themes-pagination-next ${styles.themes__bottom__list__next}`,
    breakClassName: styles.themes__bottom__break,
    breakLinkClassName: styles.themes__bottom__list__break__link,
    breakLabe: '...',
    pageCount: pagesCount,
    forcePage: currentPage,
  }

  return {
    paginationProps,
    themes,
    pagesCount,
    themesSpinner,
    handlePageChange,
  }
}
