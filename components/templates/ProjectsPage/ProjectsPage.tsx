'use client'
import { motion } from 'framer-motion'
import ReactPaginate from 'react-paginate'
import { useProjectFilters } from '@/hooks/useProjectFilters'
import { IProjectsPage } from '@/types/catalog'
import skeletonStyles from '@/styles/skeleton/index.module.scss'
import { basePropsForMotion } from '@/constants/motion'
import ProjectsItem from '@/components/modules/ProjectsItem/ProjectsItem'
import styles from '@/styles/projects-page/index.module.scss'
import { useUnit } from 'effector-react'
import { $projects } from '@/context/projects'
import { $isAuth } from '@/context/auth'
import Link from 'next/link'

const ProjectsPage = ({ searchParams }: IProjectsPage) => {
  const { projectSpinner, paginationProps, handlePageChange } =
    useProjectFilters(searchParams)
  const projects = useUnit($projects)
  const isAuth = useUnit($isAuth)

  return (
    <>
      <h1 className={styles.projects__title}>Проекты</h1>
      {projectSpinner && (
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
      {!projectSpinner && (
        <motion.ul
          {...basePropsForMotion}
          className={`list-reset ${styles.projects__list}`}
          exit={{ opacity: 0 }}
        >
          {(projects.items || []).map((item) => (
            <div key={item._id}>
              {isAuth ? (
                <Link
                  href={`/projects/${item._id}`}
                  className={styles.project__list__item__inner}
                >
                  <ProjectsItem item={item} />
                </Link>
              ) : (
                <ProjectsItem item={item} />
              )}
            </div>
          ))}
        </motion.ul>
      )}
      {!projects.items?.length && !projectSpinner && (
        <div className={styles.projects__list__empty}>Ничего не найдено</div>
      )}
      <div className={styles.projects__bottom}>
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

export default ProjectsPage
