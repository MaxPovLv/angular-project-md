import {Component, OnInit} from '@angular/core';
import {ColorChangeService, StorageService} from "../../services";

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css']
})
export class MainLayoutComponent implements OnInit {

  constructor(private storageService: StorageService, private colorChangeService: ColorChangeService) {
  }

  ngOnInit(): void {
  }

  ngDoCheck(): void {
    const mainElement = document.getElementsByClassName('wrap')[0] as HTMLElement;
    const genresListElement = document.getElementsByClassName('lightBg')[0] as HTMLElement;

    this.storageService.colorTheme.subscribe(data => {
      if (data === 'light') {
        mainElement?.classList.remove('dark');
        mainElement?.classList.add('light');
        genresListElement?.classList.remove('darkBg');
        genresListElement?.classList.add('lightBg');

      } else {
        mainElement?.classList.remove('light');
        mainElement?.classList.add('dark');
        genresListElement?.classList.remove('lightBg');
        genresListElement?.classList.add('darkBg');
      }
    })

    this.colorChangeService.changeColorTheme('app-genres-list');
  }

}
