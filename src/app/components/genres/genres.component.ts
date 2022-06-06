import {Component, OnInit} from '@angular/core';
import {ColorChangeService, FilmService, StorageService} from "../../services";
import {IGenre} from "../../interfaces";
import {Router} from "@angular/router";

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.css']
})
export class GenresComponent implements OnInit {
  genres: IGenre[];

  constructor(private filmService: FilmService,
              private colorChangeService: ColorChangeService,
              private storageService: StorageService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.filmService.getGenre().subscribe(({genres}) => {
      this.genres = genres;
      this.storageService.storage.next(genres)
    })
  }

  sortGenre(genre: IGenre) {
    this.router.navigate([genre.id])
  }

  ngDoCheck(): void {
    this.colorChangeService.changeColorTheme('container');
    this.colorChangeService.changeColorTheme('container');
  }
}
