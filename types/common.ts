export interface IProject {
  _id: string
  name: string
  description: string
  stack: string
  date: string
  team: string
  img: string[]
}

export interface IDevteam {
  _id: string
  name: string
  position: string
  contacts: string
  img: string[]
}

export interface IEvent {
  _id: string
  name: string
  description: string
  date: string
  status: string
  img: string[]
}

export interface ICompetition {
  _id: string
  name: string
  description: string
  date: string
  status: string
  files: string[]
  img: string[]
}

export interface IScientificWorkTheme {
  _id: string
  name: string
  description: string
}

export interface IScientificWork {
  _id: string
  name: string
  description: string
  author: string
  theme: string
  files: string[]
}
