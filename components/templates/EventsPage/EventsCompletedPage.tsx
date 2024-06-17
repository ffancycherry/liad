'use client'
import { motion } from 'framer-motion'
import ReactPaginate from 'react-paginate'
import { IEventsPage } from '@/types/catalog'
import skeletonStyles from '@/styles/skeleton/index.module.scss'
import { basePropsForMotion } from '@/constants/motion'
import styles from '@/styles/events-page/index.module.scss'
import { useUnit } from 'effector-react'
import EventsItem from '@/components/modules/EventsItem/EventsItem'
import { useEventsFilters } from '@/hooks/useEventsCompletedFilters'
import { $events } from '@/context/events-completed'
import Link from 'next/link'

const EventsCompletedPage = ({ searchParams }: IEventsPage) => {
  const { eventsSpinner, paginationProps, handlePageChange } =
    useEventsFilters(searchParams)
  const events = useUnit($events)

  return (
    <>
      <h1 className={styles.events__title}>
        <Link
          href='/events/events-current'
          className={styles.events__link__current}
        >
          Актуальные мероприятия{' '}
        </Link>
        Итоги мероприятий
      </h1>
      {eventsSpinner && (
        <motion.ul
          {...basePropsForMotion}
          className={skeletonStyles.skeleton_events}
          style={{ marginBottom: 60 }}
          exit={{ opacity: 0 }}
        >
          {Array.from(new Array(12)).map((_, i) => (
            <li key={i} className={skeletonStyles.skeleton_events__item}>
              <div className={skeletonStyles.skeleton_events__item__light} />
            </li>
          ))}
        </motion.ul>
      )}
      {!eventsSpinner && (
        <motion.ul
          {...basePropsForMotion}
          className={`list-reset ${styles.events__list}`}
          exit={{ opacity: 0 }}
        >
          {(events.items || [])
            .filter((item) => item.status === 'completed')
            .map((item) => (
              <EventsItem key={item._id} item={item} />
            ))}
        </motion.ul>
      )}
      {!events.items?.length && !eventsSpinner && (
        <div className={styles.events__list__empty}>Ничего не найдено</div>
      )}
      <div className={styles.events__bottom}>
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

export default EventsCompletedPage
