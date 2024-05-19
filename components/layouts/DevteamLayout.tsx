'use client'
import { useBreadcrumbs } from '@/hooks/useBreadcrumbs'
import Breadcrumbs from '../modules/Breadcrumbs/Breadcrumbs'
import styles from '@/styles/devteam-page/index.module.scss'

const DevteamLayout = ({ children }: { children: React.ReactNode }) => {
  const { getDefaultTextGenerator, getTextGenerator } =
    useBreadcrumbs('dev-team')

  return (
    <main>
      <Breadcrumbs
        getDefaultTextGenerator={getDefaultTextGenerator}
        getTextGenerator={getTextGenerator}
      />
      <section className={styles.devteam}>
        <div className='container'>{children}</div>
      </section>
    </main>
  )
}

export default DevteamLayout
