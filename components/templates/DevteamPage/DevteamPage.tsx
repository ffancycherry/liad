'use client'
import { motion } from 'framer-motion'
import ReactPaginate from 'react-paginate'
import { IDevteamPage } from '@/types/catalog'
import skeletonStyles from '@/styles/skeleton/index.module.scss'
import { basePropsForMotion } from '@/constants/motion'
import styles from '@/styles/devteam-page/index.module.scss'
import { useUnit } from 'effector-react'
import DevteamItem from '@/components/modules/DevteamItem/DevteamItem'
import { useDevteamFilters } from '@/hooks/useDevteamFilters'
import { $devteam } from '@/context/devteam'

const DevteamPage = ({ searchParams }: IDevteamPage) => {
  const { devteamSpinner, paginationProps, handlePageChange } =
    useDevteamFilters(searchParams)
  const devteam = useUnit($devteam)

  return (
    <>
      <h1 className={styles.devteam__title}>Команда разработчиков</h1>
      {devteamSpinner && (
        <motion.ul
          {...basePropsForMotion}
          className={skeletonStyles.skeleton}
          style={{ marginBottom: 60 }}
          exit={{ opacity: 0 }}
        >
          {Array.from(new Array(12)).map((_, i) => (
            <li key={i} className={skeletonStyles.skeleton__item}>
              <div className={skeletonStyles.skeleton__item__light} />
            </li>
          ))}
        </motion.ul>
      )}
      {!devteamSpinner && (
        <motion.ul
          {...basePropsForMotion}
          className={`list-reset ${styles.devteam__list}`}
          exit={{ opacity: 0 }}
        >
          {(devteam.items || []).map((item) => (
            <DevteamItem key={item._id} item={item} />
          ))}
        </motion.ul>
      )}
      {!devteam.items?.length && !devteamSpinner && (
        <div className={styles.devteam__list__empty}>Ничего не найдено</div>
      )}
      <div className={styles.devteam__bottom}>
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

export default DevteamPage
