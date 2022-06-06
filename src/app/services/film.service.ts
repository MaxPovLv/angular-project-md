import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IGenres, IStorage} from "../interfaces";
import {urls} from "../constants";

@Injectable({
  providedIn: 'root'
})
export class FilmService {
  constructor(private httpClient: HttpClient) {
  }

  getFilms(page: number = 1): Observable<IStorage> {
    return this.httpClient.get<IStorage>(urls.films, {params: {page}})
  }

  getFilmById(): Observable<IStorage> {
    return this.httpClient.get<IStorage>(urls.films)
  }

  getGenre(): Observable<IGenres> {
    return this.httpClient.get<IGenres>(urls.genres)
  }

  sortGenre(id: number, page: number = 1): Observable<IStorage> {
    return this.httpClient.get<IStorage>(`${urls.films}?with_genres=${id}`, {params: {page}})
  }

}
