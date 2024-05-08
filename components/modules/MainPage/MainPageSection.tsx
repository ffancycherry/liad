import { IMainPageSectionProps } from '@/types/main-page'
import AllLink from '@/components/elements/AllLink/AllLink'
import { motion } from 'framer-motion'
import { basePropsForMotion } from '@/constants/motion'
import ProjectsItem from '../ProjectsItem/ProjectsItem'
import skeletonStyles from '@/styles/skeleton/index.module.scss'
import styles from '@/styles/main-page/index.module.scss'

const MainPageSection = ({
  title,
  projects,
  spinner,
}: IMainPageSectionProps) => (
  <section className={styles.main_section}>
    <div className={'container ${styles.main_section__containner}'}>
      <h3 className={'site-title ${styles.main_section__title}'}>{title}</h3>
      <div className={styles.main_section__inner}>
        <AllLink />
        {spinner && (
          <motion.ul
            className={skeletonStyles.skeleton}
            {...basePropsForMotion}
            exit={{ opacity: 0 }}
          >
            {Array.from(new Array(4)).map((_, i) => (
              <li key={i} className={skeletonStyles.skeleton__item}>
                <div className={skeletonStyles.skeleton__item__light} />
              </li>
            ))}
          </motion.ul>
        )}
        {!spinner && (
          <motion.ul
            className={styles.main_section__list}
            {...basePropsForMotion}
            exit={{ opacity: 0 }}
          >
            {projects.map((item) => (
              <ProjectsItem key={item._id} item={item} />
            ))}
          </motion.ul>
        )}
      </div>
    </div>
  </section>
)
export default MainPageSection
