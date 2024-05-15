import api from '../api/apiInstance'
import { Effect, createDomain, createEffect, sample } from 'effector'
import { Gate, createGate } from 'effector-react'
import { getProjectsFx } from '@/api/main-page'
import toast from 'react-hot-toast'
import { ILoadAllProjectsFx, IProjects } from '@/types/projects'

export const loadAllProjectsFx = createEffect(
  async ({ limit, offset, additionalParam }: ILoadAllProjectsFx) => {
    try {
      const { data } = await api.get(
        `/api/projects?limit=${limit}&offset=${offset}&${additionalParam}`
      )

      console.log('Данные')
      console.log(data)
      return data
    } catch (error) {
      toast.error((error as Error).message)
    }
  }
)

const projects = createDomain()

export const MainPageGate = createGate()

const projectsStoreInstance = (effect: Effect<void, [], Error>) =>
  projects
    .createStore([])
    .on(effect.done, (_, { result }) => result)
    .on(effect.fail, (_, { error }) => {
      console.log(error.message)
    })

const projectsSampleInstance = (
  effect: Effect<void, [], Error>,
  gate: Gate<unknown>
) =>
  sample({
    clock: gate.open,
    target: effect,
  })

projectsSampleInstance(getProjectsFx, MainPageGate)

export const $mainProjects = projectsStoreInstance(getProjectsFx)

export const loadAllProjects = projects.createEvent<ILoadAllProjectsFx>()

export const $projects = projects
  .createStore<IProjects>({} as IProjects)
  .on(loadAllProjectsFx.done, (_, { result }) => result)

sample({
  clock: loadAllProjects,
  source: $projects,
  fn: (_, data) => data,
  target: loadAllProjectsFx,
})
