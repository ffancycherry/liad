export type SearchParams = { [key: string]: string | string[] | undefined }

export interface IProjectsPage {
  searchParams: SearchParams
  pageName: string
}

export interface IDevteamPage {
  searchParams: SearchParams
  pageName: string
}

export interface IEventsPage {
  searchParams: SearchParams
  pageName: string
}

export interface ICompetitionPage {
  searchParams: SearchParams
  pageName: string
}

export interface IScientificWorkPage {
  searchParams: SearchParams
  pageName: string
}
