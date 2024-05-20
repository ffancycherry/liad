'use client'
import { useBreadcrumbs } from '@/hooks/useBreadcrumbs'
import Breadcrumbs from '../modules/Breadcrumbs/Breadcrumbs'
import styles from '@/styles/competition-page/index.module.scss'

const CompetitionsLayout = ({ children }: { children: React.ReactNode }) => {
  const { getDefaultTextGenerator, getTextGenerator } = useBreadcrumbs(
    'project-competition'
  )

  return (
    <main>
      <Breadcrumbs
        getDefaultTextGenerator={getDefaultTextGenerator}
        getTextGenerator={getTextGenerator}
      />
      <section className={styles.competitions}>
        <div className='container'>{children}</div>
      </section>
    </main>
  )
}

export default CompetitionsLayout
