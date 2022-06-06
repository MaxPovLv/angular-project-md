import {Component, DoCheck, OnInit} from '@angular/core';
import {ColorChangeService} from "../../services";
import {FormControl, FormGroup} from "@angular/forms";
import {StorageService} from "../../services";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit,DoCheck {

  userForm: FormGroup;

  constructor( private colorChangeService: ColorChangeService,private storageService :StorageService) {
    this._createForm()
  }

  ngOnInit(): void {
  }
  ngDoCheck(): void {
    this.colorChangeService.changeColorTheme('header-cont');
  }
  _createForm(): void {
    this.userForm = new FormGroup({
      colorTheme: new FormControl('light'),
    })
  }

  changeColorTheme() {
    this.storageService.colorTheme.next(this.userForm.get('colorTheme')?.value);
  }

}
