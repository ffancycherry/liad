import { ICompetitionItemProps } from '@/types/modules'
import Link from 'next/link'
//import Image from 'next/image'
import styles from '@/styles/competition-item/index.module.scss'

function convertDate(date: Date): string {
  const day = date.getDate()
  const dayString: string = day < 10 ? '0' + day : String(day)
  const month = date.getMonth() + 1
  const monthString: string = month < 10 ? '0' + month : String(month)
  const year = date.getFullYear()
  return dayString + '.' + monthString + '.' + year
}

const CompetitionsItem = ({ item }: ICompetitionItemProps) => {
  // Проверяем статус конкурса
  const isCompleted = item.status === 'completed'

  return (
    <>
      <li className={styles.list__item}>
        <div className={styles.list__item__inner}>
          <h5 className={styles.list__item__title}>
            {isCompleted && (
              <Link
                href={`/project-competition/competition-completed/${item._id}`}
              >
                {item.name}
              </Link>
            )}
            {!isCompleted && (
              <Link
                href={`/project-competition/competition-current/${item._id}`}
              >
                {item.name}
              </Link>
            )}
          </h5>
          <div className={styles.list__item__desc}>
            <div className={styles.list__item__date}>
              {/*{item.date[0].slice(0, 10)}*/}
              {convertDate(new Date(item.date[0]))} –{' '}
              {convertDate(new Date(item.date[1]))}
            </div>

            {/* Отображаем лейбл "Завершен", если конкурс завершен */}
            {isCompleted && (
              <div className={styles.list__item__label}>
                <ul>
                  <li>Заверешен</li>
                </ul>
              </div>
            )}
          </div>

          <div className={styles.list__item__description}>
            {item.description}
          </div>
          <div className={styles.competitions_inner__top}>
            <button className={styles.competitions_inner__btn}>
              {isCompleted && (
                <Link
                  href={`/project-competition/competition-completed/${item._id}`}
                  className={styles.competitions_inner__btn__text}
                >
                  Подробнее
                </Link>
              )}
              {!isCompleted && (
                <Link
                  href={`/project-competition/competition-current/${item._id}`}
                  className={styles.competitions_inner__btn__text}
                >
                  Подробнее
                </Link>
              )}
            </button>
          </div>
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
}

export default CompetitionsItem
