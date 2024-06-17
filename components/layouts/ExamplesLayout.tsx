'use client'
import { useBreadcrumbs } from '@/hooks/useBreadcrumbs'
import Breadcrumbs from '../modules/Breadcrumbs/Breadcrumbs'
import styles from '@/styles/scientific-examples-page/index.module.scss'

const ExamplesLayout = ({ children }: { children: React.ReactNode }) => {
  const { getDefaultTextGenerator, getTextGenerator } =
    useBreadcrumbs('scientific-work')

  return (
    <main>
      <Breadcrumbs
        getDefaultTextGenerator={getDefaultTextGenerator}
        getTextGenerator={getTextGenerator}
      />
      <section className={styles.examples}>
        <div className='container'>{children}</div>
      </section>
    </main>
  )
}

export default ExamplesLayout
