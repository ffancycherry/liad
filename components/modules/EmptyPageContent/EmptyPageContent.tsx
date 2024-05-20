import styles from '@/styles/empty-content/index.module.scss'
import Link from 'next/link'

const EmptyPageContent = () => (
  <div className={styles.empty_content}>
    <div className={styles.empty_content__inner}>
      <div className={styles.empty_content__title}>
        <span>Упс...</span>
        <br />
        <span>Кажется кто-то украл страницу!</span>
      </div>
      <span className={styles.empty_content__word}>404</span>
      <div className={styles.empty_content__links}>
        <Link href='/'>Вернуться на главную</Link>
      </div>
    </div>
  </div>
)

export default EmptyPageContent
