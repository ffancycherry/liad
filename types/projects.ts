import { IProject } from './common'

export interface ILoadAllProjectsFx {
  limit: number
  offset: number
  additionalParam?: string
  isCatalog?: boolean
}

export interface IProjects {
  count: number
  items: IProject[]
}
