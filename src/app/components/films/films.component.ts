import {Component, OnInit} from '@angular/core';
import {FilmService} from "../../services";
import {IFilm} from "../../interfaces";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {
  films: IFilm[];


  constructor(private filmService: FilmService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(({page}) => {
      this.filmService.getFilms(page || 1).subscribe(value => this.films = value.results)
    })
  }
}
