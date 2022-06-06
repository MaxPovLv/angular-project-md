import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HeaderComponent} from './components/header/header.component';
import {FilmComponent} from './components/film/film.component';
import {FilmsComponent} from './components/films/films.component';
import {MainLayoutComponent} from './layout/main-layout/main-layout.component';
import {FilmDetailComponent} from './components/film-detail/film-detail.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {MainInterceptor} from "./main.interceptor";
import {RouterModule} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";
import {FilmsStoreComponent} from './components/films-store/films-store.component';
import {GenresComponent} from './components/genres/genres.component';
import {PaginationComponent} from './components/pagination/pagination.component';
import {ReactiveFormsModule} from "@angular/forms";
import {SortGenreComponent} from './components/sort-genre/sort-genre.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FilmComponent,
    FilmsComponent,
    MainLayoutComponent,
    FilmDetailComponent,
    FilmsStoreComponent,
    GenresComponent,
    PaginationComponent,
    SortGenreComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule,
    ReactiveFormsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      multi: true,
      useClass: MainInterceptor
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
