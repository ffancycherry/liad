'use client'
import { useUnit } from 'effector-react'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import {
  $projects,
  loadAllProjects,
  loadAllProjectsFx,
} from '@/context/projects'
import {
  checkOffsetParam,
  getSearchParamsUrl,
  updateSearchParam,
} from '@/lib/utils/common'
import { SearchParams } from '@/types/catalog'
import styles from '@/styles/projects-page/index.module.scss'

export const useProjectFilters = (searchParams: SearchParams) => {
  const projects = useUnit($projects)
  const isValidOffset = checkOffsetParam(searchParams.offset)
  const pagesCount = Math.ceil((projects.count || 12) / 12)
  const [currentPage, setCurrentPage] = useState(
    isValidOffset ? +(searchParams.offset || 0) : 0
  )
  const pathname = usePathname()
  const projectSpinner = useUnit(loadAllProjectsFx.pending)

  useEffect(() => {
    const urlParams = getSearchParamsUrl()

    urlParams.delete('offset')

    if (!isValidOffset) {
      loadAllProjects({
        limit: 12,
        offset: 0,
        additionalParam: urlParams.toString(),
      })

      updateSearchParam('offset', 0, pathname)
      setCurrentPage(0)
      return
    }

    loadAllProjects({
      limit: 12 * +(searchParams.offset || 0) + 12,
      offset: +(searchParams.offset || 0) * 12,
      additionalParam: urlParams.toString(),
    })

    setCurrentPage(+(searchParams.offset || 0))
  }, [])

  const handlePageChange = ({ selected }: { selected: number }) => {
    const urlParams = getSearchParamsUrl()

    urlParams.delete('offset')
    loadAllProjects({
      limit: 12 * selected + 12,
      offset: selected * 12,
      additionalParam: urlParams.toString(),
    })

    updateSearchParam('offset', selected, pathname)
    setCurrentPage(selected)
  }

  const paginationProps = {
    containerClassName: `list-reset ${styles.projects__bottom__list}`,
    pageClassName: `projects-pagination-item ${styles.projects__bottom__list__item}`,
    pageLinkClassName: styles.projects__bottom__list__item__link,
    previousClassName: `projects-pagination-prev ${styles.projects__bottom__list__prev}`,
    nextClassName: `projects-pagination-next ${styles.projects__bottom__list__next}`,
    breakClassName: styles.projects__bottom__break,
    breakLinkClassName: styles.projects__bottom__list__break__link,
    breakLabe: '...',
    pageCount: pagesCount,
    forcePage: currentPage,
  }

  return {
    paginationProps,
    projects,
    pagesCount,
    projectSpinner,
    handlePageChange,
  }
}
