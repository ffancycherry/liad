export type searchParams = { [key: string]: string | string[] | undefined }
export interface IProjectsPage {
  searchParams: searchParams
  pageName: string
}
