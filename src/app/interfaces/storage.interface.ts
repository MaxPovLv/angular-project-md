import {IFilm} from "./film.interface";

export interface IStorage {
  page: number;
  total_pages: number;
  total_results: number;
  results: IFilm [];
}
