export type SearchParams = { [key: string]: string | string[] | undefined }
export interface IProjectsPage {
  searchParams: SearchParams
  pageName: string
}
