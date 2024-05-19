import { IEvent } from './common'

export interface ILoadAllEventsFx {
  limit: number
  offset: number
  additionalParam?: string
}

export interface IEvents {
  count: number
  items: IEvent[]
}
