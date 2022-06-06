import {Component, Input, OnInit} from '@angular/core';
import {IFilm, IGenre} from "../../interfaces";
import {FilmService, StorageService} from "../../services";

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent implements OnInit {
  @Input()
  film: IFilm;
  genre: IGenre;
  genres: IGenre[];

  constructor(private filmService: FilmService,
              private storageService: StorageService) {
  }

  ngOnInit(): void {
    this.storageService.storage.subscribe(value => this.genres = value)
    for (let genre of this.genres) {
      this.film.genre_ids.map(id => {
        if (id === genre.id) {
          this.genre = genre
        }
      }
      );
    }
  }
}
