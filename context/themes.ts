import api from '../api/apiInstance'
import { createDomain, createEffect, sample } from 'effector'
import { createGate } from 'effector-react'
import toast from 'react-hot-toast'
import {
  ILoadAllScientificWorkThemesFx,
  IScientificWorkThemes,
} from '@/types/scientific-work'

export const loadAllThemesFx = createEffect(
  async ({
    limit,
    offset,
    additionalParam,
  }: ILoadAllScientificWorkThemesFx) => {
    try {
      const { data } = await api.get(
        `/api/scientific-work/themes?limit=${limit}&offset=${offset}&${additionalParam}`
      )

      console.log('Данные')
      console.log(data)
      return data
    } catch (error) {
      toast.error((error as Error).message)
    }
  }
)

const themes = createDomain()

export const MainPageGate = createGate()

export const loadAllThemes =
  themes.createEvent<ILoadAllScientificWorkThemesFx>()

export const $themes = themes
  .createStore<IScientificWorkThemes>({} as IScientificWorkThemes)
  .on(loadAllThemesFx.done, (_, { result }) => result)

sample({
  clock: loadAllThemes,
  source: $themes,
  fn: (_, data) => data,
  target: loadAllThemesFx,
})
