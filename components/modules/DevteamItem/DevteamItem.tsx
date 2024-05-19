import { IDevteamItemProps } from '@/types/modules'
import Link from 'next/link'
import Image from 'next/image'
import styles from '@/styles/devteam-item/index.module.scss'

const DevteamItem = ({ item }: IDevteamItemProps) => (
  <>
    <li className={styles.list__item}>
      <Link href={`/dev-team/${item._id}`} className={styles.list__item__img}>
        <Image src={item.img.toString()} alt={item.name} fill />
      </Link>
      <div className={styles.list__item__inner}>
        <h6 className={styles.list__item__title}>
          <Link href={`/dev-team/${item._id}`}>{item.name}</Link>
        </h6>
        <div className={styles.list__item__description__h}>Должность:</div>
        <div className={styles.list__item__description}>{item.position}</div>
        <div className={styles.list__item__description__h}>Контакты:</div>
        <div className={styles.list__item__description}>{item.contacts}</div>

        {/*<div className={styles.list__item__charact}>
          <span className={styles.list__item__charact__item}>
            Стек технологий:
            <br />
            {item.stack}
          </span>
          <span className={styles.list__item__charact__item}>
            Срок исполнения:
            <br />
            {item.date[0].slice(0, 10)} – {item.date[1].slice(0, 10)}
          </span>
          <span className={styles.list__item__charact__item}>
            Состав команды:
            <br />
            {item.team}
          </span>
</div>*/}
      </div>
    </li>
  </>
)

export default DevteamItem
