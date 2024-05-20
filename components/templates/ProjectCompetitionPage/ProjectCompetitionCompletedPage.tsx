'use client'
import { motion } from 'framer-motion'
import ReactPaginate from 'react-paginate'
import { ICompetitionPage } from '@/types/catalog'
import skeletonStyles from '@/styles/skeleton/index.module.scss'
import { basePropsForMotion } from '@/constants/motion'
import styles from '@/styles/competition-page/index.module.scss'
import { useUnit } from 'effector-react'
import { useCompetitionFilters } from '@/hooks/useCompetitionCompletedFilters'
import { $competitions } from '@/context/competition-completed'
import CompetitionItem from '@/components/modules/CompetitionItem/CompetitionItem'
import Link from 'next/link'

const ProjectCompetitionCompletedPage = ({
  searchParams,
}: ICompetitionPage) => {
  const { competitionsSpinner, paginationProps, handlePageChange } =
    useCompetitionFilters(searchParams)
  const competitions = useUnit($competitions)

  return (
    <>
      <h1 className={styles.competitions__title}>
        <Link
          href='/project-competition/current'
          className={styles.competitions__link__current}
        >
          Актуальные конкурсы{' '}
        </Link>
        Итоги конкурсов
      </h1>
      {competitionsSpinner && (
        <motion.ul
          {...basePropsForMotion}
          className={skeletonStyles.skeleton_competitions}
          style={{ marginBottom: 60 }}
          exit={{ opacity: 0 }}
        >
          {Array.from(new Array(12)).map((_, i) => (
            <li key={i} className={skeletonStyles.skeleton_competitions__item}>
              <div
                className={skeletonStyles.skeleton_competitions__item__light}
              />
            </li>
          ))}
        </motion.ul>
      )}
      {!competitionsSpinner && (
        <motion.ul
          {...basePropsForMotion}
          className={`list-reset ${styles.competitions__list}`}
          exit={{ opacity: 0 }}
        >
          {(competitions.items || [])
            .filter((item) => item.status === 'completed')
            .map((item) => (
              <CompetitionItem key={item._id} item={item} />
            ))}
        </motion.ul>
      )}
      {!competitions.items?.length && !competitionsSpinner && (
        <div className={styles.competitions__list__empty}>
          Ничего не найдено
        </div>
      )}
      <div className={styles.competitions__bottom}>
        <ReactPaginate
          {...paginationProps}
          nextLabel={<span>Следующая страница</span>}
          previousLabel={<span>Предыдущая страница</span>}
          onPageChange={handlePageChange}
        />
      </div>
    </>
  )
}

export default ProjectCompetitionCompletedPage
