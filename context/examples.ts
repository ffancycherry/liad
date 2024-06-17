import api from '../api/apiInstance'
import { createDomain, createEffect, sample } from 'effector'
import { createGate } from 'effector-react'
import toast from 'react-hot-toast'
import {
  ILoadAllScientificWorksFx,
  IScientificWorks,
} from '@/types/scientific-work'

export const loadAllExamplesFx = createEffect(
  async ({ limit, offset, additionalParam }: ILoadAllScientificWorksFx) => {
    try {
      const { data } = await api.get(
        `/api/scientific-work/examples?limit=${limit}&offset=${offset}&${additionalParam}`
      )

      console.log('Данные')
      console.log(data)
      return data
    } catch (error) {
      toast.error((error as Error).message)
    }
  }
)

const examples = createDomain()

export const MainPageGate = createGate()

export const loadAllExamples = examples.createEvent<ILoadAllScientificWorksFx>()

export const $examples = examples
  .createStore<IScientificWorks>({} as IScientificWorks)
  .on(loadAllExamplesFx.done, (_, { result }) => result)

sample({
  clock: loadAllExamples,
  source: $examples,
  fn: (_, data) => data,
  target: loadAllExamplesFx,
})
