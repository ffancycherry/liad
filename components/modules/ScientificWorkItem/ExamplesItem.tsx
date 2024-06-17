import { IScientificWorkItemProps } from '@/types/modules'

import styles from '@/styles/scientific-examples-item/index.module.scss'
import Link from 'next/link'

const ExamplesItem = ({ item }: IScientificWorkItemProps) => (
  <>
    <li className={styles.list__item}>
      <div className={styles.list__item__inner}>
        <h5 className={styles.list__item__title}>
          <Link href={`/scientific-work/examples/${item._id}`}>
            {item.name}
          </Link>
        </h5>
        <div className={styles.list__item__author}>Автор: {item.author}</div>
        <div className={styles.list__item__theme}>Тема: {item.theme}</div>
        <div className={styles.list__item__desc} />
        <div className={styles.list__item__description}>{item.description}</div>
      </div>
    </li>
  </>
)

export default ExamplesItem
