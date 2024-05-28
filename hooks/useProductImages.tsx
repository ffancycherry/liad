import { useMemo } from 'react'
import { idGenerator } from '@/lib/utils/common'
import { ICompetition } from '@/types/common'

export const useProductImages = (competition: ICompetition) => {
  const images = useMemo(() => {
    const makeImagesObjects = (imagesArray: string[]) =>
      imagesArray.map((item) => ({
        src: item,
        alt: competition.name,
        id: idGenerator(),
      }))

    if (competition.img.length < 4) {
      const images = []

      for (let i = 0; i < 4; i++) {
        images.push(competition.img[0])
      }

      return makeImagesObjects(images)
    }

    return makeImagesObjects(competition.img)
  }, [competition.img, competition.name])
  return images
}
