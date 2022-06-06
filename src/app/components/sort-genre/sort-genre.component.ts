import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {FilmService} from "../../services";
import {IFilm} from "../../interfaces";

@Component({
  selector: 'app-sort-genre',
  templateUrl: './sort-genre.component.html',
  styleUrls: ['./sort-genre.component.css']
})
export class SortGenreComponent implements OnInit {

  films: IFilm[]

  @Input()
  poster: string;
  filmDetails: IFilm

  constructor(private filmService: FilmService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(({page}) => {
      this.activatedRoute.params.subscribe(value => {
        this.filmService.sortGenre(value['genre'], page || 1).subscribe(({results}) => {
          this.films = results
        })
      })

    })
  }
}
