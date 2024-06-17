import api from '../api/apiInstance'
import { createDomain, createEffect, sample } from 'effector'
import { createGate } from 'effector-react'
import toast from 'react-hot-toast'
import { IEvents, ILoadAllEventsFx } from '@/types/events'

export const loadAllEventsCurrentFx = createEffect(
  async ({ limit, offset, additionalParam }: ILoadAllEventsFx) => {
    try {
      const { data } = await api.get(
        `/api/events/current?limit=${limit}&offset=${offset}&${additionalParam}`
      )

      console.log('Данные')
      console.log(data)
      return data
    } catch (error) {
      toast.error((error as Error).message)
    }
  }
)

const events = createDomain()

export const MainPageGate = createGate()

export const loadAllEvents = events.createEvent<ILoadAllEventsFx>()

export const $events = events
  .createStore<IEvents>({} as IEvents)
  .on(loadAllEventsCurrentFx.done, (_, { result }) => result)

sample({
  clock: loadAllEvents,
  source: $events,
  fn: (_, data) => data,
  target: loadAllEventsCurrentFx,
})
