import { IProject } from './common'

export interface ILoadAllProjectsFx {
  limit: number
  offset: number
  additionalParam?: string
}

export interface IProjects {
  count: number
  items: IProject[]
}
