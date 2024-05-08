import { Effect, createDomain, sample } from 'effector'
import { Gate, createGate } from 'effector-react'
import { getProjectsFx } from '@/api/main-page'

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

export const $mainProjects = projectsStoreInstance(getProjectsFx)

projectsSampleInstance(getProjectsFx, MainPageGate)
