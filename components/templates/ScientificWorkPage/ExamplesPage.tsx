'use client'
import { motion } from 'framer-motion'
import ReactPaginate from 'react-paginate'
import { IScientificWorkPage } from '@/types/catalog'
import skeletonStyles from '@/styles/skeleton/index.module.scss'
import { basePropsForMotion } from '@/constants/motion'
import styles from '@/styles/scientific-examples-page/index.module.scss'
import { useUnit } from 'effector-react'
import Link from 'next/link'
import { useExamplesFilters } from '@/hooks/useExamplesFilters'
import { $examples } from '@/context/examples'
import ExamplesItem from '@/components/modules/ScientificWorkItem/ExamplesItem'
import { $isAuth } from '@/context/auth'

const ExamplesPage = ({ searchParams }: IScientificWorkPage) => {
  const { examplesSpinner, paginationProps, handlePageChange } =
    useExamplesFilters(searchParams)
  const examples = useUnit($examples)
  const isAuth = useUnit($isAuth)

  return (
    <>
      <h1 className={styles.examples__title}>
        Примеры статей{' '}
        {isAuth && (
          <Link
            href='/scientific-work/themes'
            className={styles.examples__link__current}
          >
            Свободные темы
          </Link>
        )}
      </h1>
      {examplesSpinner && (
        <motion.ul
          {...basePropsForMotion}
          className={skeletonStyles.skeleton_examples}
          style={{ marginBottom: 60 }}
          exit={{ opacity: 0 }}
        >
          {Array.from(new Array(12)).map((_, i) => (
            <li key={i} className={skeletonStyles.skeleton_examples__item}>
              <div className={skeletonStyles.skeleton_examples__item__light} />
            </li>
          ))}
        </motion.ul>
      )}
      {!examplesSpinner && (
        <motion.ul
          {...basePropsForMotion}
          className={`list-reset ${styles.examples__list}`}
          exit={{ opacity: 0 }}
        >
          {(examples.items || []).map((item) => (
            <ExamplesItem key={item._id} item={item} />
          ))}
        </motion.ul>
      )}
      {!examples.items?.length && !examplesSpinner && (
        <div className={styles.examples__list__empty}>Ничего не найдено</div>
      )}
      <div className={styles.examples__bottom}>
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

export default ExamplesPage
