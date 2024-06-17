import { IScientificWorkThemeItemProps } from '@/types/modules'
import Link from 'next/link'
//import Image from 'next/image'
import styles from '@/styles/scientific-themes-item/index.module.scss'

const ThemesItem = ({ item }: IScientificWorkThemeItemProps) => {
  const isStatus = item.status

  return (
    <>
      <li className={styles.list__item}>
        <div className={styles.list__item__inner}>
          <h5 className={styles.list__item__title}>
            <Link href={`/scientific-work/themes/${item._id}`}>
              {item.name}
            </Link>
          </h5>

          {isStatus === 'free' && (
            <div className={styles.list__item__label_free}>
              <ul>
                <li>Тема свободна</li>
              </ul>
            </div>
          )}
          {isStatus === 'busy' && (
            <div className={styles.list__item__label_busy}>
              <ul>
                <li>Тема занята</li>
              </ul>
            </div>
          )}

          <div className={styles.list__item__description}>
            {item.description}
          </div>
        </div>
      </li>
    </>
  )
}

export default ThemesItem
