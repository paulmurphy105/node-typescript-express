export interface FetchAdapterInterface {
  get: (url: string) => Promise<any>
}