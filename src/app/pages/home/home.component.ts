import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  
})
export class HomeComponent implements OnInit {
	hide = true;
	email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'Digite seu email';
    }

    return this.email.hasError('email') ? 'Email inválido' : '';
  }
  constructor() { }

  ngOnInit(): void {
  }

}