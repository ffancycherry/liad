import { $currentCompetition } from '@/context/competition-current'
//import Image from 'next/image'
import { useUnit } from 'effector-react'
import styles from '@/styles/competition/index.module.scss'
import CompetitionImagesItem from './CompetitionImageItem'
import { useProductImages } from '@/hooks/useProductImages'
import Link from 'next/link'

function convertDate(date: Date): string {
  const day = date.getDate()
  const dayString: string = day < 10 ? '0' + day : String(day)
  const month = date.getMonth() + 1
  const monthString: string = month < 10 ? '0' + month : String(month)
  const year = date.getFullYear()
  return dayString + '.' + monthString + '.' + year
}

const CompetitionPageContent = () => {
  const competition = useUnit($currentCompetition)
  const images = useProductImages(competition)
  const isCompleted = competition.status === 'completed'

  return (
    <>
      <div className={styles.competition__item}>
        <h1>{competition.name}</h1>
        <div className={styles.competition__item__desc}>
          <div className={styles.competition__item__date}>
            {/*{item.date[0].slice(0, 10)}*/}
            {convertDate(new Date(competition.date[0]))} –{' '}
            {convertDate(new Date(competition.date[1]))}
          </div>
          {isCompleted && (
            <div className={styles.competition__item__label}>
              <ul>
                <li>Заверешен</li>
              </ul>
            </div>
          )}
        </div>
        <div className={styles.competition__item__description}>
          {competition.description}
        </div>
        <div className={styles.download}>
          <Link
            href='/files/competition-1.docx'
            className={styles.download__link}
            download
          >
            <span />
            Положение конкурса
          </Link>
        </div>
        {/*<div>
          {isCompleted && (
            <Slider
              {...baseSliderSettings}
              className={styles.competition__top__images__slider}
            >
              {images.map((img) => (
                <CompetitionImagesItem key={img.id} image={img} imgSize={250} />
              ))}
            </Slider>
          )}
        </div>*/}
        <div>
          {isCompleted && (
            <div>
              <h1>Итоги конкурса</h1>
              <div className={styles.competition__item__description}>
                {competition.description}
              </div>
              <ul className={`list-reset ${styles.competition__top__images}`}>
                {images.map((img) => (
                  <CompetitionImagesItem
                    key={img.id}
                    image={img}
                    imgSize={360}
                  />
                ))}
              </ul>
            </div>
          )}
        </div>

        {/*<div className={styles.competition__item__img}>
          <Image
            src={competition.img[0]}
            alt={competition.name}
            width='480'
            height='480'
          />
        </div>*/}
      </div>
    </>
  )
}

export default CompetitionPageContent
