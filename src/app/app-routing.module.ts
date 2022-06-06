import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {MainLayoutComponent} from "./layout/main-layout/main-layout.component";
import {FilmDetailComponent} from "./components/film-detail/film-detail.component";
import {FilmsStoreComponent} from "./components/films-store/films-store.component";
import {SortGenreComponent} from "./components/sort-genre/sort-genre.component";

const routes: Routes = [
  {
    path: '', component: MainLayoutComponent, children: [
      {path: '', redirectTo: 'films', pathMatch: 'full'},
      {path: 'films', component: FilmsStoreComponent},
      {path: 'film-detail', component: FilmDetailComponent},
      {path: ':genre', component: SortGenreComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
