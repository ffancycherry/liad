import Image from 'next/image'
import useImagePreloader from '@/hooks/useImagePreloader'
import styles from '@/styles/competition/index.module.scss'
import { ICompetitionImagesItemProps } from '@/types/item-page'

const CompetitionImagesItem = ({
  image,
  imgSize,
}: ICompetitionImagesItemProps) => {
  const { handleLoadingImageComplete, imgSpinner } = useImagePreloader()
  return (
    <li
      className={`${styles.competition__top__images__item} ${
        imgSpinner ? styles.img_loading : ''
      }`}
    >
      <Image
        src={image.src}
        alt={image.alt}
        width={imgSize}
        height={imgSize}
        //className='transition-opacity opacity-0 duration'
        onLoad={handleLoadingImageComplete}
      />
    </li>
  )
}

export default CompetitionImagesItem
