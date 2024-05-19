import { ICompetition } from './common'

export interface ILoadAllCompetiotionsFx {
  limit: number
  offset: number
  additionalParam?: string
}

export interface ICompetitions {
  count: number
  items: ICompetition[]
}
