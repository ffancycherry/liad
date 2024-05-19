import { IDevteam } from './common'

export interface ILoadAllDevteamFx {
  limit: number
  offset: number
  additionalParam?: string
}

export interface IDevteams {
  count: number
  items: IDevteam[]
}
