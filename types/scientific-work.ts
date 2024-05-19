import { IScientificWork, IScientificWorkTheme } from './common'

export interface ILoadAllScientificWorksFx {
  limit: number
  offset: number
  additionalParam?: string
}

export interface IScientificWorks {
  count: number
  items: IScientificWork[]
}

export interface ILoadAllScientificWorkThemesFx {
  limit: number
  offset: number
  additionalParam?: string
}

export interface IScientificWorkThemes {
  count: number
  items: IScientificWorkTheme[]
}
