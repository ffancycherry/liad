import api from '../api/apiInstance'
import { createDomain, createEffect, sample } from 'effector'
import { createGate } from 'effector-react'
import toast from 'react-hot-toast'
import {
  ICompetitions,
  ILoadAllCompetitionsFx,
  ILoadOneCompetitionFx,
} from '@/types/project-competition'
import { ICompetition } from '@/types/common'

export const loadAllCompetitionsCurrentFx = createEffect(
  async ({ limit, offset, additionalParam }: ILoadAllCompetitionsFx) => {
    try {
      const { data } = await api.get(
        `/api/project-competition/current?limit=${limit}&offset=${offset}&${additionalParam}`
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

export const setCurrentCompetition = competitions.createEvent<ICompetition>()

export const loadAllCompetitions =
  competitions.createEvent<ILoadAllCompetitionsFx>()

export const loadOneCompetition =
  competitions.createEvent<ILoadOneCompetitionFx>()

export const loadOneCompetitionFx = createEffect(
  async ({ id, setSpinner }: ILoadOneCompetitionFx) => {
    try {
      setSpinner && setSpinner(true)
      const { data } = await api.post('/api/project-competition/one', {
        id,
      })

      {
        /*if (withShowingSizeTable) {
        handleShowSizeTable(data.competitionItem)
      }*/
      }

      if (data?.message === 'Wrong product id') {
        return { competitionItem: { errorMessage: 'Wrong product id' } }
      }

      return data
    } catch (error) {
      toast.error((error as Error).message)
    } finally {
      setSpinner && setSpinner(false)
    }
  }
)

export const $competitions = competitions
  .createStore<ICompetitions>({} as ICompetitions)
  .on(loadAllCompetitionsCurrentFx.done, (_, { result }) => result)

export const $currentCompetition = competitions
  .createStore<ICompetition>({} as ICompetition)
  .on(setCurrentCompetition, (_, competition) => competition)
  .on(loadOneCompetitionFx.done, (_, { result }) => result.competitionItem)

sample({
  clock: loadAllCompetitions,
  source: $competitions,
  fn: (_, data) => data,
  target: loadAllCompetitionsCurrentFx,
})

sample({
  clock: loadOneCompetition,
  source: $currentCompetition,
  fn: (_, data) => data,
  target: loadOneCompetitionFx,
})
