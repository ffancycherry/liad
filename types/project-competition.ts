import { ICompetition } from './common'

export interface ILoadAllCompetitionsFx {
  limit: number
  offset: number
  additionalParam?: string
}

export interface ICompetitions {
  count: number
  items: ICompetition[]
}
