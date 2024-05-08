import { IProject } from './common'

export interface IMainPageSectionProps {
  title: string
  projects: IProject[]
  spinner: boolean
}
