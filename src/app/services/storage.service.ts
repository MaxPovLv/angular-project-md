import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {IGenre} from "../interfaces";

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  storage = new BehaviorSubject<IGenre[]>([])

  colorTheme = new BehaviorSubject<string>('light');

  constructor() {
  }
}
