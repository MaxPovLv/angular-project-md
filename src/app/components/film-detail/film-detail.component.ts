import {Component, OnInit} from '@angular/core';
import {IFilm, IGenre} from "../../interfaces";
import {StorageService} from "../../services";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-film-detail',
  templateUrl: './film-detail.component.html',
  styleUrls: ['./film-detail.component.css']
})
export class FilmDetailComponent implements OnInit {

  filmDetails: IFilm;
  genres: IGenre[];
  genresById: IGenre[]

  constructor(private activatedRoute: ActivatedRoute,
              private storageService: StorageService) {
  }

  ngOnInit(): void {
    let {data} = history.state;
    this.activatedRoute.params.subscribe(() => {
      this.filmDetails = data
    })
    this.storageService.storage.subscribe(value =>this.genres = value)

    let arr = [] as IGenre[];
    for (let id of this.filmDetails.genre_ids) {
      this.genres.map(genre => {
        if (id === genre.id) {
          arr.push(genre)
        }
      });
      this.genresById = arr
    }
  }
}
