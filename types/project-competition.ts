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

export interface ILoadOneCompetitionFx {
  id: string
  setSpinner?: (arg0: boolean) => void
  withShowingSizeTable?: boolean
}
