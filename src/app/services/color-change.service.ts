import {Injectable} from '@angular/core';
import {StorageService} from "./storage.service";

@Injectable({
  providedIn: 'root'
})
export class ColorChangeService {

  constructor(private storageService :StorageService) {
  }
  changeColorTheme(className: string): void {
    const mainElement = document.getElementsByClassName(className)[0] as HTMLElement;

    this.storageService.colorTheme.subscribe(data => {
      if (data === 'light') {
        mainElement?.classList.remove('darkBg');
        mainElement?.classList.add('lightBg');
      } else {
        mainElement?.classList.remove('lightBg');
        mainElement?.classList.add('darkBg');
      }
    })
  }
}
