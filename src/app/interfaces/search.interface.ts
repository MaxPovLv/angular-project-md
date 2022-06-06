import {ISearchResults} from "./search-results.interface";

export interface ISearch {
  page: number
  results: ISearchResults[]
  total_pages: number
  total_results: number
}
