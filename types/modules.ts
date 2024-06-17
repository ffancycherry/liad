import {
  ICompetition,
  IDevteam,
  IEvent,
  IProject,
  IScientificWork,
  IScientificWorkTheme,
} from './common'

export interface IProjectsItemProps {
  item: IProject
  title?: string
}

export interface IDevteamItemProps {
  item: IDevteam
  title?: string
}

export interface IEventsItemProps {
  item: IEvent
  title?: string
}

export interface ICompetitionItemProps {
  item: ICompetition
  title?: string
}

export interface IScientificWorkItemProps {
  item: IScientificWork
  title?: string
}

export interface IScientificWorkThemeItemProps {
  item: IScientificWorkTheme
  title?: string
}

export interface IBreadcrumbsProps {
  getTextGenerator: (arg0: string, query: string[]) => void
  getDefaultTextGenerator: (arg0: string, href: string) => string
}

export interface ICrumbProps {
  text: string
  textGenerator: () => string
  href: string
  last: boolean
}
