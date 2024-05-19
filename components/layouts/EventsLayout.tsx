'use client'
import { useBreadcrumbs } from '@/hooks/useBreadcrumbs'
import Breadcrumbs from '../modules/Breadcrumbs/Breadcrumbs'
import styles from '@/styles/events-page/index.module.scss'

const EventsLayout = ({ children }: { children: React.ReactNode }) => {
  const { getDefaultTextGenerator, getTextGenerator } = useBreadcrumbs('events')

  return (
    <main>
      <Breadcrumbs
        getDefaultTextGenerator={getDefaultTextGenerator}
        getTextGenerator={getTextGenerator}
      />
      <section className={styles.events}>
        <div className='container'>{children}</div>
      </section>
    </main>
  )
}

export default EventsLayout
