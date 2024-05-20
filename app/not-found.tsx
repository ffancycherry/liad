'use client'
import EmptyPageContent from '@/components/modules/EmptyPageContent/EmptyPageContent'
import styles from '@/styles/not-found/index.module.scss'

const NotFound = () => (
  <main>
    <section className={styles.not_found}>
      <div className='container'>
        <EmptyPageContent />
      </div>
    </section>
  </main>
)

export default NotFound
