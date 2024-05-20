import api from '../api/apiInstance'
import { createDomain, createEffect, sample } from 'effector'
import { createGate } from 'effector-react'
import toast from 'react-hot-toast'
import {
  ICompetitions,
  ILoadAllCompetitionsFx,
} from '@/types/project-competition'

export const loadAllCompetitionsCompletedFx = createEffect(
  async ({ limit, offset, additionalParam }: ILoadAllCompetitionsFx) => {
    try {
      const { data } = await api.get(
        `/api/project-competition/completed?limit=${limit}&offset=${offset}&${additionalParam}`
      )
      console.log(data)
      return data
    } catch (error) {
      toast.error((error as Error).message)
    }
  }
)

const competitions = createDomain()

export const MainPageGate = createGate()

export const loadAllCompetitions =
  competitions.createEvent<ILoadAllCompetitionsFx>()

export const $competitions = competitions
  .createStore<ICompetitions>({} as ICompetitions)
  .on(loadAllCompetitionsCompletedFx.done, (_, { result }) => result)

sample({
  clock: loadAllCompetitions,
  source: $competitions,
  fn: (_, data) => data,
  target: loadAllCompetitionsCompletedFx,
})
