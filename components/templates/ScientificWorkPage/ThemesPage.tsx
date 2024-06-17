'use client'
import { motion } from 'framer-motion'
import ReactPaginate from 'react-paginate'
import { IScientificWorkPage } from '@/types/catalog'
import skeletonStyles from '@/styles/skeleton/index.module.scss'
import { basePropsForMotion } from '@/constants/motion'
import styles from '@/styles/scientific-themes-page/index.module.scss'
import { useUnit } from 'effector-react'
import { useThemesFilters } from '@/hooks/useThemesFilters'
import Link from 'next/link'
import { $themes } from '@/context/themes'
import ThemesItem from '@/components/modules/ScientificWorkItem/ThemesItem'

const ThemesPage = ({ searchParams }: IScientificWorkPage) => {
  const { themesSpinner, paginationProps, handlePageChange } =
    useThemesFilters(searchParams)
  const themes = useUnit($themes)

  return (
    <>
      <h1 className={styles.themes__title}>
        <Link
          href='/scientific-work/examples'
          className={styles.themes__link__current}
        >
          Примеры статей{' '}
        </Link>
        Свободные темы
      </h1>
      {themesSpinner && (
        <motion.ul
          {...basePropsForMotion}
          className={skeletonStyles.skeleton_themes}
          style={{ marginBottom: 60 }}
          exit={{ opacity: 0 }}
        >
          {Array.from(new Array(12)).map((_, i) => (
            <li key={i} className={skeletonStyles.skeleton_themes__item}>
              <div className={skeletonStyles.skeleton_themes__item__light} />
            </li>
          ))}
        </motion.ul>
      )}
      {!themesSpinner && (
        <motion.ul
          {...basePropsForMotion}
          className={`list-reset ${styles.themes__list}`}
          exit={{ opacity: 0 }}
        >
          {(themes.items || []).map((item) => (
            <ThemesItem key={item._id} item={item} />
          ))}
        </motion.ul>
      )}
      {!themes.items?.length && !themesSpinner && (
        <div className={styles.themes__list__empty}>Ничего не найдено</div>
      )}
      <div className={styles.themes__bottom}>
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

export default ThemesPage
