import api from '../api/apiInstance'
import { createDomain, createEffect, sample } from 'effector'
import { createGate } from 'effector-react'
import toast from 'react-hot-toast'
import { IDevteams, ILoadAllDevteamFx } from '@/types/devteam'

export const loadAllDevteamFx = createEffect(
  async ({ limit, offset, additionalParam }: ILoadAllDevteamFx) => {
    try {
      const { data } = await api.get(
        `/api/dev-team?limit=${limit}&offset=${offset}&${additionalParam}`
      )

      console.log('Данные')
      console.log(data)
      return data
    } catch (error) {
      toast.error((error as Error).message)
    }
  }
)

const devteam = createDomain()

export const MainPageGate = createGate()

export const loadAllDevteam = devteam.createEvent<ILoadAllDevteamFx>()

export const $devteam = devteam
  .createStore<IDevteams>({} as IDevteams)
  .on(loadAllDevteamFx.done, (_, { result }) => result)

sample({
  clock: loadAllDevteam,
  source: $devteam,
  fn: (_, data) => data,
  target: loadAllDevteamFx,
})
